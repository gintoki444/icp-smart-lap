import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFertilizerCertificateById, putFertilizerCertificate } from 'services/_api/fertilizerCertificateRequest'; // Adjust the import path as needed
import { getAllFertilizerMain } from 'services/_api/fertilizerMainRequest'; // Adjust the import path as needed
import { toast } from 'react-toastify';

const EditFertilizerCertificate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;

  const [formData, setFormData] = useState({
    fertilizer_main_id: '',
    nutrient_name: '',
    min_value: '',
    unit: '',
    legal_reference: ''
  });
  const [fertilizerMains, setFertilizerMains] = useState([]);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch fertilizer main categories and fertilizer certificate data on component mount
  useEffect(() => {
    if (id) {
      fetchFertilizerCertificate();
      fetchFertilizerMains();
    } else {
      navigate('/admin/fertilizer-certificate'); // Redirect if no ID is provided
    }
  }, [id]);

  const fetchFertilizerCertificate = async () => {
    try {
      const response = await getFertilizerCertificateById(id);
      setFormData({
        fertilizer_main_id: response.fertilizer_main_id || '',
        nutrient_name: response.nutrient_name || '',
        min_value: response.min_value || '',
        unit: response.unit || '',
        legal_reference: response.legal_reference || ''
      });
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลใบรับรองปุ๋ย');
      console.error('Error fetching fertilizer certificate:', error);
    }
  };

  const fetchFertilizerMains = async () => {
    try {
      const response = await getAllFertilizerMain();
      setFertilizerMains(response);
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลหมวดหมู่ปุ๋ย');
      console.error('Error fetching fertilizer mains:', error);
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fertilizer_main_id) {
      newErrors.fertilizer_main_id = 'กรุณาเลือกหมวดหมู่ปุ๋ย';
    }
    if (!formData.nutrient_name.trim()) {
      newErrors.nutrient_name = 'กรุณากรอกชื่อธาตุอาหาร';
    }
    if (!formData.min_value || isNaN(formData.min_value) || Number(formData.min_value) < 0) {
      newErrors.min_value = 'กรุณากรอกค่าต่ำสุดที่ถูกต้อง (มากกว่าหรือเท่ากับ 0)';
    }
    if (!formData.unit.trim()) {
      newErrors.unit = 'กรุณากรอกหน่วย';
    }
    if (!formData.legal_reference.trim()) {
      newErrors.legal_reference = 'กรุณากรอกข้อมูลอ้างอิงทางกฎหมาย';
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
      await putFertilizerCertificate(id, {
        ...formData,
        fertilizer_main_id: Number(formData.fertilizer_main_id),
        min_value: Number(formData.min_value) // Ensure min_value is a number
      });
      // Show success toast on successful update
      toast.success('แก้ไขใบรับรองปุ๋ยสำเร็จ!', {
        autoClose: 3000
      });
      navigate('/admin/fertilizer-certificate'); // Redirect to the fertilizer certificate list page
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการแก้ไขใบรับรองปุ๋ย กรุณาลองใหม่');
      console.error('Error updating fertilizer certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขใบรับรองปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="fertilizer_main_id">
                  <Form.Label>หมวดหมู่ปุ๋ย</Form.Label>
                  <Form.Select
                    name="fertilizer_main_id"
                    value={formData.fertilizer_main_id}
                    onChange={handleChange}
                    isInvalid={!!errors.fertilizer_main_id}
                  >
                    <option value="">-- เลือกหมวดหมู่ปุ๋ย --</option>
                    {fertilizerMains.map((main) => (
                      <option key={main.fertilizer_main_id} value={main.fertilizer_main_id}>
                        {main.fertilizer_main_name_th} ({main.fertilizer_main_name_en})
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.fertilizer_main_id}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="nutrient_name">
                  <Form.Label>ชื่อธาตุอาหาร</Form.Label>
                  <Form.Control
                    type="text"
                    name="nutrient_name"
                    value={formData.nutrient_name}
                    onChange={handleChange}
                    isInvalid={!!errors.nutrient_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.nutrient_name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="min_value">
                  <Form.Label>ค่าต่ำสุด</Form.Label>
                  <Form.Control
                    type="number"
                    name="min_value"
                    value={formData.min_value}
                    onChange={handleChange}
                    isInvalid={!!errors.min_value}
                    step="0.01"
                  />
                  <Form.Control.Feedback type="invalid">{errors.min_value}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="unit">
                  <Form.Label>หน่วย</Form.Label>
                  <Form.Control type="text" name="unit" value={formData.unit} onChange={handleChange} isInvalid={!!errors.unit} />
                  <Form.Control.Feedback type="invalid">{errors.unit}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="legal_reference">
                  <Form.Label>ข้อมูลอ้างอิงทางกฎหมาย</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="legal_reference"
                    value={formData.legal_reference}
                    onChange={handleChange}
                    isInvalid={!!errors.legal_reference}
                  />
                  <Form.Control.Feedback type="invalid">{errors.legal_reference}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/fertilizer-certificate')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditFertilizerCertificate;
