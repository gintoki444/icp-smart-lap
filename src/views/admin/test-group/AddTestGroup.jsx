import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postTestGroups } from 'services/_api/testGroupRequest';
// import { postTestGroups } from 'services/_api/testGroups'; // Adjust the import path as needed

const AddTestGroup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    group_name_th: '',
    group_name_en: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.group_name_th.trim()) {
      newErrors.group_name_th = 'กรุณากรอกชื่อกลุ่มทดสอบ (ภาษาไทย)';
    }
    if (!formData.group_name_en.trim()) {
      newErrors.group_name_en = 'กรุณากรอกชื่อกลุ่มทดสอบ (ภาษาอังกฤษ)';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'กรุณากรอกคำอธิบาย';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);

    try {
      const response = await postTestGroups(formData);
      if (response.group_id) {
        toast.success('เพิ่มกลุ่มทดสอบสำเร็จ!!', { autoClose: 3000 });
        navigate('/admin/test-group');
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการเพิ่มกลุ่มทดสอบ กรุณาลองใหม่!!', { autoClose: 3000 });
      setApiError('เกิดข้อผิดพลาดในการเพิ่มกลุ่มทดสอบ กรุณาลองใหม่');
      console.error('Error adding test group:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มกลุ่มทดสอบ</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="group_name_th">
                  <Form.Label>ชื่อกลุ่มทดสอบ (ภาษาไทย)</Form.Label>
                  <Form.Control
                    type="text"
                    name="group_name_th"
                    value={formData.group_name_th}
                    onChange={handleChange}
                    placeholder="กรอกชื่อกลุ่มทดสอบ (ภาษาไทย)"
                    isInvalid={!!errors.group_name_th}
                  />
                  <Form.Control.Feedback type="invalid">{errors.group_name_th}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="group_name_en">
                  <Form.Label>ชื่อกลุ่มทดสอบ (ภาษาอังกฤษ)</Form.Label>
                  <Form.Control
                    type="text"
                    name="group_name_en"
                    value={formData.group_name_en}
                    onChange={handleChange}
                    placeholder="กรอกชื่อกลุ่มทดสอบ (ภาษาอังกฤษ)"
                    isInvalid={!!errors.group_name_en}
                  />
                  <Form.Control.Feedback type="invalid">{errors.group_name_en}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="description">
                  <Form.Label>คำอธิบาย</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    placeholder="กรอกคำอธิบาย"
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/test-group')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTestGroup;
