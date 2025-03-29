import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
// import { AiOutlineFileText } from 'react-icons/ai';
// import AddBilling from './AddBilling';
import { getServiceRequestsByID, getServiceRequestsStatusByID } from 'services/_api/serviceRequest';
import { getAllSampleReceiving } from 'services/_api/sampleReceivingRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
// import { Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SampleReceivingModal from './SampleReceivingModal';
import { authenUser } from 'services/_api/authentication';
import CreateQuotation from '../quotations/CreateQuotation';
import GenerateQuotation from '../quotations/GenerateQuotation';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';

const FertilizerDetails = ({ title }) => {
  // const { id } = useLocation().state;
  const location = useLocation();
  const id = location.state?.id || null;
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);
  const [user, setUser] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [orientation, setOrientation] = useState('horizontal');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];
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

  useEffect(() => {
    if (id) {
      getServiceRequest(id);
    } else {
      navigate('/admin/sample-receiving/');
    }
  }, [id, reloadData]);

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);
  const [serviceStatus, setServiceStatus] = useState([]);

  const getServiceRequest = async (id) => {
    const response = await getServiceRequestsByID(id);
    const responseStatus = await getServiceRequestsStatusByID(id);
    setSampleList(response.sample_submissions);
    setServiceData(response);

    // ตรวจสอบว่ามีข้อมูล request_status_tracking หรือไม่
    if (responseStatus && responseStatus.request_status_tracking.length > 0) {
      const statusTracking = responseStatus.request_status_tracking[0];

      // Map ค่าสถานะเป็นลำดับของ Step
      const stepsStatus = steps.map((step) => statusTracking[step.status] === 'yes');

      // หา step ล่าสุดที่เสร็จสิ้น
      const completedSteps = stepsStatus.lastIndexOf(true);

      // ตั้งค่า activeStep ตามสถานะล่าสุด (ถ้าไม่มี ให้เริ่มที่ 0)
      setActiveStep(completedSteps >= 0 ? completedSteps + 1 : 0);
      setServiceStatus(responseStatus);
    }
  };

  const [packagingTypes, setPackagingTypes] = useState([]);
  const [testItems, setSampleReceiving] = useState([]);

  useEffect(() => {
    handleGetPackageType();
    handleGetSampleReceiving();
    getFertilizerTypes();
  }, []);

  const handleGetPackageType = async () => {
    const response = await getAllPackagingType();
    setPackagingTypes(response);
  };

  const handleGetSampleReceiving = async () => {
    try {
      const response = await getAllSampleReceiving();
      setSampleReceiving(response);
    } catch (error) {
      console.error('Error fetching test items:', error);
      setSampleReceiving([]);
    }
  };

  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenNewTab = () => {
    const url = '/request/detial/quotation';
    window.open(url, '_blank'); // เปิด URL ในแท็บใหม่
  };

  const getFertilizerCategoryLabel = (sampleList, fertilizerCategoryOptions) => {
    // ค้นหาคีย์แรกที่มีค่า 1
    const selectedKey = Object.keys(sampleList).find((key) => sampleList[key] === 1);
    // ค้นหาข้อมูล option ที่ตรงกับคีย์ที่เลือก
    const selectedOption = fertilizerCategoryOptions.find((option) => option.value === selectedKey);
    return selectedOption ? selectedOption.label : null;
  };

  // กำหนดคอลัมน์สำหรับ DataGrid
  const columns = [
    { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
    {
      field: 'test_code',
      headerName: 'ทดสอบ',
      flex: 1,
      renderCell: (params) => {
        // ตรวจสอบ params และ params.row ก่อนใช้งาน
        if (!params || !params.row) return '-';
        const { test_code, test_percentage } = params.row;
        return `${test_code || ''}${test_percentage ? ` (${test_percentage})` : ''}`.trim();
      }
      // valueGetter: (params) => {
      //   // ตรวจสอบ params และ params.row ก่อนใช้งาน
      //   if (!params || !params.row) return '-';
      //   const { test_code, test_percentage } = params.row;
      //   return `${test_code || ''}${test_percentage ? ` (${test_percentage} %)` : ''}`.trim();
      // }
    },
    {
      field: 'status',
      headerName: 'สถานะ',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: (params) => (
        <Badge pill style={{}} bg={params.row.status === 'pending' ? 'warning' : params.row.status === 'rejected' ? 'danger' : 'success'}>
          {params.row.status === 'pending' ? 'รอการทดสอบ' : params.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'}
        </Badge>
      )
    },
    {
      field: 'test_value',
      headerName: 'ผลที่ได้',
      flex: 1,
      renderCell: (params) => params?.row?.test_value || '-'
    },
    {
      field: 'test_date',
      headerName: 'วันที่ทดสอบ',
      flex: 1,
      valueGetter: (params) => params?.row?.created_at || '-' // เปลี่ยนจาก test_date เป็น created_at ตาม API
    }
  ];

  const handleSetDataGrid = (data) => {
    const setData = data.map((test, idx) => ({
      id: test.detail_id, // หรือเปลี่ยนเป็น key ที่เหมาะสม
      no: idx + 1,
      ...test
    }));
    console.log('setData', setData);
    return setData;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOrientation('vertical');
      } else {
        setOrientation('horizontal');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEdit = (id) => {
    navigate('/request/edit/', { state: { id: id } });
  };

  const handleReload = (check) => {
    if (check) {
      console.log('handleReload :', check);
      setReloadData((prev) => !prev); // เปลี่ยนค่า reloadData เพื่อ trigger useEffect
    }
  };

  const steps = [
    { label: 'คำขอรับบริการ', status: 'requested' },
    { label: 'ลูกค้าส่งตัวอย่าง', status: 'sample_sent' },
    { label: 'ทบทวนคำขอ', status: 'request_reviewed' },
    { label: 'ตัวอย่างจัดส่งถึงแล็บ', status: 'sample_arrived_lab' },
    { label: 'รับตัวอย่างเข้าระบบ', status: 'sample_received' },
    { label: 'รอทดสอบบางรายการ', status: 'partial_testing' },
    { label: 'ออกใบเสนอราคา', status: 'quotation_issued' },
    { label: 'ขอใบแจ้งหนี้', status: 'invoice_requested' },
    { label: 'รับชำระเงิน', status: 'payment_received' },
    { label: 'หัก ณ ที่จ่าย', status: 'tax_withheld' },
    { label: 'ออกใบเสร็จรับเงิน/ใบกำกับภาษี', status: 'receipt_issued' }
  ];

  const isStepComplete = (index, sampleSubmissions, statusLogs) => {
    const sampleCount = sampleSubmissions.length;
    const stepStatus = steps[index].status;

    switch (index) {
      case 0: // การขอรับบริการ
        return statusLogs.requested !== null; // ถ้า requested ไม่เป็น null ถือว่าเสร็จสิ้น

      case 1: // ลูกค้าส่งตัวอย่าง
        if (sampleCount === 0) return false;
        return statusLogs.sample_sent !== null; // ถ้า sample_sent ไม่เป็น null ถือว่าเสร็จสิ้น

      case 2: // ทบทวนคำขอ
        return statusLogs.request_reviewed !== null; // ถ้า request_reviewed ไม่เป็น null ถือว่าเสร็จสิ้น

      case 3: // ตัวอย่างจัดส่งถึงแล็บ
        return statusLogs.sample_arrived_lab !== null; // ถ้า sample_arrived_lab ไม่เป็น null ถือว่าเสร็จสิ้น

      case 4: // รับตัวอย่างเข้าระบบ
        return statusLogs.sample_received !== null; // ถ้า sample_received ไม่เป็น null ถือว่าเสร็จสิ้น

      case 5: // รอทดสอบบางรายการ
        return statusLogs.partial_testing !== null; // ถ้า partial_testing ไม่เป็น null ถือว่าเสร็จสิ้น

      case 6: // ออกใบเสนอราคา
        return statusLogs.quotation_issued !== null; // ถ้า quotation_issued ไม่เป็น null ถือว่าเสร็จสิ้น

      case 7: // ขอใบแจ้งหนี้
        return statusLogs.invoice_requested !== null; // ถ้า invoice_requested ไม่เป็น null ถือว่าเสร็จสิ้น

      case 8: // รับชำระเงิน
        return statusLogs.payment_received !== null; // ถ้า payment_received ไม่เป็น null ถือว่าเสร็จสิ้น

      case 9: // หัก ณ ที่จ่าย
        return statusLogs.tax_withheld !== null; // ถ้า tax_withheld ไม่เป็น null ถือว่าเสร็จสิ้น

      case 10: // ออกใบเสร็จรับเงิน/ใบกำกับภาษี
        return statusLogs.receipt_issued !== null; // ถ้า receipt_issued ไม่เป็น null ถือว่าเสร็จสิ้น

      default:
        return false;
    }
  };
  return (
    <div>
      <Card>
        <Card.Header>
          <h5>{title}</h5>
        </Card.Header>
        <Card.Body>
          {/* ข้อมูลลูกค้า/บริษัท */}

          {/* MUI Stepper */}
          {orientation === 'vertical' ? (
            <Stepper
              activeStep={activeStep}
              orientation={orientation}
              alternativeLabel={orientation === 'horizontal'}
              sx={{
                width: '100%',
                margin: '0 auto',
                padding: '20px 0'
              }}
            >
              {steps.map((step, index) => (
                <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                  <StepLabel>{step.label}</StepLabel>
                  {orientation === 'vertical' && (
                    <StepContent>
                      <ServiceStepContent serviceId={id} handleReload={handleReload} />
                    </StepContent>
                  )}
                </Step>
              ))}
            </Stepper>
          ) : (
            <>
              <Card style={{ borderRadius: 10, marginBottom: 10 }}>
                <Card.Body style={{ padding: '8px 20px 3px' }}>
                  <Stepper
                    activeStep={activeStep}
                    orientation={orientation}
                    alternativeLabel={orientation === 'horizontal'}
                    sx={{
                      width: '100%',
                      margin: '0 auto',
                      padding: '20px 0'
                    }}
                  >
                    {steps.map((step, index) => (
                      <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                        <StepLabel>{step.label}</StepLabel>
                        {orientation === 'vertical' && (
                          <StepContent>
                            <ServiceStepContent serviceId={id} handleReload={handleReload} />
                          </StepContent>
                        )}
                      </Step>
                    ))}
                  </Stepper>
                </Card.Body>
              </Card>
              {/* <AdminStepContent serviceId={serviceData.request_id} /> */}
            </>
          )}
          <Card style={{ borderRadius: 10, marginBottom: 0 }}>
            <Card.Body style={{ paddingBottom: 20, paddingTop: 20 }}>
              <Row>
                {serviceData.request_no && (
                  <Col md={12}>
                    <h5 className="mb-4">
                      เลขที่คำขอรับบริการ : <span style={{ fontSize: 18 }}>{serviceData.request_no || ''}</span>
                    </h5>
                  </Col>
                )}
                <Col md={12}>
                  <h6 className="mb-3">ข้อมูลผู้ขอขึ้นทะเบียน</h6>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    บริษัท : <strong className="text-dark">{serviceData.customer_name}</strong>
                  </p>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    ประเภทคำขอ :
                    <strong className="text-dark">
                      {serviceData.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'}
                    </strong>
                  </p>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    คำขอเพิ่มเติม : <strong className="text-dark">{serviceData.notes}</strong>
                  </p>
                </Col>

                {/* ข้อมูลปุ๋ย */}
                <h6 className="mt-3 mb-2">ข้อมูลตัวอย่างปุ๋ย</h6>
                {sampleList.map((sample, index) => (
                  <>
                    <Row key={`Accordion-${index}`}>
                      <Col md={12} className="ms-2 ps-0 pe-0" style={{ border: '1px solid #f8f9fa' }}>
                        <Accordion sx={{ boxShadow: 'none' }}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{ backgroundColor: '#f8f9fa', borderRadius: 0 }}
                          >
                            <p className="mb-0">
                              ตัวอย่างที่ {index + 1}{' '}
                              {sample.submission_no && (
                                <>
                                  เลขที่ :{' '}
                                  <strong className="text-dark" style={{ fontWeight: 'bold' }}>
                                    {sample.submission_no || '-'}
                                  </strong>{' '}
                                </>
                              )}
                              สูตรปุ๋ย : <strong className="text-dark">{sample.fertilizer_formula || '-'}</strong> ( ชื่อสามัญ :{' '}
                              <strong className="text-dark" style={{ fontWeight: 'bold' }}>
                                {sample.common_name || '-'}
                              </strong>
                              ) สถานะ :
                              <Badge
                                pill
                                bg={
                                  (sample.verification_status === 'No' && sample.is_job_accepted) ||
                                  (sample.verification_status === 'No' && !sample.is_job_accepted) ||
                                  (sample.verification_status === 'Yes' && !sample.is_job_accepted)
                                    ? 'warning'
                                    : sample.verification_status === 'Yes' && sample.is_job_accepted
                                      ? 'success'
                                      : 'danger'
                                }
                                style={{ marginLeft: 12 }}
                              >
                                {(sample.verification_status === 'No' && sample.is_job_accepted) ||
                                (sample.verification_status === 'No' && !sample.is_job_accepted) ||
                                (sample.verification_status === 'Yes' && !sample.is_job_accepted)
                                  ? 'รอการตรวจสอบ'
                                  : sample.verification_status === 'Yes' && sample.is_job_accepted
                                    ? 'รับงาน'
                                    : ' ไม่อนุมัติ'}
                              </Badge>
                            </p>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Row>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  ประเภทของปุ๋ย :{' '}
                                  <strong className="text-dark">{getFertilizerCategoryLabel(sample, fertilizerCategoryOptions)}</strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  ลักษณะปุ๋ย :{' '}
                                  <strong className="text-dark">
                                    {fertilizerTypes.find((type) => type.fertilizer_type_id === sample.fertilizer_type_id)
                                      ?.fertilizer_type_name || '-'}
                                  </strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  สี : <strong className="text-dark">{sample.color || '-'}</strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  ภาชนะบรรจุ :{' '}
                                  <strong className="text-dark">
                                    {packagingTypes.find((type) => type.packaging_type_id === sample.packaging_id)?.packaging_type_name ||
                                      '-'}
                                  </strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  ชื่อการค้า : <strong className="text-dark">{sample.trade_name || '-'}</strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  ผู้ผลิต (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.manufacturer || '-'}</strong> ประเทศ :{' '}
                                  <strong className="text-dark">{sample.manufacturer_country || '-'}</strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-2">
                                <p className="mb-0">
                                  สั่งจาก (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.supplier || '-'}</strong> ประเทศ :{' '}
                                  <strong className="text-dark">{sample.supplier_country || '-'}</strong>
                                </p>
                              </Col>
                              <Col md={6} className="mb-0">
                                <p className="mb-0">
                                  สถานะ :
                                  <Badge
                                    pill
                                    bg={
                                      (sample.verification_status === 'No' && sample.is_job_accepted) ||
                                      (sample.verification_status === 'No' && !sample.is_job_accepted) ||
                                      (sample.verification_status === 'Yes' && !sample.is_job_accepted)
                                        ? 'warning'
                                        : sample.verification_status === 'Yes' && sample.is_job_accepted
                                          ? 'success'
                                          : 'danger'
                                    }
                                    style={{ marginLeft: 12 }}
                                  >
                                    {(sample.verification_status === 'No' && sample.is_job_accepted) ||
                                    (sample.verification_status === 'No' && !sample.is_job_accepted) ||
                                    (sample.verification_status === 'Yes' && !sample.is_job_accepted)
                                      ? 'รอการตรวจสอบ'
                                      : sample.verification_status === 'Yes' && sample.is_job_accepted
                                        ? 'รับงาน'
                                        : ' ไม่อนุมัติ'}
                                  </Badge>
                                </p>
                              </Col>
                              <Col md={12} className="mb-2">
                                <h6 className="mb-3">รายการทดสอบ</h6>
                                <div style={{ width: '100%' }}>
                                  <DataGrid
                                    rows={handleSetDataGrid(sample.sample_submission_details)}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5, 10, 20]}
                                    pagination
                                    disableSelectionOnClick
                                    hideFooterSelectedRowCount
                                  />
                                </div>
                              </Col>
                            </Row>
                          </AccordionDetails>
                        </Accordion>
                        <Col style={{ padding: '0 16px 8px' }}>
                          <SampleReceivingModal
                            submissionId={sample.submission_id}
                            handleTracking={handleReload}
                            trackingData={sample.sample_tracking}
                            reviewBy={user.user_id}
                            sampleNo={sample.submission_no}
                            reloadData={reloadData}
                            sampleStatus={serviceStatus.sample_submissions.find((x) => x.submission_id === sample.submission_id)}
                          />
                        </Col>

                        {serviceData.quotation_data && serviceData.quotation_data.length > 0 && (
                          <Col style={{ padding: '8px 8px 8px' }}>
                            <GenerateQuotation
                              quotationData={serviceData.quotation_data}
                              onChange={handleReload}
                              sampleStatus={serviceStatus.sample_submissions.find((x) => x.submission_id === sample.submission_id)}
                            />
                          </Col>
                        )}
                      </Col>
                    </Row>

                    {index < sampleList.length - 1 && <hr className="mt-4 mb-2" />}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
        <Card.Footer className="text-start">
          {serviceData.request_no && (
            <CreateQuotation
              serviceId={id}
              handleBilling={handleReload}
              testItems={serviceData.test_items_for_quotation}
              serviceData={serviceData}
              serviceStatus={serviceStatus}
              createdBy={user.user_id}
              reloadData={reloadData}
            />
          )}
          {/* <Button variant="primary" onClick={() => handleEdit(id)}>
            <i className="feather icon-corner-up-left" />
            แก้ไขข้อมูล
          </Button> */}
          <Button variant="danger" onClick={() => navigate('/admin/request/')}>
            <i className="feather icon-corner-up-left" />
            กลับหน้าหลัก
          </Button>
        </Card.Footer>
        {/* <Card.Footer>
          <Button variant="primary" onClick={() => navigate('/request/')}>
            กลับหน้าหลัก
          </Button>
        </Card.Footer> */}
      </Card>
    </div>
  );
};

const AddTestItem = () => {
  return <FertilizerDetails title="ข้อมูลการรับตัวอย่างปุ๋ย" />;
};

export default AddTestItem;
