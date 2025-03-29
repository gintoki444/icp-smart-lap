import React, { useState } from 'react'; // เพิ่ม useState
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, NavLink } from 'react-router-dom';

import logo from '../../../assets/images/logo/logo.png';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { postResetPassRequest } from 'services/_api/authentication';

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล')
    }),
    onSubmit: (values) => {
      console.log('Reset Password:', values);
      try {
        postResetPassRequest(values).then((response) => {
          if (response.message === 'รหัสรีเซ็ตรหัสผ่านถูกส่งไปยังอีเมลของคุณแล้ว') {
            alert('รหัสรีเซ็ตรหัสผ่านถูกส่งไปยังอีเมลของคุณแล้ว');
            navigate('/auth/new-password');
          }
        });
      } catch (error) {
        alert(error);
      }
    }
  });

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-4">
                <img className="img-fluid" src={logo} alt="logo" width={120} />
              </div>
              <h3 className="mb-4">Verify E-mail</h3>
              <p className="mb-4">
                กรอกอีเมลที่ใช้สมัครสมาชิก <br />
                เพื่อรับโทเคนสำหรับรีเซ็ตรหัสผ่าน
              </p>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.email && formik.touched.email}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block mb-4">
                  Verify Email
                </Button>
              </Form>
              <p className="mb-1 text-muted">
                Already have a reset token?{' '}
                <NavLink to="/auth/new-password" className="f-w-400">
                  Reset Password
                </NavLink>
              </p>
              <p className="mb-1 text-muted">
                Remember your password?{' '}
                <NavLink to="/auth/signin" className="f-w-400">
                  Login
                </NavLink>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
