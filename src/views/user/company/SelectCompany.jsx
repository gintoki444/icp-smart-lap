import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { FaBuilding, FaPlusCircle } from 'react-icons/fa';

function SelectCompany() {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">เพิ่มข้อมูลลูกค้า/บริษัท</Card.Title>
              <span className="d-block mt-2">
                <span style={{ fontSize: 16, fontWeight: 'bold' }}>โปรดเลือกประเภทของลูกค้าเพื่อดำเนินการต่อ</span>
                <br />
                <span style={{ fontSize: 14 }}>
                  ระบบจำเป็นต้องทราบว่าลูกค้าเคยลงทะเบียนขอรับบริการในนามบริษัทมาก่อนหรือไม่
                  เพื่อใช้ในการดึงข้อมูลเดิมหรือดำเนินการลงทะเบียนใหม่
                </span>
              </span>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row className="justify-content-start text-center">
            <Col md={4} sm={12} className="mb-3">
              <Button
                variant="outline-primary"
                className="w-100 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => navigate('/company/search')}
              >
                <FaBuilding size={40} className="mb-2" />
                <strong style={{ fontSize: 16 }}>ลูกค้าเคยลงทะเบียนบริษัท / ขอรับบริการแล้ว</strong>
              </Button>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Button
                variant="outline-success"
                className="w-100 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => navigate('/company/add')}
              >
                <FaPlusCircle size={40} className="mb-2" />
                <strong style={{ fontSize: 16 }}>ลูกค้ายังไม่เคยลงทะเบียน / ลงทะเบียนบริษัทใหม่</strong>
              </Button>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Button
                variant="danger"
                onClick={() => {
                  navigate('/company/');
                }}
              >
                <i className="feather icon-corner-up-left" />
                ย้อนกลับ
              </Button>
            </Col>
          </Row> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default SelectCompany;
