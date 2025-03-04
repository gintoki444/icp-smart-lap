import React, { useState, useEffect } from 'react';
import { getAllCustomer } from 'services/_api/customerRequest';
import { getCustomerByUserID } from 'services/_api/usersRequest';
import { Form } from 'react-bootstrap';
import { getAllQuotationType } from 'services/_api/quotationRequest';

const QuotationTypeSelect = ({
  name = 'quotation_type_id',
  onSelect,
  value,
  disables,
  showText,
  isInvalid = false, // เพิ่ม prop สำหรับ validation status
  errorMessage = '' // เพิ่ม prop สำหรับข้อความ error
}) => {
  const [quotationType, setQuotationType] = useState([]);

  const getQuotationType = async () => {
    try {
      await getAllQuotationType().then((response) => {
        setQuotationType(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuotationType();
  }, []);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    console.log('selectedValue', selectedValue);
    onSelect(selectedValue);

    // if (onSelect.length === 1) {
    //   onSelect(quotationTypeId);
    // } else {
    //   onSelect(name, quotationTypeId);
    // }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        ประเภทใบเสนอราคา
        {showText ? (
          <>
            <span className="text-meta-1"> : </span>
            <strong>{quotationType.find((x) => x.quotation_type_id === value)?.quotation_type_name}</strong>
          </>
        ) : (
          <span className="text-meta-1">: </span>
        )}
      </Form.Label>
      {!showText && (
        <>
          <Form.Select
            value={value || ''}
            onChange={handleSelectChange}
            disabled={disables}
            style={{ padding: '8px 20px', fontSize: 14 }}
            isInvalid={isInvalid} // เพิ่ม属性 isInvalid
          >
            <option value="" disabled className="text-body dark:text-bodydark">
              เลือกประเภทใบส่งซื้อ
            </option>
            {quotationType.length > 0 &&
              quotationType.map((quotation, key) => (
                <option value={quotation.quotation_type_id} className="text-body dark:text-bodydark" key={key}>
                  {quotation.quotation_type_name}
                </option>
              ))}
          </Form.Select>
          {isInvalid && (
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
              {errorMessage || 'กรุณาเลือกประเภทใบส่งซื้อ'}
            </Form.Control.Feedback>
          )}
        </>
      )}
    </Form.Group>
  );
};

export default QuotationTypeSelect;
