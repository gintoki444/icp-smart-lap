import React, { useState } from 'react';
import { Modal, Button, Form, Table, Image } from 'react-bootstrap';

const AddTestTracking = ({ handleTracking }) => {
  const [showModal, setShowModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [proofImage, setProofImage] = useState(null);
  const [proofImageFile, setProofImageFile] = useState(null);
  const [deliveryData, setDeliveryData] = useState([]);

  const handleAddData = () => {
    if (!deliveryType || !trackingNumber || !proofImage) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // เพิ่มข้อมูลใหม่ในตาราง
    setDeliveryData([
      ...deliveryData,
      {
        id: Date.now(),
        deliveryType,
        trackingNumber,
        proofImage,
        proofImageFile
      }
    ]);
    handleTracking(true);

    // ปิด Modal และรีเซ็ตฟอร์ม
    setShowModal(false);
    setDeliveryType('');
    setTrackingNumber('');
    setProofImage(null);
    setProofImageFile(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProofImage(URL.createObjectURL(file));
      setProofImageFile(file);
    }
  };
  return (
    <>
      {/* ปุ่มเปิด Modal */}
      <h5 className="mb-3">ข้อมูลการจัดส่งตัวอย่าง</h5>
      {/* ตารางแสดงข้อมูลการจัดส่ง */}
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th width={80}>#</th>
            <th>ประเภทการจัดส่ง</th>
            <th>หมายเลข Tracking</th>
            <th>หลักฐานการส่ง</th>
          </tr>
        </thead>
        <tbody>
          {deliveryData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.deliveryType}</td>
              <td>{data.trackingNumber}</td>
              <td>{data.proofImage && <Image src={data.proofImage} alt="Proof" thumbnail style={{ maxHeight: '100px' }} />}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={() => setShowModal(true)}>
        เพิ่มข้อมูลการจัดส่ง
      </Button>

      {/* Modal สำหรับเพิ่มข้อมูล */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>รายละเอียดการจัดส่งตัวอย่าง</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ประเภทการจัดส่ง</Form.Label>
              <Form.Select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                <option value="">เลือกประเภทการจัดส่ง</option>
                <option value="ส่งไปรษณีย์">ส่งไปรษณีย์</option>
                <option value="ส่ง J&T">ส่ง J&T</option>
                <option value="ส่ง DHL">ส่ง DHL</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>หมายเลข Tracking</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกหมายเลข Tracking"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>หลักฐานการส่ง</Form.Label>
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
    </>
  );
};

export default AddTestTracking;
