import { r as o, j as e, B as b, F as t, R as q, C as i, y as I, t as re, u as ie, v as O } from './index-DZpC_pHZ.js';
import { b as ne } from './serviceRequest-D-ZD1URS.js';
import { a as ce, b as le, g as de } from './testItemsRequest-5XlhAVBO.js';
import { c as oe, a as g, f as j, F as me } from './formik.esm-DH0jrOO4.js';
import { b as _e } from './sampleSubmissionsRequest-DYxy7UJJ.js';
import { M as k } from './Modal-DVn7-Fnl.js';
import { T as A } from './toPropertyKey-COtC2h-V.js';
import { C as w } from './Card-ZCMDsCmS.js';
import { B as D } from './Badge-EMxcGjiL.js';
import { D as pe } from './DataGrid-DlzfhZq7.js';
import './CloseButton-DgEPtGiG.js';
import './Transition-DW97tWQD.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './Divider-BV326Lun.js';
const he = ({ sampleSubmissions: G, onSubmitReview: S }) => {
    const [L, h] = o.useState(!1),
      [y, r] = o.useState(null),
      z = oe({
        is_sample_normal: j().required('กรุณาเลือกสถานะตัวอย่าง'),
        is_sample_abnormal: j().required('กรุณาเลือกสถานะตัวอย่าง'),
        sample_abnormal_desc: g().test('abnormal-desc-required', 'กรุณาระบุเหตุผลที่ตัวอย่างผิดปกติ', function (a) {
          return !this.parent.is_sample_abnormal || (a !== void 0 && a.trim() !== '');
        }),
        is_staff_ready: j().required('กรุณาเลือกสถานะบุคลากร'),
        is_staff_not_ready: j().required('กรุณาเลือกสถานะบุคลากร'),
        is_equipment_ready: j().required('กรุณาเลือกสถานะเครื่องมือ'),
        is_equipment_not_ready: j().required('กรุณาเลือกสถานะเครื่องมือ'),
        is_job_accepted: j().required('กรุณาเลือกสถานะสรุปความพร้อม'),
        is_job_rejected: j().required('กรุณาเลือกสถานะสรุปความพร้อม'),
        has_change_request: j(),
        change_agreement: g().test('change-agreement-required', 'กรุณาระบุข้อตกลงการเปลี่ยนแปลง', function (a) {
          return !this.parent.has_change_request || (a !== void 0 && a.trim() !== '');
        }),
        reviewed_by: g().test('reviewed-by-required', 'กรุณาระบุผู้ทบทวน', function (a) {
          return !this.parent.has_change_request || (a !== void 0 && a.trim() !== '');
        }),
        review_date: g().test('review-date-required', 'กรุณาระบุวันที่ทบทวน', function (a) {
          return !this.parent.has_change_request || (a !== void 0 && a.trim() !== '');
        }),
        approved_by: g().test('approved-by-required', 'กรุณาระบุผู้อนุมัติ', function (a) {
          return !this.parent.has_change_request || (a !== void 0 && a.trim() !== '');
        }),
        approved_date: g().test('approved-date-required', 'กรุณาระบุวันที่อนุมัติ', function (a) {
          return !this.parent.has_change_request || (a !== void 0 && a.trim() !== '');
        })
      }),
      N = {
        is_sample_normal: !0,
        is_sample_abnormal: !1,
        sample_abnormal_desc: '',
        is_staff_ready: !0,
        is_staff_not_ready: !1,
        is_equipment_ready: !0,
        is_equipment_not_ready: !1,
        is_job_accepted: !0,
        is_job_rejected: !1,
        has_change_request: !1,
        change_agreement: '',
        reviewed_by: '',
        review_date: '',
        approved_by: '',
        approved_date: '',
        verification_status: 'No'
      },
      R = async (a, { setSubmitting: n, setErrors: l }) => {
        try {
          await z.validate(a, { abortEarly: !1 });
          const m = {
              is_sample_normal: a.is_sample_normal ? 1 : 0,
              is_sample_abnormal: a.is_sample_abnormal,
              sample_abnormal_desc: a.sample_abnormal_desc ? 1 : 0,
              is_staff_ready: a.is_staff_ready ? 1 : 0,
              is_staff_not_ready: a.is_staff_not_ready ? 1 : 0,
              is_equipment_ready: a.is_equipment_ready ? 1 : 0,
              is_equipment_not_ready: a.is_equipment_not_ready ? 1 : 0,
              is_job_accepted: a.is_job_accepted ? 1 : 0,
              is_job_rejected: a.is_job_rejected ? 1 : 0
            },
            _ = await _e(m, G.submission_id);
          _.message === 'อัปเดตข้อมูลตัวอย่างสำเร็จ'
            ? (n(!1), h(!1), S(!0), I.success('อัปเดตข้อมูลตัวอย่างสำเร็จ!', { autoClose: 3e3 }))
            : I.error(_.message, { autoClose: 3e3 });
        } catch (m) {
          if ((I.error('Validation error:' + m, { autoClose: 3e3 }), console.error('Validation error:', m), m.name === 'ValidationError')) {
            const _ = {};
            m.inner.forEach((v) => {
              _[v.path] = v.message;
            }),
              l(_),
              r('กรุณากรอกข้อมูลให้ครบถ้วน');
          } else r('เกิดข้อผิดพลาดในการบันทึก');
          n(!1);
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(b, { variant: 'info', onClick: () => h(!0), children: [e.jsx('i', { className: 'feather icon-eye' }), ' ทบทวน'] }),
        e.jsxs(k, {
          show: L,
          onHide: () => h(!1),
          size: 'lg',
          centered: !0,
          children: [
            e.jsx(k.Header, { closeButton: !0, children: e.jsx(k.Title, { children: 'การทวนคำขอรับบริการ' }) }),
            e.jsx(me, {
              initialValues: N,
              validationSchema: z,
              onSubmit: R,
              children: ({
                values: a,
                errors: n,
                touched: l,
                handleChange: m,
                handleBlur: _,
                handleSubmit: v,
                setFieldValue: d,
                isSubmitting: p
              }) =>
                e.jsxs(t, {
                  onSubmit: v,
                  children: [
                    e.jsxs(k.Body, {
                      children: [
                        y && e.jsx('div', { className: 'text-danger mb-3', children: y }),
                        e.jsx('h6', { children: 'การทวนคำขอรับบริการ' }),
                        e.jsxs(q, {
                          className: 'ps-4 pe-4',
                          children: [
                            e.jsx(i, {
                              md: 6,
                              children: e.jsxs(t.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(t.Label, { children: 'สถานะตัวอย่าง' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(t.Check, {
                                        id: 'is_sample_normal',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_sample_normal',
                                        label: 'ปกติ',
                                        checked: a.is_sample_normal,
                                        onChange: () => {
                                          d('is_sample_normal', !0), d('is_sample_abnormal', !1), d('sample_abnormal_desc', '');
                                        },
                                        isInvalid: l.is_sample_normal && !!n.is_sample_normal
                                      }),
                                      e.jsx(t.Check, {
                                        id: 'is_sample_abnormal',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_sample_abnormal',
                                        label: 'ผิดปกติ',
                                        checked: a.is_sample_abnormal,
                                        onChange: () => {
                                          d('is_sample_normal', !1), d('is_sample_abnormal', !0);
                                        },
                                        isInvalid: l.is_sample_abnormal && !!n.is_sample_abnormal
                                      }),
                                      a.is_sample_abnormal &&
                                        e.jsx(t.Control, {
                                          className: 'mt-2',
                                          as: 'textarea',
                                          name: 'sample_abnormal_desc',
                                          placeholder: 'ระบุเหตุผลที่ผิดปกติ',
                                          value: a.sample_abnormal_desc,
                                          onChange: m,
                                          onBlur: _,
                                          isInvalid: l.sample_abnormal_desc && !!n.sample_abnormal_desc
                                        })
                                    ]
                                  }),
                                  e.jsx(t.Control.Feedback, { type: 'invalid', children: n.sample_abnormal_desc || n.is_sample_normal })
                                ]
                              })
                            }),
                            e.jsx(i, {
                              md: 6,
                              children: e.jsxs(t.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(t.Label, { children: 'สถานะบุคลากร' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(t.Check, {
                                        id: 'is_staff_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_staff_ready',
                                        label: 'พร้อมปฏิบัติงาน',
                                        checked: a.is_staff_ready,
                                        onChange: () => {
                                          d('is_staff_ready', !0), d('is_staff_not_ready', !1);
                                        },
                                        isInvalid: l.is_staff_ready && !!n.is_staff_ready
                                      }),
                                      e.jsx(t.Check, {
                                        id: 'is_staff_not_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_staff_not_ready',
                                        label: 'ไม่พร้อมปฏิบัติงาน',
                                        checked: a.is_staff_not_ready,
                                        onChange: () => {
                                          d('is_staff_ready', !1), d('is_staff_not_ready', !0);
                                        },
                                        isInvalid: l.is_staff_not_ready && !!n.is_staff_not_ready
                                      })
                                    ]
                                  }),
                                  e.jsx(t.Control.Feedback, { type: 'invalid', children: n.is_staff_ready })
                                ]
                              })
                            }),
                            e.jsx(i, {
                              md: 6,
                              children: e.jsxs(t.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(t.Label, { children: 'สถานะเครื่องมือ' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(t.Check, {
                                        id: 'is_equipment_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_equipment_ready',
                                        label: 'พร้อมใช้งาน',
                                        checked: a.is_equipment_ready,
                                        onChange: () => {
                                          d('is_equipment_ready', !0), d('is_equipment_not_ready', !1);
                                        },
                                        isInvalid: l.is_equipment_ready && !!n.is_equipment_ready
                                      }),
                                      e.jsx(t.Check, {
                                        id: 'is_equipment_not_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_equipment_not_ready',
                                        label: 'ไม่พร้อมใช้งาน',
                                        checked: a.is_equipment_not_ready,
                                        onChange: () => {
                                          d('is_equipment_ready', !1), d('is_equipment_not_ready', !0);
                                        },
                                        isInvalid: l.is_equipment_not_ready && !!n.is_equipment_not_ready
                                      })
                                    ]
                                  }),
                                  e.jsx(t.Control.Feedback, { type: 'invalid', children: n.is_equipment_ready })
                                ]
                              })
                            }),
                            e.jsx(i, {
                              md: 6,
                              children: e.jsxs(t.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(t.Label, { children: 'สรุปความพร้อม' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(t.Check, {
                                        id: 'is_job_accepted',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_job_accepted',
                                        label: 'รับงาน',
                                        checked: a.is_job_accepted,
                                        onChange: () => {
                                          d('is_job_accepted', !0), d('is_job_rejected', !1);
                                        },
                                        isInvalid: l.is_job_accepted && !!n.is_job_accepted
                                      }),
                                      e.jsx(t.Check, {
                                        id: 'is_job_rejected',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_job_rejected',
                                        label: 'ไม่รับงาน',
                                        checked: a.is_job_rejected,
                                        onChange: () => {
                                          d('is_job_accepted', !1), d('is_job_rejected', !0);
                                        },
                                        isInvalid: l.is_job_rejected && !!n.is_job_rejected
                                      })
                                    ]
                                  }),
                                  e.jsx(t.Control.Feedback, { type: 'invalid', children: n.is_job_accepted })
                                ]
                              })
                            })
                          ]
                        }),
                        e.jsx('h6', { children: 'เปลี่ยนแปลงคำขอ' }),
                        e.jsxs(q, {
                          className: 'ps-4 pe-4',
                          children: [
                            e.jsx(i, {
                              md: 12,
                              children: e.jsx(t.Group, {
                                children: e.jsx(t.Check, {
                                  id: 'has_change_request',
                                  type: 'checkbox',
                                  name: 'has_change_request',
                                  label: 'กรณีเปลี่ยนแปลงคำขอ?',
                                  checked: a.has_change_request,
                                  onChange: (T) => d('has_change_request', T.target.checked)
                                })
                              })
                            }),
                            a.has_change_request &&
                              e.jsx(i, {
                                md: 12,
                                children: e.jsxs(q, {
                                  children: [
                                    e.jsxs(i, {
                                      md: 12,
                                      className: 'mb-3',
                                      children: [
                                        e.jsx(t.Control, {
                                          className: 'mt-2',
                                          as: 'textarea',
                                          name: 'change_agreement',
                                          placeholder: 'ระบุข้อตกลงการเปลี่ยนแปลง',
                                          value: a.change_agreement,
                                          onChange: m,
                                          onBlur: _,
                                          isInvalid: l.change_agreement && !!n.change_agreement
                                        }),
                                        e.jsx(t.Control.Feedback, { type: 'invalid', children: n.change_agreement })
                                      ]
                                    }),
                                    e.jsx(i, {
                                      md: 6,
                                      children: e.jsxs(t.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(t.Label, { children: 'ผู้ทบทวน' }),
                                          e.jsx(t.Control, {
                                            type: 'text',
                                            name: 'reviewed_by',
                                            placeholder: 'ระบุผู้ทบทวน',
                                            value: a.reviewed_by,
                                            onChange: m,
                                            onBlur: _,
                                            isInvalid: l.reviewed_by && !!n.reviewed_by
                                          }),
                                          e.jsx(t.Control.Feedback, { type: 'invalid', children: n.reviewed_by })
                                        ]
                                      })
                                    }),
                                    e.jsx(i, {
                                      md: 6,
                                      children: e.jsxs(t.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(t.Label, { children: 'วันที่ทบทวน' }),
                                          e.jsx(A, {
                                            fullWidth: !0,
                                            type: 'date',
                                            name: 'review_date',
                                            value: a.review_date,
                                            onChange: m,
                                            onBlur: _,
                                            error: l.review_date && !!n.review_date,
                                            helperText: l.review_date && n.review_date
                                          })
                                        ]
                                      })
                                    }),
                                    e.jsx(i, {
                                      md: 6,
                                      children: e.jsxs(t.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(t.Label, { children: 'ผู้อนุมัติ' }),
                                          e.jsx(t.Control, {
                                            type: 'text',
                                            name: 'approved_by',
                                            placeholder: 'ระบุผู้อนุมัติ',
                                            value: a.approved_by,
                                            onChange: m,
                                            onBlur: _,
                                            isInvalid: l.approved_by && !!n.approved_by
                                          }),
                                          e.jsx(t.Control.Feedback, { type: 'invalid', children: n.approved_by })
                                        ]
                                      })
                                    }),
                                    e.jsx(i, {
                                      md: 6,
                                      children: e.jsxs(t.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(t.Label, { children: 'วันที่อนุมัติ' }),
                                          e.jsx(A, {
                                            fullWidth: !0,
                                            type: 'date',
                                            name: 'approved_date',
                                            value: a.approved_date,
                                            onChange: m,
                                            onBlur: _,
                                            error: l.approved_date && !!n.approved_date,
                                            helperText: l.approved_date && n.approved_date
                                          })
                                        ]
                                      })
                                    })
                                  ]
                                })
                              })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(k.Footer, {
                      className: 'justify-content-center',
                      children: [
                        e.jsx(b, { variant: 'danger', onClick: () => h(!1), disabled: p, children: 'ยกเลิก' }),
                        e.jsx(b, { variant: 'primary', type: 'submit', disabled: p, children: 'บันทึกการทบทวน' })
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
  xe = ({ data: G, title: S }) => {
    var M;
    const h = ((M = re().state) == null ? void 0 : M.id) || null;
    console.log('id', h);
    const y = ie(),
      [r, z] = o.useState(2),
      [N, R] = o.useState(!1),
      [a, n] = o.useState(!1),
      [l, m] = o.useState(!1),
      [_, v] = o.useState(!1),
      d = [
        { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
        { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
        { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
        { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
      ];
    o.useEffect(() => {
      h ? E(h) : y('/request/');
    }, []);
    const [p, T] = o.useState({}),
      [$, P] = o.useState([]),
      E = async (s) => {
        const c = await ne(s);
        console.log('response', c), console.log('sample_submissions', c.sample_submissions), P(c.sample_submissions), T(c);
      },
      [C, B] = o.useState(!1),
      H = () => {
        B(!0),
          Z(),
          setTimeout(() => {
            B(!1), alert('ดาวน์โหลดเอกสารสำเร็จ!');
          }, 3e3);
      },
      [W, Y] = o.useState([]),
      [fe, F] = o.useState([]);
    o.useEffect(() => {
      Q(), K(), X();
    }, []);
    const Q = async () => {
        const s = await ce();
        Y(s);
      },
      K = async () => {
        try {
          const s = await le();
          F(s);
        } catch (s) {
          console.error('Error fetching test items:', s), F([]);
        }
      },
      [J, U] = o.useState([]),
      X = async () => {
        try {
          const s = await de();
          U(s);
        } catch (s) {
          console.log(s);
        }
      },
      Z = () => {
        window.open('/request/detial/quotation', '_blank');
      },
      V = (s, c) => {
        const x = Object.keys(s).find((u) => s[u] === 1),
          f = c.find((u) => u.value === x);
        return f ? f.label : null;
      },
      ee = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (s) => {
            if (!s || !s.row) return '-';
            const { test_code: c, test_percentage: x } = s.row;
            return `${c || ''}${x ? ` (${x})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (s) =>
            e.jsx(D, {
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
            var c;
            return ((c = s == null ? void 0 : s.row) == null ? void 0 : c.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (s) => {
            var c;
            return ((c = s == null ? void 0 : s.row) == null ? void 0 : c.created_at) || '-';
          }
        }
      ],
      se = (s) => {
        const c = s.map((x, f) => ({ id: x.detail_id, no: f + 1, ...x }));
        return console.log('setData', c), c;
      },
      ae = (s) => {
        y('/request/edit/', { state: { id: s } });
      },
      te = (s) => {
        s && E(h);
      };
    return e.jsx('div', {
      children: e.jsxs(w, {
        children: [
          e.jsx(w.Header, { children: e.jsx('h5', { children: S }) }),
          e.jsxs(w.Body, {
            children: [
              e.jsx('div', {
                className: 'container',
                children: e.jsxs('ul', {
                  className: 'form-stepper form-stepper-horizontal text-center mx-auto pl-0',
                  children: [
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 1 ? 'form-stepper-active' : r > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '1',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 1 ? '1' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ตัวอย่างจัดส่งถึงแลป' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 2 ? 'form-stepper-active' : r > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '2',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 2 || r < 2 ? '2' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'รับตัวอย่างเข้าระบบ' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 3 ? 'form-stepper-active' : r > 3 || l ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 3 || r < 3 ? '3' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ทดสอบบางรายการ' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 4 ? 'form-stepper-active' : r > 4 || N ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: (r === 4 || r < 4) && N === !1 ? '4' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ออกใบเสนอราคา' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 5 ? 'form-stepper-active' : r > 5 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 5 || r < 5 ? '5' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ขอใบแจ้งหนี้' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 6 ? 'form-stepper-active' : r > 6 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 6 || r < 6 ? '6' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'รับชำระเงิน' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 7 ? 'form-stepper-active' : r > 6 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 7 || r < 7 ? '7' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'หัก ณ ที่จ่าย' })
                        ]
                      })
                    }),
                    e.jsx('li', {
                      className: `form-stepper-list text-center ${r === 8 ? 'form-stepper-active' : r > 8 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                      step: '3',
                      children: e.jsxs('a', {
                        className: 'mx-2',
                        children: [
                          e.jsx('span', {
                            className: 'form-stepper-circle',
                            children: e.jsx('span', {
                              style: { fontSize: 18 },
                              children: r === 8 || r < 8 ? '8' : e.jsx('i', { className: 'feather icon-check' })
                            })
                          }),
                          e.jsx('div', { className: 'label', children: 'ออกใบเสร็จรับเงิน' })
                        ]
                      })
                    })
                  ]
                })
              }),
              e.jsxs(q, {
                children: [
                  p.request_no &&
                    e.jsx(i, {
                      md: 12,
                      children: e.jsxs('h5', {
                        className: 'mb-4',
                        children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: p.request_no || '' })]
                      })
                    }),
                  e.jsx(i, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                  e.jsx(i, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: p.customer_name })]
                    })
                  }),
                  e.jsx(i, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: [
                        'ประเภทคำขอ :',
                        e.jsx('strong', {
                          className: 'text-dark',
                          children: p.is_quality_check_analysis === 1 ? 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' : 'วิเคราะห์ขึ้นทะเบียน'
                        })
                      ]
                    })
                  }),
                  e.jsx(i, {
                    md: 6,
                    className: 'mb-2',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: p.notes })]
                    })
                  }),
                  e.jsx(i, {
                    md: 12,
                    className: 'mb-0',
                    children: e.jsxs('p', {
                      className: 'mb-0',
                      children: [
                        'สถานะ :',
                        e.jsx(D, {
                          bg: p.status === 'pending' ? 'warning' : p.status === 'approved' ? 'success' : 'danger',
                          style: { marginLeft: 12 },
                          children: p.status === 'pending' ? ' รออนุมัติ' : p.status === 'approved' ? 'อนุมัติ' : ' ไม่อนุมัติ'
                        })
                      ]
                    })
                  }),
                  e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
                  $.map((s, c) => {
                    var x, f;
                    return e.jsxs(
                      i,
                      {
                        md: 12,
                        className: 'mb-2 p-4 pt-0 pb-0',
                        children: [
                          e.jsxs(q, {
                            children: [
                              e.jsxs('h6', {
                                children: [
                                  'ตัวอย่างที่ ',
                                  c + 1,
                                  ' สูตรปุ๋ย : ',
                                  e.jsx('strong', { className: 'text-dark', children: s.fertilizer_formula || '-' }),
                                  ' ( ชื่อสามัญ : ',
                                  e.jsx('strong', { className: 'text-dark', children: s.common_name || '-' }),
                                  ')'
                                ]
                              }),
                              e.jsx(i, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['ประเภทของปุ๋ย : ', e.jsx('strong', { className: 'text-dark', children: V(s, d) })]
                                })
                              }),
                              e.jsx(i, {
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
                                        ((x = J.find((u) => u.fertilizer_type_id === s.fertilizer_type_id)) == null
                                          ? void 0
                                          : x.fertilizer_type_name) || '-'
                                    })
                                  ]
                                })
                              }),
                              e.jsx(i, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: s.color || '-' })]
                                })
                              }),
                              e.jsx(i, {
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
                                        ((f = W.find((u) => u.packaging_type_id === s.packaging_id)) == null
                                          ? void 0
                                          : f.packaging_type_name) || '-'
                                    })
                                  ]
                                })
                              }),
                              e.jsx(i, {
                                md: 6,
                                className: 'mb-2',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: ['ชื่อการค้า : ', e.jsx('strong', { className: 'text-dark', children: s.trade_name || '-' })]
                                })
                              }),
                              e.jsx(i, {
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
                              e.jsx(i, {
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
                              e.jsx(i, {
                                md: 6,
                                className: 'mb-0',
                                children: e.jsxs('p', {
                                  className: 'mb-0',
                                  children: [
                                    'สถานะ :',
                                    e.jsx(D, {
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
                              e.jsxs(i, {
                                md: 12,
                                className: 'mb-2',
                                children: [
                                  e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลการทดสอบ' }),
                                  e.jsx('div', {
                                    style: { width: '100%' },
                                    children: e.jsx(pe, {
                                      rows: se(s.sample_submission_details),
                                      columns: ee,
                                      pageSize: 5,
                                      rowsPerPageOptions: [5, 10, 20],
                                      pagination: !0,
                                      disableSelectionOnClick: !0,
                                      hideFooterSelectedRowCount: !0
                                    })
                                  })
                                ]
                              }),
                              e.jsx(i, { md: 12, className: 'mb-3', children: e.jsx(he, { sampleSubmissions: s, onSubmitReview: te }) })
                            ]
                          }),
                          c < $.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                        ]
                      },
                      c
                    );
                  }),
                  N &&
                    !_ &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx('h5', { children: 'ข้อมูลใบเสนอราคา' }),
                        e.jsx(i, {
                          md: 12,
                          className: 'mb-3',
                          children: e.jsx(b, {
                            variant: 'outline-primary',
                            onClick: H,
                            disabled: C,
                            style: { minWidth: '150px' },
                            children: C
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
                  r >= 6 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx('h5', { children: 'ผลการทดสอบ' }),
                        e.jsx(i, {
                          md: 12,
                          className: 'mb-3',
                          children: e.jsx(b, {
                            variant: 'outline-primary',
                            onClick: () => {},
                            disabled: C,
                            style: { minWidth: '150px' },
                            children: C
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
          e.jsxs(w.Footer, {
            className: 'text-start',
            children: [
              e.jsxs(b, {
                variant: 'primary',
                onClick: () => ae(h),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'แก้ไขข้อมูล']
              }),
              e.jsxs(b, {
                variant: 'danger',
                onClick: () => y('/admin/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  je = {
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
  De = () => e.jsx(xe, { data: je, title: 'รายละเอียดข้อมูลนำส่งตัวอย่างปุ๋ย' });
export { De as default };
