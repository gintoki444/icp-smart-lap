import React, { useState } from 'react';
import { Row, Col, Button, Form, Alert, Card, Table } from 'react-bootstrap';

const SearchCompany = () => {
  const [searchTerm, setSearchTerm] = useState('1234567890123');
  const [company, setCompany] = useState(null);
  const [error, setError] = useState('');

  // ตัวอย่างข้อมูลบริษัท
  const companies = [
    {
      id: 1,
      name: 'บริษัท เอ บี ซี จำกัด',
      address: '123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ',
      phone: '02-123-4567',
      taxId: '1234567890123',
      documents: ['เอกสารตัวอย่าง 1.pdf', 'เอกสารตัวอย่าง 2.pdf'],
      status: 'อนุมัติ',
      user_id: null,
      full_name: '',
      email: '',
      user_phone: ''
    },
    {
      id: 2,
      name: 'บริษัท ดี อี เอฟ จำกัด',
      address: '456 ถนนรอง แขวงรอง เขตรอง กรุงเทพฯ',
      phone: '02-987-6543',
      taxId: '9876543210987',
      documents: ['เอกสารตัวอย่าง A.pdf', 'เอกสารตัวอย่าง B.pdf'],
      status: 'รออนุมัติ',
      user_id: 1001,
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ชื่อบริษัท</th>
                    <th>ที่อยู่</th>
                    <th>เบอร์โทร</th>
                    <th>เลขที่ผู้เสียภาษี</th>
                    <th>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{company.name}</td>
                    <td>{company.address}</td>
                    <td>{company.phone}</td>
                    <td>{company.taxId}</td>
                    <td>{company.status}</td>
                  </tr>
                </tbody>
              </Table>

              {company.user_id === null ? (
                <Button variant="success" className="mt-3" onClick={handleAddCompany}>
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
