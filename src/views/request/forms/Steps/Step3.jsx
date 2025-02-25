import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import TextField from '@mui/material/TextField';

const Step3 = ({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => {
  // ใช้ useDropzone เพื่อจัดการการอัปโหลดไฟล์
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // อัปเดต files ใน values ด้วยไฟล์ที่อัปโหลด
      const currentFiles = Array.isArray(values.files) ? values.files : [];
      setFieldValue('files', [...currentFiles, ...acceptedFiles]);
    },
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf']
    }
  });

  // ฟังก์ชันสำหรับลบไฟล์
  const handleRemoveFile = (indexToRemove) => {
    const updatedFiles = values.files.filter((_, index) => index !== indexToRemove);
    setFieldValue('files', updatedFiles);
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
                <Form.Group className="">
                  <Form.Label>การรับรายงานผล</Form.Label>
                  <div>
                    {reportMethodOptions.map((option, idx) => (
                      <Form.Check
                        inline
                        type="radio"
                        name="reportMethod"
                        value={option.value} // ใช้ option.value เป็น string
                        key={idx}
                        label={option.label} // ใช้ option.label เป็น string
                        checked={values.reportMethod === option.value}
                        onChange={handleChange}
                        id={`reportCheck${idx}`}
                      />
                    ))}
                  </div>
                  {touched.reportMethod && errors.reportMethod && <div className="text-danger">{errors.reportMethod}</div>}
                  {values.reportMethod === 'pdf_email' && (
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
                      {touched.email && errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                    </Form.Group>
                  )}
                  {values.reportMethod === 'is_mail_delivery' && (
                    <Form.Group className="mt-1 ps-4 pe-4">
                      <Form.Check
                        inline
                        type="radio"
                        name="sameAddress"
                        label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                        checked={values.sameAddress}
                        onChange={() => setFieldValue('sameAddress', true)}
                        id="sameAddressRadio1"
                      />
                      <Form.Check
                        inline
                        type="radio"
                        name="sameAddress"
                        label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                        checked={!values.sameAddress}
                        onChange={() => setFieldValue('sameAddress', false)}
                        id="sameAddressRadio2"
                      />
                      {values.sameAddress && values.company_id ? (
                        <Form.Group className="mb-3 ps-4 pe-4">
                          <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            // value={companies.find((x) => x.id === Number(values.company_id))?.tax_address || 'ไม่พบข้อมูลที่อยู่'}
                          />
                        </Form.Group>
                      ) : (
                        !values.sameAddress && (
                          <Row className="mb-3 ps-4 pe-4">
                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>ที่อยู่ : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="กรอกที่อยู่"
                                  value={values.address}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.address && !!errors.address}
                                />
                                {touched.address && errors.address && (
                                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group>
                                <Form.Label>จังหวัด : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="province"
                                  placeholder="กรอกจังหวัด"
                                  value={values.province}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.province && !!errors.province}
                                />
                                {touched.province && errors.province && (
                                  <Form.Control.Feedback type="invalid">{errors.province}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mt-3">
                                <Form.Label>อำเภอ : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="district"
                                  placeholder="กรอกอำเภอ"
                                  value={values.district}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.district && !!errors.district}
                                />
                                {touched.district && errors.district && (
                                  <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mt-3">
                                <Form.Label>ตำบล : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="subDistrict"
                                  placeholder="กรอกตำบล"
                                  value={values.subDistrict}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.subDistrict && !!errors.subDistrict}
                                />
                                {touched.subDistrict && errors.subDistrict && (
                                  <Form.Control.Feedback type="invalid">{errors.subDistrict}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mt-3">
                                <Form.Label>เลขที่ไปรษณีย์ : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="postalCode"
                                  placeholder="กรอกเลขที่ไปรษณีย์"
                                  value={values.postalCode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.postalCode && !!errors.postalCode}
                                />
                                {touched.postalCode && errors.postalCode && (
                                  <Form.Control.Feedback type="invalid">{errors.postalCode}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mt-3">
                                <Form.Label>เบอร์โทรศัพท์ : </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="phone"
                                  placeholder="กรอกเบอร์โทรศัพท์"
                                  value={values.phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.phone && !!errors.phone}
                                />
                                {touched.phone && errors.phone && (
                                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                )}
                              </Form.Group>
                            </Col>
                          </Row>
                        )
                      )}
                    </Form.Group>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>ความต้องการในการทดสอบ : </Form.Label>
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
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
                  <div>
                    {sampleDisposalOptions.map((option, idx) => (
                      <Form.Check
                        inline
                        type="radio"
                        name="sampleDisposal"
                        value={option.value} // ใช้ option.value เป็น string
                        key={idx}
                        label={option.label} // ใช้ option.label เป็น string
                        checked={values.sampleDisposal === option.value}
                        onChange={handleChange}
                        id={`sampleCheck${idx}`}
                      />
                    ))}
                  </div>
                  {touched.sampleDisposal && errors.sampleDisposal && <div className="text-danger">{errors.sampleDisposal}</div>}
                </Form.Group>
              </Col>
              <h6 className="mb-1">ข้อมูลการจัดส่งตัวอย่าง</h6>
              <Col md={4}>
                {/* ส่วนอัปโหลดไฟล์ */}
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>ผู้ส่งตัวอย่าง:</Form.Label>
                  <Form.Control
                    type="text"
                    rows={3}
                    name="submitted_by"
                    placeholder="ชื่อ-นามสกุล"
                    value={values.submitted_by}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                {/* ส่วนอัปโหลดไฟล์ */}
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                  <Form.Control
                    type="text"
                    rows={3}
                    name="submitted_phone"
                    placeholder="เบอร์โทรศัพท์"
                    value={values.submitted_phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                {/* ส่วนอัปโหลดไฟล์ */}
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>วันที่ส่ง :</Form.Label>
                  <TextField
                    required
                    fullWidth
                    type="date"
                    id="submitted_date"
                    name="submitted_date"
                    value={values.submitted_date}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <h6 className="mb-2">ข้อมูลเอกสาร</h6>
                {/* ส่วนอัปโหลดไฟล์ */}
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
