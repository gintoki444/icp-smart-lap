import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFertilizerFormulasById, putFertilizerFormulas } from 'services/_api/fertilizerFormulasRequest';
import { getAllBaseFertilizers } from 'services/_api/baseFertilizersRequest';
import {
  getFertilizerFormulaTestById,
  putFertilizerFormulaTest,
  deleteFertilizerFormulaTest,
  postFertilizerFormulaTest
} from 'services/_api/fertilizerFormulasRequest'; // Adjust the import path as needed
import TestItemMultiSelect from 'components/Selector/TestItemMultiSelect';
import { toast } from 'react-toastify';

const EditFertilizerFormulas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;

  const [formData, setFormData] = useState({
    formula_name: '',
    formula_code: '',
    base_fertilizer_id: '',
    formula_description: '',
    fertilizer_main_id: 1, // Default to 1 as per example, adjust if dynamic selection is needed
    nutrient_ratio: '',
    is_rice_fertilizer: 0,
    recommended_tests: '', // Populated with test_name values
    test_item_id: [] // Array to store multiple test item IDs
  });
  const [baseFertilizers, setBaseFertilizers] = useState([]);
  const [existingTestItems, setExistingTestItems] = useState([]); // Store the existing test items fetched from API
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch base fertilizers, fertilizer formula, and associated test items on component mount
  useEffect(() => {
    if (id) {
      fetchFertilizerFormula();
      fetchBaseFertilizers();
    } else {
      navigate('/admin/fertilizer-formulas'); // Redirect if no ID is provided
    }
  }, [id]);

  const fetchFertilizerFormula = async () => {
    try {
      const response = await getFertilizerFormulasById(id);
      setFormData({
        formula_name: response.formula_name || '',
        formula_code: response.formula_code || '',
        base_fertilizer_id: response.base_fertilizer_id || '',
        formula_description: response.formula_description || '',
        fertilizer_main_id: response.fertilizer_main_id || 1,
        nutrient_ratio: response.nutrient_ratio || '',
        is_rice_fertilizer: response.is_rice_fertilizer || 0,
        recommended_tests: response.recommended_tests || '',
        test_item_id: []
      });
      await fetchTestItems();
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลสูตรปุ๋ย');
      console.error('Error fetching fertilizer formula:', error);
    }
  };

  const fetchBaseFertilizers = async () => {
    try {
      const response = await getAllBaseFertilizers();
      setBaseFertilizers(response);
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลปุ๋ยพื้นฐาน');
      console.error('Error fetching base fertilizers:', error);
    }
  };

  const fetchTestItems = async () => {
    try {
      const response = await getFertilizerFormulaTestById(id);
      const testItemIds = response.map((item) => item.test_item_id);
      const testNames = response.map((item) => item.test_name);
      setExistingTestItems(response); // Store existing test items with their IDs
      setFormData((prev) => ({
        ...prev,
        test_item_id: testItemIds,
        recommended_tests: testNames.join(', ')
      }));
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการดึงข้อมูลรายการทดสอบ');
      console.error('Error fetching test items:', error);
    }
  };

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError(null);

    try {
      // Update the main fertilizer formula
      const formulaData = {
        ...formData,
        fertilizer_main_id: Number(formData.fertilizer_main_id),
        base_fertilizer_id: Number(formData.base_fertilizer_id),
        is_rice_fertilizer: Number(formData.is_rice_fertilizer)
      };
      console.log('formulaData:', formulaData);
      delete formulaData.test_item_id;
      await putFertilizerFormulas(id, formulaData);

      // Handle test item updates
      const existingTestItemIds = existingTestItems.map((item) => item.test_item_id);
      const newTestItemIds = formData.test_item_id;

      // Determine test items to delete (in existing but not in new)
      const testItemsToDelete = existingTestItems.filter((item) => !newTestItemIds.includes(item.test_item_id));

      // Determine test items to add (in new but not in existing)
      const testItemsToAdd = newTestItemIds.filter((testItemId) => !existingTestItemIds.includes(testItemId));

      // Determine test items to update (in both existing and new)
      const testItemsToUpdate = existingTestItems.filter((item) => newTestItemIds.includes(item.test_item_id));

      // Delete removed test items
      await Promise.all(testItemsToDelete.map((item) => deleteFertilizerFormulaTest(item.id)));

      // Update existing test items (if needed, here we just ensure they remain)
      await Promise.all(testItemsToUpdate.map((item) => putFertilizerFormulaTest(item.id, { test_item_id: item.test_item_id })));

      // Add new test items
      await Promise.all(
        testItemsToAdd.map((testItemId) =>
          postFertilizerFormulaTest({
            formula_id: id,
            test_item_id: Number(testItemId)
          })
        )
      );

      // Show success toast on successful update
      toast.success('แก้ไขสูตรปุ๋ยและรายการทดสอบสำเร็จ!', {
        autoClose: 3000
      });
      navigate('/admin/fertilizer-formulas'); // Redirect to the fertilizer formulas list page
    } catch (error) {
      setApiError('เกิดข้อผิดพลาดในการแก้ไขสูตรปุ๋ย กรุณาลองใหม่');
      console.error('Error updating fertilizer formula:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>แก้ไขสูตรปุ๋ย</h5>
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
                <TestItemMultiSelect
                  name="test_item_id"
                  value={formData.test_item_id}
                  onSelect={handleMultiSelectChange}
                  isInvalid={!!errors.test_item_id}
                />
                {errors.test_item_id && <div className="invalid-feedback d-block">{errors.test_item_id}</div>}
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

export default EditFertilizerFormulas;
