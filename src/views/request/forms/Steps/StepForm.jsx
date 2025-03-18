import CountrySelect from 'components/Selector/CountrySelect';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Card, Row, Col, Button, Modal, Form, Stack } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Select from 'react-select';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getTestItemsByTypeId } from 'services/_api/testItemsRequest';
import { useDropzone } from 'react-dropzone';
import { deleteFileFromFirebase } from 'services/_api/uploadFileRequest';
import { deleteServiceRequestDocuments } from 'services/_api/serviceRequest';
import * as Yup from 'yup';
import { getAllFertilizerMain } from 'services/_api/fertilizerMainRequest';
import { getAllFertilizerFormulas, getFertilizerFormulasByMain } from 'services/_api/fertilizerFormulasRequest';

const StepForm = ({
  values,
  errors,
  touched,
  setFieldValue,
  fertilizerTypes,
  company,
  spacialCon,
  handleChange,
  handleBlur,
  sampleType,
  validateForm
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [fertilizerFormulas, setFertilizerFormulas] = useState([]);
  const [ferFormulasByMain, setFerFormulasByMain] = useState([]);

  const [formData, setFormData] = useState({
    request_id: null,
    fertilizer_main_id: null,
    fertilizerCategory: null,
    fertilizer_type_id: null,
    color: '',
    formula_id: null,
    fertilizer_formula: '',
    common_name: '',
    trade_name: '',
    trademark: '',
    manufacturer: '',
    manufacturer_country: 'TH',
    supplier: '',
    supplier_country: 'TH',
    composition: '',
    sample_weight: null,
    sample_weight_unit: null,
    packaging_id: null,
    packaging_other: null,
    submission_id: null,
    test_items: [],
    reportMethod: [],
    email: '',
    sameAddress: true,
    mail_delivery_location: '',
    phone: '',
    otherRequirements: '',
    sampleDisposal: 'is_lab_dispose_sample',
    is_self_pickup: 0,
    pdf_email: '',
    is_mail_delivery: 0,
    is_lab_dispose_sample: 1,
    is_collect_within_3_months: 0,
    is_return_sample: 0,
    test_all_items: 1,
    submitted_by: '',
    submitted_date: '',
    submitted_phone: ''
  });

  const analysisMethodOptions = [
    { value: 'is_registration_analysis', label: 'วิเคราะห์ขึ้นทะเบียน' },
    { value: 'is_quality_check_analysis', label: 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' }
  ];

  useEffect(() => {
    getFertilizerFormulas();
    getFerFormulasByMain();
    handleGetPackageType();
    handleGetTestItems();
  }, []);

  const getFertilizerFormulas = async () => {
    try {
      const result = await getAllFertilizerMain();
      const formattedOptions = result.map((item) => ({
        value: item.fertilizer_main_id,
        label: item.fertilizer_main_name_th
      }));
      console.log('formattedOptions', formattedOptions);
      setFertilizerFormulas(formattedOptions);
    } catch (error) {
      console.error('Error fetching fertilizer formulas:', error);
      setFertilizerFormulas([]);
    }
  };

  const getFerFormulasByMain = async (id) => {
    try {
      if (id) {
        const result = await getFertilizerFormulasByMain(id);
        const formattedOptions = result.map((item) => ({
          value: item.formula_id,
          label: item.formula_code
        }));
        console.log('formattedOptions', formattedOptions);
        setFerFormulasByMain(formattedOptions);
      } else {
        const result = await getAllFertilizerFormulas();
        const formattedOptions = result.map((item) => ({
          value: item.formula_id,
          label: item.formula_code
        }));
        console.log('getFertilizerFormulas', formattedOptions);
        setFerFormulasByMain(formattedOptions);
      }
    } catch (error) {
      console.error('Error fetching fertilizer formulas:', error);
      setFerFormulasByMain([]);
    }
  };

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ].filter((opt) => {
    if (formData.fertilizer_main_id === 1) {
      return ['is_single_fertilizer', 'is_compound_fertilizer'].includes(opt.value);
    } else if (formData.fertilizer_main_id === 2) {
      return ['is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'].includes(opt.value);
    }
    return true;
  });

  const unitOptions = [
    { value: 'g', label: 'กรัม' },
    { value: 'kg', label: 'กิโลกรัม' },
    { value: 'oz', label: 'ออนซ์' },
    { value: 'ml', label: 'มิลลิลิตร' },
    { value: 'L', label: 'ลิตร' }
  ];

  const [packagingTypes, setPackagingTypes] = useState([]);
  const [testItems, setTestItems] = useState([]);

  const handleGetPackageType = async () => {
    const response = await getAllPackagingType();
    setPackagingTypes(response);
  };

  const handleGetTestItems = async () => {
    try {
      const response = await getTestItemsByTypeId(sampleType);
      setTestItems(response);
    } catch (error) {
      console.error('Error fetching test items:', error);
      setTestItems([]);
    }
  };

  const handleCategoryChange = (field, selectedOption) => {
    setFormData({
      ...formData,
      [field]: selectedOption ? selectedOption.value : null,
      ...(field === 'fertilizer_main_id' && { fertilizerCategory: null })
    });
    if (field === 'fertilizer_main_id') getFerFormulasByMain(selectedOption.value);
  };

  const handleFertilizerFormulasChange = (field, selectedOption) => {
    console.log('selectedOption:', selectedOption);
    setFormData({
      ...formData,
      [field]: selectedOption ? selectedOption.value : null,
      ...(field === 'formula_id' && { fertilizer_formula: selectedOption ? selectedOption.label : '' })
    });
  };

  const handleAddOrUpdateData = async () => {
    try {
      console.log('formData before validation:', formData);
      await formDataSchema.validate(formData, { abortEarly: false, context: { sample_type_id: sampleType } });
      if (editIndex !== null) {
        const updatedRecords = [...values.fertilizerRecords];
        updatedRecords[editIndex] = formData;
        setFieldValue('fertilizerRecords', updatedRecords);
        setEditIndex(null);
      } else {
        setFieldValue('fertilizerRecords', [...values.fertilizerRecords, formData]);
      }
      setShowModal(false);
      setFormData({
        ...formData,
        fertilizer_main_id: null,
        fertilizerCategory: null,
        fertilizer_type_id: null,
        color: '',
        formula_id: null,
        fertilizer_formula: '',
        common_name: '',
        trade_name: '',
        trademark: '',
        manufacturer: '',
        manufacturer_country: 'TH',
        supplier: '',
        supplier_country: 'TH',
        composition: '',
        sample_weight: null,
        sample_weight_unit: null,
        packaging_id: null,
        packaging_other: null,
        test_items: [],
        reportMethod: [],
        email: '',
        sameAddress: true,
        mail_delivery_location: company?.document_address || '',
        phone: '',
        otherRequirements: '',
        sampleDisposal: 'is_lab_dispose_sample',
        test_all_items: 1,
        submitted_by: '',
        submitted_date: '',
        submitted_phone: ''
      });
      setFormErrors({});
    } catch (err) {
      console.log('Caught error:', err);
      const errors = {};
      if (err.name === 'ValidationError' && Array.isArray(err.inner)) {
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      } else {
        errors['general'] = err.message || 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล';
      }
      setFormErrors(errors);
      console.log('Validation errors in Modal:', errors);
    }
  };

  const formDataSchema = Yup.object({
    fertilizer_main_id: Yup.number()
      .nullable()
      .test('fertilizer-main-required', 'กรุณาเลือกประเภทปุ๋ยหลัก', function (value) {
        const { sample_type_id } = this.options.context || this.parent;
        if (sample_type_id === 2) {
          return value !== null && value !== undefined;
        }
        return true;
      }),
    fertilizer_type_id: Yup.number().typeError('กรุณาเลือกประเภทลักษณะปุ๋ย').required('กรุณาเลือกประเภทลักษณะปุ๋ย'),
    packaging_id: Yup.number().typeError('กรุณาเลือกภาชนะบรรจุ').required('กรุณาเลือกภาชนะบรรจุ'),
    color: Yup.string().required('กรุณากรอกสี'),
    formula_id: '',
    fertilizer_formula: Yup.string().required('กรุณากรอกสูตรปุ๋ย'),
    common_name: Yup.string().required('กรุณากรอกชื่อสามัญ'),
    trade_name: Yup.string().required('กรุณากรอกชื่อการค้า'),
    trademark: Yup.string().required('กรุณากรอกเครื่องหมายการค้า'),
    manufacturer: Yup.string().required('กรุณากรอกชื่อผู้ผลิต'),
    manufacturer_country: Yup.string().required('กรุณากรอกประเทศของผู้ผลิต'),
    supplier: Yup.string().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
    supplier_country: Yup.string().required('กรุณากรอกประเทศของผู้จัดจำหน่าย'),
    composition: Yup.string().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
    sample_weight: Yup.number().typeError('ปริมาณต้องเป็นตัวเลข').required('กรุณากรอกปริมาณ'),
    sample_weight_unit: Yup.string().required('กรุณากรอกหน่วย'),
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
      ),
    reportMethod: Yup.array()
      .min(1, 'กรุณาเลือกวิธีการรับรายงานอย่างน้อยหนึ่งวิธี')
      .of(Yup.string().oneOf(['is_self_pickup', 'pdf_email', 'is_mail_delivery'], 'วิธีการรับรายงานไม่ถูกต้อง')),
    email: Yup.string().test('email-required', 'กรุณากรอกอีเมลสำหรับรับผลตรวจ', function (value) {
      const reportMethod = this.parent.reportMethod;
      if (Array.isArray(reportMethod) && reportMethod.includes('pdf_email')) {
        return value && Yup.string().email('กรุณากรอกอีเมลที่ถูกต้อง').isValidSync(value);
      }
      return true;
    }),
    sameAddress: Yup.boolean(),
    mail_delivery_location: Yup.string().test('address-required', 'กรุณากรอกที่อยู่จัดส่ง', function (value) {
      const { reportMethod, sameAddress } = this.parent;
      if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
        return value && value.trim() !== '';
      }
      return true;
    }),
    phone: Yup.string().test('phone-required', 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก', function (value) {
      const { reportMethod, sameAddress } = this.parent;
      if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
        return value && /^\d{9,10}$/.test(value);
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
    submitted_date: Yup.string().required('กรุณาเลือกวันที่ส่ง')
  });

  const handleEdit = (index) => {
    const checkData = values.fertilizerRecords[index];
    console.log('values.fertilizerRecords[index]:', values.fertilizerRecords[index]);

    if (checkData.fertilizer_main_id) getFerFormulasByMain(checkData.fertilizer_main_id);
    setFormData({
      ...checkData,
      sameAddress: checkData.sameAddress !== undefined ? checkData.sameAddress : true,
      mail_delivery_location:
        checkData.mail_delivery_location || (checkData.sameAddress && company?.document_address ? company.document_address : '')
    });
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedRecords = values.fertilizerRecords.filter((_, i) => i !== index);
    setFieldValue('fertilizerRecords', updatedRecords);
    validateForm();
  };

  const handleAdd = () => {
    setEditIndex(null);
    setShowModal(true);
    setFormData({
      ...formData,
      sameAddress: true,
      mail_delivery_location: company?.document_address || ''
    });
  };

  const requiresPercentage = (testItemId) => [1, 3, 5, 7, 10, 15].includes(testItemId);

  const handleTestItemChange = (testItemId, checked) => {
    const updatedTestItems = checked
      ? [...formData.test_items, { test_item_id: testItemId, test_percentage: '' }]
      : formData.test_items.filter((item) => item.test_item_id !== testItemId);
    setFormData({ ...formData, test_items: updatedTestItems });
  };

  const handlePercentageChange = (testItemId, value) => {
    const updatedTestItems = formData.test_items.map((item) =>
      item.test_item_id === testItemId ? { ...item, test_percentage: value } : item
    );
    setFormData({ ...formData, test_items: updatedTestItems });
  };

  const reportMethodOptions = [
    { value: 'is_self_pickup', label: 'รับด้วยตนเอง' },
    { value: 'pdf_email', label: 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail' },
    { value: 'is_mail_delivery', label: 'ส่งทางไปรษณีย์' }
  ];

  const sampleDisposalOptions = [
    { value: 'is_lab_dispose_sample', label: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง' },
    { value: 'is_collect_within_3_months', label: 'มารับตัวอย่างคืนภายใน 3 เดือน' },
    { value: 'is_return_sample', label: 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน' }
  ];

  const getReportMethodLabels = (methods) => {
    return methods.map((method) => reportMethodOptions.find((opt) => opt.value === method)?.label || method).join(', ');
  };

  const handleSameAddressChange = (isSameAddress) => {
    setFormData({
      ...formData,
      sameAddress: isSameAddress,
      mail_delivery_location: isSameAddress && company?.document_address ? company.document_address : formData.mail_delivery_location
    });
    setFieldValue('sameAddress', isSameAddress);
    if (isSameAddress) {
      setFieldValue('mail_delivery_location', company?.document_address || '');
    }
  };

  const handleReportMethodChange = (optionValue, checked) => {
    const newValue = checked ? [...formData.reportMethod, optionValue] : formData.reportMethod.filter((val) => val !== optionValue);
    setFormData({ ...formData, reportMethod: newValue });
    setFieldValue('reportMethod', newValue);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const currentFiles = Array.isArray(values.files) ? values.files : [];
      setFieldValue('files', [...currentFiles, ...acceptedFiles]);
      setTimeout(() => validateForm(), 0);
    },
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf']
    }
  });

  const handleRemoveFile = async (indexToRemove) => {
    const fileToRemove = values.files[indexToRemove];
    const isConfirmed = window.confirm(
      'คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "' + fileToRemove.name + '"? การลบนี้จะลบไฟล์ออกจากระบบทันทีและไม่สามารถกู้คืนได้'
    );

    if (isConfirmed) {
      try {
        if (fileToRemove.document_id) {
          await deleteFileFromFirebase(fileToRemove.path);
          await deleteServiceRequestDocuments(fileToRemove.document_id);
        }
        const updatedFiles = values.files.filter((_, index) => index !== indexToRemove);
        setFieldValue('files', updatedFiles);
        validateForm();
      } catch (error) {
        console.error('Error removing file:', error);
        alert('เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่');
      }
    }
  };

  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <h6>ข้อมูลผู้ขอขึ้นทะเบียน</h6>
            <Row className="mb-4">
              <Col md={6} className="mb-2">
                <p className="mb-0">
                  ชื่อบริษัท : <strong className="text-dark">{company.company_name}</strong>
                </p>
              </Col>
              <Col md={6} className="mb-2">
                <p className="mb-0">
                  เลขที่ผู้เสียภาษี : <strong className="text-dark">{company.tax_id}</strong>
                </p>
              </Col>
              <Col md={6} className="mb-2">
                <p className="mb-0">
                  ที่อยู่ : <strong className="text-dark">{company.company_address}</strong>
                </p>
              </Col>
              <Col md={6}>
                <p className="mb-0">
                  เงื่อนไขพิเศษ :{' '}
                  <strong className="text-dark">
                    {spacialCon.length > 0
                      ? spacialCon.map((x, index) => `${x.description}${index < spacialCon.length - 1 ? ', ' : ''}`)
                      : '-'}
                  </strong>
                </p>
              </Col>
            </Row>

            {sampleType === 1 && (
              <Form.Group className="mb-3">
                <Form.Label>วัตถุประสงค์การขอใช้บริการ</Form.Label>
                <Form.Group>
                  {analysisMethodOptions.map((option, idx) => (
                    <Form.Check
                      inline
                      type="radio"
                      name="analysisMethod"
                      value={option.value}
                      key={idx}
                      label={option.label}
                      checked={values.analysisMethod === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={`analysisMethod${idx}`}
                      isInvalid={touched.analysisMethod && !!errors.analysisMethod}
                    />
                  ))}
                </Form.Group>
                {touched.analysisMethod && errors.analysisMethod && (
                  <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                    {errors.analysisMethod}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>ความต้องการอื่น</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="notes"
                placeholder="กรอกความต้องการอื่น"
                value={values.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.notes && !!errors.notes}
              />
              <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
            </Form.Group>

            <h6 className="mb-3">ข้อมูลตัวอย่าง</h6>
            {values.fertilizerRecords.length === 0 ? (
              <p className="text-muted">ยังไม่มีข้อมูลตัวอย่าง</p>
            ) : (
              <Row className={`ps-3 pe-3 mb-2`}>
                {values.fertilizerRecords.map((sample, index) => (
                  <Col
                    md={12}
                    key={index}
                    className={`p-4 border rounded shadow-sm ${index < values.fertilizerRecords.length - 1 && 'mb-3'}`}
                  >
                    <Row>
                      <Col md={8}>
                        <h6>
                          ตัวอย่างที่ {index + 1} สูตรปุ๋ย : <strong className="text-dark">{sample.fertilizer_formula || '-'}</strong>{' '}
                          (ชื่อสามัญ : <strong className="text-dark">{sample.common_name || '-'}</strong>)
                        </h6>
                      </Col>
                      {sample.fertilizer_main_id && (
                        <Col md={6} className="mb-2">
                          <p className="mb-0">
                            ประเภทของปุ๋ย :{' '}
                            <strong className="text-dark">
                              {fertilizerFormulas.find((x) => x.value === sample.fertilizer_main_id)?.label}
                            </strong>
                          </p>
                        </Col>
                      )}
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ลักษณะปุ๋ย :{' '}
                          <strong className="text-dark">
                            {fertilizerTypes.find((type) => type.fertilizer_type_id === sample.fertilizer_type_id)?.fertilizer_type_name ||
                              '-'}
                          </strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          สี : <strong className="text-dark">{sample.color || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ภาชนะบรรจุ :{' '}
                          <strong className="text-dark">
                            {packagingTypes.find((type) => type.packaging_type_id === sample.packaging_id)?.packaging_type_name || '-'}
                          </strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ชื่อการค้า : <strong className="text-dark">{sample.trade_name || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ผู้ผลิต (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.manufacturer || '-'}</strong> ประเทศ :{' '}
                          <strong className="text-dark">{sample.manufacturer_country || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          สั่งจาก (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.supplier || '-'}</strong> ประเทศ :{' '}
                          <strong className="text-dark">{sample.supplier_country || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ปริมาณ : <strong className="text-dark">{sample.sample_weight || '-'}</strong>{' '}
                          <strong className="text-dark">
                            {unitOptions.find((unit) => unit.value === sample.sample_weight_unit)?.label || '-'}
                          </strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          วัตถุส่วนประกอบของปุ๋ย : <strong className="text-dark">{sample.composition || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          ผู้ส่งตัวอย่าง : <strong className="text-dark">{sample.submitted_by || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          เบอร์โทรศัพท์ผู้ส่ง : <strong className="text-dark">{sample.submitted_phone || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={6} className="mb-2">
                        <p className="mb-0">
                          วันที่ส่ง : <strong className="text-dark">{sample.submitted_date || '-'}</strong>
                        </p>
                      </Col>
                      <Col md={12} className="mb-2">
                        <h6 className="mb-2">รายการทดสอบ</h6>
                        <Col>
                          {sample.test_items.length > 0 ? (
                            sample.test_items.map((testItem, idx) => {
                              const testItemDetail = testItems.find((item) => item.test_item_id === testItem.test_item_id);
                              return (
                                <li key={`list-group-item-${idx}`} className="list-group-item text-dark" style={{ display: 'inline-flex' }}>
                                  {testItemDetail?.test_code || `รายการ ${testItem.test_item_id}`}
                                  {requiresPercentage(testItem.test_item_id) && testItem.test_percentage && `${testItem.test_percentage}%`}
                                  {idx + 1 < sample.test_items.length && ' ,'}
                                </li>
                              );
                            })
                          ) : (
                            <p className="text-muted">ยังไม่มีรายการทดสอบ</p>
                          )}
                        </Col>
                      </Col>
                      <Col md={12} className="mb-2">
                        <h6 className="mb-3">ข้อมูลการขอรับผลการตรวจ</h6>
                        <p className="mb-1">
                          วิธีการรับรายงาน : <strong className="text-dark">{getReportMethodLabels(sample.reportMethod)}</strong>
                        </p>
                        {sample.reportMethod.includes('pdf_email') && (
                          <p className="mb-1">
                            E-mail สำหรับรับผลตรวจ : <strong className="text-dark">{sample.email || '-'}</strong>
                          </p>
                        )}
                        {sample.reportMethod.includes('is_mail_delivery') && (
                          <p className="mb-1">
                            ที่อยู่จัดส่ง : <strong className="text-dark">{sample.mail_delivery_location || '-'}</strong>
                          </p>
                        )}
                      </Col>
                      <Col md={12} className="mt-2">
                        <Button variant="outline-success" onClick={() => handleEdit(index)}>
                          <FiEdit /> แก้ไข
                        </Button>
                        <Button variant="outline-danger" onClick={() => handleDelete(index)}>
                          <RiDeleteBin5Line /> ลบ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            )}
            {touched.fertilizerRecords && errors.fertilizerRecords && typeof errors.fertilizerRecords === 'string' && (
              <div className="text-danger mb-4">{errors.fertilizerRecords}</div>
            )}
            <Button variant="primary" onClick={handleAdd} className="mt-3">
              <i className="feather icon-plus" /> เพิ่ม
            </Button>

            <Row className="mt-3">
              <Col md={12}>
                <h6 className="mb-2">ข้อมูลเอกสาร</h6>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>อัพโหลดเอกสาร :</Form.Label>
                  <div
                    {...getRootProps()}
                    style={{
                      border: '2px dashed #04a9f5',
                      borderRadius: '8px',
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: isDragActive ? '#e6f7ff' : '#f8f9fa'
                    }}
                  >
                    <input {...getInputProps()} name="files" onBlur={handleBlur} />
                    {isDragActive ? (
                      <p style={{ marginBottom: 0 }}>Drop your files here...</p>
                    ) : (
                      <p style={{ marginBottom: 0 }}>Drag and drop files here, or click to select files</p>
                    )}
                  </div>
                  <ul className="mt-3">
                    {values.files && values.files.length > 0 ? (
                      values.files.map((file, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                          <i className="feather icon-file" style={{ marginRight: 12 }} />
                          {file.name}
                          <Button
                            variant="link"
                            size="sm"
                            className="text-danger"
                            style={{ marginLeft: 10 }}
                            onClick={() => handleRemoveFile(index)}
                          >
                            <i className="feather icon-trash-2" />
                          </Button>
                        </li>
                      ))
                    ) : (
                      <li>ยังไม่มีไฟล์</li>
                    )}
                  </ul>
                  {touched.files && errors.files && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.files}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Modal size="xl" show={showModal} onHide={() => setShowModal(false)} centered backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              <h5 className="text-center mb-0">{editIndex !== null ? 'แก้ไขข้อมูลตัวอย่าง' : 'เพิ่มข้อมูลตัวอย่าง'}</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="d-flex align-items-start ps-3 pe-3">
                <Col md={12}>
                  <Row className="mb-2">
                    <Col md={6} className="mb-2">
                      <p className="mb-0">
                        ชื่อบริษัท : <strong className="text-dark">{company.company_name}</strong>
                      </p>
                    </Col>
                    <Col md={6} className="mb-2">
                      <p className="mb-0">
                        เลขที่ผู้เสียภาษี : <strong className="text-dark">{company.tax_id}</strong>
                      </p>
                    </Col>
                    <Col md={6} className="mb-2">
                      <p className="mb-0">
                        ที่อยู่ : <strong className="text-dark">{company.company_address}</strong>
                      </p>
                    </Col>
                    <Col md={6}>
                      <p className="mb-0">
                        เงื่อนไขพิเศษ :{' '}
                        <strong className="text-dark">
                          {spacialCon.length > 0
                            ? spacialCon.map((x, index) => `${x.description}${index < spacialCon.length - 1 ? ', ' : ''}`)
                            : '-'}
                        </strong>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <h6 className="mb-3">ข้อมูลตัวอย่าง</h6>

                {sampleType === 2 && (
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ประเภทปุ๋ยหลัก</Form.Label>
                      <Select
                        options={fertilizerFormulas}
                        value={fertilizerFormulas.find((opt) => opt.value === formData.fertilizer_main_id) || null}
                        onChange={(option) => handleCategoryChange('fertilizer_main_id', option)}
                        placeholder="เลือกประเภทปุ๋ยหลัก"
                      />
                      {formErrors.fertilizer_main_id && <div className="text-danger">{formErrors.fertilizer_main_id}</div>}
                    </Form.Group>
                  </Col>
                )}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ลักษณะปุ๋ย</Form.Label>
                    <Select
                      options={fertilizerTypes.map((type) => ({
                        value: type.fertilizer_type_id,
                        label: type.fertilizer_type_name || type
                      }))}
                      value={
                        fertilizerTypes
                          .map((type) => ({
                            value: type.fertilizer_type_id,
                            label: type.fertilizer_type_name || type
                          }))
                          .find((opt) => opt.value === formData.fertilizer_type_id) || null
                      }
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, fertilizer_type_id: selectedOption ? selectedOption.value : null })
                      }
                      placeholder="เลือกประเภทของปุ๋ยเคมี"
                    />
                    {formErrors.fertilizer_type_id && <div className="text-danger">{formErrors.fertilizer_type_id}</div>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>สี</Form.Label>
                    <Form.Control
                      type="text"
                      name="color"
                      placeholder="กรอกสี"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      isInvalid={!!formErrors.color}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.color}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ภาชนะบรรจุ</Form.Label>
                    <Select
                      options={packagingTypes.map((type) => ({
                        value: type.packaging_type_id,
                        label: type.packaging_type_name || type
                      }))}
                      value={
                        packagingTypes
                          .map((type) => ({
                            value: type.packaging_type_id,
                            label: type.packaging_type_name || type
                          }))
                          .find((opt) => opt.value === formData.packaging_id) || null
                      }
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, packaging_id: selectedOption ? selectedOption.value : null })
                      }
                      placeholder="เลือกภาชนะบรรจุ"
                    />
                    {formErrors.packaging_id && <div className="text-danger">{formErrors.packaging_id}</div>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>สูตรปุ๋ย</Form.Label>
                    <Select
                      options={ferFormulasByMain}
                      value={ferFormulasByMain.find((opt) => opt.value === formData.formula_id) || null}
                      onChange={(option) => handleFertilizerFormulasChange('formula_id', option)}
                      placeholder="เลือกสูตรปุ๋ย"
                    />
                    {formErrors.formula_id && <div className="text-danger">{formErrors.formula_id}</div>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ชื่อสามัญ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อสามัญ"
                      value={formData.common_name}
                      onChange={(e) => setFormData({ ...formData, common_name: e.target.value })}
                      isInvalid={!!formErrors.common_name}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.common_name}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ชื่อการค้า</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อการค้า"
                      value={formData.trade_name}
                      onChange={(e) => setFormData({ ...formData, trade_name: e.target.value })}
                      isInvalid={!!formErrors.trade_name}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.trade_name}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>เครื่องหมายการค้า</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกเครื่องหมายการค้า"
                      value={formData.trademark}
                      onChange={(e) => setFormData({ ...formData, trademark: e.target.value })}
                      isInvalid={!!formErrors.trademark}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.trademark}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ผู้ผลิต (บริษัท/ห้าง/ร้าน/อื่นๆ)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อผู้ผลิต"
                      value={formData.manufacturer}
                      onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                      isInvalid={!!formErrors.manufacturer}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.manufacturer}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <CountrySelect
                      name="manufacturer_country"
                      value={formData.manufacturer_country}
                      onChange={(fieldName, newValue) => setFormData({ ...formData, [fieldName]: newValue })}
                      errors={formErrors}
                      touched={{ manufacturer_country: true }}
                      label="ประเทศของผู้ผลิต"
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.manufacturer_country}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>สั่งจาก (บริษัท/ห้าง/ร้าน/อื่นๆ)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อผู้จัดจำหน่าย"
                      value={formData.supplier}
                      onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                      isInvalid={!!formErrors.supplier}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.supplier}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <CountrySelect
                      name="supplier_country"
                      value={formData.supplier_country}
                      onChange={(fieldName, newValue) => setFormData({ ...formData, [fieldName]: newValue })}
                      errors={formErrors}
                      touched={{ supplier_country: true }}
                      label="ประเทศของผู้จัดจำหน่าย"
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.supplier_country}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>วัตถุส่วนประกอบของปุ๋ย</Form.Label>
                    <Form.Control
                      type="text"
                      rows={3}
                      placeholder="กรอกวัตถุส่วนประกอบของปุ๋ย"
                      value={formData.composition}
                      onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                      isInvalid={!!formErrors.composition}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.composition}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} className="align-items-start">
                  <Stack direction="horizontal" className="align-items-start" gap={3}>
                    <Form.Group className="mb-3" style={{ flex: 1 }}>
                      <Form.Label>ปริมาณ(น้ำหนัก/ปริมาตร)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="กรอกน้ำหนัก/ปริมาตร"
                        value={formData.sample_weight}
                        onChange={(e) => setFormData({ ...formData, sample_weight: e.target.value })}
                        isInvalid={!!formErrors.sample_weight}
                      />
                      <Form.Control.Feedback type="invalid">{formErrors.sample_weight}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ flex: 1 }}>
                      <Form.Label>หน่วย(กิโลกรัม/ลิตร) </Form.Label>
                      <div>
                        <Select
                          options={unitOptions}
                          value={unitOptions.find((option) => option.value === formData.sample_weight_unit) || null}
                          onChange={(selected) => setFormData({ ...formData, sample_weight_unit: selected ? selected.value : '' })}
                          placeholder="เลือกหน่วย..."
                          isClearable
                        />
                      </div>
                      {formErrors.sample_weight_unit && <div className="text-danger">{formErrors.sample_weight_unit}</div>}
                    </Form.Group>
                  </Stack>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>รายการทดสอบ</Form.Label>
                    {formErrors.test_items && <div className="text-danger">{formErrors.test_items}</div>}
                    <Row>
                      {testItems.map((item) => (
                        <Col className="align-items-start" md={3} xs={4} key={item.test_item_id} style={{ marginBottom: '10px' }}>
                          <Form.Check
                            inline
                            id={`test_item-${item.test_item_id}`}
                            type="checkbox"
                            label={item.test_code}
                            checked={formData.test_items.some((ti) => ti.test_item_id === item.test_item_id)}
                            onChange={(e) => handleTestItemChange(item.test_item_id, e.target.checked)}
                          />
                          {requiresPercentage(item.test_item_id) &&
                            formData.test_items.some((ti) => ti.test_item_id === item.test_item_id) && (
                              <Form.Control
                                type="text"
                                placeholder="กรอก % (เช่น 10%)"
                                value={formData.test_items.find((ti) => ti.test_item_id === item.test_item_id)?.test_percentage || ''}
                                onChange={(e) => handlePercentageChange(item.test_item_id, e.target.value)}
                                style={{ display: 'inline-block', width: '60%', marginLeft: '10px' }}
                                isInvalid={
                                  !!formErrors[
                                    `test_items[${formData.test_items.findIndex((ti) => ti.test_item_id === item.test_item_id)}].test_percentage`
                                  ]
                                }
                              />
                            )}
                          {requiresPercentage(item.test_item_id) &&
                            formData.test_items.some((ti) => ti.test_item_id === item.test_item_id) && (
                              <Form.Control.Feedback type="invalid">
                                {
                                  formErrors[
                                    `test_items[${formData.test_items.findIndex((ti) => ti.test_item_id === item.test_item_id)}].test_percentage`
                                  ]
                                }
                              </Form.Control.Feedback>
                            )}
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <h6 className="mb-3">ข้อมูลการขอรับผลการตรวจ</h6>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>วิธีการรับรายงาน</Form.Label>
                    <div>
                      {reportMethodOptions.map((option, idx) => (
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }} key={idx}>
                          <Form.Check
                            type="checkbox"
                            name="reportMethod"
                            value={option.value}
                            label={option.label}
                            checked={formData.reportMethod.includes(option.value)}
                            onChange={(e) => handleReportMethodChange(option.value, e.target.checked)}
                            id={`reportCheck${idx}`}
                            isInvalid={!!formErrors.reportMethod}
                          />
                          {option.value === 'pdf_email' && formData.reportMethod.includes('pdf_email') && (
                            <Col md={6} className="mb-3 ps-4 pe-4">
                              <Form.Label>E-mail สำหรับรับผลตรวจ :</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                placeholder="กรอกอีเมล"
                                value={formData.email}
                                onChange={(e) => {
                                  setFormData({ ...formData, email: e.target.value });
                                  setFieldValue('email', e.target.value);
                                }}
                                onBlur={handleBlur}
                                isInvalid={!!formErrors.email}
                              />
                              <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                            </Col>
                          )}
                          {option.value === 'is_mail_delivery' && formData.reportMethod.includes('is_mail_delivery') && (
                            <Col md={6} className="mt-1 ps-4 pe-4">
                              <Form.Check
                                inline
                                type="radio"
                                name="sameAddress"
                                label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                                checked={formData.sameAddress}
                                onChange={() => handleSameAddressChange(true)}
                                id="sameAddressCheck1"
                              />
                              <Form.Check
                                inline
                                type="radio"
                                name="sameAddress"
                                label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                                checked={!formData.sameAddress}
                                onChange={() => handleSameAddressChange(false)}
                                id="sameAddressCheck2"
                              />
                              {formData.sameAddress ? (
                                <Form.Group md={6} className="mb-3">
                                  <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="mail_delivery_location"
                                    value={company?.document_address || ''}
                                    readOnly
                                  />
                                </Form.Group>
                              ) : (
                                <Row className="mb-3">
                                  <Col md={12}>
                                    <Form.Group>
                                      <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="mail_delivery_location"
                                        placeholder="กรอกที่อยู่จัดส่ง"
                                        value={formData.mail_delivery_location}
                                        onChange={(e) => {
                                          setFormData({ ...formData, mail_delivery_location: e.target.value });
                                          setFieldValue('mail_delivery_location', e.target.value);
                                        }}
                                        onBlur={handleBlur}
                                        isInvalid={!!formErrors.mail_delivery_location}
                                      />
                                      <Form.Control.Feedback type="invalid">{formErrors.mail_delivery_location}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col>
                                  <Col md={12}>
                                    <Form.Group className="mt-3">
                                      <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="กรอกเบอร์โทรศัพท์"
                                        value={formData.phone}
                                        onChange={(e) => {
                                          setFormData({ ...formData, phone: e.target.value });
                                          setFieldValue('phone', e.target.value);
                                        }}
                                        onBlur={handleBlur}
                                        isInvalid={!!formErrors.phone}
                                      />
                                      <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              )}
                            </Col>
                          )}
                        </Stack>
                      ))}
                    </div>
                    {formErrors.reportMethod && (
                      <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                        {formErrors.reportMethod}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="text-dark">ขอบเขตการทดสอบ :</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        name="test_all_items"
                        label="ทดสอบทุกรายการ"
                        checked={formData.test_all_items}
                        onChange={() => {
                          setFormData({ ...formData, test_all_items: true });
                          setFieldValue('test_all_items', true);
                        }}
                        id="test_all_items-1"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="test_all_items"
                        label="ทดสอบบางรายการ"
                        checked={!formData.test_all_items}
                        onChange={() => {
                          setFormData({ ...formData, test_all_items: false });
                          setFieldValue('test_all_items', false);
                        }}
                        id="test_all_items-2"
                      />
                    </div>
                    {formErrors.test_all_items && (
                      <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                        {formErrors.test_all_items}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
                    <div>
                      {sampleDisposalOptions.map((option, idx) => (
                        <Form.Check
                          inline
                          type="radio"
                          name="sampleDisposal"
                          value={option.value}
                          key={idx}
                          label={option.label}
                          checked={formData.sampleDisposal === option.value}
                          onChange={(e) => {
                            setFormData({ ...formData, sampleDisposal: e.target.value });
                            setFieldValue('sampleDisposal', e.target.value);
                          }}
                          id={`sampleCheck${idx}`}
                        />
                      ))}
                    </div>
                    {formErrors.sampleDisposal && (
                      <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                        {formErrors.sampleDisposal}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <h6 className="mb-1">ข้อมูลการจัดส่งตัวอย่าง</h6>
                <Col md={4}>
                  <Form.Group className="mb-3 mt-2">
                    <Form.Label>ผู้ส่งตัวอย่าง:</Form.Label>
                    <Form.Control
                      type="text"
                      name="submitted_by"
                      placeholder="ชื่อ-นามสกุล"
                      value={formData.submitted_by}
                      onChange={(e) => {
                        setFormData({ ...formData, submitted_by: e.target.value });
                        setFieldValue('submitted_by', e.target.value);
                      }}
                      onBlur={handleBlur}
                      isInvalid={!!formErrors.submitted_by}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.submitted_by}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3 mt-2">
                    <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                    <Form.Control
                      type="text"
                      name="submitted_phone"
                      placeholder="ตัวอย่าง: 0812345678"
                      value={formData.submitted_phone}
                      onChange={(e) => {
                        setFormData({ ...formData, submitted_phone: e.target.value });
                        setFieldValue('submitted_phone', e.target.value);
                      }}
                      onBlur={handleBlur}
                      isInvalid={!!formErrors.submitted_phone}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.submitted_phone}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3 mt-2">
                    <Form.Label>วันที่ส่ง :</Form.Label>
                    <TextField
                      fullWidth
                      type="date"
                      id="submitted_date"
                      name="submitted_date"
                      value={formData.submitted_date || ''}
                      onChange={(e) => {
                        setFormData({ ...formData, submitted_date: e.target.value });
                        setFieldValue('submitted_date', e.target.value);
                      }}
                      onBlur={handleBlur}
                      error={!!formErrors.submitted_date}
                      helperText={formErrors.submitted_date}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleAddOrUpdateData}>
              บันทึก
            </Button>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              ยกเลิก
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default StepForm;
