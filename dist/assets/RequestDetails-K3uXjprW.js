import { r as n, j as e, B as N, R as G, C as x, F as ue, m as ve, y as ee, u as he, a as Ne, n as we } from './index-Bq0BSIrC.js';
import { a as xe, b as Ce } from './serviceRequest-BNwVWIYi.js';
import { A as Fe, a as Te, E as De, b as qe, g as Ae, S as te, c as se, d as ae, e as Ee } from './ExpandMore-Db26wRVx.js';
import { g as _e } from './packageingTypeRequest-CUTcv2jf.js';
import { g as ge } from './fertilizerTypesRequest-CzftO6V-.js';
import { M as y } from './Modal-CjqQnpwU.js';
import { A as ie } from './Alert-C8ltoKJ3.js';
import { F as o } from './Form-C1nYDdO8.js';
import { T as je } from './Table-d-SvDQb0.js';
import { c as re, d as ne, a as $, F as ce } from './formik.esm-BOpZLvMI.js';
import { h as oe } from './uploadFileRequest-CHVQkj-t.js';
import { F as le, I as de, d as Le, p as ze, a as Re } from './FirebaseImage-CdSOeEuY.js';
import { B as M } from './Badge-D-xOYCqC.js';
import { B as Ie } from './ButtonGroup-bg4r2ah8.js';
import { C as A } from './Card-C7kDYjR9.js';
import { D as Be } from './DataGrid-CHhOcfGb.js';
import './DefaultPropsProvider-CMzRgkCO.js';
import './emotion-element-f0de968e.browser.esm-xSVEHtue.js';
import './TextField-BqqrABCd.js';
import './toPropertyKey-KGmwFxs9.js';
import './Transition-DABJrq3x.js';
import './setPrototypeOf-DgZC2w_0.js';
import './CloseButton-DJdHSP0V.js';
import './Divider-31lZdKBP.js';
const Pe = ({ service: d }) => {
    const [E, g] = n.useState(!1),
      [_, C] = n.useState(''),
      [w, S] = n.useState([]);
    console.log('service :', d);
    const L = (a) => {
        const r = a.target.value;
        C(r), S([]);
      },
      [k, f] = n.useState([]),
      [z, H] = n.useState(0),
      R = () => {
        const a = k.reduce((J, O) => J + O.price * O.quantity, 0),
          r = a * (z / 100),
          m = a - r,
          j = m * 0.07,
          Y = m + j;
        return { totalAmount: a, discountAmount: r, netTotal: m, vatAmount: j, grandTotal: Y };
      },
      { totalAmount: I, discountAmount: v, netTotal: F, vatAmount: T, grandTotal: t } = R(),
      s = (a) => {
        console.log('item:', a), console.log('item:', k);
        const r = k.find((j) => j.test_item_id === a.test_item_id);
        let m;
        r ? (m = k.filter((j) => j.test_item_id !== a.test_item_id)) : (m = [...k, { ...a }]), console.log(m), f(m);
      },
      i = (a) => {
        S((r) => (r.includes(a) ? r.filter((m) => m !== a) : [...r, a]));
      },
      c =
        d != null && d.sample_submissions && Array.isArray(d.sample_submissions)
          ? d.sample_submissions.find((a) => a.submission_id === parseInt(_))
          : null,
      u = (a) => {
        var m;
        return (m = d.test_items_for_quotation.find((j) => j.test_item_id === a)) == null ? void 0 : m.name_for_quotation;
      },
      p = () => {
        if (!c || w.length === 0) {
          alert('กรุณาเลือก Sample Submission และอย่างน้อยหนึ่งรายการทดสอบ');
          return;
        }
        let a = [];
        const r = new Date();
        r.setDate(r.getDate() + 30),
          d.customer_id,
          d.request_id,
          r.toISOString().split('T')[0],
          parseFloat(I.toFixed(2)),
          parseFloat(z.toFixed(2)),
          parseFloat(v.toFixed(2)),
          parseFloat(F.toFixed(2)),
          parseFloat(T.toFixed(2)),
          parseFloat(t.toFixed(2)),
          createdBy,
          quotationTypeId;
        const m = { submission_id: _, status: 'pending_test', notes: 'รอทดสอบบางรายการ' };
        a.push({ ...m, id: a.length + 1 }),
          console.log('newSampleStatus:', a),
          console.log('selectedItems:', k),
          console.log('Selected Submission:', c),
          console.log('Selected Details:', w),
          g(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(N, { variant: 'success', onClick: () => g(!0), disabled: !d || !d.sample_submissions, children: 'เลือกรายการทดสอบ' }),
        e.jsxs(y, {
          show: E,
          onHide: () => {
            g(!1), S([]);
          },
          size: 'lg',
          centered: !0,
          children: [
            e.jsx(y.Header, { closeButton: !0, children: e.jsx('h5', { className: 'mb-0', children: 'เลือกทดสอบบางรายการ' }) }),
            e.jsx(y.Body, {
              children:
                !d || !d.sample_submissions || !Array.isArray(d.sample_submissions)
                  ? e.jsx(ie, { variant: 'warning', children: 'ไม่มีข้อมูล Sample Submissions ให้เลือก' })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(G, {
                          className: 'mb-3',
                          children: e.jsx(x, {
                            children: e.jsxs(o.Group, {
                              controlId: 'submissionSelect',
                              children: [
                                e.jsx(o.Label, { className: 'text-dark', children: 'เลือกตัวอย่างปุ๋ย' }),
                                e.jsxs(o.Select, {
                                  value: _,
                                  onChange: L,
                                  children: [
                                    e.jsx('option', { children: 'เลือกตัวอย่างปุ๋ย' }),
                                    d.sample_submissions.map((a) =>
                                      e.jsxs(
                                        'option',
                                        { value: a.submission_id, children: [a.common_name, ' (', a.fertilizer_formula, ')'] },
                                        a.submission_id
                                      )
                                    )
                                  ]
                                })
                              ]
                            })
                          })
                        }),
                        _ && !c
                          ? e.jsx(ie, { variant: 'danger', children: 'ไม่พบข้อมูล Sample Submission ที่เลือก' })
                          : c &&
                            e.jsx(G, {
                              className: 'mb-3',
                              children: e.jsxs(x, {
                                children: [
                                  e.jsx(o.Label, { className: 'text-dark', children: 'รายการทดสอบ' }),
                                  e.jsxs(je, {
                                    bordered: !0,
                                    hover: !0,
                                    children: [
                                      e.jsx('thead', {
                                        children: e.jsxs('tr', {
                                          children: [
                                            e.jsx('th', { style: { width: '50px' }, className: 'text-center', children: 'เลือก' }),
                                            e.jsx('th', { className: 'text-center', children: 'Code' }),
                                            e.jsx('th', { children: 'ชื่อการทดสอบ' }),
                                            e.jsx('th', { className: 'text-center', children: 'เปอเซ็นต์' })
                                          ]
                                        })
                                      }),
                                      e.jsx('tbody', {
                                        children:
                                          c.sample_submission_details && Array.isArray(c.sample_submission_details)
                                            ? c.sample_submission_details.map((a) =>
                                                e.jsxs(
                                                  'tr',
                                                  {
                                                    children: [
                                                      e.jsx('td', {
                                                        className: 'text-center',
                                                        children: e.jsx(o.Check, {
                                                          type: 'checkbox',
                                                          checked: w.includes(a.detail_id),
                                                          onChange: () => {
                                                            i(a.detail_id),
                                                              s(d.test_items_for_quotation.find((r) => r.test_item_id === a.test_item_id));
                                                          }
                                                        })
                                                      }),
                                                      e.jsx('td', { className: 'text-center', children: a.test_code }),
                                                      e.jsx('td', { children: u(a.test_item_id) }),
                                                      e.jsx('td', {
                                                        className: 'text-center',
                                                        children: a.test_percentage ? a.test_percentage + '  %' : '-'
                                                      })
                                                    ]
                                                  },
                                                  a.detail_id
                                                )
                                              )
                                            : e.jsx('tr', { children: e.jsx('td', { colSpan: 4, children: 'ไม่มีรายการทดสอบ' }) })
                                      })
                                    ]
                                  })
                                ]
                              })
                            })
                      ]
                    })
            }),
            e.jsxs(y.Footer, {
              children: [
                e.jsx(N, { variant: 'success', onClick: p, disabled: !_ || w.length === 0, children: 'บันทึก' }),
                e.jsx(N, {
                  variant: 'secondary',
                  onClick: () => {
                    g(!1), S([]);
                  },
                  children: 'ยกเลิก'
                })
              ]
            })
          ]
        })
      ]
    });
  },
  He = ({ submissionId: d, handleTracking: E, trackingData: g }) => {
    const [_, C] = n.useState(!1),
      [w, S] = n.useState(!1),
      [L, k] = n.useState(g),
      [f, z] = n.useState(null),
      H = re({
        carrier_name: $().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: $().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: ne().required('กรุณาอัปโหลดหลักฐานการส่ง')
      }),
      R = re({
        carrier_name: $().required('กรุณาเลือกผู้ให้บริการจัดส่ง'),
        tracking_number: $().required('กรุณากรอกหมายเลข Tracking'),
        proof_image: ne().nullable()
      }),
      I = { carrier_name: '', tracking_number: '', proof_image: null, status: 'received' },
      v = async (s, { setSubmitting: i, resetForm: c, setErrors: u }) => {
        try {
          const a = (await oe([s.proof_image], 'proof_images', 'proof_'))[0].fileName,
            r = { submission_id: d, tracking_number: s.tracking_number, carrier_name: s.carrier_name, status: s.status, proof_image: a },
            m = await ze(r);
          k((j) => [
            ...j,
            { id: m.id || Date.now(), carrier_name: s.carrier_name, tracking_number: s.tracking_number, proof_image: a, status: 'received' }
          ]),
            E(!0),
            C(!1),
            c();
        } catch (p) {
          console.error('Error saving tracking data:', p), u({ submit: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่' }), i(!1);
        }
      },
      F = async (s, { setSubmitting: i, setErrors: c }) => {
        try {
          let u = f.proof_image;
          s.proof_image && (u = (await oe([s.proof_image], 'proof_images', 'proof_'))[0].fileName);
          const p = {
            submission_id: d,
            tracking_number: s.tracking_number,
            carrier_name: s.carrier_name,
            status: s.status || f.status,
            proof_image: u
          };
          await Re(f.tracking_id, p), k((a) => a.map((r) => (r.id === f.tracking_id ? { ...r, ...p } : r))), E(!0), S(!1);
        } catch (u) {
          console.error('Error updating tracking data:', u), c({ submit: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูล กรุณาลองใหม่' }), i(!1);
        }
      },
      T = (s) => {
        const i = L.find((c) => c.tracking_id === s);
        z(i), S(!0);
      },
      t = async (s) => {
        if (window.confirm('คุณต้องการลบข้อมูลการจัดส่งตัวอย่าง หรือไม่?'))
          try {
            Le(s).then(() => {
              ee.success('ลบข้อมูลการจัดส่งตัวอย่างสำเร็จ!', { autoClose: 3e3 }), getServiceRequests(user.user_id);
            });
          } catch {
            ee.error('ลบข้อมูลการจัดส่งตัวอย่างไม่สำเร็จ!', { autoClose: 3e3 });
          }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('h6', { className: 'mb-3 mt-3', children: 'ข้อมูลการจัดส่งตัวอย่าง' }),
        e.jsxs(je, {
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
              children: L.map((s, i) =>
                e.jsxs(
                  'tr',
                  {
                    children: [
                      e.jsx('td', { className: 'text-center', children: i + 1 }),
                      e.jsx('td', { children: s.carrier_name }),
                      e.jsx('td', { children: s.tracking_number }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(M, {
                          bg:
                            s.status === 'received'
                              ? 'secondary'
                              : s.status === 'in_processing'
                                ? 'warning'
                                : s.status === 'completed'
                                  ? 'primary'
                                  : 'success',
                          children:
                            s.status === 'received'
                              ? 'ดำเนินการจัดส่ง'
                              : s.status === 'in_processing'
                                ? 'กำลังตรวจสอบ/ทดสอบ'
                                : s.status === 'completed'
                                  ? 'ทดสอบเสร็จสิ้น'
                                  : 'จัดส่งสำเร็จ'
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsx(le, {
                          imagePath: s.proof_image,
                          alt: `Proof for ${s.tracking_number}`,
                          style: { maxHeight: '100px' },
                          thumbnail: !0
                        })
                      }),
                      e.jsx('td', {
                        className: 'text-center',
                        children: e.jsxs(Ie, {
                          children: [
                            e.jsx(N, { variant: 'info', size: 'sm', onClick: () => T(s.tracking_id), children: e.jsx(ue, {}) }),
                            e.jsx(N, { variant: 'danger', size: 'sm', onClick: () => t(s.tracking_id), children: e.jsx(ve, {}) })
                          ]
                        })
                      })
                    ]
                  },
                  `${s.tracking_number}-${i}`
                )
              )
            })
          ]
        }),
        e.jsx(N, { variant: 'primary', onClick: () => C(!0), children: 'เพิ่มข้อมูลการจัดส่ง' }),
        e.jsxs(y, {
          show: _,
          onHide: () => C(!1),
          centered: !0,
          children: [
            e.jsx(y.Header, {
              closeButton: !0,
              children: e.jsx(y.Title, { children: e.jsx('h5', { children: 'รายละเอียดการจัดส่งตัวอย่าง' }) })
            }),
            e.jsx(ce, {
              initialValues: I,
              validationSchema: H,
              onSubmit: v,
              children: ({
                values: s,
                errors: i,
                touched: c,
                handleChange: u,
                handleBlur: p,
                handleSubmit: a,
                setFieldValue: r,
                isSubmitting: m
              }) =>
                e.jsxs(o, {
                  onSubmit: a,
                  children: [
                    e.jsxs(y.Body, {
                      children: [
                        i.submit && e.jsx('div', { className: 'text-danger mb-3', children: i.submit }),
                        e.jsxs(o.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(o.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                            e.jsxs(o.Select, {
                              name: 'carrier_name',
                              value: s.carrier_name,
                              onChange: u,
                              onBlur: p,
                              isInvalid: c.carrier_name && !!i.carrier_name,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                e.jsx('option', { value: 'DHL', children: 'DHL' })
                              ]
                            }),
                            e.jsx(o.Control.Feedback, { type: 'invalid', children: i.carrier_name })
                          ]
                        }),
                        e.jsxs(o.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(o.Label, { children: 'หมายเลข Tracking' }),
                            e.jsx(o.Control, {
                              type: 'text',
                              name: 'tracking_number',
                              placeholder: 'กรอกหมายเลข Tracking',
                              value: s.tracking_number,
                              onChange: u,
                              onBlur: p,
                              isInvalid: c.tracking_number && !!i.tracking_number
                            }),
                            e.jsx(o.Control.Feedback, { type: 'invalid', children: i.tracking_number })
                          ]
                        }),
                        e.jsxs(o.Group, {
                          className: 'mb-3',
                          children: [
                            e.jsx(o.Label, { children: 'หลักฐานการส่ง' }),
                            e.jsx(o.Control, {
                              type: 'file',
                              accept: 'image/*',
                              onChange: (j) => r('proof_image', j.target.files[0]),
                              isInvalid: c.proof_image && !!i.proof_image
                            }),
                            s.proof_image &&
                              e.jsx('div', {
                                className: 'mt-3',
                                children: e.jsx(de, {
                                  src: URL.createObjectURL(s.proof_image),
                                  alt: 'Proof',
                                  thumbnail: !0,
                                  style: { maxHeight: '200px' }
                                })
                              }),
                            e.jsx(o.Control.Feedback, { type: 'invalid', children: i.proof_image })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(y.Footer, {
                      children: [
                        e.jsx(N, { variant: 'success', type: 'submit', disabled: m, children: 'บันทึก' }),
                        e.jsx(N, { variant: 'secondary', onClick: () => C(!1), disabled: m, children: 'ยกเลิก' })
                      ]
                    })
                  ]
                })
            })
          ]
        }),
        f &&
          e.jsxs(y, {
            show: w,
            onHide: () => S(!1),
            centered: !0,
            children: [
              e.jsx(y.Header, {
                closeButton: !0,
                children: e.jsx(y.Title, { children: e.jsx('h5', { children: 'แก้ไขรายละเอียดการจัดส่งตัวอย่าง' }) })
              }),
              e.jsx(ce, {
                initialValues: { carrier_name: f.carrier_name, tracking_number: f.tracking_number, proof_image: null, status: f.status },
                validationSchema: R,
                onSubmit: F,
                children: ({
                  values: s,
                  errors: i,
                  touched: c,
                  handleChange: u,
                  handleBlur: p,
                  handleSubmit: a,
                  setFieldValue: r,
                  isSubmitting: m
                }) =>
                  e.jsxs(o, {
                    onSubmit: a,
                    children: [
                      e.jsxs(y.Body, {
                        children: [
                          i.submit && e.jsx('div', { className: 'text-danger mb-3', children: i.submit }),
                          e.jsxs(o.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(o.Label, { children: 'ผู้ให้บริการจัดส่ง' }),
                              e.jsxs(o.Select, {
                                name: 'carrier_name',
                                value: s.carrier_name,
                                onChange: u,
                                onBlur: p,
                                isInvalid: c.carrier_name && !!i.carrier_name,
                                children: [
                                  e.jsx('option', { value: '', children: 'เลือกผู้ให้บริการจัดส่ง' }),
                                  e.jsx('option', { value: 'ไปรษณีย์ไทย', children: 'ไปรษณีย์ไทย' }),
                                  e.jsx('option', { value: 'Kerry Express', children: 'Kerry Express' }),
                                  e.jsx('option', { value: 'J&T Express', children: 'J&T Express' }),
                                  e.jsx('option', { value: 'DHL', children: 'DHL' })
                                ]
                              }),
                              e.jsx(o.Control.Feedback, { type: 'invalid', children: i.carrier_name })
                            ]
                          }),
                          e.jsxs(o.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(o.Label, { children: 'หมายเลข Tracking' }),
                              e.jsx(o.Control, {
                                type: 'text',
                                name: 'tracking_number',
                                placeholder: 'กรอกหมายเลข Tracking',
                                value: s.tracking_number,
                                onChange: u,
                                onBlur: p,
                                isInvalid: c.tracking_number && !!i.tracking_number
                              }),
                              e.jsx(o.Control.Feedback, { type: 'invalid', children: i.tracking_number })
                            ]
                          }),
                          e.jsxs(o.Group, {
                            className: 'mb-3',
                            children: [
                              e.jsx(o.Label, { children: 'หลักฐานการส่ง (ถ้าต้องการเปลี่ยน)' }),
                              e.jsx(o.Control, {
                                type: 'file',
                                accept: 'image/*',
                                onChange: (j) => r('proof_image', j.target.files[0]),
                                isInvalid: c.proof_image && !!i.proof_image
                              }),
                              e.jsx('div', {
                                className: 'mt-3',
                                children: s.proof_image
                                  ? e.jsx(de, {
                                      src: URL.createObjectURL(s.proof_image),
                                      alt: 'New Proof',
                                      thumbnail: !0,
                                      style: { maxHeight: '200px' }
                                    })
                                  : e.jsx(le, {
                                      imagePath: f.proof_image,
                                      alt: 'Current Proof',
                                      style: { maxHeight: '200px' },
                                      thumbnail: !0
                                    })
                              }),
                              e.jsx(o.Control.Feedback, { type: 'invalid', children: i.proof_image })
                            ]
                          })
                        ]
                      }),
                      e.jsxs(y.Footer, {
                        children: [
                          e.jsx(N, { variant: 'success', type: 'submit', disabled: m, children: 'บันทึกการแก้ไข' }),
                          e.jsx(N, { variant: 'secondary', onClick: () => S(!1), disabled: m, children: 'ยกเลิก' })
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
  me = ({ serviceId: d, handleReload: E }) => {
    he();
    const g = [
      { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
      { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
      { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
      { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
    ];
    n.useEffect(() => {
      d && L(d);
    }, [d]);
    const [_, C] = n.useState({}),
      [w, S] = n.useState([]),
      L = async (t) => {
        const s = await xe(t);
        S(s.sample_submissions), C(s);
      },
      [k, f] = n.useState([]);
    n.useEffect(() => {
      z(), I();
    }, []);
    const z = async () => {
        const t = await _e();
        f(t);
      },
      [H, R] = n.useState([]),
      I = async () => {
        try {
          const t = await ge();
          R(t);
        } catch (t) {
          console.log(t);
        }
      },
      v = (t, s) => {
        const i = Object.keys(t).find((u) => t[u] === 1),
          c = s.find((u) => u.value === i);
        return c ? c.label : null;
      },
      F = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (t) => {
            if (!t || !t.row) return '-';
            const { test_code: s, test_percentage: i } = t.row;
            return `${s || ''}${i ? ` (${i})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (t) =>
            e.jsx(M, {
              pill: !0,
              bg: t.row.status === 'pending' ? 'warning' : t.row.status === 'rejected' ? 'danger' : 'success',
              children: t.row.status === 'pending' ? 'รออนุมัติ' : t.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
            })
        },
        {
          field: 'test_value',
          headerName: 'ผลที่ได้',
          flex: 1,
          renderCell: (t) => {
            var s;
            return ((s = t == null ? void 0 : t.row) == null ? void 0 : s.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (t) => {
            var s;
            return ((s = t == null ? void 0 : t.row) == null ? void 0 : s.created_at) || '-';
          }
        }
      ],
      T = (t) => t.map((i, c) => ({ id: i.detail_id, no: c + 1, ...i }));
    return e.jsx('div', {
      children: e.jsx(A, {
        style: { borderRadius: 10, marginBottom: 0 },
        children: e.jsxs(A.Body, {
          style: { paddingBottom: 20, paddingTop: 20 },
          children: [
            e.jsxs(G, {
              children: [
                _.request_no &&
                  e.jsx(x, {
                    md: 12,
                    children: e.jsxs('h5', {
                      className: 'mb-4',
                      children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: _.request_no })]
                    })
                  }),
                e.jsx(x, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                e.jsx(x, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: _.customer_name })]
                  })
                }),
                e.jsx(x, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: [
                      'ประเภทคำขอ :',
                      e.jsx('strong', {
                        className: 'text-dark',
                        children: _.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'
                      })
                    ]
                  })
                }),
                e.jsx(x, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: _.notes })]
                  })
                })
              ]
            }),
            e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
            w.map((t, s) => {
              var i, c;
              return e.jsx(e.Fragment, {
                children: e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(
                      G,
                      {
                        children: e.jsxs(x, {
                          md: 12,
                          className: 'ms-2 ps-0 pe-0',
                          style: { border: '1px solid #f8f9fa' },
                          children: [
                            e.jsxs(Fe, {
                              className: 'mb-0',
                              sx: { boxShadow: 'none' },
                              children: [
                                e.jsx(Te, {
                                  expandIcon: e.jsx(De, {}),
                                  'aria-controls': `panel${s}-content`,
                                  id: `panel${s}-header`,
                                  sx: { backgroundColor: '#f8f9fa', borderRadius: 0 },
                                  children: e.jsxs('p', {
                                    className: 'mb-0',
                                    children: [
                                      'ตัวอย่างที่ ',
                                      s + 1,
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
                                      e.jsx(M, {
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
                                e.jsx(qe, {
                                  className: 'pb-0',
                                  children: e.jsxs(G, {
                                    children: [
                                      e.jsx(x, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: ['ประเภทของปุ๋ย :', ' ', e.jsx('strong', { className: 'text-dark', children: v(t, g) })]
                                        })
                                      }),
                                      e.jsx(x, {
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
                                                ((i = H.find((u) => u.fertilizer_type_id === t.fertilizer_type_id)) == null
                                                  ? void 0
                                                  : i.fertilizer_type_name) || '-'
                                            })
                                          ]
                                        })
                                      }),
                                      e.jsx(x, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: t.color || '-' })]
                                        })
                                      }),
                                      e.jsx(x, {
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
                                                ((c = k.find((u) => u.packaging_type_id === t.packaging_id)) == null
                                                  ? void 0
                                                  : c.packaging_type_name) || '-'
                                            })
                                          ]
                                        })
                                      }),
                                      e.jsx(x, {
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
                                      e.jsx(x, {
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
                                      e.jsx(x, {
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
                                      e.jsx(x, {
                                        md: 6,
                                        className: 'mb-0',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: [
                                            'สถานะ :',
                                            e.jsx(M, {
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
                                      e.jsxs(x, {
                                        md: 12,
                                        className: 'mb-2',
                                        children: [
                                          e.jsx('h6', { className: 'mb-3', children: 'รายการทดสอบ' }),
                                          e.jsx('div', {
                                            style: { width: '100%' },
                                            children: e.jsx(Be, {
                                              rows: T(t.sample_submission_details),
                                              columns: F,
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
                            e.jsx(x, {
                              style: { padding: '0 16px 16px' },
                              children: e.jsx(x, {
                                children: e.jsx(He, { submissionId: t.submission_id, handleTracking: E, trackingData: t.sample_tracking })
                              })
                            })
                          ]
                        })
                      },
                      `Accordion-${s}`
                    ),
                    s < w.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                  ]
                })
              });
            })
          ]
        })
      })
    });
  },
  Ge = ({ title: d }) => {
    var W;
    const g = ((W = Ne().state) == null ? void 0 : W.id) || null;
    console.log('id', g);
    const _ = he(),
      [C, w] = n.useState(2),
      [S, L] = n.useState(!1),
      [k, f] = n.useState(!1),
      [z, H] = n.useState(!1),
      [R, I] = n.useState(!1),
      [v, F] = n.useState('horizontal'),
      [T, t] = n.useState(0),
      [s, i] = n.useState(!0);
    n.useEffect(() => {
      g ? j(g) : _('/request/');
    }, [g, _]);
    const [c, u] = n.useState({}),
      [p, a] = n.useState([]),
      [r, m] = n.useState({}),
      j = async (l) => {
        try {
          i(!0);
          const h = await xe(l),
            b = await Ce(l);
          a(h.sample_submissions || []), m(b || {}), u(h), Y(h, b);
        } catch (h) {
          console.error('Error fetching service request:', h);
        } finally {
          i(!1);
        }
      },
      Y = (l, h) => {
        const b = l.sample_submissions || [],
          B = h.request_status_tracking && h.request_status_tracking.length > 0 ? h.request_status_tracking[0] : {};
        for (let D = 0; D < U.length; D++)
          if (K(D, b, B)) t(D + 1);
          else {
            t(D);
            break;
          }
      };
    n.useEffect(() => {
      const l = () => {
        window.innerWidth <= 768 ? F('vertical') : F('horizontal');
      };
      return l(), window.addEventListener('resize', l), () => window.removeEventListener('resize', l);
    }, []);
    const [J, O] = n.useState(!1),
      [$e, pe] = n.useState([]),
      [Me, Q] = n.useState([]);
    n.useEffect(() => {
      be(), fe(), Se();
    }, []);
    const be = async () => {
        const l = await _e();
        pe(l);
      },
      fe = async () => {
        try {
          const l = await Ae();
          Q(l);
        } catch (l) {
          console.error('Error fetching test items:', l), Q([]);
        }
      },
      [Ye, ye] = n.useState([]),
      Se = async () => {
        try {
          const l = await ge();
          ye(l);
        } catch (l) {
          console.log(l);
        }
      },
      ke = (l) => {
        _('/request/edit/', { state: { id: l } });
      },
      V = (l) => {
        l && j(g);
      },
      U = [
        { label: 'การขอรับบริการ', status: 'delivered_to_lab' },
        { label: 'ส่งตัวอย่าง', status: 'received' },
        { label: 'รับตัวอย่างเข้าระบบ', status: 'received_in_system' },
        { label: 'ตรวจสอบข้อมูล', status: 'verification_status' },
        { label: 'ออกใบเสนอราคา', status: 'quotation_issued' },
        { label: 'ออก Invoice', status: 'invoice_requested' },
        { label: 'ชำระเงิน', status: 'payment_received' }
      ],
      K = (l, h, b) => {
        var D, X;
        const B = h.length;
        switch (l) {
          case 0:
            return !0;
          case 1:
            if (B === 0) return !1;
            if (B === 1) {
              const q = h[0].sample_tracking;
              return q && q.length > 0 && ((D = q[0]) == null ? void 0 : D.status);
            }
            return h.every((q) => {
              const P = q.sample_tracking;
              return P && P.length > 0 && P.some((Z) => Z.submission_id === q.submission_id && Z.status);
            });
          case 2:
            return b.received_in_system === 'yes';
          case 3:
            return B === 0
              ? !1
              : B === 1
                ? r.verification_status && ((X = r.verification_status[0]) == null ? void 0 : X.status) === 'Yes'
                : !r.verification_status || !Array.isArray(r.verification_status)
                  ? !1
                  : h.every((q) => r.verification_status.some((P) => P.submission_id === q.submission_id && P.status === 'Yes'));
          case 4:
            return b.quotation_issued === 'yes';
          case 5:
            return b.invoice_requested === 'yes';
          case 6:
            return b.payment_received === 'yes';
          default:
            return !1;
        }
      };
    return e.jsx('div', {
      children: e.jsxs(A, {
        children: [
          e.jsx(A.Header, { children: e.jsx('h5', { children: d }) }),
          e.jsx(A.Body, {
            children: e.jsx('div', {
              children: s
                ? e.jsxs('div', {
                    className: 'text-center',
                    children: [e.jsx(we, { animation: 'border', variant: 'primary' }), e.jsx('p', { children: 'กำลังโหลดข้อมูล...' })]
                  })
                : v === 'vertical'
                  ? e.jsx(te, {
                      activeStep: T,
                      orientation: v,
                      alternativeLabel: v === 'horizontal',
                      sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                      children: U.map((l, h) => {
                        var b;
                        return e.jsxs(
                          se,
                          {
                            completed: K(h, p, ((b = r.request_status_tracking) == null ? void 0 : b[0]) || {}),
                            children: [
                              e.jsx(ae, { children: l.label }),
                              v === 'vertical' && e.jsx(Ee, { children: e.jsx(me, { serviceId: g, handleReload: V }) })
                            ]
                          },
                          h
                        );
                      })
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(A, {
                          style: { borderRadius: 10, marginBottom: 10 },
                          children: e.jsx(A.Body, {
                            style: { padding: '8px 20px 3px' },
                            children: e.jsx(te, {
                              activeStep: T,
                              orientation: v,
                              alternativeLabel: v === 'horizontal',
                              sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                              children: U.map((l, h) => {
                                var b;
                                return e.jsx(
                                  se,
                                  {
                                    completed: K(h, p, ((b = r.request_status_tracking) == null ? void 0 : b[0]) || {}),
                                    children: e.jsx(ae, { children: l.label })
                                  },
                                  h
                                );
                              })
                            })
                          })
                        }),
                        e.jsx(me, { serviceId: g, handleReload: V })
                      ]
                    })
            })
          }),
          e.jsxs(A.Footer, {
            className: 'text-start',
            children: [
              e.jsx(Pe, { service: c }),
              e.jsxs(N, { variant: 'primary', onClick: () => ke(g), children: [e.jsx(ue, { style: { marginRight: 8 } }), ' แก้ไขข้อมูล'] }),
              e.jsxs(N, {
                variant: 'danger',
                onClick: () => _('/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), ' กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  _t = () => e.jsx(Ge, { title: 'รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ย' });
export { _t as default };
