import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { IoBackspace, IoSearch } from 'react-icons/io5';
// import { Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center text-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="display-3 fw-bold text-danger">404</h1>
            <h4 className="mb-3">Oops! หน้านี้ไม่มีอยู่</h4>
            <p className="text-muted">ขออภัย! หน้าที่คุณกำลังค้นหาไม่มีอยู่ในระบบ</p>

            {/* <InputGroup className="mb-3">
              <InputGroup.Text>
                <IoSearch />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="ค้นหาสิ่งที่ต้องการ..." />
              <Button variant="info">ค้นหา</Button>
            </InputGroup> */}

            <Button variant="primary" onClick={() => navigate('/')} className="mt-2">
              <IoBackspace /> กลับไปหน้าแรก
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page404;
