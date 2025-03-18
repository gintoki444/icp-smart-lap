import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
// import { ChemicalFertilizerForm } from './ChemicalFertilizerForm';
// import { OrganicFertilizerForm } from './OrganicFertilizerForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { GiFertilizerBag, GiChemicalTank } from 'react-icons/gi';
import { postServiceRequests, postServiceRequestDocuments, putServiceRequestStatusTracking } from 'services/_api/serviceRequest';
import { postSampleSubmisDetail, postSampleSubmissions } from 'services/_api/sampleSubmissionsRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import SampleRequestForm from './SampleRequestForm';
import { authenUser } from 'services/_api/authentication';
import { toast } from 'react-toastify';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getCustomerByID } from 'services/_api/customerRequest';

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
      console.log('getCustomerByID:', response);

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
  // useEffect(() => {
  //   if (usersFromState === null) {
  //     navigate('/request/');
  //   }
  // }, []);
  const handleSave = async (data) => {
    console.log(data);
    // ข้อมูลจาก Step 1
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

    console.log(step1);
    let sampleSubmissionsData = [];
    data.fertilizerRecords.forEach((record) => {
      const step2 = {
        request_id: null,
        is_single_fertilizer: record.fertilizer_main_id === 1 ? 1 : 0,
        is_compound_fertilizer: record.fertilizer_main_id === 2 ? 1 : 0,
        is_mixed_fertilizer: record.fertilizer_main_id === 3 ? 1 : 0,
        is_secondary_nutrient_fertilizer: record.fertilizer_main_id === 4 ? 1 : 0,
        fertilizer_type_id: record.fertilizer_type_id,
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
        is_self_pickup: (record.reportMethod || []).includes('is_self_pickup') ? 1 : 0,
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
        fertilizer_main_id: record.fertilizer_main_id
      };
      sampleSubmissionsData.push(step2);
    });
    console.log(sampleSubmissionsData);

    // ข้อมูลไฟล์จาก Step ที่เก็บใน data.files
    const fileData = data.files;
    // if (data === 999999) {
    try {
      console.log('step1:', step1);
      const responseService = await postServiceRequests(step1);
      if (responseService.request_id) {
        // ทำการส่งข้อมูล sampleSubmissionsData

        for (const record of sampleSubmissionsData) {
          record.request_id = responseService.request_id;
          const responseSample = await postSampleSubmissions(record);
          console.log('responseSample:', responseSample);
          if (responseSample.submission_id) {
            const sampleDataDetail = {
              submission_id: responseSample.submission_id,
              test_items: record.test_items
            };
            const responseTestItem = await postSampleSubmisDetail(sampleDataDetail);
            console.log('responseTestItem:', responseTestItem);
          }
        }

        // อัปโหลดไฟล์ทั้งหมด และรับผลลัพธ์
        const uploadResults = await handleUploadFiles(fileData, 'service-requests', 'service_');

        // สำหรับแต่ละไฟล์ที่อัปโหลด ให้ส่งข้อมูลไปยัง /service-request-documents
        for (const fileResult of uploadResults) {
          const extractedFileName = fileResult.fileName.split('/').pop();
          const documentData = {
            request_id: responseService.request_id,
            uploaded_by: user.user_id,
            file_name: extractedFileName,
            file_path: `/${fileResult.fileName}`
          };

          // เรียก API เพิ่มข้อมูลเอกสาร
          await postServiceRequestDocuments(documentData);
        }

        const reqStatusTracking = {
          newStatusTracking: 'requested'
        };
        await putServiceRequestStatusTracking(responseService.request_id, reqStatusTracking);
        toast.success('เพิ่มข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3000 });
        navigate('/request/detial', { state: { id: responseService.request_id } });
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error('เพิ่มข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3000 });
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
    }
    // }
  };
  return (
    <>
      {selectedForm === null && (
        <Card>
          <Card.Header>
            <h5>เลือกการขอรับบริการ</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
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
                      {spacialCon.map((x, index) => (index + 1 < spacialCon.length ? x.description : ` , ${x.description}`))}
                    </strong>
                  </p>
                </Col>
              )}
            </Row>
            <div className="d-flex justify-content-center">
              <Button
                variant="info"
                className="w-50 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('organic')}
                style={{ fontSize: 18 }}
              >
                <GiFertilizerBag size={45} className="mb-2" />
                แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์
              </Button>
              <Button
                variant="success"
                className="w-50  py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('chemical')}
                style={{ fontSize: 18 }}
              >
                <GiChemicalTank size={45} className="mb-2" />
                แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
      {/* {selectedForm === 'organic' && <OrganicFertilizerForm onHandleSave={setShowSuccessModal} />}
      {selectedForm === 'chemical' && <ChemicalFertilizerForm onHandleSave={handleSave} userId={usersFromState.user_id} />} */}

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
            &#10004;
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
