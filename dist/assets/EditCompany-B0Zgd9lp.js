import { r, t as $, u as E, j as e, R as p, C as d, F as n, B as f, y as C } from './index-DZpC_pHZ.js';
import { F as V, c as w, a as l } from './formik.esm-DH0jrOO4.js';
import { u as z } from './index-kdHliud_.js';
import { b as A, a as P } from './customerRequest-CwUVzGH7.js';
import { a as H } from './specialConditionsRequest-DpcGqaux.js';
import { C as x } from './Card-ZCMDsCmS.js';
import './tslib.es6-CTYbIaVE.js';
function X() {
  var b;
  const [g, N] = r.useState({}),
    [y, v] = r.useState([]),
    j = ((b = $().state) == null ? void 0 : b.company) || null;
  r.useEffect(() => {
    k();
  }, []);
  const k = () => {
      H().then((i) => {
        i && (v(i), F(i));
      });
    },
    F = async (i) => {
      var s;
      console.log('specialData:', i);
      const a = await A(j == null ? void 0 : j.id);
      (a.condition_id = (s = i.find((o) => o.description === a.special_conditions)) == null ? void 0 : s.condition_id),
        console.log('result:', a),
        N(a);
    },
    I = () =>
      w({
        company_code: l().min(3, 'รหัสบริษัทต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกรหัสบริษัท'),
        company_name: l().required('กรุณากรอกชื่อบริษัท'),
        tax_id: l()
          .matches(/^[0-9]{10,13}$/, 'เลขที่ผู้เสียภาษีต้องมี 10 ถึง 13 หลัก')
          .required('กรุณากรอกเลขที่ผู้เสียภาษี'),
        company_address: l().required('กรุณากรอกที่อยู่บริษัท'),
        document_address: l().min(3, 'ที่อยู่จัดส่งเอกสารต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกที่อยู่จัดส่งเอกสาร'),
        email: l().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
        phone: l()
          .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
          .required('กรุณากรอกเบอร์โทรศัพท์'),
        condition_id: l().required('กรุณาเลือกเงื่อนไขพิเศษ')
      }),
    S = async (i, { setErrors: a, setStatus: s, setSubmitting: o }) => {
      var c;
      try {
        i.special_conditions = (c = y.find((t) => t.condition_id === Number(i.condition_id))) == null ? void 0 : c.description;
        const m = {
          company_code: i.company_code,
          company_name: i.company_name,
          company_address: i.company_address,
          document_address: i.document_address,
          phone: i.phone,
          special_conditions: i.special_conditions
        };
        (await P(m, i.company_id)).message && (C.success('แก้ไขข้อมูลบริษัทสำเร็จ!', { autoClose: 3e3 }), h('/company'));
      } catch (m) {
        C.error(`แก้ไขข้อมูลไม่สำเร็จ: ${m.message}`, { autoClose: 3e3 }), s({ success: !1 }), a({ submit: m.message }), o(!1);
      }
    },
    h = E(),
    [L, G] = r.useState([]),
    q = r.useCallback((i) => {
      G((a) => [...a, ...i]);
    }, []),
    {
      getRootProps: B,
      getInputProps: R,
      isDragActive: u
    } = z({ onDrop: q, accept: { 'image/*': [], 'application/pdf': [] }, maxSize: 5 * 1024 * 1024 });
  return e.jsx(p, {
    className: '',
    children: e.jsxs(x, {
      children: [
        e.jsx(x.Header, {
          children: e.jsx(p, { children: e.jsx(d, { children: e.jsx(x.Title, { as: 'h5', children: 'แก้ไขข้อมูลบริษัท' }) }) })
        }),
        e.jsx(x.Body, {
          children: e.jsx(V, {
            initialValues: g,
            validationSchema: I,
            onSubmit: S,
            enableReinitialize: !0,
            children: ({ values: i, errors: a, touched: s, handleChange: o, handleBlur: c, handleSubmit: m, isSubmitting: _ }) =>
              e.jsxs(n, {
                onSubmit: m,
                children: [
                  e.jsxs(p, {
                    children: [
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'รหัสบริษัท:' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'รหัสบริษัท',
                              name: 'company_code',
                              value: i.company_code,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.company_code && !!a.company_code
                            }),
                            s.company_code && a.company_code && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.company_code })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'ชื่อบริษัท :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'ชื่อบริษัท',
                              name: 'company_name',
                              value: i.company_name,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.company_name && !!a.company_name
                            }),
                            s.company_name && a.company_name && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.company_name })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'เลขที่ผู้เสียภาษี :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'เลขที่ผู้เสียภาษี',
                              name: 'tax_id',
                              disabled: !0,
                              value: i.tax_id,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.tax_id && !!a.tax_id
                            }),
                            s.tax_id && a.tax_id && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.tax_id })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'ที่อยู่บริษัท :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'ที่อยู่บริษัท',
                              name: 'company_address',
                              value: i.company_address,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.company_address && !!a.company_address
                            }),
                            s.company_address &&
                              a.company_address &&
                              e.jsx(n.Control.Feedback, { type: 'invalid', children: a.company_address })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'ที่อยู่จัดส่งเอกสาร :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'ที่อยู่จัดส่งเอกสาร',
                              name: 'document_address',
                              value: i.document_address,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.document_address && !!a.document_address
                            }),
                            s.document_address &&
                              a.document_address &&
                              e.jsx(n.Control.Feedback, { type: 'invalid', children: a.document_address })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'อีเมล์ :' }),
                            e.jsx(n.Control, {
                              type: 'email',
                              className: 'form-control',
                              placeholder: 'อีเมล์',
                              disabled: !0,
                              name: 'email',
                              value: i.email,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.email && !!a.email
                            }),
                            s.email && a.email && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.email })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'เบอร์โทรศัพท์ :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'เบอร์โทรศัพท์',
                              name: 'phone',
                              value: i.phone,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.phone && !!a.phone
                            }),
                            s.phone && a.phone && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.phone })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'เงื่อนไขพิเศษ :' }),
                            e.jsxs(n.Select, {
                              name: 'condition_id',
                              style: { padding: '10px 20px' },
                              value: i.condition_id,
                              onChange: o,
                              onBlur: c,
                              isInvalid: s.condition_id && !!a.condition_id,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือกเงื่อนไขพิเศษ' }),
                                y.map((t) => e.jsx('option', { value: t.condition_id, children: t.description }, t.condition_id))
                              ]
                            }),
                            s.condition_id && a.condition_id && e.jsx(n.Control.Feedback, { type: 'invalid', children: a.condition_id })
                          ]
                        })
                      }),
                      e.jsxs(d, {
                        md: 12,
                        children: [
                          e.jsxs(n.Group, {
                            className: 'mb-4',
                            children: [
                              e.jsx(n.Label, { children: 'อัพโหลดเอกสาร :' }),
                              e.jsxs('div', {
                                ...B(),
                                style: {
                                  border: '2px dashed #04a9f5',
                                  borderRadius: '8px',
                                  padding: '50px 20px',
                                  textAlign: 'center',
                                  backgroundColor: u ? '#e6f7ff' : '#f8f9fa'
                                },
                                children: [
                                  e.jsx('input', { ...R() }),
                                  u
                                    ? e.jsx('p', { style: { marginBottom: 0 }, children: 'Drop your files here...' })
                                    : e.jsx('p', {
                                        style: { marginBottom: 0 },
                                        children: 'Drag and drop files here, or click to select files'
                                      })
                                ]
                              })
                            ]
                          }),
                          e.jsx('ul', {
                            className: 'mt-3',
                            children: L.map((t, D) =>
                              e.jsxs(
                                'li',
                                { children: [e.jsx('i', { className: 'feather icon-file', style: { marginRight: 12 } }), t.name] },
                                D
                              )
                            )
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsx(p, {
                    className: 'mt-3',
                    children: e.jsxs(d, {
                      children: [
                        e.jsx(f, {
                          variant: 'primary',
                          type: 'submit',
                          disabled: _,
                          children: _
                            ? e.jsx('span', { className: 'spinner-border spinner-border-sm me-2', role: 'status', 'aria-hidden': 'true' })
                            : e.jsxs(e.Fragment, { children: [e.jsx('i', { className: 'feather icon-save' }), ' บันทึก'] })
                        }),
                        e.jsxs(f, {
                          variant: 'danger',
                          onClick: () => h('/company/select'),
                          className: 'ms-2',
                          children: [e.jsx('i', { className: 'feather icon-corner-up-left' }), ' ย้อนกลับ']
                        })
                      ]
                    })
                  })
                ]
              })
          })
        })
      ]
    })
  });
}
export { X as default };
