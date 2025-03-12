import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postFertilizerMain } from 'services/_api/fertilizerMainRequest'; // Adjust the import path as needed
import { toast } from 'react-toastify';

const AddFertilizerMain = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fertilizer_main_name_th: '',
    fertilizer_main_name_en: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fertilizer_main_name_th.trim()) {
      newErrors.fertilizer_main_name_th = 'กรุณากรอกชื่อประเภทปุ๋ย (ภาษาไทย)';
    }
    if (!formData.fertilizer_main_name_en.trim()) {
      newErrors.fertilizer_main_name_en = 'กรุณากรอกชื่อประเภทปุ๋ย (ภาษาอังกฤษ)';
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
      const response = await postFertilizerMain(formData);
      if (response.fertilizer_main_id) {
        // Show success toast if fertilizer_main_id is returned
        toast.success('เพิ่มประเภทปุ๋ยสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/fertilizer-main'); // Redirect to the fertilizer main list page
      } else {
        throw new Error('No fertilizer_main_id returned');
      }
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการเพิ่มประเภทปุ๋ย กรุณาลองใหม่');
      console.error('Error adding fertilizer main:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มประเภทปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="fertilizer_main_name_th">
                  <Form.Label>ชื่อประเภท (ภาษาไทย)</Form.Label>
                  <Form.Control
                    type="text"
                    name="fertilizer_main_name_th"
                    value={formData.fertilizer_main_name_th}
                    placeholder="กรอกชื่อประเภท (ภาษาไทย)"
                    onChange={handleChange}
                    isInvalid={!!errors.fertilizer_main_name_th}
                  />
                  <Form.Control.Feedback type="invalid">{errors.fertilizer_main_name_th}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="fertilizer_main_name_en">
                  <Form.Label>ชื่อประเภท (ภาษาอังกฤษ)</Form.Label>
                  <Form.Control
                    type="text"
                    name="fertilizer_main_name_en"
                    value={formData.fertilizer_main_name_en}
                    placeholder="กรอกชื่อประเภท (ภาษาอังกฤษ)"
                    onChange={handleChange}
                    isInvalid={!!errors.fertilizer_main_name_en}
                  />
                  <Form.Control.Feedback type="invalid">{errors.fertilizer_main_name_en}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/fertilizer-main')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddFertilizerMain;
