// src/components/EmailForm.jsx
import React, { useState, useEffect } from 'react';
import { Button, Modal, Card, Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { postSendEmail } from 'services/_api/emailRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import { getUserByID } from 'services/_api/usersRequest';

const EmailForm = ({ buttonTitle = 'ส่งอีเมล', icon, serviceData }) => {
  const [showModal, setShowModal] = useState(false);
  console.log('serviceData:', serviceData);
  const [formData, setFormData] = useState({
    toEmail: serviceData.sr_pdf_email,
    subject: '',
    message: '',
    username: serviceData.customer_name,
    files: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  // ดึง authToken และ username เมื่อ component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        console.log('token:', token);
        if (token) {
          const response = await getUserByID(serviceData.user_id);

          console.log('response:', response);
          if (response && response.user_id) {
            setFormData((prev) => ({
              ...prev,
              username: response.first_name + ' ' + response.last_name
            }));
          } else {
            setError('ไม่สามารถดึงข้อมูลผู้ใช้ได้');
          }
        } else {
          setError('กรุณาเข้าสู่ระบบก่อนส่งอีเมล');
        }
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้: ' + err.message);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Validate file size (ตัวอย่าง: ไม่เกิน 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > maxSize) {
          setError('ไฟล์ขนาดเกิน 10MB ไม่สามารถอัปโหลดได้');
          return;
        }
      }
    }
    setFormData((prev) => ({
      ...prev,
      files: files
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.toEmail)) {
      setError('กรุณากรอกอีเมลให้ถูกต้อง');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('กรุณากรอกหัวข้อ');
      return false;
    }
    if (!formData.message.trim()) {
      setError('กรุณากรอกรายละเอียด');
      return false;
    }
    if (!formData.username) {
      setError('ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบ');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    setError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      let filePaths = [];

      if (formData.files && formData.files.length > 0) {
        const filesArray = Array.from(formData.files);
        const uploadResults = await handleUploadFiles(filesArray, 'email-attachments', `${formData.username}-${Date.now()}`);

        if (!uploadResults || uploadResults.length === 0) {
          throw new Error('การอัปโหลดไฟล์ล้มเหลว');
        }

        console.log('uploadResults:', uploadResults);
        filePaths = uploadResults.map((result) => result.fileName);
      }

      const emailData = {
        toEmail: formData.toEmail,
        subject: formData.subject,
        message: formData.message,
        username: formData.username,
        filePath: filePaths.length > 0 ? filePaths[0] : null
      };

      console.log('Email Data to Send:', emailData);

      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('ไม่พบ token กรุณาเข้าสู่ระบบ');
      }

      const response = await postSendEmail(emailData, token);

      toast.success(response.message);
      console.log('postSendEmail:', response);

      setFormData({
        toEmail: '',
        subject: '',
        message: '',
        username: formData.username, // รักษาค่า username เดิม
        files: null
      });
      setShowModal(false);
      setValidated(false);
    } catch (err) {
      // setError(err.message || 'เกิดข้อผิดพลาดในการส่งอีเมล');
      toast.error(response.message || 'เกิดข้อผิดพลาดในการส่งอีเมล');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)} disabled={!formData.username || loading}>
        {icon && icon}
        {buttonTitle}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <h5 className="mb-0">{buttonTitle}</h5>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>อีเมลผู้รับ</Form.Label>
                      <Form.Control
                        type="email"
                        name="toEmail"
                        value={formData.toEmail}
                        onChange={handleChange}
                        placeholder="เช่น email@gmail.com"
                        required
                        isInvalid={validated && !formData.toEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
                      />
                      <Form.Control.Feedback type="invalid">กรุณากรอกอีเมลให้ถูกต้อง</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>หัวข้อ</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="หัวข้ออีเมล"
                        required
                        isInvalid={validated && !formData.subject.trim()}
                      />
                      <Form.Control.Feedback type="invalid">กรุณากรอกหัวข้อ</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>รายละเอียด</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="พิมพ์ข้อความของคุณที่นี่"
                        required
                        isInvalid={validated && !formData.message.trim()}
                      />
                      <Form.Control.Feedback type="invalid">กรุณากรอกรายละเอียด</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>แนบไฟล์หรือรูปภาพ</Form.Label>
                      <Form.Control type="file" multiple onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                      <Form.Text className="text-muted">รองรับไฟล์ PDF และรูปภาพ (JPG, PNG) ขนาดไม่เกิน 10MB</Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center" style={{ flexShrink: 0 }}>
          <Button variant="primary" type="submit" onClick={handleSubmit} disabled={loading}>
            {loading ? (
              'กำลังส่ง...'
            ) : (
              <>
                <i className="feather icon-mail" /> ส่งอีเมล
              </>
            )}
          </Button>
          <Button variant="danger" onClick={() => setShowModal(false)} disabled={loading}>
            <i className="feather icon-corner-up-left" /> ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmailForm;
