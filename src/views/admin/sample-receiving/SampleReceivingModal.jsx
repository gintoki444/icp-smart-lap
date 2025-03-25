import React, { useState, useEffect } from 'react';
import { Modal, ButtonGroup, Button, Form, Table, Image, Badge } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import { postSampleTracking, putSampleTracking } from 'services/_api/trackingRequest';
import FirebaseImage from 'components/Firebase/FirebaseImage';
import { MdOutlineAddHome, MdOutlineCancel } from 'react-icons/md';
import { putGenerateSubmis, getSampleSubmisRequestByID } from 'services/_api/sampleSubmissionsRequest';
import { putGenerateRequest } from 'services/_api/serviceRequest';
import { deleteSampleStatus, postSampleStatusArray, getSampleStatusByID } from 'services/_api/sampleStatusRequest';
import { putServiceRequestStatusTracking, deleteServiceRequestStatusTracking, getServiceRequestsByID } from 'services/_api/serviceRequest';
import { Tooltip } from '@mui/material';
import { toast } from 'react-toastify';

const SampleReceivingModal = ({
  serviceData,
  submissionId,
  handleTracking,
  trackingData,
  reviewBy,
  sampleNo,
  reloadData,
  sampleStatus,
  serviceRequestId
}) => {
  const [service, setService] = useState(serviceData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deliveryData, setDeliveryData] = useState(trackingData);
  const [editData, setEditData] = useState(null);
  const [sampleStatusData, setSampleStatusData] = useState([]);

  useEffect(() => {
    const fetchTrackingData = () => {
      setDeliveryData(trackingData);
      setSampleStatusData(sampleStatus.sample_status_tracking);
    };
    fetchTrackingData();
  }, [reloadData]);

  const editValidationSchema = Yup.object({
    carrier_name: Yup.string().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
    tracking_number: Yup.string().required('กรุณากรอกหมายเลข Tracking'),
    proof_image: Yup.mixed().nullable(),
    deliveredToLab: Yup.boolean().oneOf([true], 'กรุณาเลือก "ตัวอย่างจัดส่งถึงแลป"')
  });

  const initialValues = {
    carrier_name: '',
    tracking_number: '',
    proof_image: null,
    status: 'received',
    deliveredToLab: false,
    receiveOption: 'not_received'
  };

  // ฟังก์ชันตรวจสอบและอัปเดตสถานะ
  const checkAndUpdateStatus = async () => {
    try {
      // ดึงข้อมูล sample_submissions จาก API
      const sampleSubmissions = await getSampleSubmisRequestByID(serviceRequestId);
      const sampleSubmissionsCount = sampleSubmissions.length;
      const statusLogs = (await getServiceRequestsByID(serviceRequestId)).service_status_logs || {};

      // 1. ตรวจสอบ sample_tracking
      const receivedCount = sampleSubmissions.reduce((count, submission) => {
        const tracking = submission.sample_tracking || [];
        const hasReceivedTracking = tracking.some(
          (track) => track.submission_id === submission.submission_id && track.received_by !== null
        );
        return count + (hasReceivedTracking ? 1 : 0);
      }, 0);

      const isSampleSentComplete = receivedCount === sampleSubmissionsCount;

      // 2. ตรวจสอบ sample_status_tracking ว่ามี item.status === 'delivered_to_lab' หรือไม่
      // รวม sample_status_tracking จากทุก submission
      const allSampleStatusTracking = sampleSubmissions.flatMap((submission) => submission.sample_status_tracking || []);

      const hasDeliveredToLab = allSampleStatusTracking.some((item) => item.status === 'delivered_to_lab');

      console.log('isSampleSentComplete', isSampleSentComplete);
      console.log('hasDeliveredToLab', hasDeliveredToLab);
      console.log('statusLogs.sample_sent', statusLogs.sample_sent);
      // 3. อัปเดตสถานะ sample_sent ถ้าครบเงื่อนไข
      if (isSampleSentComplete && hasDeliveredToLab && statusLogs.sample_sent === null) {
        const reqStatusTracking = { newStatusTracking: 'sample_sent' };
        await putServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
        toast.success('สถานะอัปเดต: ตัวอย่างถูกส่งครบแล้ว', { autoClose: 3000 });
      }

      // 4. ตรวจสอบสถานะ "sample_arrived_lab" (ตัวอย่างจัดส่งถึงแลป)
      const deliveredCount = allSampleStatusTracking.filter((item) => item.status === 'delivered_to_lab').length;
      if (deliveredCount >= sampleSubmissionsCount && statusLogs.sample_arrived_lab === null) {
        const reqStatusTracking = { newStatusTracking: 'sample_arrived_lab' };
        await putServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
        toast.success('สถานะอัปเดต: ตัวอย่างจัดส่งถึงแลปครบแล้ว', { autoClose: 3000 });
      } else if (deliveredCount < sampleSubmissionsCount && statusLogs.sample_arrived_lab !== null) {
        const reqStatusTracking = { StatusTracking: 'sample_arrived_lab' };
        await deleteServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
        toast.info('สถานะถูกลบ: ตัวอย่างยังไม่ถึงแลปครบ', { autoClose: 3000 });
      }

      // 5. ตรวจสอบสถานะ "sample_received" (รับตัวอย่างเข้าระบบ)
      const receivedInSystemCount = allSampleStatusTracking.filter((item) => item.status === 'received_in_system').length;
      if (receivedInSystemCount >= sampleSubmissionsCount && statusLogs.sample_received === null) {
        const reqStatusTracking = { newStatusTracking: 'sample_received' };
        await putServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
        toast.success('สถานะอัปเดต: รับตัวอย่างเข้าระบบครบแล้ว', { autoClose: 3000 });
      } else if (receivedInSystemCount < sampleSubmissionsCount && statusLogs.sample_received !== null) {
        const reqStatusTracking = { StatusTracking: 'sample_received' };
        await deleteServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
        toast.info('สถานะถูกลบ: ตัวอย่างยังไม่ถูกรับเข้าระบบครบ', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error in checkAndUpdateStatus:', error);
      toast.error('เกิดข้อผิดพลาดในการอัปเดตสถานะ', { autoClose: 3000 });
    }
  };

  const handleAddSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      const uploadResult = await handleUploadFiles([values.proof_image], 'proof_images', 'proof_');
      const proofImageUrl = uploadResult[0].fileName;

      const trackingData = {
        submission_id: submissionId,
        tracking_number: values.tracking_number,
        carrier_name: values.carrier_name,
        status: values.status,
        proof_image: proofImageUrl
      };

      const response = await postSampleTracking(trackingData);

      setDeliveryData((prev) => [
        ...prev,
        {
          id: response.id || Date.now(),
          carrier_name: values.carrier_name,
          tracking_number: values.tracking_number,
          proof_image: proofImageUrl,
          status: 'received'
        }
      ]);

      handleTracking(true);
      setShowAddModal(false);
      resetForm();

      // เรียก checkAndUpdateStatus หลังจากเพิ่มข้อมูล
      await checkAndUpdateStatus();
    } catch (error) {
      console.error('Error saving tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  const handleEditSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      let newSampleStatus = [];
      const submissionNo = serviceData.sample_submissions.find((x) => x.submission_id === submissionId)?.submission_no;
      console.log(
        'serviceData.sample_submissions.find:',
        serviceData.sample_submissions.find((x) => x.submission_id === submissionId)
      );
      console.log('submissionNo:', submissionNo);
      if (!submissionNo) await putGenerateSubmis(submissionId);
      if (!serviceData.request_no) await putGenerateRequest(serviceRequestId);

      // 1. ตรวจสอบ Checkbox "ตัวอย่างจัดส่งถึงแลป"
      if (values.deliveredToLab) {
        const deliveredStatus = {
          submission_id: submissionId,
          status: 'delivered_to_lab',
          notes: 'ตัวอย่างจัดส่งถึงแล็บ'
        };
        const hasDelivered = sampleStatusData.some(
          (item) => item.submission_id === deliveredStatus.submission_id && item.status === deliveredStatus.status
        );
        if (!hasDelivered) {
          newSampleStatus.push({ ...deliveredStatus, id: newSampleStatus.length + 1 });
        }
      }

      // 2. ตรวจสอบ Radio "รับตัวอย่างเข้าระบบ"
      if (values.receiveOption === 'received') {
        const receivedStatus = {
          submission_id: submissionId,
          status: 'received_in_system',
          notes: 'รับตัวอย่างเข้าระบบ'
        };
        const hasReceived = sampleStatusData.some(
          (item) => item.submission_id === receivedStatus.submission_id && item.status === receivedStatus.status
        );
        if (!hasReceived) {
          newSampleStatus.push({ ...receivedStatus, id: newSampleStatus.length + 1 });
        }
      }

      // บันทึกสถานะใหม่
      if (newSampleStatus.length > 0) {
        const response = await postSampleStatusArray(newSampleStatus);
        console.log('postSampleStatusArray:', response);
      }

      // อัปเดตสถานะ tracking
      if (submissionId && !values.received_by) {
        const trackingData = {
          status: 'in_processing',
          received_by: reviewBy
        };
        const responseSampleTracking = await putSampleTracking(editData.tracking_id, trackingData);
        console.log('responseSampleTracking:', responseSampleTracking);
        handleTracking(true);
        setShowEditModal(false);
      }

      // เรียก checkAndUpdateStatus เพื่อตรวจสอบและอัปเดตสถานะ
      await checkAndUpdateStatus();
    } catch (error) {
      console.error('Error updating tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  const handleEdit = (id) => {
    const dataToEdit = deliveryData.find((item) => item.tracking_id === id);
    console.log('dataToEdit:', dataToEdit);
    setEditData(dataToEdit);
    setShowEditModal(true);
  };

  const handleCancelTracking = async (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลการจัดส่งตัวอย่าง หรือไม่?`);
    if (confirmDelete) {
      try {
        sampleStatusData.map((x) => {
          if (x.status === 'received_in_system' || x.status === 'delivered_to_lab') {
            deleteSampleStatus(x.id);
          }
        });

        const trackingData = {
          status: 'received',
          received_by: null
        };

        const response = await putSampleTracking(id, trackingData);
        if (response) {
          toast.success('ยกเลิกการรับตัวอย่างสำเร็จ!', { autoClose: 3000 });
          handleTracking(true);
        }

        // เรียก checkAndUpdateStatus หลังจากยกเลิก
        await checkAndUpdateStatus();
      } catch (error) {
        toast.error('ยกเลิกการรับตัวอย่างไม่สำเร็จ! :' + error, { autoClose: 3000 });
      }
    }
  };

  return (
    <>
      <h6 className="mb-3 mt-3">ข้อมูลการจัดส่งตัวอย่าง</h6>
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th width={80} className="text-center">
              #
            </th>
            <th>ผู้ให้บริการจัดส่ง</th>
            <th>หมายเลข Tracking</th>
            <th className="text-center" width={180}>
              สถานะ
            </th>
            <th className="text-center">หลักฐานการส่ง</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {deliveryData.length > 0 ? (
            deliveryData.map((data, index) => (
              <tr key={`${data.tracking_number}-${data.id}`}>
                <td className="text-center">{index + 1}</td>
                <td>{data.carrier_name}</td>
                <td>{data.tracking_number}</td>
                <td className="text-center">
                  <Badge
                    pill
                    bg={
                      data.status === 'received'
                        ? 'info'
                        : data.status === 'in_processing'
                          ? 'warning'
                          : data.status === 'completed'
                            ? 'primary'
                            : 'success'
                    }
                  >
                    {data.status === 'received'
                      ? 'ดำเนินการจัดส่ง'
                      : data.status === 'in_processing'
                        ? 'กำลังทดสอบ'
                        : data.status === 'completed'
                          ? 'ทดสอบเสร็จสิ้น'
                          : 'จัดส่งสำเร็จ'}
                  </Badge>
                </td>
                <td className="text-center">
                  <FirebaseImage
                    imagePath={data.proof_image}
                    alt={`Proof for ${data.tracking_number}`}
                    style={{ maxHeight: '100px' }}
                    thumbnail={true}
                  />
                </td>
                <td className="text-center" width={200}>
                  <ButtonGroup>
                    {!data.received_by ? (
                      <Tooltip title="รับตัวอย่าง" placement="bottom" arrow>
                        <Button variant="success" size="sm" onClick={() => handleEdit(data.tracking_id)}>
                          <MdOutlineAddHome className="me-2" style={{ fontSize: 16 }} /> รับตัวอย่าง
                        </Button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="ยกเลิกรับตัวอย่าง" placement="bottom" arrow>
                        <Button variant="danger" size="sm" onClick={() => handleCancelTracking(data.tracking_id)}>
                          <MdOutlineCancel /> ยกเลิกรับตัวอย่าง
                        </Button>
                      </Tooltip>
                    )}
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th width={80} className="text-center" colSpan={6}>
                ไม่มีข้อมูล
              </th>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal สำหรับแก้ไขข้อมูล */}
      {editData && (
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h6>ยืนยันการรับตัวอย่าง</h6>
            </Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              carrier_name: editData.carrier_name,
              tracking_number: editData.tracking_number,
              proof_image: null,
              status: editData.status,
              received_by: editData.received_by,
              deliveredToLab: false,
              receiveOption: 'not_received'
            }}
            validationSchema={editValidationSchema}
            onSubmit={handleEditSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  {errors.submit && <div className="text-danger mb-3">{errors.submit}</div>}
                  <Form.Group className="mb-3">
                    <Form.Label>ผู้ให้บริการจัดส่ง</Form.Label>
                    <Form.Select
                      name="carrier_name"
                      value={values.carrier_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.carrier_name && !!errors.carrier_name}
                    >
                      <option value="">เลือกผู้ให้บริการจัดส่ง</option>
                      <option value="ไปรษณีย์ไทย">ไปรษณีย์ไทย</option>
                      <option value="Kerry Express">Kerry Express</option>
                      <option value="J&T Express">J&T Express</option>
                      <option value="DHL">DHL</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.carrier_name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>หมายเลข Tracking</Form.Label>
                    <Form.Control
                      type="text"
                      name="tracking_number"
                      placeholder="กรอกหมายเลข Tracking"
                      value={values.tracking_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.tracking_number && !!errors.tracking_number}
                    />
                    <Form.Control.Feedback type="invalid">{errors.tracking_number}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>หลักฐานการส่ง (ถ้าต้องการเปลี่ยน)</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(event) => setFieldValue('proof_image', event.target.files[0])}
                      isInvalid={touched.proof_image && !!errors.proof_image}
                    />
                    <div className="mt-3">
                      {values.proof_image ? (
                        <Image src={URL.createObjectURL(values.proof_image)} alt="New Proof" thumbnail style={{ maxHeight: '200px' }} />
                      ) : (
                        <FirebaseImage
                          imagePath={editData.proof_image}
                          alt="Current Proof"
                          style={{ maxHeight: '200px' }}
                          thumbnail={true}
                        />
                      )}
                    </div>
                    <Form.Control.Feedback type="invalid">{errors.proof_image}</Form.Control.Feedback>
                  </Form.Group>

                  {/* Checkbox: ตัวอย่างจัดส่งถึงแลป */}
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="ตัวอย่างจัดส่งถึงแลป"
                      name="deliveredToLab"
                      checked={values.deliveredToLab}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.deliveredToLab && !!errors.deliveredToLab}
                    />
                    <Form.Control.Feedback type="invalid">{errors.deliveredToLab}</Form.Control.Feedback>
                  </Form.Group>

                  {/* Radio Buttons: รับตัวอย่างเข้าระบบ */}
                  <Form.Group className="mb-3">
                    <Form.Label>รับตัวอย่างเข้าระบบ</Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="รับสินค้าเข้าระบบ"
                        name="receiveOption"
                        value="received"
                        checked={values.receiveOption === 'received'}
                        onChange={handleChange}
                        inline
                      />
                      <Form.Check
                        type="radio"
                        label="ไม่รับ"
                        name="receiveOption"
                        value="not_received"
                        checked={values.receiveOption === 'not_received'}
                        onChange={handleChange}
                        inline
                      />
                    </div>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" type="submit" disabled={isSubmitting}>
                    ยืนยัน
                  </Button>
                  <Button variant="secondary" onClick={() => setShowEditModal(false)} disabled={isSubmitting}>
                    ยกเลิก
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default SampleReceivingModal;
