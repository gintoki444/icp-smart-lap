import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const getRole = () => {
  return localStorage.getItem('userRole') || null;
};

const getPosition = () => {
  return localStorage.getItem('userPosition') || null;
};

const getPermissions = () => {
  const permissions = localStorage.getItem('permissions');
  return permissions ? JSON.parse(permissions) : [];
};

const ProtectedRoute = ({ children, role, position, path }) => {
  const location = useLocation();
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userRole: null,
    userPosition: null,
    permissions: [],
    isLoading: true
  });

  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated();
      const userRole = getRole();
      const userPosition = getPosition();
      const permissions = getPermissions();

      setAuthState({
        isAuthenticated: auth,
        userRole,
        userPosition,
        permissions,
        isLoading: false
      });

      if (!auth || !permissions.length) {
        localStorage.clear(); // ล้างข้อมูลถ้าไม่ผ่านการตรวจสอบ
      }
    };

    checkAuth();
  }, []); // เรียกครั้งเดียวตอน mount

  const { isAuthenticated: auth, userRole, userPosition, permissions, isLoading } = authState;

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!auth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  const allowedRoles = Array.isArray(role) ? role : [role];
  const isRoleAllowed = allowedRoles.includes(userRole);

  if (!isRoleAllowed) {
    return <Navigate to="/404" replace />;
  }

  if (role === 'admin' && position && userPosition !== position) {
    return <Navigate to="/404" replace />;
  }

  const hasPermission = permissions.some((perm) => perm.route && (path === perm.route || location.pathname.startsWith(perm.route)));

  if (!hasPermission) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
