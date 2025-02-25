import { Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

import { toast } from 'react-toastify';
import { getAllMenus } from 'services/_api/menusRequest';
import { deleteRolesMenus, getAllMenusRolesByID, postRolesMenus } from 'services/_api/permissionRequest';
import { getAllRoles } from 'services/_api/rolesRequest';

const PermissionManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nestedMenus, setNestedMenus] = useState([]);
  const [roleMenus, setRoleMenus] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    fetchRoles();
    fetchMenus();
  }, []);

  // โหลด Role ทั้งหมด
  const fetchRoles = async () => {
    try {
      const data = await getAllRoles();
      setRoles(data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  // โหลดเมนูทั้งหมด และจัดกลุ่มเมนู
  const fetchMenus = async () => {
    try {
      const data = await getAllMenus();
      setNestedMenus(buildMenuHierarchy(data));
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  // โหลดสิทธิ์ของ Role ที่เลือก
  const fetchRoleMenus = async (roleId) => {
    try {
      const data = await getAllMenusRolesByID(roleId);
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

  // ✅ อัปเดตค่า Checkbox (รองรับเมนูหลักด้วย)
  const handlePermissionChange = (menuId, permissionKey) => {
    setRoleMenus((prevRoleMenus) => {
      const menuIndex = prevRoleMenus.findIndex((item) => item.menu_id === menuId);

      if (menuIndex === -1) {
        return [
          ...prevRoleMenus,
          { role_id: selectedRole, menu_id: menuId, can_view: 0, can_create: 0, can_edit: 0, can_delete: 0, [permissionKey]: 1 }
        ];
      }

      const updatedMenus = [...prevRoleMenus];
      updatedMenus[menuIndex] = {
        ...updatedMenus[menuIndex],
        [permissionKey]: updatedMenus[menuIndex][permissionKey] === 1 ? 0 : 1
      };

      console.log('updatedMenus :', updatedMenus);
      return updatedMenus;
    });
  };

  // บันทึก Permission
  const handleSavePermissions = async () => {
    if (!selectedRole) {
      alert('กรุณาเลือก Role ก่อนบันทึก');
      return;
    }
    setIsSubmitting(true);
    for (const permission of roleMenus) {
      const { menu_id, can_view, can_create, can_edit, can_delete } = permission;

      if (can_view === 0 && can_create === 0 && can_edit === 0 && can_delete === 0) {
        try {
          await deleteRolesMenus(selectedRole, menu_id);
        } catch (error) {
          console.error('Error deleting permissions:', error);
        }
      } else {
        try {
          let data = {
            role_id: selectedRole,
            menu_id,
            can_view,
            can_create,
            can_edit,
            can_delete
          };

          await postRolesMenus(data);
        } catch (error) {
          toast.error(`Error saving permissions: ${error}`, { autoClose: 2000 });
        }
      }
    }

    setIsSubmitting(false);
    toast.success('บันทึกสิทธิ์ของ Role สำเร็จ!', { autoClose: 3000 });
  };

  // ✅ ปรับปรุงฟังก์ชันจัดกลุ่มเมนู รองรับ 3 ระดับ
  const buildMenuHierarchy = (menuList) => {
    const menuMap = {};
    menuList.forEach((menu) => (menuMap[menu.menu_id] = { ...menu, children: [] }));

    const structuredMenus = [];

    menuList.forEach((menu) => {
      if (menu.parent_id === null) {
        structuredMenus.push(menuMap[menu.menu_id]);
      } else {
        if (menuMap[menu.parent_id]) {
          menuMap[menu.parent_id].children.push(menuMap[menu.menu_id]);
        }
      }
    });

    return structuredMenus;
  };

  return (
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <h5>จัดการเมนู Permission</h5>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>เลือก Role</Form.Label>
              <Form.Select value={selectedRole} onChange={handleRoleChange}>
                <option value="">-- เลือก Role --</option>
                {roles.map((role) => (
                  <option key={role.role_id} value={role.role_id}>
                    {role.role_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {nestedMenus.map((menu) => {
              const permissions = roleMenus.find((item) => item.menu_id === menu.menu_id) || {};
              return (
                <Card className="mb-3 text-dark" key={`menu-${menu.menu_id}`}>
                  <Card.Header style={{ cursor: 'pointer', fontWeight: 'bold', background: '#d1defa', padding: '12px 25px' }}>
                    {menu.menu_name}
                  </Card.Header>
                  <Card.Body style={{ padding: '15px 25px' }}>
                    <Row>
                      <Col md={12}>
                        <p className="text-dark" style={{ fontSize: 16 }}>
                          สิทธิ์ของเมนู: <b>{menu.menu_name}</b>
                        </p>
                        {['can_view', 'can_create', 'can_edit', 'can_delete'].map((permKey) => (
                          <Form.Check
                            inline
                            key={`${menu.menu_id}-${permKey}`}
                            id={`${menu.menu_id}-${permKey}`}
                            type="checkbox"
                            label={permKey.replace('can_', '').toUpperCase()}
                            checked={permissions[permKey] === 1}
                            onChange={() => handlePermissionChange(menu.menu_id, permKey)}
                          />
                        ))}
                        {menu.children.length > 0 && <Divider className="mt-2" />}
                      </Col>
                    </Row>

                    {/* แสดงเมนูย่อย (Level 2) */}
                    {menu.children.length > 0 &&
                      menu.children.map((subMenu) => (
                        <Row key={`submenu-${subMenu.menu_id}`} className="mt-3 ms-3">
                          <Col md={12}>
                            <p className="text-dark" style={{ fontSize: 16 }}>
                              เมนู : <b>{subMenu.menu_name}</b>
                            </p>
                            {['can_view', 'can_create', 'can_edit', 'can_delete'].map((permKey) => (
                              <Form.Check
                                inline
                                key={`${subMenu.menu_id}-${permKey}`}
                                id={`${subMenu.menu_id}-${permKey}`}
                                type="checkbox"
                                label={permKey.replace('can_', '').toUpperCase()}
                                checked={roleMenus.find((item) => item.menu_id === subMenu.menu_id)?.[permKey] === 1}
                                onChange={() => handlePermissionChange(subMenu.menu_id, permKey)}
                              />
                            ))}
                          </Col>

                          {/* แสดงเมนูย่อย (Level 3) */}
                          {subMenu.children.length > 0 &&
                            subMenu.children.map((childMenu) => (
                              <Col md={12} className="ms-4 mb-2" key={`childmenu-${childMenu.menu_id}`}>
                                <h6>
                                  <b>{childMenu.menu_name}</b>
                                </h6>
                                {['can_view', 'can_create', 'can_edit', 'can_delete'].map((permKey) => (
                                  <Form.Check
                                    inline
                                    key={`${childMenu.menu_id}-${permKey}`}
                                    id={`${childMenu.menu_id}-${permKey}`}
                                    type="checkbox"
                                    label={permKey.replace('can_', '').toUpperCase()}
                                    checked={roleMenus.find((item) => item.menu_id === childMenu.menu_id)?.[permKey] === 1}
                                    onChange={() => handlePermissionChange(childMenu.menu_id, permKey)}
                                  />
                                ))}
                              </Col>
                            ))}
                        </Row>
                      ))}
                  </Card.Body>
                </Card>
              );
            })}

            <Button variant="primary" onClick={handleSavePermissions}>
              บันทึก
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PermissionManagement;
