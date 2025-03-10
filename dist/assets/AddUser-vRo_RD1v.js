import { u as w, r as j, j as e, R as t, C as o, F as s, B as h, S as g, y as u } from './index-DZpC_pHZ.js';
import { F, c as k, a as m } from './formik.esm-DH0jrOO4.js';
import { g as R } from './rolesRequest-Bh-L4AxF.js';
import { C as d } from './Card-ZCMDsCmS.js';
function q() {
  const p = w(),
    [f, _] = j.useState([]);
  j.useEffect(() => {
    b();
  }, []);
  const b = () => {
      R().then((l) => {
        l && _(l);
      });
    },
    v = { username: '', first_name: '', last_name: '', email: '', phone: '', role_id: '', password: '', confirmPassword: '' },
    C = () =>
      k({
        first_name: m().min(3, 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกชื่อ'),
        last_name: m().min(3, 'นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร').required('กรุณากรอกนามสกุล'),
        email: m().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์'),
        phone: m()
          .matches(/^[0-9]{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)')
          .required('กรุณากรอกเบอร์โทรศัพท์'),
        password: m().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร').required('กรุณากรอกรหัสผ่าน')
      }),
    y = async (l, { setErrors: a, setStatus: n, setSubmitting: r }) => {
      try {
        (l.username = l.email), (await g(l)).userId && (u.success('เพิ่มข้อมูลผู้ใช้งานสำเร็จ!', { autoClose: 3e3 }), p('/admin/'));
      } catch (i) {
        u.error(`เพิ่มข้อมูลไม่สำเร็จ: ${i.message}`, { autoClose: 3e3 }), n({ success: !1 }), a({ submit: i.message }), r(!1);
      }
    };
  return e.jsx(t, {
    children: e.jsxs(d, {
      children: [
        e.jsx(d.Header, {
          children: e.jsx(t, { children: e.jsx(o, { children: e.jsx(d.Title, { as: 'h5', children: 'เพิ่มข้อมูลผู้ใช้งาน' }) }) })
        }),
        e.jsx(d.Body, {
          children: e.jsx(F, {
            initialValues: v,
            validationSchema: C,
            onSubmit: y,
            children: ({ values: l, errors: a, touched: n, handleChange: r, handleBlur: i, handleSubmit: N, isSubmitting: x }) =>
              e.jsxs(s, {
                onSubmit: N,
                children: [
                  e.jsxs(t, {
                    children: [
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'ชื่อ:' }),
                            e.jsx(s.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'ชื่อ',
                              name: 'first_name',
                              value: l.first_name,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.first_name && !!a.first_name
                            }),
                            n.first_name && a.first_name && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.first_name })
                          ]
                        })
                      }),
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'นามสกุล :' }),
                            e.jsx(s.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'นามสกุล',
                              name: 'last_name',
                              value: l.last_name,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.last_name && !!a.last_name
                            }),
                            n.last_name && a.last_name && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.last_name })
                          ]
                        })
                      }),
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'อีเมล์ :' }),
                            e.jsx(s.Control, {
                              type: 'email',
                              className: 'form-control',
                              placeholder: 'อีเมล์',
                              name: 'email',
                              value: l.email,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.email && !!a.email
                            }),
                            n.email && a.email && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.email })
                          ]
                        })
                      }),
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'เบอร์โทรศัพท์ :' }),
                            e.jsx(s.Control, {
                              type: 'text',
                              className: 'form-control',
                              placeholder: 'เบอร์โทรศัพท์',
                              name: 'phone',
                              value: l.phone,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.phone && !!a.phone
                            }),
                            n.phone && a.phone && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.phone })
                          ]
                        })
                      }),
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'password :' }),
                            e.jsx(s.Control, {
                              type: 'password',
                              className: 'form-control',
                              placeholder: 'รหัสผ่าน',
                              name: 'password',
                              value: l.password,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.password && !!a.password
                            }),
                            n.password && a.password && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.password })
                          ]
                        })
                      }),
                      e.jsx(o, {
                        md: 6,
                        children: e.jsxs(s.Group, {
                          className: 'mb-2',
                          children: [
                            e.jsx(s.Label, { children: 'Role:' }),
                            e.jsxs(s.Select, {
                              name: 'role_id',
                              style: { padding: '10px 20px' },
                              value: l.role_id,
                              onChange: r,
                              onBlur: i,
                              isInvalid: n.role_id && !!a.role_id,
                              children: [
                                e.jsx('option', { value: '', children: 'เลือก Role' }),
                                f.map((c) => e.jsx('option', { value: c.role_id, children: c.role_name }, c.role_id))
                              ]
                            }),
                            n.role_id && a.role_id && e.jsx(s.Control.Feedback, { type: 'invalid', children: a.role_id })
                          ]
                        })
                      })
                    ]
                  }),
                  e.jsx(t, {
                    className: 'mt-3',
                    children: e.jsxs(o, {
                      children: [
                        e.jsx(h, {
                          variant: 'primary',
                          type: 'submit',
                          disabled: x,
                          children: x
                            ? e.jsx('span', { className: 'spinner-border spinner-border-sm me-2', role: 'status', 'aria-hidden': 'true' })
                            : e.jsxs(e.Fragment, { children: [e.jsx('i', { className: 'feather icon-save' }), ' บันทึก'] })
                        }),
                        e.jsxs(h, {
                          variant: 'danger',
                          onClick: () => p('/admin/user'),
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
export { q as default };
