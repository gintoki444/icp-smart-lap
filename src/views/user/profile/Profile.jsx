// Profile.jsx
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { authenUser } from 'services/_api/authentication';
import { getUserByID, putUser } from 'services/_api/usersRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import FirebaseImage from 'components/Firebase/FirebaseImage';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        getUserByID(response.user.user_id).then((response) => {
          console.log('getUserByID:', response);
          setProfile(response);
        });
      });
    }
  }, []);

  const initialValues = {
    id: profile?.user_id || '',
    username: profile?.username || '',
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    role_name: profile?.role_name || '',
    profile_picture: profile?.profile_picture || '',
    new_profile_picture: null
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().min(3, 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
    last_name: Yup.string().min(3, 'นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกนามสกุล'),
    email: Yup.string().email('อีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
      .required('กรุณากรอกเบอร์โทรศัพท์')
  });

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      let updatedValues = { ...values };
      console.log('files:', files);

      // Handle image upload if a new image is selected
      if (files) {
        const uploadResult = await handleUploadFiles([files], 'profile_img', 'profile_');
        console.log('uploadResult:', uploadResult);
        if (uploadResult && uploadResult[0]?.fileName) {
          updatedValues.profile_picture = uploadResult[0].fileName;
        } else {
          throw new Error('ไม่สามารถอัปโหลดรูปภาพได้');
        }
      }

      // Remove fields that might not be updatable or necessary
      delete updatedValues.username;
      delete updatedValues.email;
      delete updatedValues.new_profile_picture;
      delete updatedValues.role_name;
      delete updatedValues.id;

      console.log('updatedValues:', updatedValues);
      const response = await putUser(updatedValues, values.id);
      if (response) {
        toast.success('แก้ไขข้อมูลโปรไฟล์สำเร็จ!', { autoClose: 3000 });
        setProfile({ ...profile, ...updatedValues });
        setIsEditing(false);
        setPreviewImage(null); // Clear preview after successful upload
        setFiles(null); // Clear files after successful upload
      }
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      toast.error(`แก้ไขข้อมูลไม่สำเร็จ: ${err.message}`, { autoClose: 3000 });
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

  const handlePasswordChange = () => {
    // Placeholder for password change logic
    toast.info('ฟังก์ชันเปลี่ยนรหัสผ่านยังไม่พร้อมใช้งาน', { autoClose: 3000 });
  };

  const handleSetEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setPreviewImage(null); // Clear preview on cancel
    setFiles(null); // Clear files on cancel
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>
          <h5>ข้อมูลโปรไฟล์</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* Left Column: Photo and Password Change */}
            <Col md={4}>
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block">
                  {isEditing && previewImage ? (
                    <Image
                      src={previewImage}
                      alt="Profile Preview"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  ) : profile?.profile_picture ? (
                    <FirebaseImage
                      imagePath={profile.profile_picture}
                      alt="Profile"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      thumbnail={true}
                    />
                  ) : (
                    <Image
                      src="https://placehold.co/150"
                      alt="Profile"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  )}
                </div>
                {isEditing ? (
                  <Form.Group>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                          setFiles(file);
                          setPreviewImage(URL.createObjectURL(file));
                        }
                      }}
                      className="mt-2"
                    />
                  </Form.Group>
                ) : (
                  <div>
                    <Button variant="outline-primary" className="mt-2" onClick={handleSetEdit}>
                      อัปโหลดรูปภาพ
                    </Button>
                  </div>
                )}
              </div>
            </Col>

            {/* Right Column: Profile and Contact Info */}
            <Col md={8}>
              <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={12}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first_name"
                                  value={values.first_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled={!isEditing}
                                  isInvalid={touched.first_name && !!errors.first_name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>นามสกุล</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last_name"
                                  value={values.last_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled={!isEditing}
                                  isInvalid={touched.last_name && !!errors.last_name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>อีเมล</Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled={true} // Email is not editable
                                  isInvalid={touched.email && !!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>บทบาท</Form.Label>
                                <Form.Control type="text" value={values.role_name} disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="phone"
                                  value={values.phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled={!isEditing}
                                  isInvalid={touched.phone && !!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>

                          {isEditing && (
                            <div className="mt-4">
                              <Button variant="primary" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                ) : (
                                  'บันทึก'
                                )}
                              </Button>
                              <Button variant="danger" className="ms-2" type="button" onClick={handleCancelEdit}>
                                ยกเลิก
                              </Button>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Form>

                    {/* Move the "แก้ไข" button outside the Form */}
                    {!isEditing && (
                      <div className="mt-4">
                        <Button variant="primary" type="button" onClick={handleSetEdit}>
                          <FiEdit style={{ marginRight: 8 }} />
                          แก้ไข
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </Formik>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
