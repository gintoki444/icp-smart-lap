import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getServiceRequestsByID } from 'services/_api/serviceRequest';
import { getAllSampleReceiving } from 'services/_api/sampleReceivingRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineDocumentCurrencyDollar } from 'react-icons/hi2';
import SampleSubmissionModal from '../request/details/SampleSubmissionModal';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import QuotationStepContent from './QuotationStepContent';
import AddTestTracking from '../request/details/AddTestTracking';

const RequestDetailPage = ({ title }) => {
  const location = useLocation();
  const { id: paramId } = useParams();
  const id = paramId || location.state?.id || null;
  console.log('id', id);
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);
  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];
  const [orientation, setOrientation] = useState('horizontal');
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // เพิ่ม state สำหรับจัดการการโหลดข้อมูล

  useEffect(() => {
    if (id) {
      getServiceRequest(id);
    } else {
      navigate('/request/');
    }
  }, [id, navigate]);

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);

  const getServiceRequest = async (id) => {
    try {
      setIsLoading(true); // เริ่มโหลด
      const response = await getServiceRequestsByID(id);
      console.log('response', response);
      setSampleList(response.sample_submissions || []);
      setServiceData(response);
      updateActiveStep(response, {});
    } catch (error) {
      console.error('Error fetching service request:', error);
    } finally {
      setIsLoading(false); // หยุดโหลดเมื่อเสร็จ
    }
  };

  // const updateActiveStep = (serviceData, serviceStatus) => {
  //   const sampleSubmissions = serviceData.sample_submissions || [];
  //   const statusLogs = serviceData.service_status_logs || {};

  //   for (let i = 0; i < steps.length; i++) {
  //     if (isStepComplete(i, sampleSubmissions, statusLogs)) {
  //       setActiveStep(i + 1);
  //     } else {
  //       setActiveStep(i);
  //       break;
  //     }
  //   }
  // };

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

  useEffect(() => {}, []);

  const handleEdit = (id) => {
    navigate('/request/edit/', { state: { id } });
  };

  const handleReload = (check) => {
    if (check) {
      setIsLoading(true); // เริ่มโหลด
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
        // ไม่ต้องนับ partial_testing ถ้าเป็น null
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

  // แก้ไขฟังก์ชัน updateActiveStep
  const updateActiveStep = (serviceData, serviceStatus) => {
    const sampleSubmissions = serviceData.sample_submissions || [];
    const statusLogs = serviceData.service_status_logs || {};

    let currentStep = 0;
    let displayStep = 0; // ตัวแปรสำหรับนับ step ที่แสดงจริง

    for (let i = 0; i < steps.length; i++) {
      // ข้าม step partial_testing (index 5) ถ้าเป็น null
      const isPartialTestingSkipped = i === 5 && statusLogs.partial_testing === null;

      if (isPartialTestingSkipped) {
        continue; // ข้าม step นี้ไป
      }

      // เพิ่ม displayStep เฉพาะ step ที่แสดง
      if (isStepComplete(i, sampleSubmissions, statusLogs)) {
        currentStep = i + 1;
        displayStep++;
      } else {
        currentStep = i;
        break;
      }
    }

    // ปรับ activeStep ให้สอดคล้องกับ step ที่แสดงจริง
    let adjustedActiveStep = displayStep;
    if (statusLogs.partial_testing === null && currentStep > 5) {
      adjustedActiveStep = displayStep; // ถ้า partial_testing ถูกข้าม, activeStep จะลดลง 1
    } else if (statusLogs.partial_testing === null && currentStep <= 5) {
      adjustedActiveStep = currentStep; // ถ้ายังไม่ถึง step 5, ไม่ต้องปรับ
    } else {
      adjustedActiveStep = currentStep; // ถ้า partial_testing ไม่ใช่ null, ใช้ currentStep ตามปกติ
    }

    setActiveStep(adjustedActiveStep);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h5>{title}</h5>
        </Card.Header>
        <Card.Body>
          <div>
            {isLoading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
                <p>กำลังโหลดข้อมูล...</p>
              </div>
            ) : orientation === 'vertical' ? (
              <Stepper
                activeStep={activeStep}
                orientation={orientation}
                alternativeLabel={orientation === 'horizontal'}
                sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
              >
                {steps.map((step, index) => {
                  // ซ่อน step partial_testing ถ้า status เป็น null
                  if (index === 5 && serviceData.service_status_logs?.partial_testing === null) {
                    return null;
                  }
                  return (
                    <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                      <StepLabel>{step.label}</StepLabel>
                      {orientation === 'vertical' && (
                        <StepContent>
                          <QuotationStepContent serviceId={id} handleReload={handleReload} />
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
                      sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
                    >
                      {steps.map((step, index) => {
                        // ซ่อน step partial_testing ถ้า status เป็น null
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
                <QuotationStepContent serviceId={id} handleReload={handleReload} />
              </>
            )}
          </div>
        </Card.Body>
        {/* <Card.Body>
          <div>
            {isLoading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
                <p>กำลังโหลดข้อมูล...</p>
              </div>
            ) : orientation === 'vertical' ? (
              <Stepper
                activeStep={activeStep}
                orientation={orientation}
                alternativeLabel={orientation === 'horizontal'}
                sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
              >
                {steps.map((step, index) => (
                  <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                    <StepLabel>{step.label}</StepLabel>
                    {orientation === 'vertical' && (
                      <StepContent>
                        <QuotationStepContent serviceId={id} handleReload={handleReload} />
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
                      sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
                    >
                      {steps.map((step, index) => (
                        <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                          <StepLabel>{step.label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Card.Body>
                </Card>
                <QuotationStepContent serviceId={id} handleReload={handleReload} />
              </>
            )}
          </div>
        </Card.Body> */}
        <Card.Footer className="text-start">
          {sampleList.length <= 1 &&
            !serviceData.service_status_logs?.quotation_issued &&
            !serviceData.service_status_logs?.request_reviewed && (
              <SampleSubmissionModal service={serviceData} handleReload={handleReload} />
            )}
          <Button
            variant="primary"
            // disabled={serviceData.service_status_logs?.quotation_issued || serviceData.status === 'rejected'}
            onClick={() => handleEdit(id)}
          >
            <HiOutlineDocumentCurrencyDollar style={{ fontSize: 16, marginRight: 8 }} /> ขอใบแจ้งหนี้
          </Button>
          <Button variant="danger" onClick={() => navigate('/quotations/')}>
            <i className="feather icon-corner-up-left" /> กลับหน้าหลัก
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RequestDetailPage;
