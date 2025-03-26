import React, { useState, useEffect } from 'react';
import { Card, Badge, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';

import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { deleteServiceRequests, getAllServiceRequests } from 'services/_api/serviceRequest';

const SampleReceiving = () => {
  const [user, setUser] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(serviceRequests);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
        getServiceRequests(response.user.user_id);
      });
    }
  }, []);

  useEffect(() => {}, [rows]);
  const getServiceRequests = () => {
    getAllServiceRequests().then((result) => {
      if (result) {
        const rows = result.map((service, index) => ({
          id: service.request_id,
          No: index + 1,
          request_date: new Date(service.request_date).toLocaleString(),
          request_no: service.request_no || '-',
          user_id: service.user_id,
          user_name: service.user_name,
          customer_id: service.customer_id,
          customer_name: service.customer_name,
          sample_type_name: service.sample_type_name,
          is_registration_analysis: service.is_registration_analysis,
          is_quality_check_analysis: service.is_quality_check_analysis,
          sample_type_id: service.sample_type_id,
          notes: service.notes || '-',
          created_at: new Date(service.created_at).toLocaleString(),
          status: service.status,
          sample_submissions: service.sample_submissions,
          service_request_documents: service.service_request_documents
        }));
        setServiceRequests(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'customer_name', headerName: 'บริษัท', flex: 1 },
    { field: 'user_name', headerName: 'ผู้ขอรับบริการ', flex: 1 },
    { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
    { field: 'sample_type_name', headerName: 'ประเภทคำขอ', flex: 0.7 },
    { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
    { field: 'notes', headerName: 'โน้ต', flex: 1.2 },
    {
      field: 'status',
      headerName: 'สถานะ',
      width: 120,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Badge pill style={{}} bg={params.row.status === 'pending' ? 'warning' : params.row.status === 'rejected' ? 'danger' : 'success'}>
          {params.row.status === 'pending' ? 'รออนุมัติ' : params.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'}
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
              navigate('/admin/sample-receiving/add', { state: { id: params.row.id } });
            }}
          >
            <i className="feather icon-file-text m-0" />
          </Button>
          {/* <Button variant="info" size="sm" onClick={() => handleEdit(params.row)}>
            <FiEdit />
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => handleDelete(params.row.id)}>
            <RiDeleteBin5Line />
          </Button> */}
        </ButtonGroup>
      )
    }
  ];

  // ฟังก์ชันค้นหา (Search & Filter)
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()))
  );

  // บันทึก Filter ลง localStorage
  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  // เคลียร์การค้นหา
  const handleClearFilter = () => {
    setFilterText('');
    localStorage.removeItem('filterText');
  };

  const handleEdit = (services) => {
    navigate('/admin/request/edit/', { state: { id: services.id } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลคำขอรับบริการ หรือไม่?`);
    if (confirmDelete) {
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        deleteServiceRequests(id).then(() => {
          toast.success('ลบข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3000 });
          getServiceRequests(user.user_id);
        });
      } catch (error) {
        toast.error('ลบข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3000 });
      }
    }
  };
  return (
    <>
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
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            {/* <Button variant="success" size="sm" onClick={() => navigate('/admin/request/add', { state: { user: user } })}>
              <i className="feather icon-plus-circle" />
              เพิ่ม
            </Button> */}
          </Stack>

          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            disableSelectionOnClick
            hideFooterSelectedRowCount
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default SampleReceiving;
