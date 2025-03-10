import React, { useEffect, useState } from 'react';
import { Row, Col, Alert, Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { authenUser, signIn } from 'services/_api/authentication';
import { getAllMenusRolesByID } from 'services/_api/permissionRequest';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const JWTLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  // ตรวจสอบการล็อกอินและ Redirect
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');

    if (authToken && userRole && isAuthenticated) {
      const redirectPath = userRole === 'user' ? '/dashboard' : '/admin/dashboard';
      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, navigate]); // ใช้ isAuthenticated เพื่อป้องกัน Infinite Loop

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
        // เก็บข้อมูลใน localStorage
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userRole', response.user.role);

        if (response.user.position) {
          localStorage.setItem('userPosition', response.user.position);
        }

        // ดึงและเก็บ Permissions
        await fetchUserPermissions(response.user.role_id);

        setIsAuthenticated(true); // อัปเดตสถานะหลังล็อกอินสำเร็จ

        const role = response.user.role;
        const redirectPath = location.state?.from?.pathname || (role === 'user' ? '/dashboard' : '/admin/dashboard');
        navigate(redirectPath, { replace: true });

        toast.success('Login successful');
      } else {
        console.warn('🔴 Login failed:', response.message);
        setErrors({ submit: response.message || 'Login failed' });
        toast.error(response.message || 'Login failed');
      }
    } catch (error) {
      console.error('🔴 Error logging in:', error);
      setErrors({ submit: error.message || 'An error occurred. Please try again.' });
      toast.error(error.message || 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUserPermissions = async (role_id) => {
    try {
      const data = await getAllMenusRolesByID(role_id);
      localStorage.setItem('permissions', JSON.stringify(data || []));
    } catch (error) {
      console.error('Error fetching permissions:', error);
      toast.error('Failed to fetch permissions');
    }
  };

  return (
    <Formik initialValues={initialValue} validationSchema={validations()} onSubmit={handleSubmit}>
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
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 text-start position-relative" controlId="password">
            <Form.Control
              placeholder="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
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
