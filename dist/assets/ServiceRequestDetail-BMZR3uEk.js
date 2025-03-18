import { r as c, j as e, B as T, R as w, C as n, y as D, u as Q, a as de, F as oe } from './index-Bq0BSIrC.js';
import { a as J, b as le } from './serviceRequest-BNwVWIYi.js';
import { A as _e, a as me, E as pe, b as he, g as ue, S as O, c as P, d as W, e as je } from './ExpandMore-Db26wRVx.js';
import { g as U } from './packageingTypeRequest-CUTcv2jf.js';
import { g as X } from './fertilizerTypesRequest-CzftO6V-.js';
import { c as xe, a as S, e as f, F as be } from './formik.esm-BOpZLvMI.js';
import { p as fe } from './sampleSubmissionsRequest-CTdJwuzW.js';
import { M as z } from './Modal-CjqQnpwU.js';
import { F as a } from './Form-C1nYDdO8.js';
import { T as H } from './TextField-BqqrABCd.js';
import { C as v } from './Card-C7kDYjR9.js';
import { B as A } from './Badge-D-xOYCqC.js';
import { D as ge } from './DataGrid-CHhOcfGb.js';
import './DefaultPropsProvider-CMzRgkCO.js';
import './emotion-element-f0de968e.browser.esm-xSVEHtue.js';
import './Transition-DABJrq3x.js';
import './setPrototypeOf-DgZC2w_0.js';
import './CloseButton-DJdHSP0V.js';
import './toPropertyKey-KGmwFxs9.js';
import './Divider-31lZdKBP.js';
const ye = ({ sampleSubmissions: g, onSubmitReview: L }) => {
    const [p, j] = c.useState(!1),
      [q, C] = c.useState(null),
      k = xe({
        is_sample_normal: f().required('กรุณาเลือกสถานะตัวอย่าง'),
        is_sample_abnormal: f().required('กรุณาเลือกสถานะตัวอย่าง'),
        sample_abnormal_desc: S().test('abnormal-desc-required', 'กรุณาระบุเหตุผลที่ตัวอย่างผิดปกติ', function (t) {
          return !this.parent.is_sample_abnormal || (t !== void 0 && t.trim() !== '');
        }),
        is_staff_ready: f().required('กรุณาเลือกสถานะบุคลากร'),
        is_staff_not_ready: f().required('กรุณาเลือกสถานะบุคลากร'),
        is_equipment_ready: f().required('กรุณาเลือกสถานะเครื่องมือ'),
        is_equipment_not_ready: f().required('กรุณาเลือกสถานะเครื่องมือ'),
        is_job_accepted: f().required('กรุณาเลือกสถานะสรุปความพร้อม'),
        is_job_rejected: f().required('กรุณาเลือกสถานะสรุปความพร้อม'),
        has_change_request: f(),
        change_agreement: S().test('change-agreement-required', 'กรุณาระบุข้อตกลงการเปลี่ยนแปลง', function (t) {
          return !this.parent.has_change_request || (t !== void 0 && t.trim() !== '');
        }),
        reviewed_by: S().test('reviewed-by-required', 'กรุณาระบุผู้ทบทวน', function (t) {
          return !this.parent.has_change_request || (t !== void 0 && t.trim() !== '');
        }),
        review_date: S().test('review-date-required', 'กรุณาระบุวันที่ทบทวน', function (t) {
          return !this.parent.has_change_request || (t !== void 0 && t.trim() !== '');
        }),
        approved_by: S().test('approved-by-required', 'กรุณาระบุผู้อนุมัติ', function (t) {
          return !this.parent.has_change_request || (t !== void 0 && t.trim() !== '');
        }),
        approved_date: S().test('approved-date-required', 'กรุณาระบุวันที่อนุมัติ', function (t) {
          return !this.parent.has_change_request || (t !== void 0 && t.trim() !== '');
        })
      }),
      R = {
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
      E = async (t, { setSubmitting: i, setErrors: l }) => {
        try {
          await k.validate(t, { abortEarly: !1 });
          const _ = {
              is_sample_normal: t.is_sample_normal ? 1 : 0,
              is_sample_abnormal: t.is_sample_abnormal,
              sample_abnormal_desc: t.sample_abnormal_desc ? 1 : 0,
              is_staff_ready: t.is_staff_ready ? 1 : 0,
              is_staff_not_ready: t.is_staff_not_ready ? 1 : 0,
              is_equipment_ready: t.is_equipment_ready ? 1 : 0,
              is_equipment_not_ready: t.is_equipment_not_ready ? 1 : 0,
              is_job_accepted: t.is_job_accepted ? 1 : 0,
              is_job_rejected: t.is_job_rejected ? 1 : 0
            },
            m = await fe(_, g.submission_id);
          m.message === 'อัปเดตข้อมูลตัวอย่างสำเร็จ'
            ? (i(!1), j(!1), L(!0), D.success('อัปเดตข้อมูลตัวอย่างสำเร็จ!', { autoClose: 3e3 }))
            : D.error(m.message, { autoClose: 3e3 });
        } catch (_) {
          if ((D.error('Validation error:' + _, { autoClose: 3e3 }), console.error('Validation error:', _), _.name === 'ValidationError')) {
            const m = {};
            _.inner.forEach((h) => {
              m[h.path] = h.message;
            }),
              l(m),
              C('กรุณากรอกข้อมูลให้ครบถ้วน');
          } else C('เกิดข้อผิดพลาดในการบันทึก');
          i(!1);
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(T, { variant: 'info', onClick: () => j(!0), children: [e.jsx('i', { className: 'feather icon-eye' }), ' ทบทวน'] }),
        e.jsxs(z, {
          show: p,
          onHide: () => j(!1),
          size: 'lg',
          centered: !0,
          children: [
            e.jsx(z.Header, { closeButton: !0, children: e.jsx(z.Title, { children: 'การทวนคำขอรับบริการ' }) }),
            e.jsx(be, {
              initialValues: R,
              validationSchema: k,
              onSubmit: E,
              children: ({
                values: t,
                errors: i,
                touched: l,
                handleChange: _,
                handleBlur: m,
                handleSubmit: h,
                setFieldValue: d,
                isSubmitting: N
              }) =>
                e.jsxs(a, {
                  onSubmit: h,
                  children: [
                    e.jsxs(z.Body, {
                      children: [
                        q && e.jsx('div', { className: 'text-danger mb-3', children: q }),
                        e.jsx('h6', { children: 'การทวนคำขอรับบริการ' }),
                        e.jsxs(w, {
                          className: 'ps-4 pe-4',
                          children: [
                            e.jsx(n, {
                              md: 6,
                              children: e.jsxs(a.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(a.Label, { children: 'สถานะตัวอย่าง' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(a.Check, {
                                        id: 'is_sample_normal',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_sample_normal',
                                        label: 'ปกติ',
                                        checked: t.is_sample_normal,
                                        onChange: () => {
                                          d('is_sample_normal', !0), d('is_sample_abnormal', !1), d('sample_abnormal_desc', '');
                                        },
                                        isInvalid: l.is_sample_normal && !!i.is_sample_normal
                                      }),
                                      e.jsx(a.Check, {
                                        id: 'is_sample_abnormal',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_sample_abnormal',
                                        label: 'ผิดปกติ',
                                        checked: t.is_sample_abnormal,
                                        onChange: () => {
                                          d('is_sample_normal', !1), d('is_sample_abnormal', !0);
                                        },
                                        isInvalid: l.is_sample_abnormal && !!i.is_sample_abnormal
                                      }),
                                      t.is_sample_abnormal &&
                                        e.jsx(a.Control, {
                                          className: 'mt-2',
                                          as: 'textarea',
                                          name: 'sample_abnormal_desc',
                                          placeholder: 'ระบุเหตุผลที่ผิดปกติ',
                                          value: t.sample_abnormal_desc,
                                          onChange: _,
                                          onBlur: m,
                                          isInvalid: l.sample_abnormal_desc && !!i.sample_abnormal_desc
                                        })
                                    ]
                                  }),
                                  e.jsx(a.Control.Feedback, { type: 'invalid', children: i.sample_abnormal_desc || i.is_sample_normal })
                                ]
                              })
                            }),
                            e.jsx(n, {
                              md: 6,
                              children: e.jsxs(a.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(a.Label, { children: 'สถานะบุคลากร' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(a.Check, {
                                        id: 'is_staff_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_staff_ready',
                                        label: 'พร้อมปฏิบัติงาน',
                                        checked: t.is_staff_ready,
                                        onChange: () => {
                                          d('is_staff_ready', !0), d('is_staff_not_ready', !1);
                                        },
                                        isInvalid: l.is_staff_ready && !!i.is_staff_ready
                                      }),
                                      e.jsx(a.Check, {
                                        id: 'is_staff_not_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_staff_not_ready',
                                        label: 'ไม่พร้อมปฏิบัติงาน',
                                        checked: t.is_staff_not_ready,
                                        onChange: () => {
                                          d('is_staff_ready', !1), d('is_staff_not_ready', !0);
                                        },
                                        isInvalid: l.is_staff_not_ready && !!i.is_staff_not_ready
                                      })
                                    ]
                                  }),
                                  e.jsx(a.Control.Feedback, { type: 'invalid', children: i.is_staff_ready })
                                ]
                              })
                            }),
                            e.jsx(n, {
                              md: 6,
                              children: e.jsxs(a.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(a.Label, { children: 'สถานะเครื่องมือ' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(a.Check, {
                                        id: 'is_equipment_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_equipment_ready',
                                        label: 'พร้อมใช้งาน',
                                        checked: t.is_equipment_ready,
                                        onChange: () => {
                                          d('is_equipment_ready', !0), d('is_equipment_not_ready', !1);
                                        },
                                        isInvalid: l.is_equipment_ready && !!i.is_equipment_ready
                                      }),
                                      e.jsx(a.Check, {
                                        id: 'is_equipment_not_ready',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_equipment_not_ready',
                                        label: 'ไม่พร้อมใช้งาน',
                                        checked: t.is_equipment_not_ready,
                                        onChange: () => {
                                          d('is_equipment_ready', !1), d('is_equipment_not_ready', !0);
                                        },
                                        isInvalid: l.is_equipment_not_ready && !!i.is_equipment_not_ready
                                      })
                                    ]
                                  }),
                                  e.jsx(a.Control.Feedback, { type: 'invalid', children: i.is_equipment_ready })
                                ]
                              })
                            }),
                            e.jsx(n, {
                              md: 6,
                              children: e.jsxs(a.Group, {
                                className: 'mb-3',
                                children: [
                                  e.jsx(a.Label, { children: 'สรุปความพร้อม' }),
                                  e.jsxs('div', {
                                    children: [
                                      e.jsx(a.Check, {
                                        id: 'is_job_accepted',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_job_accepted',
                                        label: 'รับงาน',
                                        checked: t.is_job_accepted,
                                        onChange: () => {
                                          d('is_job_accepted', !0), d('is_job_rejected', !1);
                                        },
                                        isInvalid: l.is_job_accepted && !!i.is_job_accepted
                                      }),
                                      e.jsx(a.Check, {
                                        id: 'is_job_rejected',
                                        inline: !0,
                                        type: 'radio',
                                        name: 'is_job_rejected',
                                        label: 'ไม่รับงาน',
                                        checked: t.is_job_rejected,
                                        onChange: () => {
                                          d('is_job_accepted', !1), d('is_job_rejected', !0);
                                        },
                                        isInvalid: l.is_job_rejected && !!i.is_job_rejected
                                      })
                                    ]
                                  }),
                                  e.jsx(a.Control.Feedback, { type: 'invalid', children: i.is_job_accepted })
                                ]
                              })
                            })
                          ]
                        }),
                        e.jsx('h6', { children: 'เปลี่ยนแปลงคำขอ' }),
                        e.jsxs(w, {
                          className: 'ps-4 pe-4',
                          children: [
                            e.jsx(n, {
                              md: 12,
                              children: e.jsx(a.Group, {
                                children: e.jsx(a.Check, {
                                  id: 'has_change_request',
                                  type: 'checkbox',
                                  name: 'has_change_request',
                                  label: 'กรณีเปลี่ยนแปลงคำขอ?',
                                  checked: t.has_change_request,
                                  onChange: (s) => d('has_change_request', s.target.checked)
                                })
                              })
                            }),
                            t.has_change_request &&
                              e.jsx(n, {
                                md: 12,
                                children: e.jsxs(w, {
                                  children: [
                                    e.jsxs(n, {
                                      md: 12,
                                      className: 'mb-3',
                                      children: [
                                        e.jsx(a.Control, {
                                          className: 'mt-2',
                                          as: 'textarea',
                                          name: 'change_agreement',
                                          placeholder: 'ระบุข้อตกลงการเปลี่ยนแปลง',
                                          value: t.change_agreement,
                                          onChange: _,
                                          onBlur: m,
                                          isInvalid: l.change_agreement && !!i.change_agreement
                                        }),
                                        e.jsx(a.Control.Feedback, { type: 'invalid', children: i.change_agreement })
                                      ]
                                    }),
                                    e.jsx(n, {
                                      md: 6,
                                      children: e.jsxs(a.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(a.Label, { children: 'ผู้ทบทวน' }),
                                          e.jsx(a.Control, {
                                            type: 'text',
                                            name: 'reviewed_by',
                                            placeholder: 'ระบุผู้ทบทวน',
                                            value: t.reviewed_by,
                                            onChange: _,
                                            onBlur: m,
                                            isInvalid: l.reviewed_by && !!i.reviewed_by
                                          }),
                                          e.jsx(a.Control.Feedback, { type: 'invalid', children: i.reviewed_by })
                                        ]
                                      })
                                    }),
                                    e.jsx(n, {
                                      md: 6,
                                      children: e.jsxs(a.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(a.Label, { children: 'วันที่ทบทวน' }),
                                          e.jsx(H, {
                                            fullWidth: !0,
                                            type: 'date',
                                            name: 'review_date',
                                            value: t.review_date,
                                            onChange: _,
                                            onBlur: m,
                                            error: l.review_date && !!i.review_date,
                                            helperText: l.review_date && i.review_date
                                          })
                                        ]
                                      })
                                    }),
                                    e.jsx(n, {
                                      md: 6,
                                      children: e.jsxs(a.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(a.Label, { children: 'ผู้อนุมัติ' }),
                                          e.jsx(a.Control, {
                                            type: 'text',
                                            name: 'approved_by',
                                            placeholder: 'ระบุผู้อนุมัติ',
                                            value: t.approved_by,
                                            onChange: _,
                                            onBlur: m,
                                            isInvalid: l.approved_by && !!i.approved_by
                                          }),
                                          e.jsx(a.Control.Feedback, { type: 'invalid', children: i.approved_by })
                                        ]
                                      })
                                    }),
                                    e.jsx(n, {
                                      md: 6,
                                      children: e.jsxs(a.Group, {
                                        className: 'mb-3',
                                        children: [
                                          e.jsx(a.Label, { children: 'วันที่อนุมัติ' }),
                                          e.jsx(H, {
                                            fullWidth: !0,
                                            type: 'date',
                                            name: 'approved_date',
                                            value: t.approved_date,
                                            onChange: _,
                                            onBlur: m,
                                            error: l.approved_date && !!i.approved_date,
                                            helperText: l.approved_date && i.approved_date
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
                    e.jsxs(z.Footer, {
                      className: 'justify-content-center',
                      children: [
                        e.jsx(T, { variant: 'danger', onClick: () => j(!1), disabled: N, children: 'ยกเลิก' }),
                        e.jsx(T, { variant: 'primary', type: 'submit', disabled: N, children: 'บันทึกการทบทวน' })
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
  K = ({ serviceId: g }) => {
    Q();
    const L = [
      { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
      { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
      { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
      { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
    ];
    c.useEffect(() => {
      g && k(g);
    }, [g]);
    const [p, j] = c.useState({}),
      [q, C] = c.useState([]),
      k = async (s) => {
        const o = await J(s);
        C(o.sample_submissions), j(o);
      },
      [R, E] = c.useState([]);
    c.useEffect(() => {
      t(), _();
    }, []);
    const t = async () => {
        const s = await U();
        E(s);
      },
      [i, l] = c.useState([]),
      _ = async () => {
        try {
          const s = await X();
          l(s);
        } catch (s) {
          console.log(s);
        }
      },
      m = (s, o) => {
        const u = Object.keys(s).find((b) => s[b] === 1),
          y = o.find((b) => b.value === u);
        return y ? y.label : null;
      },
      h = [
        { field: 'no', headerName: '#', width: 90, headerAlign: 'center', align: 'center' },
        {
          field: 'test_code',
          headerName: 'ทดสอบ',
          flex: 1,
          renderCell: (s) => {
            if (!s || !s.row) return '-';
            const { test_code: o, test_percentage: u } = s.row;
            return `${o || ''}${u ? ` (${u})` : ''}`.trim();
          }
        },
        {
          field: 'status',
          headerName: 'สถานะ',
          headerAlign: 'center',
          align: 'center',
          flex: 1,
          renderCell: (s) =>
            e.jsx(A, {
              pill: !0,
              bg: s.row.status === 'pending' ? 'warning' : s.row.status === 'rejected' ? 'danger' : 'success',
              children: s.row.status === 'pending' ? 'รออนุมัติ' : s.row.status === 'rejected' ? 'ไม่อนุมัติ' : 'อนุมัติ'
            })
        },
        {
          field: 'test_value',
          headerName: 'ผลที่ได้',
          flex: 1,
          renderCell: (s) => {
            var o;
            return ((o = s == null ? void 0 : s.row) == null ? void 0 : o.test_value) || '-';
          }
        },
        {
          field: 'test_date',
          headerName: 'วันที่ทดสอบ',
          flex: 1,
          valueGetter: (s) => {
            var o;
            return ((o = s == null ? void 0 : s.row) == null ? void 0 : o.created_at) || '-';
          }
        }
      ],
      d = (s) => s.map((u, y) => ({ id: u.detail_id, no: y + 1, ...u })),
      N = (s) => {
        s && k(g);
      };
    return e.jsx('div', {
      children: e.jsx(v, {
        style: { borderRadius: 10, marginBottom: 0 },
        children: e.jsxs(v.Body, {
          style: { paddingBottom: 20, paddingTop: 20 },
          children: [
            e.jsxs(w, {
              children: [
                p.request_no &&
                  e.jsx(n, {
                    md: 12,
                    children: e.jsxs('h5', {
                      className: 'mb-4',
                      children: ['เลขที่คำขอบริการ : ', e.jsx('span', { style: { fontSize: 18 }, children: p.request_no })]
                    })
                  }),
                e.jsx(n, { md: 12, children: e.jsx('h6', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }) }),
                e.jsx(n, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['บริษัท : ', e.jsx('strong', { className: 'text-dark', children: p.customer_name })]
                  })
                }),
                e.jsx(n, {
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
                e.jsx(n, {
                  md: 6,
                  className: 'mb-2',
                  children: e.jsxs('p', {
                    className: 'mb-0',
                    children: ['คำขอเพิ่มเติม : ', e.jsx('strong', { className: 'text-dark', children: p.notes })]
                  })
                })
              ]
            }),
            e.jsx('h6', { className: 'mt-3 mb-2', children: 'ข้อมูลตัวอย่างปุ๋ย' }),
            q.map((s, o) => {
              var u, y;
              return e.jsx(e.Fragment, {
                children: e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(
                      w,
                      {
                        children: e.jsxs(n, {
                          md: 12,
                          className: 'ms-2 ps-0 pe-0',
                          style: { border: '1px solid #f8f9fa' },
                          children: [
                            e.jsxs(_e, {
                              className: 'mb-0',
                              sx: { boxShadow: 'none' },
                              children: [
                                e.jsx(me, {
                                  expandIcon: e.jsx(pe, {}),
                                  'aria-controls': `panel${o}-content`,
                                  id: `panel${o}-header`,
                                  sx: { backgroundColor: '#f8f9fa', borderRadius: 0 },
                                  children: e.jsxs('p', {
                                    className: 'mb-0',
                                    children: [
                                      'ตัวอย่างที่ ',
                                      o + 1,
                                      ' ',
                                      s.submission_no &&
                                        e.jsxs(e.Fragment, {
                                          children: [
                                            'เลขที่ :',
                                            ' ',
                                            e.jsx('strong', {
                                              className: 'text-dark',
                                              style: { fontWeight: 'bold' },
                                              children: s.submission_no || '-'
                                            }),
                                            ' '
                                          ]
                                        }),
                                      'สูตรปุ๋ย : ',
                                      e.jsx('strong', { className: 'text-dark', children: s.fertilizer_formula || '-' }),
                                      ' ( ชื่อสามัญ :',
                                      ' ',
                                      e.jsx('strong', {
                                        className: 'text-dark',
                                        style: { fontWeight: 'bold' },
                                        children: s.common_name || '-'
                                      }),
                                      ') สถานะ :',
                                      e.jsx(A, {
                                        pill: !0,
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
                                e.jsx(he, {
                                  className: 'pb-0',
                                  children: e.jsxs(w, {
                                    children: [
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: ['ประเภทของปุ๋ย :', ' ', e.jsx('strong', { className: 'text-dark', children: m(s, L) })]
                                        })
                                      }),
                                      e.jsx(n, {
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
                                                ((u = i.find((b) => b.fertilizer_type_id === s.fertilizer_type_id)) == null
                                                  ? void 0
                                                  : u.fertilizer_type_name) || '-'
                                            })
                                          ]
                                        })
                                      }),
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: ['สี : ', e.jsx('strong', { className: 'text-dark', children: s.color || '-' })]
                                        })
                                      }),
                                      e.jsx(n, {
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
                                                ((y = R.find((b) => b.packaging_type_id === s.packaging_id)) == null
                                                  ? void 0
                                                  : y.packaging_type_name) || '-'
                                            })
                                          ]
                                        })
                                      }),
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: [
                                            'ชื่อการค้า : ',
                                            e.jsx('strong', { className: 'text-dark', children: s.trade_name || '-' })
                                          ]
                                        })
                                      }),
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: [
                                            'ผู้ผลิต (บริษัท/ห้าง/ร้าน) : ',
                                            e.jsx('strong', { className: 'text-dark', children: s.manufacturer || '-' }),
                                            ' ประเทศ :',
                                            ' ',
                                            e.jsx('strong', { className: 'text-dark', children: s.manufacturer_country || '-' })
                                          ]
                                        })
                                      }),
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-2',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: [
                                            'สั่งจาก (บริษัท/ห้าง/ร้าน) : ',
                                            e.jsx('strong', { className: 'text-dark', children: s.supplier || '-' }),
                                            ' ประเทศ :',
                                            ' ',
                                            e.jsx('strong', { className: 'text-dark', children: s.supplier_country || '-' })
                                          ]
                                        })
                                      }),
                                      e.jsx(n, {
                                        md: 6,
                                        className: 'mb-0',
                                        children: e.jsxs('p', {
                                          className: 'mb-0',
                                          children: [
                                            'สถานะ :',
                                            e.jsx(A, {
                                              pill: !0,
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
                                      e.jsxs(n, {
                                        md: 12,
                                        className: 'mb-2',
                                        children: [
                                          e.jsx('h6', { className: 'mb-3', children: 'รายการทดสอบ' }),
                                          e.jsx('div', {
                                            style: { width: '100%' },
                                            children: e.jsx(ge, {
                                              rows: d(s.sample_submission_details),
                                              columns: h,
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
                            e.jsx(n, { style: { padding: '16px 16px ' }, children: e.jsx(ye, { sampleSubmissions: s, onSubmitReview: N }) })
                          ]
                        })
                      },
                      `Accordion-${o}`
                    ),
                    o < q.length - 1 && e.jsx('hr', { className: 'mt-4 mb-2' })
                  ]
                })
              });
            })
          ]
        })
      })
    });
  },
  ve = ({ title: g }) => {
    var Y;
    const p = ((Y = de().state) == null ? void 0 : Y.id) || null,
      j = Q(),
      [q, C] = c.useState(1),
      [k, R] = c.useState(!1),
      [E, t] = c.useState(!1),
      [i, l] = c.useState(!1),
      [_, m] = c.useState(!1),
      [h, d] = c.useState('horizontal'),
      [N, s] = c.useState(0);
    c.useEffect(() => {
      const r = () => {
        window.innerWidth <= 768 ? d('vertical') : d('horizontal');
      };
      return r(), window.addEventListener('resize', r), () => window.removeEventListener('resize', r);
    }, []),
      c.useEffect(() => {
        console.log('request id :', p), p ? V(p) : j('/admin/request');
      }, [p, j]);
    const [o, u] = c.useState({}),
      [y, b] = c.useState([]),
      [G, Z] = c.useState([]),
      V = async (r) => {
        const x = await J(r),
          B = await le(r);
        if (
          (console.log('response', x),
          console.log('sample_submissions', x.sample_submissions),
          b(x.sample_submissions),
          u(x),
          B && B.request_status_tracking.length > 0)
        ) {
          const re = B.request_status_tracking[0],
            M = I.map((ce) => re[ce.status] === 'yes').lastIndexOf(!0);
          s(M >= 0 ? M + 1 : 0), Z(B);
        }
      },
      [Ne, qe] = c.useState(!1),
      [ke, ee] = c.useState([]),
      [Se, F] = c.useState([]);
    c.useEffect(() => {
      se(), te(), ie();
    }, []);
    const se = async () => {
        const r = await U();
        ee(r);
      },
      te = async () => {
        try {
          const r = await ue();
          F(r);
        } catch (r) {
          console.error('Error fetching test items:', r), F([]);
        }
      },
      [we, ae] = c.useState([]),
      ie = async () => {
        try {
          const r = await X();
          ae(r);
        } catch (r) {
          console.log(r);
        }
      },
      ne = (r) => {
        j('/request/edit/', { state: { id: r } });
      },
      I = [
        { label: 'ตัวอย่างจัดส่งถึงแลป', status: 'delivered_to_lab' },
        { label: 'รับตัวอย่างเข้าระบบ', status: 'received_in_system' },
        { label: 'ทดสอบบางรายการ', status: 'pending_test' },
        { label: 'ออกใบเสนอราคา', status: 'quotation_issued' },
        { label: 'ขอใบแจ้งหนี้', status: 'invoice_requested' },
        { label: 'รับชำระเงิน', status: 'payment_received' },
        { label: 'หัก ณ ที่จ่าย', status: 'withholding_tax_deducted' },
        { label: 'ออกใบเสร็จรับเงิน', status: 'receipt_issued' }
      ],
      $ = (r) => (
        console.log('isStepComplete :', r),
        !G.request_status_tracking || !G.request_status_tracking[0] ? !1 : G.request_status_tracking[0][I[r].status] === 'yes'
      );
    return e.jsx('div', {
      children: e.jsxs(v, {
        children: [
          e.jsx(v.Header, { children: e.jsx('h5', { children: g }) }),
          e.jsx(v.Body, {
            children: e.jsx('div', {
              children:
                h === 'vertical'
                  ? e.jsx(O, {
                      activeStep: N,
                      orientation: h,
                      alternativeLabel: h === 'horizontal',
                      sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                      children: I.map((r, x) =>
                        e.jsxs(
                          P,
                          {
                            completed: $(x),
                            children: [
                              e.jsx(W, { children: r.label }),
                              h === 'vertical' && e.jsx(je, { children: e.jsx(K, { serviceId: o.request_id }) })
                            ]
                          },
                          x
                        )
                      )
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(v, {
                          style: { borderRadius: 10, marginBottom: 10 },
                          children: e.jsx(v.Body, {
                            style: { padding: '8px 20px 3px' },
                            children: e.jsx(O, {
                              activeStep: N,
                              orientation: h,
                              alternativeLabel: h === 'horizontal',
                              sx: { width: '100%', margin: '0 auto', padding: '20px 0' },
                              children: I.map((r, x) => e.jsx(P, { completed: $(x), children: e.jsx(W, { children: r.label }) }, x))
                            })
                          })
                        }),
                        e.jsx(K, { serviceId: o.request_id })
                      ]
                    })
            })
          }),
          e.jsxs(v.Footer, {
            className: 'text-start',
            children: [
              e.jsxs(T, { variant: 'primary', onClick: () => ne(p), children: [e.jsx(oe, { style: { marginRight: 8 } }), 'แก้ไขข้อมูล'] }),
              e.jsxs(T, {
                variant: 'danger',
                onClick: () => j('/admin/request/'),
                children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), 'กลับหน้าหลัก']
              })
            ]
          })
        ]
      })
    });
  },
  Je = () => e.jsx(ve, { title: 'รายละเอียดข้อมูลการคำขอรับบริการ' });
export { Je as default };
