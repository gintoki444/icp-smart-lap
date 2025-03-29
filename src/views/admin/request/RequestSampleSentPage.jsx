import React, { useState, useEffect, useMemo } from 'react';
import { Card, Badge, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip } from '@mui/material';
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
import { getNextPendingStatus, getStatusMenu } from 'components/Utility/statusRequestUtilis';

const RequestSampleSentPage = () => {
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(false);
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
        .finally(() => setLoading(false));
    }
  }, []);

  const fetchData = async () => {
    try {
      const [customerResult, initialServiceResult] = await Promise.all([getAllCustomer(), getAllServiceRequests()]);
      setCustomer(
        customerResult.map((cust, index) => ({
          id: cust.company_id,
          No: index + 1,
          company_code: cust.company_code,
          company_name: cust.company_name,
          tax_id: cust.tax_id,
          company_address: cust.company_address
        }))
      );

      const uniqueUserIds = [...new Set(initialServiceResult.map((service) => service.user_id))];
      const detailedServiceResults = await Promise.all(
        uniqueUserIds.map((userId) => getAllServiceRequestByUser(userId).then((services) => services.data || []))
      );

      const allServices = detailedServiceResults.flatMap((services, userIndex) =>
        services.map((service, index) => ({
          id: service.request_id,
          No: index + 1,
          request_date: new Date(service.request_date).toLocaleString(),
          request_no: service.request_no || '-',
          user_id: service.user_id,
          user_name: service.user_name,
          customer_id: service.customer_id,
          customer_name:
            customerResult?.find((cust) => cust.company_id === service.customer_id)?.company_name || service.customer_name || '-',
          sample_type_name: service.sample_type_name,
          status: service.status,
          notes: service.notes || '-',
          sample_submissions: service.sample_submissions,
          count_sample_submissions: service.sample_submissions?.length || 0,
          service_status_logs: service.service_status_logs
        }))
      );

      // กรองเฉพาะสถานะ "รับตัวอย่างเข้าระบบ"
      const filteredServices = allServices.filter((service) => {
        const { menu } = getStatusMenu(service.service_status_logs);
        return menu === 'รับตัวอย่างเข้าระบบ';
      });

      setServiceRequests(filteredServices);
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
      console.error(error);
      setServiceRequests([]);
    }
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
    { field: 'sample_type_name', headerName: 'ประเภทคำขอ', flex: 0.7 },
    { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
    { field: 'count_sample_submissions', headerName: 'จำนวนตัวอย่าง', flex: 1, headerAlign: 'center', align: 'center' },
    {
      field: 'status',
      headerName: 'สถานะ',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <>
          <Tooltip title={getNextPendingStatus(params.row.service_status_logs)}>
            <Badge
              pill
              bg={params.row.status === 'pending' ? 'warning' : params.row.status === 'rejected' ? 'danger' : 'success'}
              className="status-service"
            >
              {getNextPendingStatus(params.row.service_status_logs)}
            </Badge>
          </Tooltip>
        </>
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
              navigate('/admin/request-sample-sent/' + params.row.id);
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
    const filteredRows = filterText.trim()
      ? serviceRequests.filter((req) =>
          [req.request_no, req.sample_type_name, req.request_date, req.customer_name].some((field) =>
            field?.toLowerCase().includes(filterText.toLowerCase())
          )
        )
      : serviceRequests;

    filteredRows.forEach((req) => {
      const customerId = req.customer_id;
      if (!groupedByCustomer[customerId]) {
        groupedByCustomer[customerId] = {
          customer_id: customerId,
          customer_name: req.customer_name,
          serviceCount: 0,
          filteredRows: [],
          earliestRequestDate: req.request_date
        };
      }
      groupedByCustomer[customerId].serviceCount += 1;
      groupedByCustomer[customerId].filteredRows.push(req);
    });

    return Object.values(groupedByCustomer)
      .map((group) => ({
        ...group,
        filteredRows: group.filteredRows.map((row, index) => ({ ...row, No: index + 1 }))
      }))
      .sort((a, b) => new Date(b.earliestRequestDate) - new Date(a.earliestRequestDate));
  }, [serviceRequests, customer, filterText]);

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Title as="h5">รับตัวอย่างเข้าระบบ</Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pt-3 pb-3">
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Form.Control
            type="text"
            placeholder="ค้นหาคำขอรับตัวอย่างเข้าระบบ..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            disabled={loading}
          />
          <Button variant="primary" size="sm" onClick={() => setFilterText('')} disabled={!filterText || loading}>
            <IoReload style={{ fontSize: 20 }} />
          </Button>
        </Stack>

        {loading ? (
          <div>Loading...</div>
        ) : filterData.length > 0 ? (
          filterData.map((group) => (
            <Col md={12} className="mb-3" style={{ border: '1px solid #f8f9fa', borderRadius: 10 }} key={group.customer_id}>
              <Accordion defaultExpanded={true} sx={{ boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#e8f5ff', borderRadius: 0 }}>
                  <Row className="align-items-center w-100">
                    <Col>
                      <h6>
                        รหัสลูกค้า: {group.company_code} {group.customer_name}
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <Badge pill bg="danger" style={{ padding: '8px 12px' }}>
                        {group.serviceCount} คำขอ
                      </Badge>
                    </Col>
                  </Row>
                </AccordionSummary>
                <AccordionDetails>
                  <DataGrid
                    rows={group.filteredRows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    disableSelectionOnClick
                    hideFooterSelectedRowCount
                    autoHeight
                  />
                </AccordionDetails>
              </Accordion>
            </Col>
          ))
        ) : (
          <div className="text-center py-4">
            <IoWarningOutline size={24} />
            <Typography variant="body2" className="mt-2">
              ไม่พบข้อมูลคำขอรับตัวอย่างเข้าระบบ
            </Typography>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default RequestSampleSentPage;
