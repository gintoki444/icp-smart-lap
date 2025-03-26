import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getServiceRequestsByID } from 'services/_api/serviceRequest';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import AdminStepContent from './AdminStepContent';
import { LuMailQuestion } from 'react-icons/lu';
import { CircularProgress, Box } from '@mui/material';
import EmailForm from 'components/Email/EmailForm';
import CreateServiceRequest from 'components/PDF/CreateServiceRequest';

const FertilizerDetails = ({ title }) => {
  const location = useLocation();
  // const id = location.state?.id || null;
  const { id: paramId } = useParams();
  const id = paramId || location.state?.id || null;

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);
  const [orientation, setOrientation] = useState('horizontal');
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true); // ควบคุมสถานะ loading
  const [pendingRequests, setPendingRequests] = useState(0); // นับจำนวนการโหลดที่รอดำเนินการ

  useEffect(() => {
    console.log('request id :', id);
    if (id) {
      getServiceRequest(id);
    } else {
      navigate('/admin/request');
      setLoading(false);
    }
  }, [id, navigate]);

  // ฟังก์ชันสำหรับเริ่มการโหลด
  const startLoading = () => {
    setPendingRequests((prev) => {
      const newCount = prev + 1;
      setLoading(newCount > 0); // ถ้ามีการโหลดอย่างน้อย 1 รายการ ให้แสดง loading
      return newCount;
    });
  };

  // ฟังก์ชันสำหรับหยุดการโหลด
  const stopLoading = () => {
    setPendingRequests((prev) => {
      const newCount = Math.max(prev - 1, 0); // ไม่ให้ต่ำกว่า 0
      setLoading(newCount > 0); // ถ้าไม่มีรายการโหลดแล้ว ให้ซ่อน loading
      return newCount;
    });
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

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);

  const getServiceRequest = async (id) => {
    try {
      startLoading(); // เริ่มการโหลด
      const response = await getServiceRequestsByID(id);
      console.log('response', response);
      setSampleList(response.sample_submissions || []);
      setServiceData(response);

      // const responseStatus = await getServiceRequestsStatusByID(id);
      // console.log('sample_submissions', response.sample_submissions);

      // if (responseStatus && responseStatus.request_status_tracking.length > 0) {
      //   const statusTracking = responseStatus.request_status_tracking[0];
      //   const stepsStatus = steps.map((step) => statusTracking[step.status] === 'yes');
      //   const completedSteps = stepsStatus.lastIndexOf(true);
      //   setActiveStep(completedSteps >= 0 ? completedSteps + 1 : 0);
      //   setServiceStatus(responseStatus);
      // }
    } catch (error) {
      console.error('Error fetching service request:', error);
      navigate('/admin/request');
    } finally {
      stopLoading(); // หยุดการโหลด
    }
  };

  const handleReload = (check) => {
    if (check) {
      getServiceRequest(id);
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
      case 0:
        return statusLogs.requested !== null;
      case 1:
        if (sampleCount === 0) return false;
        return statusLogs.sample_sent !== null;
      case 2:
        return statusLogs.request_reviewed !== null;
      case 3:
        return statusLogs.sample_arrived_lab !== null;
      case 4:
        return statusLogs.sample_received !== null;
      case 5:
        return statusLogs.partial_testing !== null;
      case 6:
        return statusLogs.quotation_issued !== null;
      case 7:
        return statusLogs.invoice_requested !== null;
      case 8:
        return statusLogs.payment_received !== null;
      case 9:
        return statusLogs.tax_withheld !== null;
      case 10:
        return statusLogs.receipt_issued !== null;
      default:
        return false;
    }
  };

  const [company, setCompany] = useState({});
  const handleSetCustomer = async (data) => {
    console.log('handleSetCustomer data', data);
    setCompany(data);
  };
  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
          }}
        >
          <CircularProgress size={60} />
        </Box>
      ) : (
        <Card>
          <Card.Header>
            <h5>{title}</h5>
          </Card.Header>
          <Card.Body>
            <div>
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
                          <AdminStepContent
                            serviceId={id}
                            handleReload={handleReload}
                            startLoading={startLoading}
                            stopLoading={stopLoading}
                            handleSetCustomer={handleSetCustomer}
                          />
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
                          </Step>
                        ))}
                      </Stepper>
                    </Card.Body>
                  </Card>
                  <AdminStepContent
                    serviceId={id}
                    handleReload={handleReload}
                    startLoading={startLoading}
                    stopLoading={stopLoading}
                    handleSetCustomer={handleSetCustomer}
                  />
                </>
              )}
            </div>
          </Card.Body>
          <Card.Footer className="text-start">
            {/* <Button variant="primary" onClick={() => {}}>
              <LuMailQuestion style={{ marginRight: 8 }} />
              แจ้งแก้ไขข้อมูล
            </Button> */}
            <EmailForm buttonTitle="แจ้งแก้ไขข้อมูล" icon={<LuMailQuestion style={{ marginRight: 8 }} />} serviceData={serviceData} />
            <CreateServiceRequest serviceData={serviceData} customerData={company} />
            <Button variant="danger" onClick={() => navigate('/admin/request/')}>
              <i className="feather icon-corner-up-left" />
              กลับหน้าหลัก
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

const VerifyService = () => {
  return <FertilizerDetails title="รายละเอียดคำขอรับบริการ" />;
};

export default VerifyService;
