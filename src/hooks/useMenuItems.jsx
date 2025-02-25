import { useState, useEffect } from 'react';
import { authenUser } from 'services/_api/authentication';
import { getAllMenusRolesByID, buildMenuHierarchy } from 'services/_api/permissionRequest';

const useMenuItems = () => {
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
        console.log('authen :', authen);

        if (!authen || !authen.user.role_id) {
          setLoading(false);
          return;
        }

        const menus = await getAllMenusRolesByID(authen.user.role_id);
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

export default useMenuItems;
