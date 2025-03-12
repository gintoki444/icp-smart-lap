import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServiceRequestsByID, getServiceRequestsStatusByID } from 'services/_api/serviceRequest';
import { getAllSampleReceiving } from 'services/_api/sampleReceivingRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import { FiEdit } from 'react-icons/fi';
import SampleSubmissionModal from './SampleSubmissionModal';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import ServiceStepContent from './StepContent';
import AddTestTracking from './AddTestTracking';

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
  const [serviceStatus, setServiceStatus] = useState({});

  const getServiceRequest = async (id) => {
    try {
      setIsLoading(true); // เริ่มโหลด
      const response = await getServiceRequestsByID(id);
      const responseStatus = await getServiceRequestsStatusByID(id);

      setSampleList(response.sample_submissions || []);
      setServiceStatus(responseStatus || {});
      setServiceData(response);

      updateActiveStep(response, responseStatus);
    } catch (error) {
      console.error('Error fetching service request:', error);
    } finally {
      setIsLoading(false); // หยุดโหลดเมื่อเสร็จ
    }
  };

  const updateActiveStep = (serviceData, serviceStatus) => {
    const sampleSubmissions = serviceData.sample_submissions || [];
    const statusTracking =
      serviceStatus.request_status_tracking && serviceStatus.request_status_tracking.length > 0
        ? serviceStatus.request_status_tracking[0]
        : {};

    for (let i = 0; i < steps.length; i++) {
      if (isStepComplete(i, sampleSubmissions, statusTracking)) {
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

  const handleReload = (check) => {
    if (check) {
      getServiceRequest(id);
    }
  };

  const steps = [
    { label: 'การขอรับบริการ', status: 'delivered_to_lab' },
    { label: 'ส่งตัวอย่าง', status: 'received' },
    { label: 'รับตัวอย่างเข้าระบบ', status: 'received_in_system' },
    { label: 'ตรวจสอบข้อมูล', status: 'verification_status' },
    { label: 'ออกใบเสนอราคา', status: 'quotation_issued' },
    { label: 'ออก Invoice', status: 'invoice_requested' },
    { label: 'ชำระเงิน', status: 'payment_received' }
  ];
  const isStepComplete = (index, sampleSubmissions, statusTracking) => {
    const sampleCount = sampleSubmissions.length;

    switch (index) {
      case 0: // การขอรับบริการ
        return true;

      case 1: // ส่งตัวอย่าง
        if (sampleCount === 0) return false;
        if (sampleCount === 1) {
          // ตรวจสอบ sample_tracking ใน sampleSubmissions[0]
          const tracking = sampleSubmissions[0].sample_tracking;
          return tracking && tracking.length > 0 && tracking[0]?.status;
        }
        // ตรวจสอบว่าแต่ละ submission มี sample_tracking และ status เป็น 'received'
        return sampleSubmissions.every((submission) => {
          const tracking = submission.sample_tracking;
          return (
            tracking && tracking.length > 0 && tracking.some((track) => track.submission_id === submission.submission_id && track.status)
          );
        });
      case 2: // รับตัวอย่างเข้าระบบ
        return statusTracking.received_in_system === 'yes';

      case 3: // ตรวจสอบข้อมูล
        if (sampleCount === 0) return false;
        if (sampleCount === 1) {
          return serviceStatus.verification_status && serviceStatus.verification_status[0]?.status === 'Yes';
        }
        if (!serviceStatus.verification_status || !Array.isArray(serviceStatus.verification_status)) return false;
        return sampleSubmissions.every((submission) =>
          serviceStatus.verification_status.some((verify) => verify.submission_id === submission.submission_id && verify.status === 'Yes')
        );

      case 4: // ออกใบเสนอราคา
        return statusTracking.quotation_issued === 'yes';

      case 5: // ออก Invoice
        return statusTracking.invoice_requested === 'yes';

      case 6: // ชำระเงิน
        return statusTracking.payment_received === 'yes';

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
                  <Step key={index} completed={isStepComplete(index, sampleList, serviceStatus.request_status_tracking?.[0] || {})}>
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
                      sx={{ width: '100%', margin: '0 auto', padding: '20px 0' }}
                    >
                      {steps.map((step, index) => (
                        <Step key={index} completed={isStepComplete(index, sampleList, serviceStatus.request_status_tracking?.[0] || {})}>
                          <StepLabel>{step.label}</StepLabel>
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
