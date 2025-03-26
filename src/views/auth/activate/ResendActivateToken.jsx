import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // เพิ่ม toast สำหรับแจ้งเตือน
import logo from '../../../assets/images/logo/logo.png';
import { resendActivatetoken } from 'services/_api/authentication'; // นำเข้า API resendActivatetoken

const ResendActovateToken = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // เรียก API resendActivatetoken ด้วยข้อมูล email
        const data = { email: values.email };
        const response = await resendActivatetoken(data);

        // ตรวจสอบการตอบกลับจาก API (สมมติว่าถ้าสำเร็จจะมี response หรือ status ที่ระบุ)
        if (response) {
          toast.success('ส่ง Token ใหม่สำเร็จ! กรุณาตรวจสอบอีเมล์ของคุณ', { autoClose: 3000 });
          navigate('/auth/activate-token'); // เปลี่ยนเส้นทางไปที่ /auth/activate-token
        }
      } catch (error) {
        console.error('Error resending activate token:', error);
        toast.error(`เกิดข้อผิดพลาดในการส่ง Token: ${error.message || 'กรุณาลองใหม่'}`, { autoClose: 3000 });
      } finally {
        setSubmitting(false); // รีเซ็ตสถานะ submitting
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
                  <h3 className="mb-4">Resend Activation Token</h3>
                  <p className="mb-4">
                    กรอกอีเมลที่ใช้สมัครสมาชิก
                    <br /> เพื่อรับโทเคนใหม่อีกครั้ง
                  </p>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && !!formik.errors.email} // แก้ไขจาก formik.errors.v เป็น formik.errors.email
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-block mb-4"
                      disabled={formik.isSubmitting} // ปิดปุ่มเมื่อกำลังส่งข้อมูล
                    >
                      {formik.isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      ) : (
                        'Resend'
                      )}
                    </Button>
                  </Form>
                  <p className="mb-1 text-muted">
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

export default ResendActovateToken;
