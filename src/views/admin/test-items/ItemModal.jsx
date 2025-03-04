import React, { useState } from 'react';
import { Modal, ButtonGroup, Button, Form, Table, Image, Badge } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import { deleteSampleTrackingByID, postSampleTracking, putSampleTracking } from 'services/_api/trackingRequest'; // เพิ่ม API สำหรับแก้ไข
import FirebaseImage from 'components/Firebase/FirebaseImage';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdOutlineAddHome } from 'react-icons/md';
import { putGenerateSubmis } from 'services/_api/sampleSubmissionsRequest';
import { putGenerateRequest } from 'services/_api/serviceRequest';
import { postSampleStatus } from 'services/_api/sampleStatusRequest';

const ItemModal = ({ submissionId, handleTracking, trackingData, reviewBy, serviceId }) => {
  const [showAddModal, setShowAddModal] = useState(false); // Modal สำหรับเพิ่ม
  const [showEditModal, setShowEditModal] = useState(false); // Modal สำหรับแก้ไข
  const [deliveryData, setDeliveryData] = useState(trackingData); // ข้อมูลการจัดส่ง
  const [editData, setEditData] = useState(null); // ข้อมูลที่เลือกเพื่อแก้ไข

  console.log('serviceId:', serviceId);

  // Validation Schemas
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

  // Initial Values
  const initialValues = {
    carrier_name: '',
    tracking_number: '',
    proof_image: null,
    status: 'received'
  };

  // ฟังก์ชันสำหรับเพิ่มข้อมูล
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
    } catch (error) {
      console.error('Error saving tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  // ฟังก์ชันสำหรับแก้ไขข้อมูล
  const handleEditSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const trackingData = {
        status: 'in_processing',
        received_by: reviewBy
      };

      const response = await putSampleTracking(editData.tracking_id, trackingData);

      if (submissionId) await putGenerateSubmis(submissionId);
      if (serviceId) await putGenerateRequest(serviceId);

      const sampleStatus = {
        submission_id: submissionId,
        status: 'received_in_system',
        notes: 'รับตัวอย่างเข้าระบบ'
      };

      await postSampleStatus(sampleStatus);
      if (response) {
        handleTracking(true);
        setShowEditModal(false);
      }
    } catch (error) {
      console.error('Error updating tracking data:', error);
      setErrors({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' });
      setSubmitting(false);
    }
  };

  // ฟังก์ชันเริ่มต้นการแก้ไข
  const handleEdit = (id) => {
    const dataToEdit = deliveryData.find((item) => item.id === id);

    setEditData(dataToEdit);
    setShowEditModal(true);
  };

  // ฟังก์ชันลบข้อมูล
  const handleDelete = async (id) => {
    try {
      await deleteSampleTrackingByID(id);
      setDeliveryData((prev) => prev.filter((item) => item.id !== id));
      handleTracking(true);
    } catch (error) {
      console.error('Error deleting tracking data:', error);
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
            <tr key={data.id}>
              <td className="text-center">{index + 1}</td>
              <td>{data.carrier_name}</td>
              <td>{data.tracking_number}</td>
              <td className="text-center">
                <Badge
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
                      ? 'กำลังตรวจสอบ/ทดสอบ'
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
                  {!data.received_by && (
                    <Button variant="success" size="sm" onClick={() => handleEdit(data.id)}>
                      <MdOutlineAddHome style={{ fontSize: 16 }} />
                    </Button>
                  )}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(data.id)}>
                    <RiDeleteBin5Fill />
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Button variant="primary" onClick={() => setShowAddModal(true)}>
        เพิ่มข้อมูลการจัดส่ง
      </Button> */}

      {/* Modal สำหรับแก้ไขข้อมูล */}
      {editData && (
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h6>ยืนยันการรับสินค้าตัวอย่าง</h6>
            </Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              carrier_name: editData.carrier_name,
              tracking_number: editData.tracking_number,
              proof_image: null,
              status: editData.status
            }}
            validationSchema={editValidationSchema} // ใช้ schema สำหรับแก้ไข
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

export default ItemModal;
