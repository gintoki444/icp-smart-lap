import React, { useEffect, useState } from 'react'; // เพิ่ม useEffect และ useState
import { Card, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; // เพิ่ม useLocation
import logo from '../../../assets/images/logo/logo.png';
import { activateEmail } from 'services/_api/authentication';

const ActivateToken = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ใช้ useLocation เพื่อดึง URL
  const [serverError, setServerError] = useState(null); // state สำหรับเก็บ error จาก server

  // ดึงค่า token จาก query string
  const queryParams = new URLSearchParams(location.search);
  const tokenFromUrl = queryParams.get('token') || ''; // ดึงค่า token จาก URL ถ้าไม่มีให้เป็น string ว่าง

  const formik = useFormik({
    initialValues: {
      token: tokenFromUrl, // ใช้ค่า token จาก URL เป็นค่าเริ่มต้น
      submit: null
    },
    validationSchema: Yup.object({
      token: Yup.string().length(4, 'Token ต้องมี 4 ตัวอักษร').required('กรุณากรอก Token') // ปรับตามความยาวของ 29994
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setSubmitting(true);
      setServerError(null); // รีเซ็ต error ก่อน submit
      try {
        const response = await activateEmail(values.token);
        if (response.message === 'Account activated successfully. You can now log in.') {
          navigate('/auth/activate-success');
        }
      } catch (error) {
        let errorMessage = 'เกิดข้อผิดพลาดในการยืนยันอีเมล';
        if (error.message.includes('400')) {
          errorMessage = 'Token ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง';
        } else if (error.message.includes('404')) {
          errorMessage = 'ไม่พบ Token นี้ กรุณาขอ Token ใหม่';
        } else if (error.message.includes('500')) {
          errorMessage = 'เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่ภายหลัง';
        }
        setErrors({ submit: errorMessage });
        setServerError(errorMessage); // เก็บ error ไว้ใน state
      } finally {
        setSubmitting(false);
      }
    }
  });

  // ตรวจสอบ token ทันทีเมื่อหน้าโหลด ถ้ามี token ใน URL
  useEffect(() => {
    if (tokenFromUrl) {
      formik.handleSubmit(); // เรียก submit ทันทีที่มี token
    }
  }, [tokenFromUrl]); // ทำงานเมื่อ tokenFromUrl เปลี่ยน

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
                  <h3 className="mb-4">Activate Email</h3>
                  <p className="mb-4">
                    กรอกโทเคนที่ได้รับทางอีเมล <br />
                    เพื่อยืนยันตัวตน
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

                    {/* แสดงข้อความ error จาก server */}
                    {serverError && (
                      <Alert variant="danger" className="mb-3">
                        {serverError}
                      </Alert>
                    )}

                    <Button variant="primary" type="submit" className="btn-block mb-4" disabled={formik.isSubmitting}>
                      Activate
                    </Button>
                  </Form>
                  <p className="mb-2 text-muted">
                    Didn't receive the token?{' '}
                    <NavLink to={'/auth/resend-token'} className="f-w-400">
                      Resend
                    </NavLink>
                  </p>
                  <p className="mb-2 text-muted">
                    Already have an account?{' '}
                    <NavLink to={'/auth/signin'} className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActivateToken;
