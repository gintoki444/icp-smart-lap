import {
  u as y,
  r as p,
  j as s,
  F as r,
  I as S,
  a as I,
  C as h,
  R as k,
  B as C,
  s as E,
  g as R,
  b as F,
  l as A,
  N as c
} from './index-DZpC_pHZ.js';
import { F as P, c as B, a as x } from './formik.esm-DH0jrOO4.js';
import { A as q } from './Alert-Dwi6VePK.js';
import { C as j } from './Card-ZCMDsCmS.js';
import './CloseButton-DgEPtGiG.js';
import './Transition-DW97tWQD.js';
const O = () => {
    const o = y(),
      d = localStorage.getItem('authToken'),
      l = localStorage.getItem('userRole'),
      [n, g] = p.useState(!1);
    p.useEffect(() => {
      d && l && o(l === 'admin' ? '/admin/dashboard' : '/dashboard', { replace: !0 });
    }, [d, l, o]);
    const b = { email: '', password: '', submit: null },
      w = () =>
        B().shape({
          email: x().email('Must be a valid email').max(255).required('Email is required'),
          password: x().max(255).required('Password is required')
        }),
      N = async (a, { setErrors: t, setSubmitting: i }) => {
        i(!0);
        try {
          const e = await E(a);
          e && e.token
            ? (localStorage.setItem('authToken', e.token),
              localStorage.setItem('userRole', e.user.role),
              await f(e.user.role_id),
              o(e.user.role === 'user' ? '/dashboard' : '/admin/dashboard', { replace: !0 }))
            : (console.warn('🔴 Login failed:', e.message), t({ submit: e.message }));
        } catch (e) {
          console.error('🔴 Error logging in:', e), t({ submit: 'An error occurred. Please try again.' });
        } finally {
          i(!1);
        }
      },
      f = async (a) => {
        try {
          const t = await R(a);
          localStorage.setItem('permissions', JSON.stringify(t));
        } catch (t) {
          console.error('Error fetching permissions:', t);
        }
      };
    return s.jsx(P, {
      initialValues: b,
      validationSchema: w,
      onSubmit: N,
      children: ({ errors: a, handleBlur: t, handleChange: i, handleSubmit: e, isSubmitting: v, touched: m, values: u }) =>
        s.jsxs(r, {
          noValidate: !0,
          onSubmit: e,
          children: [
            s.jsxs(r.Group, {
              className: 'mb-3 text-start',
              controlId: 'email',
              children: [
                s.jsx(r.Control, {
                  placeholder: 'Email Address / Username',
                  name: 'email',
                  onBlur: t,
                  onChange: i,
                  type: 'email',
                  value: u.email,
                  isInvalid: m.email && !!a.email
                }),
                s.jsx(r.Control.Feedback, { type: 'invalid', children: a.email })
              ]
            }),
            s.jsxs(r.Group, {
              className: 'mb-4 text-start position-relative',
              controlId: 'password',
              children: [
                s.jsx(r.Control, {
                  placeholder: 'Password',
                  name: 'password',
                  onBlur: t,
                  onChange: i,
                  type: n ? 'text' : 'password',
                  value: u.password,
                  isInvalid: m.password && !!a.password
                }),
                s.jsx('span', {
                  className: 'position-absolute',
                  style: {
                    right: a.password ? 30 : '10px',
                    top: a.password ? '30%' : '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  },
                  onClick: () => g(!n),
                  children: n ? s.jsx(S, { size: 20 }) : s.jsx(I, { size: 20 })
                }),
                s.jsx(r.Control.Feedback, { type: 'invalid', children: a.password })
              ]
            }),
            a.submit && s.jsx(h, { sm: 12, children: s.jsx(q, { variant: 'danger', children: a.submit }) }),
            s.jsx(k, {
              children: s.jsx(h, {
                mt: 2,
                children: s.jsx(C, { className: 'btn-block mb-4', variant: 'primary', disabled: v, type: 'submit', children: 'Signin' })
              })
            })
          ]
        })
    });
  },
  J = () =>
    s.jsx(F.Fragment, {
      children: s.jsx('div', {
        className: 'auth-wrapper',
        children: s.jsxs('div', {
          className: 'auth-content',
          children: [
            s.jsxs('div', {
              className: 'auth-bg',
              children: [
                s.jsx('span', { className: 'r' }),
                s.jsx('span', { className: 'r s' }),
                s.jsx('span', { className: 'r s' }),
                s.jsx('span', { className: 'r' })
              ]
            }),
            s.jsx(j, {
              className: 'borderless text-center',
              children: s.jsxs(j.Body, {
                children: [
                  s.jsx('div', { className: 'mb-0', children: s.jsx('img', { className: 'img-fluid', src: A, alt: 'logo', width: 120 }) }),
                  s.jsx(O, {}),
                  s.jsxs('p', {
                    className: 'mb-1 text-muted',
                    children: ['Forgot password?', ' ', s.jsx(c, { to: '/auth/reset-password#', className: 'f-w-400', children: 'Reset' })]
                  }),
                  s.jsxs('p', {
                    className: 'mb-1 text-muted',
                    children: ['Activate E-mal?', ' ', s.jsx(c, { to: '/auth/activate-token', className: 'f-w-400', children: 'activate' })]
                  }),
                  s.jsxs('p', {
                    className: 'mb-1 text-muted',
                    children: ['Don’t have an account?', ' ', s.jsx(c, { to: '/auth/signup-1', className: 'f-w-400', children: 'Signup' })]
                  })
                ]
              })
            })
          ]
        })
      })
    });
export { J as default };
