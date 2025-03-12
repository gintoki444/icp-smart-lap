import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTestItemsById, putTestItems } from 'services/_api/testItemsRequest'; // Adjust the import path as needed
import { getAllTestGroups } from 'services/_api/testGroupRequest'; // Adjust the import path as needed
import { toast } from 'react-toastify';

const EditTestItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;

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

  // Fetch test groups and test item data on component mount
  useEffect(() => {
    if (id) {
      fetchTestItem();
      fetchTestGroups();
    } else {
      navigate('/admin/test-items'); // Redirect if no ID is provided
    }
  }, [id]);

  const fetchTestItem = async () => {
    try {
      const response = await getTestItemsById(id);
      setFormData({
        test_name: response.test_name || '',
        test_name_th: response.test_name_th || '',
        name_for_quotation: response.name_for_quotation || '',
        test_code: response.test_code || '',
        test_description: response.test_description || '',
        unit_price: response.unit_price || '',
        test_type: response.test_type || 0,
        is_active: response.is_active || 1,
        group_id: response.group_id || ''
      });
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลรายการทดสอบ');
      console.error('Error fetching test item:', error);
    }
  };

  const fetchTestGroups = async () => {
    try {
      const response = await getAllTestGroups();
      setTestGroups(response);
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลกลุ่มทดสอบ');
      console.error('Error fetching test groups:', error);
    }
  };

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
      await putTestItems(id, {
        ...formData,
        unit_price: Number(formData.unit_price), // Ensure unit_price is a number
        test_type: Number(formData.test_type),
        is_active: Number(formData.is_active),
        group_id: Number(formData.group_id)
      });
      // Show success toast on successful update
      toast.success('แก้ไขรายการทดสอบสำเร็จ!', {
        autoClose: 3000
      });
      navigate('/admin/test-items'); // Redirect to the test items list page
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการแก้ไขรายการทดสอบ กรุณาลองใหม่');
      console.error('Error updating test item:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขรายการทดสอบ</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="test_name">
                  <Form.Label>ชื่อการทดสอบ (ภาษาอังกฤษ)</Form.Label>
                  <Form.Control
                    type="text"
                    name="test_name"
                    value={formData.test_name}
                    onChange={handleChange}
                    isInvalid={!!errors.test_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="test_name_th">
                  <Form.Label>ชื่อการทดสอบ (ภาษาไทย)</Form.Label>
                  <Form.Control
                    type="text"
                    name="test_name_th"
                    value={formData.test_name_th}
                    onChange={handleChange}
                    isInvalid={!!errors.test_name_th}
                  />
                  <Form.Control.Feedback type="invalid">{errors.test_name_th}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="name_for_quotation">
                  <Form.Label>ชื่อสำหรับใบเสนอราคา</Form.Label>
                  <Form.Control
                    type="text"
                    name="name_for_quotation"
                    value={formData.name_for_quotation}
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

export default EditTestItem;
