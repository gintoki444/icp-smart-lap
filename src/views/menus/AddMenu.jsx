import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

// api request
import { getAllMenus, postMenus } from 'services/_api/menusRequest';
import { toast } from 'react-toastify';

function AddMenu() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getmenus();
  }, []);

  // useEffect(() => {}, []);
  const getmenus = () => {
    getAllMenus().then((result) => {
      if (result) {
        setMenus(result);
      }
    });
  };

  const initialValue = {
    menu_name: '',
    menu_key: '',
    menu_type: '',
    parent_id: null,
    route: '',
    icon: '',
    sort_order: 1,
    is_active: 1
  };

  const validateValue = () =>
    Yup.object({
      menu_name: Yup.string().min(3, '"ชื่อ" ต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
      menu_key: Yup.string().min(3, '"Key" ต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอก Key'),
      menu_type: Yup.string().required('กรุณาเลือก Type')
      // route: Yup.string().min(3, '"Route" ต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอก Route')
    });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      console.log(values);
      const response = await postMenus(values);
      if (response.menu_id) {
        toast.success('เพิ่มข้อมูลเมนูสำเร็จ!', { autoClose: 3000 });
        navigate('/admin/menus/');
      }
    } catch (err) {
      toast.error(`เพิ่มข้อมูลไม่สำเร็จ: ${err.message}`, { autoClose: 3000 });
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
              <Card.Title as="h5">เพิ่มข้อมูลเมนู</Card.Title>
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
                      <Form.Label>ชื่อเมนู:</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ชื่อเมนู"
                        name="menu_name"
                        value={values.menu_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.menu_name && !!errors.menu_name}
                      />
                      {touched.menu_name && errors.menu_name && (
                        <Form.Control.Feedback type="invalid">{errors.menu_name}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Key :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Key"
                        name="menu_key"
                        value={values.menu_key}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.menu_key && !!errors.menu_key}
                      />
                      {touched.menu_key && errors.menu_key && (
                        <Form.Control.Feedback type="invalid">{errors.menu_key}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Type:</Form.Label>
                      <Form.Select
                        name="menu_type"
                        style={{ padding: '10px 20px' }}
                        value={values.menu_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.menu_type && !!errors.menu_type}
                      >
                        <option>เลือก Type</option>
                        <option value="group">group</option>
                        <option value="collapse">collapse</option>
                        <option value="item">item</option>
                      </Form.Select>
                      {touched.menu_type && errors.menu_type && (
                        <Form.Control.Feedback type="invalid">{errors.menu_type}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Parent เมนู:</Form.Label>
                      <Form.Select
                        name="parent_id"
                        style={{ padding: '10px 20px' }}
                        value={values.parent_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.parent_id && !!errors.parent_id}
                      >
                        <option value="">เลือก Parent เมนู</option>
                        {menus.map((menu) => (
                          <option key={menu.menu_id} value={menu.menu_id}>
                            {menu.menu_name}
                          </option>
                        ))}
                      </Form.Select>
                      {touched.parent_id && errors.parent_id && (
                        <Form.Control.Feedback type="invalid">{errors.parent_id}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Route :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="/route"
                        name="route"
                        value={values.route}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.route && !!errors.route}
                      />
                      {touched.route && errors.route && <Form.Control.Feedback type="invalid">{errors.route}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Icon :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Icon"
                        name="icon"
                        value={values.icon}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.icon && !!errors.icon}
                      />
                      {touched.icon && errors.icon && <Form.Control.Feedback type="invalid">{errors.icon}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>ลำดับเมนู:</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ชื่อเมนู"
                        name="sort_order"
                        value={values.sort_order}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.sort_order && !!errors.sort_order}
                      />
                      {touched.sort_order && errors.sort_order && (
                        <Form.Control.Feedback type="invalid">{errors.sort_order}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2" menu="status" aria-hidden="true"></span>
                      ) : (
                        <>
                          <i className="feather icon-save" /> บันทึก
                        </>
                      )}
                    </Button>

                    <Button variant="danger" onClick={() => navigate('/admin/menus')} className="ms-2">
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

export default AddMenu;
