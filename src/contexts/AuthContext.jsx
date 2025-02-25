import React, { createContext, useContext, useState, useEffect } from 'react';
import { authenUser } from 'services/_api/authentication';
import { getAllMenusRolesByID } from 'services/_api/permissionRequest';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  const role = localStorage.getItem('role_id');
  const dept_id = localStorage.getItem('dept_id');
  const [permissions, setPermissions] = useState(null);

  const authenToken = async (token) => {
    try {
      const response = await authenUser(token);
      if (response.role_id) {
        const menuData = await getAllMenusRolesByID(response.role_id);
        setPermissions(menuData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      authenToken(authToken);
    }
  }, [authToken, role, dept_id]);

  return <AuthContext.Provider value={{ authToken, role, dept_id, permissions }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
