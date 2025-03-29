// statusUtils.js
export const statusSteps = [
  { key: 'requested', label: 'ขอรับบริการ' },
  { key: 'sample_sent', label: 'ลูกค้าส่งตัวอย่าง' },
  { key: 'sample_arrived_lab', label: 'ตัวอย่างจัดส่งถึงแล็บ' },
  { key: 'sample_received', label: 'รับตัวอย่างเข้าระบบ' },
  { key: 'partial_testing', label: 'รอทดสอบบางรายการ' },
  { key: 'request_reviewed', label: 'ทบทวนคำขอ' },
  { key: 'quotation_issued', label: 'ออกใบเสนอราคา' },
  { key: 'invoice_requested', label: 'ขอใบแจ้งหนี้' },
  { key: 'payment_received', label: 'รับชำระเงิน' },
  { key: 'tax_withheld', label: 'หัก ณ ที่จ่าย' },
  { key: 'receipt_issued', label: 'ออกใบเสร็จรับเงิน / ใบกำกับภาษี' }
];

export const getNextStepStatus = (statusLogs) => {
  // วนลูปตามลำดับใน statusSteps
  for (let step of statusSteps) {
    // ข้ามสถานะ partial_testing ถ้าเป็น null หรือ undefined
    if (step.key === 'partial_testing' && (statusLogs[step.key] === null || statusLogs[step.key] === undefined)) {
      continue;
    }

    // ถ้าสถานะนี้เป็น null หรือ undefined ให้คืน label เป็นสถานะถัดไป
    if (statusLogs[step.key] === null || statusLogs[step.key] === undefined) {
      return step.label;
    }
  }
  // ถ้าทุกสถานะมีค่าแล้ว (ยกเว้น partial_testing ที่ข้ามได้)
  return 'ดำเนินการครบแล้ว';
};

export const getNextPendingStatus = (statusLogs) => {
  let currentStatus = 'ยังไม่เริ่มดำเนินการ'; // ค่าเริ่มต้น

  // วนลูปตามลำดับใน statusSteps
  for (let step of statusSteps) {
    // ข้ามสถานะ partial_testing ถ้าเป็น null หรือ undefined
    if (step.key === 'partial_testing' && (statusLogs[step.key] === null || statusLogs[step.key] === undefined)) {
      continue;
    }

    // ถ้าสถานะนี้มีค่า (ไม่ใช่ null หรือ undefined) ให้อัปเดตเป็นสถานะปัจจุบัน
    if (statusLogs[step.key] !== null && statusLogs[step.key] !== undefined) {
      currentStatus = step.label;
    }
  }

  return currentStatus;
};

export const getStatusMenu = (statusLogs) => {
  const hasSampleSent = statusLogs['sample_sent'] !== null && statusLogs['sample_sent'] !== undefined;
  const hasSampleArrivedLab = statusLogs['sample_arrived_lab'] !== null && statusLogs['sample_arrived_lab'] !== undefined;
  const hasSampleReceived = statusLogs['sample_received'] !== null && statusLogs['sample_received'] !== undefined;
  const hasRequestReviewed = statusLogs['request_reviewed'] !== null && statusLogs['request_reviewed'] !== undefined;

  if (hasSampleSent && !hasSampleArrivedLab && !hasSampleReceived) {
    return {
      menu: 'รับตัวอย่างเข้าระบบ',
      link: '/admin/request-sample-sent'
    };
  } else if (hasSampleArrivedLab && hasSampleReceived && !hasRequestReviewed) {
    return {
      menu: 'ทบทวนคำขอ',
      link: '/admin/request-reviewed'
    };
  } else {
    return {
      menu: 'อื่นๆ',
      link: '/admin/request/verify'
    };
  }
};
