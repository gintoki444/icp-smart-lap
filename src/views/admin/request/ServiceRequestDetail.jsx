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

const VerifyService = () => {
  const location = useLocation();
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
  const [loading, setLoading] = useState(true);
  const [pendingRequests, setPendingRequests] = useState(0);

  useEffect(() => {
    console.log('request id :', id);
    if (id) {
      getServiceRequest(id);
    } else {
      navigate('/admin/request');
      setLoading(false);
    }
  }, [id, navigate]);

  const startLoading = () => {
    setPendingRequests((prev) => {
      const newCount = prev + 1;
      setLoading(newCount > 0);
      return newCount;
    });
  };

  const stopLoading = () => {
    setPendingRequests((prev) => {
      const newCount = Math.max(prev - 1, 0);
      setLoading(newCount > 0);
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
      startLoading();
      const response = await getServiceRequestsByID(id);
      console.log('response', response);
      setSampleList(response.sample_submissions || []);
      setServiceData(response);
      // ลบการเรียก updateActiveStep ออก เพราะจะย้ายไปใช้ useEffect
    } catch (error) {
      console.error('Error fetching service request:', error);
      navigate('/admin/request');
    } finally {
      stopLoading();
    }
  };

  // เพิ่ม useEffect เพื่ออัปเดต activeStep เมื่อ serviceData เปลี่ยน
  useEffect(() => {
    if (serviceData && Object.keys(serviceData).length > 0) {
      updateActiveStep(serviceData, {});
    }
  }, [serviceData]); // เรียก updateActiveStep เมื่อ serviceData เปลี่ยน

  const handleReload = (check) => {
    if (check) {
      getServiceRequest(id);
    }
  };

  const steps = [
    { label: 'คำขอรับบริการ', status: 'requested' },
    { label: 'ลูกค้าส่งตัวอย่าง', status: 'sample_sent' },
    { label: 'ตัวอย่างจัดส่งถึงแล็บ', status: 'sample_arrived_lab' },
    { label: 'รับตัวอย่างเข้าระบบ', status: 'sample_received' },
    { label: 'ทบทวนคำขอ', status: 'request_reviewed' },
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
        return statusLogs.sample_arrived_lab !== null;
      case 3:
        return statusLogs.sample_received !== null;
      case 4:
        return statusLogs.request_reviewed !== null;
      case 5:
        return statusLogs.partial_testing !== null ? true : false;
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

  const updateActiveStep = (serviceData, serviceStatus) => {
    const sampleSubmissions = serviceData.sample_submissions || [];
    const statusLogs = serviceData.service_status_logs || {};

    let currentStep = 0;
    let displayStep = 0;

    for (let i = 0; i < steps.length; i++) {
      const isPartialTestingSkipped = i === 5 && statusLogs.partial_testing === null;

      if (isPartialTestingSkipped) {
        continue;
      }

      if (isStepComplete(i, sampleSubmissions, statusLogs)) {
        currentStep = i + 1;
        displayStep++;
      } else {
        currentStep = i;
        break;
      }
    }

    let adjustedActiveStep = displayStep;
    if (statusLogs.partial_testing === null && currentStep > 5) {
      adjustedActiveStep = displayStep;
    } else if (statusLogs.partial_testing === null && currentStep <= 5) {
      adjustedActiveStep = currentStep;
    } else {
      adjustedActiveStep = currentStep;
    }

    setActiveStep(adjustedActiveStep);
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
            <h5>รายละเอียดคำขอรับบริการ</h5>
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
                  {steps.map((step, index) => {
                    if (index === 5 && serviceData.service_status_logs?.partial_testing === null) {
                      return null;
                    }
                    return (
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
                    );
                  })}
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
                        {steps.map((step, index) => {
                          if (index === 5 && serviceData.service_status_logs?.partial_testing === null) {
                            return null;
                          }
                          return (
                            <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                              <StepLabel>{step.label}</StepLabel>
                            </Step>
                          );
                        })}
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

export default VerifyService;
