import { useState, useEffect } from 'react';
import { authenUser } from 'services/_api/authentication';
import { getAllMenusRolesByID, buildMenuHierarchy } from 'services/_api/permissionRequest';

const menuItems = () => {
  const [menuItems, setMenuItems] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setLoading(false);
          return;
        }

        const authen = await authenUser(token);
        if (!authen || !authen.role_id) {
          setLoading(false);
          return;
        }

        const menus = await getAllMenusRolesByID(authen.role_id);

        const structuredMenus = buildMenuHierarchy(menus);

        setMenuItems({
          items: structuredMenus.map((group) => ({
            id: `group-${group.menu_id}`,
            title: group.menu_name,
            type: 'group',
            icon: group.icon || 'icon-folder',
            children: group.children.map((menu) => formatMenuItem(menu))
          }))
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching menus:', error);
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return { menuItems, loading };
};

// **ฟังก์ชันสร้างเมนูแบบ Recursive (รองรับ 3 ระดับ)**
const formatMenuItem = (menu) => {
  if (menu.children.length > 0) {
    return {
      id: `menu-${menu.menu_id}`,
      title: menu.menu_name,
      type: 'collapse',
      icon: menu.icon || 'feather icon-folder',
      children: menu.children.map((child) => formatMenuItem(child)) // **เรียกใช้งาน Recursive**
    };
  } else {
    return {
      id: `menu-${menu.menu_id}`,
      title: menu.menu_name,
      type: 'item',
      url: menu.route || '#',
      icon: menu.icon || 'feather icon-file'
    };
  }
};

export default menuItems;

// const menuItems = {
//   items: [
//     {
//       id: 'navigation',
//       type: 'group',
//       icon: 'icon-navigation',
//       children: [
//         {
//           id: 'dashboard',
//           title: 'Dashboard',
//           type: 'item',
//           icon: 'feather icon-home',
//           url: '/admin/dashboard'
//         }
//       ]
//     },
//     {
//       id: 'Admin',
//       title: 'ผู้ดูแลระบบ',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'managemenu',
//           title: 'จัดการเมนู & Roles',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'roles',
//               title: 'จัดการ Roles',
//               type: 'item',
//               url: '/admin/roles-list'
//             },
//             {
//               id: 'menu',
//               title: 'จัดการเมนู',
//               type: 'item',
//               url: '/admin/menus'
//             },
//             {
//               id: 'menu-permission',
//               title: 'จัดการ permission',
//               type: 'item',
//               url: '/admin/permission'
//             }
//           ]
//         },
//         {
//           id: 'user',
//           title: 'ข้อมูลผู้ใช้งาน',
//           type: 'item',
//           icon: 'feather icon-user',
//           url: '/admin/user'
//         },
//         {
//           id: 'company',
//           title: 'ข้อมูลลูกค้า/บริษัท',
//           type: 'item',
//           icon: 'lu icon-building',
//           url: '/admin/company'
//         }
//       ]
//     }
//   ]
// };

// export default menuItems;
