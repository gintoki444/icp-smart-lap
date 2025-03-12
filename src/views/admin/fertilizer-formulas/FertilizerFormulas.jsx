// TestResultsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, ButtonGroup } from 'react-bootstrap';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as fertilizerFormulasRequest from 'services/_api/fertilizerFormulasRequest';

const FertilizerFormulas = () => {
  const [FertilizerFormulas, setFertilizerFormulas] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(FertilizerFormulas);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    getFertilizerFormulas();
  }, []);

  useEffect(() => {}, [rows]);
  const getFertilizerFormulas = () => {
    fertilizerFormulasRequest.getAllFertilizerFormulas().then((result) => {
      if (result) {
        const rows = result.map((fertilizerFormula, index) => ({
          id: fertilizerFormula.formula_id,
          No: index + 1,
          formula_name: fertilizerFormula.formula_name,
          formula_code: fertilizerFormula.formula_code,
          base_fertilizer_id: fertilizerFormula.base_fertilizer_id,
          formula_description: fertilizerFormula.formula_description,
          nutrient_ratio: fertilizerFormula.nutrient_ratio,
          is_rice_fertilizer: fertilizerFormula.is_rice_fertilizer,
          recommended_tests: fertilizerFormula.recommended_tests,
          base_fertilizer_name_th: fertilizerFormula.base_fertilizer_name_th,
          base_fertilizer_name_en: fertilizerFormula.base_fertilizer_name_en,
          fertilizer_main_name_th: fertilizerFormula.fertilizer_main_name_th,
          fertilizer_main_name_en: fertilizerFormula.fertilizer_main_name_en,
          created_at: new Date(fertilizerFormula.created_at).toLocaleString()
        }));
        setFertilizerFormulas(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'formula_name', headerName: 'ชื่อสูตร', flex: 1 },
    { field: 'formula_code', headerName: 'สูตร', flex: 1 },
    { field: 'formula_description', headerName: 'รายละเอียด', flex: 1 },
    { field: 'nutrient_ratio', headerName: 'อัตราส่วนสารอาหาร', flex: 1 },
    { field: 'recommended_tests', headerName: 'การทดสอบที่แนะนำ', flex: 1 },
    {
      field: 'base_fertilizer_name_th',
      headerName: 'ชื่อปุ๋ยพื้นฐาน (TH)',
      flex: 1,
      renderCell: (params) => params.row.base_fertilizer_name_th || '-'
    },
    {
      field: 'base_fertilizer_name_en',
      headerName: 'ชื่อปุ๋ยพื้นฐาน (EN)',
      flex: 1,
      renderCell: (params) => params.row.base_fertilizer_name_en || '-'
    },
    { field: 'fertilizer_main_name_th', headerName: 'ประเภทปุ๋ย', flex: 1 },
    // {
    //   field: 'base_fertilizer_id',
    //   headerName: 'ค่ามาตราฐาน (หน่วย)',
    //   flex: 0.7,
    //   headerAlign: 'right',
    //   align: 'right',
    //   renderCell: (params) => (
    //     <> {params.row.base_fertilizer_id ? params.row.base_fertilizer_id + ' ' + params.row.formula_description : '-'}</>
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
    navigate('/admin/fertilizer-formulas/edit', { state: { id: id } });
    // alert(`คุณกำลังแก้ไขข้อมูล: ${row.fullName}`);
    // คุณสามารถใส่การนำทางไปหน้าแก้ไขหรือแสดง Modal แก้ไขที่นี่
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`คุณต้องการลบข้อมูลสูตรปุ๋ยหรือไม่?`);
    if (confirmDelete) {
      // alert(`ลบข้อมูลสำเร็จ (ID: ${id})`);
      // ที่นี่สามารถเพิ่มฟังก์ชันลบจากฐานข้อมูล
      try {
        fertilizerFormulasRequest.deleteFertilizerFormulas(id).then(() => {
          getFertilizerFormulas();
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
          <h5>ข้อมูลสูตรปุ๋ย</h5>
        </Card.Header>
        <Card.Body className="p-10">
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/admin/fertilizer-formulas/add')}>
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

export default FertilizerFormulas;
