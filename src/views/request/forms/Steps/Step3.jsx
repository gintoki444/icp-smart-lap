import React from 'react';
import { Card, Row, Col, Form, Button, Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import TextField from '@mui/material/TextField';
import { deleteFileFromFirebase } from 'services/_api/uploadFileRequest';
import { deleteServiceRequestDocuments } from 'services/_api/serviceRequest';

const Step3 = ({ values, errors, touched, handleChange, handleBlur, setFieldValue, companyData }) => {
  const company = companyData.find((x) => x.company_id === values.company_id);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const currentFiles = Array.isArray(values.files) ? values.files : [];
      setFieldValue('files', [...currentFiles, ...acceptedFiles]);
    },
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf']
    }
  });

  const handleRemoveFile = async (indexToRemove) => {
    const fileToRemove = values.files[indexToRemove];
    const isConfirmed = window.confirm(
      'คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "' + fileToRemove.name + '"? การลบนี้จะลบไฟล์ออกจากระบบทันทีและไม่สามารถกู้คืนได้'
    );

    if (isConfirmed) {
      try {
        // ถ้ามี document_id (ไฟล์ที่อัปโหลดแล้ว) ลบจาก Firebase และ DB
        if (fileToRemove.document_id) {
          await deleteFileFromFirebase(fileToRemove.path);
          await deleteServiceRequestDocuments(fileToRemove.document_id);
          console.log(`Deleted file ID: ${fileToRemove.document_id} from Firebase and DB`);
        }
        // อัปเดต state โดยลบไฟล์ออกจาก array
        const updatedFiles = values.files.filter((_, index) => index !== indexToRemove);
        setFieldValue('files', updatedFiles);
      } catch (error) {
        console.error('Error removing file:', error);
        alert('เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่');
      }
    }
  };

  const reportMethodOptions = [
    { value: 'is_self_pickup', label: 'รับด้วยตนเอง' },
    { value: 'pdf_email', label: 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail' },
    { value: 'is_mail_delivery', label: 'ส่งทางไปรษณีย์' }
  ];
  const sampleDisposalOptions = [
    { value: 'is_lab_dispose_sample', label: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง' },
    { value: 'is_collect_within_3_months', label: 'มารับตัวอย่างคืนภายใน 3 เดือน' },
    { value: 'is_return_sample', label: 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน' }
  ];

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนค่า sameAddress
  const handleSameAddressChange = (isSameAddress) => {
    setFieldValue('sameAddress', isSameAddress);
    if (isSameAddress && company?.document_address) {
      setFieldValue('sr_mail_delivery_location', company.document_address);
    } else {
      setFieldValue('sr_mail_delivery_location', ''); // รีเซ็ตถ้าเลือกที่อยู่ต่าง
    }
  };
  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <Row>
              <Col md={12}>
                <h6 className="mb-3">ข้อมูลการขอรับผลการตรวจ</h6>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>วิธีการรับรายงาน</Form.Label>
                  <div>
                    {reportMethodOptions.map((option, idx) => (
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }} key={idx}>
                        <Form.Check
                          type="checkbox"
                          name="reportMethod"
                          value={option.value}
                          label={option.label}
                          checked={values.reportMethod.includes(option.value)}
                          onChange={(e) => {
                            const newValue = values.reportMethod.includes(option.value)
                              ? values.reportMethod.filter((val) => val !== option.value)
                              : [...values.reportMethod, option.value];
                            setFieldValue('reportMethod', newValue);
                          }}
                          id={`reportCheck${idx}`}
                          isInvalid={touched.reportMethod && !!errors.reportMethod}
                        />
                        {option.value === 'pdf_email' && values.reportMethod.includes('pdf_email') && (
                          <Col md={6} className="mb-3 ps-4 pe-4">
                            <Form.Label>E-mail สำหรับรับผลตรวจ :</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="กรอกอีเมล"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                          </Col>
                        )}
                        {option.value === 'is_mail_delivery' && values.reportMethod.includes('is_mail_delivery') && (
                          <Col md={6} className="mt-1 ps-4 pe-4">
                            <Form.Check
                              inline
                              type="radio"
                              name="sameAddress"
                              label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                              checked={values.sameAddress}
                              onChange={() => handleSameAddressChange(true)}
                              id="sameAddressCheck1"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              name="sameAddress"
                              label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                              checked={!values.sameAddress}
                              onChange={() => handleSameAddressChange(false)}
                              id="sameAddressCheck2"
                            />
                            {values.sameAddress && company?.document_address ? (
                              <Form.Group md={6} className="mb-3">
                                <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="sr_mail_delivery_location"
                                  value={values.sr_mail_delivery_location || company.document_address}
                                  readOnly
                                />
                              </Form.Group>
                            ) : (
                              !values.sameAddress && (
                                <Row className="mb-3">
                                  <Col md={12}>
                                    <Form.Group>
                                      <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="sr_mail_delivery_location"
                                        placeholder="กรอกที่อยู่จัดส่ง"
                                        value={values.sr_mail_delivery_location}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.sr_mail_delivery_location && !!errors.sr_mail_delivery_location}
                                      />
                                      <Form.Control.Feedback type="invalid">{errors.sr_mail_delivery_location}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col>
                                  {/* <Col md={6}>
                                    <Form.Group>
                                      <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="กรอกเบอร์โทรศัพท์"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.phone && !!errors.phone}
                                      />
                                      <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col> */}
                                </Row>
                              )
                            )}
                          </Col>
                        )}
                      </Stack>
                    ))}
                  </div>
                  {/* <div>
                    {reportMethodOptions.map((option, idx) => (
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }} key={idx}>
                        <Form.Check
                          type="checkbox"
                          name="reportMethod"
                          value={option.value}
                          label={option.label}
                          checked={values.reportMethod.includes(option.value)}
                          onChange={(e) => {
                            const newValue = values.reportMethod.includes(option.value)
                              ? values.reportMethod.filter((val) => val !== option.value)
                              : [...values.reportMethod, option.value];
                            setFieldValue('reportMethod', newValue);
                          }}
                          id={`reportCheck${idx}`}
                          isInvalid={touched.reportMethod && !!errors.reportMethod}
                        />
                        {option.value === 'pdf_email' && values.reportMethod.includes('pdf_email') && (
                          <Form.Group className="mb-3">
                            <Form.Label>E-mail สำหรับรับผลตรวจ :</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="กรอกอีเมล"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                          </Form.Group>
                        )}
                        {option.value === 'is_mail_delivery' && values.reportMethod.includes('is_mail_delivery') && (
                          <Form.Group className="mt-1 ps-4 pe-4">
                            <Form.Check
                              inline
                              type="radio"
                              name="sameAddress"
                              label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                              checked={values.sameAddress}
                              onChange={() => setFieldValue('sameAddress', true)}
                              id="sameAddressCheck1"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              name="sameAddress"
                              label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                              checked={!values.sameAddress}
                              onChange={() => setFieldValue('sameAddress', false)}
                              id="sameAddressCheck2"
                            />
                            {values.sameAddress && company?.document_address ? (
                              <Form.Group className="mb-3 ps-4 pe-4">
                                <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                <Form.Control type="text" name="sr_mail_delivery_location" value={company.document_address} readOnly />
                              </Form.Group>
                            ) : (
                              !values.sameAddress && (
                                <Row className="mb-3 ps-4 pe-4">
                                  <Col md={6}>
                                    <Form.Group>
                                      <Form.Label>ที่อยู่จัดส่ง :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="sr_mail_delivery_location"
                                        placeholder="กรอกที่อยู่จัดส่ง"
                                        value={values.sr_mail_delivery_location}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.sr_mail_delivery_location && !!errors.sr_mail_delivery_location}
                                      />
                                      <Form.Control.Feedback type="invalid">{errors.sr_mail_delivery_location}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group>
                                      <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="กรอกเบอร์โทรศัพท์"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.phone && !!errors.phone}
                                      />
                                      <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                    </Form.Group>
                                  </Col>
                                </Row>
                              )
                            )}
                          </Form.Group>
                        )}
                      </Stack>
                    ))}
                  </div> */}
                  {touched.reportMethod && errors.reportMethod && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.reportMethod}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="text-dark">ขอบเขตการทดสอบ :</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      name="test_all_items"
                      label="ทดสอบทุกรายการ"
                      checked={values.test_all_items}
                      onChange={() => setFieldValue('test_all_items', true)}
                      id="test_all_items-1"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      name="test_all_items"
                      label="ทดสอบบางรายการ"
                      checked={!values.test_all_items}
                      onChange={() => setFieldValue('test_all_items', false)}
                      id="test_all_items-2"
                    />
                  </div>
                  {touched.test_all_items && errors.test_all_items && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.test_all_items}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
                  <div>
                    {sampleDisposalOptions.map((option, idx) => (
                      <Form.Check
                        inline
                        type="radio"
                        name="sampleDisposal"
                        value={option.value}
                        key={idx}
                        label={option.label}
                        checked={values.sampleDisposal === option.value}
                        onChange={handleChange}
                        id={`sampleCheck${idx}`}
                      />
                    ))}
                  </div>
                  {touched.sampleDisposal && errors.sampleDisposal && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.sampleDisposal}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
              <h6 className="mb-1">ข้อมูลการจัดส่งตัวอย่าง</h6>
              <Col md={4}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>ผู้ส่งตัวอย่าง:</Form.Label>
                  <Form.Control
                    type="text"
                    name="submitted_by"
                    placeholder="ชื่อ-นามสกุล"
                    value={values.submitted_by}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.submitted_by && !!errors.submitted_by}
                  />
                  <Form.Control.Feedback type="invalid">{errors.submitted_by}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                  <Form.Control
                    type="text"
                    name="submitted_phone"
                    placeholder="เบอร์โทรศัพท์"
                    value={values.submitted_phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.submitted_phone && !!errors.submitted_phone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.submitted_phone}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>วันที่ส่ง :</Form.Label>
                  <TextField
                    fullWidth
                    type="date"
                    id="submitted_date"
                    name="submitted_date"
                    value={values.submitted_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.submitted_date && !!errors.submitted_date}
                    helperText={touched.submitted_date && errors.submitted_date}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <h6 className="mb-2">ข้อมูลเอกสาร</h6>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>อัพโหลดเอกสาร :</Form.Label>
                  <div
                    {...getRootProps()}
                    style={{
                      border: '2px dashed #04a9f5',
                      borderRadius: '8px',
                      padding: '20px',
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
                  <ul className="mt-3">
                    {values.files &&
                      values.files.map((file, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                          <i className="feather icon-file" style={{ marginRight: 12 }} />
                          {file.name}
                          <Button
                            variant="link"
                            size="sm"
                            className="text-danger"
                            style={{ marginLeft: 10 }}
                            onClick={() => handleRemoveFile(index)}
                          >
                            <i className="feather icon-trash-2" />
                          </Button>
                        </li>
                      ))}
                  </ul>
                  {touched.files && errors.files && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.files}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Step3;
