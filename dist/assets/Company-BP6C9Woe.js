import { r as o, u as S, k as N, ar as k, j as e, R as h, C as v, F as B, B as i, m as D, n as R, o as z } from './index-DZpC_pHZ.js';
import { d as E } from './customerRequest-CwUVzGH7.js';
import { C as l } from './Card-ZCMDsCmS.js';
import { S as T } from './Stack-BiqWndJ2.js';
import { B as b } from './Badge-EMxcGjiL.js';
import { B as F } from './ButtonGroup-DLGnQ8T-.js';
import { D as I } from './DataGrid-DlzfhZq7.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const Q = () => {
  const [f, x] = o.useState([]),
    [n, c] = o.useState(() => localStorage.getItem('filterText') || ''),
    [d, u] = o.useState(f),
    m = S();
  o.useEffect(() => {
    const t = localStorage.getItem('authToken');
    t &&
      N(t).then((s) => {
        s.user.user_id && p(s.user.user_id);
      });
  }, []),
    o.useEffect(() => {}, [d]);
  const p = (t) => {
      k(t).then((s) => {
        if (s) {
          const r = s.map((a, C) => ({
            id: a.company_id,
            No: C + 1,
            company_name: a.company_name,
            company_code: a.company_code,
            company_address: a.company_address,
            document_address: a.document_address,
            tax_id: a.tax_id,
            company_email: a.company_email,
            company_phone: a.company_phone,
            special_conditions: a.special_conditions,
            created_at: new Date(a.created_at).toLocaleString(),
            status: a.status
          }));
          x(r), u(r);
        }
      });
    },
    g = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
      { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 1 },
      { field: 'company_email', headerName: 'อีเมล์', flex: 1 },
      { field: 'company_phone', headerName: 'เบอร์โทรศัพท์', flex: 1 },
      { field: 'created_at', headerName: 'วันที่สร้าง', flex: 1 },
      {
        field: 'status',
        headerName: 'สถานะ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        renderCell: (t) =>
          e.jsx(b, {
            pill: !0,
            style: {},
            bg: t.row.status === 'pending' ? 'warning' : 'success',
            children: t.row.status === 'pending' ? 'รออนุมัติ' : 'อนุมัติ'
          })
      },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (t) =>
          e.jsxs(F, {
            children: [
              e.jsx(i, { variant: 'info', size: 'sm', onClick: () => j(t.row), children: e.jsx(R, {}) }),
              e.jsx(i, { variant: 'outline-danger', size: 'sm', onClick: () => w(t.row.id), children: e.jsx(z, {}) })
            ]
          })
      }
    ],
    y = d.filter((t) => Object.values(t).some((s) => s && s.toString().toLowerCase().includes(n.toLowerCase())));
  o.useEffect(() => {
    localStorage.setItem('filterText', n);
  }, [n]);
  const _ = () => {
      c(''), localStorage.removeItem('filterText');
    },
    j = (t) => {
      m('/company/edit', { state: { company: t } });
    },
    w = (t) => {
      if (window.confirm('คุณต้องการลบข้อมูลบริษัทหรือไม่?'))
        try {
          E(t).then(() => {
            p();
          });
        } catch (r) {
          alert('ลบข้อมูลไม่สำเร็จ:', r);
        }
    };
  return e.jsx(h, {
    className: '',
    children: e.jsxs(l, {
      children: [
        e.jsx(l.Header, {
          children: e.jsx(h, {
            children: e.jsxs(v, {
              children: [
                e.jsx(l.Title, { as: 'h5', children: 'รายการข้อมูลบริษัท' }),
                e.jsx('span', { className: 'd-block m-t-5', children: 'บริษัทที่ผู้ใช้งานดูแล' })
              ]
            })
          })
        }),
        e.jsxs(l.Body, {
          children: [
            e.jsxs(T, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(B.Control, { type: 'text', placeholder: 'Search', value: n, onChange: (t) => c(t.target.value) }),
                e.jsx(i, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: _,
                  disabled: !n,
                  children: e.jsx(D, { style: { fontSize: 20 } })
                }),
                e.jsxs(i, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => m('/company/select'),
                  children: [e.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            e.jsx(I, {
              rows: y,
              columns: g,
              pageSize: 5,
              rowsPerPageOptions: [5, 10, 20],
              pagination: !0,
              disableSelectionOnClick: !0,
              hideFooterSelectedRowCount: !0,
              style: { fontSize: 16 }
            })
          ]
        })
      ]
    })
  });
};
export { Q as default };
