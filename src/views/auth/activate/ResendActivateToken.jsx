// ResendActovateToken.jsx
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import { activateEmail } from 'services/_api/authentication';

const ResendActovateToken = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์')
    }),
    onSubmit: (values) => {
      console.log('Reset Password:', values);
      alert('รีเซ็ตรหัสผ่านสำเร็จ! กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่');
      navigate('/auth/signin');
    }
  });

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <Row className="justify-content-center">
                <div className="mb-0">
                  <img className="img-fluid" src={logo} alt="logo" width={120} />
                </div>
                <Col md={12}>
                  <h3 className="mb-4">Resend activate token</h3>
                  <p className="mb-4">กรอกอีเมล์ที่สมัครสมาชิกเพื่อรับ token</p>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.v && formik.touched.email}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block mb-4">
                      Re-send
                    </Button>
                  </Form>
                  <p className="mb-1 text-muted">
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

export default ResendActovateToken;
