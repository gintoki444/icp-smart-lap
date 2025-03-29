import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { putSampleSubmissions } from 'services/_api/sampleSubmissionsRequest';
import { putServiceRequestStatusTracking, deleteServiceRequestStatusTracking } from 'services/_api/serviceRequest';
import { getSampleSubmisRequestByID } from 'services/_api/sampleSubmissionsRequest';
import { toast } from 'react-toastify';

const ReviewModal = ({ sampleSubmissions, onSubmitReview, serviceRequestId }) => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Validation Schema
  const validationSchema = Yup.object({
    is_sample_normal: Yup.boolean().required('กรุณาเลือกสถานะตัวอย่าง'),
    is_sample_abnormal: Yup.boolean().required('กรุณาเลือกสถานะตัวอย่าง'),
    sample_abnormal_desc: Yup.string().test('abnormal-desc-required', 'กรุณาระบุเหตุผลที่ตัวอย่างผิดปกติ', function (value) {
      return !this.parent.is_sample_abnormal || (value !== undefined && value.trim() !== '');
    }),
    is_staff_ready: Yup.boolean().required('กรุณาเลือกสถานะบุคลากร'),
    is_staff_not_ready: Yup.boolean().required('กรุณาเลือกสถานะบุคลากร'),
    is_equipment_ready: Yup.boolean().required('กรุณาเลือกสถานะเครื่องมือ'),
    is_equipment_not_ready: Yup.boolean().required('กรุณาเลือกสถานะเครื่องมือ'),
    is_job_accepted: Yup.boolean().required('กรุณาเลือกสถานะสรุปความพร้อม'),
    is_job_rejected: Yup.boolean().required('กรุณาเลือกสถานะสรุปความพร้อม'),
    has_change_request: Yup.boolean(),
    change_agreement: Yup.string().test('change-agreement-required', 'กรุณาระบุข้อตกลงการเปลี่ยนแปลง', function (value) {
      return !this.parent.has_change_request || (value !== undefined && value.trim() !== '');
    }),
    reviewed_by: Yup.string().test('reviewed-by-required', 'กรุณาระบุผู้ทบทวน', function (value) {
      return !this.parent.has_change_request || (value !== undefined && value.trim() !== '');
    }),
    review_date: Yup.string().test('review-date-required', 'กรุณาระบุวันที่ทบทวน', function (value) {
      return !this.parent.has_change_request || (value !== undefined && value.trim() !== '');
    }),
    approved_by: Yup.string().test('approved-by-required', 'กรุณาระบุผู้อนุมัติ', function (value) {
      return !this.parent.has_change_request || (value !== undefined && value.trim() !== '');
    }),
    approved_date: Yup.string().test('approved-date-required', 'กรุณาระบุวันที่อนุมัติ', function (value) {
      return !this.parent.has_change_request || (value !== undefined && value.trim() !== '');
    })
  });

  // Initial Values
  const initialValues = {
    is_sample_normal: true,
    is_sample_abnormal: false,
    sample_abnormal_desc: '',
    is_staff_ready: true,
    is_staff_not_ready: false,
    is_equipment_ready: true,
    is_equipment_not_ready: false,
    is_job_accepted: true,
    is_job_rejected: false,
    has_change_request: false,
    change_agreement: '',
    reviewed_by: '',
    review_date: '',
    approved_by: '',
    approved_date: '',
    verification_status: sampleSubmissions.verification_status || 'No'
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // ตรวจสอบ validation
      await validationSchema.validate(values, { abortEarly: false });

      const reviewData = {
        is_sample_normal: values.is_sample_normal ? 1 : 0,
        is_sample_abnormal: values.is_sample_abnormal ? 1 : 0,
        sample_abnormal_desc: values.sample_abnormal_desc || '',
        is_staff_ready: values.is_staff_ready ? 1 : 0,
        is_staff_not_ready: values.is_staff_not_ready ? 1 : 0,
        is_equipment_ready: values.is_equipment_ready ? 1 : 0,
        is_equipment_not_ready: values.is_equipment_not_ready ? 1 : 0,
        is_job_accepted: values.is_job_accepted ? 1 : 0,
        is_job_rejected: values.is_job_rejected ? 1 : 0
        // verification_status: values.is_job_rejected ? 'No' : 'Yes' // ตั้งค่า verification_status ตาม is_job_rejected
      };
      console.log('reviewData', reviewData);
      console.log('sampleSubmissions.submission_id', sampleSubmissions.submission_id);

      const response = await putSampleSubmissions(reviewData, sampleSubmissions.submission_id);

      if (response.message === 'อัปเดตข้อมูลตัวอย่างสำเร็จ') {
        // ตรวจสอบ verification_status หลังจากอัปเดต
        const sampleSubmissionsList = await getSampleSubmisRequestByID(serviceRequestId);
        const sampleSubmissionsCount = sampleSubmissionsList.length;
        const verifiedCount = sampleSubmissionsList.reduce((count, submission) => {
          return count + (submission.verification_status === 'Yes' ? 1 : 0);
        }, 0);

        if (verifiedCount >= sampleSubmissionsCount) {
          const reqStatusTracking = { newStatusTracking: 'request_reviewed' };
          await putServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
          toast.success('สถานะอัปเดต: การทบทวนคำขอเสร็จสิ้น', { autoClose: 3000 });
        }

        // ถ้าเลือก is_job_rejected ให้ลบสถานะ request_reviewed และตั้ง verification_status เป็น No
        if (values.is_job_rejected) {
          const reqStatusTracking = { StatusTracking: 'request_reviewed' };
          await deleteServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);
          toast.info('สถานะถูกลบ: การทบทวนคำขอถูกยกเลิก', { autoClose: 3000 });
        }

        setSubmitting(false);
        setShow(false);
        onSubmitReview(true);
        toast.success('อัปเดตข้อมูลตัวอย่างสำเร็จ!', { autoClose: 3000 });
      } else {
        toast.error(response.message, { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('Validation error:' + error, { autoClose: 3000 });
      console.error('Validation error:', error);
      if (error.name === 'ValidationError') {
        const errorMessages = {};
        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });
        setErrors(errorMessages);
        setErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน');
      } else {
        setErrorMessage('เกิดข้อผิดพลาดในการบันทึก');
      }
      setSubmitting(false);
    }
  };

  const handleCancelReview = async () => {
    const confirmCancel = window.confirm('คุณต้องการยกเลิกการทบทวนคำขอนี้หรือไม่?');
    if (confirmCancel) {
      try {
        const reviewData = {
          is_sample_normal: null,
          is_sample_abnormal: null,
          sample_abnormal_desc: null,
          is_staff_ready: null,
          is_staff_not_ready: null,
          is_equipment_ready: null,
          is_equipment_not_ready: null,
          is_job_accepted: null,
          is_job_rejected: null
          // verification_status: 'No'
        };
        console.log('reviewData', reviewData);

        await putSampleSubmissions(reviewData, sampleSubmissions.submission_id);

        const reqStatusTracking = { StatusTracking: 'request_reviewed' };
        await deleteServiceRequestStatusTracking(serviceRequestId, reqStatusTracking);

        toast.success('ยกเลิกการทบทวนสำเร็จ!', { autoClose: 3000 });
        onSubmitReview(true);
        setShow(false);
      } catch (error) {
        toast.error('เกิดข้อผิดพลาดในการยกเลิกการทบทวน: ' + error, { autoClose: 3000 });
      }
    }
  };

  return (
    <>
      {sampleSubmissions.verification_status === 'Yes' ? (
        <Button variant="warning" onClick={() => setShow(true)}>
          <i className="feather icon-edit" /> ยกเลิก/แก้ไขการทบทวน
        </Button>
      ) : (
        <Button variant="info" onClick={() => setShow(true)}>
          <i className="feather icon-eye" /> ทบทวนคำขอ
        </Button>
      )}

      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="mb-0">การทวนคำขอรับบริการ</h6>
          </Modal.Title>
        </Modal.Header>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
                <h6>สถานะการขอรับบริการ</h6>
                <Row className="ps-4 pe-4">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>สถานะตัวอย่าง</Form.Label>
                      <div>
                        <Form.Check
                          id="is_sample_normal"
                          inline
                          type="radio"
                          name="is_sample_normal"
                          label="ปกติ"
                          checked={values.is_sample_normal}
                          onChange={() => {
                            setFieldValue('is_sample_normal', true);
                            setFieldValue('is_sample_abnormal', false);
                            setFieldValue('sample_abnormal_desc', '');
                          }}
                          isInvalid={touched.is_sample_normal && !!errors.is_sample_normal}
                        />
                        <Form.Check
                          id="is_sample_abnormal"
                          inline
                          type="radio"
                          name="is_sample_abnormal"
                          label="ผิดปกติ"
                          checked={values.is_sample_abnormal}
                          onChange={() => {
                            setFieldValue('is_sample_normal', false);
                            setFieldValue('is_sample_abnormal', true);
                          }}
                          isInvalid={touched.is_sample_abnormal && !!errors.is_sample_abnormal}
                        />
                        {values.is_sample_abnormal && (
                          <Form.Control
                            className="mt-2"
                            as="textarea"
                            name="sample_abnormal_desc"
                            placeholder="ระบุเหตุผลที่ผิดปกติ"
                            value={values.sample_abnormal_desc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.sample_abnormal_desc && !!errors.sample_abnormal_desc}
                          />
                        )}
                      </div>
                      <Form.Control.Feedback type="invalid">{errors.sample_abnormal_desc || errors.is_sample_normal}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>สถานะบุคลากร</Form.Label>
                      <div>
                        <Form.Check
                          id="is_staff_ready"
                          inline
                          type="radio"
                          name="is_staff_ready"
                          label="พร้อมปฏิบัติงาน"
                          checked={values.is_staff_ready}
                          onChange={() => {
                            setFieldValue('is_staff_ready', true);
                            setFieldValue('is_staff_not_ready', false);
                          }}
                          isInvalid={touched.is_staff_ready && !!errors.is_staff_ready}
                        />
                        <Form.Check
                          id="is_staff_not_ready"
                          inline
                          type="radio"
                          name="is_staff_not_ready"
                          label="ไม่พร้อมปฏิบัติงาน"
                          checked={values.is_staff_not_ready}
                          onChange={() => {
                            setFieldValue('is_staff_ready', false);
                            setFieldValue('is_staff_not_ready', true);
                          }}
                          isInvalid={touched.is_staff_not_ready && !!errors.is_staff_not_ready}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">{errors.is_staff_ready}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>สถานะเครื่องมือ</Form.Label>
                      <div>
                        <Form.Check
                          id="is_equipment_ready"
                          inline
                          type="radio"
                          name="is_equipment_ready"
                          label="พร้อมใช้งาน"
                          checked={values.is_equipment_ready}
                          onChange={() => {
                            setFieldValue('is_equipment_ready', true);
                            setFieldValue('is_equipment_not_ready', false);
                          }}
                          isInvalid={touched.is_equipment_ready && !!errors.is_equipment_ready}
                        />
                        <Form.Check
                          id="is_equipment_not_ready"
                          inline
                          type="radio"
                          name="is_equipment_not_ready"
                          label="ไม่พร้อมใช้งาน"
                          checked={values.is_equipment_not_ready}
                          onChange={() => {
                            setFieldValue('is_equipment_ready', false);
                            setFieldValue('is_equipment_not_ready', true);
                          }}
                          isInvalid={touched.is_equipment_not_ready && !!errors.is_equipment_not_ready}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">{errors.is_equipment_ready}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>สรุปความพร้อม</Form.Label>
                      <div>
                        <Form.Check
                          id="is_job_accepted"
                          inline
                          type="radio"
                          name="is_job_accepted"
                          label="รับงาน"
                          checked={values.is_job_accepted}
                          onChange={() => {
                            setFieldValue('is_job_accepted', true);
                            setFieldValue('is_job_rejected', false);
                          }}
                          isInvalid={touched.is_job_accepted && !!errors.is_job_accepted}
                        />
                        <Form.Check
                          id="is_job_rejected"
                          inline
                          type="radio"
                          name="is_job_rejected"
                          label="ไม่รับงาน"
                          checked={values.is_job_rejected}
                          onChange={() => {
                            setFieldValue('is_job_accepted', false);
                            setFieldValue('is_job_rejected', true);
                          }}
                          isInvalid={touched.is_job_rejected && !!errors.is_job_rejected}
                        />
                      </div>
                      <Form.Control.Feedback type="invalid">{errors.is_job_accepted}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <h6>เปลี่ยนแปลงคำขอ</h6>
                <Row className="ps-4 pe-4">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Check
                        id="has_change_request"
                        type="checkbox"
                        name="has_change_request"
                        label="กรณีเปลี่ยนแปลงคำขอ?"
                        checked={values.has_change_request}
                        onChange={(e) => setFieldValue('has_change_request', e.target.checked)}
                      />
                    </Form.Group>
                  </Col>

                  {values.has_change_request && (
                    <Col md={12}>
                      <Row>
                        <Col md={12} className="mb-3">
                          <Form.Control
                            className="mt-2"
                            as="textarea"
                            name="change_agreement"
                            placeholder="ระบุข้อตกลงการเปลี่ยนแปลง"
                            value={values.change_agreement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.change_agreement && !!errors.change_agreement}
                          />
                          <Form.Control.Feedback type="invalid">{errors.change_agreement}</Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>ผู้ทบทวน</Form.Label>
                            <Form.Control
                              type="text"
                              name="reviewed_by"
                              placeholder="ระบุผู้ทบทวน"
                              value={values.reviewed_by}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.reviewed_by && !!errors.reviewed_by}
                            />
                            <Form.Control.Feedback type="invalid">{errors.reviewed_by}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>วันที่ทบทวน</Form.Label>
                            <TextField
                              fullWidth
                              type="date"
                              name="review_date"
                              value={values.review_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.review_date && !!errors.review_date}
                              helperText={touched.review_date && errors.review_date}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>ผู้อนุมัติ</Form.Label>
                            <Form.Control
                              type="text"
                              name="approved_by"
                              placeholder="ระบุผู้อนุมัติ"
                              value={values.approved_by}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.approved_by && !!errors.approved_by}
                            />
                            <Form.Control.Feedback type="invalid">{errors.approved_by}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>วันที่อนุมัติ</Form.Label>
                            <TextField
                              fullWidth
                              type="date"
                              name="approved_date"
                              value={values.approved_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.approved_date && !!errors.approved_date}
                              helperText={touched.approved_date && errors.approved_date}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  )}
                </Row>
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                {sampleSubmissions.verification_status === 'Yes' && (
                  <Button variant="outline-danger" onClick={handleCancelReview} disabled={isSubmitting}>
                    <i className="feather icon-x-circle" />
                    ยกเลิกการทบทวน
                  </Button>
                )}
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  <i className="feather icon-save" />
                  บันทึกการทบทวน
                </Button>
                <Button variant="danger" onClick={() => setShow(false)} disabled={isSubmitting}>
                  <i className="feather icon-corner-up-left" />
                  ปิด
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ReviewModal;
