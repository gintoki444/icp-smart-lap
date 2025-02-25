import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';

// api request
import { toast } from 'react-toastify';
import * as customerRequest from 'services/_api/customerRequest';
import { getAllSpecialConditions, postCustomerSpecialConditions } from 'services/_api/specialConditionsRequest';
import { postUserCustomerLinks } from 'services/_api/usersRequest';
import { authenUser } from 'services/_api/authentication';

function AddCompany() {
  const [user, setUser] = useState([]);
  const [specialConditions, setSpecialConditions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  useEffect(() => {
    getSpecialConditions();
  }, []);

  const getSpecialConditions = () => {
    getAllSpecialConditions().then((result) => {
      if (result) {
        setSpecialConditions(result);
      }
    });
  };

  const initialValue = {
    company_code: '',
    company_name: '',
    company_address: '',
    document_address: '',
    tax_id: '',
    email: '',
    phone: '',
    condition_id: '',
    special_conditions: ''
  };

  const validateValue = () =>
    Yup.object({
      company_code: Yup.string().min(3, 'รหัสบริษัทต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกรหัสบริษัท'),
      company_name: Yup.string().required('กรุณากรอกชื่อบริษัท'),
      tax_id: Yup.string()
        .matches(/^[0-9]{10,13}$/, 'เลขที่ผู้เสียภาษีต้องมี 10 ถึง 13 หลัก')
        .required('กรุณากรอกเลขที่ผู้เสียภาษี'),
      company_address: Yup.string().required('กรุณากรอกที่อยู่บริษัท'),
      document_address: Yup.string().min(3, 'ที่อยู่จัดส่งเอกสารต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกที่อยู่จัดส่งเอกสาร'),
      email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
        .required('กรุณากรอกเบอร์โทรศัพท์'),
      condition_id: Yup.string().required('กรุณาเลือกเงื่อนไขพิเศษ')
    });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      values.special_conditions = specialConditions.find((x) => x.condition_id === Number(values.condition_id))?.description;
      const response = await customerRequest.postCustomer(values);
      if (response.company_id) {
        await postCustomerSpecialConditions({
          company_id: response.company_id,
          condition_id: values.condition_id
        });

        const data = {
          user_id: user.user_id,
          company_id: response.company_id,
          approved_by: null,
          status: 'pending'
        };
        postUserCustomerLinks(data).then(() => {
          toast.success('เพิ่มข้อมูลบริษัทสำเร็จ!', { autoClose: 3000 });
          navigate('/user/company');
        });
      }
    } catch (err) {
      toast.error(`เพิ่มข้อมูลไม่สำเร็จ: ${err.message}`, { autoClose: 3000 });
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*,application/pdf',
    maxSize: 5 * 1024 * 1024
  });
  return (
    <Row className="">
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">เพิ่มข้อมูลบริษัท</Card.Title>
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
                      <Form.Label>รหัสบริษัท:</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="รหัสบริษัท"
                        name="company_code"
                        value={values.company_code}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.company_code && !!errors.company_code}
                      />
                      {touched.company_code && errors.company_code && (
                        <Form.Control.Feedback type="invalid">{errors.company_code}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>ชื่อบริษัท :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ชื่อบริษัท"
                        name="company_name"
                        value={values.company_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.company_name && !!errors.company_name}
                      />
                      {touched.company_name && errors.company_name && (
                        <Form.Control.Feedback type="invalid">{errors.company_name}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>เลขที่ผู้เสียภาษี :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="เลขที่ผู้เสียภาษี"
                        name="tax_id"
                        value={values.tax_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.tax_id && !!errors.tax_id}
                      />
                      {touched.tax_id && errors.tax_id && <Form.Control.Feedback type="invalid">{errors.tax_id}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>ที่อยู่บริษัท :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ที่อยู่บริษัท"
                        name="company_address"
                        value={values.company_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.company_address && !!errors.company_address}
                      />
                      {touched.company_address && errors.company_address && (
                        <Form.Control.Feedback type="invalid">{errors.company_address}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="ที่อยู่จัดส่งเอกสาร"
                        name="document_address"
                        value={values.document_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.document_address && !!errors.document_address}
                      />
                      {touched.document_address && errors.document_address && (
                        <Form.Control.Feedback type="invalid">{errors.document_address}</Form.Control.Feedback>
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
                        onChange={handleChange}
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
                        placeholder="เบอร์โทรศัพท์"
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
                      <Form.Label>เงื่อนไขพิเศษ :</Form.Label>
                      <Form.Select
                        name="condition_id"
                        style={{ padding: '10px 20px' }}
                        value={values.condition_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.condition_id && !!errors.condition_id}
                      >
                        <option value="">เลือกเงื่อนไขพิเศษ</option>
                        {specialConditions.map((role) => (
                          <option key={role.condition_id} value={role.condition_id}>
                            {role.description}
                          </option>
                        ))}
                      </Form.Select>
                      {touched.condition_id && errors.condition_id && (
                        <Form.Control.Feedback type="invalid">{errors.condition_id}</Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>อัพโหลดเอกสาร :</Form.Label>
                      <div
                        {...getRootProps()}
                        style={{
                          border: '2px dashed #04a9f5',
                          borderRadius: '8px',
                          padding: '50px 20px',
                          textAlign: 'center',
                          backgroundColor: isDragActive ? '#e6f7ff' : '#f8f9fa'
                        }}
                      >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p style={{ marginBottom: 0 }}>Drop your files here...</p>
                        ) : (
                          <p style={{ marginBottom: 0 }}>Drag and drop files here, or click to select files</p>
                        )}
                      </div>
                    </Form.Group>
                    <ul className="mt-3">
                      {files.map((file, index) => (
                        <li key={index}>
                          <i className="feather icon-file" style={{ marginRight: 12 }} />
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </Col>
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

                    <Button variant="danger" onClick={() => navigate('/user/company/select')} className="ms-2">
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
export default AddCompany;
