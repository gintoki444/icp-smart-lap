// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Stack } from '@mui/material';

import * as menusRequest from 'services/_api/menusRequest';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { toast } from 'react-toastify';
import NavIcon from 'layouts/AdminLayout/Navigation/NavContent/NavIcon';
// import 'react-toastify/dist/ReactToastify.css';

const MenusList = () => {
  const [menus, setmenus] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(menus);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getMenus();
  }, []);

  useEffect(() => {}, [rows]);

  const getMenus = () => {
    setLoading(true);
    menusRequest.getAllMenus().then((result) => {
      if (result) {
        const processedRows = result.map((menus, index) => ({
          id: menus.menu_id,
          no: index + 1,
          menu_name: menus.menu_name,
          menu_key: menus.menu_key,
          menu_type: menus.menu_type,
          parent_id: menus.parent_id,
          route: menus.route,
          icon: menus.icon,
          sort_order: menus.sort_order,
          is_active: menus.is_active
        }));
        setmenus(processedRows);
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
    { field: 'menu_name', headerName: 'ชื่อเมนู', flex: 1 },
    { field: 'menu_key', headerName: 'key', flex: 1 },
    { field: 'menu_type', headerName: 'Type', flex: 1 },
    {
      field: 'parent_id',
      headerName: 'Parent menu',
      flex: 1,
      renderCell: (params) => {
        const parentMenu = menus.find((menu) => menu.id === params.row.parent_id);
        return parentMenu ? parentMenu.menu_name : '-';
      }
    },
    { field: 'route', headerName: 'Route', flex: 1 },
    {
      field: 'icon',
      headerName: 'Icon',
      flex: 1,
      renderCell: (params) => (params.row.icon ? <NavIcon items={{ icon: params.row.icon, title: params.row.menu_name }} /> : '-')
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

  const handleEdit = (menus) => {
    navigate('/admin/menus/edit', { state: { menus } });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this device?')) {
      try {
        await menusRequest.deleteMenus(id);
        toast.success('ลบข้อมูลสำเร็จ!');
        getMenus(); // รีเฟรชข้อมูลหลังจากลบสำเร็จ
      } catch (error) {
        toast.error('เกิดข้อผิดพลาด!:' + error);
        console.error('Error deleting device:', error);
      }
    }
  };
  return (
    <div className="">
      <Card>
        <Card.Header>
          <h5>ข้อมูลรายการเมนู</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" onClick={() => navigate('/admin/menus/add')}>
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

export default MenusList;
