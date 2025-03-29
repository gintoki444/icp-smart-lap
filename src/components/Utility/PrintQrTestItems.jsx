import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Paper, Typography, Backdrop, CircularProgress } from '@mui/material';
import { Col, Row, Button } from 'react-bootstrap';

// const apiUrl = process.env.REACT_APP_API_URL;
const serverUrl = window.location.origin;

const printPageStyle = {
  width: '100mm',
  padding: '18px 24px',
  marginBottom: '10px',
  breakAfter: 'page'
};

function PrintQrSampleSubmission() {
  const location = useLocation();
  const navigate = useNavigate();

  const requestData = location.state?.request;
  const submissionId = location.state?.submissionId; // เพิ่มการรับ submission_id
  const linkReturn = location.state?.link; // เพิ่มการรับ submission_id
  const [loading, setLoading] = useState(false);
  //   const [requestData, setRequestData] = useState(null);

  const qrUrl = `${serverUrl}/admin/request/verify/${requestData.request_id}`;

  const [isPrinting, setIsPrinting] = useState(false);
  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
    }, 500);
    setTimeout(() => {
      setIsPrinting(false);
    }, 1000);
  };

  const backTo = () => {
    if (linkReturn) {
      navigate(linkReturn);
    } else {
      navigate('/admin/request');
    }
  };

  if (loading || !requestData) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0, backgroundColor: 'rgb(245 245 245 / 50%)!important' }}
        open={true}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }

  const { sample_submissions, company_code, service_status_logs } = requestData;

  // กรอง sample_submissions ตาม submission_id ถ้ามีการระบุ
  const filteredSubmissions = submissionId
    ? sample_submissions.filter((submission) => submission.submission_id === submissionId)
    : sample_submissions;

  const sampleReceivedDate = service_status_logs?.sample_received
    ? new Date(service_status_logs.sample_received)
        .toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
        .split('/')
        .map((part, index) => (index === 2 ? part : part.padStart(2, '0')))
        .join('/')
    : '-';

  const printDate = new Date()
    .toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    .replace(',', '');

  const pages = [1, 2, 3, 4];

  return (
    <>
      {/* วนลูปผ่าน filteredSubmissions */}
      {filteredSubmissions.map((submission) =>
        // สร้าง 4 หน้าต่อ 1 submission
        pages.map((page) => (
          <Paper key={`${submission.submission_id}-${page}`} style={printPageStyle} elevation={2} className="mx-auto my-2">
            <Row>
              {/* หัวกระดาษ */}
              <Col md={12} sm={12} className="text-center mt-1 mb-2">
                <h6 style={{ fontWeight: 'bold' }}>ฉลากปิดภาชนะบรรจุตัวอย่าง</h6>
                {/* <Typography variant="h6" gutterBottom>
                  {requestData.customer_name || 'บริษัททดสอบ จำกัด'}
                </Typography> */}
              </Col>

              {/* รหัสลูกค้า */}
              <Col sx={6} md={6}>
                <p style={{ fontSize: 16 }} className="mb-2">
                  รหัสลูกค้า: <strong>{company_code || '-'}</strong>
                </p>
              </Col>
              <Col sx={6} md={6}>
                <p style={{ fontSize: 16 }} className="mb-2">
                  สูตร: <strong>{submission?.fertilizer_formula || '-'}</strong>
                </p>
              </Col>

              <Col sx={6} md={6}>
                <p style={{ fontSize: 16 }} className="mb-2">
                  รหัสตัวอย่าง: <strong>{submission.submission_code || '-'}</strong>
                </p>
              </Col>
              {/* หมายเลขตัวอย่าง */}

              {/* วันที่เก็บตัวอย่าง */}
              <Col md={12} sm={12}>
                <p style={{ fontSize: 16 }} className="mb-2">
                  วันที่เก็บตัวอย่าง: <strong>{sampleReceivedDate}</strong>
                </p>
              </Col>

              {/* รายการทดสอบ */}
              <Col md={12} sm={12}>
                <p style={{ fontSize: 16 }} className="mb-2">
                  รายการทดสอบ:
                </p>
                {submission?.sample_submission_details?.length > 0 ? (
                  <p style={{ fontSize: 16, fontWeight: 'bold' }} className="ms-2">
                    {submission.sample_submission_details.map((item) => item.test_code).join(', ')}
                  </p>
                ) : (
                  <p style={{ fontSize: 16 }} className="ms-2">
                    - ไม่มีรายการทดสอบ
                  </p>
                )}
              </Col>

              {/* QR Code */}
              <Col className="col-12 text-center mt-2">
                <QRCode value={qrUrl} size={128} />
              </Col>

              <Col sx={12} md={12} className="text-center mt-4 mb-1">
                <p style={{ fontSize: 16 }} className="mb-2">
                  หมายเลขตัวอย่าง : <strong>{submission?.submission_no || '-'}</strong>
                </p>
              </Col>
              {/* วันที่พิมพ์และเลขหน้า */}
              <Col className="col-12 text-center">
                <p className="mb-0" style={{ fontSize: 12 }}>
                  {printDate} ({page}/4)
                </p>
                {/* <Typography variant="body2">หน้า {page}/4</Typography> */}
              </Col>
            </Row>
          </Paper>
        ))
      )}

      {/* ปุ่มควบคุม */}
      <Row style={{ position: 'fixed', zIndex: 9999999, bottom: 0, width: '100%' }}>
        <Col className="col-12 text-center mt-3 p-3">
          <Button variant="primary" onClick={handlePrint} style={{ display: isPrinting ? 'none' : 'inline-flex', margin: '0 8px' }}>
            <i className="feather icon-printer" />
            พิมพ์
          </Button>
          <Button variant="danger" color="error" onClick={backTo} style={{ display: isPrinting ? 'none' : 'inline-flex', margin: '0 8px' }}>
            <i className="feather icon-corner-up-left" />
            ย้อนกลับ
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default PrintQrSampleSubmission;
