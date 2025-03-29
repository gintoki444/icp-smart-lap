// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as customerRequest from 'services/_api/customerRequest';

const Customer = () => {
  const [customer, setcustomer] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(customer);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getcustomers();
  }, []);

  useEffect(() => {}, [rows]);
  const getcustomers = () => {
    customerRequest.getAllCustomer().then((result) => {
      if (result) {
        const rows = result.map((customer, index) => ({
          id: customer.company_id,
          No: index + 1,
          company_name: customer.company_name,
          company_code: customer.company_code,
          company_address: customer.company_address,
          document_address: customer.document_address,
          tax_id: customer.tax_id,
          email: customer.email,
          phone: customer.phone,
          special_conditions: customer.special_conditions,
          created_at: new Date(customer.created_at).toLocaleString(),
          customer_contacts: customer['customer-contacts']
          // customer_documents: customer.customer_documents
          //   status: customer.status
        }));
        setcustomer(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'company_code', headerName: 'รหัสบริษัท', flex: 0.7 },
    { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
    { field: 'tax_id', headerName: 'เลขที่ผู้เสียภาษี', flex: 1 },
    { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 1 },
    { field: 'document_address', headerName: 'ที่อยู่จัดส่งเอกสาร', flex: 1 },
    { field: 'email', headerName: 'อีเมล', flex: 1 },
    { field: 'phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    { field: 'special_conditions', headerName: 'Roles', flex: 0.7 },
    { field: 'created_at', headerName: 'วันที่สร้าง', flex: 1 },
    // { field: 'status', headerName: 'สถานะ', width: 120, headerAlign: 'center', align: 'center' },
    {
      field: 'actions',
      headerName: 'Action',
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

  const handleEdit = (customers) => {
    navigate('/admin/customer/edit', { state: { customers } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลลูกค้า/บริษัทหรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
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
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลลูกค้า/บริษัท</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/admin/customer/add')}>
              <i className="feather icon-plus-circle" />
              เพิ่ม
            </Button>
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
    </div>
  );
};

export default Customer;
