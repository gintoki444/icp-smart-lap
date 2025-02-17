import React, { useState } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/ai';
import AddTestTracking from './AddTestTracking';
import AddBilling from './AddBilling';

const FertilizerDetails = ({ data, title }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);

    if (step === 1) {
      resetStep();
    }
  };

  const resetStep = () => {
    setStep(2);
    setQuotation(false);
    setConfirmRequest(false);
    setTracking(false);
    setBilling(false);
  };
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    handleOpenNewTab();
    // จำลองการโหลดเอกสาร (เช่น การดาวน์โหลดไฟล์ PDF)
    setTimeout(() => {
      setLoading(false);
      alert('ดาวน์โหลดเอกสารสำเร็จ!');
    }, 3000); // กำหนดเวลาโหลด 3 วินาที
  };

  const handleOpenNewTab = () => {
    const url = '/user/request/detial/quotation';
    window.open(url, '_blank'); // เปิด URL ในแท็บใหม่
  };
  return (
    <div>
      <Card>
        <Card.Header>
          <h5>{title}</h5>
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
                  <div className="label">การขอรับบริการ</div>
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
                  <div className="label">ตรวจสอบข้อมูล</div>
                </a>
              </li>
              {/* Step 3 */}
              <li
                className={`form-stepper-list text-center ${step === 3 ? 'form-stepper-active' : step > 3 || tracking ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="3"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 3 || step < 3 ? '3' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">รับตัวอย่างเข้าระบบ</div>
                </a>
              </li>
              {/* Step 4 */}
              <li
                className={`form-stepper-list text-center ${step === 4 ? 'form-stepper-active' : step > 4 || quotation ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="3"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>
                      {(step === 4 || step < 4) && quotation === false ? '4' : <i className="feather icon-check" />}
                    </span>
                  </span>
                  <div className="label">ใบเสนอราคา</div>
                </a>
              </li>
              {/* Step 5 */}
              <li
                className={`form-stepper-list text-center ${step === 5 ? 'form-stepper-active' : step > 5 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="3"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 5 || step < 5 ? '5' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">ชำระค่าบริการ</div>
                </a>
              </li>
              {/* Step 6 */}
              <li
                className={`form-stepper-list text-center ${step === 6 ? 'form-stepper-active' : step > 6 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`}
                step="3"
              >
                <a className="mx-2">
                  <span className="form-stepper-circle">
                    <span style={{ fontSize: 24 }}>{step === 6 || step < 6 ? '6' : <i className="feather icon-check" />}</span>
                  </span>
                  <div className="label">ผลการทดสอบ</div>
                </a>
              </li>
            </ul>
          </div>
          {/* ข้อมูลบริษัท */}
          <Row className="container ">
            {/* {confirmRequest && ( */}
            <Col md={12}>
              <h5 className="mb-3">
                เลขที่คำขอบริการ : <span style={{ fontSize: 18 }}>{data.request_no}</span>
              </h5>
            </Col>
            {/* )} */}
            <Col md={12}>
              <h5 className="mb-3">ข้อมูลบริษัท</h5>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                บริษัท : <strong className="text-dark">{data.company}</strong>
              </p>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                ประเภทคำขอ : <strong className="text-dark">{data.typeRequest.join(', ')}</strong>
              </p>
            </Col>
            <Col md={12} className="mt-4">
              <h5 className="mb-3">ข้อมูลการรับรายงานผล</h5>
            </Col>
            <Col md={6} className="mb-1">
              <p className="mb-0">
                วิธีการรับรายงานผล : <strong className="text-dark">{data.reportMethod.join(', ')}</strong>
              </p>
              {data.email && (
                <p className="mb-0">
                  Email : <strong className="text-dark">{data.email || '-'}</strong>
                </p>
              )}
            </Col>
            {data.sameAddress && (
              <>
                <Col md={6}>
                  <p className="mb-0">
                    ที่อยู่จัดส่ง :{' '}
                    <strong className="text-dark">
                      {data.sameAddress
                        ? 'ที่อยู่เดียวกับบริษัทที่ลงทะเบียน'
                        : `${data.address}, ${data.subDistrict}, ${data.district}, ${data.province}, ${data.postalCode}`}
                    </strong>
                  </p>
                </Col>

                <Col md={6}>
                  <p className="mb-0">
                    เบอร์โทรศัพท์ : <strong className="text-dark">{data.phone}</strong>
                  </p>
                </Col>
              </>
            )}
            <Col md={6}>
              <p className="mb-0">
                การจำหน่ายตัวอย่าง : <strong className="text-dark">{data.sampleDisposal || '-'}</strong>
              </p>
            </Col>
            <Col md={6}>
              <p className="mb-0">
                ข้อกำหนดเพิ่มเติม : <strong className="text-dark">{data.otherRequirements || '-'}</strong>
              </p>
            </Col>
            <Col md={12} className="mt-4 mb-3">
              <h5>สถานะปัจจุบัน</h5>
              <div style={{ paddingLeft: 12 }}>
                {step === 2 && (
                  <p style={{ marginBottom: 5 }}>
                    สถานะ :
                    <Badge bg={'warning'} style={{ marginLeft: 12 }}>
                      กำลังตรวจสอบข้อมูล
                    </Badge>
                  </p>
                )}
                {step >= 3 && (
                  <p style={{ marginBottom: 5 }}>
                    {!confirmRequest ? 'สถานะการตรวจสอบ' : 'สถานะการขอบริการ'} :
                    <Badge bg={'success'} style={{ marginLeft: 12 }}>
                      {!confirmRequest ? ' สำเร็จ' : ' ยืนยันการรับบริการ'}
                    </Badge>
                  </p>
                )}
                {step >= 3 && confirmRequest && (
                  <p style={{ marginBottom: 5 }}>
                    สถานะตัวอย่าง :{' '}
                    {!tracking ? (
                      <Badge bg={'warning'} style={{ marginLeft: 12 }}>
                        รอรับตัวอย่าง
                      </Badge>
                    ) : (
                      <Badge bg={'success'} style={{ marginLeft: 12 }}>
                        สำเร็จ
                      </Badge>
                    )}
                  </p>
                )}
                {step >= 3 && confirmRequest && (
                  <p style={{ marginBottom: 5 }}>
                    สถานะการชำระเงิน :{' '}
                    {!billing ? (
                      <Badge bg={'warning'} style={{ marginLeft: 12 }}>
                        รอชำระเงิน
                      </Badge>
                    ) : (
                      <Badge bg={'success'} style={{ marginLeft: 12 }}>
                        ชำระเงินสำเร็จ
                      </Badge>
                    )}
                  </p>
                )}
                {step >= 3 && confirmRequest && tracking && (
                  <p style={{ marginBottom: 5 }}>
                    สถานะการทดสอบ :{' '}
                    {confirmRequest && tracking ? (
                      <Badge bg={'warning'} style={{ marginLeft: 12 }}>
                        กำลังทดสอบ
                      </Badge>
                    ) : (
                      <Badge bg={'success'} style={{ marginLeft: 12 }}>
                        ทดสอบสำเร็จ
                      </Badge>
                    )}
                  </p>
                )}
              </div>
            </Col>

            {/* ข้อมูลปุ๋ย */}
            <h5 className="mt-3">ข้อมูลตัวอย่างปุ๋ย</h5>
            <Col md={12} className="mb-2">
              <Table bordered>
                <thead>
                  <tr>
                    <th>หมวดหมู่ปุ๋ย</th>
                    <th>ลักษณะปุ๋ย</th>
                    <th>สี</th>
                    <th>ภาชนะบรรจุ</th>
                    <th>ชื่อการค้า</th>
                    <th>เครื่องหมายการค้า</th>
                    <th>สูตร</th>
                    <th>ผู้ผลิต</th>
                    <th>ประเทศ</th>
                    <th>รายการทดสอบ</th>
                    {confirmRequest && (
                      <>
                        <th className="text-center">สถานะ</th>
                        <th className="text-center">action</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.fertilizers.map((fertilizer, index) => (
                    <tr key={index}>
                      <td>{fertilizer.fertilizerCategory.join(', ')}</td>
                      <td>{fertilizer.fertilizerType.join(', ')}</td>
                      <td>{fertilizer.color.join(', ')}</td>
                      <td>{fertilizer.container}</td>
                      <td>{fertilizer.tradeName}</td>
                      <td>{fertilizer.trademark}</td>
                      <td>{fertilizer.formula || '-'}</td>
                      <td>{fertilizer.manufacturer}</td>
                      <td>{fertilizer.country}</td>
                      <td>{fertilizer.tests.join(', ')}</td>

                      {confirmRequest && (
                        <>
                          <td className="text-center">
                            {!tracking ? (
                              '-'
                            ) : tracking && step > 3 ? (
                              <strong className="text-warning">กำลังทดสอบ</strong>
                            ) : (
                              <strong className="text-success">สำเร็จ</strong>
                            )}
                          </td>
                          <td className="text-center">
                            {!tracking ? (
                              '-'
                            ) : (
                              <Button variant="outline-info" style={{ padding: 10, paddingTop: 5, paddingBottom: 5 }} onClick={() => {}}>
                                <i className="feather icon-file-text" style={{ marginRight: 0 }} />
                              </Button>
                            )}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>

            {quotation && !billing && (
              <>
                <h5>ข้อมูลใบเสนอราคา</h5>
                <Col md={12} className="mb-3">
                  <Button
                    variant="outline-primary"
                    onClick={handleDownload}
                    disabled={loading} // ปิดปุ่มเมื่อกำลังโหลด
                    style={{ minWidth: '150px' }}
                  >
                    {loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                        กำลังดาวน์โหลด...
                      </>
                    ) : (
                      <>
                        <i className="feather icon-download" />
                        ดาวน์โหลดเอกสาร
                      </>
                    )}
                  </Button>
                </Col>
              </>
            )}

            {step >= 6 && (
              <>
                <h5>ผลการทดสอบ</h5>
                <Col md={12} className="mb-3">
                  <Button
                    variant="outline-primary"
                    onClick={() => {}}
                    disabled={loading} // ปิดปุ่มเมื่อกำลังโหลด
                    style={{ minWidth: '150px' }}
                  >
                    {loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                        กำลังดาวน์โหลด...
                      </>
                    ) : (
                      <>
                        <i className="feather icon-download" />
                        ดาวน์โหลดทดสอบ
                      </>
                    )}
                  </Button>
                </Col>
              </>
            )}
            <Col>
              {confirmRequest && quotation && <AddTestTracking handleTracking={setTracking} />}
              {confirmRequest && <AddBilling AddBilling={setBilling} />}
              <Col md={12} className="mt-3">
                {step === 3 && !quotation && (
                  <Button variant="outline-info" onClick={() => setQuotation(true)}>
                    <i>
                      <AiOutlineFileText />
                    </i>
                    ขอใบเสนอราคา
                  </Button>
                )}
                {quotation && !confirmRequest && (
                  <>
                    <Button variant="outline-success" onClick={() => setConfirmRequest(true)}>
                      <i>
                        <AiOutlineFileText />
                      </i>
                      ยืนยันการขอรับบริการ
                    </Button>
                    <Button variant="warning" onClick={() => resetStep()}>
                      <i className="feather icon-edit" />
                      แก้ไขการขอรับบริการ
                    </Button>
                  </>
                )}
              </Col>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-start">
          {step > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              <i className="feather icon-arrow-left" />
              ย้อนกลับ
            </Button>
          )}
          {step <= 6 && (
            <Button variant="primary" onClick={nextStep}>
              ถัดไป
              <i className="feather icon-arrow-right" style={{ marginLeft: 12, marginRight: 0 }} />
            </Button>
          )}
          <Button variant="danger" onClick={() => navigate('/user/request/')}>
            <i className="feather icon-corner-up-left" />
            กลับหน้าหลัก
          </Button>
        </Card.Footer>
        {/* <Card.Footer>
          <Button variant="primary" onClick={() => navigate('/user/request/')}>
            กลับหน้าหลัก
          </Button>
        </Card.Footer> */}
      </Card>
    </div>
  );
};

// ตัวอย่างการใช้งาน
const organicData = {
  id: 1,
  request_no: 'REQ-2025-002',
  company: 'บริษัท เกษตรรุ่งเรือง จำกัด',
  typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
  reportMethod: ['รับด้วยตัวอย่าง'],
  email: '',
  sameAddress: true,
  address: '',
  province: '',
  district: '',
  subDistrict: '',
  postalCode: '',
  phone: '081-234-5678',
  sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
  otherRequirements: '',
  fertilizers: [
    {
      fertilizerCategory: ['ปุ๋ยอินทรีย์'],
      fertilizerType: ['เม็ด'],
      color: ['ดำ'],
      container: 'ถุงพลาสติก',
      tradeName: 'ปุ๋ยอินทรีย์สูตรเข้มข้น',
      trademark: 'ตราใบไม้',
      formula: '',
      manufacturer: 'โรงงานปุ๋ยอินทรีย์ไทย',
      country: 'ไทย',
      tests: ['pH', 'MC', 'OM'],
      status: 'pending'
    }
  ]
};

const RequestDetailPage = () => {
  return <FertilizerDetails data={organicData} title="รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ยอินทรีย์" />;
};

export default RequestDetailPage;
