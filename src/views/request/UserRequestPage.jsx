import React from 'react';
import { Card, Table, Badge, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserResultPage = () => {
  const navigate = useNavigate();

  // ตัวอย่างข้อมูลคำขอรับบริการ
  const requests = [
    {
      customerCode: '109',
      sampleNo: '24111203',
      typeRequest: 'ส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย',
      sampleCode: '-',
      description: 'ธาตุอาหารหลัก, Zn',
      sampleAppearance: 'เม็ดสีแดง',
      requestNo: 'RC24-134',
      status: 'กำลังดำเนินการ',
      currentStep: 'ตรวจสอบความถูกต้อง'
    },
    {
      customerCode: '110',
      sampleNo: '24111204',
      typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
      sampleCode: '-',
      description: 'ธาตุอาหารรอง, Fe',
      sampleAppearance: 'ผงละเอียด',
      requestNo: 'RC24-135',
      status: 'เสร็จสิ้น',
      currentStep: 'ออก Invoice'
    },
    {
      customerCode: '111',
      sampleNo: '24111205',
      typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
      sampleCode: '-',
      description: 'ธาตุอาหารเสริม, Zn',
      sampleAppearance: 'เม็ดสีขาว',
      requestNo: 'RC24-136',
      status: 'รอการดำเนินการ',
      currentStep: 'กรอกแบบฟอร์มคำขอรับบริการ'
    }
  ];

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">รายการคำขอรับบริการ</Card.Title>
            </Col>
            <Col className="text-end">
              <Button variant="success" onClick={() => navigate('/user/request/add')}>
                <i className="feather icon-plus-circle" />
                เพิ่ม
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">เลขที่คำขอบริการ</th>
                <th>ประเภทคำขอ</th>
                <th className="text-center">หมายเลขตัวอย่าง</th>
                <th>รายละเอียด</th>
                <th>ลักษณะตัวอย่าง</th>
                {/* <th className="text-center">หมายเลขคำขอ</th> */}
                {/* <th className="text-center">สถานะคำขอ</th> */}
                <th className="text-center">กรอกแบบฟอร์ม</th>
                <th className="text-center">ตรวจสอบข้อมูล</th>
                <th className="text-center">รับตัวอย่าง</th>
                <th className="text-center">ออกใบเสนอราคา</th>
                <th className="text-center">ออก In voice</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{request.requestNo}</td>
                  <td>{request.typeRequest}</td>
                  <td className="text-center">{request.sampleNo}</td>
                  <td style={{ textAlign: 'left' }}>{request.description}</td>
                  <td style={{ textAlign: 'left' }}>{request.sampleAppearance}</td>
                  {/* <td className="text-center">{request.requestNo}</td> */}
                  {/* <td style={{ textAlign: 'center' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td> */}
                  <td style={{ textAlign: 'left' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <Badge
                      className="p-2"
                      style={{ fontWeight: 'normal' }}
                      bg={request.status === 'กำลังดำเนินการ' ? 'warning' : request.status === 'เสร็จสิ้น' ? 'success' : 'secondary'}
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td className="">
                    <Button variant="primary" size="sm" className="me-2" onClick={() => {}}>
                      <i className="feather icon-file-text" />
                      รายละเอียด
                    </Button>
                    {request.status !== 'เสร็จสิ้น' && (
                      <Button variant="info" size="sm" className="me-2" onClick={() => {}}>
                        <i className="feather icon-edit" />
                        แก้ไข
                      </Button>
                    )}
                    {request.status !== 'เสร็จสิ้น' && (
                      <Button variant="danger" size="sm" onClick={() => {}}>
                        <i className="feather icon-trash-2" />
                        ลบ
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

export default UserResultPage;
