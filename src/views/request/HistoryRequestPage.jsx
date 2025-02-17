import React from 'react';
import { Card, Table, Badge, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HistoryRequestPage = () => {
  const navigate = useNavigate();

  // ตัวอย่างข้อมูลคำขอรับบริการ
  const requests = [
    {
      customerCode: '109',
      sampleNo: '24111203',
      typeRequest: 'ส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย',
      sampleCode: '-',
      sampleCout: 2,
      description: 'ธาตุอาหารหลัก, Zn',
      sampleAppearance: 'เม็ดสีแดง',
      requestNo: 'RC24-134',
      status: 'เสร็จสิ้น',
      create_date: '21/12/2024',
      start_date: '31/12/2024',
      end_date: '03/02/2025',
      currentStep: 'เสร็จสิ้น'
    },
    {
      customerCode: '111',
      sampleNo: '24111205',
      typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
      sampleCout: 3,
      sampleCode: '-',
      description: 'ธาตุอาหารเสริม, Zn',
      sampleAppearance: 'เม็ดสีขาว',
      requestNo: 'RC24-136',
      status: 'เสร็จสิ้น',
      create_date: '21/12/2024',
      start_date: '31/12/2024',
      end_date: '03/02/2025',
      currentStep: 'เสร็จสิ้น'
    },
    {
      customerCode: '110',
      sampleNo: '24111204',
      typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
      sampleCode: '-',
      sampleCout: 1,
      description: 'ธาตุอาหารรอง, Fe',
      sampleAppearance: 'ผงละเอียด',
      requestNo: 'RC24-135',
      status: 'เสร็จสิ้น',
      create_date: '21/12/2024',
      start_date: '31/12/2024',
      end_date: '03/02/2025',
      currentStep: 'เสร็จสิ้น'
    }
  ];

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">ประวัติคำขอรับบริการ</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="m-0">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">วันที่สร้าง</th>
                <th className="text-center">เลขที่คำขอบริการ</th>
                <th>ประเภทคำขอ</th>
                <th className="text-center">จำนวนตัวอย่าง</th>
                {/* <th>รายละเอียด</th> */}
                {/* <th>ลักษณะตัวอย่าง</th> */}
                <th className="text-center">วันที่เริ่มทดสอบ</th>
                <th className="text-center">วันที่สิ้นสุด</th>
                <th className="text-center">สถานะปัจจุบัน</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{request.create_date}</td>
                  <td className="text-center">{request.requestNo}</td>
                  <td>{request.typeRequest}</td>
                  <td className="text-center">{request.sampleCout}</td>
                  {/* <td style={{ textAlign: 'left' }}>{request.description}</td> */}
                  {/* <td style={{ textAlign: 'left' }}>{request.sampleAppearance}</td> */}
                  <td className="text-center">{request.start_date}</td>
                  <td className="text-center">{request.end_date}</td>
                  <td className="text-center">
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.currentStep}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => {
                        navigate('/user/request/detial');
                      }}
                    >
                      <i className="feather icon-file-text m-0" />
                    </Button>
                    {request.status !== 'เสร็จสิ้น' && (
                      <Button variant="info" size="sm" className="me-2" onClick={() => {}}>
                        <i className="feather icon-edit m-0" />
                      </Button>
                    )}
                    {request.status !== 'เสร็จสิ้น' && (
                      <Button variant="danger" size="sm" onClick={() => {}}>
                        <i className="feather icon-trash-2 m-0" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default HistoryRequestPage;
