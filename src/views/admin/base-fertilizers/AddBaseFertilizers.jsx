import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postBaseFertilizers } from 'services/_api/baseFertilizersRequest';
import { toast } from 'react-toastify';

const AddBaseFertilizers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    common_name_th: '',
    common_name_en: '',
    formula_code: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.common_name_th.trim()) {
      newErrors.common_name_th = 'กรุณากรอกชื่อสามัญ (ภาษาไทย)';
    }
    if (!formData.common_name_en.trim()) {
      newErrors.common_name_en = 'กรุณากรอกชื่อสามัญ (ภาษาอังกฤษ)';
    }
    if (!formData.formula_code.trim()) {
      newErrors.formula_code = 'กรุณากรอกรหัสสูตรปุ๋ย';
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
      const response = await postBaseFertilizers(formData);
      if (response.base_fertilizer_id) {
        // Show success toast if base_fertilizer_id is returned
        toast.success('เพิ่มปุ๋ยพื้นฐานสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/base-fertilizers'); // Redirect to the base fertilizers list page
      } else {
        throw new Error('No base_fertilizer_id returned');
      }
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการเพิ่มปุ๋ยพื้นฐาน กรุณาลองใหม่');
      console.error('Error adding base fertilizer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มปุ๋ยพื้นฐาน</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="common_name_th">
                  <Form.Label>ชื่อสามัญ (ภาษาไทย)</Form.Label>
                  <Form.Control
                    type="text"
                    name="common_name_th"
                    value={formData.common_name_th}
                    placeholder="กรอกชื่อสามัญ (ภาษาไทย)"
                    onChange={handleChange}
                    isInvalid={!!errors.common_name_th}
                  />
                  <Form.Control.Feedback type="invalid">{errors.common_name_th}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="common_name_en">
                  <Form.Label>ชื่อสามัญ (ภาษาอังกฤษ)</Form.Label>
                  <Form.Control
                    type="text"
                    name="common_name_en"
                    value={formData.common_name_en}
                    onChange={handleChange}
                    placeholder="กรอกชื่อสามัญ (ภาษาอังกฤษ)"
                    isInvalid={!!errors.common_name_en}
                  />
                  <Form.Control.Feedback type="invalid">{errors.common_name_en}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formula_code">
                  <Form.Label>รหัสสูตรปุ๋ย</Form.Label>
                  <Form.Control
                    type="text"
                    name="formula_code"
                    value={formData.formula_code}
                    placeholder="กรอกรหัสสูตรปุ๋ย"
                    onChange={handleChange}
                    isInvalid={!!errors.formula_code}
                  />
                  <Form.Control.Feedback type="invalid">{errors.formula_code}</Form.Control.Feedback>
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
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/base-fertilizers')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddBaseFertilizers;
