import React, { useState, useEffect, useMemo } from 'react';
import { Card, Badge, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography, CircularProgress, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { IoWarningOutline, IoReload } from 'react-icons/io5';
import { FiCheck, FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as userRequest from 'services/_api/usersRequest';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { deleteServiceRequests, getAllServiceRequests, getAllServiceRequestByUser } from 'services/_api/serviceRequest';
import { getAllCustomer } from 'services/_api/customerRequest';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deleteQuotations } from 'services/_api/quotationRequest';

const IssueQuotation = () => {
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [loading, setLoading] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setLoading(true);
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
          setLoading(false);
          setIsDataReady(true);
        });
    }
  }, []);

  const fetchData = async () => {
    try {
      const [customerResult, initialServiceResult] = await Promise.all([getAllCustomer(), getAllServiceRequests()]);

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
      }

      if (initialServiceResult) {
        const uniqueUserIds = [...new Set(initialServiceResult.map((service) => service.user_id))];

        const detailedServiceResults = await Promise.all(
          uniqueUserIds.map((userId) =>
            getAllServiceRequestByUser(userId)
              .then((services) => ({
                userId,
                services: services.data || []
              }))
              .catch((error) => {
                console.error(`Error fetching services for user ${userId}:`, error);
                return { userId, services: [] };
              })
          )
        );

        console.log('detailedServiceResults:', detailedServiceResults);

        const allServices = detailedServiceResults.flatMap((result) =>
          result.services.map((service, index) => ({
            id: service.request_id,
            No: index + 1,
            request_date: new Date(service.request_date).toLocaleString(),
            request_date_raw: service.request_date,
            request_no: service.request_no || '-',
            user_id: service.user_id,
            user_name: service.user_name,
            customer_id: service.customer_id,
            customer_name:
              customerResult?.find((cust) => cust.company_id === service.customer_id)?.company_name || service.customer_name || '-',
            sample_type_name: service.sample_type_name,
            status: service.status,
            notes: service.notes || '-',
            created_at: new Date(service.created_at).toLocaleString(),
            sample_submissions: service.sample_submissions,
            count_sample_submissions: service.sample_submissions?.length || 0,
            request_id_list_by_quotation: service.request_id_list_by_quotation,
            quotation_id: service.quotation_id,
            quotation_no: service.quotation_no || '-',
            quotation_date: service.quotation_date,
            service_request_documents: service.service_request_documents,
            service_status_logs: service.service_status_logs
          }))
        );

        const combinedServices = [
          ...initialServiceResult.map((service, index) => ({
            id: service.request_id,
            No: index + 1,
            request_date: new Date(service.request_date).toLocaleString(),
            request_date_raw: service.request_date,
            request_no: service.request_no || '-',
            user_id: service.user_id,
            user_name: service.user_name,
            customer_id: service.customer_id,
            customer_name:
              customerResult?.find((cust) => cust.company_id === service.customer_id)?.company_name || service.customer_name || '-',
            sample_type_name: service.sample_type_name,
            status: service.status,
            notes: service.notes || '-',
            created_at: new Date(service.created_at).toLocaleString(),
            sample_submissions: service.sample_submissions,
            count_sample_submissions: service.sample_submissions?.length || 0,
            request_id_list_by_quotation: service.request_id_list_by_quotation || [],
            quotation_no: service.quotation_no || '-',
            quotation_date: service.quotation_date || null,
            service_request_documents: service.service_request_documents || [],
            service_status_logs: service.service_status_logs || []
          })),
          ...allServices
        ].reduce((acc, service) => {
          acc[service.id] = service;
          return acc;
        }, {});

        const finalServiceRequests = Object.values(combinedServices)
          .filter((service) => service.request_no && service.request_no !== '-') // กรองเฉพาะที่มี request_no และไม่ใช่ '-'
          .map((service, index) => ({
            ...service,
            No: index + 1
          }));

        setServiceRequests(finalServiceRequests.length > 0 ? finalServiceRequests : []);
      } else {
        setServiceRequests([]);
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
      console.error(error);
      setServiceRequests([]);
    }
  };

  const columns = [
    {
      field: 'checkbox',
      headerName: 'เลือก',
      width: 70,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Form.Check
            type="checkbox"
            checked={selectedRequests.includes(params.row.id)}
            className="d-flex justify-content-center align-items-center"
            disabled={params.row.request_id_list_by_quotation}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRequests((prev) => [...prev, params.row.id]);
              } else {
                setSelectedRequests((prev) => prev.filter((id) => id !== params.row.id));
              }
            }}
            style={{
              margin: 0,
              padding: 0
            }}
          />
        </div>
      )
    },
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
    { field: 'quotation_no', headerName: 'เลขที่ใบเสนอราคา', flex: 0.8 },
    { field: 'sample_type_name', headerName: 'ประเภทคำขอ', flex: 0.7 },
    { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
    { field: 'count_sample_submissions', headerName: 'จำนวนตัวอย่าง', flex: 1, headerAlign: 'center', align: 'center' },
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
          <Tooltip title="แก้ไข" placement="bottom" arrow>
            <Button variant="info" size="sm" disabled={!params.row.quotation_id} onClick={() => handleEdit(params.row.quotation_id)}>
              <FiEdit />
            </Button>
          </Tooltip>
          <Tooltip title="รายละเอียด" placement="bottom" arrow>
            <Button
              variant="primary"
              size="sm"
              disabled={!params.row.quotation_id}
              onClick={() => {
                navigate('/admin/issue-quotation/detail', { state: { id: params.row.quotation_id } });
              }}
            >
              <i className="feather icon-file-text m-0" />
            </Button>
          </Tooltip>
          <Tooltip title="ลบใบเสนอราคา" placement="bottom" arrow>
            <Button
              variant="outline-danger"
              size="sm"
              disabled={!params.row.quotation_id}
              onClick={() => handleDelete(params.row.quotation_id)}
            >
              <RiDeleteBin5Line />
            </Button>
          </Tooltip>
        </ButtonGroup>
      )
    }
  ];

  const filterData = useMemo(() => {
    if (!serviceRequests.length || !customer.length) return [];

    let groupedByCustomer = {};
    const lowerFilterText = filterText.toLowerCase().trim();

    serviceRequests.forEach((req) => {
      const matches =
        !lowerFilterText ||
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

    let groups = Object.values(groupedByCustomer).map((group) => {
      const customerData = customer.find((cust) => cust.id === group.customer_id) || {};
      return {
        ...group,
        company_name: customerData.company_name || group.customer_name,
        company_code: customerData.company_code,
        tax_id: customerData.tax_id || '-',
        company_address: customerData.company_address || '-',
        isVisible: true
      };
    });

    groups = groups.sort((a, b) => new Date(b.earliestRequestDate) - new Date(a.earliestRequestDate));
    return groups
      .map((group) => ({
        ...group,
        filteredRows: group.filteredRows.map((row, index) => ({ ...row, No: index + 1 }))
      }))
      .filter((group) => group.isVisible);
  }, [serviceRequests, customer, filterText]);

  const handleSelectAllInGroup = (group, isChecked, event) => {
    // หยุดการส่งต่อ event เพื่อป้องกันการขยาย/ย่อของ Accordion
    event.stopPropagation();

    // กรองเฉพาะรายการที่ไม่มี quotation_no (เช่น quotation_no เป็น undefined, null, หรือ '-')
    const selectableRequestIds = group.filteredRows.filter((row) => !row.quotation_no || row.quotation_no === '-').map((row) => row.id);

    setSelectedRequests(
      (prev) =>
        isChecked
          ? [...new Set([...prev, ...selectableRequestIds])] // เพิ่มเฉพาะรายการที่เลือกได้
          : prev.filter((id) => !selectableRequestIds.includes(id)) // ลบเฉพาะรายการที่เลือกได้
    );
  };

  const handleCreateQuotation = (customerId) => {
    if (selectedRequests.length === 0) {
      toast.error('กรุณาเลือกอย่างน้อย 1 รายการ');
      return;
    }

    const selectedRows = serviceRequests.filter((req) => selectedRequests.includes(req.id));
    const firstCustomerId = selectedRows[0]?.customer_id;

    const allSameCustomer = selectedRows.every((req) => req.customer_id === firstCustomerId);
    if (!allSameCustomer) {
      toast.error('กรุณาเลือกคำขอจากลูกค้าคนเดียวกันเท่านั้น');
      return;
    }

    const params = new URLSearchParams({
      request_ids: selectedRequests.join(','),
      customer_id: firstCustomerId,
      discount_percentage: '0',
      created_by: user?.user_id
    });

    navigate(`/admin/issue-quotation/create?${params.toString()}`);
  };

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  const handleClearFilter = () => {
    setFilterText('');
    localStorage.removeItem('filterText');
  };

  const handleEdit = (id) => {
    navigate('/admin/issue-quotation/edit', { state: { id } });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('คุณต้องการลบข้อมูลใบเสนอราคา หรือไม่?');
    if (confirmDelete) {
      setLoading(true);
      try {
        const response = await deleteQuotations(id);
        console.log('deleteQuotations:', response);

        toast.success('ลบข้อมูลใบเสนอราคาสำเร็จ!', { autoClose: 3000 });
        await fetchData();
      } catch (error) {
        toast.error('ลบข้อมูลใบเสนอราคาไม่สำเร็จ!', { autoClose: 3000 });
        console.error('❌ Delete error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddService = (customerId) => {
    const customerData = customer.find((cust) => cust.id === customerId);
    navigate('/request/add', { state: { user: user, customer: customerData } });
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Title as="h5">รายการออกใบเสนอราคา</Card.Title>
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

        {loading || !isDataReady ? (
          <Stack direction="column" alignItems="center" justifyContent="center" sx={{ py: 4 }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2 }}>
              กำลังโหลดข้อมูล...
            </Typography>
          </Stack>
        ) : filterData.length > 0 ? (
          filterData.map((group) => (
            <Col md={12} className="mb-3" style={{ border: '1px solid #f8f9fa', borderRadius: 10 }} key={`customer-${group.customer_id}`}>
              <Accordion defaultExpanded={true} sx={{ boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#e8f5ff', borderRadius: 0 }}>
                  <Row className="align-items-center w-100">
                    <Col>
                      <h6>
                        รหัสลูกค้า : {group.company_code} {' - '}
                        {group.company_name}
                      </h6>
                      <p className="mb-0">
                        เลขที่ผู้เสียภาษี: <span style={{ color: '#343a40' }}>{group.tax_id + ' '}</span>
                        ที่อยู่: <span style={{ color: '#343a40' }}>{' ' + group.company_address}</span>
                      </p>
                    </Col>
                    <Col xs="auto">
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Form.Check
                          type="checkbox"
                          label="เลือกทั้งหมด"
                          className="mb-0"
                          onClick={(e) => e.stopPropagation()} // หยุดการส่งต่อ event
                          onChange={(e) => handleSelectAllInGroup(group, e.target.checked, e)} // ส่ง event ไปด้วย
                          checked={group.filteredRows
                            .filter((row) => !row.quotation_no || row.quotation_no === '-') // เฉพาะรายการที่เลือกได้
                            .every((row) => selectedRequests.includes(row.id))}
                          disabled={
                            group.filteredRows.every((row) => row.quotation_no && row.quotation_no !== '-') // ปิดถ้าทั้งหมดมี quotation_no
                          }
                        />
                        <Button
                          variant="success"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation(); // หยุดการส่งต่อ event
                            handleCreateQuotation(group.customer_id);
                          }}
                          disabled={!selectedRequests.some((id) => group.filteredRows.some((row) => row.id === id))}
                        >
                          สร้างใบเสนอราคา
                        </Button>
                      </Stack>
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
                      ไม่พบใบเสนอราคาสำหรับลูกค้านี้
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
              ไม่พบข้อมูลใบเสนอราคาที่ตรงกับคำค้นหา
            </Typography>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default IssueQuotation;
