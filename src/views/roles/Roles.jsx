// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Stack } from '@mui/material';

import * as RoleRequest from 'services/_api/rolesRequest';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const RolesList = () => {
  const [role, setRole] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(role);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {}, [rows]);

  const getRoles = () => {
    setLoading(true);
    RoleRequest.getAllRoles().then((result) => {
      if (result) {
        const processedRows = result.map((role, index) => ({
          id: role.role_id, // ใช้ role_id เป็น id
          no: index + 1, // เพิ่มเลขลำดับ
          role_name: role.role_name,
          description: role.description,
          created_at: role.created_at,
          updated_at: role.updated_at
        }));
        setRole(processedRows);
        setRows(processedRows);
      }
      setLoading(false);
    });
  };

  const columns = [
    {
      field: 'no',
      headerName: 'No.',
      width: 90,
      headerAlign: 'center',
      align: 'center'
    },
    { field: 'role_name', headerName: 'Role', flex: 1 },
    { field: 'description', headerName: 'รายละเอียด', flex: 1 },
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

  const handleEdit = (roles) => {
    navigate('/admin/roles-list/edit', { state: { roles } });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this device?')) {
      try {
        await RoleRequest.deleteRoles(id);
        getRoles(); // รีเฟรชข้อมูลหลังจากลบสำเร็จ
      } catch (error) {
        console.error('Error deleting device:', error);
      }
    }
  };
  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลรายการ Role</h5>
        </Card.Header>
        <Card.Body className="p-10">
          {loading && <Loader />}

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" onClick={() => navigate('/admin/roles-list/add')}>
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

export default RolesList;
