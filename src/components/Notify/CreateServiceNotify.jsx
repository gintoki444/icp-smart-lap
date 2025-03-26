import { postSendTelegramGroup } from 'services/_api/telegramNotifyRequest';

export const createServiceNotify = async (data, companyData, spacialCon, url, id) => {
  const { company_code, company_name, tax_id } = companyData;

  const sampleTypeText = data.sample_type_id === 1 ? 'ปุ๋ยอินทรีย์' : 'ปุ๋ยเคมี';
  const sampleCount = data.fertilizerRecords?.length || 0;

  const spacialConditionsText =
    spacialCon.length > 0 ? spacialCon.map((x, index) => `${x.description}${index < spacialCon.length - 1 ? ', ' : ''}`).join('') : '-';

  const requestId = id;
  const createdAt = new Date().toLocaleString('th-TH', { dateStyle: 'long', timeStyle: 'short' });

  const message = `
📌 *แจ้งเตือนการลงทะเบียนขอรับบริการใหม่*
--------------------------------------
🏷️ รหัสลูกค้า: *${company_code}*
🏢 ชื่อบริษัท: *${company_name}*
🧾 เลขประจำตัวผู้เสียภาษี: *${tax_id}*
📦 ประเภทปุ๋ย: *${sampleTypeText}*
🔢 จำนวนตัวอย่าง: *${sampleCount}*
📄 เงื่อนไขพิเศษ: *${spacialConditionsText}*
🗓️ วันที่สร้าง: *${createdAt}*
🔗 รายละเอียดเพิ่มเติม:
${url}/admin/request/verify/${requestId}
`.trim();

  try {
    await postSendTelegramGroup({ message });
    console.log('📨 ส่งข้อความแจ้งเตือน Telegram สำเร็จ');
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการส่งข้อความ Telegram:', error);
  }
};
