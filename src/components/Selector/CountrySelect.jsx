import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import i18nCountries from 'i18n-iso-countries';
import thLocale from 'i18n-iso-countries/langs/th.json';

// โหลดข้อมูลภาษาไทย
i18nCountries.registerLocale(thLocale);

const CountrySelect = ({ name, value, onChange, errors, touched, label = 'เลือกประเทศ' }) => {
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    // ดึงรายชื่อประเทศทั้งหมดในภาษาไทย
    const countries = i18nCountries.getNames('th', { select: 'official' });
    const options = Object.entries(countries)
      .map(([code, name]) => ({
        value: code,
        label: name
      }))
      .sort((a, b) => a.label.localeCompare(b.label, 'th')); // เรียงตามตัวอักษรไทย
    setCountryOptions(options);
  }, []);

  const handleChange = (selectedOption) => {
    const newValue = selectedOption ? selectedOption.value : null;
    onChange(name, newValue); // เรียก onChange ที่ Formik ส่งมา (setFieldValue)
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Select
        options={countryOptions}
        value={countryOptions.find((option) => option.value === value) || null}
        onChange={handleChange}
        placeholder="เลือกประเทศ..."
        isClearable
        noOptionsMessage={() => 'ไม่พบประเทศ'}
      />
      {touched[name] && errors[name] && (
        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
          {errors[name]}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default CountrySelect;
