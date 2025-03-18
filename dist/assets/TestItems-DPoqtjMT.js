import { r as a, u as N, j as e, B as n, i as C, F as S, k as v } from './index-Bq0BSIrC.js';
import { g as y, d as k } from './testItemsRequest-CIY3wZGW.js';
import { C as s } from './Card-C7kDYjR9.js';
import { S as D } from './Stack-fH19WBfQ.js';
import { F as E } from './Form-C1nYDdO8.js';
import { B as F } from './ButtonGroup-bg4r2ah8.js';
import { D as z } from './DataGrid-CHhOcfGb.js';
import './DefaultPropsProvider-CMzRgkCO.js';
import './emotion-element-f0de968e.browser.esm-xSVEHtue.js';
import './TextField-BqqrABCd.js';
import './toPropertyKey-KGmwFxs9.js';
import './Transition-DABJrq3x.js';
import './setPrototypeOf-DgZC2w_0.js';
import './Divider-31lZdKBP.js';
const U = () => {
  const [f, h] = a.useState([]),
    [o, l] = a.useState(() => localStorage.getItem('filterText') || ''),
    [c, _] = a.useState(f),
    d = N();
  a.useEffect(() => {
    m();
  }, []),
    a.useEffect(() => {}, [c]);
  const m = () => {
      y().then((i) => {
        if (i) {
          const r = i.map((t, w) => ({
            id: t.test_item_id,
            No: w + 1,
            test_name: t.test_name,
            test_name_th: t.test_name_th,
            name_for_quotation: t.name_for_quotation,
            test_code: t.test_code,
            test_description: t.test_description,
            unit_price: t.unit_price,
            test_type: t.test_type,
            is_active: t.is_active,
            group_id: t.group_id,
            group_name_th: t.group_name_th,
            group_name_en: t.group_name_en,
            created_at: new Date(t.created_at).toLocaleString()
          }));
          h(r), _(r);
        }
      });
    },
    p = [
      { field: 'No', headerName: 'No.', width: 90, headerAlign: 'center', align: 'center' },
      { field: 'test_name', headerName: 'ชื่อ', flex: 0.7 },
      { field: 'test_name_th', headerName: 'ชื่อภาษาไทย', flex: 1.2 },
      { field: 'name_for_quotation', headerName: 'ชื่อสำหรับใบเสนอราคา', flex: 1.2 },
      { field: 'test_code', headerName: 'Code', flex: 0.5, headerAlign: 'center', align: 'center' },
      { field: 'test_description', headerName: 'คำอธิบาย', flex: 1 },
      { field: 'unit_price', headerName: 'ค่าบริการ', flex: 0.5, headerAlign: 'right', align: 'right' },
      { field: 'group_name_th', headerName: 'กลุ่ม', flex: 1 },
      {
        field: 'actions',
        headerName: 'Action',
        width: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (i) =>
          e.jsxs(F, {
            children: [
              e.jsx(n, { variant: 'info', size: 'sm', onClick: () => x(i.row.id), children: e.jsx(S, {}) }),
              e.jsx(n, { variant: 'outline-danger', size: 'sm', onClick: () => j(i.row.id), children: e.jsx(v, {}) })
            ]
          })
      }
    ],
    u = c.filter((i) => Object.values(i).some((r) => r && r.toString().toLowerCase().includes(o.toLowerCase())));
  a.useEffect(() => {
    localStorage.setItem('filterText', o);
  }, [o]);
  const g = () => {
      l(''), localStorage.removeItem('filterText');
    },
    x = (i) => {
      d('/admin/test-items/edit', { state: { id: i } });
    },
    j = (i) => {
      if (window.confirm('คุณต้องการลบรายการทดสอบหรือไม่?'))
        try {
          k(i).then(() => {
            m();
          });
        } catch (t) {
          alert('ลบข้อมูลไม่สำเร็จ:', t);
        }
    };
  return e.jsx('div', {
    className: '',
    children: e.jsxs(s, {
      children: [
        e.jsx(s.Header, { children: e.jsx('h5', { children: 'รายการทดสอบ' }) }),
        e.jsxs(s.Body, {
          className: 'p-10',
          children: [
            e.jsxs(D, {
              direction: 'row',
              spacing: 1,
              sx: { mb: 2 },
              children: [
                e.jsx(E.Control, { type: 'text', placeholder: 'Search', value: o, onChange: (i) => l(i.target.value) }),
                e.jsx(n, {
                  variant: 'primary',
                  size: 'sm',
                  color: 'secondary',
                  onClick: g,
                  disabled: !o,
                  children: e.jsx(C, { style: { fontSize: 20 } })
                }),
                e.jsxs(n, {
                  variant: 'success',
                  size: 'sm',
                  onClick: () => d('/admin/test-items/add'),
                  children: [e.jsx('i', { className: 'feather icon-plus-circle' }), 'เพิ่ม']
                })
              ]
            }),
            e.jsx(z, {
              rows: u,
              columns: p,
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
export { U as default };
