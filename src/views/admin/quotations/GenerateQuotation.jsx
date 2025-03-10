import React, { useState, useEffect } from 'react';
import { Document, Page, Text, Image, View, StyleSheet, PDFDownloadLink, Font, pdf } from '@react-pdf/renderer';
import { Badge, Button, ButtonGroup, Col, Row, Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo/logo.png';
import { deleteQuotations, getQuotationsByID } from 'services/_api/quotationRequest';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line, RiMailSendLine } from 'react-icons/ri';
import { LuView } from 'react-icons/lu';
import { Tooltip } from '@mui/material';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import { deleteSampleStatus } from 'services/_api/sampleStatusRequest';

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
const generateAndSendPDF = async (quotation) => {
  const toEmail = quotation.customer_info[0]?.email || 'ginjung01@gmail.com';
  const subject = `ใบเสนอราคา ${quotation.quotation_no}`;
  const message = 'นี่คือใบเสนอราคาที่ท่านร้องขอ';
  const username = 'Chanu';

  try {
    const pdfBlob = await pdf(<MyDocument quotation={quotation} />).toBlob();
    const formData = new FormData();
    formData.append('toEmail', toEmail);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('username', username);
    formData.append('file', pdfBlob, `${quotation.quotation_no}.pdf`);

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

// ✅ สร้าง PDF และเปิดในแท็บใหม่
export const generatePDF = async (quotation) => {
  const pdfBlob = await pdf(<MyDocument quotation={quotation} />).toBlob();
  const url = URL.createObjectURL(pdfBlob);
  window.open(url);
};

// ✅ Component หลัก
const GenerateQuotation = ({ quotationData, onChange }) => {
  const [quotations, setQuotations] = useState([]); // เปลี่ยนเป็น array เพื่อเก็บหลาย quotation

  const handleGetQuotation = async (id) => {
    try {
      const response = await getQuotationsByID(id);
      console.log(`getQuotationsByID(${id}):`, response);
      return response;
    } catch (error) {
      console.error(`Error fetching quotation ${id}:`, error);
      return null; // คืนค่า null ถ้าดึงข้อมูลไม่สำเร็จ
    }
  };

  useEffect(() => {
    const fetchAllQuotations = async () => {
      if (quotationData && quotationData.length > 0) {
        // Loop ผ่าน quotationData และดึงข้อมูลเพิ่มเติมจาก API
        const fetchedQuotations = await Promise.all(
          quotationData.map(async (data) => {
            const fullData = await handleGetQuotation(data.quotation_id);
            // รวมข้อมูลจาก quotationData และ fullData (ถ้ามี)
            return { ...data, ...(fullData || {}) };
          })
        );

        // กรองข้อมูลที่ไม่ใช่ null และเก็บใน state
        setQuotations(fetchedQuotations.filter((q) => q !== null));
      } else {
        setQuotations([]); // ถ้าไม่มี quotationData ให้เป็น array ว่าง
      }
    };

    fetchAllQuotations();
  }, [quotationData]);

  // if (!quotations || quotations.length === 0) {
  //   return <div>กำลังโหลด...</div>;
  // }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลใบเสนอราคา หรือไม่?`);
    if (confirmDelete) {
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        await deleteSampleStatus();
        await deleteQuotations(id).then(() => {
          toast.success('ลบข้อมูลใบเสนอราคาสำเร็จ!', { autoClose: 3000 });
          onChange(true);
        });
      } catch (error) {
        toast.error('ลบข้อมูลใบเสนอราคาไม่สำเร็จ!', { autoClose: 3000 });
      }
    }
  };
  return (
    <Row className="mb-2 p-2 pt-0 pb-0">
      <Col>
        <h6>ข้อมูลใบเสนอราคา</h6>
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr>
              <th width={80}>#</th>
              <th style={{ flex: 1.3 }}>เลขที่ใบเสนอราคา</th>
              <th className="text-center" style={{ flex: 1 }}>
                ประเภท
              </th>
              <th style={{ flex: 1 }}>วันที่สร้าง</th>
              <th style={{ flex: 1 }} className="text-end">
                จำนวนเงิน
              </th>
              <th className="text-center" style={{ flex: 1 }}>
                สถานะ
              </th>
              <th style={{ flex: 1 }}>ผู้อนุมัติ</th>
              <th className="text-center" style={{ flex: 1 }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {quotations.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.quotation_no}</td>
                <td className="text-center">{data.quotation_type_name || '-'}</td>
                <td>{new Date(data.quotation_date).toLocaleDateString('th-TH')}</td>
                <td className="text-end">{setNumber(data.grand_total)}</td>
                <td className="text-center">
                  <Badge pill style={{}} bg={data.status === 'pending' ? 'warning' : data.status === 'rejected' ? 'danger' : 'success'}>
                    {data.status === 'pending' ? 'รอชำระเงิน' : data.status === 'rejected' ? 'ยกเลิก' : 'ชำระเงินสำเร็จ'}
                  </Badge>
                </td>
                <td>{data.approved_by || '-'}</td>
                <td className="text-center" style={{ flex: 1 }}>
                  <ButtonGroup>
                    <Tooltip title="Pre-view" placement="bottom" arrow>
                      <Button variant="info" size="sm" onClick={() => generatePDF(data)}>
                        <LuView style={{ fontSize: 16 }} />
                      </Button>
                    </Tooltip>
                    <PDFDownloadLink document={<MyDocument quotation={data} />} fileName={`${data.quotation_no}.pdf`}>
                      <Tooltip title="ดาวน์โหลด PDF" placement="bottom" arrow>
                        <Button variant="primary" style={{ borderRadius: 0, padding: '12px', display: 'flex', alignItems: 'center' }}>
                          <MdOutlineSimCardDownload style={{ fontSize: 16 }} />
                        </Button>
                      </Tooltip>
                    </PDFDownloadLink>
                    <Tooltip title="ส่งอีเมล์" placement="bottom" arrow>
                      <Button variant="info" size="sm" onClick={() => generateAndSendPDF(data)}>
                        <RiMailSendLine style={{ fontSize: 16 }} />
                      </Button>
                    </Tooltip>
                    <Tooltip title="ลบใบเสนอราคา" placement="bottom" arrow>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(data.quotation_id)}>
                        <RiDeleteBin5Line style={{ fontSize: 16 }} />
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </td>
                {/* <td>{data.proofImage && <Image src={data.proofImage} alt="Proof" thumbnail style={{ maxHeight: '100px' }} />}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

// ✅ ส่วน Header
const QuotationHeader = ({ quotation }) => (
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
      <View style={styles.quotationBox}>
        <Text style={[styles.quotationTitle, styles.boldText]}>ใบเสนอราคา /</Text>
        <Text style={[styles.quotationTitle, styles.boldText]}>QUOTATION</Text>
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

// ✅ ส่วน Content (ตารางรายการ)
const QuotationContent = ({ quotation }) => {
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
          <Text style={[contentStyles.tableCell, { flex: 0.6, borderRight: 2, paddingTop: 10 }]}>ลำดับที่</Text>
          <Text style={[contentStyles.tableCell, { flex: 4, borderRight: 2 }]}>รายการทดสอบ</Text>
          <Text style={[contentStyles.tableCell, { flex: 1, borderRight: 2 }]}>ราคาต่ออย่าง (บาท)</Text>
          <Text style={[contentStyles.tableCell, { flex: 0.9, borderRight: 2 }]}>จำนวนตัวอย่าง</Text>
          <Text style={[contentStyles.tableCell, { flex: 1 }]}>ราคารวม (บาท)</Text>
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
        {quotation.discount_percentage !== '0.00' && (
          <View style={[contentStyles.tableRow, { borderTop: 1 }]}>
            <Text style={[contentStyles.tableCell, { flex: 7, textAlign: 'left' }]}>
              ส่วนลด
              <Text style={{ padding: 20, borderBottom: 2, fontSize: 14, fontWeight: 'bold' }}> {quotation.discount_percentage} </Text>%
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
  companyInfo: { fontSize: 12 },
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

export default GenerateQuotation;
