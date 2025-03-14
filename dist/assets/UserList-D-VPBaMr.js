import {
  r as a,
  u as A,
  k as y,
  E,
  j as t,
  F as B,
  B as o,
  m as D,
  H as z,
  J as F,
  n as R,
  o as U,
  K as I,
  y as f,
  M as T
} from './index-DZpC_pHZ.js';
import { C as d } from './Card-ZCMDsCmS.js';
import { S as b } from './Stack-BiqWndJ2.js';
import { B as L } from './Badge-EMxcGjiL.js';
import { B as O } from './ButtonGroup-DLGnQ8T-.js';
import { D as $ } from './DataGrid-DlzfhZq7.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const V = () => {
  const [u, p] = a.useState([]),
    [g, x] = a.useState([]),
    [i, c] = a.useState(() => localStorage.getItem('filterText') || ''),
    [m, w] = a.useState(g),
    h = A();
  a.useEffect(() => {
    const e = localStorage.getItem('authToken');
    e &&
      y(e).then((r) => {
        p(r.user);
      }),
      n();
  }, []),
    a.useEffect(() => {}, [m]);
  const n = () => {
      E().then((e) => {
        if (e) {
          const r = e.map((s, l) => ({
            id: s.user_id,
            No: l + 1,
            first_name: s.first_name,
            last_name: s.last_name,
            fullName: `${s.first_name} ${s.last_name}`,
            email: s.email,
            phone: s.phone,
            role_id: s.role_id,
            role_name: s.role_name,
            dept_id: s.dept_id,
            dept_name: s.dept_name,
            createdAt: new Date(s.created_at).toLocaleString(),
            status: s.status
          }));
          x(r), w(r);
        }
      });
    },
    j = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'fullName', headerName: 'ชื่อ-นามสกุล', flex: 1 },
      { field: 'email', headerName: 'E-mail', flex: 1 },
      { field: 'phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
      { field: 'role_name', headerName: 'Roles', width: 120, headerAlign: 'center', align: 'center' },
      { field: 'createdAt', headerName: 'วันที่สร้าง', flex: 1 },
      {
        field: 'status',
        headerName: 'สถานะ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        renderCell: (e) =>
          t.jsx(L, {
            pill: !0,
            style: {},
            bg: e.row.status === 'pending' ? 'warning' : e.row.status === 'rejected' ? 'danger' : 'success',
            children: e.row.status === 'pending' ? 'รออนุมัติ' : e.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
          })
      },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (e) =>
          t.jsxs(O, {
            children: [
              t.jsx(o, {
                variant: e.row.status === 'pending' || e.row.status === 'rejected' ? 'outline-success' : 'outline-warning',
                size: 'sm',
                onClick: () => v(e.row.id, e.row.status === 'pending' || e.row.status === 'rejected' ? 'Y' : 'N'),
                children: e.row.status === 'pending' || e.row.status === 'rejected' ? t.jsx(z, {}) : t.jsx(F, {})
              }),
              t.jsx(o, { variant: 'info', size: 'sm', onClick: () => N(e.row), children: t.jsx(R, {}) }),
              t.jsx(o, { variant: 'outline-danger', size: 'sm', onClick: () => S(e.row.id), children: t.jsx(U, {}) })
            ]
          })
      }
    ],
    _ = m.filter((e) => Object.values(e).some((r) => r && r.toString().toLowerCase().includes(i.toLowerCase())));
  a.useEffect(() => {
    localStorage.setItem('filterText', i);
  }, [i]);
  const C = () => {
      c(''), localStorage.removeItem('filterText');
    },
    N = (e) => {
      h('/admin/edit', { state: { users: e } });
    },
    v = (e, r) => {
      if (window.confirm('คุณต้องการอนุมัติผู้ใช้ หรือไม่?')) {
        const l = { approver_id: u.user_id, is_approved_user: r === 'Y' };
        try {
          I(l, e).then(() => {
            f.success('อนุมัติสำเร็จ!', { autoClose: 3e3 }), n();
          });
        } catch (k) {
          f.error(`อนุมัติไม่สำเร็จ: ${k}`, { autoClose: 3e3 });
        }
      }
    },
    S = (e) => {
      if (window.confirm(`คุณต้องการลบข้อมูลผู้ใช้หมายเลข ${e} หรือไม่?`))
        try {
          T(e).then(() => {
            n();
          });
        } catch (s) {
          alert('ลบข้อมูลไม่สำเร็จ:', s);
        }
    };
  return t.jsx('div', {
    className: '',
    children: t.jsxs(d, {
      children: [
        t.jsx(d.Header, { children: t.jsx('h5', { children: 'ข้อมูลรายการตัวอย่าง' }) }),
        t.jsxs(d.Body, {
          className: 'p-10',
          children: [
            t.jsxs(b, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                t.jsx(B.Control, { type: 'text', placeholder: 'Search', value: i, onChange: (e) => c(e.target.value) }),
                t.jsx(o, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: C,
                  disabled: !i,
                  children: t.jsx(D, { style: { fontSize: 20 } })
                }),
                t.jsxs(o, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => h('/admin/add'),
                  children: [t.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            t.jsx($, {
              rows: _,
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
export { V as default };
