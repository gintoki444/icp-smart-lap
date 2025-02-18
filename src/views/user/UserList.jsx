// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Modal, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Stack } from '@mui/material';
// import { testResults } from 'services/TestData/resultsTestData';
// import { format } from 'date-fns';
// import { BsQrCodeScan } from 'react-icons/bs';
import * as userRequest from 'services/_api/usersRequest';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const UsersList = () => {
  const [user, setUser] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(user);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(rows.length);
    console.log(columns.length);
    console.log(rows);
    console.log(columns);
  }, [rows]);
  const getUsers = () => {
    setLoading(true);
    userRequest.getAllUser().then((result) => {
      if (result) {
        const rows = result.map((user, index) => ({
          id: index + 1,
          fullName: `${user.first_name} ${user.last_name}`,
          email: user.email,
          phone: user.phone,
          role: user.role_name,
          createdAt: new Date(user.created_at).toLocaleString(),
          status: user.status
        }));
        setUser(rows);
        setRows(rows);
      }
      setLoading(false);
    });
  };

  const columns = [
    { field: 'id', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'fullName', headerName: 'ชื่อ-นามสกุล', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    { field: 'role', headerName: 'Roles', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'createdAt', headerName: 'วันที่สร้าง', flex: 1 },
    { field: 'status', headerName: 'สถานะ', width: 120, headerAlign: 'center', align: 'center' },
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

  const handleEdit = (row) => {
    alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลผู้ใช้หมายเลข ${id} หรือไม่?`);
    if (confirmDelete) {
      alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
    }
  };
  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลรายการตัวอย่าง</h5>
        </Card.Header>
        <Card.Body className="p-10">
          {loading && <Loader />}

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
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

export default UsersList;
