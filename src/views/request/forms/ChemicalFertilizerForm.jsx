import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export const ChemicalFertilizerForm = () => {
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

  // Chemical Fertilizer Form States
  const [chemicalCompany, setChemicalCompany] = useState('');
  const [fertilizerCategory, setFertilizerCategory] = useState([]);
  const [chemicalFertilizerType, setChemicalFertilizerType] = useState('');
  const [chemicalColor, setChemicalColor] = useState([]);
  const [formula, setFormula] = useState('');
  const [chemicalContainer, setChemicalContainer] = useState('');
  const [otherChemicalContainer, setOtherChemicalContainer] = useState('');
  const [chemicalTradeName, setChemicalTradeName] = useState('');
  const [chemicalTrademark, setChemicalTrademark] = useState('');
  const [chemicalManufacturer, setChemicalManufacturer] = useState('');
  const [chemicalCountry, setChemicalCountry] = useState('');
  const [chemicalOrderedFrom, setChemicalOrderedFrom] = useState('');
  const [chemicalComponents, setChemicalComponents] = useState([]);
  const [chemicalTests, setChemicalTests] = useState([]);
  const [otherChemicalTest, setOtherChemicalTest] = useState('');
  const [chemicalReportMethod, setChemicalReportMethod] = useState([]);
  const [chemicalEmail, setChemicalEmail] = useState('');
  const [chemicalSameAddress, setChemicalSameAddress] = useState(true);
  const [chemicalAddress, setChemicalAddress] = useState('');
  const [chemicalProvince, setChemicalProvince] = useState('');
  const [chemicalDistrict, setChemicalDistrict] = useState('');
  const [chemicalSubDistrict, setChemicalSubDistrict] = useState('');
  const [chemicalPostalCode, setChemicalPostalCode] = useState('');
  const [chemicalPhone, setChemicalPhone] = useState('');
  const [sampleDisposal, setSampleDisposal] = useState('');
  const [otherRequirements, setOtherRequirements] = useState('');

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleChange = (selected) => {
    setChemicalColor(selected);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>
          <h5>แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย</h5>
        </Card.Header>
        <Card.Body>
          {/* ข้อมูลผู้ขึ้นทะเบียน */}
          <Form.Group className="mb-3">
            <Form.Label>บริษัท</Form.Label>
            <Form.Select value={chemicalCompany} onChange={(e) => setChemicalCompany(e.target.value)} required>
              <option value="">เลือกบริษัท</option>
              <option value="บริษัทตัวอย่าง 1">บริษัทตัวอย่าง 1</option>
              <option value="บริษัทตัวอย่าง 2">บริษัทตัวอย่าง 2</option>
            </Form.Select>
          </Form.Group>

          {/* ข้อมูลตัวอย่าง */}
          <Form.Group className="mb-3">
            <Form.Label>ประเภทของปุ๋ย</Form.Label>
            {['เชิงเดี่ยว', 'เชิงประกอบ', 'เชิงผสม', 'ธาตุอาหารรอง-ธาตุอาหารเสริม'].map((category, index) => (
              <Form.Check
                inline
                type="checkbox"
                label={category}
                key={index}
                checked={fertilizerCategory.includes(category)}
                onChange={(e) =>
                  setFertilizerCategory(
                    e.target.checked ? [...fertilizerCategory, category] : fertilizerCategory.filter((item) => item !== category)
                  )
                }
                id={`fertilizerCategory${index + 1}`}
              />
            ))}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ลักษณะปุ๋ย</Form.Label>
            <Form.Select value={chemicalFertilizerType} onChange={(e) => setChemicalFertilizerType(e.target.value)} required>
              <option value="">เลือกลักษณะปุ๋ย</option>
              {['เม็ด', 'อัดเม็ด', 'ผง', 'ปุ๋ยน้ำ', 'อื่นๆ'].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
            {chemicalFertilizerType === 'อื่นๆ' && (
              <Form.Control
                type="text"
                placeholder="ระบุลักษณะปุ๋ย"
                value={otherChemicalContainer}
                onChange={(e) => setOtherChemicalContainer(e.target.value)}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>สี</Form.Label>
            <Select isMulti options={optionsColor} value={chemicalColor} onChange={handleChange} required />
            {/* <Form.Select
              multiple
              value={chemicalColor}
              onChange={(e) => setChemicalColor(Array.from(e.target.selectedOptions, (option) => option.value))}
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
            <Form.Label>สูตรปุ๋ย</Form.Label>
            <Form.Select value={formula} onChange={(e) => setFormula(e.target.value)} required>
              <option value="">เลือกสูตรปุ๋ย</option>
              {['15-15-15', '20-25-0', '16-16-16'].map((formula, index) => (
                <option key={index} value={formula}>
                  {formula}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ภาชนะบรรจุ</Form.Label>
            <Form.Select value={chemicalContainer} onChange={(e) => setChemicalContainer(e.target.value)} required>
              <option value="">เลือกภาชนะบรรจุ</option>
              {['ถุงพลาสติก', 'กล่อง', 'ขวดแก้ว', 'ขวดพลาสติก', 'กระป๋อง', 'อื่นๆ'].map((container, index) => (
                <option key={index} value={container}>
                  {container}
                </option>
              ))}
            </Form.Select>
            {chemicalContainer === 'อื่นๆ' && (
              <Form.Control
                type="text"
                placeholder="ระบุภาชนะบรรจุ"
                value={otherChemicalContainer}
                onChange={(e) => setOtherChemicalContainer(e.target.value)}
              />
            )}
          </Form.Group>

          {/* ข้อมูลการค้า */}
          <Form.Group className="mb-3">
            <Form.Label>ชื่อการค้า</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อการค้า"
              value={chemicalTradeName}
              onChange={(e) => setChemicalTradeName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>เครื่องหมายการค้า</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกเครื่องหมายการค้า"
              value={chemicalTrademark}
              onChange={(e) => setChemicalTrademark(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ชื่อผู้ผลิต</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อผู้ผลิต"
              value={chemicalManufacturer}
              onChange={(e) => setChemicalManufacturer(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ประเทศ</Form.Label>
            <Form.Select value={chemicalCountry} onChange={(e) => setChemicalCountry(e.target.value)} required>
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
              value={chemicalOrderedFrom}
              onChange={(e) => setChemicalOrderedFrom(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>วัตถุส่วนประกอบของปุ๋ย</Form.Label>
            <Select
              isMulti
              options={[
                { value: 'ammonia', label: 'ammonia' },
                { value: 'nitric-acid', label: 'nitric acid' },
                { value: 'ammonium-phosphate', label: 'ammonium phosphate' },
                { value: 'sulfuric-acid', label: 'sulfuric acid' }
              ]}
              value={chemicalComponents}
              onChange={(e) => setChemicalComponents(e)}
              required
            />
            {/* <Form.Select
              multiple
              value={chemicalComponents}
              onChange={(e) => setChemicalComponents(Array.from(e.target.selectedOptions, (option) => option.value))}
              required
            >
              {['ammonia', 'nitric acid', 'ammonium phosphate', 'sulfuric acid'].map((component, index) => (
                <option key={index} value={component}>
                  {component}
                </option>
              ))}
            </Form.Select> */}
          </Form.Group>

          {/* รายการทดสอบ */}
          <Form.Group className="mb-3">
            <Form.Label>รายการทดสอบ</Form.Label>
            <Row>
              {[
                'pH',
                'Sp.Gr.',
                'MC',
                'TN',
                'AN',
                'NN',
                'UN',
                'WP₂O₅',
                'AVP₂O₅',
                'WK₂O',
                'WCa',
                'WMg',
                'WS',
                'WFe',
                'WZn',
                'WMn',
                'WCu',
                'WB',
                'WMo',
                'CI',
                'Biurel',
                'Biuret-N',
                'OM',
                'Fineness',
                'อื่นๆ'
              ].map((test, index) => (
                <Col xs={6} md={4} lg={2} key={index}>
                  {' '}
                  {/* จัด 6 คอลัมน์ในแต่ละแถว */}
                  <Form.Check
                    type="checkbox"
                    label={test}
                    checked={chemicalTests.includes(test)}
                    onChange={(e) =>
                      setChemicalTests(e.target.checked ? [...chemicalTests, test] : chemicalTests.filter((item) => item !== test))
                    }
                    id={`chemicalTestCheck${index + 1}`}
                  />
                </Col>
              ))}
            </Row>
            {chemicalTests.includes('อื่นๆ') && (
              <Form.Control
                type="text"
                placeholder="ระบุรายการทดสอบ"
                value={otherChemicalTest}
                onChange={(e) => setOtherChemicalTest(e.target.value)}
              />
            )}
          </Form.Group>

          {/* การรับรายงานผล */}
          <Form.Group className="mb-3">
            <Form.Label>การรับรายงานผล</Form.Label>
            <Form.Check
              inline
              type="checkbox"
              label="รับด้วยตัวอย่าง"
              checked={chemicalReportMethod.includes('รับด้วยตัวอย่าง')}
              onChange={(e) =>
                setChemicalReportMethod(
                  e.target.checked
                    ? [...chemicalReportMethod, 'รับด้วยตัวอย่าง']
                    : chemicalReportMethod.filter((item) => item !== 'รับด้วยตัวอย่าง')
                )
              }
              id="chemicalReportCheck1"
            />
            <Form.Check
              inline
              type="checkbox"
              label="ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail"
              checked={chemicalReportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')}
              onChange={(e) =>
                setChemicalReportMethod(
                  e.target.checked
                    ? [...chemicalReportMethod, 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail']
                    : chemicalReportMethod.filter((item) => item !== 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail')
                )
              }
              id="chemicalReportCheck2"
            />
            {chemicalReportMethod.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail') && (
              <Form.Control
                type="email"
                placeholder="กรอกอีเมล"
                value={chemicalEmail}
                onChange={(e) => setChemicalEmail(e.target.value)}
                required
              />
            )}
            <Form.Check
              inline
              type="checkbox"
              label="ส่งทางไปรษณีย์"
              checked={chemicalReportMethod.includes('ส่งทางไปรษณีย์')}
              onChange={(e) =>
                setChemicalReportMethod(
                  e.target.checked
                    ? [...chemicalReportMethod, 'ส่งทางไปรษณีย์']
                    : chemicalReportMethod.filter((item) => item !== 'ส่งทางไปรษณีย์')
                )
              }
              id="chemicalReportCheck3"
            />
            {chemicalReportMethod.includes('ส่งทางไปรษณีย์') && (
              <>
                <Form.Check
                  inline
                  type="radio"
                  label="ที่อยู่เดียวกับบริษัทที่ลงทะเบียน"
                  checked={chemicalSameAddress}
                  onChange={() => setChemicalSameAddress(true)}
                  id="chemicalSameAddressRadio1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="ที่อยู่ต่างจากบริษัทที่ลงทะเบียน"
                  checked={!chemicalSameAddress}
                  onChange={() => setChemicalSameAddress(false)}
                  id="chemicalSameAddressRadio2"
                />
                {!chemicalSameAddress && (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="กรอกที่อยู่"
                      value={chemicalAddress}
                      onChange={(e) => setChemicalAddress(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกจังหวัด"
                      value={chemicalProvince}
                      onChange={(e) => setChemicalProvince(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกอำเภอ"
                      value={chemicalDistrict}
                      onChange={(e) => setChemicalDistrict(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกตำบล"
                      value={chemicalSubDistrict}
                      onChange={(e) => setChemicalSubDistrict(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกเลขที่ไปรษณีย์"
                      value={chemicalPostalCode}
                      onChange={(e) => setChemicalPostalCode(e.target.value)}
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={chemicalPhone}
                      onChange={(e) => setChemicalPhone(e.target.value)}
                      required
                    />
                  </>
                )}
              </>
            )}
          </Form.Group>

          {/* การจำหน่ายตัวอย่าง */}
          <Form.Group className="mb-3">
            <Form.Label>การจำหน่ายตัวอย่าง</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง"
              checked={sampleDisposal === 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง'}
              onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง')}
              id="sampleDisposalRadio1"
            />
            <Form.Check
              inline
              type="radio"
              label="มารับตัวอย่างคืนภายใน 3 เดือน"
              checked={sampleDisposal === 'มารับตัวอย่างคืนภายใน 3 เดือน'}
              onChange={() => setSampleDisposal('มารับตัวอย่างคืนภายใน 3 เดือน')}
              id="sampleDisposalRadio2"
            />
            <Form.Check
              inline
              type="radio"
              label="ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน"
              checked={sampleDisposal === 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน'}
              onChange={() => setSampleDisposal('ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน')}
              id="sampleDisposalRadio3"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ความต้องการอื่น</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="กรอกความต้องการอื่น"
              value={otherRequirements}
              onChange={(e) => setOtherRequirements(e.target.value)}
            />
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
