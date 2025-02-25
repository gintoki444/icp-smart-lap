import React, { useEffect } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { authenUser, signIn } from 'services/_api/authentication';
import { getAllMenusRolesByID } from 'services/_api/permissionRequest';

const JWTLogin = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');

  // ตรวจสอบ authToken และ Redirect ถ้ามี
  useEffect(() => {
    if (authToken && userRole) {
      console.log('✅ Redirecting to dashboard...');
      console.log('✅ authToken', authToken);
      console.log('✅ userRole', userRole);
      navigate(userRole === 'admin' ? '/admin/dashboard' : '/user/dashboard', { replace: true });
    }
  }, []);

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
        console.log('✅ Login successful, saving to localStorage...');
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
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group mb-3 text-start">
            <input
              className="form-control"
              placeholder="Email Address / Username"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
          </div>
          <div className="form-group mb-4 text-start">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
          </div>

          {/* <div className="custom-control custom-checkbox  text-start mb-4 mt-2">
            <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Save credentials.
            </label>
          </div> */}

          {errors.submit && (
            <Col sm={12}>
              <Alert variant="danger">{errors.submit}</Alert>
            </Col>
          )}

          <Row>
            <Col mt={2}>
              <Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                Signin
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;
