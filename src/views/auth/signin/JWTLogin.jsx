import React, { useEffect, useState } from 'react';
import { Row, Col, Alert, Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { authenUser, signIn } from 'services/_api/authentication';
import { getAllMenusRolesByID } from 'services/_api/permissionRequest';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const JWTLogin = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');
  const [showPassword, setShowPassword] = useState(false);

  // ตรวจสอบ authToken และ Redirect ถ้ามี
  useEffect(() => {
    if (authToken && userRole) {
      navigate(userRole === 'admin' ? '/admin/dashboard' : '/user/dashboard', { replace: true });
    }
  }, [authToken, userRole, navigate]);

  const initialValue = {
    email: '',
    password: '',
    submit: null
  };

  const validations = () =>
    Yup.object().shape({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      password: Yup.string().max(255).required('Password is required')
    });

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    setSubmitting(true);

    try {
      const response = await signIn(values);

      if (response && response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userRole', response.user.role);

        await fetchUserPermissions(response.user.role_id);

        // ✅ Redirect ไปหน้า Dashboard ตาม Role
        navigate(response.user.role === 'user' ? '/user/dashboard' : '/admin/dashboard', { replace: true });
      } else {
        console.warn('🔴 Login failed:', response.message);
        setErrors({ submit: response.message });
      }
    } catch (error) {
      console.error('🔴 Error logging in:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUserPermissions = async (role_id) => {
    try {
      const data = await getAllMenusRolesByID(role_id);
      localStorage.setItem('permissions', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching permissions:', error);
    }
  };

  return (
    <Formik initialValues={initialValue} validationSchema={validations} onSubmit={handleSubmit}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start" controlId="email">
            <Form.Control
              placeholder="Email Address / Username"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              isInvalid={touched.email && !!errors.email} // แก้ไขเงื่อนไขให้ถูกต้อง
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 text-start position-relative" controlId="password">
            <Form.Control
              placeholder="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'} // เปลี่ยน type ตาม state
              value={values.password}
              isInvalid={touched.password && !!errors.password}
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

          {errors.submit && (
            <Col sm={12}>
              <Alert variant="danger">{errors.submit}</Alert>
            </Col>
          )}

          <Row>
            <Col mt={2}>
              <Button className="btn-block mb-4" variant="primary" disabled={isSubmitting} type="submit">
                Signin
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default JWTLogin;
