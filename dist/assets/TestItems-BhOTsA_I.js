import { r, u as j, k as S, j as e, R as y, C as q, F as C, B as d, m as N } from './index-DZpC_pHZ.js';
import { g as R } from './serviceRequest-D-ZD1URS.js';
import { C as i } from './Card-ZCMDsCmS.js';
import { S as k } from './Stack-BiqWndJ2.js';
import { B as T } from './Badge-EMxcGjiL.js';
import { B as b } from './ButtonGroup-DLGnQ8T-.js';
import { D as B } from './DataGrid-DlzfhZq7.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const J = () => {
  const [F, m] = r.useState([]),
    [c, u] = r.useState([]),
    [o, n] = r.useState(() => localStorage.getItem('filterText') || ''),
    [l, _] = r.useState(c),
    f = j();
  r.useEffect(() => {
    const t = localStorage.getItem('authToken');
    t &&
      S(t).then((a) => {
        m(a.user), h(a.user.user_id);
      });
  }, []),
    r.useEffect(() => {}, [l]);
  const h = () => {
      R().then((t) => {
        if (t) {
          const a = t.map((s, w) => ({
            id: s.request_id,
            No: w + 1,
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
          u(a), _(a);
        }
      });
    },
    g = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'customer_name', headerName: 'บริษัท', flex: 1 },
      { field: 'user_name', headerName: 'ผู้ขอรับบริการ', flex: 1 },
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
          e.jsx(T, {
            pill: !0,
            style: {},
            bg: t.row.status === 'pending' ? 'warning' : t.row.status === 'rejected' ? 'danger' : 'success',
            children: t.row.status === 'pending' ? 'รออนุมัติ' : t.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
          })
      },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (t) =>
          e.jsx(b, {
            children: e.jsx(d, {
              variant: 'primary',
              size: 'sm',
              onClick: () => {
                f('/admin/sample-receiving/add', { state: { id: t.row.id } });
              },
              children: e.jsx('i', { className: 'feather icon-file-text m-0' })
            })
          })
      }
    ],
    p = l.filter((t) => Object.values(t).some((a) => a && a.toString().toLowerCase().includes(o.toLowerCase())));
  r.useEffect(() => {
    localStorage.setItem('filterText', o);
  }, [o]);
  const x = () => {
    n(''), localStorage.removeItem('filterText');
  };
  return e.jsx(e.Fragment, {
    children: e.jsxs(i, {
      children: [
        e.jsx(i.Header, {
          children: e.jsx(y, { children: e.jsx(q, { children: e.jsx(i.Title, { as: 'h5', children: 'รายการคำขอรับบริการ' }) }) })
        }),
        e.jsxs(i.Body, {
          children: [
            e.jsxs(k, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(C.Control, { type: 'text', placeholder: 'Search', value: o, onChange: (t) => n(t.target.value) }),
                e.jsx(d, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: x,
                  disabled: !o,
                  children: e.jsx(N, { style: { fontSize: 20 } })
                })
              ]
            }),
            e.jsx(B, {
              rows: p,
              columns: g,
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
