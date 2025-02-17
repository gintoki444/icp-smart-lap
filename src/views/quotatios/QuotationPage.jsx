import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../../assets/scss/partials/Quotation.css'; // สร้างไฟล์ CSS สำหรับการจัดหน้า
import logo from '../../assets/images/logo/logo.png'; // สร้างไฟล์ CSS สำหรับการจัดหน้า
import { useNavigate } from 'react-router-dom';

const Quotation = () => {
  const [print, setPrint] = useState(false);
  const navigate = useNavigate();
  const handlePrint = () => {
    setPrint(true);

    setTimeout(() => {
      window.print();
    }, 1000);
    setTimeout(() => {
      setPrint(false);
    }, 3000);
  };

  return (
    <div className="quotation-container" style={{ marginTop: print ? 0 : 20 }}>
      <div className="quotation-header">
        {/* โลโก้บริษัท */}
        <div className="text-center">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="company-info">
          <h3>ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด</h3>
          <p className="mt-2 text-sm">
            307 หมู่ 7 ต.ชุมแสง อ.ทุ่งสง จ.ศรีราชา 20330
            <br />
            โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091
          </p>
        </div>
        <div className="quotation-meta">
          <p>
            <strong style={{ fontWeight: 'bold', color: '#000' }}>วันที่:</strong> 16/10/24
          </p>
          <p>
            <strong style={{ fontWeight: 'bold', color: '#000' }}>เลขที่ใบเสนอราคา:</strong> QT241039
          </p>
        </div>
      </div>
      <div className="quotation-body">
        <p>
          <strong style={{ fontWeight: 'bold', color: '#000' }}>เรียน : </strong> บริษัท เอบีซี จำกัด <br />
          <strong style={{ fontWeight: 'bold', color: '#000' }}>ที่อยู่ :</strong> 123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ
        </p>
        <p></p>
        <p>ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:</p>
        <Table bordered hover className="quotation-table">
          <thead>
            <tr>
              <th>ลำดับที่</th>
              <th>รายการทดสอบ</th>
              <th className="text-end">ราคาต่ออย่าง (บาท)</th>
              <th className="text-end">จำนวนตัวอย่าง</th>
              <th className="text-end">ราคารวม (บาท)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ความเป็นกรด-ด่าง (pH)</td>
              <td className="text-end">100.00</td>
              <td className="text-end">2</td>
              <td className="text-end">200.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ความถ่วงจำเพาะ (Specific Gravity)</td>
              <td className="text-end">100.00</td>
              <td className="text-end">2</td>
              <td className="text-end">200.00</td>
            </tr>
            <tr>
              <td>3</td>
              <td>ไนโตรเจนทั้งหมด (Total Nitrogen)</td>
              <td className="text-end">1,800.00</td>
              <td className="text-end">1</td>
              <td className="text-end">1,800.00</td>
            </tr>
            <tr>
              <td>4</td>
              <td>ฟอสฟอรัสที่เป็นประโยชน์ (Available Phosphorus)</td>
              <td className="text-end">1,800.00</td>
              <td className="text-end">1</td>
              <td className="text-end">1,800.00</td>
            </tr>
            <tr>
              <td>5</td>
              <td>โพแทสเซียมทั้งหมด (Total Potassium)</td>
              <td className="text-end">1,000.00</td>
              <td className="text-end">2</td>
              <td className="text-end">2,000.00</td>
            </tr>
            <tr>
              <td colSpan={4}>ค่าบริการวิเคราะห์ทดสอบ</td>
              <td className="text-end">6,800.00</td>
            </tr>
            <tr>
              <td colSpan={4}>ภาษีมูลค่าเพิ่ม (Vat 7%)</td>
              <td className="text-end">476.00</td>
            </tr>
            <tr>
              <td colSpan={4}>หักภาษี ณ ที่จ่าย 3%</td>
              <td className="text-end">-</td>
            </tr>
            <tr>
              <td colSpan={4}>จำนวนเงินสุทธิ</td>
              <td className="text-end">
                <strong>7,276.00</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="quotation-footer">
        <p>
          <strong className="text-black">เงื่อนไขการชำระเงิน:</strong>
          <br />
          1. โอนเงินผ่านบัญชีธนาคาร บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด (เลขประจำตัวผู้เสียภาษี: 0205547009421)
          <br />
          2. จัดส่งหลักฐานการโอนเงิน และเอกสารประกอบทั้งหมดมาที่ somluk.meesakun@icpinter.com
        </p>
        <Table bordered className="bank-details">
          <thead>
            <tr>
              <th>ธนาคาร</th>
              <th>สาขา</th>
              <th>ประเภทบัญชี</th>
              <th>เลขที่บัญชี</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ไทยพาณิชย์</td>
              <td>ชลบุรี</td>
              <td>กระแสรายวัน</td>
              <td>001-3-50193-0</td>
            </tr>
            <tr>
              <td>กสิกรไทย</td>
              <td>พัฒนาการ</td>
              <td>กระแสรายวัน</td>
              <td>018-1-14367-3</td>
            </tr>
            <tr>
              <td>ทหารไทย</td>
              <td>สุรวงศ์</td>
              <td>กระแสรายวัน</td>
              <td>078-1-18116-9</td>
            </tr>
          </tbody>
        </Table>
        <p className="text-end">
          ขอแสดงความนับถือ
          <br />
          ผู้จัดการห้องปฏิบัติการ
        </p>
      </div>
      <div className="text-center mt-4">
        {!print && (
          <>
            <Button variant="primary" onClick={handlePrint}>
              <i className="feather icon-printer" />
              พิมพ์ใบเสนอราคา
            </Button>
            <Button variant="danger" onClick={() => navigate('/user/request/detial')}>
              <i className="feather icon-arrow-left" />
              ย้อนกลับ
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quotation;
