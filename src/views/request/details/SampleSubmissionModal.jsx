import React, { useState } from 'react';
import { Modal, Button, Form, Table, Row, Col, Alert } from 'react-bootstrap';
import { LuListTodo } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { putSampleSubmisDetail } from 'services/_api/sampleSubmissionsRequest';
import { putServiceRequests, putServiceRequestStatusTracking } from 'services/_api/serviceRequest';

const SampleSubmissionModal = ({ service, handleReload }) => {
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
  const handleSubmit = async () => {
    if (!selectedSubmissionData || selectedDetails.length === 0) {
      alert('กรุณาเลือก Sample Submission และอย่างน้อยหนึ่งรายการทดสอบ');
      return;
    }
    try {
      for (const item of selectedDetails) {
        const submissionDetails = {
          is_partial_test: true
        };
        const reposnse = await putSampleSubmisDetail(submissionDetails, item);
        console.log('putSampleSubmisDetail', reposnse);
      }

      // if (service.request_id === 99999) {
      const statusRequest = {
        is_partial_test: true
      };
      const response = await putServiceRequests(statusRequest, service.request_id);
      if (response) {
        const reqStatusTracking = {
          newStatusTracking: 'partial_testing'
        };
        await putServiceRequestStatusTracking(service.request_id, reqStatusTracking);

        toast.success('บันทึกคำขอทดสอบบางรายการสำเร็จ!', { autoClose: 3000 });
        handleReload(true);
        setShowModal(false);
      }
      // }
    } catch (error) {
      toast.error('บันทึกคำขอทดสอบบางรายการไม่สำเร็จ!', { autoClose: 3000 });
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="success" onClick={() => setShowModal(true)} disabled={!service || !service.sample_submissions}>
        <LuListTodo style={{ fontSize: 16, marginRight: 8 }} />
        แจ้งทดสอบบางรายการ
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
                      <option value="">เลือกตัวอย่างปุ๋ย</option>
                      {service.sample_submissions.map((submission, index) => (
                        <option key={submission.submission_id} value={submission.submission_id}>
                          ตัวอย่างที่ {index + 1}
                          {submission.common_name && ` (${submission.common_name}-${submission.fertilizer_formula})`}
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
                                    disabled={detail.is_partial_test === 1}
                                    onChange={() => {
                                      handleDetailChange(detail.detail_id);
                                      handleItemSelection(
                                        service.test_items_for_quotation.find((x) => x.test_item_id === detail.test_item_id)
                                      );
                                    }}
                                  />
                                </td>
                                <td className="text-center">
                                  {detail.test_code}
                                  {detail.is_partial_test}
                                </td>
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
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" type="submit" onClick={handleSubmit} disabled={!selectedSubmission || selectedDetails.length === 0}>
            <i className="feather icon-save" /> บันทึก
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShowModal(false);
              setSelectedDetails([]);
            }}
          >
            <i className="feather icon-corner-up-left" /> ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SampleSubmissionModal;
