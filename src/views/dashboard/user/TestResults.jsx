// TestResultsDashboard.jsx
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Chart } from 'react-google-charts';

const TestResultsDashboard = () => {
  // ตัวอย่างข้อมูลบริษัท
  const testResults = [
    {
      customerCode: '109',
      sampleNo: '24111203',
      testItems: { pH: 7.7, MC: 1.0, TN: 21.1 }
    },
    {
      customerCode: '02',
      sampleNo: '24111301',
      testItems: { pH: 6.5, MC: 0.8, TN: 13.0, TP: 7.9 }
    },
    {
      customerCode: '003',
      sampleNo: '24111302',
      testItems: { pH: 7.0, MC: 0.9, TN: 15.5, TP: 6.2 }
    },
    {
      customerCode: '004',
      sampleNo: '24111303',
      testItems: { pH: 5.5, MC: 0.7, TN: 12.0, TP: 7.1 }
    },
    {
      customerCode: '005',
      sampleNo: '24111304',
      testItems: { pH: 6.8, MC: 1.1, TN: 18.0 }
    }
  ];

  // การเตรียมข้อมูลสำหรับแสดงผลใน Dashboard
  const sampleCounts = testResults.length;
  const averagePH = (testResults.reduce((sum, result) => sum + (result.testItems.pH || 0), 0) / sampleCounts).toFixed(2);

  const chartData = [
    ['Sample No', 'pH', 'MC', 'TN'],
    ...testResults.map((result) => [result.sampleNo, result.testItems.pH || 0, result.testItems.MC || 0, result.testItems.TN || 0])
  ];

  const chartOptions = {
    title: 'ผลการทดสอบ',
    hAxis: {
      title: 'Sample No'
    },
    vAxis: {
      title: 'Values'
    },
    seriesType: 'bars',
    colors: ['#29b6f6', '#ff8a65', '#4caf50'], // ใช้โทนสีตามที่กำหนด
    series: {
      3: { type: 'line' }
    }
  };

  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ตารางสรุปผลการทดสอบ</h5>
        </Card.Header>
        <Card.Body>
          {/* <Row className="mb-4">
            <Col md={6} sm={12} className="mb-3">
              <Card>
                <Card.Body>
                  <h6>จำนวนตัวอย่างที่ทดสอบ</h6>
                  <h3>{sampleCounts}</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} sm={12} className="mb-3">
              <Card>
                <Card.Body>
                  <h6>ค่าเฉลี่ย pH</h6>
                  <h3>{averagePH}</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <Chart chartType="ComboChart" data={chartData} options={chartOptions} width="100%" height="400px" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestResultsDashboard;
