import {
  G as xe,
  r as m,
  j as e,
  B as R,
  y as he,
  u as Fe,
  R as ie,
  C as D,
  aw as Le,
  ax as Be,
  k as Ie,
  l as Pe,
  a as Me,
  h as Oe
} from './index-Bq0BSIrC.js';
import { p as Qe, a as Ve, b as Ge } from './serviceRequest-BNwVWIYi.js';
import { g as $e, S as _e, c as we, d as Se, e as We, A as Ue, a as Ye, E as Je, b as Ke } from './ExpandMore-Db26wRVx.js';
import { g as Xe } from './packageingTypeRequest-CUTcv2jf.js';
import { g as Ze } from './fertilizerTypesRequest-CzftO6V-.js';
import { c as ve, d as Te, a as de, F as Ne } from './formik.esm-BOpZLvMI.js';
import { h as et } from './uploadFileRequest-CHVQkj-t.js';
import { F as ke, I as Ce, a as De, p as tt } from './FirebaseImage-CdSOeEuY.js';
import { a as st } from './sampleSubmissionsRequest-CTdJwuzW.js';
import { T as pe } from './Table-d-SvDQb0.js';
import { B as oe } from './Badge-D-xOYCqC.js';
import { B as qe } from './ButtonGroup-bg4r2ah8.js';
import { T as se, D as nt } from './DataGrid-CHhOcfGb.js';
import { M as H } from './Modal-CjqQnpwU.js';
import { F as u } from './Form-C1nYDdO8.js';
import { b as at } from './index-BF3zQdn1.js';
import { P as rt, p as ze, D as it, a as ot, S as ge, V as _, I as lt, T as r, F as ct } from './react-pdf.browser-CTqFsEOp.js';
import { C as K } from './Card-C7kDYjR9.js';
import './DefaultPropsProvider-CMzRgkCO.js';
import './emotion-element-f0de968e.browser.esm-xSVEHtue.js';
import './TextField-BqqrABCd.js';
import './toPropertyKey-KGmwFxs9.js';
import './Transition-DABJrq3x.js';
import './setPrototypeOf-DgZC2w_0.js';
import './Divider-31lZdKBP.js';
import './CloseButton-DJdHSP0V.js';
import './tslib.es6-RU1n5ZxP.js';
function dt(s) {
  return xe({
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
function ht(s) {
  return xe({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18z' },
        child: []
      },
      { tag: 'path', attr: { d: 'm16 13-4 4-4-4 1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59L16 13z' }, child: [] }
    ]
  })(s);
}
function mt(s) {
  return xe({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z', opacity: '.87' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z'
        },
        child: []
      }
    ]
  })(s);
}
const Ae = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  He = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json'), console.log('postSampleStatus', s);
    const d = JSON.stringify(s),
      h = { method: 'POST', headers: o, body: d, redirect: 'follow' };
    try {
      const a = await fetch(Ae + '/sample-status-array', h);
      if (!a.ok) {
        const T = await a.json();
        throw new Error(T.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save SampleStatus data Error:', a), a);
    }
  },
  Re = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = { method: 'DELETE', headers: o, redirect: 'follow' };
    return await (await fetch(Ae + '/sample-status/' + s, d)).json();
  },
  ut = ({ submissionId: s, handleTracking: o, trackingData: d, reviewBy: h, sampleNo: a, reloadData: T, sampleStatus: l }) => {
    const [g, f] = m.useState(!1),
      [L, B] = m.useState(!1),
      [U, N] = m.useState(d),
      [z, Z] = m.useState(null),
      [G, $] = m.useState([]);
    console.log('sampleNo:', a),
      console.log('submissionId:', s),
      console.log('sampleStatus:', l),
      m.useEffect(() => {
        (() => {
          N(d), $(l.sample_status_tracking);
        })();
      }, [T]);
    const Y = ve({
        carrier_name: de().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: de().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: Te().required('กรุณาอัปโหลดหลักฐานการส่ง')
      }),
      Q = ve({
        carrier_name: de().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: de().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: Te().nullable()
      }),
      J = { carrier_name: '', tracking_number: '', proof_image: null, status: 'received' },
      ee = async (i, { setSubmitting: x, resetForm: v, setErrors: b }) => {
        try {
          const I = (await et([i.proof_image], 'proof_images', 'proof_'))[0].fileName,
            P = { submission_id: s, tracking_number: i.tracking_number, carrier_name: i.carrier_name, status: i.status, proof_image: I },
            E = await tt(P);
          N((n) => [
            ...n,
            { id: E.id || Date.now(), carrier_name: i.carrier_name, tracking_number: i.tracking_number, proof_image: I, status: 'received' }
          ]),
            o(!0),
            f(!1),
            v();
        } catch (k) {
          console.error('Error saving tracking data:', k), b({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' }), x(!1);
        }
      },
      ae = async (i, { setSubmitting: x, setErrors: v }) => {
        try {
          let b = [];
          a || (await st(s)), a || (await Qe(serviceId));
          const k = { submission_id: s, status: 'received_in_system', notes: 'รับตัวอย่างเข้าระบบ' },
            I = G.some((c) => c.submission_id === k.submission_id && c.status === k.status);
          console.log('hasReceived :', I), I || b.push({ ...k, id: b.length + 1 });
          const P = { submission_id: s, status: 'delivered_to_lab', notes: 'ตัวอย่างจัดส่งถึงแล็บ' },
            E = G.some((c) => c.submission_id === P.submission_id && c.status === P.status);
          console.log('hasDelivered :', E), E || b.push({ ...P, id: b.length + 1 }), console.log('newSampleStatus :', b);
          const n = await He(b);
          if ((console.log('postSampleStatusArray :', n), s && !i.received_by)) {
            const c = { status: 'in_processing', received_by: h },
              w = await De(z.tracking_id, c);
            console.log('responseSampleTracking :', w), o(!0), B(!1);
          }
        } catch (b) {
          console.error('Error updating tracking data:', b), v({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' }), x(!1);
        }
      },
      te = (i) => {
        const x = U.find((v) => v.tracking_id === i);
        console.log('dataToEdit :', x), Z(x), B(!0);
      },
      q = async (i) => {
        if (window.confirm('คุณต้องการลบข้อมูลการจัดส่งตัวอย่าง หรือไม่?'))
          try {
            G.map((k) => {
              (k.status === 'received_in_system' || k.status === 'delivered_to_lab') && Re(k.id);
            }),
              (await De(i, { status: 'in_processing', received_by: null })) &&
                (he.success('ยกเลิกการรับตัวอย่างสำเร็จ!', { autoClose: 3e3 }), o(!0));
          } catch (v) {
            he.success('ยกเลิกการรับตัวอย่างไม่สำเร็จ! :' + v, { autoClose: 3e3 });
          }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('h6', { className: 'mb-3 mt-3', children: 'ข้อมูลการจัดส่งตัวอย่าง' }),
        e.jsxs(pe, {
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
              children: U.map((i, x) =>
                e.jsxs(
                  'tr',
                  {
                    children: [
                      e.jsx('td', { className: 'text-center', children: x + 1 }),
                      e.jsx('td', { children: i.carrier_name }),
                      e.jsx('td', { children: i.tracking_number }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(oe, {
                          pill: !0,
                          bg:
                            i.status === 'received'
                              ? 'info'
                              : i.status === 'in_processing'
                                ? 'warning'
                                : i.status === 'completed'
                                  ? 'primary'
                                  : 'success',
                          children:
                            i.status === 'received'
                              ? 'ดำเนินการจัดส่ง'
                              : i.status === 'in_processing'
                                ? 'กำลังทดสอบ'
                                : i.status === 'completed'
                                  ? 'ทดสอบเสร็จสิ้น'
                                  : 'จัดส่งสำเร็จ'
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(ke, {
                          imagePath: i.proof_image,
                          alt: `Proof for ${i.tracking_number}`,
                          style: { maxHeight: '100px' },
                          thumbnail: !0
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(qe, {
                          children: i.received_by
                            ? e.jsx(se, {
                                title: 'ยกเลิกรับ',
                                placement: 'bottom',
                                arrow: !0,
                                children: e.jsx(R, {
                                  variant: 'danger',
                                  size: 'sm',
                                  onClick: () => q(i.tracking_id),
                                  children: e.jsx(mt, {})
                                })
                              })
                            : e.jsx(se, {
                                title: 'รับ',
                                placement: 'bottom',
                                arrow: !0,
                                children: e.jsx(R, {
                                  variant: 'success',
                                  size: 'sm',
                                  onClick: () => te(i.tracking_id),
                                  children: e.jsx(dt, { style: { fontSize: 16 } })
                                })
                              })
                        })
                      })
                    ]
                  },
                  `${i.tracking_number}-${i.id}`
                )
              )
            })
          ]
        }),
        e.jsx(R, { variant: 'primary', onClick: () => f(!0), children: 'เพิ่มข้อมูลการจัดส่ง' }),
        e.jsxs(H, {
          show: g,
          onHide: () => f(!1),
          centered: !0,
          children: [
            e.jsx(H.Header, {
              closeButton: !0,
              children: e.jsx(H.Title, { children: e.jsx('h5', { children: 'รายละเอียดการจัดส่งตัวอย่าง' }) })
            }),
            e.jsx(Ne, {
              initialValues: J,
              validationSchema: Y,
              onSubmit: ee,
              children: ({
                values: i,
                errors: x,
                touched: v,
                handleChange: b,
                handleBlur: k,
                handleSubmit: I,
                setFieldValue: P,
                isSubmitting: E
              }) =>
                e.jsxs(u, {
                  onSubmit: I,
                  children: [
                    e.jsxs(H.Body, {
                      children: [
                        x.submit && e.jsx('div', { className: 'text-danger mb-3', children: x.submit }),
                        e.jsxs(u.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(u.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                            e.jsxs(u.Select, {
                              name: 'carrier_name',
                              value: i.carrier_name,
                              onChange: b,
                              onBlur: k,
                              isInvalid: v.carrier_name && !!x.carrier_name,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                e.jsx('option', { value: 'DHL', children: 'DHL' })
                              ]
                            }),
                            e.jsx(u.Control.Feedback, { type: 'invalid', children: x.carrier_name })
                          ]
                        }),
                        e.jsxs(u.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(u.Label, { children: 'หมายเลข Tracking' }),
                            e.jsx(u.Control, {
                              type: 'text',
                              name: 'tracking_number',
                              placeholder: 'กรอกหมายเลข Tracking',
                              value: i.tracking_number,
                              onChange: b,
                              onBlur: k,
                              isInvalid: v.tracking_number && !!x.tracking_number
                            }),
                            e.jsx(u.Control.Feedback, { type: 'invalid', children: x.tracking_number })
                          ]
                        }),
                        e.jsxs(u.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(u.Label, { children: 'หลักฐานการส่ง' }),
                            e.jsx(u.Control, {
                              type: 'file',
                              accept: 'image/*',
                              onChange: (n) => P('proof_image', n.target.files[0]),
                              isInvalid: v.proof_image && !!x.proof_image
                            }),
                            i.proof_image &&
                              e.jsx('div', {
                                className: 'mt-3',
                                children: e.jsx(Ce, {
                                  src: URL.createObjectURL(i.proof_image),
                                  alt: 'Proof',
                                  thumbnail: !0,
                                  style: { maxHeight: '200px' }
                                })
                              }),
                            e.jsx(u.Control.Feedback, { type: 'invalid', children: x.proof_image })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(H.Footer, {
                      children: [
                        e.jsx(R, { variant: 'success', type: 'submit', disabled: E, children: 'บันทึก' }),
                        e.jsx(R, { variant: 'secondary', onClick: () => f(!1), disabled: E, children: 'ยกเลิก' })
                      ]
                    })
                  ]
                })
            })
          ]
        }),
        z &&
          e.jsxs(H, {
            show: L,
            onHide: () => B(!1),
            centered: !0,
            children: [
              e.jsx(H.Header, {
                closeButton: !0,
                children: e.jsx(H.Title, { children: e.jsx('h6', { children: 'ยืนยันการรับตัวอย่าง' }) })
              }),
              e.jsx(Ne, {
                initialValues: {
                  carrier_name: z.carrier_name,
                  tracking_number: z.tracking_number,
                  proof_image: null,
                  status: z.status,
                  received_by: z.received_by
                },
                validationSchema: Q,
                onSubmit: ae,
                children: ({
                  values: i,
                  errors: x,
                  touched: v,
                  handleChange: b,
                  handleBlur: k,
                  handleSubmit: I,
                  setFieldValue: P,
                  isSubmitting: E
                }) =>
                  e.jsxs(u, {
                    onSubmit: I,
                    children: [
                      e.jsxs(H.Body, {
                        children: [
                          x.submit && e.jsx('div', { className: 'text-danger mb-3', children: x.submit }),
                          e.jsxs(u.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(u.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                              e.jsxs(u.Select, {
                                name: 'carrier_name',
                                value: i.carrier_name,
                                onChange: b,
                                onBlur: k,
                                isInvalid: v.carrier_name && !!x.carrier_name,
                                children: [
                                  e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                  e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                  e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                  e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                  e.jsx('option', { value: 'DHL', children: 'DHL' })
                                ]
                              }),
                              e.jsx(u.Control.Feedback, { type: 'invalid', children: x.carrier_name })
                            ]
                          }),
                          e.jsxs(u.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(u.Label, { children: 'หมายเลข Tracking' }),
                              e.jsx(u.Control, {
                                type: 'text',
                                name: 'tracking_number',
                                placeholder: 'กรอกหมายเลข Tracking',
                                value: i.tracking_number,
                                onChange: b,
                                onBlur: k,
                                isInvalid: v.tracking_number && !!x.tracking_number
                              }),
                              e.jsx(u.Control.Feedback, { type: 'invalid', children: x.tracking_number })
                            ]
                          }),
                          e.jsxs(u.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(u.Label, { children: 'หลักฐานการส่ง (ถ้าต้องการเปลี่ยน)' }),
                              e.jsx(u.Control, {
                                type: 'file',
                                accept: 'image/*',
                                onChange: (n) => P('proof_image', n.target.files[0]),
                                isInvalid: v.proof_image && !!x.proof_image
                              }),
                              e.jsx('div', {
                                className: 'mt-3',
                                children: i.proof_image
                                  ? e.jsx(Ce, {
                                      src: URL.createObjectURL(i.proof_image),
                                      alt: 'New Proof',
                                      thumbnail: !0,
                                      style: { maxHeight: '200px' }
                                    })
                                  : e.jsx(ke, {
                                      imagePath: z.proof_image,
                                      alt: 'Current Proof',
                                      style: { maxHeight: '200px' },
                                      thumbnail: !0
                                    })
                              }),
                              e.jsx(u.Control.Feedback, { type: 'invalid', children: x.proof_image })
                            ]
                          })
                        ]
                      }),
                      e.jsxs(H.Footer, {
                        children: [
                          e.jsx(R, { variant: 'success', type: 'submit', disabled: E, children: 'ยืนยัน' }),
                          e.jsx(R, { variant: 'secondary', onClick: () => B(!1), disabled: E, children: 'ยกเลิก' })
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
  ne = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  xt = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = { method: 'GET', headers: o, redirect: 'follow' };
    return await (await fetch(ne + '/quotations/' + s, d)).json();
  },
  pt = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = JSON.stringify(s),
      h = { method: 'POST', headers: o, body: d, redirect: 'follow' };
    try {
      const a = await fetch(ne + '/quotations', h);
      if (!a.ok) {
        const T = await a.json();
        throw new Error(T.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save Quotations data Error:', a), a);
    }
  },
  gt = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = { method: 'DELETE', headers: o, redirect: 'follow' };
    return await (await fetch(ne + '/quotations/' + s, d)).json();
  },
  jt = async (s) => {
    console.log('data', s);
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = JSON.stringify(s),
      h = { method: 'POST', headers: o, body: d, redirect: 'follow' };
    try {
      const a = await fetch(ne + '/quotation-details', h);
      if (!a.ok) {
        const T = await a.json();
        throw new Error(T.message || `HTTP Error: ${a.status}`);
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Save QuotationDetails data Error:', a), a);
    }
  },
  ft = async () => {
    const s = new Headers();
    s.append('Content-Type', 'application/json');
    const o = { method: 'GET', headers: s, redirect: 'follow' };
    return await (await fetch(ne + '/quotation-types', o)).json();
  },
  bt = async (s) => {
    const o = new Headers();
    o.append('Content-Type', 'application/json');
    const d = { method: 'GET', headers: o, redirect: 'follow' },
      h = await fetch(ne + '/sample-remain-quantity/' + s, d);
    if (!h.ok) {
      const a = await h.json();
      throw new Error(a.message || `HTTP Error: ${h.status}`);
    }
    return await h.json();
  },
  yt = ({ name: s = 'quotation_type_id', onSelect: o, value: d, disables: h, showText: a, isInvalid: T = !1, errorMessage: l = '' }) => {
    var U;
    const [g, f] = m.useState([]),
      L = async () => {
        try {
          await ft().then((N) => {
            f(N);
          });
        } catch (N) {
          console.log(N);
        }
      };
    m.useEffect(() => {
      L();
    }, []);
    const B = (N) => {
      const z = N.target.value;
      console.log('selectedValue', z), o(z);
    };
    return e.jsxs(u.Group, {
      className: 'mb-3',
      children: [
        e.jsxs(u.Label, {
          children: [
            'ประเภทใบเสนอราคา',
            a
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx('span', { className: 'text-meta-1', children: ' : ' }),
                    e.jsx('strong', { children: (U = g.find((N) => N.quotation_type_id === d)) == null ? void 0 : U.quotation_type_name })
                  ]
                })
              : e.jsx('span', { className: 'text-meta-1', children: ': ' })
          ]
        }),
        !a &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs(u.Select, {
                value: d || '',
                onChange: B,
                disabled: h,
                style: { padding: '8px 20px', fontSize: 14 },
                isInvalid: T,
                children: [
                  e.jsx('option', { value: '', disabled: !0, className: 'text-body dark:text-bodydark', children: 'เลือกประเภทใบส่งซื้อ' }),
                  g.length > 0 &&
                    g.map((N, z) =>
                      e.jsx(
                        'option',
                        { value: N.quotation_type_id, className: 'text-body dark:text-bodydark', children: N.quotation_type_name },
                        z
                      )
                    )
                ]
              }),
              T && e.jsx(u.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: l || 'กรุณาเลือกประเภทใบส่งซื้อ' })
            ]
          })
      ]
    });
  },
  _t = ({ handleBilling: s, testItems: o = [], serviceData: d, createdBy: h, serviceId: a, reloadData: T }) => {
    Fe();
    const [l, g] = m.useState(!1),
      [f, L] = m.useState([]),
      [B, U] = m.useState(0),
      [N, z] = m.useState([]);
    console.log('testItems:', o);
    const Z = o.map((n) => ({
        id: n.test_item_id,
        name: n.name_for_quotation,
        price: parseFloat(n.unit_price),
        quantity: n.quantity,
        maxQuantity: n.remain_quantity,
        summary: parseFloat(n.unit_price) * n.quantity,
        quotation_type_id: n.quotation_type_id
      })),
      [G, $] = m.useState(Z),
      [Y, Q] = m.useState('');
    m.useEffect(() => {
      J();
    }, [T]);
    const J = () => {
        a && ee(a), $(Z), L([]), Q('');
      },
      ee = async (n) => {
        const c = await bt(n);
        console.log('response', c), z(c);
      },
      ae = () => {
        const n = f.reduce((j, V) => j + V.price * V.quantity, 0),
          c = n * (B / 100),
          w = n - c,
          C = w * 0.07,
          M = w + C;
        return { totalAmount: n, discountAmount: c, netTotal: w, vatAmount: C, grandTotal: M };
      },
      { totalAmount: te, discountAmount: q, netTotal: i, vatAmount: x, grandTotal: v } = ae(),
      b = (n) => {
        console.log('item:', n), console.log('item:', f);
        const c = f.find((C) => C.id === n.id);
        let w;
        c ? (w = f.filter((C) => C.id !== n.id)) : (w = [...f, { ...n }]), console.log('updatedItems:', w), L(w);
      },
      k = (n, c) => {
        const w = parseInt(c) || 0,
          C = G.map((j) =>
            j.id === n
              ? { ...j, quantity: Math.max(1, Math.min(j.maxQuantity, w)), summary: j.price * Math.max(1, Math.min(j.maxQuantity, w)) }
              : j
          );
        $(C);
        const M = f.map((j) =>
          j.id === n
            ? { ...j, quantity: Math.max(1, Math.min(j.maxQuantity, w)), summary: j.price * Math.max(1, Math.min(j.maxQuantity, w)) }
            : j
        );
        L(M);
      },
      I = (n, c) => {
        const w = parseFloat(c) || 0,
          C = G.map((j) => (j.id === n ? { ...j, price: w, summary: w * j.quantity } : j));
        $(C);
        const M = f.map((j) => (j.id === n ? { ...j, price: w, summary: w * j.quantity } : j));
        L(M);
      },
      P = (n) => {
        const c = parseFloat(n) || 0;
        U(Math.max(0, Math.min(100, c)));
      },
      E = async () => {
        if (f.length === 0) {
          alert('กรุณาเลือกอย่างน้อย 1 รายการเพื่อสร้างใบเสนอราคา');
          return;
        }
        if (!Y) {
          alert('กรุณาเลือกประเภทใบเสนอราคา');
          return;
        }
        let n = [];
        const c = new Date();
        c.setDate(c.getDate() + 30);
        const w = {
          customer_id: d.customer_id,
          request_id: d.request_id,
          valid_until: c.toISOString().split('T')[0],
          total_amount: parseFloat(te.toFixed(2)),
          discount_percentage: parseFloat(B.toFixed(2)),
          discount_amount: parseFloat(q.toFixed(2)),
          net_total: parseFloat(i.toFixed(2)),
          vat_amount: parseFloat(x.toFixed(2)),
          grand_total: parseFloat(v.toFixed(2)),
          payment_terms: '30 วัน',
          status: 'pending',
          created_by: h,
          quotation_type_id: Y,
          approved_by: null
        };
        d.sample_submissions.map((C) => {
          const M = { submission_id: C.submission_id, status: 'pending_test', notes: 'รอทดสอบบางรายการ' };
          f.length !== N.length
            ? n.push({ ...M, id: n.length + 1 })
            : ((M.status = 'quotation_issued'), (M.notes = 'ออกใบเสนอราคา'), n.push({ ...M, id: n.length + 1 }));
        });
        try {
          await He(n);
          const C = await pt(w);
          if (C && C.quotation_id) {
            const j = {
              quotation_id: C.quotation_id,
              test_items_for_quotation: f.map((V) => {
                const re = V.price * V.quantity,
                  le = (re * (B / 100)) / f.length,
                  me = re - le;
                return {
                  test_item_id: V.id,
                  quantity: V.quantity,
                  unit_price: parseFloat(V.price.toFixed(2)),
                  subtotal_price: parseFloat(re.toFixed(2)),
                  discount_amount: parseFloat(le.toFixed(2)),
                  total_price: parseFloat(me.toFixed(2))
                };
              })
            };
            console.log('Quotation Details Data:', j), await jt(j), g(!1), s(!0);
          } else throw new Error('Failed to get quotation ID');
        } catch (C) {
          console.error('Error generating quotation:', C), alert('เกิดข้อผิดพลาดในการสร้างใบเสนอราคา กรุณาลองใหม่');
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(R, {
          variant: 'success',
          onClick: () => g(!0),
          children: [e.jsx(at, { className: 'me-2', style: { fontSize: 16 } }), ' ออกใบเสนอราคา']
        }),
        e.jsxs(H, {
          show: l,
          className: 'modal-lg',
          onHide: () => {
            g(!1), J();
          },
          centered: !0,
          children: [
            e.jsx(H.Header, { closeButton: !0, children: e.jsx(H.Title, { children: e.jsx('h5', { children: 'สร้างใบเสนอราคา' }) }) }),
            e.jsxs(H.Body, {
              style: { overflowX: 'auto' },
              children: [
                e.jsx(ie, {
                  children: e.jsx(D, {
                    item: !0,
                    className: 'ps-3 pe-3',
                    children: e.jsx(yt, { name: 'quotation_type_id', value: Y, onSelect: (n) => Q(n) })
                  })
                }),
                e.jsxs(pe, {
                  striped: !0,
                  bordered: !0,
                  hover: !0,
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
                        G.map((n) =>
                          e.jsxs(
                            'tr',
                            {
                              children: [
                                e.jsx('td', {
                                  className: 'text-center',
                                  onChange: () => b(n),
                                  children: e.jsx(u.Check, {
                                    type: 'checkbox',
                                    checked: f.some((c) => c.id === n.id),
                                    disabled: !N.find((c) => c.test_item_id === n.id)
                                  })
                                }),
                                e.jsx('td', {
                                  style: { whiteSpace: 'normal', wordWrap: 'break-word', maxHeight: '100px', overflowY: 'auto' },
                                  children: n.name
                                }),
                                e.jsx('td', {
                                  children: e.jsx(u.Control, {
                                    type: 'number',
                                    value: n.quantity,
                                    min: 1,
                                    max: n.maxQuantity,
                                    onChange: (c) => k(n.id, c.target.value),
                                    disabled: !N.find((c) => c.test_item_id === n.id),
                                    style: { width: '80px' }
                                  })
                                }),
                                e.jsx('td', {
                                  children: e.jsx(u.Control, {
                                    type: 'number',
                                    value: n.price,
                                    step: '1',
                                    onChange: (c) => I(n.id, c.target.value),
                                    disabled: !N.find((c) => c.test_item_id === n.id),
                                    style: { width: '100px' }
                                  })
                                }),
                                e.jsx('td', { className: 'text-end', children: n.summary.toFixed(2) })
                              ]
                            },
                            n.id
                          )
                        ),
                        Y === '3' &&
                          e.jsxs('tr', {
                            children: [
                              e.jsx('td', { colSpan: 4, className: 'text-end', children: 'ส่วนลด (%)' }),
                              e.jsx('td', {
                                children: e.jsx(u.Group, {
                                  children: e.jsx(u.Control, {
                                    type: 'number',
                                    value: B,
                                    min: 0,
                                    max: 100,
                                    step: '0.01',
                                    onChange: (n) => P(n.target.value),
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
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [te.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsxs('p', { className: 'mb-0 text-dark', children: ['ส่วนลด (', B, '%):'] })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [q.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsx('p', { className: 'mb-0 text-dark', children: 'ราคาสุทธิ :' })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-0 text-dark', children: [i.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              colSpan: 4,
                              className: 'text-end',
                              children: e.jsx('p', { className: 'mb-2 text-dark', children: 'VAT 7%:' })
                            }),
                            e.jsx('td', { children: e.jsxs('p', { className: 'mb-2 text-dark', children: [x.toFixed(2), ' บาท'] }) })
                          ]
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', { colSpan: 4, className: 'text-end', children: e.jsx('h6', { children: 'ยอดรวมทั้งสิ้น :' }) }),
                            e.jsx('td', { children: e.jsxs('h6', { children: [v.toFixed(2), ' บาท'] }) })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsxs(H.Footer, {
              children: [
                e.jsx(R, { variant: 'success', onClick: E, disabled: N.length === 0, children: 'สร้างใบเสนอราคา' }),
                e.jsx(R, {
                  variant: 'danger',
                  onClick: () => {
                    g(!1), J();
                  },
                  children: 'ยกเลิก'
                })
              ]
            })
          ]
        })
      ]
    });
  };
ct.register({
  family: 'THSarabunNew',
  fonts: [{ src: '/assets/fonts/THSarabunNew.ttf' }, { src: '/assets/fonts/THSarabunNew-Bold.ttf', fontWeight: 'bold' }]
});
const je = ({ quotation: s }) =>
    e.jsx(it, {
      children: e.jsxs(ot, {
        size: 'A4',
        style: S.page,
        children: [e.jsx(Tt, { quotation: s }), e.jsx(Nt, { quotation: s }), e.jsx(kt, { quotation: s })]
      })
    }),
  X = (s) => parseFloat(s).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  wt = async (s) => {
    var T;
    const o = ((T = s.customer_info[0]) == null ? void 0 : T.email) || 'ginjung01@gmail.com',
      d = `ใบเสนอราคา ${s.quotation_no}`,
      h = 'นี่คือใบเสนอราคาที่ท่านร้องขอ',
      a = 'Chanu';
    try {
      const l = await ze(e.jsx(je, { quotation: s })).toBlob(),
        g = new FormData();
      g.append('toEmail', o),
        g.append('subject', d),
        g.append('message', h),
        g.append('username', a),
        g.append('file', l, `${s.quotation_no}.pdf`);
      const L = await (await fetch('https://apiav2-3mp52qu73a-as.a.run.app/api/send-mail-file', { method: 'POST', body: g })).json();
      console.log(L.message);
    } catch (l) {
      console.error('❌ Failed to send email', l);
    }
  },
  St = async (s) => {
    const o = await ze(e.jsx(je, { quotation: s })).toBlob(),
      d = URL.createObjectURL(o);
    window.open(d);
  },
  vt = ({ quotationData: s, onChange: o }) => {
    const [d, h] = m.useState([]),
      a = async (l) => {
        try {
          const g = await xt(l);
          return console.log(`getQuotationsByID(${l}):`, g), g;
        } catch (g) {
          return console.error(`Error fetching quotation ${l}:`, g), null;
        }
      };
    m.useEffect(() => {
      (async () => {
        if (s && s.length > 0) {
          const g = await Promise.all(
            s.map(async (f) => {
              const L = await a(f.quotation_id);
              return { ...f, ...(L || {}) };
            })
          );
          h(g.filter((f) => f !== null));
        } else h([]);
      })();
    }, [s]);
    const T = async (l) => {
      if (window.confirm('คุณต้องการลบข้อมูลใบเสนอราคา หรือไม่?'))
        try {
          await Re(),
            await gt(l).then(() => {
              he.success('ลบข้อมูลใบเสนอราคาสำเร็จ!', { autoClose: 3e3 }), o(!0);
            });
        } catch {
          he.error('ลบข้อมูลใบเสนอราคาไม่สำเร็จ!', { autoClose: 3e3 });
        }
    };
    return e.jsx(ie, {
      className: 'mb-2 p-2 pt-0 pb-0',
      children: e.jsxs(D, {
        children: [
          e.jsx('h6', { children: 'ข้อมูลใบเสนอราคา' }),
          e.jsxs(pe, {
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
                children: d.map((l, g) =>
                  e.jsxs(
                    'tr',
                    {
                      children: [
                        e.jsx('td', { children: g + 1 }),
                        e.jsx('td', { children: l.quotation_no }),
                        e.jsx('td', { className: 'text-center', children: l.quotation_type_name || '-' }),
                        e.jsx('td', { children: new Date(l.quotation_date).toLocaleDateString('th-TH') }),
                        e.jsx('td', { className: 'text-end', children: X(l.grand_total) }),
                        e.jsx('td', {
                          className: 'text-center',
                          children: e.jsx(oe, {
                            pill: !0,
                            style: {},
                            bg: l.status === 'pending' ? 'warning' : l.status === 'rejected' ? 'danger' : 'success',
                            children: l.status === 'pending' ? 'รอชำระเงิน' : l.status === 'rejected' ? 'ยกเลิก' : 'ชำระเงินสำเร็จ'
                          })
                        }),
                        e.jsx('td', { children: l.approved_by || '-' }),
                        e.jsx('td', {
                          className: 'text-center',
                          style: { flex: 1 },
                          children: e.jsxs(qe, {
                            children: [
                              e.jsx(se, {
                                title: 'Pre-view',
                                placement: 'bottom',
                                arrow: !0,
                                children: e.jsx(R, {
                                  variant: 'info',
                                  size: 'sm',
                                  onClick: () => St(l),
                                  children: e.jsx(Le, { style: { fontSize: 16 } })
                                })
                              }),
                              e.jsx(rt, {
                                document: e.jsx(je, { quotation: l }),
                                fileName: `${l.quotation_no}.pdf`,
                                children: e.jsx(se, {
                                  title: 'ดาวน์โหลด PDF',
                                  placement: 'bottom',
                                  arrow: !0,
                                  children: e.jsx(R, {
                                    variant: 'primary',
                                    style: { borderRadius: 0, padding: '12px', display: 'flex', alignItems: 'center' },
                                    children: e.jsx(ht, { style: { fontSize: 16 } })
                                  })
                                })
                              }),
                              e.jsx(se, {
                                title: 'ส่งอีเมล์',
                                placement: 'bottom',
                                arrow: !0,
                                children: e.jsx(R, {
                                  variant: 'info',
                                  size: 'sm',
                                  onClick: () => wt(l),
                                  children: e.jsx(Be, { style: { fontSize: 16 } })
                                })
                              }),
                              e.jsx(se, {
                                title: 'ลบใบเสนอราคา',
                                placement: 'bottom',
                                arrow: !0,
                                children: e.jsx(R, {
                                  variant: 'danger',
                                  size: 'sm',
                                  onClick: () => T(l.quotation_id),
                                  children: e.jsx(Ie, { style: { fontSize: 16 } })
                                })
                              })
                            ]
                          })
                        })
                      ]
                    },
                    l.id
                  )
                )
              })
            ]
          })
        ]
      })
    });
  },
  Tt = ({ quotation: s }) =>
    e.jsxs(_, {
      children: [
        e.jsxs(_, {
          style: S.headerContainer,
          children: [
            e.jsx(_, { style: { maxWidth: 50 }, children: e.jsx(lt, { src: Pe, style: S.logo }) }),
            e.jsxs(_, {
              children: [
                e.jsx(r, {
                  style: [S.companyInfo, S.boldText, { fontSize: 14 }],
                  children: 'ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด'
                }),
                e.jsx(r, { style: S.companyInfo, children: '307 หมู่ 7 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230' }),
                e.jsx(r, { style: S.companyInfo, children: 'โทรศัพท์: 038-352170-3 ต่อ 401, 090-9606091' })
              ]
            }),
            e.jsxs(_, {
              style: S.quotationBox,
              children: [
                e.jsx(r, { style: [S.quotationTitle, S.boldText], children: 'ใบเสนอราคา /' }),
                e.jsx(r, { style: [S.quotationTitle, S.boldText], children: 'QUOTATION' })
              ]
            })
          ]
        }),
        e.jsx(_, { style: S.sectionDivider }),
        s.customer_info &&
          s.customer_info.length > 0 &&
          e.jsxs(_, {
            style: S.infoRow,
            children: [
              e.jsxs(_, {
                children: [
                  e.jsxs(r, {
                    children: [
                      e.jsx(r, { style: S.boldText, children: 'เรียน : ' }),
                      e.jsx(r, { style: S.normalText, children: s.customer_info[0].company_name })
                    ]
                  }),
                  e.jsxs(r, {
                    children: [
                      e.jsx(r, { style: S.boldText, children: 'ที่อยู่ : ' }),
                      e.jsx(r, { style: S.normalText, children: s.customer_info[0].company_address })
                    ]
                  })
                ]
              }),
              e.jsxs(_, {
                children: [
                  e.jsxs(r, {
                    children: [
                      e.jsx(r, { style: S.boldText, children: 'วันที่ : ' }),
                      new Date(s.quotation_date).toLocaleDateString('th-TH')
                    ]
                  }),
                  e.jsxs(r, { children: [e.jsx(r, { style: S.boldText, children: 'เลขที่ใบเสนอราคา : ' }), s.quotation_no] }),
                  (s == null ? void 0 : s.quotation_type_id) &&
                    (s == null ? void 0 : s.quotation_type_id) !== 1 &&
                    e.jsxs(r, {
                      children: [
                        e.jsx(r, { style: S.boldText, children: 'กำหนดวันชำระเงิน : ' }),
                        (s == null ? void 0 : s.quotation_type_id) === 2 ? '7 วันหลังส่งผล' : '30 วันหลังส่งผล'
                      ]
                    })
                ]
              })
            ]
          })
      ]
    }),
  Nt = ({ quotation: s }) => {
    const d = s.quotation_details
      ? [
          ...s.quotation_details.map((h, a) => [
            (a + 1).toString(),
            h.name_for_quotation,
            X(h.unit_price),
            h.quantity.toString(),
            X(h.subtotal_price)
          ]),
          ...Array.from({ length: 15 - s.quotation_details.length }, () => ['', '', '', '', ''])
        ].slice(0, 15)
      : Array(15).fill(['', '', '', '', '']);
    return e.jsxs(_, {
      children: [
        e.jsx(r, {
          style: { fontSize: 14, marginTop: 0 },
          children:
            'ห้องปฏิบัติการ บริษัท ไอ ซี พี อินเตอร์เนชั่นแนล จำกัด มีความยินดีในการเสนอราคา เพื่อการพิจารณาของท่าน ดังรายการต่อไปนี้:'
        }),
        e.jsxs(_, {
          style: [y.table, { marginTop: 0 }],
          children: [
            e.jsxs(_, {
              style: [y.tableRow, y.tableHeader],
              children: [
                e.jsx(r, { style: [y.tableCell, { flex: 0.6, borderRight: 2, paddingTop: 10 }], children: 'ลำดับที่' }),
                e.jsx(r, { style: [y.tableCell, { flex: 4, borderRight: 2 }], children: 'รายการทดสอบ' }),
                e.jsx(r, { style: [y.tableCell, { flex: 1, borderRight: 2 }], children: 'ราคาต่ออย่าง (บาท)' }),
                e.jsx(r, { style: [y.tableCell, { flex: 0.9, borderRight: 2 }], children: 'จำนวนตัวอย่าง' }),
                e.jsx(r, { style: [y.tableCell, { flex: 1 }], children: 'ราคารวม (บาท)' })
              ]
            }),
            d.map((h, a) =>
              e.jsx(
                _,
                {
                  style: [y.tableRow],
                  children: h.map((T, l) => {
                    var g;
                    return e.jsx(
                      r,
                      {
                        style: [
                          y.tableCell,
                          { flex: (g = Ct[l]) == null ? void 0 : g.width, borderRight: l !== 4 ? 2 : 0, borderBottom: a !== 14 ? 1 : 0 },
                          l === 1 ? { textAlign: 'left' } : l === 2 || l === 4 ? y.textRight : {}
                        ],
                        children: T
                      },
                      l
                    );
                  })
                },
                a
              )
            ),
            e.jsxs(_, {
              style: [y.tableRow, { borderTop: 2 }],
              children: [
                e.jsx(r, { style: [y.tableCell, { flex: 7, textAlign: 'left' }], children: 'ค่าบริการวิเคราะห์ทดสอบ' }),
                e.jsxs(r, { style: [y.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [X(s.total_amount), ' บาท'] })
              ]
            }),
            s.discount_percentage !== '0.00' &&
              e.jsxs(_, {
                style: [y.tableRow, { borderTop: 1 }],
                children: [
                  e.jsxs(r, {
                    style: [y.tableCell, { flex: 7, textAlign: 'left' }],
                    children: [
                      'ส่วนลด',
                      e.jsxs(r, {
                        style: { padding: 20, borderBottom: 2, fontSize: 14, fontWeight: 'bold' },
                        children: [' ', s.discount_percentage, ' ']
                      }),
                      '%'
                    ]
                  }),
                  e.jsxs(r, {
                    style: [y.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }],
                    children: [X(s.discount_amount), ' บาท']
                  })
                ]
              }),
            e.jsxs(_, {
              style: [y.tableRow, { borderTop: 1 }],
              children: [
                e.jsx(r, { style: [y.tableCell, { flex: 7, textAlign: 'left' }], children: 'ภาษีมูลค่าเพิ่ม (Vat) 7%' }),
                e.jsxs(r, { style: [y.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [X(s.vat_amount), ' บาท'] })
              ]
            }),
            e.jsxs(_, {
              style: [y.tableRow, { borderTop: 1 }],
              children: [
                e.jsx(r, { style: [y.tableCell, { flex: 7, textAlign: 'left' }], children: 'จำนวนเงินรวมทั้งสิ้น' }),
                e.jsxs(r, { style: [y.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [X(s.net_total), 'บาท'] })
              ]
            }),
            e.jsxs(_, {
              style: [y.tableRow, { borderTop: 1, backgroundColor: '#ababab' }],
              children: [
                e.jsx(r, { style: [y.tableCell, { flex: 7, textAlign: 'left' }], children: 'จำนวนเงินรวมทั้งสิ้น' }),
                e.jsxs(r, { style: [y.tableCell, { flex: 1, textAlign: 'right', borderLeft: 2 }], children: [X(s.grand_total), ' บาท'] })
              ]
            })
          ]
        })
      ]
    });
  },
  kt = ({ quotation: s }) =>
    e.jsxs(_, {
      style: F.footerContainer,
      children: [
        e.jsx(r, { style: [F.paymentTitle, S.boldText], children: 'เงื่อนไขการชำระเงิน :' }),
        e.jsxs(_, {
          style: { flexDirection: 'row', justifyContent: 'space-between' },
          children: [
            e.jsx(r, { style: F.paymentText, children: '1. โอนเงินผ่านบัญชีธนาคาร บริษัท ไอ ซี พี อินเตอร์เนชันแนล จำกัด' }),
            e.jsx(r, { style: F.taxNumber, children: '(เลขประจำตัวผู้เสียภาษี: 0205547009421)' })
          ]
        }),
        e.jsx(r, {
          style: F.paymentText,
          children: '2. จัดส่งหลักฐานการโอนเงิน และหนังสือรับรองหักภาษี ณ ที่จ่ายมายัง somluk.meesakun@icpinter.com'
        }),
        e.jsx(_, {
          style: { marginTop: 10 },
          children: e.jsxs(_, {
            style: [F.table, { margin: 'auto' }],
            children: [
              e.jsxs(_, {
                style: F.tableRow,
                children: [
                  e.jsx(r, { style: F.tableHeader, children: 'ธนาคาร' }),
                  e.jsx(r, { style: F.tableHeader, children: 'สาขา' }),
                  e.jsx(r, { style: F.tableHeader, children: 'ประเภทบัญชี' }),
                  e.jsx(r, { style: F.tableHeader, children: 'เลขที่บัญชี' })
                ]
              }),
              [
                ['ไทยพาณิชย์', 'ชลบุรี', 'กระแสรายวัน', '001-3-50193-0'],
                ['กสิกรไทย', 'พัฒนาพงษ์', 'กระแสรายวัน', '018-1-14367-3'],
                ['ทหารไทย', 'สุรวงศ์', 'กระแสรายวัน', '078-1-18116-9']
              ].map((o, d) =>
                e.jsx(_, { style: F.tableRow, children: o.map((h, a) => e.jsx(r, { style: F.tableCell, children: h }, a)) }, d)
              )
            ]
          })
        }),
        e.jsxs(_, {
          style: [F.signatureContainer, { marginTop: 5 }],
          children: [
            e.jsx(r, { style: { fontSize: 14 }, children: 'ขอแสดงความนับถือ' }),
            e.jsx(_, { style: F.signatureLine }),
            e.jsx(r, { style: F.signatureText, children: '( ผู้จัดการห้องปฏิบัติการ )' }),
            e.jsx(r, { style: F.signatureText, children: 'ผู้เสนอราคา' })
          ]
        })
      ]
    }),
  S = ge.create({
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
  y = ge.create({
    table: { display: 'table', width: '100%', borderCollapse: 'collapse', borderWidth: 2, marginVertical: 10 },
    tableRow: { flexDirection: 'row' },
    tableCell: { flex: 1, fontSize: 12, paddingTop: 2, paddingHorizontal: 4, textAlign: 'center', borderColor: '#000', minHeight: 18 },
    tableHeader: { backgroundColor: '#f3f3f3', fontWeight: 'bold', borderBottomWidth: 2, textAlign: 'center' },
    textRight: { textAlign: 'right' },
    summaryRow: { flexDirection: 'row', marginTop: 5 },
    summaryLabel: { flex: 3, fontSize: 14, padding: 5 },
    summaryValue: { flex: 1, textAlign: 'right', fontSize: 14, padding: 5 }
  }),
  F = ge.create({
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
  Ct = [{ width: 0.6 }, { width: 4 }, { width: 1 }, { width: 0.9 }, { width: 1 }],
  Dt = ({ title: s }) => {
    var be;
    const d = ((be = Me().state) == null ? void 0 : be.id) || null,
      h = Fe(),
      [a, T] = m.useState(2),
      [l, g] = m.useState(!1),
      [f, L] = m.useState(!1),
      [B, U] = m.useState(!1),
      [N, z] = m.useState(!1),
      [Z, G] = m.useState([]),
      [$, Y] = m.useState(!1),
      [Q, J] = m.useState('horizontal'),
      [ee, ae] = m.useState(0);
    m.useEffect(() => {
      const t = localStorage.getItem('authToken');
      t &&
        Oe(t).then((p) => {
          G(p.user);
        });
    }, []);
    const te = [
      { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
      { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
      { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
      { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
    ];
    m.useEffect(() => {
      d ? I(d) : h('/admin/sample-receiving/');
    }, [d, $]);
    const [q, i] = m.useState({}),
      [x, v] = m.useState([]),
      [b, k] = m.useState([]),
      I = async (t) => {
        const p = await Ve(t),
          A = await Ge(t);
        if ((v(p.sample_submissions), i(p), A && A.request_status_tracking.length > 0)) {
          const W = A.request_status_tracking[0],
            ye = ce.map((Ee) => W[Ee.status] === 'yes').lastIndexOf(!0);
          ae(ye >= 0 ? ye + 1 : 0), k(A);
        }
      },
      [P, E] = m.useState([]),
      [n, c] = m.useState([]);
    m.useEffect(() => {
      w(), C(), V();
    }, []);
    const w = async () => {
        const t = await Xe();
        E(t);
      },
      C = async () => {
        try {
          const t = await $e();
          c(t);
        } catch (t) {
          console.error('Error fetching test items:', t), c([]);
        }
      },
      [M, j] = m.useState([]),
      V = async () => {
        try {
          const t = await Ze();
          j(t);
        } catch (t) {
          console.log(t);
        }
      },
      re = (t, p) => {
        const A = Object.keys(t).find((O) => t[O] === 1),
          W = p.find((O) => O.value === A);
        return W ? W.label : null;
      },
      le = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (t) => {
            if (!t || !t.row) return '-';
            const { test_code: p, test_percentage: A } = t.row;
            return `${p || ''}${A ? ` (${A})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (t) =>
            e.jsx(oe, {
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
            var p;
            return ((p = t == null ? void 0 : t.row) == null ? void 0 : p.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (t) => {
            var p;
            return ((p = t == null ? void 0 : t.row) == null ? void 0 : p.created_at) || '-';
          }
        }
      ],
      me = (t) => {
        const p = t.map((A, W) => ({ id: A.detail_id, no: W + 1, ...A }));
        return console.log('setData', p), p;
      };
    m.useEffect(() => {
      const t = () => {
        window.innerWidth <= 768 ? J('vertical') : J('horizontal');
      };
      return t(), window.addEventListener('resize', t), () => window.removeEventListener('resize', t);
    }, []);
    const ue = (t) => {
        t && (console.log('handleReload :', t), Y((p) => !p));
      },
      ce = [
        { label: 'ตัวอย่างจัดส่งถึงแลป', status: 'delivered_to_lab' },
        { label: 'รับตัวอย่างเข้าระบบ', status: 'received_in_system' },
        { label: 'ทดสอบบางรายการ', status: 'pending_test' },
        { label: 'ออกใบเสนอราคา', status: 'quotation_issued' },
        { label: 'ขอใบแจ้งหนี้', status: 'invoice_requested' },
        { label: 'รับชำระเงิน', status: 'payment_received' },
        { label: 'หัก ณ ที่จ่าย', status: 'withholding_tax_deducted' },
        { label: 'ออกใบเสร็จรับเงิน', status: 'receipt_issued' }
      ],
      fe = (t) => (
        console.log('isStepComplete :', t),
        !b.request_status_tracking || !b.request_status_tracking[0] ? !1 : b.request_status_tracking[0][ce[t].status] === 'yes'
      );
    return e.jsx('div', {
      children: e.jsxs(K, {
        children: [
          e.jsx(K.Header, { children: e.jsx('h5', { children: s }) }),
          e.jsxs(K.Body, {
            children: [
              Q === 'vertical'
                ? e.jsx(_e, {
                    activeStep: ee,
                    orientation: Q,
                    alternativeLabel: Q === 'horizontal',
                    sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                    children: ce.map((t, p) =>
                      e.jsxs(we, { completed: fe(p), children: [e.jsx(Se, { children: t.label }), Q === 'vertical' && e.jsx(We, {})] }, p)
                    )
                  })
                : e.jsx(e.Fragment, {
                    children: e.jsx(K, {
                      style: { borderRadius: 10, marginBottom: 10 },
                      children: e.jsx(K.Body, {
                        style: { padding: '8px 20px 3px' },
                        children: e.jsx(_e, {
                          activeStep: ee,
                          orientation: Q,
                          alternativeLabel: Q === 'horizontal',
                          sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                          children: ce.map((t, p) => e.jsx(we, { completed: fe(p), children: e.jsx(Se, { children: t.label }) }, p))
                        })
                      })
                    })
                  }),
              e.jsx(K, {
                style: { borderRadius: 10, marginBottom: 0 },
                children: e.jsx(K.Body, {
                  style: { paddingBottom: 20, paddingTop: 20 },
                  children: e.jsxs(ie, {
                    children: [
                      q.request_no &&
                        e.jsx(D, {
                          md: 12,
                          children: e.jsxs('h5', {
                            className: 'mb-4',
                            children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: q.request_no || '' })]
                          })
                        }),
                      e.jsx(D, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                      e.jsx(D, {
                        md: 6,
                        className: 'mb-2',
                        children: e.jsxs('p', {
                          className: 'mb-0',
                          children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: q.customer_name })]
                        })
                      }),
                      e.jsx(D, {
                        md: 6,
                        className: 'mb-2',
                        children: e.jsxs('p', {
                          className: 'mb-0',
                          children: [
                            'ประเภทคำขอ :',
                            e.jsx('strong', {
                              className: 'text-dark',
                              children: q.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'
                            })
                          ]
                        })
                      }),
                      e.jsx(D, {
                        md: 6,
                        className: 'mb-2',
                        children: e.jsxs('p', {
                          className: 'mb-0',
                          children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: q.notes })]
                        })
                      }),
                      e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
                      x.map((t, p) => {
                        var A, W;
                        return e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(
                              ie,
                              {
                                children: e.jsxs(D, {
                                  md: 12,
                                  className: 'ms-2 ps-0 pe-0',
                                  style: { border: '1px solid #f8f9fa' },
                                  children: [
                                    e.jsxs(Ue, {
                                      sx: { boxShadow: 'none' },
                                      children: [
                                        e.jsx(Ye, {
                                          expandIcon: e.jsx(Je, {}),
                                          'aria-controls': `panel${p}-content`,
                                          id: `panel${p}-header`,
                                          sx: { backgroundColor: '#f8f9fa', borderRadius: 0 },
                                          children: e.jsxs('p', {
                                            className: 'mb-0',
                                            children: [
                                              'ตัวอย่างที่ ',
                                              p + 1,
                                              ' ',
                                              t.submission_no &&
                                                e.jsxs(e.Fragment, {
                                                  children: [
                                                    'เลขที่ :',
                                                    ' ',
                                                    e.jsx('strong', {
                                                      className: 'text-dark',
                                                      style: { fontWeight: 'bold' },
                                                      children: t.submission_no || '-'
                                                    }),
                                                    ' '
                                                  ]
                                                }),
                                              'สูตรปุ๋ย : ',
                                              e.jsx('strong', { className: 'text-dark', children: t.fertilizer_formula || '-' }),
                                              ' ( ชื่อสามัญ :',
                                              ' ',
                                              e.jsx('strong', {
                                                className: 'text-dark',
                                                style: { fontWeight: 'bold' },
                                                children: t.common_name || '-'
                                              }),
                                              ') สถานะ :',
                                              e.jsx(oe, {
                                                pill: !0,
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
                                        e.jsx(Ke, {
                                          children: e.jsxs(ie, {
                                            children: [
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-2',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: [
                                                    'ประเภทของปุ๋ย :',
                                                    ' ',
                                                    e.jsx('strong', { className: 'text-dark', children: re(t, te) })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
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
                                                        ((A = M.find((O) => O.fertilizer_type_id === t.fertilizer_type_id)) == null
                                                          ? void 0
                                                          : A.fertilizer_type_name) || '-'
                                                    })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-2',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: t.color || '-' })]
                                                })
                                              }),
                                              e.jsx(D, {
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
                                                        ((W = P.find((O) => O.packaging_type_id === t.packaging_id)) == null
                                                          ? void 0
                                                          : W.packaging_type_name) || '-'
                                                    })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-2',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: [
                                                    'ชื่อการค้า : ',
                                                    e.jsx('strong', { className: 'text-dark', children: t.trade_name || '-' })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-2',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: [
                                                    'ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ',
                                                    e.jsx('strong', { className: 'text-dark', children: t.manufacturer || '-' }),
                                                    ' ประเทศ :',
                                                    ' ',
                                                    e.jsx('strong', { className: 'text-dark', children: t.manufacturer_country || '-' })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-2',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: [
                                                    'สั่งจาก (บริษัท/ห้าง/ร้าน) : ',
                                                    e.jsx('strong', { className: 'text-dark', children: t.supplier || '-' }),
                                                    ' ประเทศ :',
                                                    ' ',
                                                    e.jsx('strong', { className: 'text-dark', children: t.supplier_country || '-' })
                                                  ]
                                                })
                                              }),
                                              e.jsx(D, {
                                                md: 6,
                                                className: 'mb-0',
                                                children: e.jsxs('p', {
                                                  className: 'mb-0',
                                                  children: [
                                                    'สถานะ :',
                                                    e.jsx(oe, {
                                                      pill: !0,
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
                                              e.jsxs(D, {
                                                md: 12,
                                                className: 'mb-2',
                                                children: [
                                                  e.jsx('h6', { className: 'mb-3', children: 'รายการทดสอบ' }),
                                                  e.jsx('div', {
                                                    style: { width: '100%' },
                                                    children: e.jsx(nt, {
                                                      rows: me(t.sample_submission_details),
                                                      columns: le,
                                                      pageSize: 5,
                                                      rowsPerPageOptions: [5, 10, 20],
                                                      pagination: !0,
                                                      disableSelectionOnClick: !0,
                                                      hideFooterSelectedRowCount: !0
                                                    })
                                                  })
                                                ]
                                              })
                                            ]
                                          })
                                        })
                                      ]
                                    }),
                                    e.jsx(D, {
                                      style: { padding: '0 16px 8px' },
                                      children: e.jsx(ut, {
                                        submissionId: t.submission_id,
                                        handleTracking: ue,
                                        trackingData: t.sample_tracking,
                                        reviewBy: Z.user_id,
                                        sampleNo: t.submission_no,
                                        reloadData: $,
                                        sampleStatus: b.sample_submissions.find((O) => O.submission_id === t.submission_id)
                                      })
                                    }),
                                    q.quotation_data &&
                                      q.quotation_data.length > 0 &&
                                      e.jsx(D, {
                                        style: { padding: '8px 8px 8px' },
                                        children: e.jsx(vt, {
                                          quotationData: q.quotation_data,
                                          onChange: ue,
                                          sampleStatus: b.sample_submissions.find((O) => O.submission_id === t.submission_id)
                                        })
                                      })
                                  ]
                                })
                              },
                              `Accordion-${p}`
                            ),
                            p < x.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                          ]
                        });
                      })
                    ]
                  })
                })
              })
            ]
          }),
          e.jsxs(K.Footer, {
            className: 'text-start',
            children: [
              q.request_no &&
                e.jsx(_t, {
                  serviceId: d,
                  handleBilling: ue,
                  testItems: q.test_items_for_quotation,
                  serviceData: q,
                  serviceStatus: b,
                  createdBy: Z.user_id,
                  reloadData: $
                }),
              e.jsxs(R, {
                variant: 'danger',
                onClick: () => h('/admin/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  ns = () => e.jsx(Dt, { title: 'ข้อมูลการรับตัวอย่างปุ๋ย' });
export { ns as default };
