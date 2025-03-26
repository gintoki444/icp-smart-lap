import React, { useState, useEffect } from 'react';
import { Modal, ButtonGroup, Button, Form, Table, Image, Badge } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import { deleteSampleTrackingByID, postSampleTracking, putSampleTracking } from 'services/_api/trackingRequest';
import FirebaseImage from 'components/Firebase/FirebaseImage';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { putServiceRequestStatusTracking, deleteServiceRequestStatusTracking, getServiceRequestsByID } from 'services/_api/serviceRequest'; // เพิ่ม API

const AddTestTracking = ({ submissionId, handleTracking, serviceRequestId, sampleSubmissions, serviceData }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deliveryData, setDeliveryData] = useState([]);
  const [editData, setEditData] = useState(null);

  // ใช้ sample_tracking จาก sampleSubmissions เป็นข้อมูลเริ่มต้น
  useEffect(() => {
    if (sampleSubmissions && sampleSubmissions.length > 0) {
      const initialTracking =
        sampleSubmissions
          .find((submission) => submission.submission_id === submissionId)
          ?.sample_tracking?.map((track) => ({
            tracking_id: track.tracking_id,
            carrier_name: track.carrier_name,
            tracking_number: track.tracking_number,
            proof_image: track.proof_image,
            status: track.status
          })) || [];
      setDeliveryData(initialTracking);
    }
  }, [submissionId, sampleSubmissions]);

  const addValidationSchema = Yup.object({
    carrier_name: Yup.string().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
    tracking_number: Yup.string().required('กรุณากรอกหมายเลข Tracking'),
    proof_image: Yup.mixed().required('กรุณาอัปโหลดหลักฐานการส่ง')
  });

  const editValidationSchema = Yup.object({
    carrier_name: Yup.string().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
    tracking_number: Yup.string().required('กรุณากรอกหมายเลข Tracking'),
    proof_image: Yup.mixed().nullable()
  });

  const initialValues = {
    carrier_name: '',
    tracking_number: '',
    proof_image: null,
    status: 'received'
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
          tracking_id: response.tracking_id || Date.now(),
          carrier_name: values.carrier_name,
          tracking_number: values.tracking_number,
          proof_image: proofImageUrl,
          status: 'received'
        }
      ]);

      await checkAndUpdateStatus();
      handleTracking(true);
      setShowAddModal(false);
      resetForm();
    } catch (error) {
      console.error('Error saving tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  const handleEditSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      let proofImageUrl = editData.proof_image;
      if (values.proof_image) {
        const uploadResult = await handleUploadFiles([values.proof_image], 'proof_images', 'proof_');
        proofImageUrl = uploadResult[0].fileName;
      }

      const updatedTrackingData = {
        submission_id: submissionId,
        tracking_number: values.tracking_number,
        carrier_name: values.carrier_name,
        status: values.status || editData.status,
        proof_image: proofImageUrl
      };

      await putSampleTracking(editData.tracking_id, updatedTrackingData);

      setDeliveryData((prev) =>
        prev.map((item) => (item.tracking_id === editData.tracking_id ? { ...item, ...updatedTrackingData } : item))
      );

      // await checkAndUpdateStatus();
      handleTracking(true);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  const handleEdit = (id) => {
    const dataToEdit = deliveryData.find((item) => item.tracking_id === id);
    setEditData(dataToEdit);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลการจัดส่งตัวอย่าง หรือไม่?`);
    if (confirmDelete) {
      try {
        await deleteSampleTrackingByID(id);
        toast.success('ลบข้อมูลการจัดส่งตัวอย่างสำเร็จ!', { autoClose: 3000 });
        setDeliveryData((prev) => prev.filter((item) => item.tracking_id !== id));

        await checkAndUpdateStatus();
        handleTracking(true);
      } catch (error) {
        toast.error('ลบข้อมูลการจัดส่งตัวอย่างไม่สำเร็จ!', { autoClose: 3000 });
      }
    }
  };

  const checkAndUpdateStatus = async () => {
    const response = await getServiceRequestsByID(serviceRequestId);
    const sampleSubmission = response.sample_submissions;
    const receivedCount = sampleSubmission.reduce((count, submission) => {
      const tracking = submission.sample_tracking || [];
      return count + (tracking.some((track) => track.submission_id === submission.submission_id && track.status === 'received') ? 1 : 0);
    }, 0);

    const isSampleSentComplete = receivedCount === sampleSubmission.length;
    // สมมติว่าเราดึง service_status_logs จาก API หรือ prop (ในที่นี้ใช้ mock)
    const statusLogs = response.service_status_logs || {};

    if (isSampleSentComplete && statusLogs.sample_sent === null) {
      const reqStatusTracking = { newStatusTracking: 'sample_sent' };
      await putServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
    } else if (!isSampleSentComplete && statusLogs.sample_sent !== null) {
      const reqStatusTracking = { StatusTracking: 'sample_sent' };
      await deleteServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
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
          {deliveryData.map((data, index) => (
            <tr key={`${data.tracking_number}-${index}`}>
              <td className="text-center">{index + 1}</td>
              <td>{data.carrier_name}</td>
              <td>{data.tracking_number}</td>
              <td className="text-center">
                <Badge
                  bg={
                    data.status === 'received'
                      ? 'secondary'
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
              <td className="text-center">
                <ButtonGroup>
                  <Button variant="info" size="sm" disabled={data.status !== 'received'} onClick={() => handleEdit(data.tracking_id)}>
                    <FiEdit />
                  </Button>
                  <Button variant="danger" size="sm" disabled={data.status !== 'received'} onClick={() => handleDelete(data.tracking_id)}>
                    <RiDeleteBin5Fill />
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {!serviceData.service_status_logs.sample_arrived_lab && (
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          เพิ่มข้อมูลการจัดส่ง
        </Button>
      )}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>รายละเอียดการจัดส่งตัวอย่าง</h5>
          </Modal.Title>
        </Modal.Header>
        <Formik initialValues={initialValues} validationSchema={addValidationSchema} onSubmit={handleAddSubmit}>
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
                  <Form.Label>หลักฐานการส่ง</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(event) => setFieldValue('proof_image', event.target.files[0])}
                    isInvalid={touched.proof_image && !!errors.proof_image}
                  />
                  {values.proof_image && (
                    <div className="mt-3">
                      <Image src={URL.createObjectURL(values.proof_image)} alt="Proof" thumbnail style={{ maxHeight: '200px' }} />
                    </div>
                  )}
                  <Form.Control.Feedback type="invalid">{errors.proof_image}</Form.Control.Feedback>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  บันทึก
                </Button>
                <Button variant="secondary" onClick={() => setShowAddModal(false)} disabled={isSubmitting}>
                  ยกเลิก
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>

      {editData && (
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>แก้ไขรายละเอียดการจัดส่งตัวอย่าง</h5>
            </Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              carrier_name: editData.carrier_name,
              tracking_number: editData.tracking_number,
              proof_image: null,
              status: editData.status
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
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" type="submit" disabled={isSubmitting}>
                    บันทึกการแก้ไข
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

export default AddTestTracking;
