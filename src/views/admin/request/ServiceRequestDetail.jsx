import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServiceRequestsByID, getServiceRequestsStatusByID } from 'services/_api/serviceRequest';
import { getAllSampleReceiving } from 'services/_api/sampleReceivingRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import ReviewModal from './ReviewModal';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import AdminStepContent from './AdminStepContent';
import { FiEdit } from 'react-icons/fi';

const FertilizerDetails = ({ title }) => {
  const location = useLocation();
  const id = location.state?.id || null;
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);
  const [orientation, setOrientation] = useState('horizontal');
  const [activeStep, setActiveStep] = useState(0); // ใช้สำหรับควบคุม step ที่ active

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

  useEffect(() => {
    console.log('request id :', id);
    if (id) {
      getServiceRequest(id);
    } else {
      navigate('/admin/request');
    }
  }, [id, navigate]);

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);
  const [serviceStatus, setServiceStatus] = useState([]);
  const getServiceRequest = async (id) => {
    const response = await getServiceRequestsByID(id);
    const responseStatus = await getServiceRequestsStatusByID(id);
    console.log('response', response);
    console.log('sample_submissions', response.sample_submissions);
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
    setTimeout(() => {
      setLoading(false);
      alert('ดาวน์โหลดเอกสารสำเร็จ!');
    }, 3000);
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
    window.open(url, '_blank');
  };

  const getFertilizerCategoryLabel = (sampleList, fertilizerCategoryOptions) => {
    const selectedKey = Object.keys(sampleList).find((key) => sampleList[key] === 1);
    const selectedOption = fertilizerCategoryOptions.find((option) => option.value === selectedKey);
    return selectedOption ? selectedOption.label : null;
  };

  const columns = [
    { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
    {
      field: 'test_code',
      headerName: 'ทดสอบ',
      flex: 1,
      renderCell: (params) => {
        if (!params || !params.row) return '-';
        const { test_code, test_percentage } = params.row;
        return `${test_code || ''}${test_percentage ? ` (${test_percentage})` : ''}`.trim();
      }
    },
    {
      field: 'status',
      headerName: 'สถานะ',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: (params) => (
        <Badge pill bg={params.row.status === 'pending' ? 'warning' : params.row.status === 'rejected' ? 'danger' : 'success'}>
          {params.row.status === 'pending' ? 'รออนุมัติ' : params.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'}
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
      valueGetter: (params) => params?.row?.created_at || '-'
    }
  ];

  const handleSetDataGrid = (data) => {
    const setData = data.map((test, idx) => ({
      id: test.detail_id,
      no: idx + 1,
      ...test
    }));
    return setData;
  };

  const handleEdit = (id) => {
    navigate('/request/edit/', { state: { id: id } });
  };

  const handleReload = (check) => {
    if (check) {
      getServiceRequest(id);
    }
  };

  const steps = [
    { label: 'การขอรับบริการ', status: 'requested' },
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

  // ฟังก์ชันตรวจสอบว่า step นี้เสร็จสิ้นหรือไม่
  // const isStepComplete = (index) => {
  //   console.log('isStepComplete :', index);
  //   if (!serviceStatus.request_status_tracking || !serviceStatus.request_status_tracking[0]) return false;
  //   const statusTracking = serviceStatus.request_status_tracking[0];
  //   return statusTracking[steps[index].status] === 'yes';
  // };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>{title}</h5>
        </Card.Header>
        <Card.Body>
          <div>
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
                <AdminStepContent serviceId={serviceData.request_id} />
              </>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="text-start">
          <Button variant="primary" onClick={() => handleEdit(id)}>
            <FiEdit style={{ marginRight: 8 }} />
            แก้ไขข้อมูล
          </Button>
          <Button variant="danger" onClick={() => navigate('/admin/request/')}>
            <i className="feather icon-corner-up-left" />
            กลับหน้าหลัก
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

const VerifyService = () => {
  return <FertilizerDetails title="รายละเอียดข้อมูลการคำขอรับบริการ" />;
};

export default VerifyService;
