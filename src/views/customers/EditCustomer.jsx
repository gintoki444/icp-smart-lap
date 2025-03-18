import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaPlusCircle } from 'react-icons/fa';

// api request
import {
  getAllSpecialConditions,
  getCustomerSpecialConditionsByID,
  postCustomerSpecialConditions,
  deleteCustomerSpecialConditions
} from 'services/_api/specialConditionsRequest';
import * as customerRequest from 'services/_api/customerRequest';
import { deleteFileFromFirebase, handleUploadFiles } from 'services/_api/uploadFileRequest';
import SpecialConditionSelect from 'components/Selector/SpecialConditionSelect';
import FirebaseFile from 'components/Firebase/FirebaseFile';

function EditCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  const customerFromState = location.state?.customers || null;
  const [initialValue, setInitialValue] = useState({
    id: '',
    company_code: '',
    company_name: '',
    company_address: '',
    document_address: '',
    tax_id: '',
    email: '',
    phone: '',
    condition_id: [],
    special_conditions: '',
    contacts: [],
    files: []
  });
  const [specialConditions, setSpecialConditions] = useState([]);
  const [files, setFiles] = useState([]);
  const [existingFiles, setExistingFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originalConditionIds, setOriginalConditionIds] = useState([]);
  const [originalContacts, setOriginalContacts] = useState([]); // เก็บ contacts เดิมเพื่อเปรียบเทียบ

  useEffect(() => {
    getCustomers();
    getSpecialConditions();
  }, []);

  const getCustomers = async () => {
    try {
      console.log('customerFromState?.id:', customerFromState?.id);
      const result = await customerRequest.getCustomerByID(customerFromState?.id);
      const resultSpecial = await getCustomerSpecialConditionsByID(customerFromState?.id);
      let conditionIds = [];
      if (resultSpecial.length > 0) {
        conditionIds = resultSpecial.map((item) => item.condition_id);
      }
      if (result && resultSpecial) {
        const contacts = result.customer_contacts || [];
        setExistingFiles(result.customer_documents || []);
        setInitialValue({
          id: result?.company_id || '',
          company_code: result?.company_code || '',
          company_name: result?.company_name || '',
          company_address: result?.company_address || '',
          document_address: result?.document_address || '',
          tax_id: result?.tax_id || '',
          email: result?.email || '',
          phone: result?.phone || '',
          condition_id: conditionIds,
          special_conditions: result?.special_conditions || '',
          contacts: contacts.map((contact) => ({
            contact_id: contact.contact_id || null,
            contact_name: contact.contact_name || '',
            contact_phone: contact.contact_phone || '',
            contact_email: contact.contact_email || '',
            position: contact.position || ''
          })),
          files: []
        });
        setOriginalConditionIds(conditionIds);
        setOriginalContacts(contacts.map((contact) => ({ ...contact }))); // เก็บ contacts เดิม
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('ไม่สามารถโหลดข้อมูลได้', { autoClose: 3000 });
      setIsLoading(false);
    }
  };

  const getSpecialConditions = () => {
    getAllSpecialConditions().then((result) => {
      if (result) {
        setSpecialConditions(result);
      }
    });
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
      condition_id: Yup.array().min(1, 'กรุณาเลือกเงื่อนไขพิเศษอย่างน้อย 1 รายการ').required('กรุณาเลือกเงื่อนไขพิเศษ'),
      contacts: Yup.array().of(
        Yup.object({
          contact_name: Yup.string().required('กรุณากรอกชื่อผู้ติดต่อ'),
          contact_phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
            .required('กรุณากรอกเบอร์โทรศัพท์'),
          contact_email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
          position: Yup.string().required('กรุณากรอกตำแหน่ง')
        })
      ),
      files: Yup.array().test(
        'fileFormat',
        'รองรับเฉพาะไฟล์ PDF หรือรูปภาพเท่านั้น',
        (value) => !value || value.every((file) => file.type === 'application/pdf' || file.type?.startsWith('image/'))
      )
    });

  const handleRemoveFile = async (indexToRemove, fileToRemove) => {
    const isConfirmed = window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "${fileToRemove.document_name}"?`);
    if (isConfirmed) {
      try {
        await deleteFileFromFirebase(fileToRemove.document_path);
        await customerRequest.deleteCustomerDocuments(fileToRemove.document_id);
        setExistingFiles(existingFiles.filter((_, index) => index !== indexToRemove));
        toast.success('ลบไฟล์สำเร็จ', { autoClose: 3000 });
      } catch (error) {
        console.error('Error deleting file:', error);
        toast.error('เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่', { autoClose: 3000 });
      }
    }
  };

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      values.files = files;

      const validationSchema = validateValue();
      await validationSchema.validate(values, { abortEarly: false });

      const customerData = { ...values };
      delete customerData.contacts;
      delete customerData.files;
      delete customerData.condition_id;

      const customerResponse = await customerRequest.putCustomer(customerData, values.id);
      if (customerResponse.message) {
        // จัดการเงื่อนไขพิเศษ
        const newConditionIds = values.condition_id;
        const addedConditions = newConditionIds.filter((id) => !originalConditionIds.includes(id));
        const removedConditions = originalConditionIds.filter((id) => !newConditionIds.includes(id));

        const addConditionPromises = addedConditions.map((conditionId) =>
          postCustomerSpecialConditions({
            company_id: values.id,
            condition_id: conditionId
          })
        );
        await Promise.all(addConditionPromises);

        const removeConditionPromises = removedConditions.map((conditionId) => deleteCustomerSpecialConditions(conditionId));
        await Promise.all(removeConditionPromises);

        // จัดการผู้ติดต่อ
        const newContacts = values.contacts.filter((contact) => !contact.contact_id); // ผู้ติดต่อใหม่
        const currentContacts = values.contacts.filter((contact) => contact.contact_id); // ผู้ติดต่อที่มีอยู่
        const originalContactIds = originalContacts.map((contact) => contact.contact_id);
        const currentContactIds = currentContacts.map((contact) => contact.contact_id);

        // ตรวจสอบผู้ติดต่อที่ถูกลบ
        const deletedContacts = originalContacts.filter((contact) => !currentContactIds.includes(contact.contact_id));
        const deleteContactPromises = deletedContacts.map((contact) => customerRequest.deleteCustomerContacts(contact.contact_id));
        await Promise.all(deleteContactPromises);

        // ตรวจสอบผู้ติดต่อที่แก้ไข
        const updatedContacts = currentContacts.filter((current) => {
          const original = originalContacts.find((o) => o.contact_id === current.contact_id);
          return (
            original &&
            (original.contact_name !== current.contact_name ||
              original.contact_phone !== current.contact_phone ||
              original.contact_email !== current.contact_email ||
              original.position !== current.position)
          );
        });
        const updateContactPromises = updatedContacts.map((contact) => customerRequest.putCustomerContacts(contact, contact.contact_id));
        await Promise.all(updateContactPromises);

        // เพิ่มผู้ติดต่อใหม่
        const newContactPromises = newContacts.map((contact) =>
          customerRequest.postCustomerContacts({ ...contact, company_id: values.id })
        );
        await Promise.all(newContactPromises);

        // อัปโหลดไฟล์ใหม่
        if (files.length > 0) {
          const uploadResults = await handleUploadFiles(files, `customer-documents/${values.id}`, `หนังสือรับรองบริษัท_${values.id}`);
          const documentPromises = uploadResults.map((fileResult) => {
            const extractedFileName = fileResult.fileName.split('/').pop();
            return customerRequest.postCustomerDocuments({
              company_id: values.id,
              document_name: extractedFileName,
              document_type: 'ใบจดทะเบียน',
              document_path: `/${fileResult.fileName}`
            });
          });
          await Promise.all(documentPromises);
        }

        toast.success('แก้ไขข้อมูลลูกค้า/บริษัทและผู้ติดต่อสำเร็จ!', { autoClose: 3000 });
        navigate('/admin/customer');
      }
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errors = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(errors);
      } else {
        toast.error(`แก้ไขข้อมูลไม่สำเร็จ: ${err.message}`, { autoClose: 3000 });
        setStatus({ success: false });
        setErrors({ submit: err.message });
      }
      setSubmitting(false);
    }
  };

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);

    if (fileRejections.length > 0) {
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === 'file-too-large') {
            toast.error(`ไฟล์ ${file.file.name} มีขนาดใหญ่เกินไป (สูงสุด 5MB)`, { autoClose: 3000 });
          } else if (err.code === 'file-invalid-type') {
            toast.error(`ไฟล์ ${file.file.name} ไม่รองรับ (ต้องเป็น image หรือ PDF เท่านั้น)`, { autoClose: 3000 });
          } else {
            toast.error(`ไฟล์ ${file.file.name}: ${err.message}`, { autoClose: 3000 });
          }
        });
      });
    }
  }, []);

  const handleRemoveNewFile = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
    toast.success('ลบไฟล์สำเร็จ', { autoClose: 3000 });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 5
  });

  return (
    <Row>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">แก้ไขข้อมูลลูกค้า/บริษัท</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Formik initialValues={initialValue} validationSchema={validateValue} onSubmit={handleSubmit} enableReinitialize={true}>
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>รหัสบริษัท:</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          placeholder="รหัสบริษัท"
                          disabled
                          name="company_code"
                          value={values.company_code || ''}
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
                          value={values.company_name || ''}
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
                          disabled
                          name="tax_id"
                          value={values.tax_id || ''}
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
                          value={values.company_address || ''}
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
                          value={values.document_address || ''}
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
                          disabled
                          placeholder="อีเมล์"
                          name="email"
                          value={values.email || ''}
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
                          placeholder="ตัวอย่าง: 0812345678"
                          name="phone"
                          value={values.phone || ''}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.phone && !!errors.phone}
                        />
                        {touched.phone && errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <SpecialConditionSelect name="condition_id" value={values.condition_id} onSelect={setFieldValue} isMulti />
                      {touched.condition_id && errors.condition_id && <div className="invalid-feedback d-block">{errors.condition_id}</div>}
                    </Col>
                    <Col className="mb-2">
                      <FieldArray name="contacts">
                        {({ push, remove }) => (
                          <>
                            <Row className="mt-2 mb-2">
                              <Col>
                                <h6>ข้อมูลผู้ติดต่อ</h6>
                              </Col>
                            </Row>
                            {values.contacts &&
                              values.contacts.map((contact, index) => (
                                <Card className="p-3 mb-2 pb-0 rounded" key={index}>
                                  <Row key={index} className="ps-2 pe-2">
                                    <Col md={6} className="mb-3">
                                      <Form.Group>
                                        <Form.Label>ชื่อผู้ติดต่อ:</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name={`contacts.${index}.contact_name`}
                                          value={contact.contact_name || ''}
                                          onChange={handleChange}
                                          placeholder="กรอกชื่อผู้ติดต่อ"
                                          onBlur={handleBlur}
                                          isInvalid={touched.contacts?.[index]?.contact_name && !!errors.contacts?.[index]?.contact_name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.contacts?.[index]?.contact_name}
                                        </Form.Control.Feedback>
                                      </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                      <Form.Group>
                                        <Form.Label>เบอร์โทร:</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name={`contacts.${index}.contact_phone`}
                                          value={contact.contact_phone || ''}
                                          onChange={handleChange}
                                          placeholder="กรอกเบอร์โทร"
                                          onBlur={handleBlur}
                                          isInvalid={touched.contacts?.[index]?.contact_phone && !!errors.contacts?.[index]?.contact_phone}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.contacts?.[index]?.contact_phone}
                                        </Form.Control.Feedback>
                                      </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                      <Form.Group>
                                        <Form.Label>อีเมล์:</Form.Label>
                                        <Form.Control
                                          type="email"
                                          name={`contacts.${index}.contact_email`}
                                          value={contact.contact_email || ''}
                                          placeholder="กรอกอีเมล์"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          isInvalid={touched.contacts?.[index]?.contact_email && !!errors.contacts?.[index]?.contact_email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.contacts?.[index]?.contact_email}
                                        </Form.Control.Feedback>
                                      </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                      <Form.Group>
                                        <Form.Label>ตำแหน่ง:</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name={`contacts.${index}.position`}
                                          value={contact.position || ''}
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
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4">
                        <Form.Label>เอกสารที่มีอยู่:</Form.Label>
                        {existingFiles.map((file, index) => (
                          <FirebaseFile
                            key={index}
                            filePath={file.document_path}
                            fileName={file.document_name}
                            onDelete={() => handleRemoveFile(index, file)}
                          />
                        ))}
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>เอกสารประกอบการขึ้นทะเบียน (ตย. หนังสือรับรองบริษัท, ภพ.20, บัตรประชาชนกรรมการบริษัท) :</Form.Label>
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
                            <p style={{ marginBottom: 0 }}>
                              Drag and drop files here, or click to select files (สูงสุด 5 ไฟล์, 5MB ต่อไฟล์)
                            </p>
                          )}
                        </div>
                        {errors.files && touched.files && <div className="invalid-feedback d-block">{errors.files}</div>}
                      </Form.Group>
                      <ul className="mt-3">
                        {files.map((file, index) => (
                          <li key={index}>
                            <i className="feather icon-file" style={{ marginRight: 12 }} />
                            {file.name}
                            <Button variant="danger" size="sm" className="ms-2" onClick={() => handleRemoveNewFile(index)}>
                              <RiDeleteBin5Line style={{ fontSize: 16 }} />
                            </Button>
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
                      <Button variant="danger" onClick={() => navigate('/admin/customer')} className="ms-2">
                        <i className="feather icon-corner-up-left" /> ย้อนกลับ
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          )}
        </Card.Body>
      </Card>
    </Row>
  );
}

export default EditCustomer;
