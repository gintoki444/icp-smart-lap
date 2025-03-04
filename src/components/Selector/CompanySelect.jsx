import React, { useState, useEffect } from 'react';
import { getAllCustomer } from 'services/_api/customerRequest';
import { getCustomerByUserID } from 'services/_api/usersRequest';
import { Form } from 'react-bootstrap';

const CompanySelect = ({
  name = 'company_id',
  onSelect,
  value,
  disables,
  showText,
  userId,
  isInvalid = false, // เพิ่ม prop สำหรับ validation status
  errorMessage = '' // เพิ่ม prop สำหรับข้อความ error
}) => {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      console.log('userId', userId);
      if (userId) {
        await getCustomerByUserID(userId).then((response) => {
          setCompanies(response.filter((x) => x.status === 'approved'));
        });
      } else {
        await getAllCustomer().then((response) => {
          setCompanies(response);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const companyId = selectedValue ? Number(selectedValue) : null;

    if (onSelect.length === 1) {
      onSelect(companyId);
    } else {
      onSelect(name, companyId);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        บริษัท
        {showText ? (
          <>
            <span className="text-meta-1"> : </span>
            <strong>{companies.find((x) => x.company_id === value)?.company_name}</strong>
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
              เลือกบริษัท
            </option>
            {companies.length > 0 &&
              companies.map((company, key) => (
                <option value={company.company_id} className="text-body dark:text-bodydark" key={key}>
                  {company.company_name}
                </option>
              ))}
          </Form.Select>
          {isInvalid && (
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
              {errorMessage || 'กรุณาเลือกบริษัท'}
            </Form.Control.Feedback>
          )}
        </>
      )}
    </Form.Group>
  );
};

export default CompanySelect;
