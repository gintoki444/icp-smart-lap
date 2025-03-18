import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Modal, Form, ButtonGroup, Badge } from 'react-bootstrap';
// TestResultsDashboard.jsx

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as customerRequest from '../../../services/_api/customerRequest';
import { authenUser } from 'services/_api/authentication';
import { getCustomerByUserID } from 'services/_api/usersRequest';

const Company = () => {
  const [customer, setcustomer] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(customer);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        if (response.user.user_id) {
          getcustomers(response.user.user_id);
        }
      });
    }
  }, []);

  useEffect(() => {}, [rows]);
  const getcustomers = (id) => {
    getCustomerByUserID(id).then((result) => {
      if (result) {
        const rows = result.map((customer, index) => ({
          id: customer.company_id,
          No: index + 1,
          company_name: customer.company_name,
          company_code: customer.company_code,
          company_address: customer.company_address,
          document_address: customer.document_address,
          tax_id: customer.tax_id,
          company_email: customer.company_email,
          company_phone: customer.company_phone,
          special_conditions: customer.special_conditions,
          created_at: new Date(customer.created_at).toLocaleString(),
          status: customer.status,
          customer_contacts: customer.customer_contacts
        }));
        setcustomer(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    // { field: 'company_code', headerName: 'รหัสบริษัท', flex: 0.7 },
    { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
    // { field: 'tax_id', headerName: 'เลขที่ผู้เสียภาษี', flex: 1 },
    { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 1 },
    // { field: 'document_address', headerName: 'ที่อยู่จัดส่งเอกสาร', flex: 1 },
    { field: 'company_email', headerName: 'อีเมล์', flex: 1 },
    { field: 'company_phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    // { field: 'special_conditions', headerName: 'Roles', flex: 0.7 },
    { field: 'created_at', headerName: 'วันที่สร้าง', flex: 1 },
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
      headerName: 'การจัดการ',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
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

  const handleEdit = (company) => {
    navigate('/company/edit', { state: { company } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลลูกค้า/บริษัทหรือไม่?`);
    if (confirmDelete) {
      try {
        customerRequest.deleteCustomer(id).then(() => {
          getcustomers();
        });
      } catch (error) {
        alert(`ลบข้อมูลไม่สำเร็จ:`, error);
      }
    }
  };
  return (
    <Row className="">
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">รายการข้อมูลลูกค้า/บริษัท</Card.Title>
              <span className="d-block m-t-5">
                บริษัทที่ผู้ใช้งานดูแล
                {/* <code>Table</code> component */}
              </span>
            </Col>
            {/* <Col className="text-end">
              <Button variant="primary" onClick={() => navigate('/company/select')}>
                <i className="feather icon-plus-circle" />
                เพิ่ม
              </Button>
            </Col> */}
          </Row>
        </Card.Header>
        <Card.Body>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/company/select')}>
              <i className="feather icon-plus-circle" />
              เพิ่ม
            </Button>
          </Stack>
          <div>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
              disableSelectionOnClick
              hideFooterSelectedRowCount
              style={{ fontSize: 16 }}
            />
          </div>
        </Card.Body>
      </Card>

      {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบริษัทใหม่</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ชื่อบริษัท</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อบริษัท"
                value={newCompany.name}
                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ที่อยู่บริษัท</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกที่อยู่บริษัท"
                value={newCompany.address}
                onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เบอร์โทร</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกเบอร์โทร"
                value={newCompany.phone}
                onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เลขที่ผู้เสียภาษี</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกเลขที่ผู้เสียภาษี"
                value={newCompany.taxId}
                onChange={(e) => setNewCompany({ ...newCompany, taxId: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>เอกสาร (คั่นด้วย ", ")</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อเอกสาร"
                value={newCompany.documents}
                onChange={(e) => setNewCompany({ ...newCompany, documents: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={handleAddCompany}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Row>
  );
};

export default Company;
