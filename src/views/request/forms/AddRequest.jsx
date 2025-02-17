import React, { useState } from 'react';
import { Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { ChemicalFertilizerForm } from './ChemicalFertilizerForm';
import { OrganicFertilizerForm } from './OrganicFertilizerForm';
import { useNavigate } from 'react-router-dom';
import { GiFertilizerBag, GiChemicalTank } from 'react-icons/gi';

const RegistrationForm = () => {
  const navagate = useNavigate();
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
    <>
      {selectedForm === null && (
        <Card>
          <Card.Header>
            <h5>เลือกการขอรับบริการ</h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-center">
              <Button
                variant="info"
                className="w-50 py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('organic')}
              >
                <GiFertilizerBag size={45} className="mb-2" />
                แบบฟอร์มนำส่งตัวอย่างปุ๋ยอินทรีย์
              </Button>
              <Button
                variant="success"
                className="w-50  py-4 d-flex align-items-center justify-content-center flex-column"
                onClick={() => handleFormSelection('chemical')}
              >
                <GiChemicalTank size={45} className="mb-2" />
                แบบฟอร์มนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
      {selectedForm === 'organic' && <OrganicFertilizerForm onHandleSave={setShowSuccessModal} />}
      {selectedForm === 'chemical' && <ChemicalFertilizerForm onHandleSave={setShowSuccessModal} />}

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center">
          <i className="text-success" style={{ fontSize: '3rem' }}>
            &#10004;
          </i>
          <h5 className="mt-3">ลงทะเบียนขอรับบริการสำเร็จ</h5>
          <p>กรุณารอผลการตรวจสอบคำขอใช้บริการ</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => navagate('/user/request/')}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegistrationForm;
