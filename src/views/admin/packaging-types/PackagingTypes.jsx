// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as packageingTypeRequest from 'services/_api/packageingTypeRequest';

const PackagingTypes = () => {
  const [PackagingTypes, setPackagingTypes] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(PackagingTypes);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getPackagingTypes();
  }, []);

  useEffect(() => {}, [rows]);
  const getPackagingTypes = () => {
    packageingTypeRequest.getAllPackagingType().then((result) => {
      if (result) {
        const rows = result.map((PackagingTypes, index) => ({
          id: PackagingTypes.packaging_type_id,
          No: index + 1,
          packaging_type_name: PackagingTypes.packaging_type_name
        }));
        setPackagingTypes(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'packaging_type_name', headerName: 'ชื่อภาชนะบรรจุ', flex: 1 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
          <Button variant="info" size="sm" onClick={() => handleEdit(params.row.id)}>
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

  const handleEdit = (id) => {
    navigate('/admin/packaging-types/edit', { state: { id: id } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลแม่ปุ๋ยหรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        packageingTypeRequest.deletePackagingType(id).then(() => {
          getPackagingTypes();
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
          <h5>ข้อมูลแม่ปุ๋ย</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/admin/packaging-types/add')}>
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

export default PackagingTypes;
