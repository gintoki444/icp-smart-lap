import React, { useCallback, useState, useEffect } from 'react';
// import { Row, Col, Button, Form, Alert, Card, Table } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
// import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Table, Button, Alert, Modal, Form, ButtonGroup } from 'react-bootstrap';
// TestResultsDashboard.jsx

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import { IoReload } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import * as customerRequest from '../../../../services/_api/customerRequest';
import { authenUser } from 'services/_api/authentication';
import { postUserCustomerLinks } from 'services/_api/usersRequest';
import { toast } from 'react-toastify';

const SearchCompany = () => {
  const [user, setUser] = useState([]);
  const [company, setCompany] = useState(null);

  const [customer, setcustomer] = useState([]);

  // โหลด filter จาก localStorage
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterText') || '');
  const [rows, setRows] = useState(customer);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {}, [rows]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      authenUser(token).then((response) => {
        setUser(response.user);
      });
    }
    getcustomers();
  }, []);
  const getcustomers = () => {
    customerRequest.getAllCustomer().then((result) => {
      if (result) {
        const rows = result.map((customer, index) => ({
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
          //   status: customer.status
        }));
        setcustomer(rows);
        setRows(rows);
      }
    });
  };

  const columns = [
    { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
    // { field: 'company_code', headerName: 'รหัสบริษัท', flex: 0.7 },
    { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
    { field: 'tax_id', headerName: 'เลขที่ผู้เสียภาษี', flex: 1 },
    { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 3 },
    // { field: 'document_address', headerName: 'ที่อยู่จัดส่งเอกสาร', flex: 1 },
    // { field: 'email', headerName: 'อีเมล์', flex: 1 },
    // { field: 'phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
    // { field: 'special_conditions', headerName: 'Roles', flex: 0.7 },
    // { field: 'created_at', headerName: 'วันที่สร้าง', flex: 1 },
    // { field: 'status', headerName: 'สถานะ', width: 120, headerAlign: 'center', align: 'center' },
    {
      field: 'actions',
      headerName: 'การจัดการ',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ButtonGroup>
          <Button variant="info" size="sm" onClick={() => handleSave(params.row)}>
            เลือก
          </Button>
          {/* <Button variant="outline-danger" size="sm" onClick={() => handleDelete(params.row.id)}>
            <RiDeleteBin5Line />
          </Button> */}
        </ButtonGroup>
      )
    }
  ];

  const onDrop = useCallback((acceptedFiles) => {
    // เก็บไฟล์ที่อัปโหลดใน state
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*,application/pdf', // กำหนดประเภทไฟล์ที่ยอมรับ
    maxSize: 5 * 1024 * 1024 // จำกัดขนาดไฟล์ 5MB
  });

  const handleUpload = () => {
    alert(`Uploading ${files.length} file(s)!`);
    // สามารถนำไฟล์ใน `files` ไปส่งต่อ API ได้
  };

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

  // เคลียร์การค้นหา
  const handleSave = async (values) => {
    const confirmDelete = window.confirm(`คุณต้องการลงทะเบียนข้อมูลบริษัทหรือไม่?`);
    if (confirmDelete) {
      try {
        const data = {
          user_id: user.user_id,
          company_id: values.id,
          approved_by: null,
          status: 'pending'
        };

        console.log('data:', data);
        console.log('values:', values);

        // if (user.user_id === 9999) {
        postUserCustomerLinks(data).then(() => {
          toast.success('ลงทะเบียนข้อมูลบริษัทสำเร็จ!', { autoClose: 3000 });
        });
        // }
      } catch (error) {
        toast.error('ลงทะเบียนข้อมูลบริษัทไม่สำเร็จ!', { autoClose: 3000 });
      }
    }
  };

  return (
    <>
      <Card>
        <Card.Header>
          <h5>ค้นหาข้อมูลบริษัท</h5>
        </Card.Header>
        <Card.Body>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Form.Control type="text" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <Button variant="primary" size="sm" color="secondary" onClick={handleClearFilter} disabled={!filterText}>
              <IoReload style={{ fontSize: 20 }} />
            </Button>
            <Button variant="success" size="sm" onClick={() => navigate('/company/select')}>
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
          {company && (
            <div>
              <h5>ข้อมูลบริษัท</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>เลขที่ผู้เสียภาษี</th>
                    <th>ชื่อบริษัท</th>
                    <th>ที่อยู่</th>
                    <th>เบอร์โทร</th>
                    <th>ที่อยู่จัดส่งเอกสาร</th>
                    <th>เงื่อนไขพิเศษ</th>
                    <th>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{company.taxId}</td>
                    <td>{company.name}</td>
                    <td>{company.address}</td>
                    <td>{company.phone}</td>
                    <td>{company.tax_address}</td>
                    <td>{company.credits}</td>
                    <td>{company.status}</td>
                  </tr>
                </tbody>
              </Table>
              <h6 className="mt-sm-4">อัพโหลดเอกสาร : </h6>
              <div
                {...getRootProps()}
                style={{
                  border: '2px dashed #04a9f5',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: isDragActive ? '#e6f7ff' : '#f8f9fa'
                }}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p style={{ marginBottom: 0 }}>Drop your files here...</p>
                ) : (
                  <p style={{ marginBottom: 0 }}>Drag and drop files here, or click to select files</p>
                )}
              </div>
              <ul className="mt-3">
                {files.map((file, index) => (
                  <li key={index}>
                    <i className="feather icon-file" style={{ marginRight: 12 }} />
                    {file.name}
                  </li>
                ))}
              </ul>
              {/* {files.length > 0 && (
                <Button variant="success" onClick={handleUpload} className="mt-3">
                  Upload
                </Button>
              )} */}

              {company.user_id === null ? (
                <Button variant="success" className="mt-3" disabled={files.length === 0} onClick={handleAddCompany}>
                  ลงทะเบียนบริษัท
                </Button>
              ) : (
                <Button variant="secondary" className="mt-3" disabled>
                  บริษัทนี้ถูกลงทะเบียนแล้ว
                </Button>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SearchCompany;
