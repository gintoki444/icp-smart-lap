// TestResultsDashboard.jsx
import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { testResults } from 'services/TestData/resultsTestData';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const labList = () => {
  const navigate = useNavigate();
  const dateNow = format(new Date(), 'dd/MM/yyyy');

  // ตัวอย่างข้อมูลบริษัท
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
          <h5>รายการทดสอบตัวอย่าง</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
                <th className="text-center">Action</th>
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
                  <td className="">
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
                    {result.status !== 'เสร็จสิ้น' && (
                      <Button variant="info" size="sm" className="me-2" onClick={() => {}}>
                        <i className="feather icon-edit m-0" />
                      </Button>
                    )}
                    {/* {request.status !== 'เสร็จสิ้น' && (
                      <Button variant="danger" size="sm" onClick={() => {}}>
                        <i className="feather icon-trash-2 m-0" />
                      </Button>
                    )} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LabList;
