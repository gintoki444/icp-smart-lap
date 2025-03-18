// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as testItemsRequest from 'services/_api/testItemsRequest';

const TestItems = () => {
  const [testItems, setTestItems] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(testItems);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getTestItems();
  }, []);

  useEffect(() => {}, [rows]);
  const getTestItems = () => {
    testItemsRequest.getAllTestItems().then((result) => {
      if (result) {
        const rows = result.map((TestItems, index) => ({
          id: TestItems.test_item_id,
          No: index + 1,
          test_name: TestItems.test_name,
          test_name_th: TestItems.test_name_th,
          name_for_quotation: TestItems.name_for_quotation,
          test_code: TestItems.test_code,
          test_description: TestItems.test_description,
          unit_price: TestItems.unit_price,
          test_type: TestItems.test_type,
          is_active: TestItems.is_active,
          group_id: TestItems.group_id,
          group_name_th: TestItems.group_name_th,
          group_name_en: TestItems.group_name_en,
          created_at: new Date(TestItems.created_at).toLocaleString()
          //   status: TestItems.status
        }));
        setTestItems(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'test_name', headerName: 'ชื่อ', flex: 0.7 },
    { field: 'test_name_th', headerName: 'ชื่อภาษาไทย', flex: 1.2 },
    { field: 'name_for_quotation', headerName: 'ชื่อสำหรับใบเสนอราคา', flex: 1.2 },
    { field: 'test_code', headerName: 'Code', flex: 0.5, headerAlign: 'center', align: 'center' },
    { field: 'test_description', headerName: 'คำอธิบาย', flex: 1 },
    { field: 'unit_price', headerName: 'ค่าบริการ', flex: 0.5, headerAlign: 'right', align: 'right' },
    { field: 'group_name_th', headerName: 'กลุ่ม', flex: 1 },
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
    navigate('/admin/test-items/edit', { state: { id: id } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบรายการทดสอบหรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        testItemsRequest.deleteTestItems(id).then(() => {
          getTestItems();
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
          <h5>รายการทดสอบ</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/admin/test-items/add')}>
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

export default TestItems;
