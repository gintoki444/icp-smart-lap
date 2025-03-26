// statusUtils.js
export const statusSteps = [
  { key: 'requested', label: 'ขอรับบริการ' },
  { key: 'sample_sent', label: 'ลูกค้าส่งตัวอย่าง' },
  { key: 'request_reviewed', label: 'ทบทวนคำขอ' }, // ย้ายมาอยู่ก่อน
  { key: 'sample_arrived_lab', label: 'ตัวอย่างจัดส่งถึงแล็บ' },
  { key: 'sample_received', label: 'รับตัวอย่างเข้าระบบ' },
  { key: 'partial_testing', label: 'รอทดสอบบางรายการ' },
  { key: 'quotation_issued', label: 'ออกใบเสนอราคา' },
  { key: 'invoice_requested', label: 'ขอใบแจ้งหนี้' },
  { key: 'payment_received', label: 'รับชำระเงิน' },
  { key: 'tax_withheld', label: 'หัก ณ ที่จ่าย' },
  { key: 'receipt_issued', label: 'ออกใบเสร็จรับเงิน / ใบกำกับภาษี' }
];

export const getNextPendingStatus = (statusLogs) => {
  for (let step of statusSteps) {
    // ตรวจสอบว่าสถานะนั้นไม่มี (undefined) หรือเป็น null
    if (statusLogs[step.key] === null || statusLogs[step.key] === undefined) {
      return step.label;
    }
  }
  return 'ดำเนินการครบแล้ว';
};
