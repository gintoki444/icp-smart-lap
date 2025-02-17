import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import AdminDashDefault from './admin';
import UserDashDefault from './user';

function DashDefault() {
  // const navigate = useNavigate();
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));
  useEffect(() => {
    console.log('userRole:', userRole);
    const role = localStorage.getItem('userRole'); // ตรวจสอบ Token
    if (!role) {
      setUserRole(role); // Redirect ไปหน้า Login
    }
  }, [userRole]);
  return <>{userRole === 'admin' ? <AdminDashDefault /> : <UserDashDefault />}</>;
}

export default DashDefault;
