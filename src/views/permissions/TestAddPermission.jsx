import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, Grid, FormControlLabel } from '@mui/material';

import { Row, Col, Card, Button, Form } from 'react-bootstrap';
const API_BASE = 'https://apiav2-3mp52qu73a-as.a.run.app/api';

const PermissionManagement = () => {
  const [roles, setRoles] = useState([]);
  const [menus, setMenus] = useState([]);
  const [roleMenus, setRoleMenus] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    fetchRoles();
    fetchMenus();
  }, []);

  // โหลด Role ทั้งหมด
  const fetchRoles = async () => {
    try {
      const res = await fetch(`${API_BASE}/roles`);
      const data = await res.json();
      setRoles(data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  // โหลดเมนูทั้งหมด
  const fetchMenus = async () => {
    try {
      const res = await fetch(`${API_BASE}/menus`);
      const data = await res.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  // โหลดสิทธิ์ของ Role ที่เลือก
  const fetchRoleMenus = async (roleId) => {
    try {
      const res = await fetch(`${API_BASE}/role-menus?role_id=${roleId}`);
      const data = await res.json();
      setRoleMenus(data);
    } catch (error) {
      console.error('Error fetching role menus:', error);
    }
  };

  // เปลี่ยน Role และโหลดสิทธิ์ใหม่
  const handleRoleChange = (event) => {
    const roleId = event.target.value;
    setSelectedRole(roleId);
    fetchRoleMenus(roleId);
  };

  // อัปเดตค่า Checkbox
  const handlePermissionChange = (menuId, permissionKey) => {
    setRoleMenus((prevRoleMenus) =>
      prevRoleMenus.map((item) => (item.menu_id === menuId ? { ...item, [permissionKey]: item[permissionKey] ? 0 : 1 } : item))
    );
  };

  // บันทึก Permission
  const handleSave = async () => {
    try {
      const res = await fetch(`${API_BASE}/role-menus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role_id: selectedRole, permissions: roleMenus })
      });

      if (res.ok) {
        alert('บันทึกข้อมูลสำเร็จ');
      } else {
        alert('เกิดข้อผิดพลาดในการบันทึก');
      }
    } catch (error) {
      console.error('Error saving permissions:', error);
    }
  };

  return (
    <Row>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h5">จัดการเมนู Permission</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <FormControl fullWidth>
            <InputLabel>เลือก Role</InputLabel>
            <Select value={selectedRole} onChange={handleRoleChange}>
              {roles.map((role) => (
                <MenuItem key={role.role_id} value={role.role_id}>
                  {role.role_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Row container style={{ marginTop: 20 }}>
            <Col item md={12} className="mb-4">
              <h5>
                <strong>รายการเมนู</strong>
              </h5>
            </Col>
            {menus.map((menu) => {
              const permissions = roleMenus.find((item) => item.menu_id === menu.menu_id) || {};

              return (
                <Col item xs={12} sm={6} md={6} className="mb-3" key={menu.menu_id}>
                  <h6>{menu.menu_name}</h6>
                  <FormControlLabel
                    control={
                      <Checkbox checked={permissions.can_view === 1} onChange={() => handlePermissionChange(menu.menu_id, 'can_view')} />
                    }
                    label="View"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={permissions.can_create === 1}
                        onChange={() => handlePermissionChange(menu.menu_id, 'can_create')}
                      />
                    }
                    label="Create"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={permissions.can_edit === 1} onChange={() => handlePermissionChange(menu.menu_id, 'can_edit')} />
                    }
                    label="Edit"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={permissions.can_delete === 1}
                        onChange={() => handlePermissionChange(menu.menu_id, 'can_delete')}
                      />
                    }
                    label="Delete"
                  />
                </Col>
              );
            })}
          </Row>

          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 20 }}>
            บันทึก
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default PermissionManagement;
