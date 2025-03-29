import QuotationTypeSelect from 'components/Selector/QuotationTypeSelect';
import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Table, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getAllQuotationRequestsById,
  putQuotationDetails,
  putQuotations,
  postQuotationDetails,
  deleteQuotationDetails // เพิ่มการนำเข้า API สำหรับลบ
} from 'services/_api/quotationRequest';
import { FaPlus } from 'react-icons/fa';
import { TbScriptPlus } from 'react-icons/tb';
import { toast } from 'react-toastify';

const EditQuotation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id || null;
  const [selectedItems, setSelectedItems] = useState([]);
  const [discountValue, setDiscountValue] = useState(0);
  const [discountUnit, setDiscountUnit] = useState('percentage');
  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState({});
  const [quotationTypeId, setQuotationTypeId] = useState('');
  const [quotationData, setQuotationData] = useState(null);
  const [documentDate, setDocumentDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [validUntil, setValidUntil] = useState('');

  // useEffect(() => {
  //   const fetchQuotationData = async () => {
  //     if (!id) {
  //       toast.error('ไม่พบ ID ใบเสนอราคา');
  //       navigate('/admin/issue-quotation');
  //       return;
  //     }

  //     try {
  //       const response = await getAllQuotationRequestsById(id);
  //       const data = response[0];

  //       // ตั้งค่าข้อมูลใบเสนอราคา
  //       setQuotationData(data);

  //       // ตั้งค่าข้อมูลลูกค้า
  //       const customerInfo = data.customer_info[0] || {};
  //       setCustomer({
  //         company_code: customerInfo.company_code || '-',
  //         company_name: customerInfo.company_name || '-',
  //         tax_id: customerInfo.tax_id || '-',
  //         company_address: customerInfo.company_address || '-',
  //         customer_special_conditions: customerInfo.special_conditions ? [{ description: customerInfo.special_conditions }] : []
  //       });

  //       // ตั้งค่ารายการในตาราง
  //       const quotationItems = data.quotation_details.map((item) => ({
  //         id: item.quotation_detail_id,
  //         quotation_detail_id: item.quotation_detail_id,
  //         test_item_id: item.test_item_id,
  //         name: item.name_for_quotation,
  //         price: parseFloat(item.unit_price),
  //         quantity: item.quantity,
  //         maxQuantity: item.quantity,
  //         summary: parseFloat(item.total_price),
  //         testCode: item.test_code
  //       }));

  //       let initialSelectedItems = quotationItems;
  //       if (!quotationItems.find((x) => x.test_item_id === 49)) {
  //         await quotationItems.push({
  //           id: 49,
  //           test_item_id: 49,
  //           name: 'ค่าตรวจสอบด่วนพิเศษ',
  //           price: 2000,
  //           quantity: 1,
  //           maxQuantity: 1,
  //           summary: 2000,
  //           testCode: 'EXP006',
  //           quotation_type_id: response.quotation_type_id
  //         });
  //         initialSelectedItems = quotationItems.filter((item) => item.id !== 49);
  //         // console.log('initialSelectedItems:', initialSelectedItems);
  //       }
  //       if (!quotationItems.find((x) => x.test_item_id === 50)) {
  //         quotationItems.push({
  //           id: 50,
  //           test_item_id: 50,
  //           name: 'ค่าบริการอื่นๆ',
  //           price: 1000,
  //           quantity: 1,
  //           maxQuantity: 1,
  //           summary: 1000,
  //           testCode: 'EXP007',
  //           quotation_type_id: response.quotation_type_id
  //         });
  //         console.log('initialSelectedItems:', initialSelectedItems);
  //         // initialSelectedItems = quotationItems.filter((item) => item.id !== 50);
  //       }

  //       console.log('initialSelectedItems:', initialSelectedItems);
  //       setItems(quotationItems);
  //       setSelectedItems(initialSelectedItems);

  //       // ตั้งค่าข้อมูลส่วนลด
  //       if (parseFloat(data.discount_percentage) > 0) {
  //         setDiscountUnit('percentage');
  //         setDiscountValue(parseFloat(data.discount_percentage));
  //       } else if (parseFloat(data.discount_amount) > 0) {
  //         setDiscountUnit('amount');
  //         setDiscountValue(parseFloat(data.discount_amount));
  //       }

  //       // ตั้งค่าวันที่และเงื่อนไข
  //       setDocumentDate(new Date(data.quotation_date).toISOString().split('T')[0]);
  //       setPaymentTerms(data.payment_terms || '30 วัน');
  //       setValidUntil(new Date(data.valid_until).toISOString().split('T')[0]);
  //       setQuotationTypeId(data.quotation_type_id.toString());
  //     } catch (error) {
  //       console.error('Error fetching quotation data:', error);
  //       toast.error('เกิดข้อผิดพลาดในการดึงข้อมูลใบเสนอราคา');
  //       navigate('/admin/issue-quotation');
  //     }
  //   };

  //   fetchQuotationData();
  // }, [id, navigate]);
  useEffect(() => {
    const fetchQuotationData = async () => {
      if (!id) {
        toast.error('ไม่พบ ID ใบเสนอราคา');
        navigate('/admin/issue-quotation');
        return;
      }

      try {
        const response = await getAllQuotationRequestsById(id);
        const data = response[0];

        // ตั้งค่าข้อมูลใบเสนอราคา
        setQuotationData(data);

        // ตั้งค่าข้อมูลลูกค้า
        const customerInfo = data.customer_info[0] || {};
        setCustomer({
          company_code: customerInfo.company_code || '-',
          company_name: customerInfo.company_name || '-',
          tax_id: customerInfo.tax_id || '-',
          company_address: customerInfo.company_address || '-',
          customer_special_conditions: customerInfo.special_conditions ? [{ description: customerInfo.special_conditions }] : []
        });

        // ตั้งค่ารายการในตาราง
        const quotationItems = data.quotation_details.map((item) => ({
          id: item.quotation_detail_id,
          quotation_detail_id: item.quotation_detail_id,
          test_item_id: item.test_item_id,
          name: item.name_for_quotation,
          price: parseFloat(item.unit_price),
          quantity: item.quantity,
          maxQuantity: item.quantity,
          summary: parseFloat(item.total_price),
          testCode: item.test_code
        }));

        // เก็บรายการที่มี test_item_id === 49 และ 50 ที่มีอยู่ใน quotationItems
        const hasItem49 = quotationItems.find((x) => x.test_item_id === 49);
        const hasItem50 = quotationItems.find((x) => x.test_item_id === 50);

        // เพิ่มรายการ test_item_id 49 และ 50 ถ้ายังไม่มี
        if (!hasItem49) {
          quotationItems.push({
            id: 49,
            test_item_id: 49,
            name: 'ค่าตรวจสอบด่วนพิเศษ',
            price: 2000,
            quantity: 1,
            maxQuantity: 1,
            summary: 2000,
            testCode: 'EXP006',
            quotation_type_id: response.quotation_type_id
          });
        }

        if (!hasItem50) {
          quotationItems.push({
            id: 50,
            test_item_id: 50,
            name: 'ค่าบริการอื่นๆ',
            price: 1000,
            quantity: 1,
            maxQuantity: 1,
            summary: 1000,
            testCode: 'EXP007',
            quotation_type_id: response.quotation_type_id
          });
        }

        // ตั้งค่า initialSelectedItems
        let initialSelectedItems = [...quotationItems];

        // ถ้าไม่มี test_item_id 49 หรือ 50 ใน quotationItems เดิม ให้กรองออกจาก selectedItems
        if (!hasItem49) {
          initialSelectedItems = initialSelectedItems.filter((item) => item.test_item_id !== 49);
        }
        if (!hasItem50) {
          initialSelectedItems = initialSelectedItems.filter((item) => item.test_item_id !== 50);
        }

        console.log('quotationItems:', quotationItems);
        console.log('initialSelectedItems:', initialSelectedItems);

        setItems(quotationItems);
        setSelectedItems(initialSelectedItems);

        // ตั้งค่าข้อมูลส่วนลด
        if (parseFloat(data.discount_percentage) > 0) {
          setDiscountUnit('percentage');
          setDiscountValue(parseFloat(data.discount_percentage));
        } else if (parseFloat(data.discount_amount) > 0) {
          setDiscountUnit('amount');
          setDiscountValue(parseFloat(data.discount_amount));
        }

        // ตั้งค่าวันที่และเงื่อนไข
        setDocumentDate(new Date(data.quotation_date).toISOString().split('T')[0]);
        setPaymentTerms(data.payment_terms || '30 วัน');
        setValidUntil(new Date(data.valid_until).toISOString().split('T')[0]);
        setQuotationTypeId(data.quotation_type_id.toString());
      } catch (error) {
        console.error('Error fetching quotation data:', error);
        toast.error('เกิดข้อผิดพลาดในการดึงข้อมูลใบเสนอราคา');
        navigate('/admin/issue-quotation');
      }
    };

    fetchQuotationData();
  }, [id, navigate]);

  const calculateTotals = () => {
    const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountAmount;

    if (discountUnit === 'percentage') {
      discountAmount = totalAmount * (discountValue / 100);
    } else {
      discountAmount = parseFloat(discountValue) || 0;
    }

    const netTotal = totalAmount - discountAmount;
    const vatAmount = netTotal * 0.07;
    const grandTotal = netTotal + vatAmount;

    return { totalAmount, discountAmount, netTotal, vatAmount, grandTotal };
  };

  const { totalAmount, discountAmount, netTotal, vatAmount, grandTotal } = calculateTotals();

  const formatNumber = (number) => {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

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

  const handlePriceChange = (id, value) => {
    const numValue = parseFloat(value) || 0;
    const updatedItems = items.map((item) => (item.id === id ? { ...item, price: numValue, summary: numValue * item.quantity } : item));
    setItems(updatedItems);

    const updatedSelected = selectedItems.map((selected) =>
      selected.id === id ? { ...selected, price: numValue, summary: numValue * selected.quantity } : selected
    );
    setSelectedItems(updatedSelected);
  };

  const handleDiscountChange = (value) => {
    const numValue = parseFloat(value) || 0;
    if (discountUnit === 'percentage') {
      setDiscountValue(Math.max(0, Math.min(100, numValue)));
    } else {
      setDiscountValue(Math.max(0, numValue));
    }
  };

  const handleDiscountUnitChange = (unit) => {
    setDiscountUnit(unit);
    setDiscountValue(0);
  };

  const handleUpdateQuotation = async () => {
    if (selectedItems.length === 0) {
      toast.error('กรุณาเลือกอย่างน้อย 1 รายการเพื่อแก้ไขใบเสนอราคา');
      return;
    }
    if (!quotationTypeId) {
      toast.error('กรุณาเลือกประเภทใบเสนอราคา');
      return;
    }

    try {
      // คำนวณยอดรวม
      const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let discountAmount;

      if (discountUnit === 'percentage') {
        discountAmount = totalAmount * (discountValue / 100);
      } else {
        discountAmount = parseFloat(discountValue) || 0;
      }

      const netTotal = totalAmount - discountAmount;
      const vatAmount = netTotal * 0.07;
      const grandTotal = netTotal + vatAmount;

      // หารายการที่ถูกลบออก (อยู่ใน items แต่ไม่อยู่ใน selectedItems)
      const removedItems = items.filter(
        (item) =>
          item.quotation_detail_id && // ต้องมี quotation_detail_id (รายการที่มาจากฐานข้อมูล)
          !selectedItems.some((selected) => selected.id === item.id) // ไม่ได้อยู่ใน selectedItems
      );

      // ลบรายการที่ถูกลบออกจากฐานข้อมูล
      for (const removedItem of removedItems) {
        try {
          await deleteQuotationDetails(removedItem.quotation_detail_id);
          console.log(`Deleted quotation detail ID: ${removedItem.quotation_detail_id}`);
        } catch (error) {
          console.error(`Error deleting quotation detail ID ${removedItem.quotation_detail_id}:`, error);
          toast.error(`ไม่สามารถลบรายการ ${removedItem.name} ได้`);
          return; // หยุดการทำงานถ้ามีข้อผิดพลาด
        }
      }

      // อัปเดตหรือเพิ่มรายการใน quotation_details
      for (const item of selectedItems) {
        const quotationDetailPayload = {
          test_item_id: item.test_item_id || null,
          quantity: item.quantity,
          unit_price: parseFloat(item.price.toFixed(2)).toString(),
          subtotal_price: (item.quantity * item.price).toFixed(2),
          discount_amount: '0.00',
          total_price: (item.quantity * item.price).toFixed(2)
        };

        console.log('quotationDetailPayload:', quotationDetailPayload);
        console.log('item.quotation_detail_id:', item.quotation_detail_id);

        if (item.quotation_detail_id) {
          // อัปเดตรายการที่มีอยู่แล้ว
          await putQuotationDetails(item.quotation_detail_id, quotationDetailPayload);
        } else {
          // เพิ่มรายการใหม่
          const quotationDetailPost = {
            quotation_id: quotationData.quotation_id,
            test_items_for_quotation: [
              {
                test_item_id: item.test_item_id || null,
                quantity: item.quantity,
                unit_price: parseFloat(item.price.toFixed(2)).toString(),
                subtotal_price: (item.quantity * item.price).toFixed(2),
                discount_amount: '0.00',
                total_price: (item.quantity * item.price).toFixed(2)
              }
            ]
          };
          console.log('quotationDetailPost:', quotationDetailPost);
          await postQuotationDetails(quotationDetailPost);
        }
      }

      // อัปเดตข้อมูลส่วนหัวของใบเสนอราคา
      const quotationPayload = {
        customer_id: quotationData.customer_id,
        total_amount: parseFloat(totalAmount.toFixed(2)),
        discount_percentage: discountUnit === 'percentage' ? parseFloat(discountValue.toFixed(2)) : 0,
        discount_amount: parseFloat(discountAmount.toFixed(2)),
        net_total: parseFloat(netTotal.toFixed(2)),
        vat_amount: parseFloat(vatAmount.toFixed(2)),
        grand_total: parseFloat(grandTotal.toFixed(2)),
        valid_until: validUntil,
        payment_terms: paymentTerms,
        status: quotationData.status,
        created_by: quotationData.created_by,
        approved_by: quotationData.approved_by,
        quotation_type_id: parseInt(quotationTypeId)
      };

      const response = await putQuotations(quotationData.quotation_id, quotationPayload);

      if (response) {
        toast.success('แก้ไขใบเสนอราคาสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/issue-quotation/detail', { state: { id: id } });
      } else {
        throw new Error('Failed to update quotation');
      }
    } catch (error) {
      console.error('Error updating quotation:', error);
      toast.error('เกิดข้อผิดพลาดในการแก้ไขใบเสนอราคา! :' + error, {
        autoClose: 3000
      });
      toast.error('เกิดข้อผิดพลาดในการแก้ไขใบเสนอราคา กรุณาลองใหม่');
    }
  };

  return (
    <>
      <Row>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <Card.Title as="h5" className="mb-2">
                  แก้ไขใบเสนอราคา (เลขที่: {quotationData?.quotation_no || '-'})
                </Card.Title>
                <p className="mb-0">
                  (เลขที่คำขอ:{' '}
                  <span className="text-dark" style={{ fontWeight: 'bold' }}>
                    {quotationData?.request_no_list_by_quotation}
                  </span>
                  )
                </p>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card className="mb-3">
              <Card.Body className="pt-3 pb-2">
                <Row>
                  <Col md={12}>
                    <h6 className="mb-3">ข้อมูลลูกค้า/บริษัท</h6>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        รหัสลูกค้า:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="text" value={customer.company_code || '-'} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        ชื่อบริษัท:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="text" value={customer.company_name || '-'} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        เลขที่ผู้เสียภาษี:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="text" value={customer.tax_id || '-'} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        ที่อยู่:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="text" value={customer.company_address || '-'} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        เงื่อนไขพิเศษ:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control
                          type="text"
                          value={
                            customer.customer_special_conditions && customer.customer_special_conditions.length > 0
                              ? customer.customer_special_conditions.map((x) => x.description).join(', ')
                              : '-'
                          }
                          disabled
                          style={{ backgroundColor: '#f8f9fa' }}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        วันที่เอกสาร:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="date" value={documentDate} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        เงื่อนไขการชำระเงิน:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control
                          type="text"
                          value={paymentTerms}
                          onChange={(e) => setPaymentTerms(e.target.value)}
                          placeholder="เช่น 30 วัน"
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        ใช้ได้ถึงวันที่:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-0">
              <Card.Body className="pt-3 pb-2">
                <Row>
                  <Col className="ps-3 pe-3">
                    <QuotationTypeSelect
                      name="quotation_type_id"
                      value={quotationTypeId}
                      onSelect={(e) => {
                        setQuotationTypeId(e);
                        if (e !== 3) {
                          setDiscountValue(0);
                        }
                      }}
                    />
                  </Col>
                </Row>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th width={80} className="text-center p-3">
                        เลือก
                      </th>
                      <th>ชื่อตัวอย่าง</th>
                      <th className="text-center">Code</th>
                      <th width={120} className="text-center">
                        จำนวน
                      </th>
                      <th width={150} className="text-center">
                        ราคาต่อหน่วย
                      </th>
                      <th width={150} className="text-end">
                        รวม
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
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
                        <td
                          className="text-center"
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            maxHeight: '100px',
                            overflowY: 'auto'
                          }}
                        >
                          {item.testCode}
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            value={item.quantity}
                            min={1}
                            max={item.maxQuantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            style={{ width: '100px', margin: 'auto' }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            value={item.price}
                            step="1"
                            onChange={(e) => handlePriceChange(item.id, e.target.value)}
                            style={{ width: '100px', margin: 'auto' }}
                          />
                        </td>
                        <td className="text-end">{formatNumber(item.summary)}</td>
                      </tr>
                    ))}
                    {quotationTypeId === '3' && (
                      <tr>
                        <td colSpan={4} className="text-end">
                          ส่วนลด
                        </td>
                        <td className="text-center">
                          <Form.Control
                            type="number"
                            value={discountValue}
                            min={0}
                            step="0.01"
                            onChange={(e) => handleDiscountChange(e.target.value)}
                            style={{ width: '100px', margin: 'auto' }}
                          />
                        </td>
                        <td>
                          <Form.Select
                            value={discountUnit}
                            onChange={(e) => handleDiscountUnitChange(e.target.value)}
                            style={{ width: '100px', margin: 'auto' }}
                          >
                            <option value="percentage">%</option>
                            <option value="amount">บาท</option>
                          </Form.Select>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">ราคารวมก่อนส่วนลด</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(totalAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">
                          ส่วนลด ({discountUnit === 'percentage' ? `${discountValue}%` : `${formatNumber(discountValue)} บาท`})
                        </p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(discountAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">ราคาสุทธิ</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(netTotal)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">VAT 7%</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(vatAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <h6 className="mb-0">ยอดรวมทั้งหมด</h6>
                      </td>
                      <td className="text-end">
                        <h6 className="mb-0">{formatNumber(grandTotal)} บาท</h6>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer>
            <Button variant="success" onClick={handleUpdateQuotation}>
              <TbScriptPlus style={{ fontSize: 18, marginRight: 6 }} /> บันทึกการแก้ไข
            </Button>
            <Button variant="danger" onClick={() => navigate('/admin/issue-quotation')}>
              <i className="feather icon-corner-up-left" /> ยกเลิก
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default EditQuotation;
