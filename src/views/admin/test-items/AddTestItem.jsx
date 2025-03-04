import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
// import { AiOutlineFileText } from 'react-icons/ai';
// import AddBilling from './AddBilling';
import { getServiceRequestsByID } from 'services/_api/serviceRequest';
import { getAllTestItems } from 'services/_api/testItemsRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypes';
// import { Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ItemModal from './ItemModal';
import { authenUser } from 'services/_api/authentication';
import CreateQuotation from './CreateQuotation';
import GenerateQuotation from '../quotations/GenerateQuotation';

const FertilizerDetails = ({ data, title }) => {
  // const { id } = useLocation().state;
  const location = useLocation();
  const id = location.state?.id || null;
  console.log('id', id);
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [quotation, setQuotation] = useState(false);
  const [confirmRequest, setConfirmRequest] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [billing, setBilling] = useState(false);
  const [user, setUser] = useState([]);

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
      navigate('/user/request/');
    }
  }, []);

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);
  const getServiceRequest = async (id) => {
    const response = await getServiceRequestsByID(id);
    console.log('response', response);
    console.log('sample_submissions', response.sample_submissions);
    setSampleList(response.sample_submissions);
    setServiceData(response);
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
    // จำลองการโหลดเอกสาร (เช่น การดาวน์โหลดไฟล์ PDF)
    setTimeout(() => {
      setLoading(false);
      alert('ดาวน์โหลดเอกสารสำเร็จ!');
    }, 3000); // กำหนดเวลาโหลด 3 วินาที
  };

  const [packagingTypes, setPackagingTypes] = useState([]);
  const [testItems, setTestItems] = useState([]);

  useEffect(() => {
    handleGetPackageType();
    handleGetTestItems();
    getFertilizerTypes();
  }, []);

  const handleGetPackageType = async () => {
    const response = await getAllPackagingType();
    setPackagingTypes(response);
  };

  const handleGetTestItems = async () => {
    try {
      const response = await getAllTestItems();
      setTestItems(response);
    } catch (error) {
      console.error('Error fetching test items:', error);
      setTestItems([]);
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
    const url = '/user/request/detial/quotation';
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

  const handleEdit = (id) => {
    navigate('/user/request/edit/', { state: { id: id } });
  };

  const handleReload = (check) => {
    if (check) {
      getServiceRequest(id);
    }
  };
  return (
    <div>
      <Card>
        <Card.Header>
          <h5>{title}</h5>
        </Card.Header>
        <Card.Body>
          {/* ข้อมูลบริษัท */}
          <Row>
            {serviceData.request_no && (
              <Col md={12}>
                <h5 className="mb-4">
                  เลขที่คำขอบริการ : <span style={{ fontSize: 18 }}>{serviceData.request_no || ''}</span>
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
              <Col md={12} key={index} className="mb-2 p-4 pt-0 pb-0">
                <Row className="mt-3">
                  <h5>
                    เลขที่ตัวอย่าง : <strong className="text-dark">{sample.submission_no || '-'}</strong>
                  </h5>
                  <h6>
                    ตัวอย่างที่ {index + 1} สูตรปุ๋ย : <strong className="text-dark">{sample.fertilizer_formula || '-'}</strong> ( ชื่อสามัญ
                    : <strong className="text-dark">{sample.common_name || '-'}</strong>)
                  </h6>
                  <Col md={6} className="mb-2">
                    <p className="mb-0">
                      ประเภทของปุ๋ย : <strong className="text-dark">{getFertilizerCategoryLabel(sample, fertilizerCategoryOptions)}</strong>
                    </p>
                  </Col>
                  <Col md={6} className="mb-2">
                    <p className="mb-0">
                      ลักษณะปุ๋ย :{' '}
                      <strong className="text-dark">
                        {fertilizerTypes.find((type) => type.fertilizer_type_id === sample.fertilizer_type_id)?.fertilizer_type_name || '-'}
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
                        {packagingTypes.find((type) => type.packaging_type_id === sample.packaging_id)?.packaging_type_name || '-'}
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
                      ผู้ผลิต (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.manufacturer || '-'}</strong>
                      ประเทศ : <strong className="text-dark">{sample.manufacturer_country || '-'}</strong>
                    </p>
                  </Col>
                  <Col md={6} className="mb-2">
                    <p className="mb-0">
                      สั่งจาก (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.supplier || '-'}</strong>
                      ประเทศ : <strong className="text-dark">{sample.supplier_country || '-'}</strong>
                    </p>
                  </Col>
                  <Col md={6} className="mb-0">
                    <p className="mb-0">
                      สถานะ :
                      <Badge
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
                    <h6 className="mb-3">ข้อมูลการทดสอบ</h6>
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

                  <Col>
                    <ItemModal
                      submissionId={!sample.submission_no && sample.submission_id}
                      // submissionId={sample.submission_id}
                      handleTracking={handleReload}
                      trackingData={sample.sample_tracking}
                      reviewBy={user.user_id}
                      serviceId={serviceData.request_no ? null : id}
                    />
                  </Col>
                </Row>
                {index < sampleList.length - 1 && <hr className="mt-4 mb-2" />}
              </Col>
            ))}
            {serviceData.quotation_data && serviceData.quotation_data.length > 0 && (
              <Col>
                <GenerateQuotation quotationData={serviceData.quotation_data} onChange={handleReload} />
              </Col>
            )}
          </Row>
        </Card.Body>
        <Card.Footer className="text-start">
          {serviceData.request_no && (
            <CreateQuotation
              handleBilling={handleReload}
              testItems={serviceData.test_items_for_quotation}
              serviceData={serviceData}
              createdBy={user.user_id}
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

const AddTestItem = () => {
  return <FertilizerDetails data={organicData} title="ข้อมูลการรับตัวอย่างปุ๋ย" />;
};

export default AddTestItem;
