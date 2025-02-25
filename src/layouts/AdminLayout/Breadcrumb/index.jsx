import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// import useMenuItems from '../../../hooks/useMenuItems'; // ✅ ใช้ Hook โหลดเมนูจาก API
import useMenuItems from '../../../hooks/useMenuItems';
import { BASE_TITLE } from '../../../config/constant';

const Breadcrumb = () => {
  const location = useLocation();
  const { menuItems, loading } = useMenuItems(); // ✅ โหลดเมนูจาก API

  const [main, setMain] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!menuItems || menuItems.items.length === 0) return;

    menuItems.items.forEach((group) => {
      if (group.type === 'group') {
        findActiveMenu(group);
      }
    });
  }, [menuItems, location.pathname]); // ✅ ใช้ dependency เพื่อลดการ re-render ที่ไม่จำเป็น

  const findActiveMenu = (group) => {
    if (!group.children) return;

    group.children.forEach((menu) => {
      if (menu.type === 'collapse') {
        findActiveMenu(menu);
      } else if (menu.type === 'item' && menu.url === location.pathname) {
        setMain(group);
        setItem(menu);
      }
    });
  };

  useEffect(() => {
    if (item) {
      document.title = `${item.title} ${BASE_TITLE}`;
    }
  }, [item]); // ✅ อัปเดต title เฉพาะเมื่อ `item` เปลี่ยนแปลง

  if (loading) return <p className="text-center mt-3">Loading Breadcrumb...</p>; // ✅ แสดงข้อความโหลด

  return (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="page-header-title">
              <h5 className="m-b-10">{item ? item.title : 'Dashboard'}</h5>
            </div>
            <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
              <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                <Link to="/">
                  <i className="feather icon-home" />
                </Link>
              </ListGroup.Item>
              {main && (
                <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                  <Link to="#">{main.title}</Link>
                </ListGroup.Item>
              )}
              {item && (
                <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                  <Link to="#">{item.title}</Link>
                </ListGroup.Item>
              )}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
