// SignUp1.jsx
import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Signup } from 'services/_api/authentication';

const SignUp1 = () => {
  const navigate = useNavigate();

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
      password: Yup.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร').required('กรุณากรอกรหัสผ่าน'),
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
                      <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อ"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.first_name && errors.first_name && <small className="text-danger">{errors.first_name}</small>}
                        </div>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="นามสกุล"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.last_name && errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                        </div>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="อีเมล์"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="เบอร์โทรศัพท์"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.phone && errors.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="รหัสผ่าน"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="form-group mb-3 text-start">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="ยืนยันรหัสผ่าน"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.confirmPassword && errors.confirmPassword && (
                            <small className="text-danger">{errors.confirmPassword}</small>
                          )}
                        </div>
                        <div className="form-check text-start mb-4 mt-2">
                          <input type="checkbox" className="form-check-input" id="customCheck1" />
                          <label className="form-check-label" htmlFor="customCheck1">
                            Send me the <Link to="#">Newsletter</Link> weekly.
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-4">
                          Sign up
                        </button>
                        <p className="mb-2">
                          Already have an account?{' '}
                          <NavLink to={'/auth/signin'} className="f-w-400">
                            Login
                          </NavLink>
                        </p>
                      </form>
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
