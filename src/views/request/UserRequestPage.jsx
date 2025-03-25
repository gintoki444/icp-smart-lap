import React, { useState, useEffect } from 'react';
import { Card, Badge, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { IoWarningOutline, IoReload } from 'react-icons/io5';
import { FiCheck, FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as userRequest from 'services/_api/usersRequest';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { deleteServiceRequests, getAllServiceRequestByUser } from 'services/_api/serviceRequest';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
// import { getCustomerSpecialConditionsByID } from 'services/_api/customerService'; // สมมติว่ามี API นี้

const UserRequestPage = () => {
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [spacialCon, setSpacialCon] = useState([]); // เพิ่ม state ใหม่สำหรับ special conditions
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setLoading(true);
      authenUser(token)
        .then((response) => {
          setUser(response.user);
          getcustomers(response.user.user_id);
        })
        .catch((error) => {
          toast.error('ไม่สามารถตรวจสอบผู้ใช้ได้');
          console.error(error);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const handleGetCusSpacialCon = async (companyId) => {
    try {
      const response = await getCustomerSpecialConditionsByID(companyId);
      return response; // คาดว่า response เป็น array หรือ object ที่มีข้อมูล special conditions
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getcustomers = async (id) => {
    try {
      const result = await userRequest.getCustomerByUserID(id);
      console.log('result:', result);
      if (result) {
        const formattedCustomers = await Promise.all(
          result
            // .filter((customer) => customer.status === 'approved')
            .map(async (customer, index) => {
              const specialConditions = await handleGetCusSpacialCon(customer.company_id);
              return {
                id: customer.company_id,
                No: index + 1,
                company_name: customer.company_name || 'ไม่ระบุชื่อบริษัท',
                company_code: customer.company_code || 'ไม่ระบุรหัส',
                company_address: customer.company_address || 'ไม่ระบุที่อยู่',
                document_address: customer.document_address,
                tax_id: customer.tax_id || 'ไม่ระบุ',
                company_email: customer.company_email,
                company_phone: customer.company_phone,
                special_conditions: specialConditions || customer.special_conditions, // ใช้ข้อมูลจาก API หรือ fallback ไปที่ original
                created_at: new Date(customer.created_at).toLocaleString(),
                status: customer.status,
                customer_contacts: customer.customer_contacts
              };
            })
        );
        console.log('formattedCustomers:', formattedCustomers);
        setCustomer(formattedCustomers);

        // อัปเดต spacialCon ด้วยข้อมูลทั้งหมด
        const allSpecialConditions = formattedCustomers
          .filter((c) => c.special_conditions)
          .flatMap((c) => (Array.isArray(c.special_conditions) ? c.special_conditions : [c.special_conditions]));
        setSpacialCon(allSpecialConditions);

        await getServiceRequests(id);
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูลลูกค้า');
      console.error(error);
    }
  };

  const getServiceRequests = async (id) => {
    setLoading(true);
    try {
      const result = await getAllServiceRequestByUser(id);
      if (result.success) {
        const formattedRows = result.data.map((service, index) => ({
          id: service.request_id,
          No: index + 1,
          request_date: new Date(service.request_date).toLocaleDateString('th-TH'),
          request_no: service.request_no || '-',
          user_id: service.user_id,
          user_name: service.user_name,
          customer_id: service.customer_id,
          customer_name: service.customer_name,
          sample_type_name: service.sample_type_name,
          is_registration_analysis: service.is_registration_analysis,
          is_quality_check_analysis: service.is_quality_check_analysis,
          sample_type_id: service.sample_type_id,
          special_conditions: service.special_conditions || '-', // เปลี่ยนจาก notes เป็น special_conditions
          created_at: new Date(service.created_at).toLocaleDateString('th-TH'),
          status: service.status,
          sample_submissions: service.sample_submissions,
          service_request_documents: service.service_request_documents
        }));
        setServiceRequests(formattedRows);
      } else {
        setServiceRequests([]);
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูลคำขอ');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
    { field: 'sample_type_name', headerName: 'ประเภทปุ๋ย', flex: 0.7 },
    // { field: 'special_conditions', headerName: 'เงื่อนไขพิเศษ', flex: 1.2 }, // เปลี่ยนจาก notes เป็น special_conditions
    { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
    {
      field: 'status',
      headerName: 'สถานะ',
      width: 120,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Badge pill bg={params.row.status === 'pending' ? 'warning' : params.row.status === 'rejected' ? 'danger' : 'success'}>
          {params.row.status === 'pending' ? 'กำลังดำเนินการ' : params.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'}
        </Badge>
      )
    },
    {
      field: 'actions',
      headerName: 'การจัดการ',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
          <Button variant="primary" size="sm" onClick={() => navigate('/request/detial', { state: { id: params.row.id } })}>
            <i className="feather icon-file-text m-0" />
          </Button>
          <Button variant="info" size="sm" onClick={() => handleEdit(params.row)}>
            <FiEdit />
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => handleDelete(params.row.id)}>
            <RiDeleteBin5Line />
          </Button>
        </ButtonGroup>
      )
    }
  ];

  // ฟังก์ชันกรองข้อมูลทั้ง customer และ serviceRequests
  const filterData = () => {
    if (!filterText.trim()) {
      return customer.map((cust) => ({
        ...cust,
        filteredRows: serviceRequests.filter((row) => row.customer_id === cust.id)
      }));
    }

    const lowerFilterText = filterText.toLowerCase();

    return customer
      .map((cust) => {
        // กรอง serviceRequests ที่เกี่ยวข้องกับ customer นี้
        const filteredRows = serviceRequests.filter((row) => {
          if (row.customer_id !== cust.id) return false;
          return (
            row.request_no?.toLowerCase().includes(lowerFilterText) ||
            row.sample_type_name?.toLowerCase().includes(lowerFilterText) ||
            row.request_date?.toLowerCase().includes(lowerFilterText) ||
            row.notes?.toLowerCase().includes(lowerFilterText) ||
            row.status?.toLowerCase().includes(lowerFilterText)
          );
        });

        // ตรวจสอบว่า customer นี้ตรงกับคำค้นหาหรือมี serviceRequests ที่ตรง
        const customerMatches =
          cust.company_name?.toLowerCase().includes(lowerFilterText) ||
          cust.tax_id?.toLowerCase().includes(lowerFilterText) ||
          cust.company_address?.toLowerCase().includes(lowerFilterText);

        return {
          ...cust,
          filteredRows,
          isVisible: customerMatches || filteredRows.length > 0
        };
      })
      .filter((cust) => cust.isVisible);
  };

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  const handleClearFilter = () => {
    setFilterText('');
    localStorage.removeItem('filterText');
  };

  const handleEdit = (services) => {
    navigate('/request/edit/', { state: { id: services.id, customer: customer } });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('คุณต้องการลบข้อมูลคำขอรับบริการ หรือไม่?');
    if (confirmDelete) {
      setLoading(true);
      try {
        const response = await deleteServiceRequests(id);
        if (response) {
          toast.success('ลบข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3000 });
          if (user?.user_id) {
            await getServiceRequests(user.user_id);
          }
        }
      } catch (error) {
        toast.error('ลบข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3000 });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddService = (customer) => {
    navigate('/request/add', {
      state: {
        user: user,
        customer: customer
      }
    });
  };

  const filteredCustomers = filterData();

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Title as="h5">รายการคำขอรับบริการ</Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Form.Control
            type="text"
            placeholder="ค้นหาลูกค้า หรือ คำขอรับบริการ..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            disabled={loading}
          />
          <Button variant="primary" size="sm" onClick={handleClearFilter} disabled={!filterText || loading}>
            <IoReload style={{ fontSize: 20 }} />
          </Button>
        </Stack>

        {loading ? (
          <div>Loading...</div>
        ) : filteredCustomers.length > 0 ? (
          filteredCustomers.map((company) => (
            <Card key={`customer-${company.id}`} className="mb-3 rounded">
              <Card.Header style={{ background: '#e8f5ff' }}>
                <Row className="align-items-center">
                  <Col>
                    <Card.Title as="h6">
                      <spen style={{ fontWeigth: '300' }}>รหัสลูกค้า</spen>: {company.company_code} - {company.company_name}
                    </Card.Title>
                    <Row>
                      <Col md={6}>
                        <p className="mb-0">
                          เลขที่ผู้เสียภาษี: <span className="text-dark">{company.tax_id + ' '}</span>
                          ที่อยู่: <span className="text-dark">{' ' + company.company_address}</span>
                        </p>
                      </Col>
                      {spacialCon && spacialCon.length > 0 && (
                        <Col md={6}>
                          <p className="mb-0">
                            เงื่อนไขพิเศษ :{' '}
                            <strong className="text-dark">
                              {spacialCon
                                .filter((x) => x.company_id === company.id) // กรองเฉพาะของ company นี้
                                .map((x, index, array) => (index + 1 < array.length ? `${x.description}, ` : x.description))}
                            </strong>
                          </p>
                        </Col>
                      )}
                    </Row>
                  </Col>
                  <Col xs="auto">
                    <Button variant="success" size="sm" onClick={() => handleAddService(company)} disabled={loading}>
                      <i className="feather icon-plus-circle" /> เพิ่มคำขอ
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                {company.filteredRows.length > 0 ? (
                  <DataGrid
                    rows={company.filteredRows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    disableSelectionOnClick
                    hideFooterSelectedRowCount
                    loading={loading}
                    autoHeight
                  />
                ) : (
                  <div className="text-center">
                    <p className="mt-2">ไม่พบคำขอรับบริการสำหรับบริษัทนี้</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="text-center py-4">
            <IoWarningOutline size={24} />
            <p className="mt-2">ไม่พบข้อมูลลูกค้าหรือคำขอรับบริการที่ตรงกับคำค้นหา</p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default UserRequestPage;
