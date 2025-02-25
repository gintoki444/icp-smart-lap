import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const getRole = () => {
  return localStorage.getItem('userRole') || null;
};

const getPermissions = () => {
  const permissions = localStorage.getItem('permissions');

  if (!permissions) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  }
  return permissions ? JSON.parse(permissions) : [];
};

const ProtectedRoute = ({ children, role }) => {
  const location = useLocation();
  const [userRole, setUserRole] = useState(null);
  const [permissions, setPermissions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // จำลองการโหลดข้อมูล
    setTimeout(() => {
      setUserRole(getRole());
      setPermissions(getPermissions());
      setIsLoading(false);
    }, 1000); // โหลด 1 วินาที
  }, []);

  // 🔄 แสดง Loading ก่อนตรวจสอบสิทธิ์
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // ❌ ถ้าไม่มี Token → ไป Login
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // ❌ ถ้า Role ไม่ตรง → ไปหน้า 404
  if (role && userRole !== role) {
    return <Navigate to="/404" replace />;
  }

  // ✅ ตรวจสอบ Permission ตาม URL
  const hasPermission = permissions?.some((perm) => perm.route && location.pathname.startsWith(perm.route));

  if (!hasPermission) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
