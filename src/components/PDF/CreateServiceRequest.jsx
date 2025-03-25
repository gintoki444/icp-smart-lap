import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, Font, pdf, Image } from '@react-pdf/renderer';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { TbFileText } from 'react-icons/tb';
import logo from '../../assets/images/logo/logo.png'; // ปรับ path ตามโครงสร้างโปรเจคของคุณ

// โหลดฟอนต์ภาษาไทย
Font.register({
  family: 'THSarabunNew',
  fonts: [{ src: '/assets/fonts/THSarabunNew.ttf' }, { src: '/assets/fonts/THSarabunNew-Bold.ttf', fontWeight: 'bold' }]
});

// Styles สำหรับ PDF
const styles = StyleSheet.create({
  page: { padding: '10px 30px', fontFamily: 'THSarabunNew', fontSize: 14 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  logo: { width: 60, height: 60 },
  title: { fontSize: 20, fontWeight: 'bold' },
  formCode: { fontSize: 12 },
  section: { marginBottom: 10 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  textRow: { flexDirection: 'row', marginBottom: 5 },
  value: { flex: 1 },
  checkboxRow: { flexDirection: 'row', flexWrap: 'wrap' },
  checkboxItem: { width: '50%', marginBottom: 5 }
});

// Component ส่วนหัวกระดาษ
const ServiceRequestHeader = ({ serviceData, submissionIndex, totalSubmissions }) => (
  <View style={styles.headerContainer}>
    <View style={{ width: '10%' }}>
      <Image src={logo} style={styles.logo} />
    </View>
    <Text style={styles.title}>
      {serviceData.sample_type_id ? 'แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์' : 'แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมี เพื่อขึ้นทะเบียนปุ๋ย'}
    </Text>
    <Text style={[styles.formCode, { width: '10%' }]}>
      FM-LB-46 Rev.07 (01/12/23) P {submissionIndex + 1}/{totalSubmissions}
    </Text>
  </View>
);

// Component เนื้อหาของแต่ละหน้า
const ServiceRequestPageContent = ({ serviceData, submission, customerData, submissionIndex, totalSubmissions }) => (
  <Page size="A4" style={styles.page}>
    {/* ส่วนหัวกระดาษ */}
    <ServiceRequestHeader serviceData={serviceData} submissionIndex={submissionIndex} totalSubmissions={totalSubmissions} />

    {/* ข้อมูลผู้ขอขึ้นทะเบียน */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>ข้อมูลผู้ขอขึ้นทะเบียน</Text>
      <View style={styles.textRow}>
        <Text style={{ width: 100 }}>รหัสลูกค้า : </Text>
        <Text>{customerData.company_code || '000'}</Text>
        <Text style={{ marginLeft: 10 }}>ชื่อลูกค้า : {customerData.company_name}</Text>
      </View>
      {serviceData.sample_type_id === 1 && (
        <View style={{}}>
          <Text style={{ width: 100, fontWeight: 'bold' }}>วัตถุประสงค์การขอรับบริการ : </Text>
          <Text>{serviceData.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'}</Text>
        </View>
      )}
      <Text style={styles.sectionTitle}>ข้อมูลตัวอย่าง</Text>
      <View style={styles.textRow}>
        <Text style={{ width: 100, fontWeight: 'bold' }}>ประเภทของปุ๋ย : </Text>
      </View>
      <Text>วัตถุประสงค์การขอรับบริการ:</Text>
      {/* <View style={styles.checkboxRow}>
        <Text style={styles.checkboxItem}>[{serviceData.is_registration_analysis ? 'X' : ' '}] วิเคราะห์เพื่อขึ้นทะเบียน</Text>
        <Text style={styles.checkboxItem}>[{serviceData.is_quality_check_analysis ? 'X' : ' '}] วิเคราะห์เพื่อตรวจสอบคุณภาพ</Text>
      </View> */}
    </View>

    {/* ส่วนอื่น ๆ จะเพิ่มในขั้นตอนต่อไป */}
  </Page>
);

// Component PDF
const ServiceRequestDocument = ({ serviceData, customerData }) => {
  const submissions = serviceData.sample_submissions || [];

  return (
    <Document>
      {submissions.map((submission, index) => (
        <ServiceRequestPageContent
          key={submission.submission_id || index}
          serviceData={serviceData}
          submission={submission}
          customerData={customerData}
          submissionIndex={index}
          totalSubmissions={submissions.length}
        />
      ))}
    </Document>
  );
};

// Component หลัก
const CreateServiceRequest = ({ serviceData, customerData }) => {
  const [showModal, setShowModal] = useState(false);

  const generatePDF = async () => {
    const pdfBlob = await pdf(<ServiceRequestDocument serviceData={serviceData} customerData={customerData} />).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    window.open(url);
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)} disabled={!serviceData}>
        <TbFileText className="me-2" /> สร้างฟอร์มนำส่ง
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <h6>ตัวอย่างฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์</h6>
        </Modal.Header>
        <Modal.Body>
          <p>คลิก "สร้าง PDF" เพื่อดูตัวอย่างฟอร์มที่สร้างจากข้อมูลปัจจุบัน</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={generatePDF}>
            สร้าง PDF
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateServiceRequest;
