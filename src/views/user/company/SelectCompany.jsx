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
              <span className="d-block m-t-5">ลูกค้าเคยลงทะเบียนขอรับบริการในนามบริษัทหรือไม่</span>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row className="justify-content-center text-center">
            <Col md={4} sm={12} className="mb-3">
              <Button
                variant="outline-primary"
                className="w-100 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => navigate('/company/search')}
              >
                <FaBuilding size={40} className="mb-2" />
                เคยลงทะเบียนบริษัท / ขอรับบริการ
              </Button>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Button
                variant="outline-success"
                className="w-100 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => navigate('/company/add')}
              >
                <FaPlusCircle size={40} className="mb-2" />
                ลงทะเบียนบริษัทใหม่
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
