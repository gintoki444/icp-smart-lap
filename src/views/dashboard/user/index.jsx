import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { TbTestPipe, TbTestPipeOff } from 'react-icons/tb';
import { GrDocumentTest } from 'react-icons/gr';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import TestResultsDashboard from './TestResults';
import { getAllServiceRequestByUser } from 'services/_api/serviceRequest';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';

// กำหนด dashSalesData เป็น state เพื่อให้สามารถอัปเดตค่าได้
const initialDashSalesData = [
  {
    title: 'จำนวนคำขอใช้บริการทั้งหมด',
    amount: '0',
    unit: 'รายการ',
    icon: '',
    iconNew: <GrDocumentTest className="text-c-green" style={{ marginRight: 12 }} />,
    value: 0,
    class: 'progress-c-theme'
  },
  {
    title: 'จำนวนการทดสอบกำลังทดสอบ',
    amount: '0',
    unit: 'รายการ',
    icon: '',
    iconNew: <TbTestPipe className="text-c-blue" style={{ marginRight: 12 }} />,
    value: 0,
    class: 'progress-c-theme2'
  },
  {
    title: 'จำนวนการทดสอบที่ยังไม่ทดสอบ',
    amount: '0',
    unit: 'รายการ',
    icon: '',
    iconNew: <TbTestPipeOff className="text-c-red" style={{ marginRight: 12 }} />,
    value: 0,
    color: 'progress-c-theme'
  }
];

const UserDashDefault = () => {
  const [user, setUser] = useState(null);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dashSalesData, setDashSalesData] = useState(initialDashSalesData); // ใช้ state สำหรับ dashSalesData
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setLoading(true);
      authenUser(token)
        .then((response) => {
          setUser(response.user);
          getServiceRequests(response.user.user_id);
        })
        .catch((error) => {
          toast.error('ไม่สามารถตรวจสอบผู้ใช้ได้');
          console.error(error);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const getServiceRequests = async (id) => {
    setLoading(true);
    try {
      const result = await getAllServiceRequestByUser(id);
      if (result.success) {
        setServiceRequests(result.data);
      } else {
        setServiceRequests([]);
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูลคำขอ');
      console.error(error);
      setServiceRequests([]);
    } finally {
      setLoading(false);
    }
  };

  // คำนวณจำนวนสำหรับ dashSalesData เมื่อ serviceRequests เปลี่ยนแปลง
  useEffect(() => {
    if (serviceRequests.length > 0) {
      // จำนวนคำขอใช้บริการทั้งหมด
      const totalRequests = serviceRequests.length;

      // จำนวนการทดสอบกำลังทดสอบ (status: "pending")
      const pendingTests = serviceRequests.reduce((acc, request) => {
        const submissions = request.sample_submissions || [];
        const pendingCount = submissions.reduce((subAcc, submission) => {
          const details = submission.sample_submission_details || [];
          return subAcc + details.filter((detail) => detail.status === 'pending').length;
        }, 0);
        return acc + pendingCount;
      }, 0);

      // จำนวนการทดสอบที่ยังไม่ทดสอบ (status: "not-start")
      const notStartedTests = serviceRequests.reduce((acc, request) => {
        const submissions = request.sample_submissions || [];
        const notStartedCount = submissions.reduce((subAcc, submission) => {
          const details = submission.sample_submission_details || [];
          return subAcc + details.filter((detail) => detail.status === 'not-start').length;
        }, 0);
        return acc + notStartedCount;
      }, 0);

      // อัปเดต dashSalesData
      const updatedDashSalesData = [
        {
          ...initialDashSalesData[0],
          amount: totalRequests.toString(),
          value: totalRequests > 0 ? (totalRequests / totalRequests) * 100 : 0 // คำนวณเปอร์เซ็นต์ (สมมติให้เต็ม 100% ถ้ามีอย่างน้อย 1 รายการ)
        },
        {
          ...initialDashSalesData[1],
          amount: pendingTests.toString(),
          value: pendingTests > 0 ? (pendingTests / (pendingTests + notStartedTests || 1)) * 100 : 0 // คำนวณเปอร์เซ็นต์จากจำนวนที่กำลังทดสอบ
        },
        {
          ...initialDashSalesData[2],
          amount: notStartedTests.toString(),
          value: notStartedTests > 0 ? (notStartedTests / (pendingTests + notStartedTests || 1)) * 100 : 0 // คำนวณเปอร์เซ็นต์จากจำนวนที่ยังไม่ทดสอบ
        }
      ];

      setDashSalesData(updatedDashSalesData);
    } else {
      // ถ้าไม่มี serviceRequests ให้รีเซ็ตค่า
      setDashSalesData(initialDashSalesData);
    }
  }, [serviceRequests]);

  // ตรวจสอบคำขอที่มี status_tracking === "requested"
  const requestedItems = serviceRequests.filter((request) => request.status_tracking === 'requested');

  return (
    <React.Fragment>
      {/* แสดง Alert ถ้ามีคำขอที่ status_tracking === "requested" */}
      {requestedItems.length > 0 && (
        <>
          {/* <Alert variant="warning" className="mb-4">
            <Alert.Heading>
              <h5>รอจัดส่งตัวอย่าง</h5>
            </Alert.Heading>
            <p>คุณมีคำขอที่รอจัดส่งตัวอย่าง {requestedItems.length} รายการ กรุณาดำเนินการจัดส่งตัวอย่างเพื่อให้การทดสอบดำเนินการต่อไป</p>
            <hr />
            <ul className="mb-0">
              {requestedItems.map((request) => (
                <li key={request.request_id}>
                  รหัสลูกค้า : {request.company_code || '-'} - {request.customer_name || '-'}
                  {'\u00A0 \u00A0'}
                  <Alert.Link
                    as={Link}
                    to="/request/detial"
                    state={{ id: request.request_id }}
                    onClick={() => navigate('/request/detial', { state: { id: request.request_id } })}
                  >
                    ดูรายละเอียด
                  </Alert.Link>
                </li>
              ))}
            </ul>
          </Alert> */}
          {requestedItems.map((request) => (
            <Alert variant="warning" className="mb-2 rounded-0" style={{ borderLeft: 'solid 3px #FFA500' }}>
              รหัสลูกค้า : {request.company_code || '-'} - {request.customer_name || '-'}{' '}
              <strong style={{ color: '#000000' }}>รอจัดส่งตัวอย่าง</strong>
              {'\u00A0'}
              กรุณาดำเนินการจัดส่งตัวอย่าง
              {'\u00A0 \u00A0'}
              <Alert.Link
                as={Link}
                to="/request/detial"
                state={{ id: request.request_id }}
                className="text-primary"
                onClick={() => navigate('/request/detial', { state: { id: request.request_id } })}
              >
                ดูรายละเอียด
              </Alert.Link>
            </Alert>
          ))}
        </>
      )}

      <Row>
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={6} xxl={4}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        {data.icon && <i className={`feather ${data.icon} f-30 m-r-5`} />}
                        {data.iconNew && data.iconNew}
                        {data.amount} {data.unit}
                      </h3>
                    </div>
                    <div className="col-3 text-end">
                      <p className="m-b-0">{Math.round(data.value)}%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                      className={`progress-bar ${data.class}`}
                      role="progressbar"
                      style={{ width: `${data.value}%` }}
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <Col md={12} xl={12}>
          <TestResultsDashboard />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserDashDefault;
