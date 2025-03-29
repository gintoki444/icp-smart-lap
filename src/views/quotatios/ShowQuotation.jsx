import React, { useState, useEffect } from 'react';
import { Document, Page, Text, Image, View, StyleSheet, PDFDownloadLink, Font, pdf } from '@react-pdf/renderer';
import { Badge, Button, ButtonGroup, Col, Row, Table, Modal, Card, Form } from 'react-bootstrap';
import logo from '../../assets/images/logo/logo.png';
import { deleteQuotations, getAllQuotationRequestsById, getQuotationsByID } from 'services/_api/quotationRequest';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line, RiMailSendLine } from 'react-icons/ri';
import { LuView } from 'react-icons/lu';
import { Tooltip } from '@mui/material';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import { deleteSampleStatus } from 'services/_api/sampleStatusRequest';
import { postSendEmail } from 'services/_api/emailRequest';
import { handleUploadFiles } from 'services/_api/uploadFileRequest';
import { authenUser } from 'services/_api/authentication';
import { getUserByID } from 'services/_api/usersRequest';
import { CircularProgress, Backdrop } from '@mui/material';
import { BsFiletypePdf } from 'react-icons/bs';
// ✅ โหลดฟอนต์ภาษาไทย
Font.register({
  family: 'THSarabunNew',
  fonts: [{ src: '/assets/fonts/THSarabunNew.ttf' }, { src: '/assets/fonts/THSarabunNew-Bold.ttf', fontWeight: 'bold' }]
});

// ✅ Component หลักของ PDF
const MyDocument = ({ quotation }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <QuotationHeader quotation={quotation} />

      {/* Content */}
      <QuotationContent quotation={quotation} />

      {/* Footer */}
      <QuotationFooter quotation={quotation} />
    </Page>
  </Document>
);

const setNumber = (data) => {
  const isNumber = parseFloat(data).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return isNumber;
};

// ✅ สร้างและส่ง PDF ผ่านอีเมล
const generateAndSendPDF = async (quotation, userData) => {
  const toEmail = userData.toEmail;
  const subject = userData.subject;
  const username = userData.username;
  const message = `
<p>เรียนลูกค้า <strong>${quotation.customer_info[0]?.company_name}</strong>,</p>

<p>ระบบ ICP Smart Lab ขอเรียนแจ้งว่า ได้มีการออกใบเสนอราคาเรียบร้อยแล้ว ตามรายการที่ท่านร้องขอ โดยมีรายละเอียดดังนี้:</p>

<p>
🧾 <strong>เลขที่ใบเสนอราคา</strong>: ${quotation.quotation_no}<br>
📅 <strong>วันที่ออกใบเสนอราคา</strong>: ${new Date(quotation.quotation_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}<br>
📅 <strong>ใช้ได้ถึงวันที่</strong>: ${new Date(quotation.valid_until).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
</p>

<p>
📌 <strong>รายการคำขอบริการ</strong>:<br>
${quotation.request_no_list_by_quotation}
</p>

<p>
💵 <strong>ยอดรวมสุทธิ (รวม VAT)</strong>: ${parseFloat(quotation.grand_total).toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท<br>
📝 <strong>เงื่อนไขการชำระเงิน</strong>: ${quotation.payment_terms}<br>
📄 <strong>เงื่อนไขพิเศษ</strong>: ${quotation.customer_info[0]?.special_conditions || '-'}
</p>

<p>
🔍 <strong>รายการทดสอบ</strong>:<br>
${quotation.quotation_details.map((q) => `• ${q.name_for_quotation} x${q.quantity}`).join('<br>')}
</p>

<p>
ท่านสามารถดูรายละเอียดใบเสนอราคาเพิ่มเติมได้จากระบบ หรือสอบถามข้อมูลเพิ่มเติมได้ที่ผู้ดูแลระบบ
</p>

<p>
ขอแสดงความนับถือ,<br>
ICP Smart Lab
</p>
`;

  try {
    // Step 1: Generate the PDF blob
    const pdfBlob = await pdf(<MyDocument quotation={quotation} />).toBlob();

    // Step 2: Create a File object from the Blob for uploading
    const pdfFile = new File([pdfBlob], `${quotation.quotation_no}.pdf`, { type: 'application/pdf' });

    // Step 3: Upload the PDF to Firebase using handleUploadFiles
    const filesArray = [pdfFile]; // Convert to array as expected by handleUploadFiles
    const uploadResults = await handleUploadFiles(
      filesArray,
      `quotation/${quotation.quotation_no}`,
      `${quotation.quotation_no}-${Date.now()}`
    );

    // Step 4: Check if the upload was successful
    if (!uploadResults || uploadResults.length === 0) {
      throw new Error('การอัปโหลดไฟล์ล้มเหลว');
    }

    console.log('uploadResults:', uploadResults);
    const filePaths = uploadResults.map((result) => result.fileName);

    // Step 5: Prepare email data with the uploaded file path
    const emailData = {
      toEmail: toEmail,
      subject: subject,
      message: message,
      username: username,
      filePath: filePaths.length > 0 ? filePaths[0] : null // Use the first file path
    };

    // Step 6: Send the email using postSendEmail
    const response = await postSendEmail(emailData);

    // Step 7: Show success message
    toast.success('ส่งอีเมลสำเร็จ', { autoClose: 3000 });
    console.log('postSendEmail:', response);
  } catch (error) {
    console.error('❌ Failed to send email or upload file:', error);
    toast.error('เกิดข้อผิดพลาดในการส่งอีเมลหรืออัปโหลดไฟล์', { autoClose: 3000 });
  }
};
// const generateAndSendPDF = async (quotation) => {
//   const toEmail = quotation.customer_info[0]?.email || 'ginjung01@gmail.com';
//   const subject = `ใบเสนอราคา ${quotation.quotation_no}`;
//   const message = 'นี่คือใบเสนอราคาที่ท่านร้องขอ';
//   const username = 'Chanu';

//   try {
//     const pdfBlob = await pdf(<MyDocument quotation={quotation} />).toBlob();
//     const formData = new FormData();
//     formData.append('toEmail', toEmail);
//     formData.append('subject', subject);
//     formData.append('message', message);
//     formData.append('username', username);
//     formData.append('file', pdfBlob, `${quotation.quotation_no}.pdf`);

//     const response = await fetch('https://apiav2-3mp52qu73a-as.a.run.app/api/send-mail-file', {
//       method: 'POST',
//       body: formData
//     });

//     const result = await response.json();
//     console.log(result.message);
//   } catch (error) {
//     console.error('❌ Failed to send email', error);
//   }
// };

// ✅ สร้าง PDF และเปิดในแท็บใหม่
export const generatePDF = async (quotation) => {
  const pdfBlob = await pdf(<MyDocument quotation={quotation} />).toBlob();
  const url = URL.createObjectURL(pdfBlob);
  window.open(url);
};

// ✅ Component หลัก
const ShowQuotation = ({ id, service }) => {
  const [quotations, setQuotations] = useState([]);
  //   const [dataSend, setDataSend] = useState([]);
  //   const [formData, setFormData] = useState({
  //     toEmail: '',
  //     subject: '',
  //     message: '',
  //     username: '',
  //     files: null
  //   });

  //   const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [showModal, setShowModal] = useState(false);
  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       try {
  //         // const token = localStorage.getItem('authToken');
  //         // const response = await authenUser(token);
  //         const userData = await getUserByID(service.user_id);
  //         console.log('userData:', userData);
  //         if (userData.user_id) {
  //           setFormData((prev) => ({
  //             ...prev,
  //             subject: `ใบเสนอราคา ${service.quotation_no}`,
  //             toEmail: userData.email,
  //             username: userData.first_name + ' ' + userData.last_name
  //           }));
  //         } else {
  //           setError('ไม่สามารถดึงข้อมูลผู้ใช้ได้');
  //         }
  //       } catch (err) {
  //         setError('เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้: ' + err.message);
  //       }
  //     };

  //     fetchUserData();
  //   }, []);

  useEffect(() => {
    const fetchAllQuotations = async () => {
      try {
        setLoading(true);
        const data = await getAllQuotationRequestsById(id);
        console.log('getAllQuotationRequestsById:', data);
        setQuotations(data);
        setLoading(false);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้: ' + err.message);
      }
    };

    console.log('id:', id);
    if (id) fetchAllQuotations();
  }, [id]);
  return (
    <>
      {quotations.map((data, index) => (
        <span
          key={`quotations-doc-${index}`}
          className="d-flex justify-content-center align-items-center link-files text-primary"
          size="sm"
          onClick={() => generatePDF(data)}
        >
          <BsFiletypePdf style={{ fontSize: 16, marginRight: 8 }} /> {data.quotation_no}
        </span>
      ))}
    </>
  );
};

// ✅ ส่วน Header
const QuotationHeader = ({ quotation }) => {
  // Get the current date (March 27, 2025, as per system context)
  const currentDate = new Date('2025-03-27');

  // Format the date to DD/MM/YY (Thai format, year in Buddhist Era - 543)
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear() - 2000).padStart(2, '0'); // Get last two digits of the year (2025 -> 25)
  const formattedDate = `${day}/${month}/${year}`; // e.g., "27/03/25"

  // Page number (hardcoded as 1/1 since this is a single-page document)
  const currentPage = 1;
  const totalPages = 1;
  const pageInfo = `P ${currentPage}/${totalPages}`; // e.g., "P 1/1"

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{ maxWidth: 50 }}>
          <Image src={logo} style={styles.logo} />
        </View>
        <View>
          <Text style={[styles.companyInfo, styles.boldText, { fontSize: 14 }]}>ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด</Text>
          <Text style={styles.companyInfo}>307 หมู่ 7 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</Text>
          <Text style={styles.companyInfo}>โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091</Text>
        </View>

        <View style={{ width: 160 }}>
          <Text style={styles.companyInfo}>
            FM-LB-26 Rev.01 ({formattedDate}) {pageInfo}
          </Text>
          <View style={styles.quotationBox}>
            <Text style={[styles.quotationTitle, styles.boldText]}>ใบเสนอราคา /</Text>
            <Text style={[styles.quotationTitle, styles.boldText]}>QUOTATION</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionDivider} />
      {quotation.customer_info && quotation.customer_info.length > 0 && (
        <View style={styles.infoRow}>
          <View>
            <Text>
              <Text style={styles.boldText}>เรียน : </Text>
              <Text style={styles.normalText}>{quotation.customer_info[0].company_name}</Text>
            </Text>
            <Text>
              <Text style={styles.boldText}>ที่อยู่ : </Text>
              <Text style={styles.normalText}>{quotation.customer_info[0].company_address}</Text>
            </Text>
          </View>
          <View>
            <Text>
              <Text style={styles.boldText}>วันที่ : </Text>
              {new Date(quotation.quotation_date).toLocaleDateString('th-TH')}
            </Text>
            <Text>
              <Text style={styles.boldText}>เลขที่ใบเสนอราคา : </Text>
              {quotation.quotation_no}
            </Text>
            {quotation?.quotation_type_id && quotation?.quotation_type_id !== 1 && (
              <Text>
                <Text style={styles.boldText}>กำหนดวันชำระเงิน : </Text>
                {quotation?.quotation_type_id === 2 ? '7 วันหลังส่งผล' : '30 วันหลังส่งผล'}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

// ✅ ส่วน Content (ตารางรายการ)
const QuotationContent = ({ quotation }) => {
  console.log('quotation:', quotation);
  const MAX_ROWS = 15;
  const formattedItems = quotation.quotation_details
    ? [
        ...quotation.quotation_details.map((item, index) => [
          (index + 1).toString(),
          item.name_for_quotation,
          setNumber(item.unit_price),
          item.quantity.toString(),
          setNumber(item.subtotal_price)
        ]),
        ...Array.from({ length: MAX_ROWS - quotation.quotation_details.length }, () => ['', '', '', '', ''])
      ].slice(0, MAX_ROWS)
    : Array(MAX_ROWS).fill(['', '', '', '', '']);

  return (
    <View>
      <Text style={{ fontSize: 14, marginTop: 0 }}>
        ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:
      </Text>
      <View style={[contentStyles.table, { marginTop: 0 }]}>
        <View style={[contentStyles.tableRow, contentStyles.tableHeader]}>
          <Text style={[contentStyles.tableCell, { flex: 0.6, borderRight: 2, paddingTop: 10, paddingBottom: 10 }]}>ลำดับที่</Text>
          <Text style={[contentStyles.tableCell, { flex: 4, borderRight: 2, paddingTop: 10, paddingBottom: 10 }]}>รายการทดสอบ</Text>
          <View
            style={[
              contentStyles.tableCell,
              { flex: 1, borderRight: 2, paddingTop: 0, flexDirection: 'column', justifyContent: 'center', lineHeight: 1 }
            ]}
          >
            <Text style={{ marginBottom: 0 }}>ราคา/อย่าง</Text>
            <Text>(บาท)</Text>
          </View>
          <Text style={[contentStyles.tableCell, { flex: 0.9, borderRight: 2, paddingTop: 10, paddingBottom: 10 }]}>จำนวนตัวอย่าง</Text>
          <View
            style={[contentStyles.tableCell, { flex: 1, paddingTop: 0, flexDirection: 'column', justifyContent: 'center', lineHeight: 1 }]}
          >
            <Text style={{ marginBottom: 0 }}>ราคารวม</Text>
            <Text>(บาท)</Text>
          </View>
        </View>
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
        <View style={[contentStyles.tableRow, { borderTop: 2 }]}>
          <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>ค่าบริการวิเคราะห์ทดสอบ</Text>
          <Text style={[contentStyles.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }]}>
            {setNumber(quotation.total_amount)} บาท
          </Text>
        </View>
        {(quotation.discount_percentage !== '0.00' || quotation.discount_amount) && (
          <View style={[contentStyles.tableRow, { borderTop: 1 }]}>
            <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>
              ส่วนลด
              {quotation.discount_percentage !== '0.00' ? (
                <>
                  <Text style={{ padding: 20, borderBottom: 2, fontSize: 14, fontWeight: 'bold' }}> {quotation.discount_percentage}</Text> %
                </>
              ) : (
                ' (บาท)'
              )}
            </Text>
            <Text style={[contentStyles.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }]}>
              {setNumber(quotation.discount_amount)} บาท
            </Text>
          </View>
        )}
        <View style={[contentStyles.tableRow, { borderTop: 1 }]}>
          <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>ภาษีมูลค่าเพิ่ม (Vat) 7%</Text>
          <Text style={[contentStyles.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }]}>
            {setNumber(quotation.vat_amount)} บาท
          </Text>
        </View>
        <View style={[contentStyles.tableRow, { borderTop: 1 }]}>
          <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>จำนวนเงินรวมทั้งสิ้น</Text>
          <Text style={[contentStyles.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }]}>
            {setNumber(quotation.net_total)}
            บาท
          </Text>
        </View>
        <View style={[contentStyles.tableRow, { borderTop: 1, backgroundColor: '#ababab' }]}>
          <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>จำนวนเงินรวมทั้งสิ้น</Text>
          <Text style={[contentStyles.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }]}>
            {setNumber(quotation.grand_total)} บาท
          </Text>
        </View>
      </View>
    </View>
  );
};

// ✅ ส่วน Footer (รวมยอดและข้อมูลอื่นๆ)
const QuotationFooter = ({ quotation }) => (
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
          <View style={stylesFooter.tableRow} key={index}>
            {row.map((cell, cellIndex) => (
              <Text key={cellIndex} style={stylesFooter.tableCell}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>

    {/* ขอแสดงความนับถือ + ลายเซ็น */}
    <View style={[stylesFooter.signatureContainer, { marginTop: 5 }]}>
      <Text style={{ fontSize: 14 }}>ขอแสดงความนับถือ</Text>
      <View style={stylesFooter.signatureLine} />
      <Text style={stylesFooter.signatureText}>( ผู้จัดการห้องปฏิบัติการ )</Text>
      <Text style={stylesFooter.signatureText}>ผู้เสนอราคา</Text>
    </View>
  </View>
);

// ✅ Styles
const styles = StyleSheet.create({
  page: { padding: 10, paddingHorizontal: 40, fontFamily: 'THSarabunNew' },
  boldText: { fontFamily: 'THSarabunNew', fontWeight: 'bold' },
  normalText: { fontFamily: 'THSarabunNew' },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { width: 80, height: 80 },
  companyInfo: { fontSize: 12, textAlign: 'right' },
  quotationBox: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 8,
    textAlign: 'center',
    width: 160,
    fontSize: 14
  },
  quotationTitle: { fontSize: 18 },
  sectionDivider: { borderBottomWidth: 2, borderBottomColor: '#000', marginVertical: 2 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, marginTop: 5 }
});

const contentStyles = StyleSheet.create({
  table: { display: 'table', width: '100%', borderCollapse: 'collapse', borderWidth: 2, marginVertical: 10 },
  tableRow: { flexDirection: 'row' },
  tableCell: {
    flex: 1,
    fontSize: 12,
    paddingTop: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
    borderColor: '#000',
    minHeight: 18
  },
  tableHeader: {
    backgroundColor: '#f3f3f3',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    textAlign: 'center'
  },
  textRight: { textAlign: 'right' },
  summaryRow: { flexDirection: 'row', marginTop: 5 },
  summaryLabel: { flex: 3, fontSize: 14, padding: 5 },
  summaryValue: { flex: 1, textAlign: 'right', fontSize: 14, padding: 5 }
});

const stylesFooter = StyleSheet.create({
  footerContainer: { position: 'absolute', bottom: 15, left: 40, right: 40 },
  paymentTitle: { fontSize: 14 },
  paymentText: { fontSize: 14, marginBottom: 2 },
  taxNumber: { fontSize: 14, textAlign: 'right' },
  table: { display: 'table', width: '80%', borderWidth: 2, marginVertical: 10 },
  tableRow: { flexDirection: 'row' },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    borderColor: '#000',
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
    paddingHorizontal: 4,
    textAlign: 'center',
    flex: 1,
    minHeight: 18
  },
  signatureContainer: { marginTop: 5, marginLeft: 'auto', marginRight: '10%', textAlign: 'center', width: '30%' },
  signatureLine: { borderBottomWidth: 2, width: '100%', alignSelf: 'center', marginBottom: 5, marginTop: 20 },
  signatureText: { fontSize: 12, textAlign: 'center' }
});

const cellWidth = [{ width: 0.6 }, { width: 4 }, { width: 1 }, { width: 0.9 }, { width: 1 }];

export default ShowQuotation;
