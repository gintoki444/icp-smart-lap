import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, NavLink } from 'react-router-dom'; // เพิ่ม NavLink ที่นี่

import logo from '../../../assets/images/logo/logo.png';

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('รูปแบบอีเมล์ไม่ถูกต้อง')
        .required('กรุณากรอกอีเมล์'),
      password: Yup.string()
        .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
        .required('กรุณากรอกรหัสผ่าน'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน')
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
              <h3 className="mb-4">Reset Password</h3>
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
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.password && formik.touched.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block mb-4">
                  Reset Password
                </Button>
              </Form>
              <p className="mb-2">
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
