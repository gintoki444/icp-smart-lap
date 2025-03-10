import React from 'react';
import { Card, Row, Col, Form, Button, Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { deleteFileFromFirebase } from 'services/_api/uploadFileRequest';
import { deleteServiceRequestDocuments } from 'services/_api/serviceRequest';

const Step3 = ({ values, errors, touched, handleChange, handleBlur, setFieldValue, companyData }) => {
  const company = companyData.find((x) => x.company_id === values.company_id);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const currentFiles = Array.isArray(values.files) ? values.files : [];
      setFieldValue('files', [...currentFiles, ...acceptedFiles]);
    },
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf']
    }
  });

  const handleRemoveFile = async (indexToRemove) => {
    const fileToRemove = values.files[indexToRemove];
    const isConfirmed = window.confirm(
      'คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "' + fileToRemove.name + '"? การลบนี้จะลบไฟล์ออกจากระบบทันทีและไม่สามารถกู้คืนได้'
    );

    if (isConfirmed) {
      try {
        // ถ้ามี document_id (ไฟล์ที่อัปโหลดแล้ว) ลบจาก Firebase และ DB
        if (fileToRemove.document_id) {
          await deleteFileFromFirebase(fileToRemove.path);
          await deleteServiceRequestDocuments(fileToRemove.document_id);
          console.log(`Deleted file ID: ${fileToRemove.document_id} from Firebase and DB`);
        }
        // อัปเดต state โดยลบไฟล์ออกจาก array
        const updatedFiles = values.files.filter((_, index) => index !== indexToRemove);
        setFieldValue('files', updatedFiles);
      } catch (error) {
        console.error('Error removing file:', error);
        alert('เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่');
      }
    }
  };
  return (
    <Row>
      <Col>
        <Card className="m-0">
          <Card.Body className="pb-2 pt-4">
            <Row>
              <Col md={12}>
                <h6 className="mb-2">ข้อมูลเอกสาร</h6>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>อัพโหลดเอกสาร :</Form.Label>
                  <div
                    {...getRootProps()}
                    style={{
                      border: '2px dashed #04a9f5',
                      borderRadius: '8px',
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: isDragActive ? '#e6f7ff' : '#f8f9fa'
                    }}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p style={{ marginBottom: 0 }}>Drop your files here...</p>
                    ) : (
                      <p style={{ marginBottom: 0 }}>Drag and drop files here, or click to select files</p>
                    )}
                  </div>
                  <ul className="mt-3">
                    {values.files &&
                      values.files.map((file, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                          <i className="feather icon-file" style={{ marginRight: 12 }} />
                          {file.name}
                          <Button
                            variant="link"
                            size="sm"
                            className="text-danger"
                            style={{ marginLeft: 10 }}
                            onClick={() => handleRemoveFile(index)}
                          >
                            <i className="feather icon-trash-2" />
                          </Button>
                        </li>
                      ))}
                  </ul>
                  {touched.files && errors.files && (
                    <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                      {errors.files}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Step3;
