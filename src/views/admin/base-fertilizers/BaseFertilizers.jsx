// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as baseFertilizersRequest from 'services/_api/baseFertilizersRequest';

const BaseFertilizers = () => {
  const [BaseFertilizers, setBaseFertilizers] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(BaseFertilizers);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getBaseFertilizers();
  }, []);

  useEffect(() => {}, [rows]);
  const getBaseFertilizers = () => {
    baseFertilizersRequest.getAllBaseFertilizers().then((result) => {
      if (result) {
        const rows = result.map((baseFertilizers, index) => ({
          id: baseFertilizers.base_fertilizer_id,
          No: index + 1,
          common_name_th: baseFertilizers.common_name_th,
          common_name_en: baseFertilizers.common_name_en,
          formula_code: baseFertilizers.formula_code,
          description: baseFertilizers.description,
          created_at: new Date(baseFertilizers.created_at).toLocaleString()
        }));
        setBaseFertilizers(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'common_name_th', headerName: 'ชื่อแม่ปุ๋ย (TH)', flex: 1 },
    { field: 'common_name_en', headerName: 'ชื่อแม่ปุ๋ย (EN)', flex: 1 },
    { field: 'description', headerName: 'รายละเอียด', flex: 1.2 },
    { field: 'created_at', headerName: 'วันที่สร้าง', flex: 0.7 },
    // {
    //   field: 'base_fertilizer_id',
    //   headerName: 'ค่ามาตราฐาน (หน่วย)',
    //   flex: 0.7,
    //   headerAlign: 'right',
    //   align: 'right',
    //   renderCell: (params) => (
    //     <> {params.row.base_fertilizer_id ? params.row.base_fertilizer_id + ' ' + params.row.description : '-'}</>
    //   )
    // },
    // { field: 'nutrient_ratio', headerName: 'อ้างอิงทางกฎหมาย', flex: 1 },
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
    navigate('/admin/base-fertilizers/edit', { state: { id: id } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลแม่ปุ๋ยหรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        baseFertilizersRequest.deleteBaseFertilizers(id).then(() => {
          getBaseFertilizers();
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
            <Button variant="success" size="sm" onClick={() => navigate('/admin/base-fertilizers/add')}>
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

export default BaseFertilizers;
