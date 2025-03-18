import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServiceRequestsByID, putServiceRequestStatusTracking, deleteServiceRequestStatusTracking } from 'services/_api/serviceRequest';
import { getAllSampleReceiving } from 'services/_api/sampleReceivingRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import { FiEdit } from 'react-icons/fi';
import SampleSubmissionModal from './SampleSubmissionModal';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import ServiceStepContent from './StepContent';

const FertilizerDetails = ({ title }) => {
  const location = useLocation();
  const id = location.state?.id || null;
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
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
      const response = await getServiceRequestsByID(id);
      setSampleList(response.sample_submissions || []);
      setServiceData(response);
      updateActiveStep(response, {});
    } catch (error) {
      console.error('Error fetching service request:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateActiveStep = (serviceData, serviceStatus) => {
    const sampleSubmissions = serviceData.sample_submissions || [];
    const statusLogs = serviceData.service_status_logs || {};

    for (let i = 0; i < steps.length; i++) {
      if (isStepComplete(i, sampleSubmissions, statusLogs)) {
        setActiveStep(i + 1);
      } else {
        setActiveStep(i);
        break;
      }
    }
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
    console.log('setData', setData);
    return setData;
  };

  const handleEdit = (id) => {
    navigate('/request/edit/', { state: { id } });
  };

  const handleReload = async (check) => {
    if (check) {
      await getServiceRequest(id); // อัปเดตข้อมูลก่อนตรวจสอบ
      const sampleSubmissions = serviceData.sample_submissions || [];
      const statusLogs = serviceData.service_status_logs || {};

      // ตรวจสอบขั้นตอน "ลูกค้าส่งตัวอย่าง" (index 1)
      const isSampleSentComplete = isStepComplete(1, sampleSubmissions, statusLogs);

      if (isSampleSentComplete && statusLogs.sample_sent === null) {
        // ถ้าขั้นตอนสมบูรณ์แต่ยังไม่มีสถานะ 'sample_sent' ให้อัปเดต
        const reqStatusTracking = {
          newStatusTracking: 'sample_sent'
        };
        await putServiceRequestStatusTracking(id, reqStatusTracking);
        await getServiceRequest(id); // อัปเดตข้อมูลหลังจากเปลี่ยนสถานะ
      } else if (!isSampleSentComplete && statusLogs.sample_sent !== null) {
        // ถ้าขั้นตอนไม่สมบูรณ์แต่มีสถานะ 'sample_sent' ให้ลบ
        const reqStatusTracking = {
          StatusTracking: 'sample_sent'
        };
        await deleteServiceRequestStatusTracking(id, reqStatusTracking);
        await getServiceRequest(id); // อัปเดตข้อมูลหลังจากลบสถานะ
      }
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
        return statusLogs.requested !== null;

      case 1: // ลูกค้าส่งตัวอย่าง
        if (sampleCount === 0) return false;
        // ตรวจสอบว่าแต่ละ submission มี sample_tracking และ status เป็น 'received' และจำนวนต้องเท่ากัน
        const receivedCount = sampleSubmissions.reduce((count, submission) => {
          const tracking = submission.sample_tracking || [];
          return (
            count + (tracking.some((track) => track.submission_id === submission.submission_id && track.status === 'received') ? 1 : 0)
          );
        }, 0);
        return receivedCount === sampleCount;

      case 2: // ทบทวนคำขอ
        return statusLogs.request_reviewed !== null;

      case 3: // ตัวอย่างจัดส่งถึงแล็บ
        return statusLogs.sample_arrived_lab !== null;

      case 4: // รับตัวอย่างเข้าระบบ
        return statusLogs.sample_received !== null;

      case 5: // รอทดสอบบางรายการ
        return statusLogs.partial_testing !== null;

      case 6: // ออกใบเสนอราคา
        return statusLogs.quotation_issued !== null;

      case 7: // ขอใบแจ้งหนี้
        return statusLogs.invoice_requested !== null;

      case 8: // รับชำระเงิน
        return statusLogs.payment_received !== null;

      case 9: // หัก ณ ที่จ่าย
        return statusLogs.tax_withheld !== null;

      case 10: // ออกใบเสร็จรับเงิน/ใบกำกับภาษี
        return statusLogs.receipt_issued !== null;

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
                    <StepLabel>
                      {step.label}
                      {serviceData.service_status_logs && serviceData.service_status_logs[step.status] && (
                        <div style={{ fontSize: '0.8rem', color: 'gray' }}>
                          {new Date(serviceData.service_status_logs[step.status]).toLocaleDateString('th-TH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      )}
                    </StepLabel>
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
                      sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
                    >
                      {steps.map((step, index) => (
                        <Step key={index} completed={isStepComplete(index, sampleList, serviceData.service_status_logs || {})}>
                          <StepLabel>
                            {step.label}
                            {serviceData.service_status_logs && serviceData.service_status_logs[step.status] && (
                              <div style={{ fontSize: '0.8rem', color: 'gray' }}>
                                {new Date(serviceData.service_status_logs[step.status]).toLocaleDateString('th-TH', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                            )}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Card.Body>
                </Card>
                <ServiceStepContent serviceId={id} handleReload={handleReload} />
              </>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="text-start">
          <SampleSubmissionModal service={serviceData} />
          <Button variant="primary" onClick={() => handleEdit(id)}>
            <FiEdit style={{ marginRight: 8 }} /> แก้ไขข้อมูล
          </Button>
          <Button variant="danger" onClick={() => navigate('/request/')}>
            <i className="feather icon-corner-up-left" /> กลับหน้าหลัก
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

const RequestDetailPage = () => {
  return <FertilizerDetails title="รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ย" />;
};

export default RequestDetailPage;
