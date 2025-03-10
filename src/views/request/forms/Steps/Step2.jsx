import CountrySelect from 'components/Selector/CountrySelect';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Card, Row, Col, Table, Button, Modal, Form, Stack, ButtonGroup } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Select from 'react-select';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllTestItemsByType } from 'services/_api/testItemsRequest';
import * as Yup from 'yup';
import { Divider } from '@mui/material';

const Step2 = ({ values, errors, touched, setFieldValue, fertilizerTypes, companyData, spacialCon, handleChange, handleBlur }) => {
  console.log('Values:', values);

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const company = companyData.find((x) => x.company_id === values.company_id);
  console.log('Special Conditions:', spacialCon);

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];

  const unitOptions = [
    { value: 'g', label: 'กรัม' },
    { value: 'kg', label: 'กิโลกรัม' },
    { value: 'oz', label: 'ออนซ์' },
    { value: 'ml', label: 'มิลลิลิตร' },
    { value: 'L', label: 'ลิตร' }
  ];

  const initialFormData = {
    request_id: null,
    fertilizerCategory: null,
    fertilizer_type_id: null,
    color: '',
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
    sr_mail_delivery_location: '',
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
  };

  const sampleTypeId = values.sample_type_id;

  const [formData, setFormData] = useState(initialFormData);
  const [packagingTypes, setPackagingTypes] = useState([]);
  const [testItems, setTestItems] = useState([]);

  const formDataSchema = Yup.object({
    fertilizerCategory: Yup.string()
      .required('กรุณาเลือกประเภทของปุ๋ย')
      .oneOf(
        ['is_single_fertilizer', 'is_compound_fertilizer', 'is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'],
        'กรุณาเลือกประเภทปุ๋ยที่ถูกต้อง'
      ),
    fertilizer_type_id: Yup.number().typeError('กรุณาเลือกประเภทลักษณะปุ๋ย').required('กรุณาเลือกประเภทลักษณะปุ๋ย'),
    packaging_id: Yup.number().typeError('กรุณาเลือกภาชนะบรรจุ').required('กรุณาเลือกภาชนะบรรจุ'),
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
        if (!value || value.trim() === '') {
          return false; // ถ้า email ว่าง
        }
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
    submitted_date: Yup.string().required('กรุณาเลือกวันที่ส่ง')
  });

  useEffect(() => {
    handleGetPackageType();
    handleGetTestItems();
  }, []);

  const handleGetPackageType = async () => {
    const response = await getAllPackagingType();
    setPackagingTypes(response);
  };

  const handleGetTestItems = async () => {
    try {
      const response = await getAllTestItemsByType(sampleTypeId);
      console.log('handleGetTestItems:', response);
      setTestItems(response);
    } catch (error) {
      console.error('Error fetching test items:', error);
      setTestItems([]);
    }
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, fertilizerCategory: selectedOption ? selectedOption.value : null });
  };

  const handleAddOrUpdateData = async () => {
    try {
      console.log('formData before validation:', formData);
      await formDataSchema.validate(formData, { abortEarly: false });
      if (editIndex !== null) {
        const updatedRecords = [...values.fertilizerRecords];
        updatedRecords[editIndex] = formData;
        setFieldValue('fertilizerRecords', updatedRecords);
        setEditIndex(null);
      } else {
        setFieldValue('fertilizerRecords', [...values.fertilizerRecords, formData]);
      }
      setShowModal(false);
      setFormData(initialFormData);
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

  const handleEdit = (index) => {
    setFormData(values.fertilizerRecords[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedRecords = values.fertilizerRecords.filter((_, i) => i !== index);
    setFieldValue('fertilizerRecords', updatedRecords);
  };

  const handleAdd = () => {
    setFormData(initialFormData);
    setEditIndex(null);
    setShowModal(true);
  };

  const requiresPercentage = (testItemId) => [1, 3, 5, 7, 10, 15].includes(testItemId);

  const handleTestItemChange = (testItemId, checked) => {
    const updatedTestItems = checked
      ? [...formData.test_items, { test_item_id: testItemId, test_percentage: '' }]
      : formData.test_items.filter((item) => item.test_item_id !== testItemId);
    setFormData({ ...formData, test_items: updatedTestItems });
    console.log('Updated test_items:', updatedTestItems);
  };

  const handlePercentageChange = (testItemId, value) => {
    const updatedTestItems = formData.test_items.map((item) =>
      item.test_item_id === testItemId ? { ...item, test_percentage: value } : item
    );
    setFormData({ ...formData, test_items: updatedTestItems });
    console.log('Updated test_items with percentage:', updatedTestItems);
  };

  const getFertilizerCategoryLabel = (sample) => {
    const category = fertilizerCategoryOptions.find((opt) => opt.value === sample.fertilizerCategory);
    return category ? category.label : '-';
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
    return methods
      .map((method) => {
        const option = reportMethodOptions.find((opt) => opt.value === method);
        return option ? option.label : method;
      })
      .join(', ');
  };

  const handleSameAddressChange = (isSameAddress) => {
    setFormData({
      ...formData,
      sameAddress: isSameAddress,
      sr_mail_delivery_location: isSameAddress && company?.document_address ? company.document_address : ''
    });
    setFieldValue('sameAddress', isSameAddress);
    setFieldValue('sr_mail_delivery_location', isSameAddress && company?.document_address ? company.document_address : '');
  };

  const handleReportMethodChange = (optionValue, checked) => {
    const newValue = checked ? [...formData.reportMethod, optionValue] : formData.reportMethod.filter((val) => val !== optionValue);
    setFormData({ ...formData, reportMethod: newValue });
    setFieldValue('reportMethod', newValue);
    console.log('Updated reportMethod:', newValue);
  };

  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
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
                  <strong className="text-dark">{spacialCon.find((x) => x.company_id === values.company_id)?.description || '-'}</strong>
                </p>
              </Col>
            </Row>
            <h6 className="mb-3">ข้อมูลตัวอย่าง</h6>
            {values.fertilizerRecords.length === 0 ? (
              <p className="text-muted">ยังไม่มีข้อมูลตัวอย่าง</p>
            ) : (
              <Row className={`ps-3 pe-3`}>
                {values.fertilizerRecords.map((sample, index) => (
                  <>
                    <Col
                      md={12}
                      key={index}
                      className={`p-4 border rounded shadow-sm ${index < values.fertilizerRecords.length - 1 && 'mb-3'} `}
                    >
                      <Row>
                        <Col md={8}>
                          <h6>
                            ตัวอย่างที่ {index + 1} สูตรปุ๋ย : <strong className="text-dark">{sample.fertilizer_formula || '-'}</strong> (
                            ชื่อสามัญ : <strong className="text-dark">{sample.common_name || '-'}</strong>)
                          </h6>
                        </Col>
                        <Col md={6} className="mb-2">
                          <p className="mb-0">
                            ประเภทของปุ๋ย : <strong className="text-dark">{getFertilizerCategoryLabel(sample)}</strong>
                          </p>
                        </Col>
                        <Col md={6} className="mb-2">
                          <p className="mb-0">
                            ลักษณะปุ๋ย :{' '}
                            <strong className="text-dark">
                              {fertilizerTypes.find((type) => type.fertilizer_type_id === sample.fertilizer_type_id)
                                ?.fertilizer_type_name || '-'}
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

                        {/* รายการทดสอบ */}
                        <Col md={12} className="mb-2">
                          <h6 className="mb-2">รายการทดสอบ</h6>
                          <Col>
                            {sample.test_items.length > 0 ? (
                              <>
                                {sample.test_items.map((testItem, idx) => {
                                  const testItemDetail = testItems.find((item) => item.test_item_id === testItem.test_item_id);
                                  return (
                                    <li
                                      key={`list-group-item-${idx}`}
                                      className="list-group-item text-dark"
                                      style={{ display: 'inline-flex' }}
                                    >
                                      {testItemDetail?.test_code || `รายการ ${testItem.test_item_id}`}
                                      {requiresPercentage(testItem.test_item_id) &&
                                        testItem.test_percentage &&
                                        `${testItem.test_percentage}%`}
                                      {idx + 1 < sample.test_items.length && ' ,'}
                                    </li>
                                  );
                                })}
                                {/* <p className="text-muted">ยังไม่มีรายการทดสอบ</p> */}
                              </>
                            ) : (
                              <p className="text-muted">ยังไม่มีรายการทดสอบ</p>
                            )}
                          </Col>
                        </Col>

                        {/* ข้อมูลการขอรับผลการตรวจ */}
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
                              ที่อยู่จัดส่ง :{' '}
                              <strong className="text-dark">
                                {sample.sameAddress ? company?.document_address || '-' : sample.sr_mail_delivery_location || '-'}
                              </strong>
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
                  </>
                ))}
              </Row>
            )}
            {errors.fertilizerRecords && <div className="text-danger mb-4">{errors.fertilizerRecords}</div>}
            <Button variant="primary" onClick={handleAdd} className="mt-3">
              <i className="feather icon-plus" /> เพิ่ม
            </Button>
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
                <h6 className="mb-3">ข้อมูลตัวอย่าง</h6>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ประเภทของปุ๋ย</Form.Label>
                    <Select
                      options={fertilizerCategoryOptions}
                      value={fertilizerCategoryOptions.find((opt) => opt.value === formData.fertilizerCategory) || null}
                      onChange={handleCategoryChange}
                      placeholder="เลือกประเภทของปุ๋ย"
                    />
                    {formErrors.fertilizerCategory && <div className="text-danger">{formErrors.fertilizerCategory}</div>}
                  </Form.Group>
                </Col>
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
                    <Form.Control
                      type="text"
                      placeholder="กรอกสูตรปุ๋ย"
                      value={formData.fertilizer_formula}
                      onChange={(e) => setFormData({ ...formData, fertilizer_formula: e.target.value })}
                      isInvalid={!!formErrors.fertilizer_formula}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors.fertilizer_formula}</Form.Control.Feedback>
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
                      placeholder="กรอกชื่อผู้ผลิต"
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
                      <Form.Control.Feedback type="invalid">{formErrors.sample_weight_unit}</Form.Control.Feedback>
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
                              {formData.sameAddress && company?.document_address ? (
                                <Form.Group md={6} className="mb-3">
                                  <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="sr_mail_delivery_location"
                                    value={formData.sr_mail_delivery_location || company.document_address}
                                    readOnly
                                  />
                                </Form.Group>
                              ) : (
                                !formData.sameAddress && (
                                  <Row className="mb-3">
                                    <Col md={12}>
                                      <Form.Group>
                                        <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name="sr_mail_delivery_location"
                                          placeholder="กรอกที่อยู่จัดส่ง"
                                          value={formData.sr_mail_delivery_location}
                                          onChange={(e) => {
                                            setFormData({ ...formData, sr_mail_delivery_location: e.target.value });
                                            setFieldValue('sr_mail_delivery_location', e.target.value);
                                          }}
                                          onBlur={handleBlur}
                                          isInvalid={!!formErrors.sr_mail_delivery_location}
                                        />
                                        <Form.Control.Feedback type="invalid">{formErrors.sr_mail_delivery_location}</Form.Control.Feedback>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                )
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
                      placeholder="เบอร์โทรศัพท์"
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

export default Step2;
