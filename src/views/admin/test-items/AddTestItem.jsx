import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postTestItems } from 'services/_api/testItemsRequest'; // Adjust the import path as needed
import { getAllTestGroups } from 'services/_api/testGroupRequest'; // Adjust the import path as needed
import { toast } from 'react-toastify';

const AddTestItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    test_name: '',
    test_name_th: '',
    name_for_quotation: '',
    test_code: '',
    test_description: '',
    unit_price: '',
    test_type: 0,
    is_active: 1,
    group_id: ''
  });
  const [testGroups, setTestGroups] = useState([]);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch test groups for the selector
  useEffect(() => {
    const fetchTestGroups = async () => {
      try {
        const response = await getAllTestGroups();
        setTestGroups(response);
      } catch (error) {
        setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลกลุ่มทดสอบ');
        console.error('Error fetching test groups:', error);
      }
    };
    fetchTestGroups();
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.test_name.trim()) {
      newErrors.test_name = 'กรุณากรอกชื่อการทดสอบ (ภาษาอังกฤษ)';
    }
    if (!formData.test_name_th.trim()) {
      newErrors.test_name_th = 'กรุณากรอกชื่อการทดสอบ (ภาษาไทย)';
    }
    if (!formData.name_for_quotation.trim()) {
      newErrors.name_for_quotation = 'กรุณากรอกชื่อสำหรับใบเสนอราคา';
    }
    if (!formData.test_code.trim()) {
      newErrors.test_code = 'กรุณากรอกรหัสการทดสอบ';
    }
    if (!formData.test_description.trim()) {
      newErrors.test_description = 'กรุณากรอกคำอธิบายการทดสอบ';
    }
    if (!formData.unit_price || isNaN(formData.unit_price) || Number(formData.unit_price) <= 0) {
      newErrors.unit_price = 'กรุณากรอกราคาต่อหน่วยที่ถูกต้อง (มากกว่า 0)';
    }
    if (!formData.group_id) {
      newErrors.group_id = 'กรุณาเลือกกลุ่มทดสอบ';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);

    try {
      const response = await postTestItems({
        ...formData,
        unit_price: Number(formData.unit_price), // Ensure unit_price is a number
        test_type: Number(formData.test_type),
        is_active: Number(formData.is_active),
        group_id: Number(formData.group_id)
      });
      if (response.test_item_id) {
        // Show success toast if test_item_id is returned
        toast.success('เพิ่มรายการทดสอบสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/test-items'); // Redirect to the test items list page
      } else {
        throw new Error('No test_item_id returned');
      }
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการเพิ่มรายการทดสอบ กรุณาลองใหม่');
      console.error('Error adding test item:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มรายการทดสอบ</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="test_name_th">
                  <Form.Label>ชื่อการทดสอบ (ภาษาไทย)</Form.Label>
                  <Form.Control
                    type="text"
                    name="test_name_th"
                    value={formData.test_name_th}
                    placeholder="กรอกชื่อการทดสอบ (ภาษาไทย)"
                    onChange={handleChange}
                    isInvalid={!!errors.test_name_th}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_name_th}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="test_name">
                  <Form.Label>ชื่อการทดสอบ (ภาษาอังกฤษ)</Form.Label>
                  <Form.Control
                    type="text"
                    name="test_name"
                    value={formData.test_name}
                    placeholder="กรอกชื่อการทดสอบ (ภาษาอังกฤษ)"
                    onChange={handleChange}
                    isInvalid={!!errors.test_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="name_for_quotation">
                  <Form.Label>ชื่อสำหรับใบเสนอราคา</Form.Label>
                  <Form.Control
                    type="text"
                    name="name_for_quotation"
                    value={formData.name_for_quotation}
                    placeholder="กรอกชื่อสำหรับใบเสนอราคา"
                    onChange={handleChange}
                    isInvalid={!!errors.name_for_quotation}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name_for_quotation}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="test_code">
                  <Form.Label>รหัสการทดสอบ</Form.Label>
                  <Form.Control
                    type="text"
                    name="test_code"
                    value={formData.test_code}
                    placeholder="กรอกรหัสการทดสอบ"
                    onChange={handleChange}
                    isInvalid={!!errors.test_code}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_code}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="unit_price">
                  <Form.Label>ราคาต่อหน่วย (บาท)</Form.Label>
                  <Form.Control
                    type="number"
                    name="unit_price"
                    value={formData.unit_price}
                    placeholder="กรอกราคาต่อหน่วย (บาท)"
                    onChange={handleChange}
                    isInvalid={!!errors.unit_price}
                    step="0.01"
                  />
                  <Form.Control.Feedback type="invalid">{errors.unit_price}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="group_id">
                  <Form.Label>กลุ่มทดสอบ</Form.Label>
                  <Form.Select
                    name="group_id"
                    style={{ padding: '10.5px 22px', fontSize: 14 }}
                    value={formData.group_id}
                    onChange={handleChange}
                    isInvalid={!!errors.group_id}
                  >
                    <option value="">เลือกกลุ่มทดสอบ</option>
                    {testGroups.map((group) => (
                      <option key={group.group_id} value={group.group_id}>
                        {group.group_name_th} ({group.group_name_en})
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.group_id}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="test_description">
                  <Form.Label>คำอธิบายการทดสอบ</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="test_description"
                    value={formData.test_description}
                    placeholder="กรอกคำอธิบายการทดสอบ"
                    onChange={handleChange}
                    isInvalid={!!errors.test_description}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_description}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              {/* <Col md={6} className="mb-3">
                <Form.Group controlId="test_type">
                  <Form.Label>ประเภทการทดสอบ</Form.Label>
                  <Form.Select name="test_type" value={formData.test_type} onChange={handleChange}>
                    <option>เลือกประเภทการทดสอบ</option>
                    <option value={0}>ปกติ</option>
                    <option value={1}>พิเศษ</option>
                  </Form.Select>
                </Form.Group>
              </Col> */}
              {/* <Col md={6} className="mb-3">
                <Form.Group controlId="is_active">
                  <Form.Label>สถานะ</Form.Label>
                  <Form.Check type="checkbox" label="ใช้งาน" name="is_active" checked={formData.is_active === 1} onChange={handleChange} />
                </Form.Group>
              </Col> */}
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/test-items')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTestItem;
