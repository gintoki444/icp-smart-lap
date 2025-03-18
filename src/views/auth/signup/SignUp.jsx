import React, { useState } from 'react';
import { Card, Row, Alert, Col, Form, Button } from 'react-bootstrap'; // เพิ่ม Form และ Button
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Signup } from 'services/_api/authentication';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const SignUp1 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValue = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: 'user',
    password: '',
    confirmPassword: ''
  };

  const validateValue = () =>
    Yup.object({
      first_name: Yup.string().min(3, 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
      last_name: Yup.string().min(3, 'นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกนามสกุล'),
      email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
        .required('กรุณากรอกเบอร์โทรศัพท์'),
      password: Yup.string()
        .min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
        .matches(/[0-9]/, 'รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว')
        .matches(/[A-Z]/, 'รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว')
        .matches(/[^A-Za-z0-9]/, 'รหัสผ่านต้องมีอักขระพิเศษอย่างน้อย 1 ตัว')
        .required('กรุณากรอกรหัสผ่าน'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน')
    });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      values.username = values.email;
      const response = await Signup(values);

      if (response.userId) {
        alert('สมัครสมาชิกสำเร็จ กรุณาตรวจสอบอีเมล์เพื่อยืนยันตัวตน');
        navigate('/auth/activate-token');
      } else {
        setErrors({ submit: err.message });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

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
          <Card className="borderless">
            <Row className="align-items-center">
              <Col>
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <img className="img-fluid" src={logo} alt="logo" width={120} />
                  </div>
                  <h3 className="mb-4">Sign up</h3>
                  <Formik initialValues={initialValue} validationSchema={validateValue} onSubmit={handleSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-start">
                          <Form.Control
                            type="text"
                            placeholder="ชื่อ"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.first_name && touched.first_name}
                          />
                          <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                          <Form.Control
                            type="text"
                            placeholder="นามสกุล"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.last_name && touched.last_name}
                          />
                          <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                          <Form.Control
                            type="email"
                            placeholder="อีเมล์"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.email && touched.email}
                          />
                          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                          <Form.Control
                            type="text"
                            placeholder="ตัวอย่าง: 0812345678"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.phone && touched.phone}
                          />
                          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start position-relative">
                          <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="รหัสผ่าน"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.password && touched.password}
                          />
                          <span
                            className="position-absolute"
                            style={{
                              right: errors.password ? 30 : '10px',
                              top: errors.password ? '30%' : '50%',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer'
                            }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                          </span>
                          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start position-relative">
                          <Form.Control
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="ยืนยันรหัสผ่าน"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                          />
                          <span
                            className="position-absolute"
                            style={{
                              right: errors.confirmPassword ? 30 : '10px',
                              top: errors.confirmPassword ? '30%' : '50%',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer'
                            }}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                          </span>
                          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                        </Form.Group>

                        {errors.submit && (
                          <Col sm={12}>
                            <Alert variant="danger">{errors.submit}</Alert>
                          </Col>
                        )}

                        <Button type="submit" variant="primary" className="mb-4">
                          Sign up
                        </Button>
                        <p className="mb-1 text-muted">
                          Already have an account?{' '}
                          <NavLink to={'/auth/signin'} className="f-w-400">
                            Login
                          </NavLink>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp1;
