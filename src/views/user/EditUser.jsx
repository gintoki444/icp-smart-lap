import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// api request
import * as userRequest from 'services/_api/usersRequest';
import { getAllRoles } from 'services/_api/rolesRequest';
import { getAllDepartments } from 'services/_api/departmentRequest';

function AddEdit() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const location = useLocation();
  const usersFromState = location.state?.users || null;

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!usersFromState) navigate('/admin/');

    getRoles();
    getDepartments();
  }, []);

  // useEffect(() => {}, []);
  const getRoles = () => {
    getAllRoles().then((result) => {
      if (result) {
        setRoles(result);
      }
    });
  };
  const getDepartments = () => {
    getAllDepartments().then((result) => {
      if (result) {
        setDepartments(result);
      }
    });
  };

  let initialValue = {
    id: usersFromState?.id,
    first_name: usersFromState?.first_name,
    last_name: usersFromState?.last_name,
    email: usersFromState?.email,
    phone: usersFromState?.phone,
    role_id: usersFromState?.role_id,
    dept_id: usersFromState?.dept_id
  };

  const validateValue = () =>
    Yup.object({
      first_name: Yup.string().min(3, 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
      last_name: Yup.string().min(3, 'นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกนามสกุล'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
        .required('กรุณากรอกเบอร์โทรศัพท์')
    });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      delete values.email;

      const response = await userRequest.putUser(values, values.id);
      if (response) {
        toast.success('แก้ไขข้อมูลผู้ใช้งานสำเร็จ!', { autoClose: 3000 });
        navigate('/admin/user/');
      }
    } catch (err) {
      console.error(err);
      toast.error(`แก้ไขข้อมูลไม่สำเร็จ: ${err.message}`, { autoClose: 3000 });
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };
  return (
    <Row>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">แก้ไขข้อมูลผู้ใช้งาน</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Formik initialValues={initialValue} validationSchema={validateValue} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>ชื่อ:</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ชื่อ"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.first_name && !!errors.first_name}
                      />
                      {touched.first_name && errors.first_name && (
                        <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>นามสกุล :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="นามสกุล"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.last_name && !!errors.last_name}
                      />
                      {touched.last_name && errors.last_name && (
                        <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>อีเมล์ :</Form.Label>
                      <Form.Control
                        type="email"
                        className="form-control"
                        placeholder="อีเมล์"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      {touched.email && errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ตัวอย่าง: 0812345678"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      {touched.phone && errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Role:</Form.Label>
                      <Form.Select
                        name="role_id"
                        style={{ padding: '10px 20px' }}
                        value={values.role_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.role_id && !!errors.role_id}
                      >
                        <option value="">เลือก Role</option>
                        {roles.map((role) => (
                          <option key={role.role_id} value={role.role_id}>
                            {role.role_name}
                          </option>
                        ))}
                      </Form.Select>
                      {touched.role_id && errors.role_id && <Form.Control.Feedback type="invalid">{errors.role_id}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  {values.role_id !== 1 && (
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>ตำแหน่ง:</Form.Label>
                        <Form.Select
                          name="dept_id"
                          style={{ padding: '10px 20px' }}
                          value={values.dept_id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.dept_id && !!errors.dept_id}
                        >
                          <option value="">เลือกตำแหน่ง</option>
                          {departments.map((department) => (
                            <option key={department.dept_id} value={department.dept_id}>
                              {department.dept_name}
                            </option>
                          ))}
                        </Form.Select>
                        {touched.dept_id && errors.dept_id && (
                          <Form.Control.Feedback type="invalid">{errors.dept_id}</Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  )}
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      ) : (
                        <>
                          <i className="feather icon-save" /> บันทึก
                        </>
                      )}
                    </Button>
                    <Button variant="danger" onClick={() => navigate('/admin/user')} className="ms-2">
                      <i className="feather icon-corner-up-left" /> ย้อนกลับ
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default AddEdit;
