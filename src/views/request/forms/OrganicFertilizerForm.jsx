import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export const OrganicFertilizerForm = () => {
  const navigate = useNavigate();

  const [selectedForm, setSelectedForm] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const optionsColor = [
    { value: 'dark', label: 'ดำ' },
    { value: 'white', label: 'ขาว' },
    { value: 'red', label: 'แดง' },
    { value: 'blue', label: 'น้ำเงิน' },
    { value: 'green', label: 'เขียว' },
    { value: 'yellow', label: 'เหลือง' },
    { value: 'purple', label: 'ม่วง' }
  ];

  // Organic Fertilizer Form States
  const [company, setCompany] = useState('');
  const [purpose, setPurpose] = useState([]);
  const [fertilizerType, setFertilizerType] = useState([]);
  const [color, setColor] = useState([]);
  const [container, setContainer] = useState('');
  const [otherContainer, setOtherContainer] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [trademark, setTrademark] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [country, setCountry] = useState('');
  const [orderedFrom, setOrderedFrom] = useState('');
  const [tests, setTests] = useState([]);
  const [otherTest, setOtherTest] = useState('');
  const [reportMethod, setReportMethod] = useState([]);
  const [email, setEmail] = useState('');
  const [sameAddress, setSameAddress] = useState(true);
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleChange = (selected) => {
    setColor(selected);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>
          <h5>แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์</h5>
        </Card.Header>
        <Card.Body>
          {/* ข้อมูลผู้ขึ้นทะเบียน */}
          <Form.Group className="mb-3">
            <Form.Label>บริษัท</Form.Label>
            <Form.Select value={company} onChange={(e) => setCompany(e.target.value)} required>
              <option value="">เลือกบริษัท</option>
              <option value="บริษัทตัวอย่าง 1">บริษัทตัวอย่าง 1</option>
              <option value="บริษัทตัวอย่าง 2">บริษัทตัวอย่าง 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>วัตถุประสงค์การขอใช้บริการ</Form.Label>
            <Form.Group>
              <Form.Check
                inline
                type="checkbox"
                label="วิเคราะห์ขึ้นทะเบียน"
                checked={purpose.includes('วิเคราะห์ขึ้นทะเบียน')}
                onChange={(e) =>
                  setPurpose(
                    e.target.checked ? [...purpose, 'วิเคราะห์ขึ้นทะเบียน'] : purpose.filter((item) => item !== 'วิเคราะห์ขึ้นทะเบียน')
                  )
                }
                id="purposeCheck1"
              />
              <Form.Check
                inline
                type="checkbox"
                label="วิเคราะห์เพื่อตรวจสอบคุณภาพ"
                checked={purpose.includes('วิเคราะห์เพื่อตรวจสอบคุณภาพ')}
                onChange={(e) =>
                  setPurpose(
                    e.target.checked
                      ? [...purpose, 'วิเคราะห์เพื่อตรวจสอบคุณภาพ']
                      : purpose.filter((item) => item !== 'วิเคราะห์เพื่อตรวจสอบคุณภาพ')
                  )
                }
                id="purposeCheck2"
              />
            </Form.Group>
          </Form.Group>

          {/* ข้อมูลตัวอย่าง */}
          <Form.Group className="mb-3">
            <Form.Label className="">ลักษณะปุ๋ย</Form.Label>
            <Form.Group>
              {['เม็ด', 'อัดเม็ด', 'ผง', 'ปุ๋ยน้ำ', 'อื่นๆ'].map((type, index) => (
                <Form.Check
                  inline
                  type="checkbox"
                  label={type}
                  key={index}
                  checked={fertilizerType.includes(type)}
                  onChange={(e) =>
                    setFertilizerType(e.target.checked ? [...fertilizerType, type] : fertilizerType.filter((item) => item !== type))
                  }
                  id={`fertilizerType${index + 1}`}
                />
              ))}
              {fertilizerType.includes('อื่นๆ') && (
                <Form.Control
                  type="text"
                  placeholder="ระบุลักษณะปุ๋ย"
                  value={otherContainer}
                  onChange={(e) => setOtherContainer(e.target.value)}
                />
              )}
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>สี</Form.Label>
            <Select isMulti options={optionsColor} value={color} onChange={handleChange} required />
            {/* <Form.Select
              multiple
              value={color}
              onChange={(e) => setColor(Array.from(e.target.selectedOptions, (option) => option.value))}
              required
            >
              {['ดำ', 'ขาว', 'แดง', 'ชมพู', 'น้ำตาล', 'ใส'].map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </Form.Select> */}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ภาชนะบรรจุ</Form.Label>
            <Form.Select value={container} onChange={(e) => setContainer(e.target.value)} required>
              <option value="">เลือกภาชนะบรรจุ</option>
              {['ถุงพลาสติก', 'กล่อง', 'ขวดแก้ว', 'ขวดพลาสติก', 'กระป๋อง', 'อื่นๆ'].map((container, index) => (
                <option key={index} value={container}>
                  {container}
                </option>
              ))}
            </Form.Select>
            {container === 'อื่นๆ' && (
              <Form.Control
                type="text"
                placeholder="ระบุภาชนะบรรจุ"
                value={otherContainer}
                onChange={(e) => setOtherContainer(e.target.value)}
              />
            )}
          </Form.Group>

          {/* ข้อมูลการค้า */}
          <Form.Group className="mb-3">
            <Form.Label>ชื่อการค้า</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อการค้า"
              value={tradeName}
              onChange={(e) => setTradeName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>เครื่องหมายการค้า</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกเครื่องหมายการค้า"
              value={trademark}
              onChange={(e) => setTrademark(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ชื่อผู้ผลิต</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อผู้ผลิต"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ประเทศ</Form.Label>
            <Form.Select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">เลือกประเทศ</option>
              <option value="ไทย">ไทย</option>
              <option value="อังกฤษ">อังกฤษ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>สั่งจาก (บริษัท/ห้อง/ร้าน/อื่นๆ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกข้อมูล"
              value={orderedFrom}
              onChange={(e) => setOrderedFrom(e.target.value)}
              required
            />
          </Form.Group>

          {/* รายการทดสอบ */}
          <Form.Group className="mb-3">
            <Form.Label>รายการทดสอบ</Form.Label>
            <div>
              {['pH', 'Sp.Gr.', 'MC', 'TN', 'Tp₂O₅', 'TK₂O', 'Na', 'EC', 'OM', 'อื่นๆ'].map((test, index) => (
                <Form.Check
                  inline
                  type="checkbox"
                  label={test}
                  key={index}
                  checked={tests.includes(test)}
                  onChange={(e) => setTests(e.target.checked ? [...tests, test] : tests.filter((item) => item !== test))}
                  id={`testCheck${index + 1}`}
                />
              ))}
              {tests.includes('อื่นๆ') && (
                <Form.Control type="text" placeholder="ระบุรายการทดสอบ" value={otherTest} onChange={(e) => setOtherTest(e.target.value)} />
              )}
            </div>
          </Form.Group>

          {/* การรับรายงานผล */}
          <Form.Group className="mb-3">
            <Form.Label>การรับรายงานผล</Form.Label>
            <Form.Check
              inline
              type="checkbox"
              label="รับด้วยตัวอย่าง"
              checked={reportMethod.includes('รับด้วยตัวอย่าง')}
              onChange={(e) =>
                setReportMethod(
                  e.target.checked ? [...reportMethod, 'รับด้วยตัวอย่าง'] : reportMethod.filter((item) => item !== 'รับด้วยตัวอย่าง')
                )
              }
              id="reportCheck1"
            />
            <Form.Check
              inline
              type="checkbox"
              label="ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail"
              checked={reportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')}
              onChange={(e) =>
                setReportMethod(
                  e.target.checked
                    ? [...reportMethod, 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail']
                    : reportMethod.filter((item) => item !== 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')
                )
              }
              id="reportCheck2"
            />
            {reportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail') && (
              <Form.Control type="email" placeholder="กรอกอีเมล" value={email} onChange={(e) => setEmail(e.target.value)} required />
            )}
            <Form.Check
              inline
              type="checkbox"
              label="ส่งทางไปรษณีย์"
              checked={reportMethod.includes('ส่งทางไปรษณีย์')}
              onChange={(e) =>
                setReportMethod(
                  e.target.checked ? [...reportMethod, 'ส่งทางไปรษณีย์'] : reportMethod.filter((item) => item !== 'ส่งทางไปรษณีย์')
                )
              }
              id="reportCheck3"
            />
            {reportMethod.includes('ส่งทางไปรษณีย์') && (
              <>
                <Form.Check
                  inline
                  type="radio"
                  label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                  checked={sameAddress}
                  onChange={() => setSameAddress(true)}
                  id="sameAddressRadio1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                  checked={!sameAddress}
                  onChange={() => setSameAddress(false)}
                  id="sameAddressRadio2"
                />
                {!sameAddress && (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="กรอกที่อยู่"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกจังหวัด"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกอำเภอ"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกตำบล"
                      value={subDistrict}
                      onChange={(e) => setSubDistrict(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกเลขที่ไปรษณีย์"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </>
                )}
              </>
            )}
          </Form.Group>
        </Card.Body>
        <Card.Footer className="text-start">
          <Button variant="primary" type="submit">
            <i className="feather icon-save" />
            บันทึก
          </Button>
          <Button variant="danger" onClick={() => navigate('/user/request/')}>
            <i className="feather icon-corner-up-left" />
            ย้อนกลับ
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};
