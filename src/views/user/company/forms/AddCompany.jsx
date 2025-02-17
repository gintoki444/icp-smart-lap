import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';

function AddCompany() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([
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
                เพิ่มข้อมูลบริษัท
                {/* <code>Table</code> component */}
              </span>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
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
              <Form.Label>เลขที่ผู้เสียภาษี</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกเลขที่ผู้เสียภาษี"
                value={newCompany.taxId}
                onChange={(e) => setNewCompany({ ...newCompany, taxId: e.target.value })}
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
              <Form.Label>เอกสาร (คั่นด้วย ", ")</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อเอกสาร"
                value={newCompany.documents}
                onChange={(e) => setNewCompany({ ...newCompany, documents: e.target.value })}
              />
            </Form.Group>
          </Form>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleAddCompany}>
                <i className="feather icon-save" />
                บันทึก
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  navigate('/user/company/select');
                }}
              >
                <i className="feather icon-corner-up-left" />
                ย้อนกลับ
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}
export default AddCompany;
