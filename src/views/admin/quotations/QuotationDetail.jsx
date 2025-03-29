import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Table, Row, Col } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getAllQuotationRequestsById } from 'services/_api/quotationRequest';
import GenerateQuotation from './GenerateQuotation';

const QuotationDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: paramId } = useParams();
  const id = paramId || location.state?.id || null;
  const serviceData = location.state?.service;

  const [quotationData, setQuotationData] = useState(null);
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  const [discountValue, setDiscountValue] = useState(0);
  const [discountUnit, setDiscountUnit] = useState('percentage');
  const [documentDate, setDocumentDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [quotationTypeName, setQuotationTypeName] = useState('');

  console.log('serviceData:', serviceData);

  useEffect(() => {
    // const quotationId = location.state?.id || null;
    // const searchParams = new URLSearchParams(location.search);
    // const quotationId = searchParams.get('id');

    const fetchQuotationDetails = async () => {
      try {
        const response = await getAllQuotationRequestsById(id);
        const data = response[0]; // ข้อมูลใบเสนอราคาจะอยู่ใน array index 0

        // ตั้งค่าข้อมูลใบเสนอราคา
        setQuotationData(data);

        // ตั้งค่าข้อมูลลูกค้า
        const customerInfo = data.customer_info[0] || {};
        console.log('data.customer_info:', data.customer_info);
        console.log('customerInfo:', customerInfo);
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
          name: item.name_for_quotation,
          testCode: item.test_code,
          price: parseFloat(item.unit_price),
          quantity: item.quantity,
          summary: parseFloat(item.total_price)
        }));
        setItems(quotationItems);

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
        setQuotationTypeName(data.quotation_type_name || '');
      } catch (error) {
        console.error('Error fetching quotation details:', error);
      }
    };

    if (id) {
      fetchQuotationDetails();
    } else {
      console.error('Quotation ID not provided');
      navigate('/admin/issue-quotation');
    }
  }, [location.search, navigate]);

  // ฟังก์ชันสำหรับฟอร์แมตตัวเลขให้มีคอมมา
  const formatNumber = (number) => {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // คำนวณยอดรวม (ใช้ข้อมูลจาก API โดยตรง)
  const totalAmount = quotationData ? parseFloat(quotationData.total_amount) : 0;
  const discountAmount = quotationData ? parseFloat(quotationData.discount_amount) : 0;
  const netTotal = quotationData ? parseFloat(quotationData.net_total) : 0;
  const vatAmount = quotationData ? parseFloat(quotationData.vat_amount) : 0;
  const grandTotal = quotationData ? parseFloat(quotationData.grand_total) : 0;

  const handleEdit = (id) => {
    navigate('/admin/issue-quotation/edit', { state: { id } });
  };
  return (
    <>
      <Row>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <Card.Title as="h5" className="mb-2">
                  รายละเอียดใบเสนอราคา เลขที่: <strong>{quotationData?.quotation_no || '-'}</strong>
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
                        <Form.Control type="text" value={paymentTerms} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={4} className="text-dark">
                        ใช้ได้ถึงวันที่:
                      </Form.Label>
                      <Col xs={8}>
                        <Form.Control type="date" value={validUntil} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="pt-3 pb-2">
                {quotationData && (
                  <div>
                    <GenerateQuotation
                      quotationData={quotationData}
                      service={serviceData}
                      // onChange={handleReload}
                      // sampleStatus={serviceStatus.sample_submissions.find((x) => x.submission_id === sample.submission_id)}
                    />
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card className="mb-0">
              <Card.Body className="pt-3 pb-2">
                <Row>
                  <Col md={12}>
                    <h6 className="mb-3">รายละเอียด</h6>
                  </Col>
                  <Col className="ps-3 pe-3 mb-3">
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column xs={2} className="text-dark">
                        ประเภทใบเสนอราคา:
                      </Form.Label>
                      <Col xs={10}>
                        <Form.Control type="text" value={quotationTypeName} disabled style={{ backgroundColor: '#f8f9fa' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th width={80} className="text-center p-3">
                        No.
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
                        <td
                          className="text-center"
                          style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            maxHeight: '100px',
                            overflowY: 'auto'
                          }}
                        >
                          {index + 1}
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
                        <td className="text-center">
                          <Form.Control
                            type="number"
                            value={item.quantity}
                            disabled
                            style={{ width: '100px', margin: 'auto', backgroundColor: '#f8f9fa' }}
                          />
                        </td>
                        <td className="text-center">
                          <Form.Control
                            type="number"
                            value={item.price}
                            disabled
                            style={{ width: '100px', margin: 'auto', backgroundColor: '#f8f9fa' }}
                          />
                        </td>
                        <td className="text-end">{formatNumber(item.summary)}</td>
                      </tr>
                    ))}
                    {quotationData?.quotation_type_id === 3 && (
                      <tr>
                        <td colSpan={4} className="text-end">
                          ส่วนลด
                        </td>
                        <td className="text-center">
                          <Form.Control
                            type="number"
                            value={discountValue}
                            disabled
                            style={{ width: '100px', margin: 'auto', backgroundColor: '#f8f9fa' }}
                          />
                        </td>
                        <td>
                          <Form.Select value={discountUnit} disabled style={{ width: '100px', margin: 'auto', backgroundColor: '#f8f9fa' }}>
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
            <Button
              variant="primary"
              //   disabled={serviceData.service_status_logs?.quotation_issued || serviceData.status === 'rejected'}
              onClick={() => handleEdit(quotationData.request_id_list_by_quotation)}
            >
              <FiEdit style={{ marginRight: 8 }} /> แก้ไขข้อมูล
            </Button>
            <Button variant="danger" onClick={() => navigate('/admin/issue-quotation')}>
              <i className="feather icon-corner-up-left" /> กลับ
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default QuotationDetail;
