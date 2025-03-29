import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { postServiceRequests, postServiceRequestDocuments, putServiceRequestStatusTracking } from 'services/_api/serviceRequest';
import { postSampleSubmisDetail, postSampleSubmissions } from 'services/_api/sampleSubmissionsRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import SampleRequestForm from './SampleRequestForm';
import { authenUser } from 'services/_api/authentication';
import { toast } from 'react-toastify';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getCustomerByID } from 'services/_api/customerRequest';

import logoFertilizerOrganic from '../../../assets/images/logo-fertilizer-organic.webp';
import logoFertilizerChemical from '../../../assets/images/logo-fertilizer-chemical.webp';
import { createServiceNotify } from 'components/Notify/CreateServiceNotify';

const AddServiceRequest = () => {
  const navigate = useNavigate();
  const [selectedForm, setSelectedForm] = useState(null);
  const [samepleSelected, setSamepleSelected] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const location = useLocation();
  const usersFromState = location.state?.user || null;
  const customerFromState = location.state?.customer || null;
  const [spacialCon, setSpacialCon] = useState({});
  const [customer, setCustomer] = useState({});

  const [user, setUser] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    handleGetCusSpacialCon(customerFromState?.id);
    getCustomersByID(customerFromState?.id);
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
    if (formType === 'organic') {
      setSamepleSelected(1);
    } else if (formType === 'chemical') {
      setSamepleSelected(2);
    }
  };

  const getCustomersByID = async (companyId) => {
    try {
      const response = await getCustomerByID(companyId);
      setCustomer(response);
    } catch (error) {
      console.error(error);
      setCustomer([]);
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

  const handleSave = async (data) => {
    console.log(data);
    const step1 = {
      user_id: user.user_id,
      customer_id: data.company_id,
      is_registration_analysis: data.analysisMethod === 'is_registration_analysis' ? 1 : 0,
      is_quality_check_analysis: data.analysisMethod === 'is_quality_check_analysis' ? 1 : 0,
      sample_type_id: data.sample_type_id,
      sr_is_self_pickup: (data.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
      sr_pdf_email: (data.reportMethod || []).includes('pdf_email') ? data.email : '',
      sr_is_mail_delivery: (data.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
      sr_mail_delivery_location: '-',
      notes: data.notes
    };

    console.log('step1:', step1);
    let sampleSubmissionsData = [];
    data.fertilizerRecords.forEach((record) => {
      const step2 = {
        request_id: null,
        is_single_fertilizer: record.fertilizer_main_id === 1 ? 1 : 0,
        is_compound_fertilizer: record.fertilizer_main_id === 2 ? 1 : 0,
        is_mixed_fertilizer: record.fertilizer_main_id === 3 ? 1 : 0,
        is_secondary_nutrient_fertilizer: record.fertilizer_main_id === 4 ? 1 : 0,
        fertilizer_type_id: record.fertilizer_type_id,
        fertilizer_other: record.fertilizer_other,
        color: record.color,
        fertilizer_formula: record.fertilizer_formula,
        packaging_other: record.packaging_other,
        common_name: record.common_name,
        trade_name: record.trade_name,
        trademark: record.trademark,
        manufacturer: record.manufacturer,
        manufacturer_country: record.manufacturer_country,
        supplier: record.supplier,
        supplier_country: record.supplier_country,
        composition: record.composition,
        sample_weight: record.sample_weight,
        sample_weight_unit: record.sample_weight_unit,
        packaging_id: record.packaging_id,
        pdf_email: (record.reportMethod || []).includes('pdf_email') ? record.email : '',
        is_self_pickup: (record.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
        is_mail_delivery: (record.reportMethod || []).includes('pdf_email') ? 1 : 0,
        mail_delivery_location: record.mail_delivery_location,
        test_all_items: record.test_all_items,
        is_lab_dispose_sample: record.sampleDisposal === 'is_lab_dispose_sample' ? 1 : 0,
        is_collect_within_3_months: record.sampleDisposal === 'is_collect_within_3_months' ? 1 : 0,
        is_return_sample: record.sampleDisposal === 'is_return_sample' ? 1 : 0,
        submitted_by: record.submitted_by,
        phone: record.submitted_phone,
        test_items: record.test_items,
        formula_id: record.formula_id,
        fertilizer_main_id: record.fertilizer_main_id,
        other_requirements: record.other_requirements,
        report_company_name: record.report_company_name || '',
        report_company_address: record.report_company_address || ''
      };
      sampleSubmissionsData.push(step2);
    });
    console.log('sampleSubmissionsData:', sampleSubmissionsData);

    const fileData = data.files;
    try {
      const responseService = await postServiceRequests(step1);
      if (responseService.request_id) {
        for (const record of sampleSubmissionsData) {
          record.request_id = responseService.request_id;
          const responseSample = await postSampleSubmissions(record);
          if (responseSample.submission_id) {
            const sampleDataDetail = {
              submission_id: responseSample.submission_id,
              test_items: record.test_items
            };
            const responseTestItem = await postSampleSubmisDetail(sampleDataDetail);
          }
        }

        const uploadResults = await handleUploadFiles(fileData, 'service-requests', 'service_');
        for (const fileResult of uploadResults) {
          const extractedFileName = fileResult.fileName.split('/').pop();
          const documentData = {
            request_id: responseService.request_id,
            uploaded_by: user.user_id,
            document_name: 'เอกสารรับรองปุ๋ย',
            file_name: extractedFileName,
            file_path: `/${fileResult.fileName}`
          };
          await postServiceRequestDocuments(documentData);
        }

        const reqStatusTracking = {
          newStatusTracking: 'requested'
        };
        await putServiceRequestStatusTracking(responseService.request_id, reqStatusTracking);

        await createServiceNotify(data, customer, spacialCon, window.location.origin, responseService.request_id);
        toast.success('เพิ่มข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3000 });
        navigate('/request/detial', { state: { id: responseService.request_id } });
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error('เพิ่มข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3000 });
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
    }
  };

  return (
    <>
      {selectedForm === null && (
        <Card>
          <Card.Header>
            <h5>เลือกประเภทการขอรับบริการ</h5>
          </Card.Header>
          <Card.Body>
            <Card className="p-4 mb-3">
              <Row>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    รหัสลูกค้า : <strong className="text-dark">{customer.company_code}</strong>{' '}
                    <span className="text-dark">(กรณีมีการเปลี่ยนแปลง ชื่อ, ที่อยู่ กรุณาแจ้งห้องปฏิบัติการ)</span>
                  </p>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    ชื่อบริษัท : <strong className="text-dark">{customerFromState.company_name}</strong>
                  </p>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    เลขที่ผู้เสียภาษี : <strong className="text-dark">{customerFromState.tax_id}</strong>
                  </p>
                </Col>
                <Col md={6} className="mb-2">
                  <p className="mb-0">
                    ที่อยู่ : <strong className="text-dark">{customerFromState.company_address}</strong>
                  </p>
                </Col>
                {spacialCon && spacialCon.length > 0 && (
                  <Col md={6}>
                    <p className="mb-0">
                      เงื่อนไขพิเศษ :{' '}
                      <strong className="text-dark">
                        {spacialCon.map((x, index) => (
                          <span key={index}>
                            {x.description}
                            {index + 1 < spacialCon.length && ', '}
                          </span>
                        ))}
                      </strong>
                    </p>
                  </Col>
                )}
              </Row>
            </Card>

            <Alert variant="warning" className="mb-3 rounded-0" style={{ borderLeft: 'solid 3px #FFA500' }}>
              ลูกค้ามีเครดิต (Credit) กรุณาแจ้งหากต้องการเงื่อนไขพิเศษ (Advance Invoice)
            </Alert>
            <Card className="p-4">
              <Row className="justify-content-start ">
                <Col md={4} sm={12} className="mb-3">
                  <Button
                    variant="outline"
                    className="w-100 h-100 py-4 d-flex align-items-center justify-content-top flex-column"
                    style={{ color: '#8B4513', fontSize: '18px', fontWeight: 'bold', border: 'solid 1px #8B4513', borderRadius: 10 }}
                    onClick={() => handleFormSelection('organic')}
                  >
                    <div className="logo-fertilizer-style" style={{ border: 'solid 3px #8B4513' }}>
                      <img src={logoFertilizerOrganic} alt="ปุ๋ยอินทรีย์" style={{ width: '120px', padding: '12px' }} />
                    </div>
                    แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์
                  </Button>
                </Col>

                <Col md={4} sm={12} className="mb-3">
                  <Button
                    variant="outline"
                    className="w-100 h-100 py-4 d-flex align-items-center justify-content-center flex-column"
                    style={{ color: '#28A745', fontSize: '18px', fontWeight: 'bold', border: 'solid 1px #28A745', borderRadius: 10 }}
                    onClick={() => handleFormSelection('chemical')}
                  >
                    <div className="logo-fertilizer-style" style={{ border: 'solid 3px #28A745' }}>
                      <img src={logoFertilizerChemical} alt="ปุ๋ยเคมี" style={{ width: '120px', padding: '12px' }} />
                    </div>
                    <div>
                      แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมี
                      <br />
                      (เพื่อขึ้นทะเบียนปุ๋ย)
                    </div>
                  </Button>
                </Col>
                {/* หากต้องการเพิ่มปุ่มอีก 2 ปุ่ม สามารถเพิ่ม <Col md={3} sm={12}> ได้ที่นี่ */}
              </Row>
            </Card>
          </Card.Body>
        </Card>
      )}

      {selectedForm !== null && (
        <SampleRequestForm
          userId={user.user_id}
          onHandleSave={handleSave}
          sampleType={samepleSelected}
          company={customer}
          spacialCon={spacialCon}
        />
      )}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center">
          <i className="text-success" style={{ fontSize: '3rem' }}>
            ✔
          </i>
          <h5 className="mt-3">ลงทะเบียนขอรับบริการสำเร็จ</h5>
          <p>กรุณารอผลการตรวจสอบคำขอใช้บริการ</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => navigate('/request/')}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddServiceRequest;
