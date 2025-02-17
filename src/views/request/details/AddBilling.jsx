import React, { useState } from 'react';
import { Modal, Button, Form, Table, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBilling = ({ handleBilling }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [payDate, setPayDate] = useState('');
  const [billingNo, setBillingNo] = useState('');
  const [billing, setBilling] = useState('');
  const [proofImage, setProofImage] = useState(null);
  const [proofImageFile, setProofImageFile] = useState(null);
  const [deliveryData, setDeliveryData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Example items data
  const items = [
    { id: 1, name: 'ความเป็นกรด-ด่าง (pH)', price: 100, quantity: 2, summary: 200 },
    { id: 2, name: 'ความถ่วงจำเพาะ (Specific Gravity)', price: 300, quantity: 1, summary: 200 },
    { id: 3, name: 'ไนโตรเจนทั้งหมด (Total Nitrogen)', price: 1800, quantity: 3, summary: 1800 },
    { id: 4, name: 'ฟอสฟอรัสที่เป็นประโยชน์ (Available Phosphorus)', price: 1800, quantity: 1, summary: 1800 },
    { id: 5, name: 'โพแทสเซียมทั้งหมด (Total Potassium)', price: 1000, quantity: 2, summary: 2000 }
  ];

  // Add billing data
  const handleAddData = () => {
    if (!billing || !proofImage) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    setDeliveryData([
      ...deliveryData,
      {
        id: Date.now(),
        billing,
        proofImage,
        proofImageFile
      }
    ]);
    handleBilling(true);
    setShowModal(false);
    setBilling('');
    setProofImage(null);
    setProofImageFile(null);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProofImage(URL.createObjectURL(file));
      setProofImageFile(file);
    }
  };

  // Handle selecting items
  const handleItemSelection = (item) => {
    const isSelected = selectedItems.find((selected) => selected.id === item.id);

    if (isSelected) {
      const updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
      setSelectedItems(updatedItems);
      setTotalPrice(updatedItems.reduce((sum, curr) => sum + curr.price * curr.quantity, 0));
    } else {
      const updatedItems = [...selectedItems, item];
      setSelectedItems(updatedItems);
      setTotalPrice(updatedItems.reduce((sum, curr) => sum + curr.price * curr.quantity, 0));
    }
  };
  const handleOpenNewTab = () => {
    const url = '/user/request/detial/quotation';
    window.open(url, '_blank'); // เปิด URL ในแท็บใหม่
  };
  return (
    <>
      {/* Payment Table */}
      <h5 className="mb-3 mt-4">ข้อมูลการชำระเงิน</h5>
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th width={80}>#</th>
            <th>เลขที่ใบเสนอราคา</th>
            <th>วันที่ชำระเงิน</th>
            <th>ช่องการชำระเงิน</th>
            <th>หลักฐานการส่ง</th>
          </tr>
        </thead>
        <tbody>
          {deliveryData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.billing}</td>
              <td>{data.billingNo}</td>
              <td>{data.payDate}</td>
              <td>{data.proofImage && <Image src={data.proofImage} alt="Proof" thumbnail style={{ maxHeight: '100px' }} />}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Buttons */}
      <div className="d-flex gap-1">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ยืนยันการชำระเงิน
        </Button>
        <Button variant="success" onClick={() => setShowPaymentModal(true)}>
          ชำระเงิน
        </Button>
      </div>

      {/* Modal for Billing */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>รายละเอียดชำระเงิน</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>เลขที่ใบเสนอราคา : </Form.Label>
              <Form.Control
                type="text"
                placeholder="เลขที่ใบเสนอราคา"
                value={billingNo}
                onChange={(e) => setBillingNo(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>วันที่ชำระเงิน : </Form.Label>
              <Form.Control
                type="text"
                placeholder="วันที่ชำระเงิน"
                value={payDate}
                onChange={(e) => setPayDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ประเภท</Form.Label>
              <Form.Select value={billing} onChange={(e) => setBilling(e.target.value)}>
                <option value="">ช่องการชำระเงิน</option>
                <option value="โอนเงินผ่านบัญชีธนาคาร">โอนเงินผ่านบัญชีธนาคาร</option>
                <option value="บัตรเครดิต">บัตรเครดิต</option>
                <option value="PromptPay">PromptPay</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>หลักฐานการชำระเงิน</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileUpload} />
              {proofImage && (
                <div className="mt-3">
                  <Image src={proofImage} alt="Proof" thumbnail style={{ maxHeight: '200px' }} />
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAddData}>
            บันทึก
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Payment */}
      <Modal show={showPaymentModal} className="modal-lg" onHide={() => setShowPaymentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>เลือกตัวอย่างที่ต้องการชำระเงิน</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>
            <thead>
              <tr>
                <th>เลือก</th>
                <th>ตัวอย่าง</th>
                <th>จำนวน</th>
                <th>ราคา</th>
                <th>รวม</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} onClick={() => handleItemSelection(item)}>
                  <td>
                    <Form.Check type="checkbox" checked={selectedItems.some((selected) => selected.id === item.id)} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end mt-3">
            <h6>รวมทั้งหมด: {totalPrice.toFixed(2)} บาท</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              setShowPaymentModal(false);
              handleOpenNewTab();
            }}
          >
            ยืนยัน
          </Button>
          <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBilling;
