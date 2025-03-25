import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';

const FertilicerTypeSelect = ({ name = 'fertilizer_type_id', onSelect, value, disables, showText, userId }) => {
  const [fertilizerTypes, setFertilizerTypes] = useState([]);

  const getAllFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFertilizerTypes();
  }, []);

  // แปลงข้อมูล fertilizerTypes เป็นรูปแบบ options ที่ react-select ต้องการ
  const options = fertilizerTypes.map((ft) => ({
    value: ft.fertilizer_type_id,
    label: ft.fertilizer_type_name
  }));

  const handleSelectChange = (selectedOption) => {
    const selectedValue = selectedOption ? Number(selectedOption.value) : null;
    if (onSelect.length === 1) {
      onSelect(selectedValue);
    } else {
      onSelect(name, selectedValue);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        ลักษณะปุ๋ย
        {showText ? (
          <>
            <span className="text-meta-1"> : </span>
            <strong>{fertilizerTypes.find((x) => x.fertilizer_type_id === value)?.fertilizer_type_name}</strong>
          </>
        ) : (
          <span className="text-meta-1">: </span>
        )}
      </Form.Label>
      {!showText && (
        <Select
          name={name}
          value={options.find((option) => option.value === value) || null}
          onChange={handleSelectChange}
          isDisabled={disables}
          options={options}
          placeholder="เลือกลักษณะปุ๋ย"
          styles={{
            control: (provided) => ({
              ...provided,
              padding: '7px 20px',
              fontSize: 15
            })
          }}
        />
      )}
    </Form.Group>
  );
};

export default FertilicerTypeSelect;
