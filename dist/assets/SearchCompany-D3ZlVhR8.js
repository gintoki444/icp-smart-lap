import { r as o, u as D, k as R, j as e, F as T, B as i, m as z, ay as B, y as h } from './index-DZpC_pHZ.js';
import { u as F } from './index-kdHliud_.js';
import { g as I } from './customerRequest-CwUVzGH7.js';
import { C as l } from './Card-ZCMDsCmS.js';
import { S as A } from './Stack-BiqWndJ2.js';
import { T as E } from './Table-Bs-13SI2.js';
import { B as L } from './ButtonGroup-DLGnQ8T-.js';
import { D as P } from './DataGrid-DlzfhZq7.js';
import './tslib.es6-CTYbIaVE.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './toPropertyKey-COtC2h-V.js';
import './Transition-DW97tWQD.js';
import './Divider-BV326Lun.js';
const $ = () => {
  const [p, x] = o.useState([]),
    [a, O] = o.useState(null),
    [f, u] = o.useState([]),
    [n, d] = o.useState(() => localStorage.getItem('filterText') || ''),
    [c, j] = o.useState(f),
    g = D();
  o.useEffect(() => {}, [c]),
    o.useEffect(() => {
      const s = localStorage.getItem('authToken');
      s &&
        R(s).then((r) => {
          x(r.user);
        }),
        y();
    }, []);
  const y = () => {
      I().then((s) => {
        if (s) {
          const r = s.map((t, k) => ({
            id: t.company_id,
            No: k + 1,
            company_name: t.company_name,
            company_code: t.company_code,
            company_address: t.company_address,
            document_address: t.document_address,
            tax_id: t.tax_id,
            email: t.email,
            phone: t.phone,
            special_conditions: t.special_conditions,
            created_at: new Date(t.created_at).toLocaleString()
          }));
          u(r), j(r);
        }
      });
    },
    _ = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'company_name', headerName: 'ชื่อบริษัท', flex: 1.2 },
      { field: 'tax_id', headerName: 'เลขที่ผู้เสียภาษี', flex: 1 },
      { field: 'company_address', headerName: 'ที่อยู่บริษัท', flex: 3 },
      {
        field: 'actions',
        headerName: 'การจัดการ',
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        renderCell: (s) => e.jsx(L, { children: e.jsx(i, { variant: 'info', size: 'sm', onClick: () => b(s.row), children: 'เลือก' }) })
      }
    ],
    C = o.useCallback((s) => {
      setFiles((r) => [...r, ...s]);
    }, []),
    { getRootProps: S, getInputProps: v, isDragActive: m } = F({ onDrop: C, accept: 'image/*,application/pdf', maxSize: 5 * 1024 * 1024 }),
    w = c.filter((s) => Object.values(s).some((r) => r && r.toString().toLowerCase().includes(n.toLowerCase())));
  o.useEffect(() => {
    localStorage.setItem('filterText', n);
  }, [n]);
  const N = () => {
      d(''), localStorage.removeItem('filterText');
    },
    b = async (s) => {
      if (window.confirm('คุณต้องการลงทะเบียนข้อมูลบริษัทหรือไม่?'))
        try {
          const t = { user_id: p.user_id, company_id: s.id, approved_by: null, status: 'pending' };
          console.log('data:', t),
            console.log('values:', s),
            B(t).then(() => {
              h.success('ลงทะเบียนข้อมูลบริษัทสำเร็จ!', { autoClose: 3e3 });
            });
        } catch {
          h.error('ลงทะเบียนข้อมูลบริษัทไม่สำเร็จ!', { autoClose: 3e3 });
        }
    };
  return e.jsx(e.Fragment, {
    children: e.jsxs(l, {
      children: [
        e.jsx(l.Header, { children: e.jsx('h5', { children: 'ค้นหาข้อมูลบริษัท' }) }),
        e.jsxs(l.Body, {
          children: [
            e.jsxs(A, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(T.Control, { type: 'text', placeholder: 'Search', value: n, onChange: (s) => d(s.target.value) }),
                e.jsx(i, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: N,
                  disabled: !n,
                  children: e.jsx(z, { style: { fontSize: 20 } })
                }),
                e.jsxs(i, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => g('/company/select'),
                  children: [e.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            e.jsx(P, {
              rows: w,
              columns: _,
              pageSize: 5,
              rowsPerPageOptions: [5, 10, 20],
              pagination: !0,
              disableSelectionOnClick: !0,
              hideFooterSelectedRowCount: !0
            }),
            a &&
              e.jsxs('div', {
                children: [
                  e.jsx('h5', { children: 'ข้อมูลบริษัท' }),
                  e.jsxs(E, {
                    striped: !0,
                    bordered: !0,
                    hover: !0,
                    children: [
                      e.jsx('thead', {
                        children: e.jsxs('tr', {
                          children: [
                            e.jsx('th', { children: 'เลขที่ผู้เสียภาษี' }),
                            e.jsx('th', { children: 'ชื่อบริษัท' }),
                            e.jsx('th', { children: 'ที่อยู่' }),
                            e.jsx('th', { children: 'เบอร์โทร' }),
                            e.jsx('th', { children: 'ที่อยู่จัดส่งเอกสาร' }),
                            e.jsx('th', { children: 'เงื่อนไขพิเศษ' }),
                            e.jsx('th', { children: 'สถานะ' })
                          ]
                        })
                      }),
                      e.jsx('tbody', {
                        children: e.jsxs('tr', {
                          children: [
                            e.jsx('td', { children: a.taxId }),
                            e.jsx('td', { children: a.name }),
                            e.jsx('td', { children: a.address }),
                            e.jsx('td', { children: a.phone }),
                            e.jsx('td', { children: a.tax_address }),
                            e.jsx('td', { children: a.credits }),
                            e.jsx('td', { children: a.status })
                          ]
                        })
                      })
                    ]
                  }),
                  e.jsx('h6', { className: 'mt-sm-4', children: 'อัพโหลดเอกสาร : ' }),
                  e.jsxs('div', {
                    ...S(),
                    style: {
                      border: '2px dashed #04a9f5',
                      borderRadius: '8px',
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: m ? '#e6f7ff' : '#f8f9fa'
                    },
                    children: [
                      e.jsx('input', { ...v() }),
                      m
                        ? e.jsx('p', { style: { marginBottom: 0 }, children: 'Drop your files here...' })
                        : e.jsx('p', { style: { marginBottom: 0 }, children: 'Drag and drop files here, or click to select files' })
                    ]
                  }),
                  e.jsx('ul', {
                    className: 'mt-3',
                    children: files.map((s, r) =>
                      e.jsxs('li', { children: [e.jsx('i', { className: 'feather icon-file', style: { marginRight: 12 } }), s.name] }, r)
                    )
                  }),
                  a.user_id === null
                    ? e.jsx(i, {
                        variant: 'success',
                        className: 'mt-3',
                        disabled: files.length === 0,
                        onClick: handleAddCompany,
                        children: 'ลงทะเบียนบริษัท'
                      })
                    : e.jsx(i, { variant: 'secondary', className: 'mt-3', disabled: !0, children: 'บริษัทนี้ถูกลงทะเบียนแล้ว' })
                ]
              })
          ]
        })
      ]
    })
  });
};
export { $ as default };
