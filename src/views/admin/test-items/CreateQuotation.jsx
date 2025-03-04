import QuotationTypeSelect from 'components/Selector/QuotationTypeSelect';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Table, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postQuotations, postQuotationDetails } from 'services/_api/quotationRequest'; // ปรับชื่อไฟล์ให้ถูกต้อง
import { postSampleStatus } from 'services/_api/sampleStatusRequest';

const CreateQuotation = ({ handleBilling, testItems = [], serviceData, createdBy, submissionId }) => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // แปลงข้อมูล testItems ให้อยู่ในรูปแบบที่แก้ไขได้
  const initialItems = testItems.map((item) => ({
    id: item.test_item_id,
    name: item.name_for_quotation,
    price: parseFloat(item.unit_price),
    quantity: item.quantity,
    maxQuantity: item.quantity,
    summary: parseFloat(item.unit_price) * item.quantity,
    quotation_type_id: item.quotation_type_id
  }));

  const [items, setItems] = useState(initialItems);
  const [quotationTypeId, setQuotationTypeId] = useState('');

  useEffect(() => {}, [quotationTypeId]);
  // const [submissionId, setSubmissionId] = useState('');

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
    const isSelected = selectedItems.find((selected) => selected.id === item.id);
    let updatedItems;

    if (isSelected) {
      updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
    } else {
      updatedItems = [...selectedItems, { ...item }];
    }

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

    try {
      // บันทึก Quotation
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
        // console.log('Response from postQuotationDetails:', detailsResponse);
        // const sampleStatus = {
        //   request_id: serviceData.request_id,
        //   status: 'quotation_issued',
        //   notes: 'ออกใบเสนอราคา'
        // };
        // console.log('sampleStatus:', sampleStatus);
        // const responseSample = await postSampleStatus(sampleStatus);
        // console.log('responseSample:', responseSample);

        // ปิด Modal หลังบันทึกสำเร็จ
        setShowPaymentModal(false);
        handleBilling(true); // แจ้ง parent ว่าสำเร็จ
      } else {
        throw new Error('Failed to get quotation ID');
      }
    } catch (error) {
      console.error('Error generating quotation:', error);
      alert('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่');
    }
  };

  return (
    <>
      <Button variant="success" onClick={() => setShowPaymentModal(true)}>
        ออกใบเสนอราคา
      </Button>

      {/* Modal for Payment Selection */}
      <Modal show={showPaymentModal} className="modal-lg" onHide={() => setShowPaymentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>สร้างใบเสนอราคา</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowX: 'auto' }}>
          <Table bordered style={{ width: '100%', maxWidth: '100%', tableLayout: 'fixed' }}>
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
                  <td className="text-center">
                    <Form.Check
                      type="checkbox"
                      checked={selectedItems.some((selected) => selected.id === item.id)}
                      onChange={() => handleItemSelection(item)}
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
                      style={{ width: '80px' }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.price.toFixed(2)}
                      step="0.01"
                      onChange={(e) => handlePriceChange(item.id, e.target.value)}
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

          <Row className="mt-3">
            <Col item className="ps-4 pe-4">
              <QuotationTypeSelect name="quotation_type_id" value={quotationTypeId} onSelect={(e) => setQuotationTypeId(e)} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleGenerateQuotation}>
            สร้างใบเสนอราคา
          </Button>
          <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateQuotation;
