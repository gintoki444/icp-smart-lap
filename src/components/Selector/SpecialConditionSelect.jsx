import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import { getAllSpecialConditions } from 'services/_api/specialConditionsRequest';

const SpecialConditionSelect = ({ name = 'condition_id', onSelect, value = [], disables }) => {
  const [specialConditions, setSpecialConditions] = useState([]);

  useEffect(() => {
    const fetchSpecialConditions = async () => {
      try {
        const response = await getAllSpecialConditions();
        setSpecialConditions(response || []);
      } catch (error) {
        console.error('Error fetching special conditions:', error);
      }
    };

    fetchSpecialConditions();
  }, []);

  const options = specialConditions.map((sc) => ({
    value: sc.condition_id,
    label: sc.description
  }));

  const handleSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];

    if (typeof onSelect === 'function') {
      onSelect(name, selectedValues);
    }
  };

  return (
    <Form.Group className="mb-2">
      <Form.Label>เงื่อนไขพิเศษ :</Form.Label>
      <Select
        name={name}
        value={Array.isArray(value) ? options.filter((option) => value.includes(option.value)) : []}
        onChange={handleSelectChange}
        isMulti
        isDisabled={disables}
        options={options}
        placeholder="เลือกเงื่อนไขพิเศษ"
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

export default SpecialConditionSelect;
