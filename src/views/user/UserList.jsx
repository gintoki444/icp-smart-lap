// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup, Badge } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoWarningOutline, IoReload } from 'react-icons/io5';
import { FiCheck, FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as userRequest from 'services/_api/usersRequest';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';
import { approveUserNotify } from 'components/Notify/ApproveUserNotify';

const UsersList = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(data);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
    getUsers();
  }, []);

  useEffect(() => {}, [rows]);
  const getUsers = () => {
    userRequest.getAllUser().then((result) => {
      if (result) {
        const rows = result.map((user, index) => ({
          id: user.user_id,
          No: index + 1,
          first_name: user.first_name,
          last_name: user.last_name,
          fullName: `${user.first_name} ${user.last_name}`,
          email: user.email,
          phone: user.phone,
          role_id: user.role_id,
          role_name: user.role_name,
          dept_id: user.dept_id,
          dept_name: user.dept_name,
          createdAt: new Date(user.created_at).toLocaleDateString('th-TH'),
          status: user.status
        }));
        setData(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'fullName', headerName: 'ชื่อ-นามสกุล', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    { field: 'role_name', headerName: 'Roles', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'createdAt', headerName: 'วันที่สร้าง', flex: 1 },
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
            variant={params.row.status === 'pending' || params.row.status === 'rejected' ? 'outline-success' : 'outline-warning'}
            size="sm"
            onClick={() =>
              handleApprove(params.row.id, params.row.status === 'pending' || params.row.status === 'rejected' ? 'Y' : 'N', params.row)
            }
          >
            {params.row.status === 'pending' || params.row.status === 'rejected' ? <FiCheck /> : <IoWarningOutline />}
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

  const handleEdit = (users) => {
    navigate('/admin/user/edit', { state: { users } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleApprove = (id, status, userData) => {
    const confirmApprove = window.confirm(`คุณต้องการอนุมัติผู้ใช้ หรือไม่?`);
    if (confirmApprove) {
      const data = {
        approver_id: user.user_id,
        is_approved_user: status === 'Y' ? true : false
      };
      try {
        userRequest.putApproveUser(data, id).then(() => {
          toast.success('อนุมัติสำเร็จ!', { autoClose: 3000 });
          approveUserNotify(userData, user, status);
          getUsers();
        });
      } catch (error) {
        toast.error(`อนุมัติไม่สำเร็จ: ${error}`, { autoClose: 3000 });
      }
    }
  };
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลผู้ใช้หมายเลข ${id} หรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        userRequest.deleteUser(id).then(() => {
          getUsers();
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
          <h5>ข้อมูลรายการข้อมูลผู้ใช้งาน</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/admin/user/add')}>
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

export default UsersList;
