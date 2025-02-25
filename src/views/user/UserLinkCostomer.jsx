// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup, Badge } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkSharp, IoClose, IoReload } from 'react-icons/io5';

import * as userRequest from 'services/_api/usersRequest';
import { toast } from 'react-toastify';
import { authenUser } from 'services/_api/authentication';

const UserLinkCostomer = () => {
  const [user, setUser] = useState([]);
  const [userLinkCostomers, setUserLinkCostomers] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(userLinkCostomers);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
    getUserCustomerLink();
  }, []);

  useEffect(() => {}, [rows]);
  const getUserCustomerLink = () => {
    userRequest.getAllUserCustomerLink().then((result) => {
      if (result) {
        const rows = result.map((data, index) => ({
          id: data.id,
          No: index + 1,
          user_id: data.user_id,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          fullName: `${data.first_name} ${data.last_name}`,
          user_email: data.user_email,
          user_phone: data.user_phone,
          company_id: data.company_id,
          company_name: data.company_name,
          company_address: data.company_address,
          company_email: data.company_email,
          company_phone: data.company_phone,
          createdAt: new Date(data.created_at).toLocaleString(),
          status: data.status
        }));
        setUserLinkCostomers(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'fullName', headerName: 'ชื่อ-นามสกุลผู้ใช้', flex: 1 },
    { field: 'user_email', headerName: 'E-mail ผู้ใช้', flex: 1 },
    { field: 'user_phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    { field: 'company_name', headerName: 'บริษัท', flex: 1 },
    { field: 'company_email', headerName: 'E-mail บริษัท', flex: 1 },
    { field: 'company_phone', headerName: 'เบอร์โทรบริษัท', flex: 1 },
    { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 1 },
    { field: 'createdAt', headerName: 'วันที่สร้าง', flex: 1 },
    {
      field: 'status',
      headerName: 'สถานะคำขอ',
      width: 120,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Badge pill style={{}} bg={params.row.status === 'pending' ? 'warning' : 'success'}>
          {params.row.status === 'pending' ? 'รออนุมัติ' : 'อนุมัติ'}
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
        <ButtonGroup style={{ fontSize: 14 }}>
          <Button variant="outline-info" size="sm" onClick={() => handleApprove(params.row.id, 'Y')}>
            <IoCheckmarkSharp />
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => handleApprove(params.row.id, 'N')}>
            <IoClose />
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

  const handleApprove = (id, status) => {
    const confirmDelete = window.confirm(`คุณต้องการอนุมัติคำขอใช้บริษัท หรือไม่?`);
    if (confirmDelete) {
      const data = {
        approved_by: user.user_id,
        status: status === 'Y' ? 'approved' : 'rejected'
      };
      try {
        userRequest.putUserCustomerLinks(data, id).then(() => {
          toast.success('อนุมัติสำเร็จ!', { autoClose: 3000 });
          getUserCustomerLink();
        });
      } catch (error) {
        toast.error(`อนุมัติไม่สำเร็จ: ${error}`, { autoClose: 3000 });
      }
    }
  };
  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลรายการตัวอย่าง</h5>
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

export default UserLinkCostomer;
