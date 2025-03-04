import CountrySelect from 'components/Selector/CountrySelect';
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Button, Modal, Form, Stack, ButtonGroup } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Select from 'react-select';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllTestItemsByType } from 'services/_api/testItemsRequest';
import * as Yup from 'yup';

const Step2 = ({ values, errors, touched, setFieldValue, fertilizerTypes, companyData }) => {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const company = companyData.find((x) => x.company_id === values.company_id);
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
    manufacturer_country: 'ไทย',
    supplier: '',
    supplier_country: 'ไทย',
    composition: '',
    sample_weight: null,
    sample_weight_unit: null,
    packaging_id: null,
    packaging_other: null,
    submission_id: null,
    test_items: []
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
    fertilizer_type_id: Yup.number().required('กรุณาเลือกประเภทลักษณะปุ๋ย'),
    packaging_id: Yup.number().required('กรุณาเลือกภาชนะบรรจุ'),
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
    sample_weight: Yup.number().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข'),
    sample_weight_unit: Yup.string().required('กรุณากรอกหน่วย'),
    test_items: Yup.array()
      .min(1, 'กรุณาเลือกอย่างน้อยหนึ่งรายการทดสอบ')
      .of(
        Yup.object({
          test_item_id: Yup.number().required('ต้องระบุรายการทดสอบ'),
          test_percentage: Yup.string().test('requires-percentage', 'กรุณากรอกเปอร์เซ็นต์สำหรับรายการนี้', function (value) {
            const testItemId = this.parent.test_item_id; // ดึง test_item_id จาก object เดียวกัน
            const requiresPercentage = [1, 3, 5, 7, 10, 15].includes(testItemId);
            if (requiresPercentage) {
              return value !== undefined && value !== null && value !== '' && /^\d+(\.\d+)?$/.test(value);
            }
            return true; // ไม่ต้องการ percentage ถ้า test_item_id ไม่อยู่ในรายการ
          })
        })
      )
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
      console.log('Caught error:', err); // Debug ข้อผิดพลาดทั้งหมด
      const errors = {};
      if (err.name === 'ValidationError' && Array.isArray(err.inner)) {
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      } else {
        // กรณีที่ไม่ใช่ ValidationError
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
    console.log('Updated test_items:', updatedTestItems); // Debug การอัปเดต test_items
  };

  const handlePercentageChange = (testItemId, value) => {
    const updatedTestItems = formData.test_items.map((item) =>
      item.test_item_id === testItemId ? { ...item, test_percentage: value } : item
    );
    setFormData({ ...formData, test_items: updatedTestItems });
    console.log('Updated test_items with percentage:', updatedTestItems); // Debug การอัปเดต percentage
  };

  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <Row className="mb-4">
              <h5 className="mb-3">ข้อมูลผู้ขอขึ้นทะเบียน</h5>
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
            </Row>
            <h5 className="mb-4">ข้อมูลตัวอย่าง</h5>
            <Table striped bordered hover responsive>
              {/* ส่วน Table คงเดิม */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>ประเภทของปุ๋ย</th>
                  <th>ลักษณะปุ๋ย</th>
                  <th>สี</th>
                  <th>สูตรปุ๋ย</th>
                  <th>ชื่อสามัญ</th>
                  <th>ภาชนะบรรจุ</th>
                  <th>ชื่อการค้า</th>
                  <th>เครื่องหมายการค้า</th>
                  {/* <th>ชื่อผู้ผลิต</th>
                  <th>ประเทศ</th> */}
                  <th>รายการทดสอบ</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {values.fertilizerRecords.length > 0 ? (
                  values.fertilizerRecords.map((record, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{fertilizerCategoryOptions.find((opt) => opt.value === record.fertilizerCategory)?.label || '-'}</td>
                      <td>
                        {fertilizerTypes.find((type) => type.fertilizer_type_id === record.fertilizer_type_id)?.fertilizer_type_name || '-'}
                      </td>
                      <td>{record.color || '-'}</td>
                      <td>{record.fertilizer_formula || '-'}</td>
                      <td>{record.common_name || '-'}</td>
                      <td>{packagingTypes.find((type) => type.packaging_type_id === record.packaging_id)?.packaging_type_name || '-'}</td>
                      <td>{record.trade_name || '-'}</td>
                      <td>{record.trademark || '-'}</td>
                      {/* <td>{record.manufacturer || '-'}</td>
                      <td>{record.manufacturer_country || '-'}</td> */}
                      <td>
                        {record.test_items
                          .map((item) => {
                            const testName = testItems.find((ti) => ti.test_item_id === item.test_item_id)?.test_code || item.test_item_id;
                            return item.test_percentage ? `${testName} (${item.test_percentage})` : testName;
                          })
                          .join(', ') || '-'}
                      </td>
                      <td className="text-center">
                        <ButtonGroup>
                          <Button variant="info" size="sm" onClick={() => handleEdit(index)}>
                            <FiEdit />
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => {
                              const updated = values.fertilizerRecords.filter((_, i) => i !== index);
                              setFieldValue('fertilizerRecords', updated);
                            }}
                          >
                            <RiDeleteBin5Line />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="text-center">
                      ไม่มีข้อมูล
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            {errors.fertilizerRecords && <div className="text-danger mb-4">{errors.fertilizerRecords}</div>}
            <Button variant="primary" onClick={handleAdd}>
              <i className="feather icon-plus" /> เพิ่ม
            </Button>
          </Card.Body>
        </Card>

        <Modal size="xl" show={showModal} onHide={() => setShowModal(false)} centered backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              <h5 className="text-center mb-0">{editIndex !== null ? 'แก้ไขข้อมูลตัวอย่างปุ๋ยเคมี' : 'เพิ่มข้อมูลตัวอย่างปุ๋ยเคมี'}</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="d-flex align-items-start">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ประเภทของปุ๋ยเคมี</Form.Label>
                    <Select
                      options={fertilizerCategoryOptions}
                      value={fertilizerCategoryOptions.find((opt) => opt.value === formData.fertilizerCategory) || null}
                      onChange={handleCategoryChange}
                      placeholder="เลือกประเภทของปุ๋ยเคมี"
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
                      touched={{ manufacturer_country: true }} // ปรับตาม logic จริง
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
                      touched={{ supplier_country: true }} // ปรับตาม logic จริง
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
                        <Col className=" align-items-start" md={3} xs={4} key={item.test_item_id} style={{ marginBottom: '10px' }}>
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
