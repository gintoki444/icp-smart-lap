import React, { useState, useEffect, useMemo } from 'react';
import { Card, Badge, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { IoWarningOutline, IoReload } from 'react-icons/io5';
import { FiCheck, FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as userRequest from 'services/_api/usersRequest';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { deleteServiceRequests, getAllServiceRequests } from 'services/_api/serviceRequest';
import { getAllCustomer } from 'services/_api/customerRequest';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdminRequestPage = () => {
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [loading, setLoading] = useState(false); // สำหรับการดึงข้อมูล
  const [isDataReady, setIsDataReady] = useState(false); // สำหรับการกรองและแสดงผล
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setLoading(true); // เริ่ม loading เมื่อดึงข้อมูล
      authenUser(token)
        .then((response) => {
          setUser(response.user);
          return fetchData();
        })
        .catch((error) => {
          toast.error('ไม่สามารถตรวจสอบผู้ใช้ได้');
          console.error(error);
        })
        .finally(() => {
          setLoading(false); // ปิด loading หลังจาก fetchData เสร็จ
          setIsDataReady(true); // ตั้งค่าสถานะให้พร้อมกรอง
        });
    }
  }, []);

  const fetchData = async () => {
    try {
      const [customerResult, serviceResult] = await Promise.all([getAllCustomer(), getAllServiceRequests()]);
      if (customerResult) {
        const formattedCustomers = customerResult.map((cust, index) => ({
          id: cust.company_id,
          No: index + 1,
          company_code: cust.company_code,
          company_name: cust.company_name,
          tax_id: cust.tax_id,
          company_address: cust.company_address
        }));
        setCustomer(formattedCustomers);
        console.log('Formatted Customers:', formattedCustomers); // Debug
      }
      if (serviceResult) {
        const formattedRows = serviceResult.map((service, index) => ({
          id: service.request_id,
          No: index + 1,
          request_date: new Date(service.request_date).toLocaleString(),
          request_date_raw: service.request_date,
          request_no: service.request_no || '-',
          user_id: service.user_id,
          user_name: service.user_name,
          customer_id: service.customer_id,
          customer_name: service.customer_name,
          sample_type_name: service.sample_type_name,
          status: service.status,
          notes: service.notes || '-',
          created_at: new Date(service.created_at).toLocaleString(),
          sample_submissions: service.sample_submissions,
          service_request_documents: service.service_request_documents
        }));
        setServiceRequests(formattedRows);
        console.log('Formatted Service Requests:', formattedRows); // Debug
      } else {
        setServiceRequests([]);
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
      console.error(error);
    }
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
    { field: 'sample_type_name', headerName: 'ประเภทคำขอ', flex: 0.7 },
    { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
    { field: 'notes', headerName: 'เงื่อนไขพิเศษ', flex: 1.2 },
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
      headerName: 'Action',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              navigate('/admin/request/verify', { state: { id: params.row.id } });
            }}
          >
            <i className="feather icon-file-text m-0" />
          </Button>
        </ButtonGroup>
      )
    }
  ];

  const filterData = useMemo(() => {
    if (!serviceRequests.length || !customer.length) return [];

    let groupedByCustomer = {};

    // กรณีไม่มีตัวกรอง
    if (!filterText.trim()) {
      serviceRequests.forEach((req) => {
        const customerId = req.customer_id;
        if (!groupedByCustomer[customerId]) {
          groupedByCustomer[customerId] = {
            customer_id: customerId,
            customer_name: req.customer_name,
            serviceCount: 0,
            filteredRows: [],
            earliestRequestDate: req.request_date_raw
          };
        }
        groupedByCustomer[customerId].serviceCount += 1;
        groupedByCustomer[customerId].filteredRows.push(req);
        if (new Date(req.request_date_raw) < new Date(groupedByCustomer[customerId].earliestRequestDate)) {
          groupedByCustomer[customerId].earliestRequestDate = req.request_date_raw;
        }
      });
    } else {
      // กรณีมีตัวกรอง
      const lowerFilterText = filterText.toLowerCase();
      serviceRequests.forEach((req) => {
        const matches =
          req.request_no?.toLowerCase().includes(lowerFilterText) ||
          req.sample_type_name?.toLowerCase().includes(lowerFilterText) ||
          req.request_date?.toLowerCase().includes(lowerFilterText) ||
          req.notes?.toLowerCase().includes(lowerFilterText) ||
          req.status?.toLowerCase().includes(lowerFilterText) ||
          req.customer_name?.toLowerCase().includes(lowerFilterText);

        if (matches) {
          const customerId = req.customer_id;
          if (!groupedByCustomer[customerId]) {
            groupedByCustomer[customerId] = {
              customer_id: customerId,
              customer_name: req.customer_name,
              serviceCount: 0,
              filteredRows: [],
              earliestRequestDate: req.request_date_raw
            };
          }
          groupedByCustomer[customerId].serviceCount += 1;
          groupedByCustomer[customerId].filteredRows.push(req);
          if (new Date(req.request_date_raw) < new Date(groupedByCustomer[customerId].earliestRequestDate)) {
            groupedByCustomer[customerId].earliestRequestDate = req.request_date_raw;
          }
        }
      });
    }

    // แปลง groupedByCustomer เป็น array และเพิ่มข้อมูลลูกค้า
    let groups = Object.values(groupedByCustomer).map((group) => {
      const customerData = customer.find((cust) => cust.id === group.customer_id) || {};
      return {
        ...group,
        company_name: customerData.company_name || group.customer_name,
        tax_id: customerData.tax_id || '-',
        company_address: customerData.company_address || '-',
        isVisible: true
      };
    });

    // เรียง groups ตาม earliestRequestDate (เก่าสุดไปใหม่สุด)
    groups = groups.sort((a, b) => new Date(b.earliestRequestDate) - new Date(a.earliestRequestDate));

    // ปรับ No ให้เริ่มต้นที่ 1 สำหรับแต่ละกลุ่ม
    groups = groups.map((group) => {
      const reIndexedRows = group.filteredRows.map((row, index) => ({
        ...row,
        No: index + 1
      }));
      return {
        ...group,
        filteredRows: reIndexedRows
      };
    });

    return groups.filter((group) => group.isVisible);
  }, [serviceRequests, customer, filterText]); // ใช้ useMemo กับ dependencies

  useEffect(() => {
    if (isDataReady && (serviceRequests.length > 0 || customer.length > 0)) {
      // ไม่ต้องเรียก filterData ตรงๆ เพราะ useMemo จะจัดการให้
    }
  }, [isDataReady, serviceRequests, customer]);

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  const handleClearFilter = () => {
    setFilterText('');
    localStorage.removeItem('filterText');
  };

  const handleEdit = (services) => {
    navigate('/request/edit/', { state: { id: services.id }, customer: customer });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('คุณต้องการลบข้อมูลคำขอรับบริการ หรือไม่?');
    if (confirmDelete) {
      setLoading(true);
      try {
        await deleteServiceRequests(id);
        toast.success('ลบข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3000 });
        if (user?.user_id) {
          await fetchData();
        }
      } catch (error) {
        toast.error('ลบข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3000 });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddService = (customerId) => {
    const customerData = customer.find((cust) => cust.id === customerId);
    navigate('/request/add', {
      state: {
        user: user,
        customer: customerData
      }
    });
  };

  console.log('Filtered Groups:', filterData); // Debug filteredGroups

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Title as="h5">รายการคำขอรับบริการ</Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pt-3 pb-3">
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

        <>
          {loading || !isDataReady ? (
            <div>Loading...</div>
          ) : filterData.length > 0 ? (
            filterData.map((group) => (
              <Col md={12} className="mb-3" style={{ border: '1px solid #f8f9fa', borderRadius: 10 }} key={`customer-${group.customer_id}`}>
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#e8f5ff', borderRadius: 0 }}>
                    <Row className="align-items-center w-100">
                      <Col>
                        <h6>
                          รหัสลูกค้า : {group.company_code}
                          {group.company_name}
                        </h6>
                        <p className="mb-0">
                          เลขที่ผู้เสียภาษี: <span style={{ color: '#343a40' }}>{group.tax_id + ' '}</span>
                          ที่อยู่: <span style={{ color: '#343a40' }}>{' ' + group.company_address}</span>
                        </p>
                      </Col>
                      <Col xs="auto">
                        <Badge pill bg={'danger'} style={{ padding: '8px 12px' }}>
                          {group.serviceCount} คำขอ
                        </Badge>
                      </Col>
                    </Row>
                  </AccordionSummary>
                  <AccordionDetails>
                    {group.filteredRows.length > 0 ? (
                      <DataGrid
                        rows={group.filteredRows}
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
                      <Typography variant="body2" align="center">
                        ไม่พบคำขอรับบริการสำหรับลูกค้านี้
                      </Typography>
                    )}
                  </AccordionDetails>
                </Accordion>
              </Col>
            ))
          ) : (
            <div className="text-center py-4">
              <IoWarningOutline size={24} />
              <Typography variant="body2" className="mt-2">
                ไม่พบข้อมูลคำขอรับบริการที่ตรงกับคำค้นหา
              </Typography>
            </div>
          )}
        </>
      </Card.Body>
    </Card>
  );
};

export default AdminRequestPage;
