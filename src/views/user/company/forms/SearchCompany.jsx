import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Alert, Modal, Form, ButtonGroup } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as customerRequest from '../../../../services/_api/customerRequest';
import { authenUser } from 'services/_api/authentication';
import { postUserCustomerLinks, getAllUserCustomerLink } from 'services/_api/usersRequest';
import { toast } from 'react-toastify';

const SearchCompany = () => {
  const [user, setUser] = useState([]);
  const [company, setCompany] = useState(null);
  const [customer, setCustomer] = useState([]);
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(customer);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      // ดึงข้อมูลลูกค้าทั้งหมด
      const result = await customerRequest.getAllCustomer();
      if (result) {
        // ดึงข้อมูลการเชื่อมโยงผู้ใช้-บริษัท
        const checkData = await getAllUserCustomerLink();
        console.log('checkData:', checkData);

        // กรองและสร้าง rows เฉพาะบริษัทที่ยังไม่ถูกลงทะเบียน
        const rows = result
          .filter((customer) => {
            // ตรวจสอบว่า company_id นี้ไม่มีใน checkData
            const isNotRegistered = !checkData.some((x) => x.company_id === customer.company_id);
            console.log(`company_id: ${customer.company_id}, isNotRegistered: ${isNotRegistered}`);
            return isNotRegistered;
          })
          .map((customer, index) => ({
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
            created_at: new Date(customer.created_at).toLocaleString()
          }));

        console.log('rows:', rows);
        setCustomer(rows);
        setRows(rows);
      }
    } catch (error) {
      console.error('Error in getCustomers:', error);
      toast.error(`เกิดข้อผิดพลาดในการโหลดข้อมูล: ${error.message}`, { autoClose: 3000 });
    }
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
    { field: 'tax_id', headerName: 'เลขที่ผู้เสียภาษี', flex: 1 },
    { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 3 },
    {
      field: 'actions',
      headerName: 'Action',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
          <Button variant="info" size="sm" onClick={() => handleSave(params.row)}>
            <i className="feather icon-plus-circle" /> เลือก
          </Button>
        </ButtonGroup>
      )
    }
  ];

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()))
  );

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  const handleClearFilter = () => {
    setFilterText('');
    localStorage.removeItem('filterText');
  };

  const handleSave = async (values) => {
    const confirmSave = window.confirm(`คุณต้องการลงทะเบียนข้อมูลลูกค้า/บริษัท "${values.company_name}" หรือไม่?`);
    if (confirmSave) {
      try {
        const checkData = await getAllUserCustomerLink();
        const existingLink = checkData.find((x) => x.company_id === values.id);

        if (!existingLink) {
          const data = {
            user_id: user.user_id,
            company_id: values.id,
            approved_by: null,
            status: 'pending'
          };
          await postUserCustomerLinks(data);
          toast.success('ลงทะเบียนข้อมูลลูกค้า/บริษัทสำเร็จ!', { autoClose: 3000 });
          navigate('/company');
        } else {
          toast.warning('บริษัทนี้ถูกลงทะเบียนแล้ว!', { autoClose: 3000 });
        }
      } catch (error) {
        console.error('Error saving data:', error);
        toast.error(`ลงทะเบียนข้อมูลลูกค้า/บริษัทไม่สำเร็จ: ${error.message}`, { autoClose: 3000 });
      }
    }
  };

  return (
    <>
      <Card>
        <Card.Header>
          <h5>ค้นหาข้อมูลลูกค้า/บริษัท</h5>
        </Card.Header>
        <Card.Body>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/company/select')}>
              <i className="feather icon-plus-circle" /> เพิ่ม
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
    </>
  );
};

export default SearchCompany;
