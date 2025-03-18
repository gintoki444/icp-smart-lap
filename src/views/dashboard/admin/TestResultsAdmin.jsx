// TestResultsDashboard.jsx
import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { testResults } from 'services/TestData/resultsTestData';
import { format } from 'date-fns';

const TestResultsAdminDashboard = () => {
  const dateNow = format(new Date(), 'dd/MM/yyyy');

  // ตัวอย่างข้อมูลลูกค้า/บริษัท
  // สร้างหัวตารางจาก Test Item ที่มีค่า
  const headers = [
    'Customer Code',
    'Sample No.',
    'Sample Code',
    'Description',
    'Sample Appearance',
    'Request No.',
    ...Object.keys(testResults[0].testItems).filter((key) => testResults.some((result) => result.testItems[key] !== null))
  ];

  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>สรุปข้อมูลผลรวมการทดสอบประจำวัน : {dateNow}</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {testResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.customerCode}</td>
                  <td>{result.sampleNo}</td>
                  <td>{result.sampleCode}</td>
                  <td>{result.description}</td>
                  <td>{result.sampleAppearance}</td>
                  <td>{result.requestNo}</td>
                  {headers
                    .slice(6) // ข้าม 6 คอลัมน์แรก (ข้อมูลทั่วไป)
                    .map((header) => (
                      <td key={header}>{result.testItems[header] !== null ? result.testItems[header] : '-'}</td>
                    ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestResultsAdminDashboard;
