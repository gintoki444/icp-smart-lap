import React, { useEffect } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'services/_api/authentication';

const JWTLogin = () => {
  const navigate = useNavigate();

  // ตรวจสอบ authToken และ Redirect ถ้ามี
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');

    if (authToken) {
      // Redirect ไปหน้า Dashboard ตาม Role
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'user') {
        navigate('/user/dashboard');
      }
    }
  }, [navigate]);

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
    // const { email, password } = values;
    const response = await signIn(values);

    if (response.token) {
      // Save user data to Local Storage
      localStorage.setItem('authToken', response.token); // Mock Token
      localStorage.setItem('userRole', response.user.role); // Save Role

      // Redirect based on role
      if (response.user.role === 'admin') {
        navigate('/admin/'); // Redirect to Admin Dashboard
      } else if (response.user.role === 'user') {
        navigate('/user/'); // Redirect to User Dashboard
      }
    } else {
      setErrors({ submit: response.message });
    }

    setSubmitting(false);
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
