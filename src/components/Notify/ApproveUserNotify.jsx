import { postSendTextEmail } from 'services/_api/emailRequest';
import { postSendTelegramGroup } from 'services/_api/telegramNotifyRequest';

export const approveUserNotify = async (approvedUser, approverUser, status) => {
  const approvedFullName = approvedUser.fullName || `${approvedUser.first_name} ${approvedUser.last_name}`;
  const approvedEmail = approvedUser.email || '-';
  const approvedPhone = approvedUser.phone || '-';
  const approvedRole = approvedUser.role_name || '-';

  const approverName = approverUser.username || '-';
  const approverEmail = approverUser.email || '-';
  const approverRole = approverUser.role || '-';

  const approvedAt = new Date().toLocaleString('th-TH', { dateStyle: 'long', timeStyle: 'short' });

  const isApproved = status === 'Y';

  const messageTitle = isApproved ? '✅ *ระบบแจ้งเตือนการอนุมัติผู้ใช้งาน*' : '⚠️ *ระบบแจ้งเตือนยกเลิกอนุมัติผู้ใช้งาน*';

  const message = `
${messageTitle}
--------------------------------------
👤 *ชื่อผู้ใช้งาน:* ${approvedFullName}
📧 *อีเมล:* ${approvedEmail}
📱 *เบอร์โทร:* ${approvedPhone}
🛡️ *สิทธิ์ผู้ใช้งาน:* ${approvedRole}

📝 *ผู้${isApproved ? 'อนุมัติ' : 'ดำเนินการ'}:* ${approverName} (${approverRole})
📧 *อีเมลผู้${isApproved ? 'อนุมัติ' : 'ดำเนินการ'}:* ${approverEmail}
📅 *วันที่${isApproved ? 'อนุมัติ' : 'ดำเนินการ'}:* ${approvedAt}
`.trim();

  // ถ้าเป็นสถานะอนุมัติเท่านั้น ให้ส่งอีเมลแจ้งผู้ใช้งาน
  if (isApproved) {
    const textMail = {
      toEmail: approvedUser.email,
      subject: 'แจ้งอนุมัติผู้ใช้งานระบบ ICP Smart Lab',
      message: `
เรียนคุณ ${approvedFullName},

บัญชีของคุณได้รับการ *อนุมัติ* ให้เข้าใช้งานระบบ ICP Smart Lab แล้วเรียบร้อย

คุณสามารถเข้าสู่ระบบเพื่อใช้งานได้ทันทีผ่านลิงก์:
🌐 https://icp-smartlab.com/login

หากคุณมีคำถามหรือต้องการความช่วยเหลือ กรุณาติดต่อผู้ดูแลระบบของคุณ

ขอขอบคุณ,
ทีมงาน ICP Smart Lab
      `.trim(),
      username: approvedFullName
    };

    try {
      await postSendTextEmail({ textMail });
      console.log('📧 ส่งอีเมลแจ้งเตือนผู้ใช้งานเรียบร้อยแล้ว');
    } catch (error) {
      console.error('❌ ส่งอีเมลไม่สำเร็จ:', error);
    }
  }

  // ส่งข้อความเข้า Telegram ทุกกรณี (อนุมัติ หรือ ยกเลิกอนุมัติ)
  try {
    await postSendTelegramGroup({ message });
    console.log('📨 ส่งข้อความแจ้งเตือน Telegram สำเร็จ');
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการส่งข้อความ Telegram:', error);
  }
};
