import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import CompanySelect from 'components/Selector/CompanySelect';

const Step1 = ({ values, errors, touched, handleChange, setFieldValue, company, spacialCon }) => {
  const analysisMethodOptions = [
    { value: 'is_registration_analysis', label: 'วิเคราะห์ขึ้นทะเบียน' },
    { value: 'is_quality_check_analysis', label: 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' }
  ];
  return (
    <Card className="m-0">
      <Card.Body className="pb-0">
        <h6>ข้อมูลผู้ขอขึ้นทะเบียน</h6>
        <Row className="mb-4">
          <Col md={6} className="mb-2">
            <p className="mb-0">
              ชื่อบริษัท : <strong className="text-dark">{company.company_name}</strong>
            </p>
          </Col>
          <Col md={6} className="mb-2">
            <p className="mb-0">
              เลขที่ผู้เสียภาษี : <strong className="text-dark">{company.tax_id}</strong>
            </p>
          </Col>
          <Col md={6} className="mb-2">
            <p className="mb-0">
              ที่อยู่ : <strong className="text-dark">{company.company_address}</strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="mb-0">
              เงื่อนไขพิเศษ :{' '}
              <strong className="text-dark">
                {spacialCon &&
                  spacialCon.length > 0 &&
                  spacialCon.map((x, index) => (index + 1 < spacialCon.length ? x.description : ` , ${x.description}`))}
              </strong>
            </p>
          </Col>
        </Row>
        {/* <Form.Group className="mb-3">
          <CompanySelect
            name="company_id"
            value={values.company_id}
            userId={values.user_id}
            isInvalid={errors.company_id}
            onSelect={(_, value) => {
              setFieldValue('company_id', value);
              handleGetCusSpacialCon(value);
            }}
          />
        </Form.Group> */}

        {/* {spacialCon.length > 0 && (
          <Form.Group className="mb-3">
            <Form.Label>เงื่อนไขพิเศษ :</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={spacialCon.map((x, index) => (index < spacialCon.length ? x.description : x.description + ' , '))}
            />
          </Form.Group>
        )} */}

        <Form.Group className="mb-3">
          <Form.Label>วัตถุประสงค์การขอใช้บริการ</Form.Label>
          <Form.Group>
            {analysisMethodOptions.map((option, idx) => (
              <Form.Check
                inline
                type="radio"
                name="analysisMethod"
                value={option.value}
                key={idx}
                label={option.label}
                checked={values.analysisMethod === option.value}
                onChange={handleChange}
                id={`reportCheck${idx}`}
              />
            ))}
          </Form.Group>
          {errors.analysisMethod && (
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
              {errors.analysisMethod}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ความต้องการอื่น</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="notes"
            placeholder="กรอกความต้องการอื่น"
            value={values.notes}
            onChange={handleChange}
            isInvalid={touched.notes && !!errors.notes}
          />
          <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default Step1;
