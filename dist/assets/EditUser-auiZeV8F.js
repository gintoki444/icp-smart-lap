import { u as I, r as j, t as w, j as e, R as r, C as d, F as n, B as v, O as E, y as u } from './index-DZpC_pHZ.js';
import { F as q, c as A, a as h } from './formik.esm-DH0jrOO4.js';
import { g as B } from './rolesRequest-Bh-L4AxF.js';
import { C as p } from './Card-ZCMDsCmS.js';
const $ = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  D = async () => {
    const m = new Headers();
    m.append('Content-Type', 'application/json');
    const x = { method: 'GET', headers: m, redirect: 'follow' };
    return await (await fetch($ + '/departments', x)).json();
  };
function P() {
  var f;
  const m = I(),
    [x, _] = j.useState([]),
    [y, C] = j.useState([]),
    a = ((f = w().state) == null ? void 0 : f.users) || null;
  j.useEffect(() => {
    a || m('/admin/'), N(), g();
  }, []);
  const N = () => {
      B().then((s) => {
        s && _(s);
      });
    },
    g = () => {
      D().then((s) => {
        s && C(s);
      });
    };
  let R = {
    id: a == null ? void 0 : a.id,
    first_name: a == null ? void 0 : a.first_name,
    last_name: a == null ? void 0 : a.last_name,
    email: a == null ? void 0 : a.email,
    phone: a == null ? void 0 : a.phone,
    role_id: a == null ? void 0 : a.role_id,
    dept_id: a == null ? void 0 : a.dept_id
  };
  const k = () =>
      A({
        first_name: h().min(3, 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
        last_name: h().min(3, 'นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกนามสกุล'),
        phone: h()
          .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
          .required('กรุณากรอกเบอร์โทรศัพท์')
      }),
    L = async (s, { setErrors: i, setStatus: l, setSubmitting: o }) => {
      try {
        delete s.email, (await E(s, s.id)) && (u.success('แก้ไขข้อมูลผู้ใช้งานสำเร็จ!', { autoClose: 3e3 }), m('/admin/'));
      } catch (t) {
        console.error(t),
          u.error(`แก้ไขข้อมูลไม่สำเร็จ: ${t.message}`, { autoClose: 3e3 }),
          l({ success: !1 }),
          i({ submit: t.message }),
          o(!1);
      }
    };
  return e.jsx(r, {
    children: e.jsxs(p, {
      children: [
        e.jsx(p.Header, {
          children: e.jsx(r, { children: e.jsx(d, { children: e.jsx(p.Title, { as: 'h5', children: 'แก้ไขข้อมูลผู้ใช้งาน' }) }) })
        }),
        e.jsx(p.Body, {
          children: e.jsx(q, {
            initialValues: R,
            validationSchema: k,
            onSubmit: L,
            children: ({ values: s, errors: i, touched: l, handleChange: o, handleBlur: t, handleSubmit: G, isSubmitting: b }) =>
              e.jsxs(n, {
                onSubmit: G,
                children: [
                  e.jsxs(r, {
                    children: [
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'ชื่อ:' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'ชื่อ',
                              name: 'first_name',
                              value: s.first_name,
                              onChange: o,
                              onBlur: t,
                              isInvalid: l.first_name && !!i.first_name
                            }),
                            l.first_name && i.first_name && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.first_name })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'นามสกุล :' }),
                            e.jsx(n.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'นามสกุล',
                              name: 'last_name',
                              value: s.last_name,
                              onChange: o,
                              onBlur: t,
                              isInvalid: l.last_name && !!i.last_name
                            }),
                            l.last_name && i.last_name && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.last_name })
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
                              name: 'email',
                              value: s.email,
                              onBlur: t,
                              isInvalid: l.email && !!i.email
                            }),
                            l.email && i.email && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.email })
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
                              value: s.phone,
                              onChange: o,
                              onBlur: t,
                              isInvalid: l.phone && !!i.phone
                            }),
                            l.phone && i.phone && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.phone })
                          ]
                        })
                      }),
                      e.jsx(d, {
                        md: 6,
                        children: e.jsxs(n.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(n.Label, { children: 'Role:' }),
                            e.jsxs(n.Select, {
                              name: 'role_id',
                              style: { padding: '10px 20px' },
                              value: s.role_id,
                              onChange: o,
                              onBlur: t,
                              isInvalid: l.role_id && !!i.role_id,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือก Role' }),
                                x.map((c) => e.jsx('option', { value: c.role_id, children: c.role_name }, c.role_id))
                              ]
                            }),
                            l.role_id && i.role_id && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.role_id })
                          ]
                        })
                      }),
                      s.role_id !== 1 &&
                        e.jsx(d, {
                          md: 6,
                          children: e.jsxs(n.Group, {
                            className: 'mb-2',
                            children: [
                              e.jsx(n.Label, { children: 'ตำแหน่ง:' }),
                              e.jsxs(n.Select, {
                                name: 'dept_id',
                                style: { padding: '10px 20px' },
                                value: s.dept_id,
                                onChange: o,
                                onBlur: t,
                                isInvalid: l.dept_id && !!i.dept_id,
                                children: [
                                  e.jsx('option', { value: '', children: 'เลือกตำแหน่ง' }),
                                  y.map((c) => e.jsx('option', { value: c.dept_id, children: c.dept_name }, c.dept_id))
                                ]
                              }),
                              l.dept_id && i.dept_id && e.jsx(n.Control.Feedback, { type: 'invalid', children: i.dept_id })
                            ]
                          })
                        })
                    ]
                  }),
                  e.jsx(r, {
                    className: 'mt-3',
                    children: e.jsxs(d, {
                      children: [
                        e.jsx(v, {
                          variant: 'primary',
                          type: 'submit',
                          disabled: b,
                          children: b
                            ? e.jsx('span', { className: 'spinner-border spinner-border-sm me-2', role: 'status', 'aria-hidden': 'true' })
                            : e.jsxs(e.Fragment, { children: [e.jsx('i', { className: 'feather icon-save' }), ' บันทึก'] })
                        }),
                        e.jsxs(v, {
                          variant: 'danger',
                          onClick: () => m('/admin/user'),
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
export { P as default };
