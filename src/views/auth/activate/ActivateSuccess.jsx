import React from 'react';
import { Card, Row, Col, Form, Button, Alert } from 'react-bootstrap'; // เพิ่ม Alert
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import { activateEmail } from 'services/_api/authentication';

const ActivateSuccess = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      token: '',
      submit: null // เพิ่ม field สำหรับเก็บ error จาก server
    },
    validationSchema: Yup.object({
      token: Yup.string().length(4, 'Token ต้องมี 4 ตัวอักษร').required('กรุณากรอก Token')
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await activateEmail(values.token);
        if (response.message === 'Account activated successfully. You can now log in.') {
          alert('ยืนยันอีเมล์สำเร็จ!');
          navigate('/auth/activate-success');
        }
      } catch (error) {
        let errorMessage = 'เกิดข้อผิดพลาดในการยืนยันอีเมล์';
        if (error.message.includes('400')) {
          errorMessage = 'Token ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง';
        } else if (error.message.includes('404')) {
          errorMessage = 'ไม่พบ Token นี้ กรุณาขอ Token ใหม่';
        } else if (error.message.includes('500')) {
          errorMessage = 'เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่ภายหลัง';
        }
        setErrors({ submit: errorMessage }); // ใช้ setErrors เพื่อเก็บข้อความ error
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <Row className="justify-content-center">
                <div className="mb-0">
                  <img className="img-fluid" src={logo} alt="logo" width={120} />
                </div>
                <Col md={12}>
                  <AiOutlineCheckCircle size={60} className="text-success mb-4" />
                  <h3 className="mb-4">ยืนยันอีเมล์สำเร็จ!</h3>
                  <p className="mb-4">ขอบคุณที่ยืนยันตัวตนของคุณ ตอนนี้บัญชีของคุณพร้อมใช้งานแล้ว</p>
                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to={'/auth/signin'} className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Col>
                {/* <Col md={12}>
                  <h3 className="mb-4">Activate E-mail</h3>
                  <p className="mb-4">
                    กรอก Token ที่ได้รับจาก <br />
                    อีเมล์เพื่อยืนยันตัวตน
                  </p>
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

                    {formik.errors.submit && (
                      <Alert variant="danger" className="mb-3">
                        {formik.errors.submit}
                      </Alert>
                    )}

                    <Button variant="primary" type="submit" className="btn-block mb-4" disabled={formik.isSubmitting}>
                      Activate
                    </Button>
                  </Form>
                  <p className="mb-2 text-muted">
                    <NavLink to={'/auth/resend-token'} className="f-w-400">
                      Re-send activate token?
                    </NavLink>
                  </p>
                  <p className="mb-2 text-muted">
                    Already have an account?{' '}
                    <NavLink to={'/auth/signin'} className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActivateSuccess;
