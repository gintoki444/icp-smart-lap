import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postPackagingType } from 'services/_api/packageingTypeRequest';
import { toast } from 'react-toastify';

const AddPackagingTypes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    packaging_type_name: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const response = await postPackagingType(formData);
      if (response.packaging_type_id) {
        // Show success toast if packaging_type_id is returned
        toast.success('เพิ่มภาชนะบรรจุสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/packaging-types'); // Redirect to the base packagings list page
      } else {
        throw new Error('No packaging_type_id returned');
      }
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการเพิ่มภาชนะบรรจุ กรุณาลองใหม่');
      console.error('Error adding base packaging:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มภาชนะบรรจุ</h5>
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

export default AddPackagingTypes;
