import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { getCustomerByID } from 'services/_api/customerRequest';
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
import StepForm from './Steps/StepForm';

const EditSampleRequestForm = ({ userId: propUserId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { requestId: paramId } = useParams();
  const requestId = location.state?.id || paramId || null;

  const [initialFormValues, setInitialFormValues] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [company, setCompany] = useState(null); // เปลี่ยนจาก companyList เป็น company เดียว
  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const [spacialCon, setSpacialCon] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userId, setUserId] = useState(propUserId); // ใช้ propUserId เป็นค่าเริ่มต้น

  // โหลดข้อมูลผู้ใช้จาก token
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token)
        .then((response) => {
          setUserId(response.user.user_id); // อัปเดต userId จาก response
        })
        .catch((error) => {
          console.error('Error authenticating user:', error);
          setErrorMessage('ไม่สามารถตรวจสอบผู้ใช้ได้');
        });
    }
  }, []);

  // แปลงข้อมูล API เป็นฟอร์ม
  const mapApiToFormValues = (apiData, companyData) => {
    console.log('apiData:', apiData);

    const submissions = apiData.sample_submissions || [];
    const firstSubmission = submissions[0] || {};
    submissions.map((sub) => {
      console.log('sub.mail_delivery_location:', sub.mail_delivery_location);
      console.log('companyData?.document_address:', companyData?.document_address);
      console.log(
        'sub.mail_delivery_location === companyData?.document_address:',
        sub.mail_delivery_location === companyData?.document_address
      );
    });

    return {
      user_id: userId || apiData.user_id,
      company_id: apiData.customer_id,
      analysisMethod: apiData.is_registration_analysis ? 'is_registration_analysis' : 'is_quality_check_analysis',
      notes: apiData.notes || '',
      sample_type_id: apiData.sample_type_id,
      reportMethod: [
        apiData.sr_is_self_pickup ? 'is_self_pickup' : null,
        apiData.sr_pdf_email ? 'pdf_email' : null,
        apiData.sr_is_mail_delivery ? 'is_mail_delivery' : null
      ].filter(Boolean),
      email: apiData.sr_pdf_email || '',
      sr_mail_delivery_location: apiData.sr_mail_delivery_location || '',
      fertilizerRecords: submissions.map((sub) => ({
        request_id: sub.request_id,
        fertilizerCategory: sub.is_single_fertilizer
          ? 'is_single_fertilizer'
          : sub.is_compound_fertilizer
            ? 'is_compound_fertilizer'
            : sub.is_mixed_fertilizer
              ? 'is_mixed_fertilizer'
              : sub.is_secondary_nutrient_fertilizer
                ? 'is_secondary_nutrient_fertilizer'
                : null,
        fertilizer_main_id: sub.fertilizer_main_id,
        fertilizer_type_id: sub.fertilizer_type_id,
        fertilizer_other: sub.fertilizer_other,
        color: sub.color || '',
        formula_id: sub.formula_id,
        fertilizer_formula: sub.fertilizer_formula || '',
        common_name: sub.common_name || '',
        trade_name: sub.trade_name || '',
        trademark: sub.trademark || '',
        manufacturer: sub.manufacturer || '',
        manufacturer_country: sub.manufacturer_country || 'TH',
        supplier: sub.supplier || '',
        supplier_country: sub.supplier_country || 'TH',
        composition: sub.composition || '',
        sample_weight: sub.sample_weight ? parseFloat(sub.sample_weight) : null,
        sample_weight_unit: sub.sample_weight_unit || '',
        packaging_id: sub.packaging_id || null,
        packaging_other: sub.packaging_other || '',
        submission_id: sub.submission_id,
        test_items: (sub.sample_submission_details || []).map((detail) => ({
          test_item_id: detail.test_item_id,
          test_percentage: detail.test_percentage || ''
        })),
        reportMethod: [
          sub.is_self_pickup ? 'is_self_pickup' : null,
          sub.pdf_email ? 'pdf_email' : null,
          sub.is_mail_delivery ? 'is_mail_delivery' : null
        ].filter(Boolean),
        email: sub.pdf_email || '',
        sameAddress: sub.mail_delivery_location === companyData?.document_address,
        mail_delivery_location: sub.mail_delivery_location || '',
        phone: firstSubmission.phone || '',
        sampleDisposal: firstSubmission.is_lab_dispose_sample
          ? 'is_lab_dispose_sample'
          : firstSubmission.is_collect_within_3_months
            ? 'is_collect_within_3_months'
            : 'is_return_sample',
        test_all_items: firstSubmission.test_all_items !== null ? !!firstSubmission.test_all_items : true,
        submitted_by: firstSubmission.submitted_by || '',
        submitted_date: firstSubmission.submission_date ? new Date(firstSubmission.submission_date).toISOString().split('T')[0] : '',
        submitted_phone: firstSubmission.phone || '',
        other_requirements: firstSubmission.other_requirements
      })),
      files: (apiData.service_request_documents || []).map((doc) => ({
        name: doc.file_name,
        path: doc.file_path,
        document_id: doc.document_id
      }))
    };
  };
  // โหลดข้อมูลจาก API
  const getServiceRequest = async (id) => {
    try {
      const response = await getServiceRequestsByID(id);
      const companyData = await getCustomerByID(response.customer_id);
      console.log('companyData :', companyData);
      setCompany(companyData);
      const mappedValues = mapApiToFormValues(response, companyData);
      setInitialFormValues(mappedValues);
      setOriginalData(response);
      // โหลด special conditions
      await handleGetCusSpacialCon(response.customer_id);
    } catch (error) {
      console.error('Error fetching service request:', error);
      setErrorMessage('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่');
    }
  };

  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.error('Error fetching fertilizer types:', error);
    }
  };

  useEffect(() => {
    if (requestId && userId) {
      getServiceRequest(requestId);
      getFertilizerTypes();
    } else if (!requestId) {
      setErrorMessage('ไม่พบ Request ID');
    }
  }, [requestId, userId]);

  const validationSchema = Yup.object({
    analysisMethod: Yup.string().test('analysis-method-required', 'กรุณาเลือกวัตถุประสงค์การขอใช้บริการ', function (value) {
      const { sample_type_id } = this.options.context;
      if (sample_type_id === 1) {
        return value && ['is_registration_analysis', 'is_quality_check_analysis'].includes(value);
      }
      return true;
    }),
    notes: Yup.string().notRequired(),
    fertilizerRecords: Yup.array()
      .min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
      .of(
        Yup.object({
          fertilizer_type_id: Yup.number().required('กรุณาเลือกประเภทลักษณะปุ๋ย').typeError('กรุณาเลือกประเภทลักษณะปุ๋ย'),
          packaging_id: Yup.number().required('กรุณาเลือกภาชนะบรรจุ').typeError('กรุณาเลือกภาชนะบรรจุ'),
          color: Yup.string().required('กรุณากรอกสี'),
          fertilizer_formula: Yup.string().required('กรุณากรอกสูตรปุ๋ย'),
          common_name: Yup.string().required('กรุณากรอกชื่อสามัญ'),
          trade_name: Yup.string().required('กรุณากรอกชื่อการค้า'),
          trademark: Yup.string().required('กรุณากรอกเครื่องหมายการค้า'),
          manufacturer: Yup.string().required('กรุณากรอกชื่อผู้ผลิต'),
          manufacturer_country: Yup.string().required('กรุณากรอกประเทศของผู้ผลิต'),
          supplier: Yup.string().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
          supplier_country: Yup.string().required('กรุณากรอกประเทศของผู้จัดจำหน่าย'),
          composition: Yup.string().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
          sample_weight: Yup.number().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข').positive('ปริมาณต้องมากกว่า 0'),
          sample_weight_unit: Yup.string().required('กรุณากรอกหน่วย')
        })
      ),
    files: Yup.array().min(1, 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์').required('กรุณาอัปโหลดเอกสาร')
  });

  // ฟังก์ชันเปรียบเทียบและอัปเดตข้อมูล
  const hasStep1Changed = (original, updated) => {
    return (
      original.customer_id !== updated.company_id ||
      original.is_registration_analysis !== (updated.analysisMethod === 'is_registration_analysis' ? 1 : 0) ||
      original.is_quality_check_analysis !== (updated.analysisMethod === 'is_quality_check_analysis' ? 1 : 0) ||
      original.sample_type_id !== updated.sample_type_id ||
      original.sr_is_self_pickup !== ((updated.reportMethod || []).includes('is_self_pickup') ? 1 : 0) ||
      original.sr_pdf_email !== ((updated.reportMethod || []).includes('pdf_email') ? updated.email : '') ||
      original.sr_is_mail_delivery !== ((updated.reportMethod || []).includes('is_mail_delivery') ? 1 : 0) ||
      // original.sr_mail_delivery_location !== updated.mail_delivery_location ||
      original.notes !== updated.notes
    );
  };

  const hasFertilizerRecordChanged = (original, updated) => {
    const fieldsToCompare = [
      'fertilizerCategory',
      'fertilizer_main_id',
      'fertilizer_type_id',
      'color',
      'formula_id',
      'fertilizer_formula',
      'common_name',
      'trade_name',
      'trademark',
      'manufacturer',
      'manufacturer_country',
      'supplier',
      'supplier_guest_country',
      'composition',
      'sample_weight',
      'sample_weight_unit',
      'packaging_id',
      'packaging_other',
      'test_all_items',
      'sampleDisposal',
      'submitted_by',
      'submitted_phone',
      'submitted_date'
    ];
    const originalTestItems = (original.sample_submission_details || []).map((item) => ({
      test_item_id: item.test_item_id,
      test_percentage: item.test_percentage
    }));
    return (
      fieldsToCompare.some((field) => original[field] !== updated[field]) ||
      JSON.stringify(originalTestItems) !== JSON.stringify(updated.test_items)
    );
  };

  const updateSampleSubmissions = async (originalSubmissions, updatedSubmissions, requestId, values) => {
    const deletedSubmissions = originalSubmissions.filter(
      (orig) => !updatedSubmissions.some((upd) => upd.submission_id === orig.submission_id)
    );
    await Promise.all(deletedSubmissions.map((deleted) => deleteSampleSubmissions(deleted.submission_id)));

    const updatePromises = updatedSubmissions.map(async (record) => {
      const sampleSubmissionData = {
        request_id: requestId,
        is_single_fertilizer: record.fertilizerCategory === 'is_single_fertilizer' ? 1 : 0,
        is_compound_fertilizer: record.fertilizerCategory === 'is_compound_fertilizer' ? 1 : 0,
        is_mixed_fertilizer: record.fertilizerCategory === 'is_mixed_fertilizer' ? 1 : 0,
        is_secondary_nutrient_fertilizer: record.fertilizerCategory === 'is_secondary_nutrient_fertilizer' ? 1 : 0,
        fertilizer_main_id: record.fertilizer_main_id,
        fertilizer_type_id: record.fertilizer_type_id,
        fertilizer_other: record.fertilizer_other,
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
        sample_weight: String(record.sample_weight),
        sample_weight_unit: record.sample_weight_unit,
        packaging_id: record.packaging_id,
        packaging_other: record.packaging_other,
        is_self_pickup: (record.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
        pdf_email: (record.reportMethod || []).includes('pdf_email') ? record.email : '',
        is_mail_delivery: (record.reportMethod || []).includes('is_mail_delivery') ? 1 : 0,
        mail_delivery_location: record.mail_delivery_location || '-',
        test_all_items: record.test_all_items ? 1 : 0,
        is_lab_dispose_sample: record.sampleDisposal === 'is_lab_dispose_sample' ? 1 : 0,
        is_collect_within_3_months: record.sampleDisposal === 'is_collect_within_3_months' ? 1 : 0,
        is_return_sample: record.sampleDisposal === 'is_return_sample' ? 1 : 0,
        submitted_by: record.submitted_by,
        phone: record.submitted_phone,
        submission_date: record.submitted_date,
        formula_id: record.formula_id,
        other_requirements: record.other_requirements
      };

      if (record.submission_id) {
        const original = originalSubmissions.find((o) => o.submission_id === record.submission_id);
        if (hasFertilizerRecordChanged(original, record)) {
          await putSampleSubmissions(sampleSubmissionData, record.submission_id);
        }

        const originalTestItems = original.sample_submission_details || [];
        const updatedTestItems = record.test_items || [];
        const deletedTestItems = originalTestItems.filter(
          (orig) => !updatedTestItems.some((upd) => upd.test_item_id === orig.test_item_id && upd.test_percentage === orig.test_percentage)
        );
        await Promise.all(deletedTestItems.map((item) => deleteSampleSubmisDetail(item.detail_id)));

        const newTestItems = updatedTestItems.filter(
          (upd) => !originalTestItems.some((orig) => orig.test_item_id === upd.test_item_id && orig.test_percentage === upd.test_percentage)
        );
        if (newTestItems.length > 0) {
          await postSampleSubmisDetail({
            submission_id: record.submission_id,
            test_items: newTestItems
          });
        }
      } else {
        const response = await postSampleSubmissions(sampleSubmissionData);
        if (record.test_items.length > 0) {
          await postSampleSubmisDetail({
            submission_id: response.submission_id,
            test_items: record.test_items
          });
        }
      }
    });
    await Promise.all(updatePromises);
  };
  const handleFileChanges = async (originalFiles, updatedFiles, requestId) => {
    const deletedFiles = originalFiles.filter((orig) => !updatedFiles.some((upd) => upd.document_id === orig.document_id));
    await Promise.all(
      deletedFiles.map(async (file) => {
        await deleteFileFromFirebase(file.file_path);
        await deleteServiceRequestDocuments(file.document_id);
      })
    );

    const newFiles = updatedFiles.filter((file) => !file.document_id);
    if (newFiles.length > 0) {
      const uploadResults = await handleUploadFiles(newFiles, 'service-requests', 'service_');
      await Promise.all(
        uploadResults.map((fileResult) => {
          const fileName = fileResult.fileName.split('/').pop();
          return postServiceRequestDocuments({
            request_id: requestId,
            uploaded_by: userId,
            file_name: fileName,
            file_path: fileResult.fileName
          });
        })
      );
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('values:', values);
    try {
      const step1 = {
        user_id: values.user_id,
        customer_id: values.company_id,
        is_registration_analysis: values.analysisMethod === 'is_registration_analysis' ? 1 : 0,
        is_quality_check_analysis: values.analysisMethod === 'is_quality_check_analysis' ? 1 : 0,
        sample_type_id: values.sample_type_id,
        sr_is_self_pickup: (values.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
        sr_pdf_email: (values.reportMethod || []).includes('pdf_email') ? values.email : '',
        sr_is_mail_delivery: (values.reportMethod || []).includes('is_mail_delivery') ? 1 : 0,
        sr_mail_delivery_location: '-',
        notes: values.notes
      };

      if (hasStep1Changed(originalData, values)) {
        await putServiceRequests(step1, requestId);
      }

      await updateSampleSubmissions(originalData.sample_submissions, values.fertilizerRecords, requestId, values);
      await handleFileChanges(originalData.service_request_documents, values.files, requestId);

      setSuccessMessage('บันทึกการแก้ไขสำเร็จ');
      setErrorMessage(null);
      setTimeout(() => navigate('/request'), 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGetCusSpacialCon = async (companyId) => {
    try {
      const response = await getCustomerSpecialConditionsByID(companyId);
      console.log('handleGetCusSpacialCon :', response);
      setSpacialCon(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error('Error fetching special conditions:', error);
      setSpacialCon([]);
    }
  };

  if (errorMessage) return <div className="text-danger">{errorMessage}</div>;
  if (!initialFormValues || !userId) return <div>Loading...</div>;

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
      context={{ sample_type_id: initialFormValues.sample_type_id }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Header>
              <h5>
                {values.sample_type_id === 1 ? 'แก้ไขใบนำส่งตัวอย่างปุ๋ยอินทรีย์' : 'แก้ไขใบนำส่งตัวอย่างปุ๋ยเคมี เพื่อขึ้นทะเบียนปุ๋ย'}
              </h5>
            </Card.Header>
            <Card.Body className="p-0">
              <StepForm
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                company={company}
                spacialCon={spacialCon}
                fertilizerTypes={fertilizerTypes}
                sampleType={values.sample_type_id}
              />
            </Card.Body>
            <Card.Footer className="text-start">
              {successMessage && <div className="text-success mb-2">{successMessage}</div>}
              {errorMessage && <div className="text-danger mb-2">{errorMessage}</div>}
              <Button variant="primary" type="submit" disabled={values.isSubmitting}>
                <i className="feather icon-save" /> บันทึก
              </Button>
              <Button variant="danger" onClick={() => navigate('/request')}>
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
