import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { putPackagingType, getPackagingTypeByID } from 'services/_api/packageingTypeRequest';
import { toast } from 'react-toastify';

const EditPackagingTypes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;
  const [formData, setFormData] = useState({
    packaging_type_name: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch base fertilizer data on component mount
  useEffect(() => {
    if (id) {
      fetchPackagingTypes();
    } else {
      navigate('/admin/packaging-types'); // Redirect if no ID is provided
    }
  }, [id]);

  const fetchPackagingTypes = async () => {
    try {
      const response = await getPackagingTypeByID(id);
      setFormData({
        packaging_type_name: response.packaging_type_name || ''
      });
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลปุ๋ยพื้นฐาน');
      console.error('Error fetching base fertilizer:', error);
    }
  };
  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.packaging_type_name.trim()) {
      newErrors.packaging_type_name = 'กรุณากรอกชื่อภาชนะบรรจุ';
    }
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
      await putPackagingType(formData, id);
      toast.success('แก้ไขภาชนะบรรจุสำเร็จ!', {
        autoClose: 3000
      });
      navigate('/admin/packaging-types'); // Redirect to the base packagings list page
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการแก้ไขภาชนะบรรจุ กรุณาลองใหม่');
      console.error('Error adding base packaging:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขภาชนะบรรจุ</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="packaging_type_name">
                  <Form.Label>ชื่อชื่อภาชนะบรรจุ</Form.Label>
                  <Form.Control
                    type="text"
                    name="packaging_type_name"
                    value={formData.packaging_type_name}
                    placeholder="กรอกชื่อภาชนะบรรจุ"
                    onChange={handleChange}
                    isInvalid={!!errors.packaging_type_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.packaging_type_name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/packaging-types')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditPackagingTypes;
