import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postFertilizerFormulas, postFertilizerFormulaTest } from 'services/_api/fertilizerFormulasRequest';
import { getAllBaseFertilizers } from 'services/_api/baseFertilizersRequest';
import TestItemMultiSelect from 'components/Selector/TestItemMultiSelect';
import { toast } from 'react-toastify';

const AddFertilizerFormulas = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    formula_name: '',
    formula_code: '',
    base_fertilizer_id: '',
    formula_description: '',
    fertilizer_main_id: 1, // Default to 1 as per example, adjust if dynamic selection is needed
    nutrient_ratio: '',
    is_rice_fertilizer: 0,
    recommended_tests: '', // This will be populated with test_name values
    test_item_id: [], // Array to store multiple test item IDs
    fertilizer_type_id: '' // Placeholder, adjust as needed
  });
  const [baseFertilizers, setBaseFertilizers] = useState([]);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch base fertilizers for the selector
  useEffect(() => {
    const fetchBaseFertilizers = async () => {
      try {
        const response = await getAllBaseFertilizers();
        setBaseFertilizers(response);
      } catch (error) {
        setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลปุ๋ยพื้นฐาน');
        console.error('Error fetching base fertilizers:', error);
      }
    };
    fetchBaseFertilizers();
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.formula_name.trim()) {
      newErrors.formula_name = 'กรุณากรอกชื่อสูตรปุ๋ย';
    }
    if (!formData.formula_code.trim()) {
      newErrors.formula_code = 'กรุณากรอกรหัสสูตรปุ๋ย';
    }
    if (!formData.base_fertilizer_id) {
      newErrors.base_fertilizer_id = 'กรุณาเลือกปุ๋ยพื้นฐาน';
    }
    if (!formData.formula_description.trim()) {
      newErrors.formula_description = 'กรุณากรอกคำอธิบายสูตรปุ๋ย';
    }
    if (!formData.nutrient_ratio.trim()) {
      newErrors.nutrient_ratio = 'กรุณากรอกสัดส่วนธาตุอาหาร';
    }
    // Optional: Validate test_item_id if required
    if (formData.test_item_id.length === 0) {
      newErrors.test_item_id = 'กรุณาเลือกรายการทดสอบอย่างน้อย 1 รายการ';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes for regular fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  // Handle multi-select change from TestItemMultiSelect
  const handleMultiSelectChange = (name, selectedValues, selectedLabels) => {
    setFormData({
      ...formData,
      [name]: selectedValues,
      recommended_tests: selectedLabels.join(', ') // Join the labels into a comma-separated string
    });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);

    try {
      const formulaData = {
        ...formData,
        fertilizer_main_id: Number(formData.fertilizer_main_id),
        base_fertilizer_id: Number(formData.base_fertilizer_id),
        is_rice_fertilizer: Number(formData.is_rice_fertilizer)
      };

      const response = await postFertilizerFormulas(formulaData);
      if (response.formula_id) {
        // Show success toast for formula creation
        toast.success('เพิ่มสูตรปุ๋ยสำเร็จ!', {
          autoClose: 3000
        });

        // Save the test items association
        if (formData.test_item_id.length > 0) {
          const testData = formData.test_item_id.map((testItemId, index) => ({
            formula_id: response.formula_id,
            test_item_id: Number(formData.test_item_id[index])
          }));
          await Promise.all(
            testData.map((data) => {
              console.log('data:', data);
              postFertilizerFormulaTest(data);
            })
          );
          toast.success('บันทึกการทดสอบที่เกี่ยวข้องสำเร็จ!', {
            autoClose: 3000
          });
        }

        navigate('/admin/fertilizer-formulas');
      } else {
        throw new Error('No formula_id returned');
      }
    } catch (error) {
      // Check if the error is a 500 Internal Server Error (assuming it indicates a duplicate formula_code)
      if (error.response && error.response.status === 500) {
        toast.error('รหัสสูตรปุ๋ยนี้ถูกใช้งานแล้ว กรุณาใช้รหัสอื่น', {
          autoClose: 5000
        });
      } else {
        setApiError('เกิดข้อผิดพลาดในการเพิ่มสูตรปุ๋ย กรุณาลองใหม่');
        console.error('Error adding fertilizer formula:', error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Card>
        <Card.Header>
          <h5>เพิ่มสูตรปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          {apiError && <Alert variant="danger">{apiError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formula_name">
                  <Form.Label>ชื่อสูตรปุ๋ย</Form.Label>
                  <Form.Control
                    type="text"
                    name="formula_name"
                    value={formData.formula_name}
                    placeholder="กรอกชื่อสูตรปุ๋ย"
                    onChange={handleChange}
                    isInvalid={!!errors.formula_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.formula_name}</Form.Control.Feedback>
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
              <Col md={6} className="mb-3">
                <Form.Group controlId="base_fertilizer_id">
                  <Form.Label>ปุ๋ยพื้นฐาน</Form.Label>
                  <Form.Select
                    name="base_fertilizer_id"
                    value={formData.base_fertilizer_id}
                    style={{ padding: '10.5px 22px', fontSize: 14 }}
                    onChange={handleChange}
                    isInvalid={!!errors.base_fertilizer_id}
                  >
                    <option value="">เลือกปุ๋ยพื้นฐาน</option>
                    {baseFertilizers.map((fertilizer) => (
                      <option key={fertilizer.base_fertilizer_id} value={fertilizer.base_fertilizer_id}>
                        {fertilizer.common_name_th}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.base_fertilizer_id}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="nutrient_ratio">
                  <Form.Label>สัดส่วนธาตุอาหาร</Form.Label>
                  <Form.Control
                    type="text"
                    name="nutrient_ratio"
                    value={formData.nutrient_ratio}
                    placeholder="กรอกสัดส่วนธาตุอาหาร"
                    onChange={handleChange}
                    isInvalid={!!errors.nutrient_ratio}
                  />
                  <Form.Control.Feedback type="invalid">{errors.nutrient_ratio}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <TestItemMultiSelect name="test_item_id" value={formData.test_item_id} onSelect={handleMultiSelectChange} />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="recommended_tests">
                  <Form.Label>รายการทดสอบที่แนะนำ</Form.Label>
                  <Form.Control
                    type="text"
                    name="recommended_tests"
                    value={formData.recommended_tests}
                    placeholder="กรอกรายการทดสอบที่แนะนำ"
                    readOnly // Make it read-only since it's populated by TestItemMultiSelect
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="formula_description">
                  <Form.Label>คำอธิบายสูตรปุ๋ย</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="formula_description"
                    value={formData.formula_description}
                    placeholder="กรอกคำอธิบายสูตรปุ๋ย"
                    onChange={handleChange}
                    isInvalid={!!errors.formula_description}
                  />
                  <Form.Control.Feedback type="invalid">{errors.formula_description}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="is_rice_fertilizer">
                  <Form.Check
                    inline
                    type="checkbox"
                    label="เหมาะสำหรับปุ๋ยข้าว"
                    name="is_rice_fertilizer"
                    checked={formData.is_rice_fertilizer === 1}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => navigate('/admin/fertilizer-formulas')} disabled={loading}>
              กลับ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddFertilizerFormulas;
