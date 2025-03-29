import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getServiceRequestsByID, getServiceRequestsStatusByID } from 'services/_api/serviceRequest';
// import { getAllSampleReceiving } from 'services/_api/testItemsRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import ReviewModal from './ReviewModal';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SampleReceivingModal from '../sample-receiving/SampleReceivingModal';
import { authenUser } from 'services/_api/authentication';
import { getCustomerByID } from 'services/_api/customerRequest';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilizerMain } from 'services/_api/fertilizerMainRequest';
import CountrySelect from 'components/Selector/CountrySelect';

const AdminStepContent = ({ serviceId, handleReload, handleSetCustomer }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [serviceStatus, setServiceStatus] = useState([]);
  const [spacialCon, setSpacialCon] = useState({});
  const [customer, setCustomer] = useState({});
  const [packagingTypes, setPackagingTypes] = useState([]);
  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);
  const [fertilizerFormulas, setFertilizerFormulas] = useState([]);

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
    if (serviceId) {
      getServiceRequest(serviceId);
    }

    getFertilizerFormulas();
  }, [serviceId, reloadData]);

  const getServiceRequest = async (id) => {
    const response = await getServiceRequestsByID(id);
    const responseStatus = await getServiceRequestsStatusByID(id);
    if (response) {
      await handleGetCusSpacialCon(response.customer_id);
      await handleGetCustomer(response.customer_id);

      response.sample_submissions = response.sample_submissions.map((sub) => ({
        ...sub,
        reportMethod: [
          sub.is_self_pickup ? 'is_self_pickup' : null,
          sub.pdf_email ? 'pdf_email' : null,
          sub.is_mail_delivery ? 'is_mail_delivery' : null
        ].filter(Boolean)
      }));
      setServiceData(response);
      setSampleList(response.sample_submissions);
      setServiceStatus(responseStatus);
    }
  };

  const handleGetCusSpacialCon = async (companyId) => {
    try {
      const response = await getCustomerSpecialConditionsByID(companyId);
      setSpacialCon(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error(error);
      setSpacialCon([]);
    }
  };

  const getFertilizerFormulas = async () => {
    try {
      const result = await getAllFertilizerMain();
      const formattedOptions = result.map((item) => ({
        value: item.fertilizer_main_id,
        label: item.fertilizer_main_name_th
      }));
      console.log('formattedOptions', formattedOptions);
      setFertilizerFormulas(formattedOptions);
    } catch (error) {
      console.error('Error fetching fertilizer formulas:', error);
      setFertilizerFormulas([]);
    }
  };

  const handleGetCustomer = async (companyId) => {
    try {
      const response = await getCustomerByID(companyId);
      setCustomer(response);
      handleSetCustomer(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetPackageType();
    getFertilizerTypes();
  }, []);

  const handleGetPackageType = async () => {
    const response = await getAllPackagingType();
    setPackagingTypes(response);
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

  // const handleReload = (check) => {
  //   if (check) {
  //   }
  // };

  // const handleReload = (check) => {
  //   if (check) {
  //     console.log('handleReload :', check);
  //     setReloadData((prev) => !prev);
  //     getServiceRequest(serviceId);
  //   }
  // };

  const unitOptions = [
    { value: 'g', label: 'กรัม' },
    { value: 'kg', label: 'กิโลกรัม' },
    { value: 'oz', label: 'ออนซ์' },
    { value: 'ml', label: 'มิลลิลิตร' },
    { value: 'L', label: 'ลิตร' }
  ];
  const reportMethodOptions = [
    { value: 'is_self_pickup', label: 'รับด้วยตนเอง' },
    { value: 'pdf_email', label: 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail' },
    { value: 'is_mail_delivery', label: 'ส่งทางไปรษณีย์' }
  ];

  const getReportMethodLabels = (methods) => {
    return methods.map((method) => reportMethodOptions.find((opt) => opt.value === method)?.label || method).join(', ');
  };

  const handlePrint = (request, submissionId) => {
    navigate('/admin/request/print-qr-sample', {
      state: { request: request, submissionId: submissionId, link: '/admin/request/verify/' + request.request_id }
    });
  };
  return (
    <div>
      <Card style={{ borderRadius: 10, marginBottom: 0 }}>
        <Card.Body style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Row>
            <Col md={12}>
              <h5 className="mb-4">
                เลขที่คำขอรับบริการ : <span style={{ fontSize: 18 }}>{serviceData.request_no || '-'}</span>
              </h5>
            </Col>
            {/* เพิ่มเนื้อหาอื่นๆ ที่ต้องการใน ServiceStepContent ตามต้องการ */}
            <Col md={12}>
              <h6 className="mb-3">ข้อมูลผู้ขอขึ้นทะเบียน</h6>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                รหัสลูกค้า : <strong className="text-dark">{customer.company_code}</strong>
              </p>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                ชื่อบริษัท : <strong className="text-dark">{customer.company_name}</strong>
              </p>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                เลขที่ผู้เสียภาษี : <strong className="text-dark">{customer.tax_id}</strong>
              </p>
            </Col>
            <Col md={6} className="mb-2">
              <p className="mb-0">
                ที่อยู่ : <strong className="text-dark">{customer.company_address}</strong>
              </p>
            </Col>
            <Col md={6}>
              <p className="mb-0">
                เงื่อนไขพิเศษ :{' '}
                <strong className="text-dark">
                  {spacialCon.length > 0
                    ? spacialCon.map((x, index) => `${x.description}${index < spacialCon.length - 1 ? ', ' : ''}`)
                    : '-'}
                </strong>
              </p>
            </Col>
            {serviceData.sample_type_id === 1 && (
              <Col md={6} className="mb-2">
                <p className="mb-0">
                  วัตถุประสงค์การขอรับบริการ :{' '}
                  <strong className="text-dark">
                    {serviceData.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'}
                  </strong>
                </p>
              </Col>
            )}
            <Col md={6} className="mb-2">
              <p className="mb-0">
                ประเภทคำขอ : <strong className="text-dark">{serviceData.sample_type_name}</strong>
              </p>
            </Col>
          </Row>

          {/* ข้อมูลปุ๋ยและส่วนอื่นๆ จะยังคงอยู่นอก StepContent */}
          <h6 className="mt-3 mb-2">ข้อมูลตัวอย่างปุ๋ย</h6>
          {sampleList.map((sample, index) => (
            <>
              <>
                <Row key={`Accordion-${index}`}>
                  <Col md={12} className="ms-2 ps-0 pe-0" style={{ border: '1px solid #f8f9fa' }}>
                    <Accordion className="mb-0" sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        sx={{ backgroundColor: '#f8f9fa', borderRadius: 0 }}
                      >
                        <p className="mb-0">
                          ตัวอย่างที่ {index + 1}{' '}
                          <>
                            เลขที่ :{' '}
                            <strong className="text-dark" style={{ fontWeight: 'bold' }}>
                              {sample.submission_no || '-'}
                            </strong>{' '}
                          </>
                          {sample.sample_type_id === 2 && (
                            <>
                              สูตรปุ๋ย : <strong className="text-dark">{sample.fertilizer_formula || '-'}</strong> ( ชื่อสามัญ :{' '}
                              <strong className="text-dark" style={{ fontWeight: 'bold' }}>
                                {sample.common_name || '-'}
                              </strong>
                              )
                            </>
                          )}{' '}
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
                      </AccordionSummary>
                      <AccordionDetails className="pb-0">
                        <Row>
                          {sample.fertilizer_main_id && (
                            <Col md={6} className="mb-2">
                              <p className="mb-0">
                                ประเภทของปุ๋ย :{' '}
                                <strong className="text-dark">
                                  {fertilizerFormulas.find((x) => x.value === sample.fertilizer_main_id)?.label}
                                </strong>
                              </p>
                            </Col>
                          )}
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
                              ประเทศ :{' '}
                              <CountrySelect
                                name="country"
                                label="ประเทศ"
                                value={sample.manufacturer_country || '-'}
                                onChange={(name, value) => console.log(name, value)}
                                showText={true}
                              />
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <p className="mb-0">
                              สั่งจาก (บริษัท/ห้าง/ร้าน) : <strong className="text-dark">{sample.supplier || '-'}</strong>
                              ประเทศ :{' '}
                              <CountrySelect
                                name="country"
                                label="ประเทศ"
                                value={sample.supplier_country || '-'}
                                onChange={(name, value) => console.log(name, value)}
                                showText={true}
                              />
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <p className="mb-0">
                              ปริมาณ : <strong className="text-dark">{sample.sample_weight || '-'}</strong>{' '}
                              <strong className="text-dark">
                                {unitOptions.find((unit) => unit.value === sample.sample_weight_unit)?.label || '-'}
                              </strong>
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <p className="mb-0">
                              วัตถุส่วนประกอบของปุ๋ย : <strong className="text-dark">{sample.composition || '-'}</strong>
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <p className="mb-0">
                              ผู้ส่งตัวอย่าง : <strong className="text-dark">{sample.submitted_by || '-'}</strong>
                            </p>
                          </Col>
                          <Col md={6} className="mb-2">
                            <p className="mb-0">
                              เบอร์โทรศัพท์ผู้ส่ง : <strong className="text-dark">{sample.phone || '-'}</strong>
                            </p>
                          </Col>
                          <Col md={6} className="mb-3">
                            <p className="mb-0">
                              วันที่ส่ง :{' '}
                              <strong className="text-dark">{new Date(sample.submission_date).toLocaleDateString('th-TH') || '-'}</strong>
                            </p>
                          </Col>
                          <Col md={12} className="mb-3">
                            <h6 className="mb-3">ข้อมูลการขอรับผลการตรวจ</h6>
                            <p className="mb-1">
                              วิธีการรับรายงาน : <strong className="text-dark">{getReportMethodLabels(sample.reportMethod)}</strong>
                            </p>
                            {sample.reportMethod.includes('pdf_email') && (
                              <p className="mb-1">
                                E-mail สำหรับรับผลตรวจ : <strong className="text-dark">{sample.pdf_email || '-'}</strong>
                              </p>
                            )}
                            {sample.reportMethod.includes('is_mail_delivery') && (
                              <p className="mb-1">
                                ที่อยู่จัดส่ง : <strong className="text-dark">{sample.mail_delivery_location || '-'}</strong>
                              </p>
                            )}
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
                    <Col style={{ padding: '0px 16px ' }}>
                      <SampleReceivingModal
                        serviceData={serviceData}
                        submissionId={sample.submission_id}
                        handleReload={handleReload}
                        trackingData={sample.sample_tracking}
                        reviewBy={user.user_id}
                        sampleNo={sample.submission_no}
                        reloadData={reloadData}
                        sampleStatus={serviceStatus.sample_submissions.find((x) => x.submission_id === sample.submission_id)}
                        serviceRequestId={serviceData.request_id}
                      />
                    </Col>
                    {serviceData.service_status_logs?.sample_arrived_lab && (
                      <Col style={{ padding: '0px 16px 16px' }}>
                        <ReviewModal sampleSubmissions={sample} onSubmitReview={handleReload} serviceRequestId={serviceData.request_id} />
                        {serviceData.service_status_logs?.request_reviewed && (
                          <Button variant="info" onClick={() => handlePrint(serviceData, sample.submission_id)}>
                            <i className="feather icon-printer" />
                            ฉลากปิดภาชนะบรรจุตัวอย่าง
                          </Button>
                        )}
                      </Col>
                    )}
                  </Col>
                </Row>

                {index < sampleList.length - 1 && <hr className="mt-4 mb-2" />}
              </>
            </>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminStepContent;
