// TestResultsDashboard.jsx
import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { testResults } from 'services/TestData/resultsTestData';
import { format } from 'date-fns';
import { BsQrCodeScan } from 'react-icons/bs';

const TestLists = () => {
  const dateNow = format(new Date(), 'dd/MM/yyyy');

  // ตัวอย่างข้อมูลลูกค้า/บริษัท
  // สร้างหัวตารางจาก Test Item ที่มีค่า
  const headers = [
    'Customer Code',
    'Request No.',
    'Sample No.',
    'Sample Code',
    'Description',
    'Sample Appearance'
    // ...Object.keys(testResults[0].testItems).filter((key) => testResults.some((result) => result.testItems[key] !== null))
  ];

  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลรายการตัวอย่าง</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr>
                <th className="text-center" width={80}>
                  No.
                </th>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
                <th className="text-center" width={150}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((result, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{result.customerCode}</td>
                  <td>{result.requestNo}</td>
                  <td>{result.sampleNo}</td>
                  <td>{result.sampleCode}</td>
                  <td>{result.description}</td>
                  <td>{result.sampleAppearance}</td>
                  <td className="text-start">
                    {result.status !== 'complete' ? (
                      <Button variant="success" onClick={() => {}} style={{ padding: '5px 10px' }}>
                        <i className="feather icon-plus" style={{ margin: 0 }} />
                      </Button>
                    ) : (
                      <>
                        <Button variant="info" onClick={() => {}} style={{ padding: '5px 10px' }}>
                          <i className="feather icon-edit" style={{ margin: 0 }} />
                        </Button>
                        <Button onClick={() => {}} style={{ padding: '5px 10px', background: '#712cf9' }}>
                          <BsQrCodeScan />
                        </Button>
                      </>
                    )}
                  </td>
                  {/* {headers
                    .slice(6) // ข้าม 6 คอลัมน์แรก (ข้อมูลทั่วไป)
                    .map((header) => (
                      <td key={header}>{result.testItems[header] !== null ? result.testItems[header] : '-'}</td>
                    ))} */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestLists;
