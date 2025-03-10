import { r as d, j as e, B as p, n as W, q as oe, F as i, t as de, u as me, R as M, C as c, v as O } from './index-DZpC_pHZ.js';
import { c as U, g as K, a as z, F as J } from './formik.esm-DH0jrOO4.js';
import { h as V } from './uploadFileRequest-j7nqPy1R.js';
import { F as Y, I as Q, d as he, p as xe, a as pe } from './FirebaseImage-Cwvr5Es-.js';
import { T as ue } from './Table-Bs-13SI2.js';
import { B as E } from './Badge-EMxcGjiL.js';
import { B as je } from './ButtonGroup-DLGnQ8T-.js';
import { M as f } from './Modal-DVn7-Fnl.js';
import { b as ge } from './serviceRequest-D-ZD1URS.js';
import { a as fe, b as _e, g as be } from './testItemsRequest-5XlhAVBO.js';
import { C as D } from './Card-ZCMDsCmS.js';
import { D as Ne } from './DataGrid-DlzfhZq7.js';
import './firebaseConfig-pMHECxRz.js';
import './CloseButton-DgEPtGiG.js';
import './Transition-DW97tWQD.js';
import './toPropertyKey-COtC2h-V.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './Divider-BV326Lun.js';
const ke = ({ submissionId: T, handleTracking: w, trackingData: I }) => {
    const [y, b] = d.useState(!1),
      [a, C] = d.useState(!1),
      [v, F] = d.useState(I),
      [u, H] = d.useState(null),
      q = U({
        carrier_name: z().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: z().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: K().required('กรุณาอัปโหลดหลักฐานการส่ง')
      }),
      $ = U({
        carrier_name: z().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: z().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: K().nullable()
      }),
      R = { carrier_name: '', tracking_number: '', proof_image: null, status: 'received' },
      G = async (r, { setSubmitting: t, resetForm: l, setErrors: o }) => {
        try {
          const h = (await V([r.proof_image], 'proof_images', 'proof_'))[0].fileName,
            x = { submission_id: T, tracking_number: r.tracking_number, carrier_name: r.carrier_name, status: r.status, proof_image: h },
            _ = await xe(x);
          F((S) => [
            ...S,
            { id: _.id || Date.now(), carrier_name: r.carrier_name, tracking_number: r.tracking_number, proof_image: h, status: 'received' }
          ]),
            w(!0),
            b(!1),
            l();
        } catch (m) {
          console.error('Error saving tracking data:', m), o({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' }), t(!1);
        }
      },
      L = async (r, { setSubmitting: t, setErrors: l }) => {
        try {
          let o = u.proof_image;
          r.proof_image && (o = (await V([r.proof_image], 'proof_images', 'proof_'))[0].fileName);
          const m = {
            submission_id: T,
            tracking_number: r.tracking_number,
            carrier_name: r.carrier_name,
            status: r.status || u.status,
            proof_image: o
          };
          await pe(u.tracking_id, m), F((h) => h.map((x) => (x.id === u.id ? { ...x, ...m } : x))), w(!0), C(!1);
        } catch (o) {
          console.error('Error updating tracking data:', o), l({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' }), t(!1);
        }
      },
      j = (r) => {
        const t = v.find((l) => l.id === r);
        console.log('dataToEdit', t), H(t), C(!0);
      },
      B = async (r) => {
        try {
          await he(r), F((t) => t.filter((l) => l.id !== r)), w(!0);
        } catch (t) {
          console.error('Error deleting tracking data:', t);
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('h6', { className: 'mb-3 mt-3', children: 'ข้อมูลการจัดส่งตัวอย่าง' }),
        e.jsxs(ue, {
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
              children: v.map((r, t) =>
                e.jsxs(
                  'tr',
                  {
                    children: [
                      e.jsx('td', { className: 'text-center', children: t + 1 }),
                      e.jsx('td', { children: r.carrier_name }),
                      e.jsx('td', { children: r.tracking_number }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(E, {
                          bg:
                            r.status === 'received'
                              ? 'secondary'
                              : r.status === 'in_processing'
                                ? 'warning'
                                : r.status === 'completed'
                                  ? 'primary'
                                  : 'success',
                          children:
                            r.status === 'received'
                              ? 'ดำเนินการจัดส่ง'
                              : r.status === 'in_processing'
                                ? 'กำลังตรวจสอบ/ทดสอบ'
                                : r.status === 'completed'
                                  ? 'ทดสอบเสร็จสิ้น'
                                  : 'จัดส่งสำเร็จ'
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(Y, {
                          imagePath: r.proof_image,
                          alt: `Proof for ${r.tracking_number}`,
                          style: { maxHeight: '100px' },
                          thumbnail: !0
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsxs(je, {
                          children: [
                            e.jsx(p, { variant: 'info', size: 'sm', onClick: () => j(r.id), children: e.jsx(W, {}) }),
                            e.jsx(p, { variant: 'danger', size: 'sm', onClick: () => B(r.id), children: e.jsx(oe, {}) })
                          ]
                        })
                      })
                    ]
                  },
                  r.id
                )
              )
            })
          ]
        }),
        e.jsx(p, { variant: 'primary', onClick: () => b(!0), children: 'เพิ่มข้อมูลการจัดส่ง' }),
        e.jsxs(f, {
          show: y,
          onHide: () => b(!1),
          centered: !0,
          children: [
            e.jsx(f.Header, {
              closeButton: !0,
              children: e.jsx(f.Title, { children: e.jsx('h5', { children: 'รายละเอียดการจัดส่งตัวอย่าง' }) })
            }),
            e.jsx(J, {
              initialValues: R,
              validationSchema: q,
              onSubmit: G,
              children: ({
                values: r,
                errors: t,
                touched: l,
                handleChange: o,
                handleBlur: m,
                handleSubmit: h,
                setFieldValue: x,
                isSubmitting: _
              }) =>
                e.jsxs(i, {
                  onSubmit: h,
                  children: [
                    e.jsxs(f.Body, {
                      children: [
                        t.submit && e.jsx('div', { className: 'text-danger mb-3', children: t.submit }),
                        e.jsxs(i.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(i.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                            e.jsxs(i.Select, {
                              name: 'carrier_name',
                              value: r.carrier_name,
                              onChange: o,
                              onBlur: m,
                              isInvalid: l.carrier_name && !!t.carrier_name,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                e.jsx('option', { value: 'DHL', children: 'DHL' })
                              ]
                            }),
                            e.jsx(i.Control.Feedback, { type: 'invalid', children: t.carrier_name })
                          ]
                        }),
                        e.jsxs(i.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(i.Label, { children: 'หมายเลข Tracking' }),
                            e.jsx(i.Control, {
                              type: 'text',
                              name: 'tracking_number',
                              placeholder: 'กรอกหมายเลข Tracking',
                              value: r.tracking_number,
                              onChange: o,
                              onBlur: m,
                              isInvalid: l.tracking_number && !!t.tracking_number
                            }),
                            e.jsx(i.Control.Feedback, { type: 'invalid', children: t.tracking_number })
                          ]
                        }),
                        e.jsxs(i.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(i.Label, { children: 'หลักฐานการส่ง' }),
                            e.jsx(i.Control, {
                              type: 'file',
                              accept: 'image/*',
                              onChange: (S) => x('proof_image', S.target.files[0]),
                              isInvalid: l.proof_image && !!t.proof_image
                            }),
                            r.proof_image &&
                              e.jsx('div', {
                                className: 'mt-3',
                                children: e.jsx(Q, {
                                  src: URL.createObjectURL(r.proof_image),
                                  alt: 'Proof',
                                  thumbnail: !0,
                                  style: { maxHeight: '200px' }
                                })
                              }),
                            e.jsx(i.Control.Feedback, { type: 'invalid', children: t.proof_image })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(f.Footer, {
                      children: [
                        e.jsx(p, { variant: 'success', type: 'submit', disabled: _, children: 'บันทึก' }),
                        e.jsx(p, { variant: 'secondary', onClick: () => b(!1), disabled: _, children: 'ยกเลิก' })
                      ]
                    })
                  ]
                })
            })
          ]
        }),
        u &&
          e.jsxs(f, {
            show: a,
            onHide: () => C(!1),
            centered: !0,
            children: [
              e.jsx(f.Header, {
                closeButton: !0,
                children: e.jsx(f.Title, { children: e.jsx('h5', { children: 'แก้ไขรายละเอียดการจัดส่งตัวอย่าง' }) })
              }),
              e.jsx(J, {
                initialValues: { carrier_name: u.carrier_name, tracking_number: u.tracking_number, proof_image: null, status: u.status },
                validationSchema: $,
                onSubmit: L,
                children: ({
                  values: r,
                  errors: t,
                  touched: l,
                  handleChange: o,
                  handleBlur: m,
                  handleSubmit: h,
                  setFieldValue: x,
                  isSubmitting: _
                }) =>
                  e.jsxs(i, {
                    onSubmit: h,
                    children: [
                      e.jsxs(f.Body, {
                        children: [
                          t.submit && e.jsx('div', { className: 'text-danger mb-3', children: t.submit }),
                          e.jsxs(i.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(i.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                              e.jsxs(i.Select, {
                                name: 'carrier_name',
                                value: r.carrier_name,
                                onChange: o,
                                onBlur: m,
                                isInvalid: l.carrier_name && !!t.carrier_name,
                                children: [
                                  e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                  e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                  e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                  e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                  e.jsx('option', { value: 'DHL', children: 'DHL' })
                                ]
                              }),
                              e.jsx(i.Control.Feedback, { type: 'invalid', children: t.carrier_name })
                            ]
                          }),
                          e.jsxs(i.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(i.Label, { children: 'หมายเลข Tracking' }),
                              e.jsx(i.Control, {
                                type: 'text',
                                name: 'tracking_number',
                                placeholder: 'กรอกหมายเลข Tracking',
                                value: r.tracking_number,
                                onChange: o,
                                onBlur: m,
                                isInvalid: l.tracking_number && !!t.tracking_number
                              }),
                              e.jsx(i.Control.Feedback, { type: 'invalid', children: t.tracking_number })
                            ]
                          }),
                          e.jsxs(i.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(i.Label, { children: 'หลักฐานการส่ง (ถ้าต้องการเปลี่ยน)' }),
                              e.jsx(i.Control, {
                                type: 'file',
                                accept: 'image/*',
                                onChange: (S) => x('proof_image', S.target.files[0]),
                                isInvalid: l.proof_image && !!t.proof_image
                              }),
                              e.jsx('div', {
                                className: 'mt-3',
                                children: r.proof_image
                                  ? e.jsx(Q, {
                                      src: URL.createObjectURL(r.proof_image),
                                      alt: 'New Proof',
                                      thumbnail: !0,
                                      style: { maxHeight: '200px' }
                                    })
                                  : e.jsx(Y, {
                                      imagePath: u.proof_image,
                                      alt: 'Current Proof',
                                      style: { maxHeight: '200px' },
                                      thumbnail: !0
                                    })
                              }),
                              e.jsx(i.Control.Feedback, { type: 'invalid', children: t.proof_image })
                            ]
                          })
                        ]
                      }),
                      e.jsxs(f.Footer, {
                        children: [
                          e.jsx(p, { variant: 'success', type: 'submit', disabled: _, children: 'บันทึกการแก้ไข' }),
                          e.jsx(p, { variant: 'secondary', onClick: () => C(!1), disabled: _, children: 'ยกเลิก' })
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
  ye = ({ data: T, title: w }) => {
    var A;
    const y = ((A = de().state) == null ? void 0 : A.id) || null;
    console.log('id', y);
    const b = me(),
      [a, C] = d.useState(2),
      [v, F] = d.useState(!1),
      [u, H] = d.useState(!1),
      [q, $] = d.useState(!1),
      [R, G] = d.useState(!1),
      L = [
        { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
        { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
        { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
        { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
      ];
    d.useEffect(() => {
      y ? l(y) : b('/request/');
    }, []);
    const [j, B] = d.useState({}),
      [r, t] = d.useState([]),
      l = async (s) => {
        const n = await ge(s);
        t(n.sample_submissions), B(n);
      },
      [o, m] = d.useState(!1),
      h = () => {
        m(!0),
          te(),
          setTimeout(() => {
            m(!1), alert('ดาวน์โหลดเอกสารสำเร็จ!');
          }, 3e3);
      },
      [x, _] = d.useState([]),
      [S, P] = d.useState([]);
    d.useEffect(() => {
      X(), Z(), re();
    }, []);
    const X = async () => {
        const s = await fe();
        _(s);
      },
      Z = async () => {
        try {
          const s = await _e();
          P(s);
        } catch (s) {
          console.error('Error fetching test items:', s), P([]);
        }
      },
      [ee, se] = d.useState([]),
      re = async () => {
        try {
          const s = await be();
          se(s);
        } catch (s) {
          console.log(s);
        }
      },
      te = () => {
        window.open('/request/detial/quotation', '_blank');
      },
      ae = (s, n) => {
        const g = Object.keys(s).find((k) => s[k] === 1),
          N = n.find((k) => k.value === g);
        return N ? N.label : null;
      },
      ie = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (s) => {
            if (!s || !s.row) return '-';
            const { test_code: n, test_percentage: g } = s.row;
            return `${n || ''}${g ? ` (${g})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (s) =>
            e.jsx(E, {
              pill: !0,
              style: {},
              bg: s.row.status === 'pending' ? 'warning' : s.row.status === 'rejected' ? 'danger' : 'success',
              children: s.row.status === 'pending' ? 'รออนุมัติ' : s.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
            })
        },
        {
          field: 'test_value',
          headerName: 'ผลที่ได้',
          flex: 1,
          renderCell: (s) => {
            var n;
            return ((n = s == null ? void 0 : s.row) == null ? void 0 : n.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (s) => {
            var n;
            return ((n = s == null ? void 0 : s.row) == null ? void 0 : n.created_at) || '-';
          }
        }
      ],
      ne = (s) => {
        const n = s.map((g, N) => ({ id: g.detail_id, no: N + 1, ...g }));
        return console.log('setData', n), n;
      },
      ce = (s) => {
        b('/request/edit/', { state: { id: s } });
      },
      le = (s) => {};
    return e.jsx('div', {
      children: e.jsxs(D, {
        children: [
          e.jsx(D.Header, { children: e.jsx('h5', { children: w }) }),
          e.jsxs(D.Body, {
            children: [
              e.jsx('div', {
                className: 'container',
                children: e.jsxs('ul', {
                  className: 'form-stepper form-stepper-horizontal text-center mx-auto pl-0',
                  children: [
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 1 ? 'form-stepper-active' : a > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '1',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: a === 1 ? '1' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'การขอรับบริการ' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 2 ? 'form-stepper-active' : a > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '2',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: a === 2 || a < 2 ? '2' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ตรวจสอบข้อมูล' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 3 ? 'form-stepper-active' : a > 3 || q ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: a === 3 || a < 3 ? '3' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'รับตัวอย่างเข้าระบบ' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 4 ? 'form-stepper-active' : a > 4 || v ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: (a === 4 || a < 4) && v === !1 ? '4' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ใบเสนอราคา' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 5 ? 'form-stepper-active' : a > 5 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: a === 5 || a < 5 ? '5' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ชำระค่าบริการ' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${a === 6 ? 'form-stepper-active' : a > 6 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 24 },
                              children: a === 6 || a < 6 ? '6' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ผลการทดสอบ' })
                        ]
                      })
                    })
                  ]
                })
              }),
              e.jsxs(M, {
                children: [
                  j.request_no &&
                    e.jsx(c, {
                      md: 12,
                      children: e.jsxs('h5', {
                        className: 'mb-4',
                        children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: T.request_no })]
                      })
                    }),
                  e.jsx(c, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                  e.jsx(c, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: j.customer_name })]
                    })
                  }),
                  e.jsx(c, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: [
                        'ประเภทคำขอ :',
                        e.jsx('strong', {
                          className: 'text-dark',
                          children: j.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'
                        })
                      ]
                    })
                  }),
                  e.jsx(c, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: j.sample_type_name })]
                    })
                  }),
                  e.jsx(c, {
                    md: 12,
                    className: 'mb-0',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: [
                        'สถานะ :',
                        e.jsx(E, {
                          bg: j.status === 'pending' ? 'warning' : j.status === 'approved' ? 'success' : 'danger',
                          style: { marginLeft: 12 },
                          children: j.status === 'pending' ? ' รออนุมัติ' : j.status === 'approved' ? 'อนุมัติ' : ' ไม่อนุมัติ'
                        })
                      ]
                    })
                  }),
                  e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
                  r.map((s, n) => {
                    var g, N;
                    return e.jsxs(
                      c,
                      {
                        md: 12,
                        className: 'mb-2 p-4 pt-0 pb-0',
                        children: [
                          e.jsxs(M, {
                            children: [
                              e.jsxs('h6', {
                                children: [
                                  'ตัวอย่างที่ ',
                                  n + 1,
                                  ' สูตรปุ๋ย : ',
                                  e.jsx('strong', { className: 'text-dark', children: s.fertilizer_formula || '-' }),
                                  ' ( ชื่อสามัญ : ',
                                  e.jsx('strong', { className: 'text-dark', children: s.common_name || '-' }),
                                  ')'
                                ]
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['ประเภทของปุ๋ย : ', e.jsx('strong', { className: 'text-dark', children: ae(s, L) })]
                                })
                              }),
                              e.jsx(c, {
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
                                        ((g = ee.find((k) => k.fertilizer_type_id === s.fertilizer_type_id)) == null
                                          ? void 0
                                          : g.fertilizer_type_name) || '-'
                                    })
                                  ]
                                })
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: s.color || '-' })]
                                })
                              }),
                              e.jsx(c, {
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
                                        ((N = x.find((k) => k.packaging_type_id === s.packaging_id)) == null
                                          ? void 0
                                          : N.packaging_type_name) || '-'
                                    })
                                  ]
                                })
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['ชื่อการค้า : ', e.jsx('strong', { className: 'text-dark', children: s.trade_name || '-' })]
                                })
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: [
                                    'ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ',
                                    e.jsx('strong', { className: 'text-dark', children: s.manufacturer || '-' }),
                                    'ประเทศ : ',
                                    e.jsx('strong', { className: 'text-dark', children: s.manufacturer_country || '-' })
                                  ]
                                })
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: [
                                    'สั่งจาก (บริษัท/ห้าง/ร้าน) : ',
                                    e.jsx('strong', { className: 'text-dark', children: s.supplier || '-' }),
                                    'ประเทศ : ',
                                    e.jsx('strong', { className: 'text-dark', children: s.supplier_country || '-' })
                                  ]
                                })
                              }),
                              e.jsx(c, {
                                md: 6,
                                className: 'mb-0',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: [
                                    'สถานะ :',
                                    e.jsx(E, {
                                      bg:
                                        (s.verification_status === 'No' && s.is_job_accepted) ||
                                        (s.verification_status === 'No' && !s.is_job_accepted) ||
                                        (s.verification_status === 'Yes' && !s.is_job_accepted)
                                          ? 'warning'
                                          : s.verification_status === 'Yes' && s.is_job_accepted
                                            ? 'success'
                                            : 'danger',
                                      style: { marginLeft: 12 },
                                      children:
                                        (s.verification_status === 'No' && s.is_job_accepted) ||
                                        (s.verification_status === 'No' && !s.is_job_accepted) ||
                                        (s.verification_status === 'Yes' && !s.is_job_accepted)
                                          ? 'รอการตรวจสอบ'
                                          : s.verification_status === 'Yes' && s.is_job_accepted
                                            ? 'รับงาน'
                                            : ' ไม่อนุมัติ'
                                    })
                                  ]
                                })
                              }),
                              e.jsxs(c, {
                                md: 12,
                                className: 'mb-2',
                                children: [
                                  e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลการทดสอบ' }),
                                  e.jsx('div', {
                                    style: { width: '100%' },
                                    children: e.jsx(Ne, {
                                      rows: ne(s.sample_submission_details),
                                      columns: ie,
                                      pageSize: 5,
                                      rowsPerPageOptions: [5, 10, 20],
                                      pagination: !0,
                                      disableSelectionOnClick: !0,
                                      hideFooterSelectedRowCount: !0
                                    })
                                  })
                                ]
                              }),
                              e.jsx(c, {
                                children: e.jsx(ke, { submissionId: s.submission_id, handleTracking: le, trackingData: s.sample_tracking })
                              })
                            ]
                          }),
                          n < r.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                        ]
                      },
                      n
                    );
                  }),
                  v &&
                    !R &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx('h5', { children: 'ข้อมูลใบเสนอราคา' }),
                        e.jsx(c, {
                          md: 12,
                          className: 'mb-3',
                          children: e.jsx(p, {
                            variant: 'outline-primary',
                            onClick: h,
                            disabled: o,
                            style: { minWidth: '150px' },
                            children: o
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(O, {
                                      as: 'span',
                                      animation: 'border',
                                      size: 'sm',
                                      role: 'status',
                                      'aria-hidden': 'true',
                                      className: 'me-2'
                                    }),
                                    'กำลังดาวน์โหลด...'
                                  ]
                                })
                              : e.jsxs(e.Fragment, { children: [e.jsx('i', { className: 'feather icon-download' }), 'ดาวน์โหลดเอกสาร'] })
                          })
                        })
                      ]
                    }),
                  a >= 6 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx('h5', { children: 'ผลการทดสอบ' }),
                        e.jsx(c, {
                          md: 12,
                          className: 'mb-3',
                          children: e.jsx(p, {
                            variant: 'outline-primary',
                            onClick: () => {},
                            disabled: o,
                            style: { minWidth: '150px' },
                            children: o
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(O, {
                                      as: 'span',
                                      animation: 'border',
                                      size: 'sm',
                                      role: 'status',
                                      'aria-hidden': 'true',
                                      className: 'me-2'
                                    }),
                                    'กำลังดาวน์โหลด...'
                                  ]
                                })
                              : e.jsxs(e.Fragment, { children: [e.jsx('i', { className: 'feather icon-download' }), 'ดาวน์โหลดทดสอบ'] })
                          })
                        })
                      ]
                    })
                ]
              })
            ]
          }),
          e.jsxs(D.Footer, {
            className: 'text-start',
            children: [
              e.jsxs(p, { variant: 'primary', onClick: () => ce(y), children: [e.jsx(W, { style: { marginRight: 8 } }), 'แก้ไขข้อมูล'] }),
              e.jsxs(p, {
                variant: 'danger',
                onClick: () => b('/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  ve = {
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
  Me = () => e.jsx(ye, { data: ve, title: 'รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ย' });
export { Me as default };
