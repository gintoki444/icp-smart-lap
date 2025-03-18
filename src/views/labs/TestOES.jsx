// TestResultsDashboard.jsx
import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { testResults } from 'services/TestData/resultsTestData';
import { format } from 'date-fns';
import { BsQrCodeScan } from 'react-icons/bs';

const TestOESLists = () => {
  const dateNow = format(new Date(), 'dd/MM/yyyy');

  // ตัวอย่างข้อมูลลูกค้า/บริษัท
  // สร้างหัวตารางจาก Test Item ที่มีค่า
  const headers = [
    'Sample No.',
    'Sample Weight',
    'Request No.',
    'Sample Code',
    'Description',
    'Sample Appearance'
    // ...Object.keys(testResults[0].testItems).filter((key) => testResults.some((result) => result.testItems[key] !== null))
  ];

  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลผลการทดสอบธาตุด้วยเครื่อง ICP-OES</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr>
                <th className="text-center" width={80}>
                  No.
                </th>
                <th>Sample No.</th>
                <th>Sample Wt. (g)</th>
                <th>
                  V<sub>F1</sub> (mL)
                </th>
                <th>
                  V<sub>S</sub> (mL)
                </th>
                <th>
                  V<sub>F2</sub> (mL)
                </th>
                <th>ppm from Curve</th>
                <th>% Element</th>
                <th>Test Parameter</th>
                <th>Analyzed by</th>
                <th>Analyzed date</th>
                <th className="text-center" width={150}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center" colSpan={12}>
                  No data.
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestOESLists;
