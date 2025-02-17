// ActivateToken.jsx
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';

const ActivateToken = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      token: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, 'Token ต้องมี 4 ตัวอักษร')
        .required('กรุณากรอก Token')
    }),
    onSubmit: (values) => {
      console.log('Token:', values.token);
      alert('ยืนยันอีเมล์สำเร็จ!');
      navigate('/auth/activate-success');
    }
  });

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Card.Body>
              <Row className="justify-content-center">
                
                                  <div className="mb-0">
                                    <img className="img-fluid" src={logo} alt="logo" width={120} />
                                  </div>
                <Col md={12}>
                  <h3 className="mb-4">Activate E-mail</h3>
                  <p className="mb-4">กรอก Token ที่คุณได้รับจากอีเมล์เพื่อยืนยันตัวตน</p>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Enter Token"
                        name="token"
                        value={formik.values.token}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.token && formik.touched.token}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.token}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block mb-4">
                      Activate
                    </Button>
                  </Form>
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

export default ActivateToken;
