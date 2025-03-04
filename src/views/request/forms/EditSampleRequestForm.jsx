import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypes';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { getAllCustomer } from 'services/_api/customerRequest';
import {
  getServiceRequestsByID,
  putServiceRequests,
  postServiceRequestDocuments,
  deleteServiceRequestDocuments
} from 'services/_api/serviceRequest';
import {
  putSampleSubmissions,
  postSampleSubmissions,
  deleteSampleSubmissions,
  postSampleSubmisDetail,
  deleteSampleSubmisDetail
} from 'services/_api/sampleSubmissionsRequest';
import { handleUploadFiles, deleteFileFromFirebase } from 'services/_api/uploadFileRequest';
import { authenUser } from 'services/_api/authentication';

const EditSampleRequestForm = ({ userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { requestId: paramId } = useParams(); // ดึงจาก URL ถ้ามี
  const requestId = location.state?.id || paramId || null;
  const [step, setStep] = useState(1);
  const [initialFormValues, setInitialFormValues] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [companyList, setCompanyList] = useState([]);
  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const [spacialCon, setSpacialCon] = useState({});
  const [errorMessage, setErrorMessage] = useState(null); // เพิ่ม state สำหรับ error
  const [successMessage, setSuccessMessage] = useState(null); // เพิ่ม state สำหรับ success
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        userId = response.user.user_id;
        setUser(response.user);
      });
    }
  }, []);
  // ฟังก์ชันแปลงข้อมูล API ให้เข้ากับฟอร์ม
  const mapApiToFormValues = (apiData, company) => {
    console.log('company:', company);
    const submissions = apiData.sample_submissions || [];
    const firstSubmission = submissions[0] || {};
    return {
      user_id: userId,
      company_id: apiData.customer_id,
      analysisMethod: apiData.is_registration_analysis ? 'is_registration_analysis' : 'is_quality_check_analysis',
      notes: apiData.notes || '',
      sample_type_id: apiData.sample_type_id,
      fertilizerRecords: submissions.map((sub) => ({
        request_id: sub.request_id,
        fertilizerCategory: sub.is_single_fertilizer
          ? 'is_single_fertilizer'
          : sub.is_compound_fertilizer
            ? 'is_compound_fertilizer'
            : sub.is_mixed_fertilizer
              ? 'is_mixed_fertilizer'
              : 'is_secondary_nutrient_fertilizer',
        fertilizer_type_id: sub.fertilizer_type_id,
        color: sub.color || '',
        fertilizer_formula: sub.fertilizer_formula || '',
        common_name: sub.common_name || '',
        trade_name: sub.trade_name || '',
        trademark: sub.trademark || '',
        manufacturer: sub.manufacturer || '',
        manufacturer_country: sub.manufacturer_country || '',
        supplier: sub.supplier || '',
        supplier_country: sub.supplier_country || '',
        composition: sub.composition || '',
        sample_weight: sub.sample_weight ? parseFloat(sub.sample_weight) : null,
        sample_weight_unit: sub.sample_weight_unit ? sub.sample_weight_unit.replace('.', '') : '',
        packaging_id: sub.packaging_id,
        packaging_other: sub.packaging_other || '',
        submission_id: sub.submission_id,
        test_items: sub.sample_submission_details.map((detail) => ({
          test_item_id: detail.test_item_id,
          test_percentage: detail.test_percentage || ''
        }))
      })),
      reportMethod: [
        apiData.sr_is_self_pickup ? 'is_self_pickup' : null,
        apiData.sr_pdf_email ? 'pdf_email' : null,
        apiData.sr_is_mail_delivery ? 'is_mail_delivery' : null
      ].filter(Boolean),
      email: apiData.sr_pdf_email || '',
      sameAddress: apiData.sr_mail_delivery_location === company.document_address,
      sr_mail_delivery_location: apiData.sr_mail_delivery_location || '',
      phone: firstSubmission.phone || '', // ใช้ submission แรกเป็น default
      sampleDisposal: firstSubmission.is_lab_dispose_sample
        ? 'is_lab_dispose_sample'
        : firstSubmission.is_collect_within_3_months
          ? 'is_collect_within_3_months'
          : 'is_return_sample',
      test_all_items: firstSubmission.test_all_items !== null ? !!firstSubmission.test_all_items : true,
      submitted_by: firstSubmission.submitted_by || '',
      submitted_date: firstSubmission.submission_date ? new Date(firstSubmission.submission_date).toISOString().split('T')[0] : '',
      submitted_phone: firstSubmission.phone || '',
      files: apiData.service_request_documents.map((doc) => ({
        name: doc.file_name,
        path: doc.file_path,
        document_id: doc.document_id
      }))
    };
  };

  // โหลดข้อมูลจาก API
  const getServiceRequest = async (id) => {
    try {
      const company = await getCompanyList();
      const response = await getServiceRequestsByID(id);
      console.log('getServiceRequest:', response);
      console.log(
        'company:',
        company.find((x) => x.company_id === response.customer_id)
      );
      const mappedValues = mapApiToFormValues(
        response,
        company.find((x) => x.company_id === response.customer_id)
      );
      setInitialFormValues(mappedValues);
      setOriginalData(response);
    } catch (error) {
      console.log('Error fetching service request:', error);
      setErrorMessage('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่');
    }
  };

  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyList = async () => {
    try {
      const response = await getAllCustomer();
      setCompanyList(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (requestId) {
      getServiceRequest(requestId);
      getFertilizerTypes();
    } else {
      setErrorMessage('ไม่พบ Request ID');
    }
  }, [requestId, userId, navigate]);

  // Validation schemas (เหมือนเดิม)
  const stepValidationSchemas = [
    Yup.object({
      company_id: Yup.string().required('กรุณาเลือกบริษัท').nullable(),
      analysisMethod: Yup.string()
        .required('กรุณาเลือกวัตถุประสงค์การขอใช้บริการ')
        .oneOf(['is_registration_analysis', 'is_quality_check_analysis'], 'กรุณาเลือกวัตถุประสงค์ที่ถูกต้อง'),
      notes: Yup.string().max(500, 'ความต้องการอื่นต้องไม่เกิน 500 ตัวอักษร').optional()
    }),
    Yup.object({
      fertilizerRecords: Yup.array()
        .min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
        .of(
          Yup.object({
            fertilizerCategory: Yup.string()
              .required('กรุณาเลือกประเภทของปุ๋ย')
              .oneOf(
                ['is_single_fertilizer', 'is_compound_fertilizer', 'is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'],
                'กรุณาเลือกประเภทปุ๋ยที่ถูกต้อง'
              ),
            fertilizer_type_id: Yup.number().required('กรุณาเลือกประเภทลักษณะปุ๋ย').nullable(),
            packaging_id: Yup.number().required('กรุณาเลือกภาชนะบรรจุ').nullable(),
            color: Yup.string().required('กรุณากรอกสี'),
            fertilizer_formula: Yup.string().required('กรุณากรอกสูตรปุ๋ย'),
            common_name: Yup.string().required('กรุณากรอกชื่อสามัญ'),
            trade_name: Yup.string().required('กรุณากรอกชื่อการค้า'),
            trademark: Yup.string().required('กรุณากรอกเครื่องหมายการค้า'),
            manufacturer: Yup.string().required('กรุณากรอกชื่อผู้ผลิต'),
            manufacturer_country: Yup.string().required('กรุณาเลือกประเทศของผู้ผลิต'),
            supplier: Yup.string().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
            supplier_country: Yup.string().required('กรุณาเลือกประเทศของผู้จัดจำหน่าย'),
            composition: Yup.string().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
            sample_weight: Yup.number().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข'),
            sample_weight_unit: Yup.string().required('กรุณาเลือกหน่วย').oneOf(['g', 'kg', 'oz', 'ml', 'L'], 'กรุณาเลือกหน่วยที่ถูกต้อง'),
            test_items: Yup.array()
              .min(1, 'กรุณาเลือกอย่างน้อยหนึ่งรายการทดสอบ')
              .of(
                Yup.object({
                  test_item_id: Yup.number().required('ต้องระบุรายการทดสอบ'),
                  test_percentage: Yup.string().test('requires-percentage', 'กรุณากรอกเปอร์เซ็นต์สำหรับรายการนี้', function (value) {
                    const testItemId = this.parent.test_item_id;
                    const requiresPercentage = [1, 3, 5, 7, 10, 15].includes(testItemId);
                    if (requiresPercentage) {
                      return value !== undefined && value !== null && value !== '' && /^\d+(\.\d+)?$/.test(value);
                    }
                    return true;
                  })
                })
              )
          })
        )
    }),
    Yup.object({
      reportMethod: Yup.array()
        .min(1, 'กรุณาเลือกวิธีการรับรายงานอย่างน้อยหนึ่งวิธี')
        .of(Yup.string().oneOf(['is_self_pickup', 'pdf_email', 'is_mail_delivery'], 'วิธีการรับรายงานไม่ถูกต้อง')),
      email: Yup.string().test('email-required', 'กรุณากรอกอีเมลสำหรับรับผลตรวจ', function (value) {
        const reportMethod = this.parent.reportMethod;
        if (Array.isArray(reportMethod) && reportMethod.includes('pdf_email')) {
          return Yup.string().email('กรุณากรอกอีเมลที่ถูกต้อง').isValidSync(value);
        }
        return true;
      }),
      sameAddress: Yup.boolean(),
      sr_mail_delivery_location: Yup.string().test('address-required', 'กรุณากรอกที่อยู่จัดส่ง', function (value) {
        const { reportMethod, sameAddress } = this.parent;
        if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
          return value !== undefined && value !== null && value.trim() !== '';
        }
        return true;
      }),
      phone: Yup.string().test('phone-required', 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก', function (value) {
        const { reportMethod, sameAddress } = this.parent;
        if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
          return value !== undefined && value !== null && value.trim() !== '' && /^\d{9,10}$/.test(value);
        }
        return true;
      }),
      sampleDisposal: Yup.string()
        .required('กรุณาเลือกวิธีการจำหน่ายตัวอย่าง')
        .oneOf(['is_lab_dispose_sample', 'is_collect_within_3_months', 'is_return_sample'], 'วิธีการจำหน่ายตัวอย่างไม่ถูกต้อง'),
      test_all_items: Yup.boolean().required('กรุณาเลือกขอบเขตการทดสอบ'),
      submitted_by: Yup.string().required('กรุณากรอกชื่อผู้ส่งตัวอย่าง'),
      submitted_phone: Yup.string()
        .required('กรุณากรอกเบอร์โทรศัพท์ผู้ส่งตัวอย่าง')
        .matches(/^\d{9,10}$/, 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก'),
      submitted_date: Yup.string().required('กรุณาเลือกวันที่ส่ง'),
      files: Yup.array().test('files-required', 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์', function (value) {
        return value && value.length > 0; // ต้องมีไฟล์อย่างน้อย 1
      })
    })
  ];

  const currentValidationSchema = stepValidationSchemas[step - 1];

  const handleNext = (values, { setErrors }) => {
    console.log('currentValidationSchema values:', values);
    currentValidationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        console.log('step:', step);
        setStep(step + 1);
      })
      .catch((err) => {
        console.log('Caught error:', err);
        const formErrors = {};
        if (err.name === 'ValidationError' && Array.isArray(err.inner)) {
          err.inner.forEach((error) => {
            formErrors[error.path] = error.message;
          });
        } else {
          formErrors['general'] = err.message || 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล';
        }
        setErrors(formErrors);
        console.log('Validation errors:', formErrors);
      });
  };

  const handlePrev = () => setStep(step - 1);

  // ฟังก์ชันเปรียบเทียบข้อมูลเก่าและใหม่
  const hasStep1Changed = (original, updated) => {
    return (
      original.customer_id !== updated.company_id ||
      original.is_registration_analysis !== (updated.analysisMethod === 'is_registration_analysis' ? 1 : 0) ||
      original.is_quality_check_analysis !== (updated.analysisMethod === 'is_quality_check_analysis' ? 1 : 0) ||
      original.sr_is_mail_delivery !== (updated.analysisMethod === 'sr_is_mail_delivery' ? 1 : 0) ||
      original.sr_is_self_pickup !== (updated.analysisMethod === 'sr_is_self_pickup' ? 1 : 0) ||
      original.sr_pdf_email !== updated.sr_pdf_email ||
      original.sr_mail_delivery_location !== updated.sr_mail_delivery_location ||
      original.notes !== updated.notes
    );
  };

  const compareTestItems = (originalItems, updatedItems) => {
    if (originalItems.length !== updatedItems.length) return true;
    return originalItems.some((orig, index) => {
      const upd = updatedItems[index];
      return orig.test_item_id !== upd.test_item_id || orig.test_percentage !== upd.test_percentage;
    });
  };

  const hasFertilizerRecordChanged = (original, updated) => {
    const fieldsToCompare = [
      'fertilizerCategory',
      'fertilizer_type_id',
      'color',
      'fertilizer_formula',
      'common_name',
      'trade_name',
      'trademark',
      'manufacturer',
      'manufacturer_country',
      'supplier',
      'supplier_country',
      'composition',
      'sample_weight',
      'sample_weight_unit',
      'packaging_id',
      'packaging_other'
    ];
    return (
      fieldsToCompare.some((field) => original[field] !== updated[field]) ||
      compareTestItems(original.test_items || [], updated.test_items || [])
    );
  };

  const updateSampleSubmissions = async (originalSubmissions, updatedSubmissions, requestId, values) => {
    // หาค่า submission ที่ถูกลบ
    const deletedSubmissions = originalSubmissions.filter(
      (orig) => !updatedSubmissions.some((upd) => upd.submission_id === orig.submission_id)
    );

    // ลบ submission ที่ถูกลบออก
    const deleteSubmissionPromises = deletedSubmissions.map((deleted) =>
      deleted.submission_id ? deleteSampleSubmissions(deleted.submission_id) : Promise.resolve()
    );
    await Promise.all(deleteSubmissionPromises);
    deletedSubmissions.forEach((deleted) => console.log(`Deleted sample_submission ID: ${deleted.submission_id}`));

    const updatePromises = updatedSubmissions.map(async (record) => {
      const sampleSubmissionData = {
        request_id: requestId,
        is_single_fertilizer: record.fertilizerCategory === 'is_single_fertilizer' ? 1 : 0,
        is_compound_fertilizer: record.fertilizerCategory === 'is_compound_fertilizer' ? 1 : 0,
        is_mixed_fertilizer: record.fertilizerCategory === 'is_mixed_fertilizer' ? 1 : 0,
        is_secondary_nutrient_fertilizer: record.fertilizerCategory === 'is_secondary_nutrient_fertilizer' ? 1 : 0,
        fertilizer_type_id: record.fertilizer_type_id,
        color: record.color,
        fertilizer_formula: record.fertilizer_formula,
        common_name: record.common_name,
        trade_name: record.trade_name,
        trademark: record.trademark,
        manufacturer: record.manufacturer,
        manufacturer_country: record.manufacturer_country,
        supplier: record.supplier,
        supplier_country: record.supplier_country,
        composition: record.composition,
        sample_weight: record.sample_weight ? String(record.sample_weight) : null,
        sample_weight_unit: record.sample_weight_unit,
        packaging_id: record.packaging_id,
        packaging_other: record.packaging_other,
        test_all_items: values.test_all_items ? 1 : 0,
        is_lab_dispose_sample: values.sampleDisposal === 'is_lab_dispose_sample' ? 1 : 0,
        is_collect_within_3_months: values.sampleDisposal === 'is_collect_within_3_months' ? 1 : 0,
        is_return_sample: values.sampleDisposal === 'is_return_sample' ? 1 : 0,
        submitted_by: values.submitted_by,
        phone: values.submitted_phone,
        submission_date: values.submitted_date
      };

      console.log('sampleSubmissionData:', sampleSubmissionData);

      if (record.submission_id) {
        const original = originalSubmissions.find((o) => o.submission_id === record.submission_id);
        if (hasFertilizerRecordChanged(original, record)) {
          await putSampleSubmissions(sampleSubmissionData, record.submission_id);
          console.log(`Updated sample_submission ID: ${record.submission_id}`);
        }

        // ตรวจสอบการเปลี่ยนแปลงใน test_items
        const originalTestItems = original.sample_submission_details || [];
        const updatedTestItems = record.test_items || [];

        // หา test_items ที่ถูกลบ
        const deletedTestItems = originalTestItems.filter((orig) => !updatedTestItems.some((upd) => upd.detail_id === orig.detail_id));
        const deleteTestItemPromises = deletedTestItems.map((deleted) =>
          deleted.detail_id ? deleteSampleSubmisDetail(deleted.detail_id) : Promise.resolve()
        );
        await Promise.all(deleteTestItemPromises);
        deletedTestItems.forEach((deleted) => console.log(`Deleted test_item ID: ${deleted.detail_id}`));

        // ตรวจสอบว่ามีการเปลี่ยนแปลงใน test_items หรือไม่
        const hasTestItemsChanged =
          originalTestItems.length !== updatedTestItems.length ||
          originalTestItems.some((orig) =>
            updatedTestItems.some((upd) => upd.detail_id === orig.detail_id && upd.test_percentage !== orig.test_percentage)
          ) ||
          updatedTestItems.some((upd) => !upd.detail_id);

        if (hasTestItemsChanged) {
          // ลบ test_items เดิมทั้งหมดก่อน
          const deleteAllTestItemsPromises = originalTestItems.map((item) =>
            item.detail_id ? deleteSampleSubmisDetail(item.detail_id) : Promise.resolve()
          );
          await Promise.all(deleteAllTestItemsPromises);
          console.log(`Cleared all existing test_items for submission ID: ${record.submission_id}`);

          // เพิ่ม test_items ใหม่ทั้งหมด
          if (updatedTestItems.length > 0) {
            const newTestItemData = {
              submission_id: record.submission_id,
              test_items: updatedTestItems.map((item) => ({
                test_item_id: item.test_item_id,
                test_percentage: item.test_percentage
              }))
            };
            const responseTestItem = await postSampleSubmisDetail(newTestItemData);
            console.log(`Updated test_items for submission ID: ${record.submission_id}`, responseTestItem);
          }
        }
      } else {
        // เพิ่ม submission ใหม่
        const responseSample = await postSampleSubmissions(sampleSubmissionData);
        console.log(`Created new sample_submission ID: ${responseSample.submission_id}`);

        // บันทึก test_items สำหรับ submission ใหม่
        if (responseSample.submission_id && record.test_items && record.test_items.length > 0) {
          const sampleDataDetail = {
            submission_id: responseSample.submission_id,
            test_items: record.test_items.map((item) => ({
              test_item_id: item.test_item_id,
              test_percentage: item.test_percentage
            }))
          };
          const responseTestItem = await postSampleSubmisDetail(sampleDataDetail);
          console.log('responseTestItem:', responseTestItem);
        }
      }
    });

    await Promise.all(updatePromises);
  };

  const handleFileChanges = async (originalFiles, updatedFiles, requestId, userId) => {
    // อัปโหลดไฟล์ใหม่เท่านั้น (การลบถูกจัดการใน Step3)
    const newFiles = updatedFiles.filter((file) => !file.document_id); // เฉพาะไฟล์ที่ยังไม่มี document_id
    let uploadResults = [];
    if (newFiles.length > 0) {
      uploadResults = await handleUploadFiles(newFiles, 'service-requests', 'service_'); // ปรับ folder และ name ตามความเหมาะสม
      for (const fileResult of uploadResults) {
        const extractedFileName = fileResult.fileName.split('/').pop();
        const documentData = {
          request_id: requestId,
          uploaded_by: userId,
          file_name: extractedFileName,
          file_path: fileResult.fileName
        };
        await postServiceRequestDocuments(documentData);
        console.log(`Added new document: ${extractedFileName}`);
      }
    }

    // ไม่จัดการการลบไฟล์ที่นี่ เพราะย้ายไป Step3
    return uploadResults;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('Form Values from All Steps:', values);

    try {
      // Step 1: อัปเดต service_requests
      const step1 = {
        user_id: values.user_id,
        customer_id: values.company_id,
        is_registration_analysis: values.analysisMethod === 'is_registration_analysis' ? 1 : 0,
        is_quality_check_analysis: values.analysisMethod === 'is_quality_check_analysis' ? 1 : 0,
        sr_is_self_pickup: values.reportMethod.includes('is_self_pickup') ? 1 : 0,
        sr_pdf_email: values.reportMethod.includes('pdf_email') ? values.email : '',
        sr_is_mail_delivery: values.reportMethod.includes('is_self_pickup') ? 1 : 0,
        sr_mail_delivery_location: values.sr_mail_delivery_location,
        notes: values.notes
      };
      console.log('step1 :', step1);
      console.log('originalData :', originalData);
      console.log('hasStep1Changed(originalData, values) :', hasStep1Changed(originalData, values));
      if (hasStep1Changed(originalData, values)) {
        await putServiceRequests(step1, requestId);
        console.log('Updated service_requests');
      }

      // Step 2: อัปเดต sample_submissions
      try {
        await updateSampleSubmissions(originalData.sample_submissions, values.fertilizerRecords, requestId, values);
        console.log('Updated sample_submissions');
      } catch (submissionError) {
        console.error('Failed to update sample_submissions:', submissionError);
        setErrorMessage('เกิดข้อผิดพลาดในการอัปเดตข้อมูลตัวอย่าง');
        throw submissionError;
      }

      // Step 3 & 4: จัดการไฟล์
      // if (values.user_id === 999) {
      try {
        await handleFileChanges(originalData.service_request_documents, values.files, requestId);
        console.log('Updated files and documents');
      } catch (fileError) {
        console.error('Failed to update files:', fileError);
        setErrorMessage('เกิดข้อผิดพลาดในการจัดการไฟล์');
        throw fileError;
      }
      // }

      setSuccessMessage('บันทึกการแก้ไขสำเร็จ');
      setErrorMessage(null);
      setSubmitting(false);
      // setTimeout(() => navigate('/user/request/'), 1000);
    } catch (error) {
      console.error('Error updating form:', error);
      if (!errorMessage) setErrorMessage('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      setSubmitting(false);
    }
  };

  const handleGetCusSpacialCon = async (companyId) => {
    try {
      const response = await getCustomerSpecialConditionsByID(companyId);
      setSpacialCon(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error(error);
      setSpacialCon([]);
    }
  };

  if (errorMessage) return <div className="text-danger">{errorMessage}</div>;
  if (!initialFormValues) return <div>Loading...</div>;

  return (
    <Formik initialValues={initialFormValues} validationSchema={currentValidationSchema} onSubmit={handleSubmit} enableReinitialize>
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit: formikHandleSubmit }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (step === 3) formikHandleSubmit(e);
          }}
        >
          <Card>
            <Card.Header>
              <h5>แก้ไขใบนำส่งตัวอย่าง - Request ID: {requestId}</h5>
            </Card.Header>
            <Card.Body>
              <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                <li
                  className={`form-stepper-list text-center ${
                    step === 1 ? 'form-stepper-active' : step > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="1"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 1 ? <i className="feather icon-check" /> : '1'}</span>
                    </span>
                    <div className="label">ข้อมูลบริษัท</div>
                  </a>
                </li>
                <li
                  className={`form-stepper-list text-center ${
                    step === 2 ? 'form-stepper-active' : step > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="2"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 2 ? <i className="feather icon-check" /> : '2'}</span>
                    </span>
                    <div className="label">ข้อมูลปุ๋ยเคมี</div>
                  </a>
                </li>
                <li
                  className={`form-stepper-list text-center ${
                    step === 3 ? 'form-stepper-active' : step > 3 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="3"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 3 ? <i className="feather icon-check" /> : '3'}</span>
                    </span>
                    <div className="label">ที่อยู่การจัดส่ง</div>
                  </a>
                </li>
              </ul>

              {step === 1 && (
                <Step1
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  spacialCon={spacialCon}
                  handleGetCusSpacialCon={handleGetCusSpacialCon}
                />
              )}
              {step === 2 && (
                <Step2
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  companyData={companyList}
                  fertilizerTypes={fertilizerTypes}
                />
              )}
              {step === 3 && (
                <Step3
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  companyData={companyList}
                />
              )}
              {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
              {successMessage && <div className="text-success mt-3">{successMessage}</div>}
            </Card.Body>
            <Card.Footer className="text-start">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrev}>
                  <i className="feather icon-arrow-left" /> ย้อนกลับ
                </Button>
              )}
              {step < 3 ? (
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext(values, { setFieldValue });
                  }}
                >
                  ถัดไป <i className="feather icon-arrow-right" style={{ marginLeft: 12, marginRight: 0 }} />
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  <i className="feather icon-save" /> แก้ไข
                </Button>
              )}
              <Button variant="danger" onClick={() => navigate('/user/request/')}>
                <i className="feather icon-corner-up-left" /> ยกเลิก
              </Button>
            </Card.Footer>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default EditSampleRequestForm;
