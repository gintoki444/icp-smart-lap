import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTestGroupsById, putTestGroups } from 'services/_api/testGroupRequest';

const EditTestGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;

  const [formData, setFormData] = useState({
    group_name_th: '',
    group_name_en: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the test group data on component mount
  useEffect(() => {
    if (id) {
      fetchTestGroup();
    } else {
      navigate('/admin/test-groups'); // Redirect if no ID is provided
    }
  }, [id]);

  const fetchTestGroup = async () => {
    try {
      const response = await getTestGroupsById(id);
      setFormData({
        group_name_th: response.group_name_th || '',
        group_name_en: response.group_name_en || '',
        description: response.description || ''
      });
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลกลุ่มทดสอบ');
      console.error('Error fetching test group:', error);
    }
  };

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
      await putTestGroups(id, formData);
      toast.success('แก้ไขกลุ่มทดสอบสำเร็จ!!', { autoClose: 3000 });
      navigate('/admin/test-group'); // Redirect to the test groups list page after success
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการแก้ไขกลุ่มทดสอบ!!', { autoClose: 3000 });
      setApiError('เกิดข้อผิดพลาดในการแก้ไขกลุ่มทดสอบ กรุณาลองใหม่');
      console.error('Error updating test group:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขกลุ่มทดสอบ</h5>
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
                    placeholder="กรอกชื่อกลุ่มทดสอบ (ภาษาไทย)"
                    onChange={handleChange}
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
                    placeholder="กรอกชื่อกลุ่มทดสอบ (ภาษาอังกฤษ)"
                    onChange={handleChange}
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

export default EditTestGroup;
