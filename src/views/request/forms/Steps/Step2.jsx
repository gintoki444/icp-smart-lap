import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Button, Modal, Form, Stack } from 'react-bootstrap';
import Select from 'react-select';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllTestItems } from 'services/_api/testItemsRequest';

const Step2 = ({ values, errors, touched, setFieldValue, fertilizerTypes }) => {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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
    manufacturer_country: '',
    supplier: '',
    supplier_country: '',
    composition: '',
    sample_weight: null,
    sample_weight_unit: null,
    packaging_id: null,
    packaging_other: null,
    submission_id: null,
    test_items: [] // เก็บเป็น array ของ object { test_item_id, percentage }
  };

  const [formData, setFormData] = useState(initialFormData);
  const [packagingTypes, setPackagingTypes] = useState([]);
  const [testItems, setTestItems] = useState([]);

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
      const response = await getAllTestItems();
      setTestItems(response);
    } catch (error) {
      console.error('Error fetching test items:', error);
      setTestItems([]);
    }
  };

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];

  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, fertilizerCategory: selectedOption ? selectedOption.value : null });
  };

  const handleAddOrUpdateData = () => {
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

  // ฟังก์ชันตรวจสอบว่า test_item_id ต้องการ test_percentage หรือไม่
  const requiresPercentage = (testItemId) => [1, 3, 5, 7, 10, 15].includes(testItemId);

  // อัปเดต test_items เมื่อเลือกหรือยกเลิก checkbox
  const handleTestItemChange = (testItemId, checked) => {
    const updatedTestItems = checked
      ? [...formData.test_items, { test_item_id: testItemId, test_percentage: '' }] // เพิ่มใหม่ด้วย percentage ว่าง
      : formData.test_items.filter((item) => item.test_item_id !== testItemId); // ลบออก
    setFormData({ ...formData, test_items: updatedTestItems });
  };

  // อัปเดต percentage เมื่อกรอกค่า
  const handlePercentageChange = (testItemId, value) => {
    const updatedTestItems = formData.test_items.map((item) =>
      item.test_item_id === testItemId ? { ...item, test_percentage: value } : item
    );
    setFormData({ ...formData, test_items: updatedTestItems });
  };

  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <h5 className="mb-4">รายการปุ๋ยเคมี</h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ประเภทของปุ๋ย</th>
                  <th>ลักษณะปุ๋ย</th>
                  <th>สี</th>
                  <th>ภาชนะบรรจุ</th>
                  <th>ชื่อการค้า</th>
                  <th>เครื่องหมายการค้า</th>
                  <th>ชื่อผู้ผลิต</th>
                  <th>ประเทศ</th>
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
                      <td>{packagingTypes.find((type) => type.packaging_type_id === record.packaging_id)?.packaging_type_name || '-'}</td>
                      <td>{record.trade_name || '-'}</td>
                      <td>{record.trademark || '-'}</td>
                      <td>{record.manufacturer || '-'}</td>
                      <td>{record.manufacturer_country || '-'}</td>
                      <td>
                        {record.test_items
                          .map((item) => {
                            const testName = testItems.find((ti) => ti.test_item_id === item.test_item_id)?.test_code || item.test_item_id;
                            return item.test_percentage ? `${testName} (${item.test_percentage})` : testName;
                          })
                          .join(', ') || '-'}
                      </td>
                      <td className="text-center">
                        <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                          แก้ไข
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            const updated = values.fertilizerRecords.filter((_, i) => i !== index);
                            setFieldValue('fertilizerRecords', updated);
                          }}
                        >
                          ลบ
                        </Button>
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
            <Button variant="primary" onClick={handleAdd}>
              <i className="feather icon-plus" /> เพิ่ม
            </Button>
            {touched.fertilizerRecords && errors.fertilizerRecords && <div className="text-danger">{errors.fertilizerRecords}</div>}
          </Card.Body>
        </Card>

        <Modal size="xl" show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              <h5 className="text-center mb-0">{editIndex !== null ? 'แก้ไขข้อมูลตัวอย่างปุ๋ยเคมี' : 'เพิ่มข้อมูลตัวอย่างปุ๋ยเคมี'}</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ประเภทของปุ๋ยเคมี</Form.Label>
                    <Select
                      options={fertilizerCategoryOptions}
                      value={fertilizerCategoryOptions.find((opt) => opt.value === formData.fertilizerCategory) || null}
                      onChange={handleCategoryChange}
                      placeholder="เลือกประเภทของปุ๋ยเคมี"
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ประเทศ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อประเทศ"
                      value={formData.manufacturer_country}
                      onChange={(e) => setFormData({ ...formData, manufacturer_country: e.target.value })}
                    />
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
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ประเทศ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="กรอกชื่อประเทศ"
                      value={formData.supplier_country}
                      onChange={(e) => setFormData({ ...formData, supplier_country: e.target.value })}
                    />
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
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Stack spacing={1} style={{ flexDirection: 'row' }}>
                    <Form.Group className="mb-3 full-width" style={{ marginRight: 4, width: '100%' }}>
                      <Form.Label>ปริมาณ(น้ำหนัก/ปริมาตร)</Form.Label>
                      <Form.Control
                        type="text"
                        rows={3}
                        placeholder="กรอกน้ำหนัก/ปริมาตร"
                        value={formData.sample_weight}
                        onChange={(e) => setFormData({ ...formData, sample_weight: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ marginLeft: 4, flext: 1 }}>
                      <Form.Label>หน่วย(กิโลกรัม/ลิตร)</Form.Label>
                      <Form.Control
                        type="text"
                        rows={3}
                        placeholder="kg./ml."
                        value={formData.sample_weight_unit}
                        onChange={(e) => setFormData({ ...formData, sample_weight_unit: e.target.value })}
                      />
                    </Form.Group>
                  </Stack>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>รายการทดสอบ</Form.Label>
                    <Row spacing={2}>
                      {testItems.map((item) => (
                        <Col md={3} xs={4} key={item.test_item_id} style={{ marginBottom: '10px' }}>
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
                              />
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
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default Step2;
