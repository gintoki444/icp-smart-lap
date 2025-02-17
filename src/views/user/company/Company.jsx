import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';

const Company = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([
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
    }
    // {
    //   id: 2,
    //   name: 'บริษัท ดี อี เอฟ จำกัด',
    //   address: '456 ถนนรอง แขวงรอง เขตรอง กรุงเทพฯ',
    //   phone: '02-987-6543',
    //   taxId: '9876543210987',
    //   documents: ['เอกสารตัวอย่าง A.pdf', 'เอกสารตัวอย่าง B.pdf'],
    //   status: 'รออนุมัติ'
    // }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: '',
    address: '',
    phone: '',
    taxId: '',
    documents: [],
    status: 'รออนุมัติ'
  });

  const handleAddCompany = () => {
    setCompanies([...companies, { id: Date.now(), ...newCompany, documents: newCompany.documents.split(', ') }]);
    setShowModal(false);
    setNewCompany({ name: '', address: '', phone: '', taxId: '', documents: [], status: 'รออนุมัติ' });
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  const handleEditCompany = (id) => {
    alert('แก้ไขข้อมูลบริษัท ID: ' + id);
  };

  return (
    <Row className="">
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">รายการข้อมูลบริษัท</Card.Title>
              <span className="d-block m-t-5">
                บริษัทที่ผู้ใช้งานดูแล
                {/* <code>Table</code> component */}
              </span>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={() => navigate('/user/company/select')}>
                <i className="feather icon-plus-circle" />
                เพิ่ม
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>เลขที่ผู้เสียภาษี</th>
                <th>ชื่อบริษัท</th>
                <th>ที่อยู่บริษัท</th>
                <th>เบอร์โทร</th>
                <th>ที่อยู่จัดส่งเอกสาร</th>
                <th>เงื่อนไขพิเศษ</th>
                <th>เอกสาร</th>
                <th className="text-center">สถานะการอนุมัติ</th>
                <th className="text-center">การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={company.id}>
                  <td>{index + 1}</td>
                  <td>{company.name}</td>
                  <td>{company.taxId}</td>
                  <td>{company.address}</td>
                  <td>{company.phone}</td>
                  <td>{company.tax_address}</td>
                  <td>{company.credits}</td>
                  <td>
                    {company.documents.map((doc, idx) => (
                      <div key={idx}>{doc}</div>
                    ))}
                  </td>
                  <td className="text-center">{company.status}</td>
                  <td className="text-center">
                    <Button variant="info" size="sm" className="me-2" onClick={() => handleEditCompany(company.id)}>
                      <i className="feather icon-edit" />
                      แก้ไข
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteCompany(company.id)}>
                      <i className="feather icon-trash-2" />
                      ลบ
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบริษัทใหม่</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ชื่อบริษัท</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อบริษัท"
                value={newCompany.name}
                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ที่อยู่บริษัท</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกที่อยู่บริษัท"
                value={newCompany.address}
                onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เบอร์โทร</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกเบอร์โทร"
                value={newCompany.phone}
                onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เลขที่ผู้เสียภาษี</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกเลขที่ผู้เสียภาษี"
                value={newCompany.taxId}
                onChange={(e) => setNewCompany({ ...newCompany, taxId: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เอกสาร (คั่นด้วย ", ")</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อเอกสาร"
                value={newCompany.documents}
                onChange={(e) => setNewCompany({ ...newCompany, documents: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={handleAddCompany}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Company;
