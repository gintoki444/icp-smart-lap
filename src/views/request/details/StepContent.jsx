import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getServiceRequestsByID } from 'services/_api/serviceRequest';
import { getAllPackagingType } from 'services/_api/packageingTypeRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import { DataGrid } from '@mui/x-data-grid';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddTestTracking from './AddTestTracking';

const ServiceStepContent = ({ serviceId, handleReload }) => {
  const navigate = useNavigate();

  const fertilizerCategoryOptions = [
    { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
    { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
    { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
    { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
  ];

  useEffect(() => {
    if (serviceId) {
      getServiceRequest(serviceId);
    }
  }, [serviceId]);

  const [serviceData, setServiceData] = useState({});
  const [sampleList, setSampleList] = useState([]);
  const getServiceRequest = async (id) => {
    const response = await getServiceRequestsByID(id);
    setSampleList(response.sample_submissions);
    setServiceData(response);
  };

  const [packagingTypes, setPackagingTypes] = useState([]);
  //   const [testItems, setSampleReceiving] = useState([]);

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

  // const handleReload = (check) => {
  //   if (check) {
  //     getServiceRequest(serviceId);
  //   }
  // };

  return (
    <div>
      <Card style={{ borderRadius: 10, marginBottom: 0 }}>
        <Card.Body style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Row>
            {serviceData.request_no && (
              <Col md={12}>
                <h5 className="mb-4">
                  เลขที่คำขอบริการ : <span style={{ fontSize: 18 }}>{serviceData.request_no}</span>
                </h5>
              </Col>
            )}
            {/* เพิ่มเนื้อหาอื่นๆ ที่ต้องการใน ServiceStepContent ตามต้องการ */}
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
          </Row>

          {/* ข้อมูลปุ๋ยและส่วนอื่นๆ จะยังคงอยู่นอก ServiceStepContent */}
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
                      <AccordionDetails className="pb-0">
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
                        </Row>
                      </AccordionDetails>
                    </Accordion>
                    <Col style={{ padding: '0 16px 16px' }}>
                      <Col>
                        <AddTestTracking
                          submissionId={sample.submission_id}
                          handleTracking={handleReload}
                          trackingData={sample.sample_tracking}
                        />
                      </Col>
                    </Col>
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

export default ServiceStepContent;
