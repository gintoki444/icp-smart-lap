import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { ChemicalFertilizerForm } from './ChemicalFertilizerForm';
import { OrganicFertilizerForm } from './OrganicFertilizerForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { GiFertilizerBag, GiChemicalTank } from 'react-icons/gi';
import { postServiceRequests, postServiceRequestDocuments } from 'services/_api/serviceRequest';
import { postSampleSubmisDetail, postSampleSubmissions } from 'services/_api/SampleSubmissionsRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import SampleRequestForm from './SampleRequestForm';

const RegistrationForm = () => {
  const navagate = useNavigate();
  const [selectedForm, setSelectedForm] = useState(null);
  const [samepleSelected, setSamepleSelected] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const location = useLocation();
  const usersFromState = location.state?.user || null;

  console.log(usersFromState);
  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
    if (formType === 'chemical') {
      setSamepleSelected(1);
    } else if (formType === 'organic') {
      setSamepleSelected(2);
    }
  };

  useEffect(() => {
    if (usersFromState === null) {
      navagate('/user/request/');
    }
  }, []);
  const handleSave = async (data) => {
    // ข้อมูลจาก Step 1
    const step1 = {
      user_id: usersFromState.user_id,
      customer_id: data.company_id,
      is_registration_analysis: data.analysisMethod === 'is_registration_analysis' ? 1 : 0,
      is_quality_check_analysis: data.analysisMethod === 'is_quality_check_analysis' ? 1 : 0,
      sample_type_id: data.sample_type_id,
      notes: data.notes
    };

    let sampleSubmissionsData = [];
    data.fertilizerRecords.forEach((record) => {
      console.log(record.reportMethod);
      const step2 = {
        request_id: null,
        is_single_fertilizer: record.fertilizerCategory === 'is_single_fertilizer' ? 1 : 0,
        is_compound_fertilizer: record.fertilizerCategory === 'is_compound_fertilizer' ? 1 : 0,
        is_mixed_fertilizer: record.fertilizerCategory === 'is_mixed_fertilizer' ? 1 : 0,
        is_secondary_nutrient_fertilizer: record.fertilizerCategory === 'is_secondary_nutrient_fertilizer' ? 1 : 0,
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
        test_all_items: data.test_all_items,
        is_self_pickup: data.reportMethod === 'is_self_pickup' ? 1 : 0,
        pdf_email: data.reportMethod === 'pdf_email' ? data.email : '',
        is_mail_delivery: data.reportMethod === 'is_self_pickup' ? 1 : 0,
        is_lab_dispose_sample: data.sampleDisposal === 'is_lab_dispose_sample' ? 1 : 0,
        is_collect_within_3_months: data.sampleDisposal === 'is_collect_within_3_months' ? 1 : 0,
        is_return_sample: data.sampleDisposal === 'is_return_sample' ? 1 : 0,
        submitted_by: data.submitted_by,
        phone: data.submitted_phone,
        test_items: record.test_items
      };
      console.log('Step 2 data for record:', step2);
      sampleSubmissionsData.push(step2);
    });

    console.log('sampleSubmissionsData:', sampleSubmissionsData);
    // ข้อมูลไฟล์จาก Step ที่เก็บใน data.files
    const fileData = data.files;
    // if (usersFromState.user_id === 99999) {
    try {
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
        const uploadResults = await handleUploadFiles(fileData);
        console.log('ผลลัพธ์การอัปโหลด:', uploadResults);

        // สำหรับแต่ละไฟล์ที่อัปโหลด ให้ส่งข้อมูลไปยัง /service-request-documents
        for (const fileResult of uploadResults) {
          // ดึงเฉพาะชื่อไฟล์ (ส่วนหลังสุดหลังจาก /)
          const extractedFileName = fileResult.fileName.split('/').pop();
          const documentData = {
            request_id: responseService.request_id,
            uploaded_by: usersFromState.user_id,
            file_name: extractedFileName,
            // สมมุติว่า file_path ต้องการเป็น path ของไฟล์ใน Storage (เพิ่ม / นำหน้า)
            file_path: `/${fileResult.fileName}`
          };

          // เรียก API เพิ่มข้อมูลเอกสาร
          const responseDoc = await postServiceRequestDocuments(documentData);
          console.log('Response from service-request-documents:', responseDoc);
        }

        setShowSuccessModal(true);
      }
    } catch (error) {
      console.log('Error:', error);
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
            <div className="d-flex justify-content-center">
              <Button
                variant="info"
                className="w-50 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('organic')}
              >
                <GiFertilizerBag size={45} className="mb-2" />
                แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์
              </Button>
              <Button
                variant="success"
                className="w-50  py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('chemical')}
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
        <SampleRequestForm userId={usersFromState.user_id} onHandleSave={handleSave} sampleType={samepleSelected} />
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
          <Button variant="success" onClick={() => navagate('/user/request/')}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegistrationForm;
