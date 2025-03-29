import QuotationTypeSelect from 'components/Selector/QuotationTypeSelect';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Table, Row, Col } from 'react-bootstrap';
import { TbInvoice } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { postQuotations, postQuotationDetails, getSampleRemainQuatity } from 'services/_api/quotationRequest'; // ปรับชื่อไฟล์ให้ถูกต้อง
import { postSampleStatus, postSampleStatusArray } from 'services/_api/sampleStatusRequest';

const CreateQuotation = ({ handleBilling, testItems = [], serviceData, createdBy, serviceId, reloadData }) => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [sampleRemain, setSampleRemain] = useState([]);

  console.log('testItems:', testItems);

  // แปลงข้อมูล testItems ให้อยู่ในรูปแบบที่แก้ไขได้
  const initialItems = testItems.map((item) => ({
    id: item.test_item_id,
    name: item.name_for_quotation,
    price: parseFloat(item.unit_price),
    quantity: item.quantity,
    maxQuantity: item.remain_quantity,
    summary: parseFloat(item.unit_price) * item.quantity,
    quotation_type_id: item.quotation_type_id
  }));

  const [items, setItems] = useState(initialItems);
  const [quotationTypeId, setQuotationTypeId] = useState('');

  useEffect(() => {
    fetchTrackingData(); // โหลดข้อมูลใหม่เมื่อ reloadData เปลี่ยน
  }, [reloadData]);
  // const [submissionId, setSubmissionId] = useState('');

  const fetchTrackingData = () => {
    if (serviceId) getSampleRemain(serviceId);
    setItems(initialItems);
    setSelectedItems([]);
    setQuotationTypeId('');
  };
  const getSampleRemain = async (id) => {
    const response = await getSampleRemainQuatity(id);
    console.log('response', response);
    setSampleRemain(response);
  };

  // คำนวณราคารวมทั้งหมด
  const calculateTotals = () => {
    const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = totalAmount * (discountPercentage / 100);
    const netTotal = totalAmount - discountAmount;
    const vatAmount = netTotal * 0.07;
    const grandTotal = netTotal + vatAmount;

    return { totalAmount, discountAmount, netTotal, vatAmount, grandTotal };
  };

  const { totalAmount, discountAmount, netTotal, vatAmount, grandTotal } = calculateTotals();

  // จัดการการเลือก/ยกเลิกเลือก item
  const handleItemSelection = (item) => {
    console.log('item:', item);
    console.log('item:', selectedItems);
    const isSelected = selectedItems.find((selected) => selected.id === item.id);
    let updatedItems;

    if (isSelected) {
      updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
    } else {
      updatedItems = [...selectedItems, { ...item }];
    }

    console.log('updatedItems:', updatedItems);
    setSelectedItems(updatedItems);
  };

  // จัดการการแก้ไข quantity
  const handleQuantityChange = (id, value) => {
    const numValue = parseInt(value) || 0;
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, Math.min(item.maxQuantity, numValue)),
            summary: item.price * Math.max(1, Math.min(item.maxQuantity, numValue))
          }
        : item
    );
    setItems(updatedItems);

    const updatedSelected = selectedItems.map((selected) =>
      selected.id === id
        ? {
            ...selected,
            quantity: Math.max(1, Math.min(selected.maxQuantity, numValue)),
            summary: selected.price * Math.max(1, Math.min(selected.maxQuantity, numValue))
          }
        : selected
    );
    setSelectedItems(updatedSelected);
  };

  // จัดการการแก้ไข unit_price
  const handlePriceChange = (id, value) => {
    const numValue = parseFloat(value) || 0;
    const updatedItems = items.map((item) => (item.id === id ? { ...item, price: numValue, summary: numValue * item.quantity } : item));
    setItems(updatedItems);

    const updatedSelected = selectedItems.map((selected) =>
      selected.id === id ? { ...selected, price: numValue, summary: numValue * selected.quantity } : selected
    );
    setSelectedItems(updatedSelected);
  };

  // จัดการส่วนลด
  const handleDiscountChange = (value) => {
    const numValue = parseFloat(value) || 0;
    setDiscountPercentage(Math.max(0, Math.min(100, numValue)));
  };

  // สร้างใบเสนอราคาและบันทึกข้อมูล
  const handleGenerateQuotation = async () => {
    if (selectedItems.length === 0) {
      alert('กรุณาเลือกอย่างน้อย 1 รายการเพื่อสร้างใบเสนอราคา');
      return;
    }
    if (!quotationTypeId) {
      alert('กรุณาเลือกประเภทใบเสนอราคา');
      return;
    }

    let newSampleStatus = [];
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 30);
    const quotationData = {
      customer_id: serviceData.customer_id,
      request_id: serviceData.request_id,
      valid_until: validUntil.toISOString().split('T')[0],
      total_amount: parseFloat(totalAmount.toFixed(2)),
      discount_percentage: parseFloat(discountPercentage.toFixed(2)),
      discount_amount: parseFloat(discountAmount.toFixed(2)),
      net_total: parseFloat(netTotal.toFixed(2)),
      vat_amount: parseFloat(vatAmount.toFixed(2)),
      grand_total: parseFloat(grandTotal.toFixed(2)),
      payment_terms: '30 วัน',
      status: 'pending',
      created_by: createdBy,
      quotation_type_id: quotationTypeId,
      approved_by: null
    };

    serviceData.sample_submissions.map((service) => {
      const penddingStatus = {
        submission_id: service.submission_id,
        status: 'pending_test',
        notes: 'รอทดสอบบางรายการ'
      };
      if (selectedItems.length !== sampleRemain.length) {
        newSampleStatus.push({ ...penddingStatus, id: newSampleStatus.length + 1 });
      } else {
        penddingStatus.status = 'quotation_issued';
        penddingStatus.notes = 'ออกใบเสนอราคา';
        newSampleStatus.push({ ...penddingStatus, id: newSampleStatus.length + 1 });
      }
    });
    try {
      // if (serviceData.customer_id === 9999) {
      // บันทึก Quotation
      await postSampleStatusArray(newSampleStatus);
      const response = await postQuotations(quotationData);

      if (response && response.quotation_id) {
        const quotationId = response.quotation_id; // สมมติว่า API ส่งกลับ id

        // เตรียมข้อมูล Quotation Details
        const quotationDetails = {
          quotation_id: quotationId,
          test_items_for_quotation: selectedItems.map((item) => {
            const subtotalPrice = item.price * item.quantity;
            const itemDiscountAmount = (subtotalPrice * (discountPercentage / 100)) / selectedItems.length; // แบ่งส่วนลดตามจำนวนรายการ
            const totalPrice = subtotalPrice - itemDiscountAmount;

            return {
              test_item_id: item.id,
              quantity: item.quantity,
              unit_price: parseFloat(item.price.toFixed(2)),
              subtotal_price: parseFloat(subtotalPrice.toFixed(2)),
              discount_amount: parseFloat(itemDiscountAmount.toFixed(2)),
              total_price: parseFloat(totalPrice.toFixed(2))
            };
          })
        };

        // บันทึก Quotation Details
        console.log('Quotation Details Data:', quotationDetails);
        await postQuotationDetails(quotationDetails);
        // ปิด Modal หลังบันทึกสำเร็จ
        setShowPaymentModal(false);
        handleBilling(true); // แจ้ง parent ว่าสำเร็จ
      } else {
        throw new Error('Failed to get quotation ID');
      }
      // }
    } catch (error) {
      console.error('Error generating quotation:', error);
      alert('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่');
    }
  };

  return (
    <>
      <Button variant="success" onClick={() => setShowPaymentModal(true)}>
        <TbInvoice className="me-2" style={{ fontSize: 16 }} /> ออกใบเสนอราคา
      </Button>

      {/* Modal for Payment Selection */}
      <Modal
        show={showPaymentModal}
        className="modal-lg"
        onHide={() => {
          setShowPaymentModal(false);
          fetchTrackingData();
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="mb-0">สร้างใบเสนอราคา</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowX: 'auto' }}>
          <Row>
            <Col item className="ps-3 pe-3">
              <QuotationTypeSelect name="quotation_type_id" value={quotationTypeId} onSelect={(e) => setQuotationTypeId(e)} />
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width={80} className="text-center">
                  เลือก
                </th>
                <th>ชื่อตัวอย่าง</th>
                <th width={100}>จำนวน</th>
                <th width={120}>ราคาต่อหน่วย</th>
                <th width={120} className="text-end">
                  รวม
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="text-center" onChange={() => handleItemSelection(item)}>
                    <Form.Check
                      type="checkbox"
                      checked={selectedItems.some((selected) => selected.id === item.id)}
                      disabled={!sampleRemain.find((x) => x.test_item_id === item.id)}
                    />
                  </td>
                  <td
                    style={{
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      maxHeight: '100px',
                      overflowY: 'auto'
                    }}
                  >
                    {item.name}
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min={1}
                      max={item.maxQuantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      disabled={!sampleRemain.find((x) => x.test_item_id === item.id)}
                      style={{ width: '80px' }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.price}
                      step="1"
                      onChange={(e) => handlePriceChange(item.id, e.target.value)}
                      disabled={!sampleRemain.find((x) => x.test_item_id === item.id)}
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td className="text-end">{item.summary.toFixed(2)}</td>
                </tr>
              ))}

              {quotationTypeId === '3' && (
                <tr>
                  <td colSpan={4} className="text-end">
                    ส่วนลด (%)
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        value={discountPercentage}
                        min={0}
                        max={100}
                        step="0.01"
                        onChange={(e) => handleDiscountChange(e.target.value)}
                        style={{ width: '100px' }}
                      />
                    </Form.Group>
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={4} className="text-end">
                  <p className="mb-0 text-dark">รวมทั้งหมด:</p>
                </td>
                <td>
                  <p className="mb-0 text-dark">{totalAmount.toFixed(2)} บาท</p>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-end">
                  <p className="mb-0 text-dark">ส่วนลด ({discountPercentage}%):</p>
                </td>
                <td>
                  <p className="mb-0 text-dark">{discountAmount.toFixed(2)} บาท</p>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-end">
                  <p className="mb-0 text-dark">ราคาสุทธิ :</p>
                </td>
                <td>
                  <p className="mb-0 text-dark">{netTotal.toFixed(2)} บาท</p>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-end">
                  <p className="mb-2 text-dark">VAT 7%:</p>
                </td>
                <td>
                  <p className="mb-2 text-dark">{vatAmount.toFixed(2)} บาท</p>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-end">
                  <h6>ยอดรวมทั้งสิ้น :</h6>
                </td>
                <td>
                  <h6>{grandTotal.toFixed(2)} บาท</h6>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleGenerateQuotation} disabled={sampleRemain.length === 0}>
            สร้างใบเสนอราคา
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShowPaymentModal(false);
              fetchTrackingData();
            }}
          >
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateQuotation;
