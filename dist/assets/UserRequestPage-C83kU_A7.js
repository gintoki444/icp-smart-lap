import { r as a, u as N, k as R, j as e, R as k, C as B, F as D, B as o, m as b, n as z, o as E, y as _ } from './index-DZpC_pHZ.js';
import { f as F, d as T } from './serviceRequest-D-ZD1URS.js';
import { C as n } from './Card-ZCMDsCmS.js';
import { S as I } from './Stack-BiqWndJ2.js';
import { B as L } from './Badge-EMxcGjiL.js';
import { B as A } from './ButtonGroup-DLGnQ8T-.js';
import { D as U } from './DataGrid-DlzfhZq7.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const X = () => {
  const [c, f] = a.useState([]),
    [x, g] = a.useState([]),
    [i, u] = a.useState(() => localStorage.getItem('filterText') || ''),
    [m, p] = a.useState(x),
    l = N();
  a.useEffect(() => {
    const t = localStorage.getItem('authToken');
    t &&
      R(t).then((r) => {
        f(r.user), h(r.user.user_id);
      });
  }, []),
    a.useEffect(() => {}, [m]);
  const h = (t) => {
      F(t).then((r) => {
        if (r) {
          const d = r.map((s, C) => ({
            id: s.request_id,
            No: C + 1,
            request_date: new Date(s.request_date).toLocaleString(),
            request_no: s.request_no || '-',
            user_id: s.user_id,
            user_name: s.user_name,
            customer_id: s.customer_id,
            customer_name: s.customer_name,
            sample_type_name: s.sample_type_name,
            is_registration_analysis: s.is_registration_analysis,
            is_quality_check_analysis: s.is_quality_check_analysis,
            sample_type_id: s.sample_type_id,
            notes: s.notes || '-',
            created_at: new Date(s.created_at).toLocaleString(),
            status: s.status,
            sample_submissions: s.sample_submissions,
            service_request_documents: s.service_request_documents
          }));
          g(d), p(d);
        }
      });
    },
    j = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'customer_name', headerName: 'บริษัท', flex: 1 },
      { field: 'request_no', headerName: 'เลขที่คำขอ', flex: 0.8 },
      { field: 'sample_type_name', headerName: 'ประเภทคำขอ', flex: 0.7 },
      { field: 'request_date', headerName: 'วันที่สร้าง', flex: 1 },
      { field: 'notes', headerName: 'โน้ต', flex: 1.2 },
      {
        field: 'status',
        headerName: 'สถานะ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        renderCell: (t) =>
          e.jsx(L, {
            pill: !0,
            style: {},
            bg: t.row.status === 'pending' ? 'warning' : t.row.status === 'rejected' ? 'danger' : 'success',
            children: t.row.status === 'pending' ? 'กำลังดำเนินการ' : t.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
          })
      },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (t) =>
          e.jsxs(A, {
            children: [
              e.jsx(o, {
                variant: 'primary',
                size: 'sm',
                onClick: () => {
                  l('/request/detial', { state: { id: t.row.id } });
                },
                children: e.jsx('i', { className: 'feather icon-file-text m-0' })
              }),
              e.jsx(o, { variant: 'info', size: 'sm', onClick: () => y(t.row), children: e.jsx(z, {}) }),
              e.jsx(o, { variant: 'outline-danger', size: 'sm', onClick: () => q(t.row.id), children: e.jsx(E, {}) })
            ]
          })
      }
    ],
    w = m.filter((t) => Object.values(t).some((r) => r && r.toString().toLowerCase().includes(i.toLowerCase())));
  a.useEffect(() => {
    localStorage.setItem('filterText', i);
  }, [i]);
  const S = () => {
      u(''), localStorage.removeItem('filterText');
    },
    y = (t) => {
      l('/request/edit/', { state: { id: t.id } });
    },
    q = (t) => {
      if (window.confirm('คุณต้องการลบข้อมูลคำขอรับบริการ หรือไม่?'))
        try {
          T(t).then(() => {
            _.success('ลบข้อมูลคำขอรับบริการสำเร็จ!', { autoClose: 3e3 }), h(c.user_id);
          });
        } catch {
          _.error('ลบข้อมูลคำขอรับบริการไม่สำเร็จ!', { autoClose: 3e3 });
        }
    };
  return e.jsx(e.Fragment, {
    children: e.jsxs(n, {
      children: [
        e.jsx(n.Header, {
          children: e.jsx(k, { children: e.jsx(B, { children: e.jsx(n.Title, { as: 'h5', children: 'รายการคำขอรับบริการ' }) }) })
        }),
        e.jsxs(n.Body, {
          children: [
            e.jsxs(I, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(D.Control, { type: 'text', placeholder: 'Search', value: i, onChange: (t) => u(t.target.value) }),
                e.jsx(o, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: S,
                  disabled: !i,
                  children: e.jsx(b, { style: { fontSize: 20 } })
                }),
                e.jsxs(o, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => l('/request/add', { state: { user: c } }),
                  children: [e.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            e.jsx(U, {
              rows: w,
              columns: j,
              pageSize: 5,
              rowsPerPageOptions: [5, 10, 20],
              pagination: !0,
              disableSelectionOnClick: !0,
              hideFooterSelectedRowCount: !0
            })
          ]
        })
      ]
    })
  });
};
export { X as default };
