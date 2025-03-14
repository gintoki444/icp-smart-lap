import { r as o, u as S, k, au as v, j as e, F as L, B as n, m as z, av as A, aw as B, ax as E, y as f } from './index-DZpC_pHZ.js';
import { C as l } from './Card-ZCMDsCmS.js';
import { S as I } from './Stack-BiqWndJ2.js';
import { B as U } from './Badge-EMxcGjiL.js';
import { B as b } from './ButtonGroup-DLGnQ8T-.js';
import { D as T } from './DataGrid-DlzfhZq7.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const J = () => {
  const [p, h] = o.useState([]),
    [x, _] = o.useState([]),
    [a, c] = o.useState(() => localStorage.getItem('filterText') || ''),
    [m, g] = o.useState(x),
    C = S();
  o.useEffect(() => {
    const s = localStorage.getItem('authToken');
    s &&
      k(s).then((t) => {
        h(t.user);
      }),
      d();
  }, []),
    o.useEffect(() => {}, [m]);
  const d = () => {
      v().then((s) => {
        if (s) {
          const t = s.map((r, i) => ({
            id: r.id,
            No: i + 1,
            user_id: r.user_id,
            username: r.username,
            first_name: r.first_name,
            last_name: r.last_name,
            fullName: `${r.first_name} ${r.last_name}`,
            user_email: r.user_email,
            user_phone: r.user_phone,
            company_id: r.company_id,
            company_name: r.company_name,
            company_address: r.company_address,
            company_email: r.company_email,
            company_phone: r.company_phone,
            createdAt: new Date(r.created_at).toLocaleString(),
            status: r.status
          }));
          _(t), g(t);
        }
      });
    },
    y = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'fullName', headerName: 'ชื่อ-นามสกุลผู้ใช้', flex: 1 },
      { field: 'user_email', headerName: 'E-mail ผู้ใช้', flex: 1 },
      { field: 'user_phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
      { field: 'company_name', headerName: 'บริษัท', flex: 1 },
      { field: 'company_email', headerName: 'E-mail บริษัท', flex: 1 },
      { field: 'company_phone', headerName: 'เบอร์โทรบริษัท', flex: 1 },
      { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 1 },
      { field: 'createdAt', headerName: 'วันที่สร้าง', flex: 1 },
      {
        field: 'status',
        headerName: 'สถานะคำขอ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        renderCell: (s) =>
          e.jsx(U, {
            pill: !0,
            style: {},
            bg: s.row.status === 'pending' ? 'warning' : 'success',
            children: s.row.status === 'pending' ? 'รออนุมัติ' : 'อนุมัติ'
          })
      },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (s) =>
          e.jsxs(b, {
            style: { fontSize: 14 },
            children: [
              e.jsx(n, { variant: 'outline-info', size: 'sm', onClick: () => u(s.row.id, 'Y'), children: e.jsx(A, {}) }),
              e.jsx(n, { variant: 'outline-danger', size: 'sm', onClick: () => u(s.row.id, 'N'), children: e.jsx(B, {}) })
            ]
          })
      }
    ],
    j = m.filter((s) => Object.values(s).some((t) => t && t.toString().toLowerCase().includes(a.toLowerCase())));
  o.useEffect(() => {
    localStorage.setItem('filterText', a);
  }, [a]);
  const w = () => {
      c(''), localStorage.removeItem('filterText');
    },
    u = (s, t) => {
      if (window.confirm('คุณต้องการอนุมัติคำขอใช้บริษัท หรือไม่?')) {
        const i = { approved_by: p.user_id, status: t === 'Y' ? 'approved' : 'rejected' };
        try {
          E(i, s).then(() => {
            f.success('อนุมัติสำเร็จ!', { autoClose: 3e3 }), d();
          });
        } catch (N) {
          f.error(`อนุมัติไม่สำเร็จ: ${N}`, { autoClose: 3e3 });
        }
      }
    };
  return e.jsx('div', {
    className: '',
    children: e.jsxs(l, {
      children: [
        e.jsx(l.Header, { children: e.jsx('h5', { children: 'ข้อมูลรายการตัวอย่าง' }) }),
        e.jsxs(l.Body, {
          className: 'p-10',
          children: [
            e.jsxs(I, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(L.Control, { type: 'text', placeholder: 'Search', value: a, onChange: (s) => c(s.target.value) }),
                e.jsx(n, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: w,
                  disabled: !a,
                  children: e.jsx(z, { style: { fontSize: 20 } })
                }),
                e.jsxs(n, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => C('/admin/add'),
                  children: [e.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            e.jsx(T, {
              rows: j,
              columns: y,
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
export { J as default };
