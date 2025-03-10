import React, { useState } from 'react';
import { Modal, Button, Form, Table, Row, Col, Alert } from 'react-bootstrap';

const SampleSubmissionModal = ({ service }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState('');
  const [selectedDetails, setSelectedDetails] = useState([]); // เก็บ detail_id ที่เลือก

  console.log('service :', service);

  // จัดการการเลือก sample_submission
  const handleSubmissionChange = (e) => {
    const submissionId = e.target.value;
    setSelectedSubmission(submissionId);
    setSelectedDetails([]);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);

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
    const isSelected = selectedItems.find((selected) => selected.test_item_id === item.test_item_id);
    let updatedItems;

    if (isSelected) {
      updatedItems = selectedItems.filter((selected) => selected.test_item_id !== item.test_item_id);
    } else {
      updatedItems = [...selectedItems, { ...item }];
    }

    console.log(updatedItems);
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

  // จัดการการเลือก checkbox ของ sample_submission_details
  const handleDetailChange = (detailId) => {
    setSelectedDetails((prev) => (prev.includes(detailId) ? prev.filter((id) => id !== detailId) : [...prev, detailId]));
  };

  // หา submission ที่เลือก (เพิ่มการป้องกัน undefined)
  const selectedSubmissionData =
    service?.sample_submissions && Array.isArray(service.sample_submissions)
      ? service.sample_submissions.find((sub) => sub.submission_id === parseInt(selectedSubmission))
      : null;

  const getNameQuotation = (id) => {
    const nameQuotation = service.test_items_for_quotation.find((x) => x.test_item_id === id)?.name_for_quotation;
    return nameQuotation;
  };

  // การ submit
  const handleSubmit = () => {
    if (!selectedSubmissionData || selectedDetails.length === 0) {
      alert('กรุณาเลือก Sample Submission และอย่างน้อยหนึ่งรายการทดสอบ');
      return;
    }

    let newSampleStatus = [];
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 30);
    const quotationData = {
      customer_id: service.customer_id,
      request_id: service.request_id,
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

    const penddingStatus = {
      submission_id: selectedSubmission,
      status: 'pending_test',
      notes: 'รอทดสอบบางรายการ'
    };
    newSampleStatus.push({ ...penddingStatus, id: newSampleStatus.length + 1 });
    // service.sample_submissions.map((service) => {
    //   const penddingStatus = {
    //     submission_id: service.submission_id,
    //     status: 'pending_test',
    //     notes: 'รอทดสอบบางรายการ'
    //   };
    //   if (selectedItems.length !== sampleRemain.length) {
    //     newSampleStatus.push({ ...penddingStatus, id: newSampleStatus.length + 1 });
    //   } else {
    //     penddingStatus.status = 'quotation_issued';
    //     penddingStatus.notes = 'ออกใบเสนอราคา';
    //     newSampleStatus.push({ ...penddingStatus, id: newSampleStatus.length + 1 });
    //   }
    // });
    console.log('newSampleStatus:', newSampleStatus);
    console.log('selectedItems:', selectedItems);
    console.log('Selected Submission:', selectedSubmissionData);
    console.log('Selected Details:', selectedDetails);
    // ทำอะไรต่อ เช่น ส่งไป backend
    setShowModal(false);
  };

  return (
    <>
      <Button variant="success" onClick={() => setShowModal(true)} disabled={!service || !service.sample_submissions}>
        เลือกรายการทดสอบ
      </Button>

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setSelectedDetails([]);
        }}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <h5 className="mb-0">เลือกทดสอบบางรายการ</h5>
        </Modal.Header>
        <Modal.Body>
          {!service || !service.sample_submissions || !Array.isArray(service.sample_submissions) ? (
            <Alert variant="warning">ไม่มีข้อมูล Sample Submissions ให้เลือก</Alert>
          ) : (
            <>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="submissionSelect">
                    <Form.Label className="text-dark">เลือกตัวอย่างปุ๋ย</Form.Label>
                    <Form.Select value={selectedSubmission} onChange={handleSubmissionChange}>
                      <option>เลือกตัวอย่างปุ๋ย</option>
                      {service.sample_submissions.map((submission) => (
                        <option key={submission.submission_id} value={submission.submission_id}>
                          {submission.common_name} ({submission.fertilizer_formula})
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {selectedSubmission && !selectedSubmissionData ? (
                <Alert variant="danger">ไม่พบข้อมูล Sample Submission ที่เลือก</Alert>
              ) : (
                selectedSubmissionData && (
                  <Row className="mb-3">
                    <Col>
                      <Form.Label className="text-dark">รายการทดสอบ</Form.Label>
                      <Table bordered hover>
                        <thead>
                          <tr>
                            <th style={{ width: '50px' }} className="text-center">
                              เลือก
                            </th>
                            <th className="text-center">Code</th>
                            <th>ชื่อการทดสอบ</th>
                            <th className="text-center">เปอเซ็นต์</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedSubmissionData.sample_submission_details &&
                          Array.isArray(selectedSubmissionData.sample_submission_details) ? (
                            selectedSubmissionData.sample_submission_details.map((detail) => (
                              <tr key={detail.detail_id}>
                                <td className="text-center">
                                  <Form.Check
                                    type="checkbox"
                                    checked={selectedDetails.includes(detail.detail_id)}
                                    onChange={() => {
                                      handleDetailChange(detail.detail_id);
                                      handleItemSelection(
                                        service.test_items_for_quotation.find((x) => x.test_item_id === detail.test_item_id)
                                      );
                                    }}
                                  />
                                </td>
                                <td className="text-center">{detail.test_code}</td>
                                <td>{getNameQuotation(detail.test_item_id)}</td>
                                <td className="text-center">{detail.test_percentage ? detail.test_percentage + '  %' : '-'}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4}>ไม่มีรายการทดสอบ</td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                )
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit} disabled={!selectedSubmission || selectedDetails.length === 0}>
            บันทึก
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
              setSelectedDetails([]);
            }}
          >
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SampleSubmissionModal;
