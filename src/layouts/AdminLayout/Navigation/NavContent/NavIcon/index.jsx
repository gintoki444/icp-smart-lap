import PropTypes from 'prop-types';
import React from 'react';
// Import ชุดไอคอนที่ใช้งาน
// import { BsBuilding } from 'react-icons/bs';
import { FiHome, FiUserCheck } from 'react-icons/fi';
import { LuBuilding } from 'react-icons/lu';
// สร้าง Mapping ระหว่างชื่อไอคอนกับ React Components
const iconMap = {
  'lu icon-building': LuBuilding,
  'Bs icon-home': FiHome,
  'fi user-check': FiUserCheck
};

const NavIcon = ({ items }) => {
  let navIcons = null;

  if (items.icon) {
    // ดึง Component ไอคอนจาก Mapping
    const IconComponent = iconMap[items.icon];

    if (IconComponent) {
      // ใช้ React Component แทน `i` element
      navIcons = (
        <span className="pcoded-micon">
          <IconComponent size={26} title={items.title} />
        </span>
      );
    } else {
      // กรณีไม่มี Mapping ให้แสดง `i` element ตามเดิม
      navIcons = (
        <span className="pcoded-micon">
          <i className={items.icon} />
        </span>
      );
    }
  }

  return <React.Fragment>{navIcons}</React.Fragment>;
};

NavIcon.propTypes = {
  items: PropTypes.object,
  icon: PropTypes.string
};

export default NavIcon;
