import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import { getAllTestItems } from 'services/_api/testItemsRequest';

const TestItemMultiSelect = ({ name = 'test_item_id', onSelect, value = [], disables }) => {
  const [testItems, setTestItems] = useState([]);

  useEffect(() => {
    const fetchTestItems = async () => {
      try {
        const response = await getAllTestItems();
        setTestItems(response || []);
      } catch (error) {
        console.error('Error fetching test items:', error);
      }
    };

    fetchTestItems();
  }, []);

  const options = testItems.map((sc) => ({
    value: sc.test_item_id,
    label: sc.test_name
  }));

  const handleSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    const selectedLabels = selectedOptions ? selectedOptions.map((option) => option.label) : [];

    if (typeof onSelect === 'function') {
      onSelect(name, selectedValues, selectedLabels); // Pass both values and labels
    }
  };

  return (
    <Form.Group className="mb-2">
      <Form.Label>รายการทดสอบ :</Form.Label>
      <Select
        name={name}
        value={Array.isArray(value) ? options.filter((option) => value.includes(option.value)) : []}
        onChange={handleSelectChange}
        isMulti
        isDisabled={disables}
        options={options}
        placeholder="เลือกรายการทดสอบ"
        styles={{
          control: (provided) => ({
            ...provided,
            padding: '1px 20px',
            fontSize: 14
          })
        }}
      />
    </Form.Group>
  );
};

export default TestItemMultiSelect;
