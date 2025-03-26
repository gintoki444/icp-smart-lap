import QuotationTypeSelect from 'components/Selector/QuotationTypeSelect';
import TestItemSelect from 'components/Selector/TestItemSelect';
import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Table, Row, Col } from 'react-bootstrap';
import { TbInvoice } from 'react-icons/tb';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCustomerByID } from 'services/_api/customerRequest';
import { postMultiQuotations, getSampleRemainQuatity, getQuotationHeaderRemain } from 'services/_api/quotationRequest';
import { FaPlus } from 'react-icons/fa';
import { TbScriptPlus } from 'react-icons/tb';
import { toast } from 'react-toastify';

const MultiCreateQuotation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [discountValue, setDiscountValue] = useState(0);
  const [discountUnit, setDiscountUnit] = useState('percentage');
  const [sampleRemain, setSampleRemain] = useState([]);
  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState({});
  const [quotationTypeId, setQuotationTypeId] = useState('');
  const [quotationData, setQuotationData] = useState(null);
  const [documentDate, setDocumentDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentTerms, setPaymentTerms] = useState('30 วัน');
  const [validUntil, setValidUntil] = useState('2025-12-31');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const requestIds = searchParams.get('request_ids')?.split(',') || [];
    const customerId = parseInt(searchParams.get('customer_id')) || null;
    const discount = parseFloat(searchParams.get('discount_percentage')) || 0;
    const createdBy = parseInt(searchParams.get('created_by')) || null;

    setDiscountValue(discount);

    const fetchQuotationData = async () => {
      try {
        const response = await getQuotationHeaderRemain(requestIds.join(','), customerId, discount, createdBy);
        const getCustomer = await getCustomerByID(response.customer_id);

        setQuotationData(response);

        const initialItems = response['test-items-for-quotation'].map((item) => ({
          id: item.test_item_id,
          name: item.name_for_quotation,
          price: parseFloat(item.unit_price),
          quantity: item.quantity,
          maxQuantity: item.quantity,
          summary: parseFloat(item.unit_price) * item.quantity,
          testCode: item.test_code,
          quotation_type_id: response.quotation_type_id
        }));

        initialItems.push(
          {
            id: 49,
            name: 'ค่าตรวจสอบด่วนพิเศษ',
            price: 2000,
            quantity: 1,
            maxQuantity: 1,
            summary: 2000,
            testCode: 'EXP006',
            quotation_type_id: response.quotation_type_id
          },
          {
            id: 50,
            name: 'ค่าบริการอื่นๆ',
            price: 1000,
            quantity: 1,
            maxQuantity: 1,
            summary: 1000,
            testCode: 'EXP007',
            quotation_type_id: response.quotation_type_id
          }
        );

        setItems(initialItems);
        const initialSelectedItems = initialItems.filter((item) => item.id !== 49 && item.id !== 50);
        setSelectedItems(initialSelectedItems);

        setCustomer(getCustomer);
        fetchSampleRemain(requestIds);
      } catch (error) {
        console.error('Error fetching quotation data:', error);
      }
    };

    fetchQuotationData();
  }, [location.search]);

  const fetchSampleRemain = async (requestIds) => {
    try {
      const response = await getSampleRemainQuatity(requestIds.join(','));
      setSampleRemain(response || []);
    } catch (error) {
      console.error('Error fetching sample remain:', error);
    }
  };

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

  // ฟังก์ชันสำหรับฟอร์แมตตัวเลขให้มีคอมมา
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

  const handleGenerateQuotation = async () => {
    if (selectedItems.length === 0) {
      alert('กรุณาเลือกอย่างน้อย 1 รายการเพื่อสร้างใบเสนอราคา');
      return;
    }
    if (!quotationTypeId) {
      alert('กรุณาเลือกประเภทใบเสนอราคา');
      return;
    }

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

    const quotationPayload = {
      customer_id: quotationData.customer_id,
      request_ids: quotationData.request_ids,
      total_amount: parseFloat(totalAmount.toFixed(2)),
      discount_percentage: discountUnit === 'percentage' ? parseFloat(discountValue.toFixed(2)) : 0,
      discount_amount: parseFloat(discountAmount.toFixed(2)),
      net_total: parseFloat(netTotal.toFixed(2)),
      vat_amount: parseFloat(vatAmount.toFixed(2)),
      grand_total: parseFloat(grandTotal.toFixed(2)),
      valid_until: validUntil,
      payment_terms: paymentTerms,
      status: 'pending',
      created_by: quotationData.created_by,
      approved_by: null,
      quotation_type_id: parseInt(quotationTypeId),
      'test-items-for-quotation': selectedItems.map((item) => ({
        test_item_id: item.id,
        quantity: item.quantity,
        unit_price: parseFloat(item.price.toFixed(2)).toString(),
        name_for_quotation: item.name,
        test_code: item.testCode
      }))
    };

    try {
      const response = await postMultiQuotations(quotationPayload);
      if (response && response.quotation_id) {
        toast.success('สร้างใบเสนอราคาสำเร็จ!', {
          autoClose: 3000
        });
        navigate('/admin/issue-quotation/detail', { state: { id: response.quotation_id } });
      } else {
        toast.error('สร้างใบเสนอราคาไม่สำเร็จ! :', {
          autoClose: 3000
        });
        throw new Error('Failed to get quotation ID');
      }
      //   }
    } catch (error) {
      console.error('Error generating quotation:', error);
      toast.error('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา! :' + error, {
        autoClose: 3000
      });
      alert('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่');
    }
  };

  return (
    <>
      <Row>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <Card.Title as="h5">สร้างใบเสนอราคา</Card.Title>
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
                        <p className="mb-0 text-dark">ราคารวมก่อนส่วนลด:</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(totalAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">
                          ส่วนลด ({discountUnit === 'percentage' ? `${discountValue}%` : `${formatNumber(discountValue)} บาท`}):
                        </p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(discountAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-0 text-dark">ราคาสุทธิ :</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-0 text-dark">{formatNumber(netTotal)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <p className="mb-2 text-dark">VAT 7%:</p>
                      </td>
                      <td className="text-end">
                        <p className="mb-2 text-dark">{formatNumber(vatAmount)} บาท</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-end">
                        <h6 className="mb-0">ยอดรวมทั้งหมด :</h6>
                      </td>
                      <td className="text-end">
                        <h6>{formatNumber(grandTotal)} บาท</h6>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer>
            <Button variant="success" onClick={handleGenerateQuotation}>
              <TbScriptPlus style={{ fontSize: 18, marginRight: 6 }} /> สร้างใบเสนอราคา
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

export default MultiCreateQuotation;
