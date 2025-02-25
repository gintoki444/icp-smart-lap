import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import CompanySelect from 'components/Selector/CompanySelect';

const Step1 = ({ values, errors, touched, handleChange, setFieldValue, spacialCon, handleGetCusSpacialCon }) => {
  const analysisMethodOptions = [
    { value: 'is_registration_analysis', label: 'วิเคราะห์ขึ้นทะเบียน' },
    { value: 'is_quality_check_analysis', label: 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' }
  ];
  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <h5>รายละเอียดบริษัท</h5>
            <CompanySelect
              name="company_id"
              value={values.company_id}
              userId={values.user_id}
              onSelect={(_, value) => {
                setFieldValue('company_id', value);
                handleGetCusSpacialCon(value);
              }}
            />
            {touched.company_id && errors.company_id && <Form.Control.Feedback type="invalid">{errors.company_id}</Form.Control.Feedback>}
            {spacialCon.length > 0 && (
              <Form.Group className="mb-3">
                <Form.Label>เงื่อนไขพิเศษ :</Form.Label>
                <Form.Control type="text" readOnly value={spacialCon.find((x) => x.company_id === values.company_id)?.description || ''} />
              </Form.Group>
            )}
            <Form.Group className="mb-2">
              <Form.Label>วัตถุประสงค์การขอใช้บริการ</Form.Label>
              <Form.Group>
                {analysisMethodOptions.map((option, idx) => (
                  <Form.Check
                    inline
                    type="radio"
                    name="analysisMethod"
                    value={option.value} // ใช้ option.value เป็น string
                    key={idx}
                    label={option.label} // ใช้ option.label เป็น string
                    checked={values.analysisMethod === option.value}
                    onChange={handleChange}
                    id={`reportCheck${idx}`}
                  />
                ))}
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
                />
              </Form.Group>
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Step1;
