import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';

import { BASE_URL } from './config/constant';

const isAuthenticated = () => {
  const token = localStorage.getItem('authToken'); // ตรวจสอบ Token ใน Local Storage
  return !!token; // true ถ้ามี Token
};

const getRole = () => {
  const role = localStorage.getItem('userRole'); // ดึง Role ของผู้ใช้งาน (Admin/User)
  return role || null; // คืนค่า Role หรือ null หากไม่มี
};

// Guard สำหรับตรวจสอบการล็อกอินและ Role
const ProtectedRoute = ({ children, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />; // ถ้าไม่ได้ล็อกอิน Redirect ไปหน้า Login
  }

  const userRole = getRole();
  if (role && userRole !== role) {
    return <Navigate to="/login" />; // ถ้า Role ไม่ตรง Redirect ไป Login
  }

  return children; // ถ้าผ่านเงื่อนไขทั้งหมด ให้แสดง Component
};

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/*',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/activate-token',
    element: lazy(() => import('./views/auth/activate/ActivateToken'))
  },
  {
    exact: 'true',
    path: '/auth/activate-success',
    element: lazy(() => import('./views/auth/activate/ActivateSuccess'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword'))
  },
  {
    exact: 'true',
    path: 'user/request/detial/quotation',
    element: lazy(() => import('./views/quotatios/QuotationPage'))
  },
  {
    path: '/admin/*',
    guard: (props) => <ProtectedRoute role="admin" {...props} />, // ตรวจสอบว่า Role ต้องเป็น Admin
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/dashboard',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/request',
        element: lazy(() => import('./views/request/AdminRequestPage'))
      },
      {
        exact: 'true',
        path: 'request/add',
        element: lazy(() => import('./views/request/forms/AddRequest'))
      },
      {
        exact: 'true',
        path: 'request/detial',
        element: lazy(() => import('./views/request/details/RequestDetails'))
      },
      {
        exact: 'true',
        path: 'request/edit',
        element: lazy(() => import('./views/request/forms/EditRequest'))
      },
      {
        exact: 'true',
        path: '/lab-list',
        element: lazy(() => import('./views/labs/LabsList'))
      },
      {
        exact: 'true',
        path: '/lab-test',
        element: lazy(() => import('./views/labs/TestList'))
      },
      {
        exact: 'true',
        path: '/lab-test/cip-wp',
        element: lazy(() => import('./views/labs/TestCIP2OWP2O5'))
      },
      {
        exact: 'true',
        path: '/lab-test/water-soluble-potassium',
        element: lazy(() => import('./views/labs/TestWaterSoluble'))
      },
      {
        exact: 'true',
        path: '/lab-test/test-oes',
        element: lazy(() => import('./views/labs/TestOES'))
      },
      {
        exact: 'true',
        path: '/lab-test/phosphorus',
        element: lazy(() => import('./views/labs/TestPhosphorus'))
      },
      {
        exact: 'true',
        path: 'company',
        element: lazy(() => import('./views/user/company/company'))
      },
      {
        exact: 'true',
        path: 'company/select',
        element: lazy(() => import('./views/user/company/SelectCompany'))
      },
      {
        exact: 'true',
        path: 'company/search',
        element: lazy(() => import('./views/user/company/forms/SearchCompany'))
      },
      {
        exact: 'true',
        path: 'company/add',
        element: lazy(() => import('./views/user/company/forms/AddCompany'))
      },
      {
        exact: 'true',
        path: 'company/edit',
        element: lazy(() => import('./views/user/company/forms/EditCompany'))
      },
      {
        exact: 'true',
        path: '/basic/button',
        element: lazy(() => import('./views/ui-elements/basic/BasicButton'))
      },
      {
        exact: 'true',
        path: '/basic/badges',
        element: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
      },
      {
        exact: 'true',
        path: '/basic/breadcrumb-paging',
        element: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
      },
      {
        exact: 'true',
        path: '/basic/collabse',
        element: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: 'true',
        path: '/basic/tabs-pills',
        element: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: 'true',
        path: '/forms/form-basic',
        element: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: 'true',
        path: '/tables/bootstrap',
        element: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: 'true',
        path: '/charts/nvd3',
        element: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: 'true',
        path: '/maps/google-map',
        element: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  },
  {
    path: '/user/*',
    guard: (props) => <ProtectedRoute role="user" {...props} />, // ตรวจสอบว่า Role ต้องเป็น User
    layout: UserLayout,
    routes: [
      {
        exact: 'true',
        path: '/',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/dashboard',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: 'profile',
        element: lazy(() => import('./views/user/profile/profile'))
      },
      {
        exact: 'true',
        path: 'company',
        element: lazy(() => import('./views/user/company/company'))
      },
      {
        exact: 'true',
        path: 'company/select',
        element: lazy(() => import('./views/user/company/SelectCompany'))
      },
      {
        exact: 'true',
        path: 'company/search',
        element: lazy(() => import('./views/user/company/forms/SearchCompany'))
      },
      {
        exact: 'true',
        path: 'company/add',
        element: lazy(() => import('./views/user/company/forms/AddCompany'))
      },
      {
        exact: 'true',
        path: 'company/edit',
        element: lazy(() => import('./views/user/company/forms/EditCompany'))
      },
      {
        exact: 'true',
        path: '/request',
        element: lazy(() => import('./views/request/UserRequestPage'))
      },
      {
        exact: 'true',
        path: 'request/add',
        element: lazy(() => import('./views/request/forms/AddRequest'))
      },
      {
        exact: 'true',
        path: 'request/detial',
        element: lazy(() => import('./views/request/details/RequestDetails'))
      },
      {
        exact: 'true',
        path: 'request/edit',
        element: lazy(() => import('./views/request/forms/EditRequest'))
      },
      {
        exact: 'true',
        path: 'request/history',
        element: lazy(() => import('./views/request/HistoryRequestPage'))
      },
      {
        exact: 'true',
        path: '/basic/badges',
        element: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
      },
      {
        exact: 'true',
        path: '/basic/breadcrumb-paging',
        element: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
      },
      {
        exact: 'true',
        path: '/basic/collabse',
        element: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: 'true',
        path: '/basic/tabs-pills',
        element: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: 'true',
        path: '/forms/form-basic',
        element: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: 'true',
        path: '/tables/bootstrap',
        element: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: 'true',
        path: '/charts/nvd3',
        element: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: 'true',
        path: '/maps/google-map',
        element: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
