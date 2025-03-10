import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

// api request
import { toast } from 'react-toastify';
import * as customerRequest from 'services/_api/customerRequest';
import { getAllSpecialConditions } from 'services/_api/specialConditionsRequest';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaPlusCircle } from 'react-icons/fa';

function AddCustomer() {
  const navigate = useNavigate();
  const [specialConditions, setSpecialConditions] = useState([]);

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getSpecialConditions();
  }, []);

  // useEffect(() => {}, []);
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
    special_conditions: '',
    contacts: [
      {
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        position: ''
      }
    ]
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
      condition_id: Yup.string().required('กรุณาเลือกเงื่อนไขพิเศษ'),
      contacts: Yup.array().of(
        Yup.object({
          contact_name: Yup.string().required('กรุณากรอกชื่อผู้ติดต่อ'),
          contact_phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
            .required('กรุณากรอกเบอร์โทรศัพท์'),
          contact_email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
          position: Yup.string().required('กรุณากรอกตำแหน่ง')
        })
      )
    });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      // Prepare customer data
      const customerData = { ...values };
      delete customerData.contacts;
      customerData.special_conditions = specialConditions.find((x) => x.condition_id === Number(values.condition_id))?.description;

      console.log('customerData :', customerData);
      // Post customer first
      const customerResponse = await customerRequest.postCustomer(customerData);

      if (customerResponse.company_id) {
        // Prepare and post contacts
        const contactsData = values.contacts.map((contact) => ({
          ...contact,
          company_id: customerResponse.company_id
        }));

        // Loop through contacts and post each one
        const contactPromises = contactsData.map((contact) => customerRequest.postCustomerContacts(contact));

        await Promise.all(contactPromises);

        toast.success('เพิ่มข้อมูลบริษัทและผู้ติดต่อสำเร็จ!', { autoClose: 3000 });
        navigate('/admin/customer/');
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
                </Row>
                {/* Contacts Section */}
                <FieldArray name="contacts">
                  {({ push, remove }) => (
                    <>
                      <Row className="mt-2 mb-2">
                        <Col>
                          <h6>ข้อมูลผู้ติดต่อ</h6>
                        </Col>
                      </Row>
                      {values.contacts.map((contact, index) => (
                        <Card className="p-3 mb-2 pb-0 rounded">
                          <Row key={index} className="ps-2 pe-2">
                            <Col md={6} className="mb-3">
                              <Form.Group>
                                <Form.Label>ชื่อผู้ติดต่อ:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name={`contacts.${index}.contact_name`}
                                  value={values.contacts[index].contact_name}
                                  onChange={handleChange}
                                  placeholder="กรอกชื่อผู้ติดต่อ"
                                  onBlur={handleBlur}
                                  isInvalid={touched.contacts?.[index]?.contact_name && !!errors.contacts?.[index]?.contact_name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.contacts?.[index]?.contact_name}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group>
                                <Form.Label>เบอร์โทร:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name={`contacts.${index}.contact_phone`}
                                  value={values.contacts[index].contact_phone}
                                  onChange={handleChange}
                                  placeholder="กรอกเบอร์โทร"
                                  onBlur={handleBlur}
                                  isInvalid={touched.contacts?.[index]?.contact_phone && !!errors.contacts?.[index]?.contact_phone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.contacts?.[index]?.contact_phone}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group>
                                <Form.Label>อีเมล์:</Form.Label>
                                <Form.Control
                                  type="email"
                                  name={`contacts.${index}.contact_email`}
                                  value={values.contacts[index].contact_email}
                                  placeholder="กรอกอีเมล์"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.contacts?.[index]?.contact_email && !!errors.contacts?.[index]?.contact_email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.contacts?.[index]?.contact_email}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                              <Form.Group>
                                <Form.Label>ตำแหน่ง:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name={`contacts.${index}.position`}
                                  value={values.contacts[index].position}
                                  onChange={handleChange}
                                  placeholder="กรอกตำแหน่ง"
                                  onBlur={handleBlur}
                                  isInvalid={touched.contacts?.[index]?.position && !!errors.contacts?.[index]?.position}
                                />
                                <Form.Control.Feedback type="invalid">{errors.contacts?.[index]?.position}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>

                            {values.contacts.length > 1 && (
                              <Col md={12} className="d-flex align-items-end mb-3">
                                <Button variant="danger" onClick={() => remove(index)} size="sm">
                                  <RiDeleteBin5Line style={{ fontSize: 16 }} className="me-2" /> ลบ
                                </Button>
                              </Col>
                            )}
                          </Row>
                        </Card>
                      ))}
                      <Row className="ps-2 pe-2">
                        <Col>
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => push({ contact_name: '', contact_phone: '', contact_email: '', position: '' })}
                          >
                            <FaPlusCircle style={{ fontSize: 16 }} className="me-2" /> เพิ่มผู้ติดต่อ
                          </Button>
                        </Col>
                      </Row>
                    </>
                  )}
                </FieldArray>

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

                    <Button variant="danger" onClick={() => navigate('/admin/customer')} className="ms-2">
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

export default AddCustomer;
