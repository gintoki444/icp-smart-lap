import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { putFertilicerType, getFertilicerTypeByID } from 'services/_api/fertilizerTypesRequest';
import { toast } from 'react-toastify';

const EditFertilizerTypes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;
  const [formData, setFormData] = useState({
    fertilizer_type_name: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch base fertilizer data on component mount
  useEffect(() => {
    if (id) {
      fetchFertilizerTypes();
    } else {
      navigate('/admin/fertilizers-types'); // Redirect if no ID is provided
    }
  }, [id]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fertilizer_type_name.trim()) {
      newErrors.fertilizer_type_name = 'กรุณากรอกชื่อลักษณะปุ๋ย';
    }
    return Object.keys(newErrors).length === 0;
  };

  const fetchFertilizerTypes = async () => {
    try {
      const response = await getFertilicerTypeByID(id);
      setFormData({
        fertilizer_type_name: response.fertilizer_type_name || ''
      });
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลปุ๋ยพื้นฐาน');
      console.error('Error fetching base fertilizer:', error);
    }
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
      const response = await putFertilicerType(id, formData);

      toast.success('แก้ไขลักษณะปุ๋ยสำเร็จ!', {
        autoClose: 3000
      });
      navigate('/admin/fertilizer-types'); // Redirect to the base fertilizers list page
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการแก้ไขลักษณะปุ๋ย กรุณาลองใหม่');
      console.error('Error adding base fertilizer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขลักษณะปุ๋ย</h5>
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

export default EditFertilizerTypes;
