import React, { Suspense, lazy, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
// import UserLayout from './layouts/UserLayout';
// import AdminLayout from 'layouts';
import ProtectedRoute from './contexts/ProtectedRoute';
import { BASE_URL } from './config/constant';
import Page404 from 'views/pages/page404/Page404';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || (({ children }) => <>{children}</>);
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard path={route.path}>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Suspense>
);

const routes = [
  // Default Route: Redirect ไป /login หากยังไม่ได้ล็อกอิน
  {
    exact: 'true',
    path: '/',
    element: () => {
      const token = localStorage.getItem('token');
      const userRole = localStorage.getItem('role');
      if (!token || !userRole) {
        return <Navigate to="/login" replace />;
      }
      return <Navigate to={userRole === 'user' ? '/dashboard' : '/admin/dashboard'} replace />;
    }
  },

  // Public Routes (ไม่ต้องตรวจสอบ role)
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/Signin'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp'))
  },
  {
    exact: 'true',
    path: '/auth/resend-token',
    element: lazy(() => import('./views/auth/activate/ResendActivateToken'))
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
    path: '/auth/new-password',
    element: lazy(() => import('./views/auth/reset-password/NewPassword'))
  },
  {
    exact: 'true',
    path: '/404',
    element: lazy(() => import('./views/pages/page404/Page404'))
  },

  // Admin Routes (รวม super_admin, system, moderator, admin)
  {
    path: '/admin/*',
    guard: (props) => (
      <ProtectedRoute role={['super_admin', 'system', 'moderator', 'admin']} position={props.position} path="/admin/*" {...props} />
    ),
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/',
        element: lazy(() => import('./views/dashboard/admin/index'))
      },
      {
        exact: 'true',
        path: '/dashboard',
        element: lazy(() => import('./views/dashboard/admin/index'))
      },
      {
        exact: 'true',
        path: '/request',
        element: lazy(() => import('./views/admin/request/AdminRequestPage'))
      },
      {
        exact: 'true',
        path: '/request/add',
        element: lazy(() => import('./views/admin/request/form/AddServiceRequest'))
      },
      {
        exact: 'true',
        path: '/request/add',
        element: lazy(() => import('./views/admin/request/form/EditServiceRequest'))
      },
      {
        exact: 'true',
        path: '/request/detial',
        element: lazy(() => import('./views/request/details/RequestDetails'))
      },
      {
        exact: 'true',
        path: '/request/verify',
        element: lazy(() => import('./views/admin/request/ServiceRequestDetail')),
        guard: (props) => (
          <ProtectedRoute
            role={['super_admin', 'system', 'moderator', 'admin']}
            position="manager"
            path="/admin/request/verify"
            {...props}
          />
        )
      },
      {
        path: 'request/verify/:id',
        element: lazy(() => import('./views/admin/request/ServiceRequestDetail')),
        guard: (props) => (
          <ProtectedRoute
            role={['super_admin', 'system', 'moderator', 'admin']}
            position="manager"
            path="/admin/request/verify/:id"
            {...props}
          />
        )
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
        path: '/lab-test/connect',
        element: lazy(() => import('./views/labs/TestConnect'))
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
        path: '/roles-list',
        element: lazy(() => import('./views/roles/Roles')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/roles-list" {...props} />
      },
      {
        exact: 'true',
        path: '/roles-list/add',
        element: lazy(() => import('./views/roles/AddRoles')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/roles-list/add" {...props} />
      },
      {
        exact: 'true',
        path: '/roles-list/edit',
        element: lazy(() => import('./views/roles/EditRoles')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/roles-list/edit" {...props} />
      },
      {
        exact: 'true',
        path: '/menus',
        element: lazy(() => import('./views/menus/Menus')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/menus" {...props} />
      },
      {
        exact: 'true',
        path: '/menus/add',
        element: lazy(() => import('./views/menus/AddMenu')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/menus/add" {...props} />
      },
      {
        exact: 'true',
        path: '/menus/edit',
        element: lazy(() => import('./views/menus/EditMenu')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/menus/edit" {...props} />
      },
      {
        exact: 'true',
        path: '/permission',
        element: lazy(() => import('./views/permissions/PermissionManagement')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin', 'system']} path="/admin/permission" {...props} />
      },
      {
        exact: 'true',
        path: '/user',
        element: lazy(() => import('./views/user/UserList'))
      },
      {
        exact: 'true',
        path: '/user/add',
        element: lazy(() => import('./views/user/AddUser'))
      },
      {
        exact: 'true',
        path: '/user/edit',
        element: lazy(() => import('./views/user/EditUser'))
      },
      {
        exact: 'true',
        path: '/test/send-mail-pdf',
        element: lazy(() => import('./views/pages/tests/TestSendBMailFile'))
      },
      {
        exact: 'true',
        path: '/customer',
        element: lazy(() => import('./views/customers/Customer'))
      },
      {
        exact: 'true',
        path: '/customer/add',
        element: lazy(() => import('./views/customers/AddCustomer'))
      },
      {
        exact: 'true',
        path: '/customer/edit',
        element: lazy(() => import('./views/customers/EditCustomer'))
      },
      {
        exact: 'true',
        path: '/user-link-approve',
        element: lazy(() => import('./views/user/UserLinkCostomer')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin', 'system']} position="supervisor" path="/admin/user-link-approve" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/sample-receiving',
        element: lazy(() => import('./views/admin/sample-receiving/SampleReceiving'))
      },
      {
        exact: 'true',
        path: '/sample-receiving/add',
        element: lazy(() => import('./views/admin/sample-receiving/AddTestItem'))
      },
      {
        exact: 'true',
        path: '/test-group',
        element: lazy(() => import('./views/admin/test-group/TestGroups')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-group" {...props} />
      },
      {
        exact: 'true',
        path: '/test-group/add',
        element: lazy(() => import('./views/admin/test-group/AddTestGroup')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-group/add" {...props} />
      },
      {
        exact: 'true',
        path: '/test-group/edit',
        element: lazy(() => import('./views/admin/test-group/EditTestGroup')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-group/edit" {...props} />
      },
      {
        exact: 'true',
        path: '/fertilizer-main',
        element: lazy(() => import('./views/admin/fertilizer-main/FertilizerMains')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-main" {...props} />
      },
      {
        exact: 'true',
        path: '/fertilizer-main/add',
        element: lazy(() => import('./views/admin/fertilizer-main/AddFertilizerMain')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-main/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-main/edit',
        element: lazy(() => import('./views/admin/fertilizer-main/EditeFertilizerMain')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-main/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/test-items',
        element: lazy(() => import('./views/admin/test-items/TestItems')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-items" {...props} />
      },
      {
        exact: 'true',
        path: '/test-items/add',
        element: lazy(() => import('./views/admin/test-items/AddTestItem')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-items/add" {...props} />
      },
      {
        exact: 'true',
        path: '/test-items/edit',
        element: lazy(() => import('./views/admin/test-items/EditTestItem')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-items/edit" {...props} />
      },
      {
        exact: 'true',
        path: '/fertilizer-certificate',
        element: lazy(() => import('./views/admin/fertilizer-certificate/FertilizerCertificate')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-items" {...props} />
      },
      {
        exact: 'true',
        path: '/fertilizer-certificate/add',
        element: lazy(() => import('./views/admin/fertilizer-certificate/AddFertilizerCertificate')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-certificate/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-certificate/edit',
        element: lazy(() => import('./views/admin/fertilizer-certificate/EditFertilizerCertificate')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-certificate/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-formulas',
        element: lazy(() => import('./views/admin/fertilizer-formulas/FertilizerFormulas')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-formulas" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-formulas/add',
        element: lazy(() => import('./views/admin/fertilizer-formulas/AddFertilizerFormulas')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-formulas/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-formulas/edit',
        element: lazy(() => import('./views/admin/fertilizer-formulas/EditFertilizerFormulas')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-formulas/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/base-fertilizers',
        element: lazy(() => import('./views/admin/base-fertilizers/BaseFertilizers')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/base-fertilizers" {...props} />
      },
      {
        exact: 'true',
        path: '/base-fertilizers/add',
        element: lazy(() => import('./views/admin/base-fertilizers/AddBaseFertilizers')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/base-fertilizers/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/base-fertilizers/edit',
        element: lazy(() => import('./views/admin/base-fertilizers/EditBaseFertilizers')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/base-fertilizers/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-types',
        element: lazy(() => import('./views/admin/fertilizer-types/FertilizerTypes')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-types" {...props} />
      },
      {
        exact: 'true',
        path: '/fertilizer-types/add',
        element: lazy(() => import('./views/admin/fertilizer-types/AddFertilizerTypes')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-types/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/fertilizer-types/edit',
        element: lazy(() => import('./views/admin/fertilizer-types/EditFertilizerTypes')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/fertilizer-types/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/packaging-types',
        element: lazy(() => import('./views/admin/packaging-types/PackagingTypes')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/packaging-types" {...props} />
      },
      {
        exact: 'true',
        path: '/packaging-types/add',
        element: lazy(() => import('./views/admin/packaging-types/AddPackagingTypes')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/packaging-types/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/packaging-types/edit',
        element: lazy(() => import('./views/admin/packaging-types/EditPackagingTypes')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/packaging-types/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/test-results',
        element: lazy(() => import('./views/admin/test-results/TestResults')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-results" {...props} />
      },
      {
        exact: 'true',
        path: '/test-results/add',
        element: lazy(() => import('./views/admin/test-results/AddTestResults')),
        guard: (props) => <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-results/add" {...props} />
      },
      {
        exact: 'true',
        path: '/test-results/edit',
        element: lazy(() => import('./views/admin/test-results/EditTestResults')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin']} position="supervisor" path="/admin/test-results/edit" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/issue-quotation',
        element: lazy(() => import('./views/admin/quotations/IssueQuotation')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin', 'moderator']} position="supervisor" path="/admin/test-results" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/issue-quotation/detail',
        element: lazy(() => import('./views/admin/quotations/QuotationDetail')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin', 'moderator']} position="supervisor" path="/admin/test-results" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/issue-quotation/create',
        element: lazy(() => import('./views/admin/quotations/MultiCreateQuotation')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin', 'moderator']} position="supervisor" path="/admin/test-results/add" {...props} />
        )
      },
      {
        exact: 'true',
        path: '/issue-quotation/edit',
        element: lazy(() => import('./views/admin/quotations/EditQuotation')),
        guard: (props) => (
          <ProtectedRoute role={['admin', 'super_admin', 'moderator']} position="supervisor" path="/admin/test-results/edit" {...props} />
        )
      },
      {
        path: '*',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  },

  // User Routes (ย้ายจาก /user/* ไปที่ /)
  {
    path: '/*',
    layout: AdminLayout,
    guard: (props) => <ProtectedRoute role="user" path="/*" {...props} />,
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
        path: '/profile',
        element: lazy(() => import('./views/user/profile/profile'))
      },
      {
        exact: 'true',
        path: '/profile/edit',
        element: lazy(() => import('./views/user/profile/EditProfile'))
      },
      {
        exact: 'true',
        path: '/company',
        element: lazy(() => import('./views/user/company/company'))
      },
      {
        exact: 'true',
        path: '/company/select',
        element: lazy(() => import('./views/user/company/SelectCompany'))
      },
      {
        exact: 'true',
        path: '/company/search',
        element: lazy(() => import('./views/user/company/forms/SearchCompany'))
      },
      {
        exact: 'true',
        path: '/company/add',
        element: lazy(() => import('./views/user/company/forms/AddCompany'))
      },
      {
        exact: 'true',
        path: '/company/edit',
        element: lazy(() => import('./views/user/company/forms/EditCompany'))
      },
      {
        exact: 'true',
        path: '/request',
        element: lazy(() => import('./views/request/UserRequestPage'))
      },
      {
        exact: 'true',
        path: '/request/add',
        element: lazy(() => import('./views/request/forms/AddServiceRequest'))
      },
      {
        exact: 'true',
        path: '/request/edit',
        element: lazy(() => import('./views/request/forms/EditSampleRequestForm'))
      },
      {
        exact: 'true',
        path: '/request/detial',
        element: lazy(() => import('./views/request/details/RequestDetails'))
      },
      {
        exact: 'true',
        path: '/request-history',
        element: lazy(() => import('./views/request/HistoryRequestPage'))
      },
      {
        path: '*',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
