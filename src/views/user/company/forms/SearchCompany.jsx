import React, { useCallback, useState } from 'react';
import { Row, Col, Button, Form, Alert, Card, Table } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const SearchCompany = () => {
  const [searchTerm, setSearchTerm] = useState('1234567890123');
  const [company, setCompany] = useState(null);
  const [error, setError] = useState('');

  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // เก็บไฟล์ที่อัปโหลดใน state
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*,application/pdf', // กำหนดประเภทไฟล์ที่ยอมรับ
    maxSize: 5 * 1024 * 1024 // จำกัดขนาดไฟล์ 5MB
  });

  const handleUpload = () => {
    alert(`Uploading ${files.length} file(s)!`);
    // สามารถนำไฟล์ใน `files` ไปส่งต่อ API ได้
  };
  // ตัวอย่างข้อมูลบริษัท
  const companies = [
    {
      id: 1,
      name: 'บริษัท เอ บี ซี จำกัด',
      address: '123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ',
      phone: '02-123-4567',
      taxId: '1234567890123',
      tax_address: '123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ',
      documents: ['เอกสารตัวอย่าง 1.pdf', 'เอกสารตัวอย่าง 2.pdf'],
      status: 'อนุมัติ',
      user_id: null,
      full_name: 'นายสมชาย ใจดี',
      credits: 'Advance Invoice',
      email: 'somchai@example.com',
      user_phone: '081-234-5678'
    },
    {
      id: 2,
      name: 'บริษัท ดี อี เอฟ จำกัด',
      address: '456 ถนนรอง แขวงรอง เขตรอง กรุงเทพฯ',
      tax_address: '123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ',
      phone: '02-987-6543',
      taxId: '9876543210987',
      documents: ['เอกสารตัวอย่าง A.pdf', 'เอกสารตัวอย่าง B.pdf'],
      status: 'รออนุมัติ',
      user_id: 1001,
      credits: 'Advance Invoice',
      full_name: 'นายสมชาย ใจดี',
      email: 'somchai@example.com',
      user_phone: '081-234-5678'
    }
  ];

  const handleSearch = () => {
    const foundCompany = companies.find((c) => c.taxId === searchTerm);
    if (foundCompany) {
      setCompany(foundCompany);
      setError('');
    } else {
      setCompany(null);
      setError('ไม่พบข้อมูลบริษัทที่ค้นหา');
    }
  };

  const handleAddCompany = () => {};

  return (
    <>
      <Card>
        <Card.Header>
          <h5>ค้นหาข้อมูลบริษัท</h5>
        </Card.Header>
        <Card.Body>
          <Row className="mb-4">
            <Col md={11} sm={12}>
              <Form.Control
                type="text"
                placeholder="กรอกเลขที่ผู้เสียภาษี (Tax ID)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={1} sm={12} className="text-md-start text-sm-end mt-sm-2 mt-md-0">
              <Button variant="primary" onClick={handleSearch}>
                <i className="feather icon-search" />
                ค้นหา
              </Button>
            </Col>
          </Row>

          {error && <Alert variant="danger">{error}</Alert>}

          {company && (
            <div>
              <h5>ข้อมูลบริษัท</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>เลขที่ผู้เสียภาษี</th>
                    <th>ชื่อบริษัท</th>
                    <th>ที่อยู่</th>
                    <th>เบอร์โทร</th>
                    <th>ที่อยู่จัดส่งเอกสาร</th>
                    <th>เงื่อนไขพิเศษ</th>
                    <th>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{company.taxId}</td>
                    <td>{company.name}</td>
                    <td>{company.address}</td>
                    <td>{company.phone}</td>
                    <td>{company.tax_address}</td>
                    <td>{company.credits}</td>
                    <td>{company.status}</td>
                  </tr>
                </tbody>
              </Table>
              <h6 className="mt-sm-4">อัพโหลดเอกสาร : </h6>
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
                {files.map((file, index) => (
                  <li key={index}>
                    <i className="feather icon-file" style={{ marginRight: 12 }} />
                    {file.name}
                  </li>
                ))}
              </ul>
              {/* {files.length > 0 && (
                <Button variant="success" onClick={handleUpload} className="mt-3">
                  Upload
                </Button>
              )} */}

              {company.user_id === null ? (
                <Button variant="success" className="mt-3" disabled={files.length === 0} onClick={handleAddCompany}>
                  ลงทะเบียนบริษัท
                </Button>
              ) : (
                <Button variant="secondary" className="mt-3" disabled>
                  บริษัทนี้ถูกลงทะเบียนแล้ว
                </Button>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SearchCompany;
