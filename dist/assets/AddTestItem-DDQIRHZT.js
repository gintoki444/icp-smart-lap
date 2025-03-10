import {
  G as je,
  r as u,
  j as e,
  B as A,
  q as ge,
  F as b,
  u as me,
  R as ee,
  C as N,
  o as ye,
  y as ce,
  l as fe,
  t as be,
  k as _e
} from './index-DZpC_pHZ.js';
import { c as we, b as Ne } from './serviceRequest-D-ZD1URS.js';
import { a as Se, b as Te, g as ve } from './testItemsRequest-5XlhAVBO.js';
import { c as de, g as he, a as K, F as ke } from './formik.esm-DH0jrOO4.js';
import './firebaseConfig-pMHECxRz.js';
import { F as xe, I as Ce, d as Fe, a as De } from './FirebaseImage-Cwvr5Es-.js';
import { c as qe } from './sampleSubmissionsRequest-DYxy7UJJ.js';
import { T as re } from './Table-Bs-13SI2.js';
import { B as ae } from './Badge-EMxcGjiL.js';
import { B as Ae } from './ButtonGroup-DLGnQ8T-.js';
import { M as E } from './Modal-DVn7-Fnl.js';
import { P as He, p as ue, D as ze, a as Re, S as ie, V as j, I as Ee, T as n, F as Be } from './react-pdf.browser-uVIzoZdJ.js';
import { C as Z } from './Card-ZCMDsCmS.js';
import { D as Ie } from './DataGrid-DlzfhZq7.js';
import './CloseButton-DgEPtGiG.js';
import './Transition-DW97tWQD.js';
import './tslib.es6-CTYbIaVE.js';
import './toPropertyKey-COtC2h-V.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './Divider-BV326Lun.js';
function Pe(s) {
  return je({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      { tag: 'path', attr: { d: 'm12 5.5 6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.3-.62-.5-1.29-.6-2H6v-9l6-4.5z' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z' },
        child: []
      }
    ]
  })(s);
}
const Qe = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  Le = async (s) => {
    const l = new Headers();
    l.append('Content-Type', 'application/json'), console.log('postSampleStatus', s);
    const m = JSON.stringify(s),
      d = { method: 'POST', headers: l, body: m, redirect: 'follow' };
    try {
      const a = await fetch(Qe + '/sample-status', d);
      if (!a.ok) {
        const w = await a.json();
        throw new Error(w.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save SampleStatus data Error:', a), a);
    }
  },
  Me = ({ submissionId: s, handleTracking: l, trackingData: m, reviewBy: d, serviceId: a }) => {
    const [w, i] = u.useState(!1),
      [o, S] = u.useState(!1),
      [k, G] = u.useState(m),
      [D, T] = u.useState(null);
    console.log('serviceId:', a),
      de({
        carrier_name: K().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: K().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: he().required('กรุณาอัปโหลดหลักฐานการส่ง')
      });
    const H = de({
        carrier_name: K().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: K().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: he().nullable()
      }),
      Q = async (x, { setSubmitting: c, setErrors: C }) => {
        try {
          const q = { status: 'in_processing', received_by: d },
            B = await De(D.tracking_id, q);
          s && (await qe(s)),
            a && (await we(a)),
            await Le({ submission_id: s, status: 'received_in_system', notes: 'รับตัวอย่างเข้าระบบ' }),
            B && (l(!0), S(!1));
        } catch (q) {
          console.error('Error updating tracking data:', q), C({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' }), c(!1);
        }
      },
      W = (x) => {
        const c = k.find((C) => C.id === x);
        T(c), S(!0);
      },
      V = async (x) => {
        try {
          await Fe(x), G((c) => c.filter((C) => C.id !== x)), l(!0);
        } catch (c) {
          console.error('Error deleting tracking data:', c);
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('h6', { className: 'mb-3 mt-3', children: 'ข้อมูลการจัดส่งตัวอย่าง' }),
        e.jsxs(re, {
          striped: !0,
          bordered: !0,
          hover: !0,
          className: 'mt-2',
          children: [
            e.jsx('thead', {
              children: e.jsxs('tr', {
                children: [
                  e.jsx('th', { width: 80, className: 'text-center', children: '#' }),
                  e.jsx('th', { children: 'ผู้ให้บริการจัดส่ง' }),
                  e.jsx('th', { children: 'หมายเลข Tracking' }),
                  e.jsx('th', { className: 'text-center', width: 180, children: 'สถานะ' }),
                  e.jsx('th', { className: 'text-center', children: 'หลักฐานการส่ง' }),
                  e.jsx('th', { className: 'text-center', children: 'Action' })
                ]
              })
            }),
            e.jsx('tbody', {
              children: k.map((x, c) =>
                e.jsxs(
                  'tr',
                  {
                    children: [
                      e.jsx('td', { className: 'text-center', children: c + 1 }),
                      e.jsx('td', { children: x.carrier_name }),
                      e.jsx('td', { children: x.tracking_number }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(ae, {
                          bg:
                            x.status === 'received'
                              ? 'info'
                              : x.status === 'in_processing'
                                ? 'warning'
                                : x.status === 'completed'
                                  ? 'primary'
                                  : 'success',
                          children:
                            x.status === 'received'
                              ? 'ดำเนินการจัดส่ง'
                              : x.status === 'in_processing'
                                ? 'กำลังตรวจสอบ/ทดสอบ'
                                : x.status === 'completed'
                                  ? 'ทดสอบเสร็จสิ้น'
                                  : 'จัดส่งสำเร็จ'
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(xe, {
                          imagePath: x.proof_image,
                          alt: `Proof for ${x.tracking_number}`,
                          style: { maxHeight: '100px' },
                          thumbnail: !0
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsxs(Ae, {
                          children: [
                            !x.received_by &&
                              e.jsx(A, {
                                variant: 'success',
                                size: 'sm',
                                onClick: () => W(x.id),
                                children: e.jsx(Pe, { style: { fontSize: 16 } })
                              }),
                            e.jsx(A, { variant: 'danger', size: 'sm', onClick: () => V(x.id), children: e.jsx(ge, {}) })
                          ]
                        })
                      })
                    ]
                  },
                  x.id
                )
              )
            })
          ]
        }),
        D &&
          e.jsxs(E, {
            show: o,
            onHide: () => S(!1),
            centered: !0,
            children: [
              e.jsx(E.Header, {
                closeButton: !0,
                children: e.jsx(E.Title, { children: e.jsx('h6', { children: 'ยืนยันการรับตัวอย่าง' }) })
              }),
              e.jsx(ke, {
                initialValues: { carrier_name: D.carrier_name, tracking_number: D.tracking_number, proof_image: null, status: D.status },
                validationSchema: H,
                onSubmit: Q,
                children: ({
                  values: x,
                  errors: c,
                  touched: C,
                  handleChange: q,
                  handleBlur: B,
                  handleSubmit: L,
                  setFieldValue: X,
                  isSubmitting: $
                }) =>
                  e.jsxs(b, {
                    onSubmit: L,
                    children: [
                      e.jsxs(E.Body, {
                        children: [
                          c.submit && e.jsx('div', { className: 'text-danger mb-3', children: c.submit }),
                          e.jsxs(b.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(b.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                              e.jsxs(b.Select, {
                                name: 'carrier_name',
                                value: x.carrier_name,
                                onChange: q,
                                onBlur: B,
                                isInvalid: C.carrier_name && !!c.carrier_name,
                                children: [
                                  e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                  e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                  e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                  e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                  e.jsx('option', { value: 'DHL', children: 'DHL' })
                                ]
                              }),
                              e.jsx(b.Control.Feedback, { type: 'invalid', children: c.carrier_name })
                            ]
                          }),
                          e.jsxs(b.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(b.Label, { children: 'หมายเลข Tracking' }),
                              e.jsx(b.Control, {
                                type: 'text',
                                name: 'tracking_number',
                                placeholder: 'กรอกหมายเลข Tracking',
                                value: x.tracking_number,
                                onChange: q,
                                onBlur: B,
                                isInvalid: C.tracking_number && !!c.tracking_number
                              }),
                              e.jsx(b.Control.Feedback, { type: 'invalid', children: c.tracking_number })
                            ]
                          }),
                          e.jsxs(b.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(b.Label, { children: 'หลักฐานการส่ง (ถ้าต้องการเปลี่ยน)' }),
                              e.jsx(b.Control, {
                                type: 'file',
                                accept: 'image/*',
                                onChange: (U) => X('proof_image', U.target.files[0]),
                                isInvalid: C.proof_image && !!c.proof_image
                              }),
                              e.jsx('div', {
                                className: 'mt-3',
                                children: x.proof_image
                                  ? e.jsx(Ce, {
                                      src: URL.createObjectURL(x.proof_image),
                                      alt: 'New Proof',
                                      thumbnail: !0,
                                      style: { maxHeight: '200px' }
                                    })
                                  : e.jsx(xe, {
                                      imagePath: D.proof_image,
                                      alt: 'Current Proof',
                                      style: { maxHeight: '200px' },
                                      thumbnail: !0
                                    })
                              }),
                              e.jsx(b.Control.Feedback, { type: 'invalid', children: c.proof_image })
                            ]
                          })
                        ]
                      }),
                      e.jsxs(E.Footer, {
                        children: [
                          e.jsx(A, { variant: 'success', type: 'submit', disabled: $, children: 'ยืนยัน' }),
                          e.jsx(A, { variant: 'secondary', onClick: () => S(!1), disabled: $, children: 'ยกเลิก' })
                        ]
                      })
                    ]
                  })
              })
            ]
          })
      ]
    });
  },
  J = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  Oe = async (s) => {
    const l = new Headers();
    l.append('Content-Type', 'application/json');
    const m = { method: 'GET', headers: l, redirect: 'follow' };
    return await (await fetch(J + '/quotations/' + s, m)).json();
  },
  Ge = async (s) => {
    const l = new Headers();
    l.append('Content-Type', 'application/json');
    const m = JSON.stringify(s),
      d = { method: 'POST', headers: l, body: m, redirect: 'follow' };
    try {
      const a = await fetch(J + '/quotations', d);
      if (!a.ok) {
        const w = await a.json();
        throw new Error(w.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save Quotations data Error:', a), a);
    }
  },
  We = async (s) => {
    const l = new Headers();
    l.append('Content-Type', 'application/json');
    const m = { method: 'DELETE', headers: l, redirect: 'follow' };
    return await (await fetch(J + '/quotations/' + s, m)).json();
  },
  Ve = async (s) => {
    console.log('data', s);
    const l = new Headers();
    l.append('Content-Type', 'application/json');
    const m = JSON.stringify(s),
      d = { method: 'POST', headers: l, body: m, redirect: 'follow' };
    try {
      const a = await fetch(J + '/quotation-details', d);
      if (!a.ok) {
        const w = await a.json();
        throw new Error(w.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save QuotationDetails data Error:', a), a);
    }
  },
  $e = async () => {
    const s = new Headers();
    s.append('Content-Type', 'application/json');
    const l = { method: 'GET', headers: s, redirect: 'follow' };
    return await (await fetch(J + '/quotation-types', l)).json();
  },
  Ue = ({ name: s = 'quotation_type_id', onSelect: l, value: m, disables: d, showText: a, isInvalid: w = !1, errorMessage: i = '' }) => {
    var D;
    const [o, S] = u.useState([]),
      k = async () => {
        try {
          await $e().then((T) => {
            S(T);
          });
        } catch (T) {
          console.log(T);
        }
      };
    u.useEffect(() => {
      k();
    }, []);
    const G = (T) => {
      const H = T.target.value;
      console.log('selectedValue', H), l(H);
    };
    return e.jsxs(b.Group, {
      className: 'mb-3',
      children: [
        e.jsxs(b.Label, {
          children: [
            'ประเภทใบเสนอราคา',
            a
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx('span', { className: 'text-meta-1', children: ' : ' }),
                    e.jsx('strong', { children: (D = o.find((T) => T.quotation_type_id === m)) == null ? void 0 : D.quotation_type_name })
                  ]
                })
              : e.jsx('span', { className: 'text-meta-1', children: ': ' })
          ]
        }),
        !a &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs(b.Select, {
                value: m || '',
                onChange: G,
                disabled: d,
                style: { padding: '8px 20px', fontSize: 14 },
                isInvalid: w,
                children: [
                  e.jsx('option', { value: '', disabled: !0, className: 'text-body dark:text-bodydark', children: 'เลือกประเภทใบส่งซื้อ' }),
                  o.length > 0 &&
                    o.map((T, H) =>
                      e.jsx(
                        'option',
                        { value: T.quotation_type_id, className: 'text-body dark:text-bodydark', children: T.quotation_type_name },
                        H
                      )
                    )
                ]
              }),
              w && e.jsx(b.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: i || 'กรุณาเลือกประเภทใบส่งซื้อ' })
            ]
          })
      ]
    });
  },
  Je = ({ handleBilling: s, testItems: l = [], serviceData: m, createdBy: d, submissionId: a }) => {
    me();
    const [w, i] = u.useState(!1),
      [o, S] = u.useState([]),
      [k, G] = u.useState(0),
      D = l.map((r) => ({
        id: r.test_item_id,
        name: r.name_for_quotation,
        price: parseFloat(r.unit_price),
        quantity: r.quantity,
        maxQuantity: r.quantity,
        summary: parseFloat(r.unit_price) * r.quantity,
        quotation_type_id: r.quotation_type_id
      })),
      [T, H] = u.useState(D),
      [Q, W] = u.useState('');
    u.useEffect(() => {}, [Q]);
    const V = () => {
        const r = o.reduce((h, I) => h + I.price * I.quantity, 0),
          _ = r * (k / 100),
          g = r - _,
          F = g * 0.07,
          z = g + F;
        return { totalAmount: r, discountAmount: _, netTotal: g, vatAmount: F, grandTotal: z };
      },
      { totalAmount: x, discountAmount: c, netTotal: C, vatAmount: q, grandTotal: B } = V(),
      L = (r) => {
        const _ = o.find((F) => F.id === r.id);
        let g;
        _ ? (g = o.filter((F) => F.id !== r.id)) : (g = [...o, { ...r }]), S(g);
      },
      X = (r, _) => {
        const g = parseInt(_) || 0,
          F = T.map((h) =>
            h.id === r
              ? { ...h, quantity: Math.max(1, Math.min(h.maxQuantity, g)), summary: h.price * Math.max(1, Math.min(h.maxQuantity, g)) }
              : h
          );
        H(F);
        const z = o.map((h) =>
          h.id === r
            ? { ...h, quantity: Math.max(1, Math.min(h.maxQuantity, g)), summary: h.price * Math.max(1, Math.min(h.maxQuantity, g)) }
            : h
        );
        S(z);
      },
      $ = (r, _) => {
        const g = parseFloat(_) || 0,
          F = T.map((h) => (h.id === r ? { ...h, price: g, summary: g * h.quantity } : h));
        H(F);
        const z = o.map((h) => (h.id === r ? { ...h, price: g, summary: g * h.quantity } : h));
        S(z);
      },
      U = (r) => {
        const _ = parseFloat(r) || 0;
        G(Math.max(0, Math.min(100, _)));
      },
      te = async () => {
        if (o.length === 0) {
          alert('กรุณาเลือกอย่างน้อย 1 รายการเพื่อสร้างใบเสนอราคา');
          return;
        }
        const r = new Date();
        r.setDate(r.getDate() + 30);
        const _ = {
          customer_id: m.customer_id,
          request_id: m.request_id,
          valid_until: r.toISOString().split('T')[0],
          total_amount: parseFloat(x.toFixed(2)),
          discount_percentage: parseFloat(k.toFixed(2)),
          discount_amount: parseFloat(c.toFixed(2)),
          net_total: parseFloat(C.toFixed(2)),
          vat_amount: parseFloat(q.toFixed(2)),
          grand_total: parseFloat(B.toFixed(2)),
          payment_terms: '30 วัน',
          status: 'pending',
          created_by: d,
          quotation_type_id: Q,
          approved_by: null
        };
        try {
          const g = await Ge(_);
          if (g && g.quotation_id) {
            const z = {
              quotation_id: g.quotation_id,
              test_items_for_quotation: o.map((h) => {
                const I = h.price * h.quantity,
                  Y = (I * (k / 100)) / o.length,
                  se = I - Y;
                return {
                  test_item_id: h.id,
                  quantity: h.quantity,
                  unit_price: parseFloat(h.price.toFixed(2)),
                  subtotal_price: parseFloat(I.toFixed(2)),
                  discount_amount: parseFloat(Y.toFixed(2)),
                  total_price: parseFloat(se.toFixed(2))
                };
              })
            };
            console.log('Quotation Details Data:', z), await Ve(z), i(!1), s(!0);
          } else throw new Error('Failed to get quotation ID');
        } catch (g) {
          console.error('Error generating quotation:', g), alert('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่');
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(A, { variant: 'success', onClick: () => i(!0), children: 'ออกใบเสนอราคา' }),
        e.jsxs(E, {
          show: w,
          className: 'modal-lg',
          onHide: () => i(!1),
          centered: !0,
          children: [
            e.jsx(E.Header, { closeButton: !0, children: e.jsx(E.Title, { children: e.jsx('h5', { children: 'สร้างใบเสนอราคา' }) }) }),
            e.jsxs(E.Body, {
              style: { overflowX: 'auto' },
              children: [
                e.jsxs(re, {
                  bordered: !0,
                  style: { width: '100%', maxWidth: '100%', tableLayout: 'fixed' },
                  children: [
                    e.jsx('thead', {
                      children: e.jsxs('tr', {
                        children: [
                          e.jsx('th', { width: 80, className: 'text-center', children: 'เลือก' }),
                          e.jsx('th', { children: 'ชื่อตัวอย่าง' }),
                          e.jsx('th', { width: 100, children: 'จำนวน' }),
                          e.jsx('th', { width: 120, children: 'ราคาต่อหน่วย' }),
                          e.jsx('th', { width: 120, className: 'text-end', children: 'รวม' })
                        ]
                      })
                    }),
                    e.jsxs('tbody', {
                      children: [
                        T.map((r) =>
                          e.jsxs(
                            'tr',
                            {
                              children: [
                                e.jsx('td', {
                                  className: 'text-center',
                                  children: e.jsx(b.Check, {
                                    type: 'checkbox',
                                    checked: o.some((_) => _.id === r.id),
                                    onChange: () => L(r)
                                  })
                                }),
                                e.jsx('td', {
                                  style: { whiteSpace: 'normal', wordWrap: 'break-word', maxHeight: '100px', overflowY: 'auto' },
                                  children: r.name
                                }),
                                e.jsx('td', {
                                  children: e.jsx(b.Control, {
                                    type: 'number',
                                    value: r.quantity,
                                    min: 1,
                                    max: r.maxQuantity,
                                    onChange: (_) => X(r.id, _.target.value),
                                    style: { width: '80px' }
                                  })
                                }),
                                e.jsx('td', {
                                  children: e.jsx(b.Control, {
                                    type: 'number',
                                    value: r.price.toFixed(2),
                                    step: '0.01',
                                    onChange: (_) => $(r.id, _.target.value),
                                    style: { width: '100px' }
                                  })
                                }),
                                e.jsx('td', { className: 'text-end', children: r.summary.toFixed(2) })
                              ]
                            },
                            r.id
                          )
                        ),
                        Q === '3' &&
                          e.jsxs('tr', {
                            children: [
                              e.jsx('td', { colSpan: 4, className: 'text-end', children: 'ส่วนลด (%)' }),
                              e.jsx('td', {
                                children: e.jsx(b.Group, {
                                  children: e.jsx(b.Control, {
                                    type: 'number',
                                    value: k,
                                    min: 0,
                                    max: 100,
                                    step: '0.01',
                                    onChange: (r) => U(r.target.value),
                                    style: { width: '100px' }
                                  })
                                })
                              })
                            ]
                          }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsx('p', { className: 'mb-0 text-dark', children: 'รวมทั้งหมด:' })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [x.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsxs('p', { className: 'mb-0 text-dark', children: ['ส่วนลด (', k, '%):'] })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [c.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsx('p', { className: 'mb-0 text-dark', children: 'ราคาสุทธิ :' })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [C.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsx('p', { className: 'mb-2 text-dark', children: 'VAT 7%:' })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-2 text-dark', children: [q.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', { colSpan: 4, className: 'text-end', children: e.jsx('h6', { children: 'ยอดรวมทั้งสิ้น :' }) }),
                            e.jsx('td', { children: e.jsxs('h6', { children: [B.toFixed(2), ' บาท'] }) })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                e.jsx(ee, {
                  className: 'mt-3',
                  children: e.jsx(N, {
                    item: !0,
                    className: 'ps-4 pe-4',
                    children: e.jsx(Ue, { name: 'quotation_type_id', value: Q, onSelect: (r) => W(r) })
                  })
                })
              ]
            }),
            e.jsxs(E.Footer, {
              children: [
                e.jsx(A, { variant: 'success', onClick: te, children: 'สร้างใบเสนอราคา' }),
                e.jsx(A, { variant: 'secondary', onClick: () => i(!1), children: 'ยกเลิก' })
              ]
            })
          ]
        })
      ]
    });
  };
Be.register({
  family: 'THSarabunNew',
  fonts: [{ src: '/assets/fonts/THSarabunNew.ttf' }, { src: '/assets/fonts/THSarabunNew-Bold.ttf', fontWeight: 'bold' }]
});
const oe = ({ quotation: s }) =>
    e.jsx(ze, {
      children: e.jsxs(Re, {
        size: 'A4',
        style: f.page,
        children: [e.jsx(Ze, { quotation: s }), e.jsx(et, { quotation: s }), e.jsx(tt, { quotation: s })]
      })
    }),
  P = (s) => parseFloat(s).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  Xe = async (s) => {
    var w;
    const l = ((w = s.customer_info[0]) == null ? void 0 : w.email) || 'ginjung01@gmail.com',
      m = `ใบเสนอราคา ${s.quotation_no}`,
      d = 'นี่คือใบเสนอราคาที่ท่านร้องขอ',
      a = 'Chanu';
    try {
      const i = await ue(e.jsx(oe, { quotation: s })).toBlob(),
        o = new FormData();
      o.append('toEmail', l),
        o.append('subject', m),
        o.append('message', d),
        o.append('username', a),
        o.append('file', i, `${s.quotation_no}.pdf`);
      const k = await (await fetch('https://apiav2-3mp52qu73a-as.a.run.app/api/send-mail-file', { method: 'POST', body: o })).json();
      console.log(k.message);
    } catch (i) {
      console.error('❌ Failed to send email', i);
    }
  },
  Ye = async (s) => {
    const l = await ue(e.jsx(oe, { quotation: s })).toBlob(),
      m = URL.createObjectURL(l);
    window.open(m);
  },
  Ke = ({ quotationData: s, onChange: l }) => {
    const [m, d] = u.useState([]),
      a = async (i) => {
        try {
          const o = await Oe(i);
          return console.log(`getQuotationsByID(${i}):`, o), o;
        } catch (o) {
          return console.error(`Error fetching quotation ${i}:`, o), null;
        }
      };
    u.useEffect(() => {
      (async () => {
        if (s && s.length > 0) {
          const o = await Promise.all(
            s.map(async (S) => {
              const k = await a(S.quotation_id);
              return { ...S, ...(k || {}) };
            })
          );
          d(o.filter((S) => S !== null));
        } else d([]);
      })();
    }, [s]);
    const w = (i) => {
      if (window.confirm('คุณต้องการลบข้อมูลใบเสนอราคา หรือไม่?'))
        try {
          We(i).then(() => {
            ce.success('ลบข้อมูลใบเสนอราคาสำเร็จ!', { autoClose: 3e3 }), l(!0);
          });
        } catch {
          ce.error('ลบข้อมูลใบเสนอราคาไม่สำเร็จ!', { autoClose: 3e3 });
        }
    };
    return e.jsx(ee, {
      className: 'mb-2 p-2 pt-0 pb-0',
      children: e.jsxs(N, {
        children: [
          e.jsx('h6', { children: 'ข้อมูลใบเสนอราคา' }),
          e.jsxs(re, {
            striped: !0,
            bordered: !0,
            hover: !0,
            className: 'mt-2',
            children: [
              e.jsx('thead', {
                children: e.jsxs('tr', {
                  children: [
                    e.jsx('th', { width: 80, children: '#' }),
                    e.jsx('th', { style: { flex: 1.3 }, children: 'เลขที่ใบเสนอราคา' }),
                    e.jsx('th', { className: 'text-center', style: { flex: 1 }, children: 'ประเภท' }),
                    e.jsx('th', { style: { flex: 1 }, children: 'วันที่สร้าง' }),
                    e.jsx('th', { style: { flex: 1 }, className: 'text-end', children: 'จำนวนเงิน' }),
                    e.jsx('th', { className: 'text-center', style: { flex: 1 }, children: 'สถานะ' }),
                    e.jsx('th', { style: { flex: 1 }, children: 'ผู้อนุมัติ' }),
                    e.jsx('th', { className: 'text-center', style: { flex: 1 }, children: 'Action' })
                  ]
                })
              }),
              e.jsx('tbody', {
                children: m.map((i, o) =>
                  e.jsxs(
                    'tr',
                    {
                      children: [
                        e.jsx('td', { children: o + 1 }),
                        e.jsx('td', { children: i.quotation_no }),
                        e.jsx('td', { className: 'text-center', children: i.quotation_type_name || '-' }),
                        e.jsx('td', { children: new Date(i.quotation_date).toLocaleDateString('th-TH') }),
                        e.jsx('td', { className: 'text-end', children: P(i.grand_total) }),
                        e.jsx('td', { className: 'text-center', children: i.status }),
                        e.jsx('td', { children: i.approved_by || '-' }),
                        e.jsxs('td', {
                          className: 'text-center',
                          style: { flex: 1 },
                          children: [
                            e.jsx(A, { variant: 'info', onClick: () => Ye(i), children: 'Pre-view' }),
                            e.jsx(He, {
                              document: e.jsx(oe, { quotation: i }),
                              fileName: `${i.quotation_no}.pdf`,
                              children: e.jsx(A, { variant: 'info', children: 'ดาวน์โหลด PDF' })
                            }),
                            e.jsx(A, { variant: 'info', onClick: () => Xe(i), children: 'ส่ง PDF ผ่านอีเมล' }),
                            e.jsxs(A, {
                              variant: 'danger',
                              onClick: () => w(i.quotation_id),
                              children: [e.jsx(ye, { style: { marginRight: 6 } }), 'ลบ']
                            })
                          ]
                        })
                      ]
                    },
                    i.id
                  )
                )
              })
            ]
          })
        ]
      })
    });
  },
  Ze = ({ quotation: s }) =>
    e.jsxs(j, {
      children: [
        e.jsxs(j, {
          style: f.headerContainer,
          children: [
            e.jsx(j, { style: { maxWidth: 50 }, children: e.jsx(Ee, { src: fe, style: f.logo }) }),
            e.jsxs(j, {
              children: [
                e.jsx(n, {
                  style: [f.companyInfo, f.boldText, { fontSize: 14 }],
                  children: 'ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด'
                }),
                e.jsx(n, { style: f.companyInfo, children: '307 หมู่ 7 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230' }),
                e.jsx(n, { style: f.companyInfo, children: 'โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091' })
              ]
            }),
            e.jsxs(j, {
              style: f.quotationBox,
              children: [
                e.jsx(n, { style: [f.quotationTitle, f.boldText], children: 'ใบเสนอราคา /' }),
                e.jsx(n, { style: [f.quotationTitle, f.boldText], children: 'QUOTATION' })
              ]
            })
          ]
        }),
        e.jsx(j, { style: f.sectionDivider }),
        s.customer_info &&
          s.customer_info.length > 0 &&
          e.jsxs(j, {
            style: f.infoRow,
            children: [
              e.jsxs(j, {
                children: [
                  e.jsxs(n, {
                    children: [
                      e.jsx(n, { style: f.boldText, children: 'เรียน : ' }),
                      e.jsx(n, { style: f.normalText, children: s.customer_info[0].company_name })
                    ]
                  }),
                  e.jsxs(n, {
                    children: [
                      e.jsx(n, { style: f.boldText, children: 'ที่อยู่ : ' }),
                      e.jsx(n, { style: f.normalText, children: s.customer_info[0].company_address })
                    ]
                  })
                ]
              }),
              e.jsxs(j, {
                children: [
                  e.jsxs(n, {
                    children: [
                      e.jsx(n, { style: f.boldText, children: 'วันที่ : ' }),
                      new Date(s.quotation_date).toLocaleDateString('th-TH')
                    ]
                  }),
                  e.jsxs(n, { children: [e.jsx(n, { style: f.boldText, children: 'เลขที่ใบเสนอราคา : ' }), s.quotation_no] }),
                  (s == null ? void 0 : s.quotation_type_id) &&
                    (s == null ? void 0 : s.quotation_type_id) !== 1 &&
                    e.jsxs(n, {
                      children: [
                        e.jsx(n, { style: f.boldText, children: 'กำหนดวันชำระเงิน : ' }),
                        (s == null ? void 0 : s.quotation_type_id) === 2 ? '7 วันหลังส่งผล' : '30 วันหลังส่งผล'
                      ]
                    })
                ]
              })
            ]
          })
      ]
    }),
  et = ({ quotation: s }) => {
    const m = s.quotation_details
      ? [
          ...s.quotation_details.map((d, a) => [
            (a + 1).toString(),
            d.name_for_quotation,
            P(d.unit_price),
            d.quantity.toString(),
            P(d.subtotal_price)
          ]),
          ...Array.from({ length: 15 - s.quotation_details.length }, () => ['', '', '', '', ''])
        ].slice(0, 15)
      : Array(15).fill(['', '', '', '', '']);
    return e.jsxs(j, {
      children: [
        e.jsx(n, {
          style: { fontSize: 14, marginTop: 0 },
          children:
            'ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:'
        }),
        e.jsxs(j, {
          style: [p.table, { marginTop: 0 }],
          children: [
            e.jsxs(j, {
              style: [p.tableRow, p.tableHeader],
              children: [
                e.jsx(n, { style: [p.tableCell, { flex: 0.6, borderRight: 2, paddingTop: 10 }], children: 'ลำดับที่' }),
                e.jsx(n, { style: [p.tableCell, { flex: 4, borderRight: 2 }], children: 'รายการทดสอบ' }),
                e.jsx(n, { style: [p.tableCell, { flex: 1, borderRight: 2 }], children: 'ราคาต่ออย่าง (บาท)' }),
                e.jsx(n, { style: [p.tableCell, { flex: 0.9, borderRight: 2 }], children: 'จำนวนตัวอย่าง' }),
                e.jsx(n, { style: [p.tableCell, { flex: 1 }], children: 'ราคารวม (บาท)' })
              ]
            }),
            m.map((d, a) =>
              e.jsx(
                j,
                {
                  style: [p.tableRow],
                  children: d.map((w, i) => {
                    var o;
                    return e.jsx(
                      n,
                      {
                        style: [
                          p.tableCell,
                          { flex: (o = st[i]) == null ? void 0 : o.width, borderRight: i !== 4 ? 2 : 0, borderBottom: a !== 14 ? 1 : 0 },
                          i === 1 ? { textAlign: 'left' } : i === 2 || i === 4 ? p.textRight : {}
                        ],
                        children: w
                      },
                      i
                    );
                  })
                },
                a
              )
            ),
            e.jsxs(j, {
              style: [p.tableRow, { borderTop: 2 }],
              children: [
                e.jsx(n, { style: [p.tableCell, { flex: 7, textAlign: 'left' }], children: 'ค่าบริการวิเคราะห์ทดสอบ' }),
                e.jsxs(n, { style: [p.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [P(s.total_amount), ' บาท'] })
              ]
            }),
            s.discount_percentage !== '0.00' &&
              e.jsxs(j, {
                style: [p.tableRow, { borderTop: 1 }],
                children: [
                  e.jsxs(n, {
                    style: [p.tableCell, { flex: 7, textAlign: 'left' }],
                    children: [
                      'ส่วนลด',
                      e.jsxs(n, {
                        style: { padding: 20, borderBottom: 2, fontSize: 14, fontWeight: 'bold' },
                        children: [' ', s.discount_percentage, ' ']
                      }),
                      '%'
                    ]
                  }),
                  e.jsxs(n, {
                    style: [p.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }],
                    children: [P(s.discount_amount), ' บาท']
                  })
                ]
              }),
            e.jsxs(j, {
              style: [p.tableRow, { borderTop: 1 }],
              children: [
                e.jsx(n, { style: [p.tableCell, { flex: 7, textAlign: 'left' }], children: 'ภาษีมูลค่าเพิ่ม (Vat) 7%' }),
                e.jsxs(n, { style: [p.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [P(s.vat_amount), ' บาท'] })
              ]
            }),
            e.jsxs(j, {
              style: [p.tableRow, { borderTop: 1 }],
              children: [
                e.jsx(n, { style: [p.tableCell, { flex: 7, textAlign: 'left' }], children: 'จำนวนเงินรวมทั้งสิ้น' }),
                e.jsxs(n, { style: [p.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [P(s.net_total), 'บาท'] })
              ]
            }),
            e.jsxs(j, {
              style: [p.tableRow, { borderTop: 1, backgroundColor: '#ababab' }],
              children: [
                e.jsx(n, { style: [p.tableCell, { flex: 7, textAlign: 'left' }], children: 'จำนวนเงินรวมทั้งสิ้น' }),
                e.jsxs(n, { style: [p.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [P(s.grand_total), ' บาท'] })
              ]
            })
          ]
        })
      ]
    });
  },
  tt = ({ quotation: s }) =>
    e.jsxs(j, {
      style: v.footerContainer,
      children: [
        e.jsx(n, { style: [v.paymentTitle, f.boldText], children: 'เงื่อนไขการชำระเงิน :' }),
        e.jsxs(j, {
          style: { flexDirection: 'row', justifyContent: 'space-between' },
          children: [
            e.jsx(n, { style: v.paymentText, children: '1. โอนเงินผ่านบัญชีธนาคาร บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด' }),
            e.jsx(n, { style: v.taxNumber, children: '(เลขประจำตัวผู้เสียภาษี: 0205547009421)' })
          ]
        }),
        e.jsx(n, {
          style: v.paymentText,
          children: '2. จัดส่งหลักฐานการโอนเงิน และหนังสือรับรองหักภาษี ณ ที่จ่ายมายัง somluk.meesakun@icpinter.com'
        }),
        e.jsx(j, {
          style: { marginTop: 10 },
          children: e.jsxs(j, {
            style: [v.table, { margin: 'auto' }],
            children: [
              e.jsxs(j, {
                style: v.tableRow,
                children: [
                  e.jsx(n, { style: v.tableHeader, children: 'ธนาคาร' }),
                  e.jsx(n, { style: v.tableHeader, children: 'สาขา' }),
                  e.jsx(n, { style: v.tableHeader, children: 'ประเภทบัญชี' }),
                  e.jsx(n, { style: v.tableHeader, children: 'เลขที่บัญชี' })
                ]
              }),
              [
                ['ไทยพาณิชย์', 'ชลบุรี', 'กระแสรายวัน', '001-3-50193-0'],
                ['กสิกรไทย', 'พัฒนาพงษ์', 'กระแสรายวัน', '018-1-14367-3'],
                ['ทหารไทย', 'สุรวงศ์', 'กระแสรายวัน', '078-1-18116-9']
              ].map((l, m) =>
                e.jsx(j, { style: v.tableRow, children: l.map((d, a) => e.jsx(n, { style: v.tableCell, children: d }, a)) }, m)
              )
            ]
          })
        }),
        e.jsxs(j, {
          style: [v.signatureContainer, { marginTop: 5 }],
          children: [
            e.jsx(n, { style: { fontSize: 14 }, children: 'ขอแสดงความนับถือ' }),
            e.jsx(j, { style: v.signatureLine }),
            e.jsx(n, { style: v.signatureText, children: '( ผู้จัดการห้องปฏิบัติการ )' }),
            e.jsx(n, { style: v.signatureText, children: 'ผู้เสนอราคา' })
          ]
        })
      ]
    }),
  f = ie.create({
    page: { padding: 10, paddingHorizontal: 40, fontFamily: 'THSarabunNew' },
    boldText: { fontFamily: 'THSarabunNew', fontWeight: 'bold' },
    normalText: { fontFamily: 'THSarabunNew' },
    headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    logo: { width: 80, height: 80 },
    companyInfo: { fontSize: 12 },
    quotationBox: { borderWidth: 2, borderColor: '#000', borderRadius: 10, padding: 8, textAlign: 'center', width: 160, fontSize: 14 },
    quotationTitle: { fontSize: 18 },
    sectionDivider: { borderBottomWidth: 2, borderBottomColor: '#000', marginVertical: 2 },
    infoRow: { flexDirection: 'row', justifyContent: 'space-between', fontSize: 14, marginTop: 5 }
  }),
  p = ie.create({
    table: { display: 'table', width: '100%', borderCollapse: 'collapse', borderWidth: 2, marginVertical: 10 },
    tableRow: { flexDirection: 'row' },
    tableCell: { flex: 1, fontSize: 12, paddingTop: 2, paddingHorizontal: 4, textAlign: 'center', borderColor: '#000', minHeight: 18 },
    tableHeader: { backgroundColor: '#f3f3f3', fontWeight: 'bold', borderBottomWidth: 2, textAlign: 'center' },
    textRight: { textAlign: 'right' },
    summaryRow: { flexDirection: 'row', marginTop: 5 },
    summaryLabel: { flex: 3, fontSize: 14, padding: 5 },
    summaryValue: { flex: 1, textAlign: 'right', fontSize: 14, padding: 5 }
  }),
  v = ie.create({
    footerContainer: { position: 'absolute', bottom: 15, left: 40, right: 40 },
    paymentTitle: { fontSize: 14 },
    paymentText: { fontSize: 14, marginBottom: 2 },
    taxNumber: { fontSize: 14, textAlign: 'right' },
    table: { display: 'table', width: '80%', borderWidth: 2, marginVertical: 10 },
    tableRow: { flexDirection: 'row' },
    tableHeader: {
      fontSize: 14,
      fontWeight: 'bold',
      borderColor: '#000',
      paddingTop: 2,
      paddingHorizontal: 4,
      textAlign: 'center',
      flex: 1,
      minHeight: 18
    },
    tableCell: { fontSize: 12, borderTopWidth: 1, borderColor: '#000', paddingHorizontal: 4, textAlign: 'center', flex: 1, minHeight: 18 },
    signatureContainer: { marginTop: 5, marginLeft: 'auto', marginRight: '10%', textAlign: 'center', width: '30%' },
    signatureLine: { borderBottomWidth: 2, width: '100%', alignSelf: 'center', marginBottom: 5, marginTop: 20 },
    signatureText: { fontSize: 12, textAlign: 'center' }
  }),
  st = [{ width: 0.6 }, { width: 4 }, { width: 1 }, { width: 0.9 }, { width: 1 }],
  nt = ({ data: s, title: l }) => {
    var le;
    const d = ((le = be().state) == null ? void 0 : le.id) || null;
    console.log('id', d);
    const a = me(),
      [w, i] = u.useState(2),
      [o, S] = u.useState(!1),
      [k, G] = u.useState(!1),
      [D, T] = u.useState(!1),
      [H, Q] = u.useState(!1),
      [W, V] = u.useState([]);
    u.useEffect(() => {
      const t = localStorage.getItem('authToken');
      t &&
        _e(t).then((y) => {
          V(y.user);
        });
    }, []);
    const x = [
      { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
      { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
      { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
      { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
    ];
    u.useEffect(() => {
      d ? L(d) : a('/request/');
    }, []);
    const [c, C] = u.useState({}),
      [q, B] = u.useState([]),
      L = async (t) => {
        const y = await Ne(t);
        console.log('response', y), console.log('sample_submissions', y.sample_submissions), B(y.sample_submissions), C(y);
      },
      [X, $] = u.useState(!1),
      [U, te] = u.useState([]),
      [r, _] = u.useState([]);
    u.useEffect(() => {
      g(), F(), I();
    }, []);
    const g = async () => {
        const t = await Se();
        te(t);
      },
      F = async () => {
        try {
          const t = await Te();
          _(t);
        } catch (t) {
          console.error('Error fetching test items:', t), _([]);
        }
      },
      [z, h] = u.useState([]),
      I = async () => {
        try {
          const t = await ve();
          h(t);
        } catch (t) {
          console.log(t);
        }
      },
      Y = (t, y) => {
        const R = Object.keys(t).find((O) => t[O] === 1),
          M = y.find((O) => O.value === R);
        return M ? M.label : null;
      },
      se = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (t) => {
            if (!t || !t.row) return '-';
            const { test_code: y, test_percentage: R } = t.row;
            return `${y || ''}${R ? ` (${R})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (t) =>
            e.jsx(ae, {
              pill: !0,
              style: {},
              bg: t.row.status === 'pending' ? 'warning' : t.row.status === 'rejected' ? 'danger' : 'success',
              children: t.row.status === 'pending' ? 'รออนุมัติ' : t.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
            })
        },
        {
          field: 'test_value',
          headerName: 'ผลที่ได้',
          flex: 1,
          renderCell: (t) => {
            var y;
            return ((y = t == null ? void 0 : t.row) == null ? void 0 : y.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (t) => {
            var y;
            return ((y = t == null ? void 0 : t.row) == null ? void 0 : y.created_at) || '-';
          }
        }
      ],
      pe = (t) => {
        const y = t.map((R, M) => ({ id: R.detail_id, no: M + 1, ...R }));
        return console.log('setData', y), y;
      },
      ne = (t) => {
        t && L(d);
      };
    return e.jsx('div', {
      children: e.jsxs(Z, {
        children: [
          e.jsx(Z.Header, { children: e.jsx('h5', { children: l }) }),
          e.jsx(Z.Body, {
            children: e.jsxs(ee, {
              children: [
                c.request_no &&
                  e.jsx(N, {
                    md: 12,
                    children: e.jsxs('h5', {
                      className: 'mb-4',
                      children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: c.request_no || '' })]
                    })
                  }),
                e.jsx(N, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                e.jsx(N, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: c.customer_name })]
                  })
                }),
                e.jsx(N, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: [
                      'ประเภทคำขอ :',
                      e.jsx('strong', {
                        className: 'text-dark',
                        children: c.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'
                      })
                    ]
                  })
                }),
                e.jsx(N, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: c.notes })]
                  })
                }),
                e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
                q.map((t, y) => {
                  var R, M;
                  return e.jsxs(
                    N,
                    {
                      md: 12,
                      className: 'mb-2 p-4 pt-0 pb-0',
                      children: [
                        e.jsxs(ee, {
                          className: 'mt-3',
                          children: [
                            e.jsxs('h5', {
                              children: ['เลขที่ตัวอย่าง : ', e.jsx('strong', { className: 'text-dark', children: t.submission_no || '-' })]
                            }),
                            e.jsxs('h6', {
                              children: [
                                'ตัวอย่างที่ ',
                                y + 1,
                                ' สูตรปุ๋ย : ',
                                e.jsx('strong', { className: 'text-dark', children: t.fertilizer_formula || '-' }),
                                ' ( ชื่อสามัญ : ',
                                e.jsx('strong', { className: 'text-dark', children: t.common_name || '-' }),
                                ')'
                              ]
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: ['ประเภทของปุ๋ย : ', e.jsx('strong', { className: 'text-dark', children: Y(t, x) })]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: [
                                  'ลักษณะปุ๋ย :',
                                  ' ',
                                  e.jsx('strong', {
                                    className: 'text-dark',
                                    children:
                                      ((R = z.find((O) => O.fertilizer_type_id === t.fertilizer_type_id)) == null
                                        ? void 0
                                        : R.fertilizer_type_name) || '-'
                                  })
                                ]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: t.color || '-' })]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: [
                                  'ภาชนะบรรจุ :',
                                  ' ',
                                  e.jsx('strong', {
                                    className: 'text-dark',
                                    children:
                                      ((M = U.find((O) => O.packaging_type_id === t.packaging_id)) == null
                                        ? void 0
                                        : M.packaging_type_name) || '-'
                                  })
                                ]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: ['ชื่อการค้า : ', e.jsx('strong', { className: 'text-dark', children: t.trade_name || '-' })]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: [
                                  'ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ',
                                  e.jsx('strong', { className: 'text-dark', children: t.manufacturer || '-' }),
                                  'ประเทศ : ',
                                  e.jsx('strong', { className: 'text-dark', children: t.manufacturer_country || '-' })
                                ]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-2',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: [
                                  'สั่งจาก (บริษัท/ห้าง/ร้าน) : ',
                                  e.jsx('strong', { className: 'text-dark', children: t.supplier || '-' }),
                                  'ประเทศ : ',
                                  e.jsx('strong', { className: 'text-dark', children: t.supplier_country || '-' })
                                ]
                              })
                            }),
                            e.jsx(N, {
                              md: 6,
                              className: 'mb-0',
                              children: e.jsxs('p', {
                                className: 'mb-0',
                                children: [
                                  'สถานะ :',
                                  e.jsx(ae, {
                                    bg:
                                      (t.verification_status === 'No' && t.is_job_accepted) ||
                                      (t.verification_status === 'No' && !t.is_job_accepted) ||
                                      (t.verification_status === 'Yes' && !t.is_job_accepted)
                                        ? 'warning'
                                        : t.verification_status === 'Yes' && t.is_job_accepted
                                          ? 'success'
                                          : 'danger',
                                    style: { marginLeft: 12 },
                                    children:
                                      (t.verification_status === 'No' && t.is_job_accepted) ||
                                      (t.verification_status === 'No' && !t.is_job_accepted) ||
                                      (t.verification_status === 'Yes' && !t.is_job_accepted)
                                        ? 'รอการตรวจสอบ'
                                        : t.verification_status === 'Yes' && t.is_job_accepted
                                          ? 'รับงาน'
                                          : ' ไม่อนุมัติ'
                                  })
                                ]
                              })
                            }),
                            e.jsxs(N, {
                              md: 12,
                              className: 'mb-2',
                              children: [
                                e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลการทดสอบ' }),
                                e.jsx('div', {
                                  style: { width: '100%' },
                                  children: e.jsx(Ie, {
                                    rows: pe(t.sample_submission_details),
                                    columns: se,
                                    pageSize: 5,
                                    rowsPerPageOptions: [5, 10, 20],
                                    pagination: !0,
                                    disableSelectionOnClick: !0,
                                    hideFooterSelectedRowCount: !0
                                  })
                                })
                              ]
                            }),
                            e.jsx(N, {
                              children: e.jsx(Me, {
                                submissionId: !t.submission_no && t.submission_id,
                                handleTracking: ne,
                                trackingData: t.sample_tracking,
                                reviewBy: W.user_id,
                                serviceId: c.request_no ? null : d
                              })
                            })
                          ]
                        }),
                        y < q.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                      ]
                    },
                    y
                  );
                }),
                c.quotation_data &&
                  c.quotation_data.length > 0 &&
                  e.jsx(N, { children: e.jsx(Ke, { quotationData: c.quotation_data, onChange: ne }) })
              ]
            })
          }),
          e.jsxs(Z.Footer, {
            className: 'text-start',
            children: [
              c.request_no && e.jsx(Je, { handleBilling: ne, testItems: c.test_items_for_quotation, serviceData: c, createdBy: W.user_id }),
              e.jsxs(A, {
                variant: 'danger',
                onClick: () => a('/admin/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  at = {
    id: 1,
    request_no: 'REQ-2025-002',
    company: 'บริษัท เกษตรรุ่งเรือง จำกัด',
    typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
    reportMethod: ['รับด้วยตัวอย่าง'],
    email: '',
    sameAddress: !0,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phone: '081-234-5678',
    sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
    otherRequirements: '',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยอินทรีย์'],
        fertilizerType: ['เม็ด'],
        color: ['ดำ'],
        container: 'ถุงพลาสติก',
        tradeName: 'ปุ๋ยอินทรีย์สูตรเข้มข้น',
        trademark: 'ตราใบไม้',
        formula: '',
        manufacturer: 'โรงงานปุ๋ยอินทรีย์ไทย',
        country: 'ไทย',
        tests: ['pH', 'MC', 'OM'],
        status: 'pending'
      }
    ]
  },
  Tt = () => e.jsx(nt, { data: at, title: 'ข้อมูลการรับตัวอย่างปุ๋ย' });
export { Tt as default };
