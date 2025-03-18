import React, { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap'; // เพิ่ม Alert
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';

import logo from '../../../assets/images/logo/logo.png';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { postNewPassword } from 'services/_api/authentication';

const NewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState(null); // state สำหรับเก็บข้อความ error จาก server

  // ดึงค่า token จาก query string
  const queryParams = new URLSearchParams(location.search);
  const tokenFromUrl = queryParams.get('token') || '';

  console.log('token from URL:', tokenFromUrl);

  const formik = useFormik({
    initialValues: {
      token: tokenFromUrl,
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().length(6, 'Token ต้องมี 6 ตัวอักษร').required('กรุณากรอก Token'), // ปรับจาก 6 เป็น 5 ตามตัวอย่าง 29994
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
    onSubmit: async (values, { setSubmitting }) => {
      // เพิ่ม setSubmitting เพื่อจัดการสถานะการ submit
      setSubmitting(true);
      setServerError(null); // รีเซ็ต error ก่อนส่ง
      try {
        const newpass = {
          token: values.token,
          newPassword: values.password
        };
        const response = await postNewPassword(newpass); // เปลี่ยนเป็น async/await เพื่อจัดการ error ได้ดีขึ้น
        if (response.message !== 'Token ไม่ถูกต้องหรือหมดอายุ') {
          alert('รีเซ็ตรหัสผ่านสำเร็จ! กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่');
          navigate('/auth/signin');
        }
      } catch (error) {
        let errorMessage = 'เกิดข้อผิดพลาดในการรีเซ็ตรหัสผ่าน';
        if (error.message === 'Token ไม่ถูกต้องหรือหมดอายุ') {
          errorMessage = 'Token ไม่ถูกต้องหรือหมดอายุแล้ว กรุณาขอใหม่';
        } else if (error.message === 'Token ถูกใช้ไปแล้ว') {
          // เพิ่มเงื่อนไขตามที่ API อาจจะส่งมา
          errorMessage = 'Token นี้ถูกใช้ไปแล้ว กรุณาขอใหม่';
        } else if (error.message.includes('400')) {
          errorMessage = 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง';
        } else if (error.message.includes('500')) {
          errorMessage = 'เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่ภายหลัง';
        }
        setServerError(errorMessage); // เก็บข้อความ error ใน state
      } finally {
        setSubmitting(false); // รีเซ็ตสถานะ submitting
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

                {/* แสดงข้อความ error จาก server */}
                {serverError && (
                  <Alert variant="danger" className="mb-3">
                    {serverError}
                  </Alert>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="btn-block mb-4"
                  disabled={formik.isSubmitting} // ปิดปุ่มเมื่อกำลัง submit
                >
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
