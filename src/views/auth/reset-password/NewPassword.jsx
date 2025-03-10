import React, { useState } from 'react'; // เพิ่ม useState
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, NavLink, useParams } from 'react-router-dom';

import logo from '../../../assets/images/logo/logo.png';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { postNewPassword } from 'services/_api/authentication';

const NewPassword = () => {
  const { token } = useParams('token');

  console.log('token', token);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // state สำหรับรหัสผ่าน
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // state สำหรับยืนยันรหัสผ่าน

  const formik = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().length(6, 'Token ต้องมี 6 ตัวอักษร').required('กรุณากรอก Token'),
      password: Yup.string()
        .min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
        .matches(/[0-9]/, 'รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว')
        .matches(/[A-Z]/, 'รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว')
        .matches(/[^A-Za-z0-9]/, 'รหัสผ่านต้องมีอักขระพิเศษอย่างน้อย 1 ตัว')
        .required('กรุณากรอกรหัสผ่าน'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน')
    }),
    onSubmit: (values) => {
      console.log('Reset Password:', values);
      try {
        const newpass = {
          token: values.token,
          newPassword: values.password
        };
        postNewPassword(newpass).then((response) => {
          if (response.message !== 'Token ไม่ถูกต้องหรือหมดอายุ') {
            alert('รีเซ็ตรหัสผ่านสำเร็จ! กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่');
            navigate('/auth/signin');
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
              <h3 className="mb-4">New Password</h3>
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
                  <Form.Control.Feedback type="invalid">{formik.errors.token}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.password && formik.touched.password}
                  />
                  <span
                    className="position-absolute"
                    style={{
                      right: formik.errors.password ? 30 : '10px',
                      top: formik.errors.password ? '30%' : '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                  </span>
                  <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 position-relative">
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
                  />
                  <span
                    className="position-absolute"
                    style={{
                      right: formik.errors.password ? 30 : '10px',
                      top: formik.errors.password ? '30%' : '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                  </span>
                  <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block mb-4">
                  Reset Password
                </Button>
              </Form>
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

export default NewPassword;
