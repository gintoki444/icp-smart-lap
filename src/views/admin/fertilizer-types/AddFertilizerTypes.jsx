import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { toast } from 'react-toastify';

const AddFertilizerTypes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fertilizer_type_name: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fertilizer_type_name.trim()) {
      newErrors.fertilizer_type_name = 'กรุณากรอกชื่อลักษณะปุ๋ย';
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
      const response = await postFertilicerType(formData);
      if (response.fertilizer_type_id) {
        // Show success toast if fertilizer_type_id is returned
        toast.success('เพิ่มลักษณะปุ๋ยสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/fertilizer-types'); // Redirect to the base fertilizers list page
      } else {
        throw new Error('No fertilizer_type_id returned');
      }
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการเพิ่มลักษณะปุ๋ย กรุณาลองใหม่');
      console.error('Error adding base fertilizer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มลักษณะปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="fertilizer_type_name">
                  <Form.Label>ชื่อลักษณะปุ๋ย</Form.Label>
                  <Form.Control
                    type="text"
                    name="fertilizer_type_name"
                    value={formData.fertilizer_type_name}
                    placeholder="กรอกลักษณะปุ๋ย"
                    onChange={handleChange}
                    isInvalid={!!errors.fertilizer_type_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.fertilizer_type_name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/fertilizer-types')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddFertilizerTypes;
