import React from 'react';
import { Document, Page, Text, Image, View, StyleSheet, PDFDownloadLink, Font, pdf } from '@react-pdf/renderer';
import logo from '../../../assets/images/logo/logo.png'; // โลโก้บริษัท

// ✅ โหลดฟอนต์ภาษาไทย
Font.register({
  family: 'THSarabunNew',
  fonts: [{ src: '/assets/fonts/THSarabunNew.ttf' }, { src: '/assets/fonts/THSarabunNew-Bold.ttf', fontWeight: 'bold' }]
});
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <QuotationHeader />

      {/* Content */}
      <QuotationContent />

      {/* Footer */}
      <QuotationFooter />
    </Page>
  </Document>
);

const generateAndSendPDF = async () => {
  const toEmail = 'ginjung01@gmail.com';
  const subject = 'Test ใบเสนอราคา ( ไม่มีเครดิต-ไม่มีส่วนลด )';
  const message = 'นี่คืออีเมลทดสอบที่มีไฟล์แนบ';
  const username = 'Chanu';

  try {
    // ✅ ใช้ pdf().toBlob() แทน BlobProvider
    const pdfBlob = await pdf(<MyDocument />).toBlob();

    // ✅ สร้าง `FormData`
    const formData = new FormData();
    formData.append('toEmail', toEmail);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('username', username);
    formData.append('file', pdfBlob, 'quotation.pdf');

    // 📩 เรียก API ส่งอีเมล
    const response = await fetch('https://apiav2-3mp52qu73a-as.a.run.app/api/send-mail-file', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error('❌ Failed to send email', error);
  }
};

// ✅ แก้ไข `generatePDF()`
export const generatePDF = async () => {
  const pdfBlob = await pdf(<MyDocument />).toBlob();
  const url = URL.createObjectURL(pdfBlob);
  window.open(url);
};

const PDFGenerator = () => {
  return (
    <div>
      <button onClick={generatePDF}>ดาวน์โหลด PDF</button>
      <PDFDownloadLink document={<MyDocument />} fileName="quotation.pdf">
        {({ loading }) => (loading ? 'กำลังโหลด...' : 'ดาวน์โหลด PDF')}
      </PDFDownloadLink>
      <button onClick={generateAndSendPDF}>ส่ง PDF ผ่านอีเมล</button>
    </div>
  );
};

const QuotationHeader = () => (
  <View>
    {/* โลโก้ + ข้อมูลบริษัท + หัวข้อใบเสนอราคา */}
    <View style={styles.headerContainer}>
      <View style={{ maxWidth: 50 }}>
        <Image src={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={[styles.companyInfo, styles.boldText, { fontSize: 14 }]}>ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด</Text>
        <Text style={styles.companyInfo}>307 หมู่ 7 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</Text>
        <Text style={styles.companyInfo}>โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091</Text>
      </View>
      <View style={styles.quotationBox}>
        <Text style={[styles.quotationTitle, styles.boldText]}>ใบเสนอราคา /</Text>
        <Text style={[styles.quotationTitle, styles.boldText]}>QUOTATION</Text>
      </View>
    </View>
    {/* เส้นแบ่ง */}
    <View style={styles.sectionDivider} />
    {/* รายละเอียดบริษัทลูกค้า + วันที่ */}
    <View style={styles.infoRow}>
      <View>
        <Text>
          <Text style={styles.boldText}>เรียน: </Text>
          <Text style={styles.normalText}>บริษัท เอ บี ซี</Text>
        </Text>
        <Text>
          <Text style={styles.boldText}>ที่อยู่: </Text>
          <Text style={styles.normalText}>123 ม.3 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี</Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={styles.boldText}>วันที่: </Text>10/02/25
        </Text>
        <Text>
          <Text style={styles.boldText}>เลขที่ใบเสนอราคา: </Text>QT250222
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  page: { padding: 10, paddingHorizontal: 40, fontFamily: 'THSarabunNew' },
  boldText: { fontFamily: 'THSarabunNew', fontWeight: 'bold' },
  normalText: { fontFamily: 'THSarabunNew' },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { width: 80, height: 80 },
  companyInfo: { fontSize: 12 },
  quotationBox: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 8,
    textAlign: 'center',
    width: 160,
    fontSize: 14,
    fontWeight: 'bold'
  },
  table: { display: 'table', width: '100%', borderWidth: 1, marginVertical: 10 },
  tableRow: { flexDirection: 'row' },
  tableHeader: {
    fontSize: 1,
    fontWeight: 'bold',
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
    flex: 1
  },
  tableCell: {
    fontSize: 14,
    borderTopWidth: 1,
    borderColor: '#000',
    padding: 5,
    paddingTop: 8,
    paddingBottom: 0,
    textAlign: 'center',
    flex: 1
  },
  quotationTitle: { fontSize: 18, fontWeight: 'bold' },
  sectionDivider: { borderBottomWidth: 2, borderBottomColor: '#000', marginVertical: 2 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, marginTop: 5 }
  // boldText: { fontWeight: 'bold' },
  // normalText: { fontWeight: 'normal' }
});

// ✅ ข้อมูลตาราง
const testItems = [
  ['1', 'ไนโตรเจนทั้งหมด (Total Nitrogen)', '1,000.00', '6', '6,000.00'],
  ['2', 'แอมโมเนียมไนโตรเจน (Ammonium Nitrogen)', '500.00', '2', '1,000.00'],
  ['3', 'ไนเตรทไนโตรเจน (Nitrate Nitrogen)', '1,000.00', '2', '2,000.00'],
  ['4', 'ฟอสฟอรัสที่เป็นประโยชน์ (Available Phosphorus)', '1,800.00', '4', '7,200.00'],
  ['5', 'โพแทสเซียมที่ละลายน้ำ (Water Soluble Potassium)', '1,000.00', '4', '4,000.00'],
  ['6', 'แคลเซียมออกไซด์ (Calcium Oxide)', '1,200.00', '2', '2,400.00']
];

const cellWidth = [{ width: 0.6 }, { width: 4 }, { width: 1 }, { width: 0.9 }, { width: 1 }];

const MAX_ROWS = 15; // ✅ กำหนดจำนวนแถวสูงสุด
// ✅ เติมแถวว่างให้ครบ 15 แถว
const formattedItems = [...testItems, ...Array.from({ length: MAX_ROWS - testItems.length }, () => ['', '', '', '', ''])].slice(
  0,
  MAX_ROWS
);

// ✅ สร้างตาราง
const QuotationContent = () => (
  <View style={{ marginTop: 10 }}>
    {/* ตารางหลัก */}
    <Text style={{ fontSize: 14 }}>
      ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:
    </Text>
    <View style={contentStyles.table}>
      {/* หัวตาราง */}
      <View style={[contentStyles.tableRow, contentStyles.tableHeader]}>
        <View style={[contentStyles.tableCell, { flex: 0.6, borderRight: 2 }]}>
          <Text style={{ margin: 'auto' }}>ลำดับที่</Text>
        </View>
        <Text style={[contentStyles.tableCell, { flex: 4, borderRight: 2 }]}>รายการทดสอบ</Text>
        <Text style={[contentStyles.tableCell, { flex: 1, borderRight: 2 }]}>ราคาต่ออย่าง (บาท)</Text>
        <Text style={[contentStyles.tableCell, { flex: 0.9, borderRight: 2 }]}>จำนวนตัวอย่าง</Text>
        <Text style={[contentStyles.tableCell, { flex: 1 }]}>ราคารวม (บาท)</Text>
      </View>

      {/* ✅ แสดงผลข้อมูลทั้งหมด 15 แถว */}
      {formattedItems.map((row, index) => (
        <View key={index} style={[contentStyles.tableRow]}>
          {row.map((cell, cellIndex) => (
            <Text
              key={cellIndex}
              style={[
                contentStyles.tableCell,
                { flex: cellWidth[cellIndex]?.width, borderRight: cellIndex !== 4 ? 2 : 0, borderBottom: index !== 14 ? 1 : 0 },
                cellIndex === 1 ? { textAlign: 'left' } : cellIndex === 2 || cellIndex === 4 ? contentStyles.textRight : {}
              ]}
            >
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
);

const contentStyles = StyleSheet.create({
  table: { display: 'table', width: '100%', borderCollapse: 'collapse', borderWidth: 2 },
  tableRow: { flexDirection: 'row' },
  tableCell: {
    flex: 1,
    fontSize: 14,
    paddingTop: 2,
    lineHeight: 0,
    paddingHorizontal: 4,
    textAlign: 'center',
    borderColor: '#000',
    minHeight: 18
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f3f3f3',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 14
  },
  textRight: { textAlign: 'right' },
  summaryRow: { flexDirection: 'row', marginTop: 5 },
  summaryLabel: { flex: 3, fontSize: 10, padding: 5 },
  summaryValue: { flex: 1, textAlign: 'right', fontSize: 10, padding: 5 }
});

const QuotationFooter = () => (
  <View style={stylesFooter.footerContainer}>
    {/* เงื่อนไขการชำระเงิน */}
    <Text style={[stylesFooter.paymentTitle, styles.boldText]}>เงื่อนไขการชำระเงิน :</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={stylesFooter.paymentText}>1. โอนเงินผ่านบัญชีธนาคาร บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด</Text>
      <Text style={stylesFooter.taxNumber}>(เลขประจำตัวผู้เสียภาษี: 0205547009421)</Text>
    </View>
    <Text style={stylesFooter.paymentText}>
      2. จัดส่งหลักฐานการโอนเงิน และหนังสือรับรองหักภาษี ณ ที่จ่ายมายัง somluk.meesakun@icpinter.com
    </Text>

    {/* ตารางธนาคาร */}
    <View style={{ marginTop: 10 }}>
      <View style={[stylesFooter.table, { margin: 'auto' }]}>
        <View style={stylesFooter.tableRow}>
          <Text style={stylesFooter.tableHeader}>ธนาคาร</Text>
          <Text style={stylesFooter.tableHeader}>สาขา</Text>
          <Text style={stylesFooter.tableHeader}>ประเภทบัญชี</Text>
          <Text style={stylesFooter.tableHeader}>เลขที่บัญชี</Text>
        </View>
        {[
          ['ไทยพาณิชย์', 'ชลบุรี', 'กระแสรายวัน', '001-3-50193-0'],
          ['กสิกรไทย', 'พัฒนาพงษ์', 'กระแสรายวัน', '018-1-14367-3'],
          ['ทหารไทย', 'สุรวงศ์', 'กระแสรายวัน', '078-1-18116-9']
        ].map((row, index) => (
          <View style={[stylesFooter.tableRow]} key={index}>
            {row.map((cell, cellIndex) => (
              <Text key={cellIndex} style={[stylesFooter.tableCell]}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>

    {/* ขอแสดงความนับถือ + ลายเซ็น */}
    <View style={[stylesFooter.signatureContainer]}>
      <Text style={{ fontSize: 14 }}>ขอแสดงความนับถือ</Text>
      <View style={stylesFooter.signatureLine} />
      <Text style={stylesFooter.signatureText}>( ผู้จัดการห้องปฏิบัติการ )</Text>
      <Text style={stylesFooter.signatureText}>ผู้เสนอราคา</Text>
    </View>
  </View>
);

const stylesFooter = StyleSheet.create({
  boldText: { fontFamily: 'THSarabunNew', fontWeight: 'bold', fontSize: 12 },
  normalText: { fontFamily: 'THSarabunNew', fontSize: 12 },
  footerContainer: { position: 'absolute', bottom: 30, left: 40, right: 40 },
  paymentTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  paymentText: { fontSize: 14, marginBottom: 2 },
  taxNumber: { fontSize: 14, textAlign: 'right' },
  table: { display: 'table', width: '80%', borderWidth: 2, marginVertical: 10 },
  tableRow: { flexDirection: 'row' },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    borderColor: '#000',
    // padding: 2,
    paddingTop: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
    flex: 1,
    minHeight: 18
  },
  tableCell: {
    fontSize: 12,
    borderTopWidth: 1,
    borderColor: '#000',
    // padding: 2,
    // paddingTop: 4,
    paddingHorizontal: 4,
    textAlign: 'center',
    flex: 1,
    minHeight: 18
  },
  signatureContainer: { marginTop: 5, marginLeft: 'auto', marginRight: '10%', textAlign: 'center', width: '30%' },
  signatureLine: { borderBottomWidth: 2, width: '100%', alignSelf: 'center', marginBottom: 5, marginTop: 20 },
  signatureText: { fontSize: 12, textAlign: 'center' }
});
export default PDFGenerator;
