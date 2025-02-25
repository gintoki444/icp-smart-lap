import { createContext, useContext, useEffect, useState } from 'react';

const PermissionContext = createContext();

export const usePermission = () => useContext(PermissionContext);

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState({});
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchPermissions = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        const response = await fetch('https://apiav2-3mp52qu73a-as.a.run.app/api/menus/role/1');
        const data = await response.json();

        setRole(data[0]?.role_name || 'user');

        const perms = data.reduce((acc, menu) => {
          acc[menu.menu_key] = {
            can_view: menu.can_view,
            can_create: menu.can_create,
            can_edit: menu.can_edit,
            can_delete: menu.can_delete
          };
          return acc;
        }, {});

        setPermissions(perms);
      } catch (error) {
        console.error('Error fetching permissions', error);
      }
    };

    fetchPermissions();
  }, []);

  return <PermissionContext.Provider value={{ role, permissions }}>{children}</PermissionContext.Provider>;
};
