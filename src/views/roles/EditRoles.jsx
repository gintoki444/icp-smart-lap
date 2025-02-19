import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as RoleRequest from 'services/_api/rolesRequest';

function EditRole() {
  const navigate = useNavigate();
  const location = useLocation();

  const rolesFromState = location.state?.roles || null;
  // Schema สำหรับตรวจสอบข้อมูล
  const validationSchema = Yup.object().shape({
    role_name: Yup.string().required('กรุณากรอกชื่อ Role'),
    description: Yup.string().required('กรุณากรอกรายละเอียด')
  });

  console.log(rolesFromState);

  const initialValue = {
    role_id: rolesFromState.id,
    role_name: rolesFromState.role_name,
    description: rolesFromState.description
  };

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    // const { email, password } = values;
    console.log('values:', values);
    const response = await RoleRequest.putRoles(values, values.role_id);

    if (response) {
      navigate('/admin/roles-list/');
    } else {
      setErrors({ submit: response.message });
    }

    setSubmitting(false);
  };
  return (
    <Row>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">แก้ไขข้อมูล Role</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>ชื่อ Role :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอกชื่อ Role"
                    name="role_name"
                    value={values.role_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.role_name && !!errors.role_name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.role_name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>รายละเอียด :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอกรายละเอียด"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.description && !!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Button variant="primary" type="submit">
                      <i className="feather icon-save" /> บันทึก
                    </Button>
                    <Button variant="danger" onClick={() => navigate('/admin/roles-list')} className="ms-2">
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

export default EditRole;
