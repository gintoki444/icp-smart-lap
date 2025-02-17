import React, { useState, useCallback } from 'react';
import { Card, Button, Form, Modal, Row, Col, Table } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { companies } from 'services/TestData/CompanyData';
import { useDropzone } from 'react-dropzone';

export const ChemicalFertilizerForm = ({ onHandleSave }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [dataList, setDataList] = useState([]); // เก็บข้อมูลที่เพิ่ม
  const [formData, setFormData] = useState({
    id: null,
    fertilizerCategory: [],
    fertilizerType: [],
    color: [],
    container: '',
    tradeName: '',
    trademark: '',
    formula: '',
    manufacturer: '',
    country: '',
    tests: []
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [step, setStep] = useState(1);
  //   const [selectedForm, setSelectedForm] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const optionsColor = [
    { value: 'dark', label: 'ดำ' },
    { value: 'white', label: 'ขาว' },
    { value: 'red', label: 'แดง' },
    { value: 'blue', label: 'น้ำเงิน' },
    { value: 'green', label: 'เขียว' },
    { value: 'yellow', label: 'เหลือง' },
    { value: 'purple', label: 'ม่วง' }
  ];

  // Organic Fertilizer Form States
  const [company, setCompany] = useState('');
  const [reportMethod, setReportMethod] = useState([]);
  const [email, setEmail] = useState('');
  const [sameAddress, setSameAddress] = useState(true);
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [sampleDisposal, setSampleDisposal] = useState('');
  const [otherRequirements, setOtherRequirements] = useState('');

  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // เก็บไฟล์ที่อัปโหลดใน state
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*,application/pdf', // กำหนดประเภทไฟล์ที่ยอมรับ
    maxSize: 5 * 1024 * 1024 // จำกัดขนาดไฟล์ 5MB
  });

  const handleUpload = () => {
    alert(`Uploading ${files.length} file(s)!`);
    // สามารถนำไฟล์ใน `files` ไปส่งต่อ API ได้
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleChange = (selected) => {
    setFormData({ ...formData, color: selected });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleAddData = () => {
    if (editingIndex !== null) {
      dataList.id = dataList.length + 1;
      const newDataList = [...dataList];
      newDataList[editingIndex] = formData;
      setDataList(newDataList);
      setEditingIndex(null);
    } else {
      setDataList([...dataList, formData]); // เพิ่มข้อมูลใหม่
    }

    setShowModal(false); // ปิด Modal
    setFormData({
      id: 0,
      fertilizerCategory: [],
      fertilizerType: [],
      color: [],
      container: '',
      tradeName: '',
      trademark: '',
      formula: '',
      manufacturer: '',
      country: '',
      tests: []
    }); // เคลียร์ฟอร์ม
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(dataList[index]); // โหลดข้อมูลเก่าเข้าไปในฟอร์ม
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>
          <h5>ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          <div className="container">
            {/* Form Steps / Progress Bar */}
            <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
              {/* Step 1 */}
              <li
                className={`form-stepper-list text-center ${step === 1 ? 'form-stepper-active' : step > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="1"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 1 ? '1' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">ข้อมูลบริษัท</div>
                </a>
              </li>
              {/* Step 2 */}
              <li
                className={`form-stepper-list text-center ${step === 2 ? 'form-stepper-active' : step > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="2"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 2 || step < 2 ? '2' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">ข้อมูลปุ๋ยเคมี</div>
                </a>
              </li>
              {/* Step 3 */}
              <li
                className={`form-stepper-list text-center ${step === 3 ? 'form-stepper-active' : step > 3 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="3"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 3 || step < 3 ? '3' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">ที่อยู่การจัดส่ง</div>
                </a>
              </li>
            </ul>
          </div>
          {step === 1 && (
            <Row>
              <Col>
                <Card className="m-0">
                  <Card.Body className="pb-2 pt-4">
                    <h5>รายละเอียดบริษัท</h5>
                    <Form.Group className="mb-3">
                      <Form.Label>บริษัท</Form.Label>
                      <Form.Select
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                          console.log(e.target.value);
                        }}
                        required
                      >
                        <option value="">เลือกบริษัท</option>
                        {companies.map((company, index) => (
                          <option key={index} value={company.id}>
                            {company.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    {company && (
                      <Form.Group className="mb-3">
                        <Form.Label>เงื่อนไขพิเศษ :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="เงื่อนไขพิเศษ"
                          value={companies.find((x) => x.id === Number(company))?.credits}
                        />
                      </Form.Group>
                    )}
                    {/* <Form.Group className="mb-2">
                      <Form.Label>วัตถุประสงค์การขอใช้บริการ</Form.Label>
                      <Form.Group>
                        <Form.Check
                          inline
                          type="checkbox"
                          label="วิเคราะห์ขึ้นทะเบียน"
                          checked={purpose.includes('วิเคราะห์ขึ้นทะเบียน')}
                          onChange={(e) =>
                            setPurpose(
                              e.target.checked
                                ? [...purpose, 'วิเคราะห์ขึ้นทะเบียน']
                                : purpose.filter((item) => item !== 'วิเคราะห์ขึ้นทะเบียน')
                            )
                          }
                          id="purposeCheck1"
                        />
                        <Form.Check
                          inline
                          type="checkbox"
                          label="วิเคราะห์เพื่อตรวจสอบคุณภาพ"
                          checked={purpose.includes('วิเคราะห์เพื่อตรวจสอบคุณภาพ')}
                          onChange={(e) =>
                            setPurpose(
                              e.target.checked
                                ? [...purpose, 'วิเคราะห์เพื่อตรวจสอบคุณภาพ']
                                : purpose.filter((item) => item !== 'วิเคราะห์เพื่อตรวจสอบคุณภาพ')
                            )
                          }
                          id="purposeCheck2"
                        />
                      </Form.Group>
                    </Form.Group> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {step === 2 && (
            <Row>
              <Col>
                <Card className="m-0">
                  <Card.Body className="pb-2 pt-4">
                    <Row>
                      <Col md={12}>
                        <h5 className="mb-4">รายการปุ๋ยเคมี</h5>
                        <Table striped bordered hover responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>ประเภทของปุ๋ย</th>
                              <th>ลักษณะปุ๋ย</th>
                              <th>สี</th>
                              <th>ภาชนะบรรจุ</th>
                              <th>ชื่อการค้า</th>
                              <th>เครื่องหมายการค้า</th>
                              <th>ชื่อผู้ผลิต</th>
                              <th>ประเทศ</th>
                              <th>รายการทดสอบ</th>
                              <th className="text-center">Action</th> {/* เพิ่มคอลัมน์สำหรับปุ่ม Edit / Delete */}
                            </tr>
                          </thead>
                          <tbody>
                            {dataList.length > 0 ? (
                              dataList.map((data, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{data.fertilizerCategory.join(', ')}</td>
                                  <td>{data.fertilizerType.join(', ')}</td>
                                  <td>{data.color.map((c) => c.label).join(', ')}</td>
                                  <td>{data.container}</td>
                                  <td>{data.tradeName}</td>
                                  <td>{data.trademark}</td>
                                  <td>{data.manufacturer}</td>
                                  <td>{data.country}</td>
                                  <td>{data.tests.join(', ')}</td>
                                  <td className="text-center">
                                    <Button variant="warning" size="sm" onClick={() => handleEdit(index)}>
                                      แก้ไข
                                    </Button>{' '}
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                                      ลบ
                                    </Button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="10" className="text-center">
                                  ไม่มีข้อมูล
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                        <Button
                          variant="primary"
                          className="mb-3"
                          onClick={() => {
                            setShowModal(true);
                          }}
                        >
                          <i className="feather icon-plus" />
                          เพิ่ม
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {step === 3 && (
            <Row>
              <Col>
                <Card className="m-0">
                  <Card.Body className="pb-2 pt-4">
                    <Row>
                      <Col md={12}>
                        <h5 className="mb-4">ข้อมูลการขอรับผลการตรวจ</h5>
                        <Form.Group className="mb-3">
                          <Form.Label>การรับรายงานผล</Form.Label>
                          <Form.Group>
                            <Form.Check
                              inline
                              type="checkbox"
                              label="รับด้วยตนเอง"
                              checked={reportMethod.includes('รับด้วยตัวอย่าง')}
                              onChange={(e) =>
                                setReportMethod(
                                  e.target.checked
                                    ? [...reportMethod, 'รับด้วยตัวอย่าง']
                                    : reportMethod.filter((item) => item !== 'รับด้วยตัวอย่าง')
                                )
                              }
                              id="reportCheck1"
                            />
                            <Form.Check
                              inline
                              type="checkbox"
                              label="ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail"
                              checked={reportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')}
                              onChange={(e) =>
                                setReportMethod(
                                  e.target.checked
                                    ? [...reportMethod, 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail']
                                    : reportMethod.filter((item) => item !== 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')
                                )
                              }
                              id="reportCheck2"
                            />
                            <Form.Check
                              inline
                              type="checkbox"
                              label="ส่งทางไปรษณีย์"
                              checked={reportMethod.includes('ส่งทางไปรษณีย์')}
                              onChange={(e) =>
                                setReportMethod(
                                  e.target.checked
                                    ? [...reportMethod, 'ส่งทางไปรษณีย์']
                                    : reportMethod.filter((item) => item !== 'ส่งทางไปรษณีย์')
                                )
                              }
                              id="reportCheck3"
                            />
                          </Form.Group>

                          {reportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail') && (
                            <Form.Group className="mt-3">
                              <Form.Label>E-mail สำหรับรับผลตรวจ :</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="กรอกอีเมล"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </Form.Group>
                          )}
                          {reportMethod.includes('ส่งทางไปรษณีย์') && (
                            <Form.Group className="mt-4">
                              <Form.Check
                                inline
                                type="radio"
                                label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                                checked={sameAddress}
                                onChange={() => setSameAddress(true)}
                                id="sameAddressRadio1"
                              />
                              <Form.Check
                                inline
                                type="radio"
                                label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                                checked={!sameAddress}
                                onChange={() => setSameAddress(false)}
                                id="sameAddressRadio2"
                              />
                              {sameAddress ? (
                                <>
                                  {company && (
                                    <Form.Group className="mb-3">
                                      <Form.Label>ที่อยู่จัดส่งเอกสาร :</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="ที่อยู่จัดส่งเอกสาร"
                                        value={companies.find((x) => x.id === Number(company))?.tax_address}
                                      />
                                    </Form.Group>
                                  )}
                                </>
                              ) : (
                                <Row>
                                  <Col md={6}>
                                    <Form.Group>
                                      <Form.Label>ที่อยู่ : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกที่อยู่"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group>
                                      <Form.Label>จังหวัด : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกจังหวัด"
                                        value={province}
                                        onChange={(e) => setProvince(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group className="mt-3">
                                      <Form.Label>อำเภอ : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกอำเภอ"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group className="mt-3">
                                      <Form.Label>ตำบล : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกตำบล"
                                        value={subDistrict}
                                        onChange={(e) => setSubDistrict(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group className="mt-3">
                                      <Form.Label>เลขที่ไปรษณีย์ : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกเลขที่ไปรษณีย์"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                    <Form.Group className="mt-3">
                                      <Form.Label>เบอร์โทรศัพท์ : </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="กรอกเบอร์โทรศัพท์"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              )}
                            </Form.Group>
                          )}
                        </Form.Group>
                        {/* การจำหน่ายตัวอย่าง */}
                        <Form.Group className="">
                          <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
                          <div>
                            <Form.Check
                              inline
                              type="radio"
                              label="ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง"
                              checked={sampleDisposal === 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง'}
                              onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง')}
                              id="sampleDisposalRadio1"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="มารับตัวอย่างคืนภายใน 3 เดือน"
                              checked={sampleDisposal === 'มารับตัวอย่างคืนภายใน 3 เดือน'}
                              onChange={() => setSampleDisposal('มารับตัวอย่างคืนภายใน 3 เดือน')}
                              id="sampleDisposalRadio2"
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน"
                              checked={sampleDisposal === 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน'}
                              onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน')}
                              id="sampleDisposalRadio3"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4 mt-2">
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
                            {files.map((file, index) => (
                              <li key={index}>
                                <i className="feather icon-file" style={{ marginRight: 12 }} />
                                {file.name}
                              </li>
                            ))}
                          </ul>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>ความต้องการอื่น</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="กรอกความต้องการอื่น"
                            value={otherRequirements}
                            onChange={(e) => setOtherRequirements(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Card.Body>
        <Card.Footer className="text-start">
          {step > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              <i className="feather icon-arrow-left" />
              ย้อนกลับ
            </Button>
          )}
          {step < 3 ? (
            <Button variant="primary" onClick={nextStep}>
              ถัดไป
              <i className="feather icon-arrow-right" style={{ marginLeft: 12, marginRight: 0 }} />
            </Button>
          ) : (
            <Button variant="primary" type="submit" onClick={() => onHandleSave(true)}>
              <i className="feather icon-save" />
              บันทึก
            </Button>
          )}
          <Button variant="danger" onClick={() => navigate('/user/request/')}>
            <i className="feather icon-corner-up-left" />
            ยกเลิก
          </Button>
        </Card.Footer>
      </Card>
      <>
        {/* Modal สำหรับเพิ่มข้อมูล */}
        <Modal show={showModal} onHide={() => setShowModal(false)} className=" modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>เพิ่มข้อมูลปุ๋ยอินทรีย์</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* ข้อมูลตัวอย่าง */}
              <Form.Group className="mb-3">
                <Form.Label>ประเภทของปุ๋ย</Form.Label>
                <div>
                  {['เชิงเดี่ยว', 'เชิงประกอบ', 'เชิงผสม', 'ธาตุอาหารรอง-ธาตุอาหารเสริม'].map((category, index) => (
                    <Form.Check
                      inline
                      type="checkbox"
                      label={category}
                      key={index}
                      checked={formData.fertilizerCategory.includes(category)}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fertilizerCategory: e.target.checked
                            ? [...formData.fertilizerCategory, category]
                            : formData.fertilizerCategory.filter((item) => item !== category)
                        })
                      }
                      id={`fertilizerCategory${index + 1}`}
                    />
                  ))}
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>ลักษณะปุ๋ย</Form.Label>
                <div>
                  {['เม็ด', 'อัดเม็ด', 'ผง', 'ปุ๋ยน้ำ', 'อื่นๆ'].map((type, index) => (
                    <Form.Check
                      inline
                      type="checkbox"
                      id={`fertilizerType${index + 1}`}
                      label={type}
                      key={index}
                      checked={formData.fertilizerType.includes(type)}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fertilizerType: e.target.checked
                            ? [...formData.fertilizerType, type]
                            : formData.fertilizerType.filter((item) => item !== type)
                        })
                      }
                    />
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>สี</Form.Label>
                <Select isMulti options={optionsColor} value={formData.color} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>สูตรปุ๋ย</Form.Label>
                <Form.Select value={formData.formula} onChange={(e) => setFormData({ ...formData, formula: e.target.value })} required>
                  <option value="">เลือกสูตรปุ๋ย</option>
                  {['15-15-15', '20-25-0', '16-16-16'].map((formula, index) => (
                    <option key={index} value={formula}>
                      {formula}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ภาชนะบรรจุ</Form.Label>
                <Form.Select value={formData.container} onChange={(e) => setFormData({ ...formData, container: e.target.value })}>
                  <option value="">เลือกภาชนะบรรจุ</option>
                  {['ถุงพลาสติก', 'กล่อง', 'ขวดแก้ว', 'ขวดพลาสติก', 'กระป๋อง', 'อื่นๆ'].map((container, index) => (
                    <option key={index} value={container}>
                      {container}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ชื่อการค้า</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรอกชื่อการค้า"
                  value={formData.tradeName}
                  onChange={(e) => setFormData({ ...formData, tradeName: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>เครื่องหมายการค้า</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรอกเครื่องหมายการค้า"
                  value={formData.trademark}
                  onChange={(e) => setFormData({ ...formData, trademark: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ชื่อผู้ผลิต</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรอกชื่อผู้ผลิต"
                  value={formData.manufacturer}
                  onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ประเทศ</Form.Label>
                <Form.Select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
                  <option value="">เลือกประเทศ</option>
                  <option value="ไทย">ไทย</option>
                  <option value="อังกฤษ">อังกฤษ</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>รายการทดสอบ</Form.Label>
                <div>
                  {[
                    'pH',
                    'Sp.Gr.',
                    'MC',
                    'TN',
                    'AN',
                    'NN',
                    'UN',
                    'WP₂O₅',
                    'AVP₂O₅',
                    'WK₂O',
                    'WCa',
                    'WMg',
                    'WS',
                    'WFe',
                    'WZn',
                    'WMn',
                    'WCu',
                    'WB',
                    'WMo',
                    'CI',
                    'Biurel',
                    'Biuret-N',
                    'OM',
                    'Fineness',
                    'อื่นๆ'
                  ].map((test, index) => (
                    <Form.Check
                      inline
                      id={index}
                      type="checkbox"
                      label={test}
                      key={index}
                      checked={formData.tests.includes(test)}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tests: e.target.checked ? [...formData.tests, test] : formData.tests.filter((item) => item !== test)
                        })
                      }
                    />
                  ))}
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleAddData}>
              บันทึก
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Form>
  );
};

// import React, { useState } from 'react';
// import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
// import { useNavigate } from 'react-router-dom';

// export const ChemicalFertilizerForm = () => {
//   const navigate = useNavigate();

//   const [selectedForm, setSelectedForm] = useState(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const optionsColor = [
//     { value: 'dark', label: 'ดำ' },
//     { value: 'white', label: 'ขาว' },
//     { value: 'red', label: 'แดง' },
//     { value: 'blue', label: 'น้ำเงิน' },
//     { value: 'green', label: 'เขียว' },
//     { value: 'yellow', label: 'เหลือง' },
//     { value: 'purple', label: 'ม่วง' }
//   ];

//   // Chemical Fertilizer Form States
//   const [chemicalCompany, setChemicalCompany] = useState('');
//   const [fertilizerCategory, setFertilizerCategory] = useState([]);
//   const [chemicalFertilizerType, setChemicalFertilizerType] = useState('');
//   const [chemicalColor, setChemicalColor] = useState([]);
//   const [formula, setFormula] = useState('');
//   const [chemicalContainer, setChemicalContainer] = useState('');
//   const [otherChemicalContainer, setOtherChemicalContainer] = useState('');
//   const [chemicalTradeName, setChemicalTradeName] = useState('');
//   const [chemicalTrademark, setChemicalTrademark] = useState('');
//   const [chemicalManufacturer, setChemicalManufacturer] = useState('');
//   const [chemicalCountry, setChemicalCountry] = useState('');
//   const [chemicalOrderedFrom, setChemicalOrderedFrom] = useState('');
//   const [chemicalComponents, setChemicalComponents] = useState([]);
//   const [chemicalTests, setChemicalTests] = useState([]);
//   const [otherChemicalTest, setOtherChemicalTest] = useState('');
//   const [chemicalReportMethod, setChemicalReportMethod] = useState([]);
//   const [chemicalEmail, setChemicalEmail] = useState('');
//   const [chemicalSameAddress, setChemicalSameAddress] = useState(true);
//   const [chemicalAddress, setChemicalAddress] = useState('');
//   const [chemicalProvince, setChemicalProvince] = useState('');
//   const [chemicalDistrict, setChemicalDistrict] = useState('');
//   const [chemicalSubDistrict, setChemicalSubDistrict] = useState('');
//   const [chemicalPostalCode, setChemicalPostalCode] = useState('');
//   const [chemicalPhone, setChemicalPhone] = useState('');
//   const [sampleDisposal, setSampleDisposal] = useState('');
//   const [otherRequirements, setOtherRequirements] = useState('');

//   const handleFormSelection = (formType) => {
//     setSelectedForm(formType);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccessModal(true);
//   };

//   const handleChange = (selected) => {
//     setChemicalColor(selected);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Card>
//         <Card.Header>
//           <h5>แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย</h5>
//         </Card.Header>
//         <Card.Body>
//           {/* ข้อมูลผู้ขึ้นทะเบียน */}
//           <Form.Group className="mb-3">
//             <Form.Label>บริษัท</Form.Label>
//             <Form.Select value={chemicalCompany} onChange={(e) => setChemicalCompany(e.target.value)} required>
//               <option value="">เลือกบริษัท</option>
//               <option value="บริษัทตัวอย่าง 1">บริษัทตัวอย่าง 1</option>
//               <option value="บริษัทตัวอย่าง 2">บริษัทตัวอย่าง 2</option>
//             </Form.Select>
//           </Form.Group>

//           {/* ข้อมูลตัวอย่าง */}
//           <Form.Group className="mb-3">
//             <Form.Label>ประเภทของปุ๋ย</Form.Label>
//             {['เชิงเดี่ยว', 'เชิงประกอบ', 'เชิงผสม', 'ธาตุอาหารรอง-ธาตุอาหารเสริม'].map((category, index) => (
//               <Form.Check
//                 inline
//                 type="checkbox"
//                 label={category}
//                 key={index}
//                 checked={fertilizerCategory.includes(category)}
//                 onChange={(e) =>
//                   setFertilizerCategory(
//                     e.target.checked ? [...fertilizerCategory, category] : fertilizerCategory.filter((item) => item !== category)
//                   )
//                 }
//                 id={`fertilizerCategory${index + 1}`}
//               />
//             ))}
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>ลักษณะปุ๋ย</Form.Label>
//             <Form.Select value={chemicalFertilizerType} onChange={(e) => setChemicalFertilizerType(e.target.value)} required>
//               <option value="">เลือกลักษณะปุ๋ย</option>
//               {['เม็ด', 'อัดเม็ด', 'ผง', 'ปุ๋ยน้ำ', 'อื่นๆ'].map((type, index) => (
//                 <option key={index} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </Form.Select>
//             {chemicalFertilizerType === 'อื่นๆ' && (
//               <Form.Control
//                 type="text"
//                 placeholder="ระบุลักษณะปุ๋ย"
//                 value={otherChemicalContainer}
//                 onChange={(e) => setOtherChemicalContainer(e.target.value)}
//               />
//             )}
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>สี</Form.Label>
//             <Select isMulti options={optionsColor} value={chemicalColor} onChange={handleChange} required />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>สูตรปุ๋ย</Form.Label>
//             <Form.Select value={formula} onChange={(e) => setFormula(e.target.value)} required>
//               <option value="">เลือกสูตรปุ๋ย</option>
//               {['15-15-15', '20-25-0', '16-16-16'].map((formula, index) => (
//                 <option key={index} value={formula}>
//                   {formula}
//                 </option>
//               ))}
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>ภาชนะบรรจุ</Form.Label>
//             <Form.Select value={chemicalContainer} onChange={(e) => setChemicalContainer(e.target.value)} required>
//               <option value="">เลือกภาชนะบรรจุ</option>
//               {['ถุงพลาสติก', 'กล่อง', 'ขวดแก้ว', 'ขวดพลาสติก', 'กระป๋อง', 'อื่นๆ'].map((container, index) => (
//                 <option key={index} value={container}>
//                   {container}
//                 </option>
//               ))}
//             </Form.Select>
//             {chemicalContainer === 'อื่นๆ' && (
//               <Form.Control
//                 type="text"
//                 placeholder="ระบุภาชนะบรรจุ"
//                 value={otherChemicalContainer}
//                 onChange={(e) => setOtherChemicalContainer(e.target.value)}
//               />
//             )}
//           </Form.Group>

//           {/* ข้อมูลการค้า */}
//           <Form.Group className="mb-3">
//             <Form.Label>ชื่อการค้า</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="กรอกชื่อการค้า"
//               value={chemicalTradeName}
//               onChange={(e) => setChemicalTradeName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>เครื่องหมายการค้า</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="กรอกเครื่องหมายการค้า"
//               value={chemicalTrademark}
//               onChange={(e) => setChemicalTrademark(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>ชื่อผู้ผลิต</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="กรอกชื่อผู้ผลิต"
//               value={chemicalManufacturer}
//               onChange={(e) => setChemicalManufacturer(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>ประเทศ</Form.Label>
//             <Form.Select value={chemicalCountry} onChange={(e) => setChemicalCountry(e.target.value)} required>
//               <option value="">เลือกประเทศ</option>
//               <option value="ไทย">ไทย</option>
//               <option value="อังกฤษ">อังกฤษ</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>สั่งจาก (บริษัท/ห้อง/ร้าน/อื่นๆ)</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="กรอกข้อมูล"
//               value={chemicalOrderedFrom}
//               onChange={(e) => setChemicalOrderedFrom(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>วัตถุส่วนประกอบของปุ๋ย</Form.Label>
//             <Select
//               isMulti
//               options={[
//                 { value: 'ammonia', label: 'ammonia' },
//                 { value: 'nitric-acid', label: 'nitric acid' },
//                 { value: 'ammonium-phosphate', label: 'ammonium phosphate' },
//                 { value: 'sulfuric-acid', label: 'sulfuric acid' }
//               ]}
//               value={chemicalComponents}
//               onChange={(e) => setChemicalComponents(e)}
//               required
//             />
//           </Form.Group>

//           {/* รายการทดสอบ */}
//           <Form.Group className="mb-3">
//             <Form.Label>รายการทดสอบ</Form.Label>
//             <Row>
//               {[
//                 'pH',
//                 'Sp.Gr.',
//                 'MC',
//                 'TN',
//                 'AN',
//                 'NN',
//                 'UN',
//                 'WP₂O₅',
//                 'AVP₂O₅',
//                 'WK₂O',
//                 'WCa',
//                 'WMg',
//                 'WS',
//                 'WFe',
//                 'WZn',
//                 'WMn',
//                 'WCu',
//                 'WB',
//                 'WMo',
//                 'CI',
//                 'Biurel',
//                 'Biuret-N',
//                 'OM',
//                 'Fineness',
//                 'อื่นๆ'
//               ].map((test, index) => (
//                 <Col xs={6} md={4} lg={2} key={index}>
//                   {' '}
//                   {/* จัด 6 คอลัมน์ในแต่ละแถว */}
//                   <Form.Check
//                     type="checkbox"
//                     label={test}
//                     checked={chemicalTests.includes(test)}
//                     onChange={(e) =>
//                       setChemicalTests(e.target.checked ? [...chemicalTests, test] : chemicalTests.filter((item) => item !== test))
//                     }
//                     id={`chemicalTestCheck${index + 1}`}
//                   />
//                 </Col>
//               ))}
//             </Row>
//             {chemicalTests.includes('อื่นๆ') && (
//               <Form.Control
//                 type="text"
//                 placeholder="ระบุรายการทดสอบ"
//                 value={otherChemicalTest}
//                 onChange={(e) => setOtherChemicalTest(e.target.value)}
//               />
//             )}
//           </Form.Group>

//           {/* การรับรายงานผล */}
//           <Form.Group className="mb-3">
//             <Form.Label>การรับรายงานผล</Form.Label>
//             <Form.Check
//               inline
//               type="checkbox"
//               label="รับด้วยตัวอย่าง"
//               checked={chemicalReportMethod.includes('รับด้วยตัวอย่าง')}
//               onChange={(e) =>
//                 setChemicalReportMethod(
//                   e.target.checked
//                     ? [...chemicalReportMethod, 'รับด้วยตัวอย่าง']
//                     : chemicalReportMethod.filter((item) => item !== 'รับด้วยตัวอย่าง')
//                 )
//               }
//               id="chemicalReportCheck1"
//             />
//             <Form.Check
//               inline
//               type="checkbox"
//               label="ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail"
//               checked={chemicalReportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')}
//               onChange={(e) =>
//                 setChemicalReportMethod(
//                   e.target.checked
//                     ? [...chemicalReportMethod, 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail']
//                     : chemicalReportMethod.filter((item) => item !== 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')
//                 )
//               }
//               id="chemicalReportCheck2"
//             />
//             {chemicalReportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail') && (
//               <Form.Control
//                 type="email"
//                 placeholder="กรอกอีเมล"
//                 value={chemicalEmail}
//                 onChange={(e) => setChemicalEmail(e.target.value)}
//                 required
//               />
//             )}
//             <Form.Check
//               inline
//               type="checkbox"
//               label="ส่งทางไปรษณีย์"
//               checked={chemicalReportMethod.includes('ส่งทางไปรษณีย์')}
//               onChange={(e) =>
//                 setChemicalReportMethod(
//                   e.target.checked
//                     ? [...chemicalReportMethod, 'ส่งทางไปรษณีย์']
//                     : chemicalReportMethod.filter((item) => item !== 'ส่งทางไปรษณีย์')
//                 )
//               }
//               id="chemicalReportCheck3"
//             />
//             {chemicalReportMethod.includes('ส่งทางไปรษณีย์') && (
//               <>
//                 <Form.Check
//                   inline
//                   type="radio"
//                   label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
//                   checked={chemicalSameAddress}
//                   onChange={() => setChemicalSameAddress(true)}
//                   id="chemicalSameAddressRadio1"
//                 />
//                 <Form.Check
//                   inline
//                   type="radio"
//                   label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
//                   checked={!chemicalSameAddress}
//                   onChange={() => setChemicalSameAddress(false)}
//                   id="chemicalSameAddressRadio2"
//                 />
//                 {!chemicalSameAddress && (
//                   <>
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกที่อยู่"
//                       value={chemicalAddress}
//                       onChange={(e) => setChemicalAddress(e.target.value)}
//                       required
//                     />
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกจังหวัด"
//                       value={chemicalProvince}
//                       onChange={(e) => setChemicalProvince(e.target.value)}
//                       required
//                     />
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกอำเภอ"
//                       value={chemicalDistrict}
//                       onChange={(e) => setChemicalDistrict(e.target.value)}
//                       required
//                     />
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกตำบล"
//                       value={chemicalSubDistrict}
//                       onChange={(e) => setChemicalSubDistrict(e.target.value)}
//                       required
//                     />
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกเลขที่ไปรษณีย์"
//                       value={chemicalPostalCode}
//                       onChange={(e) => setChemicalPostalCode(e.target.value)}
//                       required
//                     />
//                     <Form.Control
//                       type="text"
//                       placeholder="กรอกเบอร์โทรศัพท์"
//                       value={chemicalPhone}
//                       onChange={(e) => setChemicalPhone(e.target.value)}
//                       required
//                     />
//                   </>
//                 )}
//               </>
//             )}
//           </Form.Group>

//           {/* การจำหน่ายตัวอย่าง */}
//           <Form.Group className="mb-3">
//             <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
//             <Form.Check
//               inline
//               type="radio"
//               label="ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง"
//               checked={sampleDisposal === 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง'}
//               onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง')}
//               id="sampleDisposalRadio1"
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="มารับตัวอย่างคืนภายใน 3 เดือน"
//               checked={sampleDisposal === 'มารับตัวอย่างคืนภายใน 3 เดือน'}
//               onChange={() => setSampleDisposal('มารับตัวอย่างคืนภายใน 3 เดือน')}
//               id="sampleDisposalRadio2"
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน"
//               checked={sampleDisposal === 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน'}
//               onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน')}
//               id="sampleDisposalRadio3"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>ความต้องการอื่น</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               placeholder="กรอกความต้องการอื่น"
//               value={otherRequirements}
//               onChange={(e) => setOtherRequirements(e.target.value)}
//             />
//           </Form.Group>
//         </Card.Body>
//         <Card.Footer className="text-start">
//           <Button variant="primary" type="submit">
//             <i className="feather icon-save" />
//             บันทึก
//           </Button>
//           <Button variant="danger" onClick={() => navigate('/user/request/')}>
//             <i className="feather icon-corner-up-left" />
//             ย้อนกลับ
//           </Button>
//         </Card.Footer>
//       </Card>
//     </Form>
//   );
// };
