import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const ActivateSuccess = () => {
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Card.Body>
              <Row className="justify-content-center">
                <Col md={6}>
                  <AiOutlineCheckCircle size={60} className="text-success mb-4" />
                  <h3 className="mb-4">ยืนยันอีเมล์สำเร็จ!</h3>
                  <p className="mb-4">ขอบคุณที่ยืนยันตัวตนของคุณ ตอนนี้บัญชีของคุณพร้อมใช้งานแล้ว</p>
                    <p className="mb-2">
                       Already have an account?{' '}
                      <NavLink to={'/auth/signin'} className="f-w-400">
                        Login
                      </NavLink>
                    </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActivateSuccess;
