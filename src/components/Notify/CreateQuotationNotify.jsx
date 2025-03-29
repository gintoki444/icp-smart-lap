import { postSendTelegramGroup } from 'services/_api/telegramNotifyRequest';

export const createQuotationNotify = async (quotationData, url) => {
  const { quotation_no, quotation_date, valid_until, grand_total, payment_terms, customer_info, quotation_details, quotation_id } =
    quotationData;

  const { company_name, tax_id, special_conditions } = customer_info[0];

  const thaiDate = new Date(quotation_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  const validUntilDate = new Date(valid_until).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  const detailList = quotation_details.map((q) => `• ${q.name_for_quotation} x${q.quantity}`).join('\n');

  const message = `
📌 *แจ้งเตือนการออกใบเสนอราคาใหม่*
--------------------------------------
🧾 เลขที่ใบเสนอราคา: *${quotation_no}*
🏢 ชื่อบริษัท: *${company_name}*
🆔 เลขประจำตัวผู้เสียภาษี: *${tax_id}*
📄 รายการทดสอบ:
${detailList}
💵 ราคารวม (รวม VAT): *${parseFloat(grand_total).toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท*
📅 วันที่เสนอราคา: *${thaiDate}*
📅 ใช้ได้ถึง: *${validUntilDate}*
📌 เงื่อนไขชำระเงิน: *${payment_terms}*
📌 เงื่อนไขพิเศษ: *${special_conditions || '-'}*
🔗 ดูรายละเอียดเพิ่มเติม:
${url}/admin/issue-quotation/detail/${quotation_id}
`.trim();

  try {
    await postSendTelegramGroup({ message });
    console.log('📨 ส่งข้อความแจ้งเตือน Telegram สำเร็จ');
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการส่งข้อความ Telegram:', error);
  }
};

export const deleteQuotationNotify = async (quotationData) => {
  const { quotation_no, quotation_date, valid_until, grand_total, payment_terms, customer_info, quotation_details, quotation_id } =
    quotationData;

  const { company_name, tax_id, special_conditions } = customer_info[0];

  const thaiDate = new Date(quotation_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  const validUntilDate = new Date(valid_until).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  const detailList = quotation_details.map((q) => `• ${q.name_for_quotation} x${q.quantity}`).join('\n');

  const message = `
📌 *แจ้งเตือนการลบใบเสนอราคา*
--------------------------------------
🧾 เลขที่ใบเสนอราคา: *${quotation_no}*
🏢 ชื่อบริษัท: *${company_name}*
🆔 เลขประจำตัวผู้เสียภาษี: *${tax_id}*
📄 รายการทดสอบ:
📅 วันที่ลบเสนอราคา: *${thaiDate}*
`.trim();

  try {
    await postSendTelegramGroup({ message });
    console.log('📨 ส่งข้อความแจ้งเตือน Telegram สำเร็จ');
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการส่งข้อความ Telegram:', error);
  }
};
