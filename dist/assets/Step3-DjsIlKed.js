import {
  an as un,
  ao as ln,
  r as O,
  d as cn,
  ap as dn,
  aq as fn,
  j as o,
  e as pn,
  F as v,
  ar as hn,
  R as ne,
  C as w,
  _ as mn,
  Y as P,
  a9 as vn,
  Q as gn,
  B as ie,
  n as bn,
  o as Sn
} from './index-DZpC_pHZ.js';
import { g as Cn } from './customerRequest-CwUVzGH7.js';
import { C as se } from './Card-ZCMDsCmS.js';
import { J as It, Q as yt, _ as On, R as F, g as xt, k as En, T as In } from './toPropertyKey-COtC2h-V.js';
import { c as yn } from './Transition-DW97tWQD.js';
import { a as xn, c as An } from './testItemsRequest-5XlhAVBO.js';
import { c as Xe, d as Fn, a as K, e as fe } from './formik.esm-DH0jrOO4.js';
import { T as Mn } from './Table-Bs-13SI2.js';
import { B as Dn } from './ButtonGroup-DLGnQ8T-.js';
import { M as oe } from './Modal-DVn7-Fnl.js';
import { u as _n } from './index-kdHliud_.js';
import { d as Pn } from './uploadFileRequest-j7nqPy1R.js';
import { e as Ln } from './serviceRequest-D-ZD1URS.js';
function Rn(n, e = un, r = ln) {
  const a = [];
  return (
    Object.entries(n).forEach(([t, s]) => {
      s != null &&
        (typeof s == 'object'
          ? e.forEach((u) => {
              const c = s[u];
              if (c != null) {
                const i = u !== r ? `-${u}` : '';
                a.push(`${t}${i}-${c}`);
              }
            })
          : a.push(`${t}-${s}`));
    }),
    a
  );
}
const Ge = O.forwardRef(({ as: n = 'div', bsPrefix: e, className: r, direction: a, gap: t, ...s }, u) => {
  e = cn(e, a === 'horizontal' ? 'hstack' : 'vstack');
  const c = dn(),
    i = fn();
  return o.jsx(n, { ...s, ref: u, className: pn(r, e, ...Rn({ gap: t }, c, i)) });
});
Ge.displayName = 'Stack';
const Tn = ({
    name: n = 'company_id',
    onSelect: e,
    value: r,
    disables: a,
    showText: t,
    userId: s,
    isInvalid: u = !1,
    errorMessage: c = ''
  }) => {
    var C;
    const [i, l] = O.useState([]),
      d = async () => {
        try {
          console.log('userId', s),
            s
              ? await hn(s).then((S) => {
                  l(S.filter((E) => E.status === 'approved'));
                })
              : await Cn().then((S) => {
                  l(S);
                });
        } catch (S) {
          console.log(S);
        }
      };
    O.useEffect(() => {
      d();
    }, []);
    const h = (S) => {
      const E = S.target.value,
        g = E ? Number(E) : null;
      e.length === 1 ? e(g) : e(n, g);
    };
    return o.jsxs(v.Group, {
      className: 'mb-3',
      children: [
        o.jsxs(v.Label, {
          children: [
            'บริษัท',
            t
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsx('span', { className: 'text-meta-1', children: ' : ' }),
                    o.jsx('strong', { children: (C = i.find((S) => S.company_id === r)) == null ? void 0 : C.company_name })
                  ]
                })
              : o.jsx('span', { className: 'text-meta-1', children: ': ' })
          ]
        }),
        !t &&
          o.jsxs(o.Fragment, {
            children: [
              o.jsxs(v.Select, {
                value: r || '',
                onChange: h,
                disabled: a,
                style: { padding: '8px 20px', fontSize: 14 },
                isInvalid: u,
                children: [
                  o.jsx('option', { value: '', disabled: !0, className: 'text-body dark:text-bodydark', children: 'เลือกบริษัท' }),
                  i.length > 0 &&
                    i.map((S, E) =>
                      o.jsx('option', { value: S.company_id, className: 'text-body dark:text-bodydark', children: S.company_name }, E)
                    )
                ]
              }),
              u && o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: c || 'กรุณาเลือกบริษัท' })
            ]
          })
      ]
    });
  },
  Ui = ({ values: n, errors: e, touched: r, handleChange: a, setFieldValue: t, spacialCon: s, handleGetCusSpacialCon: u }) => {
    var i;
    const c = [
      { value: 'is_registration_analysis', label: 'วิเคราะห์ขึ้นทะเบียน' },
      { value: 'is_quality_check_analysis', label: 'วิเคราะห์เพื่อตรวจสอบคุณภาพ' }
    ];
    return (
      console.log('values :', n),
      console.log('values.user_id :', n.user_id),
      o.jsx(ne, {
        children: o.jsx(w, {
          children: o.jsx(se, {
            className: 'm-0',
            children: o.jsxs(se.Body, {
              className: 'pb-2 pt-4',
              children: [
                o.jsx('h5', { children: 'รายละเอียดบริษัท' }),
                o.jsx(v.Group, {
                  className: 'mb-3',
                  children: o.jsx(Tn, {
                    name: 'company_id',
                    value: n.company_id,
                    userId: n.user_id,
                    isInvalid: e.company_id,
                    onSelect: (l, d) => {
                      t('company_id', d), u(d);
                    }
                  })
                }),
                s.length > 0 &&
                  o.jsxs(v.Group, {
                    className: 'mb-3',
                    children: [
                      o.jsx(v.Label, { children: 'เงื่อนไขพิเศษ :' }),
                      o.jsx(v.Control, {
                        type: 'text',
                        readOnly: !0,
                        value: ((i = s.find((l) => l.company_id === n.company_id)) == null ? void 0 : i.description) || ''
                      })
                    ]
                  }),
                o.jsxs(v.Group, {
                  className: 'mb-3',
                  children: [
                    o.jsx(v.Label, { children: 'วัตถุประสงค์การขอใช้บริการ' }),
                    o.jsx(v.Group, {
                      children: c.map((l, d) =>
                        o.jsx(
                          v.Check,
                          {
                            inline: !0,
                            type: 'radio',
                            name: 'analysisMethod',
                            value: l.value,
                            label: l.label,
                            checked: n.analysisMethod === l.value,
                            onChange: a,
                            id: `reportCheck${d}`
                          },
                          d
                        )
                      )
                    }),
                    e.analysisMethod &&
                      o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: e.analysisMethod })
                  ]
                }),
                o.jsxs(v.Group, {
                  className: 'mb-3',
                  children: [
                    o.jsx(v.Label, { children: 'ความต้องการอื่น' }),
                    o.jsx(v.Control, {
                      as: 'textarea',
                      rows: 3,
                      name: 'notes',
                      placeholder: 'กรอกความต้องการอื่น',
                      value: n.notes,
                      onChange: a,
                      isInvalid: r.notes && !!e.notes
                    }),
                    o.jsx(v.Control.Feedback, { type: 'invalid', children: e.notes })
                  ]
                })
              ]
            })
          })
        })
      })
    );
  };
function le(n, e, r) {
  return (e = It(e)) in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = r), n;
}
function Qe(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function _(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Qe(Object(r), !0).forEach(function (a) {
          le(n, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
        : Qe(Object(r)).forEach(function (a) {
            Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return n;
}
function jn(n) {
  if (Array.isArray(n)) return n;
}
function Vn(n, e) {
  var r = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
  if (r != null) {
    var a,
      t,
      s,
      u,
      c = [],
      i = !0,
      l = !1;
    try {
      if (((s = (r = r.call(n)).next), e === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (a = s.call(r)).done) && (c.push(a.value), c.length !== e); i = !0);
    } catch (d) {
      (l = !0), (t = d);
    } finally {
      try {
        if (!i && r.return != null && ((u = r.return()), Object(u) !== u)) return;
      } finally {
        if (l) throw t;
      }
    }
    return c;
  }
}
function we(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var r = 0, a = Array(e); r < e; r++) a[r] = n[r];
  return a;
}
function At(n, e) {
  if (n) {
    if (typeof n == 'string') return we(n, e);
    var r = {}.toString.call(n).slice(8, -1);
    return (
      r === 'Object' && n.constructor && (r = n.constructor.name),
      r === 'Map' || r === 'Set'
        ? Array.from(n)
        : r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? we(n, e)
          : void 0
    );
  }
}
function wn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(n, e) {
  return jn(n) || Vn(n, e) || At(n, e) || wn();
}
function ee(n, e) {
  if (n == null) return {};
  var r,
    a,
    t = mn(n, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (a = 0; a < s.length; a++) (r = s[a]), e.indexOf(r) === -1 && {}.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
var Bn = [
  'defaultInputValue',
  'defaultMenuIsOpen',
  'defaultValue',
  'inputValue',
  'menuIsOpen',
  'onChange',
  'onInputChange',
  'onMenuClose',
  'onMenuOpen',
  'value'
];
function Nn(n) {
  var e = n.defaultInputValue,
    r = e === void 0 ? '' : e,
    a = n.defaultMenuIsOpen,
    t = a === void 0 ? !1 : a,
    s = n.defaultValue,
    u = s === void 0 ? null : s,
    c = n.inputValue,
    i = n.menuIsOpen,
    l = n.onChange,
    d = n.onInputChange,
    h = n.onMenuClose,
    C = n.onMenuOpen,
    S = n.value,
    E = ee(n, Bn),
    g = O.useState(c !== void 0 ? c : r),
    m = X(g, 2),
    f = m[0],
    y = m[1],
    M = O.useState(i !== void 0 ? i : t),
    L = X(M, 2),
    b = L[0],
    I = L[1],
    x = O.useState(S !== void 0 ? S : u),
    A = X(x, 2),
    D = A[0],
    R = A[1],
    k = O.useCallback(
      function (j, T) {
        typeof l == 'function' && l(j, T), R(j);
      },
      [l]
    ),
    H = O.useCallback(
      function (j, T) {
        var U;
        typeof d == 'function' && (U = d(j, T)), y(U !== void 0 ? U : j);
      },
      [d]
    ),
    Y = O.useCallback(
      function () {
        typeof C == 'function' && C(), I(!0);
      },
      [C]
    ),
    W = O.useCallback(
      function () {
        typeof h == 'function' && h(), I(!1);
      },
      [h]
    ),
    G = c !== void 0 ? c : f,
    N = i !== void 0 ? i : b,
    p = S !== void 0 ? S : D;
  return _(_({}, E), {}, { inputValue: G, menuIsOpen: N, onChange: k, onInputChange: H, onMenuClose: W, onMenuOpen: Y, value: p });
}
function kn(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function et(n, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(n, It(a.key), a);
  }
}
function Gn(n, e, r) {
  return e && et(n.prototype, e), r && et(n, r), Object.defineProperty(n, 'prototype', { writable: !1 }), n;
}
function Hn(n, e) {
  if (typeof e != 'function' && e !== null) throw new TypeError('Super expression must either be null or a function');
  (n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    e && yn(n, e);
}
function Ce(n) {
  return (
    (Ce = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Ce(n)
  );
}
function Ft() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ft = function () {
    return !!n;
  })();
}
function Un(n, e) {
  if (e && (yt(e) == 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return On(n);
}
function $n(n) {
  var e = Ft();
  return function () {
    var r,
      a = Ce(n);
    if (e) {
      var t = Ce(this).constructor;
      r = Reflect.construct(a, arguments, t);
    } else r = a.apply(this, arguments);
    return Un(this, r);
  };
}
function zn(n) {
  if (Array.isArray(n)) return we(n);
}
function Kn(n) {
  if ((typeof Symbol < 'u' && n[Symbol.iterator] != null) || n['@@iterator'] != null) return Array.from(n);
}
function Wn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(n) {
  return zn(n) || Kn(n) || At(n) || Wn();
}
function Yn(n, e) {
  return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
}
const Zn = Math.min,
  qn = Math.max,
  Oe = Math.round,
  pe = Math.floor,
  Ee = (n) => ({ x: n, y: n });
function Jn(n) {
  const { x: e, y: r, width: a, height: t } = n;
  return { width: a, height: t, top: r, left: e, right: e + a, bottom: r + t, x: e, y: r };
}
function Fe() {
  return typeof window < 'u';
}
function Mt(n) {
  return _t(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Q(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Dt(n) {
  var e;
  return (e = (_t(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function _t(n) {
  return Fe() ? n instanceof Node || n instanceof Q(n).Node : !1;
}
function Xn(n) {
  return Fe() ? n instanceof Element || n instanceof Q(n).Element : !1;
}
function Ue(n) {
  return Fe() ? n instanceof HTMLElement || n instanceof Q(n).HTMLElement : !1;
}
function tt(n) {
  return !Fe() || typeof ShadowRoot > 'u' ? !1 : n instanceof ShadowRoot || n instanceof Q(n).ShadowRoot;
}
function Pt(n) {
  const { overflow: e, overflowX: r, overflowY: a, display: t } = $e(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + a + r) && !['inline', 'contents'].includes(t);
}
function Qn() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function er(n) {
  return ['html', 'body', '#document'].includes(Mt(n));
}
function $e(n) {
  return Q(n).getComputedStyle(n);
}
function tr(n) {
  if (Mt(n) === 'html') return n;
  const e = n.assignedSlot || n.parentNode || (tt(n) && n.host) || Dt(n);
  return tt(e) ? e.host : e;
}
function Lt(n) {
  const e = tr(n);
  return er(e) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : Ue(e) && Pt(e) ? e : Lt(e);
}
function Ie(n, e, r) {
  var a;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const t = Lt(n),
    s = t === ((a = n.ownerDocument) == null ? void 0 : a.body),
    u = Q(t);
  if (s) {
    const c = Be(u);
    return e.concat(u, u.visualViewport || [], Pt(t) ? t : [], c && r ? Ie(c) : []);
  }
  return e.concat(t, Ie(t, [], r));
}
function Be(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function nr(n) {
  const e = $e(n);
  let r = parseFloat(e.width) || 0,
    a = parseFloat(e.height) || 0;
  const t = Ue(n),
    s = t ? n.offsetWidth : r,
    u = t ? n.offsetHeight : a,
    c = Oe(r) !== s || Oe(a) !== u;
  return c && ((r = s), (a = u)), { width: r, height: a, $: c };
}
function ze(n) {
  return Xn(n) ? n : n.contextElement;
}
function nt(n) {
  const e = ze(n);
  if (!Ue(e)) return Ee(1);
  const r = e.getBoundingClientRect(),
    { width: a, height: t, $: s } = nr(e);
  let u = (s ? Oe(r.width) : r.width) / a,
    c = (s ? Oe(r.height) : r.height) / t;
  return (!u || !Number.isFinite(u)) && (u = 1), (!c || !Number.isFinite(c)) && (c = 1), { x: u, y: c };
}
const rr = Ee(0);
function ar(n) {
  const e = Q(n);
  return !Qn() || !e.visualViewport ? rr : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function ir(n, e, r) {
  return !1;
}
function rt(n, e, r, a) {
  e === void 0 && (e = !1);
  const t = n.getBoundingClientRect(),
    s = ze(n);
  let u = Ee(1);
  e && (u = nt(n));
  const c = ir() ? ar(s) : Ee(0);
  let i = (t.left + c.x) / u.x,
    l = (t.top + c.y) / u.y,
    d = t.width / u.x,
    h = t.height / u.y;
  if (s) {
    const C = Q(s),
      S = a;
    let E = C,
      g = Be(E);
    for (; g && a && S !== E; ) {
      const m = nt(g),
        f = g.getBoundingClientRect(),
        y = $e(g),
        M = f.left + (g.clientLeft + parseFloat(y.paddingLeft)) * m.x,
        L = f.top + (g.clientTop + parseFloat(y.paddingTop)) * m.y;
      (i *= m.x), (l *= m.y), (d *= m.x), (h *= m.y), (i += M), (l += L), (E = Q(g)), (g = Be(E));
    }
  }
  return Jn({ width: d, height: h, x: i, y: l });
}
function Rt(n, e) {
  return n.x === e.x && n.y === e.y && n.width === e.width && n.height === e.height;
}
function sr(n, e) {
  let r = null,
    a;
  const t = Dt(n);
  function s() {
    var c;
    clearTimeout(a), (c = r) == null || c.disconnect(), (r = null);
  }
  function u(c, i) {
    c === void 0 && (c = !1), i === void 0 && (i = 1), s();
    const l = n.getBoundingClientRect(),
      { left: d, top: h, width: C, height: S } = l;
    if ((c || e(), !C || !S)) return;
    const E = pe(h),
      g = pe(t.clientWidth - (d + C)),
      m = pe(t.clientHeight - (h + S)),
      f = pe(d),
      M = { rootMargin: -E + 'px ' + -g + 'px ' + -m + 'px ' + -f + 'px', threshold: qn(0, Zn(1, i)) || 1 };
    let L = !0;
    function b(I) {
      const x = I[0].intersectionRatio;
      if (x !== i) {
        if (!L) return u();
        x
          ? u(!1, x)
          : (a = setTimeout(() => {
              u(!1, 1e-7);
            }, 1e3));
      }
      x === 1 && !Rt(l, n.getBoundingClientRect()) && u(), (L = !1);
    }
    try {
      r = new IntersectionObserver(b, { ...M, root: t.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, M);
    }
    r.observe(n);
  }
  return u(!0), s;
}
function or(n, e, r, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: t = !0,
      ancestorResize: s = !0,
      elementResize: u = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: i = !1
    } = a,
    l = ze(n),
    d = t || s ? [...(l ? Ie(l) : []), ...Ie(e)] : [];
  d.forEach((f) => {
    t && f.addEventListener('scroll', r, { passive: !0 }), s && f.addEventListener('resize', r);
  });
  const h = l && c ? sr(l, r) : null;
  let C = -1,
    S = null;
  u &&
    ((S = new ResizeObserver((f) => {
      let [y] = f;
      y &&
        y.target === l &&
        S &&
        (S.unobserve(e),
        cancelAnimationFrame(C),
        (C = requestAnimationFrame(() => {
          var M;
          (M = S) == null || M.observe(e);
        }))),
        r();
    })),
    l && !i && S.observe(l),
    S.observe(e));
  let E,
    g = i ? rt(n) : null;
  i && m();
  function m() {
    const f = rt(n);
    g && !Rt(g, f) && r(), (g = f), (E = requestAnimationFrame(m));
  }
  return (
    r(),
    () => {
      var f;
      d.forEach((y) => {
        t && y.removeEventListener('scroll', r), s && y.removeEventListener('resize', r);
      }),
        h == null || h(),
        (f = S) == null || f.disconnect(),
        (S = null),
        i && cancelAnimationFrame(E);
    }
  );
}
var Ne = O.useLayoutEffect,
  ur = [
    'className',
    'clearValue',
    'cx',
    'getStyles',
    'getClassNames',
    'getValue',
    'hasValue',
    'isMulti',
    'isRtl',
    'options',
    'selectOption',
    'selectProps',
    'setValue',
    'theme'
  ],
  ye = function () {};
function lr(n, e) {
  return e ? (e[0] === '-' ? n + e : n + '__' + e) : n;
}
function cr(n, e) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), t = 2; t < r; t++) a[t - 2] = arguments[t];
  var s = [].concat(a);
  if (e && n) for (var u in e) e.hasOwnProperty(u) && e[u] && s.push(''.concat(lr(n, u)));
  return s
    .filter(function (c) {
      return c;
    })
    .map(function (c) {
      return String(c).trim();
    })
    .join(' ');
}
var at = function (e) {
    return Sr(e) ? e.filter(Boolean) : yt(e) === 'object' && e !== null ? [e] : [];
  },
  Tt = function (e) {
    e.className,
      e.clearValue,
      e.cx,
      e.getStyles,
      e.getClassNames,
      e.getValue,
      e.hasValue,
      e.isMulti,
      e.isRtl,
      e.options,
      e.selectOption,
      e.selectProps,
      e.setValue,
      e.theme;
    var r = ee(e, ur);
    return _({}, r);
  },
  B = function (e, r, a) {
    var t = e.cx,
      s = e.getStyles,
      u = e.getClassNames,
      c = e.className;
    return { css: s(r, e), className: t(a ?? {}, u(r, e), c) };
  };
function Me(n) {
  return [document.documentElement, document.body, window].indexOf(n) > -1;
}
function dr(n) {
  return Me(n) ? window.innerHeight : n.clientHeight;
}
function jt(n) {
  return Me(n) ? window.pageYOffset : n.scrollTop;
}
function xe(n, e) {
  if (Me(n)) {
    window.scrollTo(0, e);
    return;
  }
  n.scrollTop = e;
}
function fr(n) {
  var e = getComputedStyle(n),
    r = e.position === 'absolute',
    a = /(auto|scroll)/;
  if (e.position === 'fixed') return document.documentElement;
  for (var t = n; (t = t.parentElement); )
    if (((e = getComputedStyle(t)), !(r && e.position === 'static') && a.test(e.overflow + e.overflowY + e.overflowX))) return t;
  return document.documentElement;
}
function pr(n, e, r, a) {
  return r * ((n = n / a - 1) * n * n + 1) + e;
}
function he(n, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ye,
    t = jt(n),
    s = e - t,
    u = 10,
    c = 0;
  function i() {
    c += u;
    var l = pr(c, t, s, r);
    xe(n, l), c < r ? window.requestAnimationFrame(i) : a(n);
  }
  i();
}
function it(n, e) {
  var r = n.getBoundingClientRect(),
    a = e.getBoundingClientRect(),
    t = e.offsetHeight / 3;
  a.bottom + t > r.bottom
    ? xe(n, Math.min(e.offsetTop + e.clientHeight - n.offsetHeight + t, n.scrollHeight))
    : a.top - t < r.top && xe(n, Math.max(e.offsetTop - t, 0));
}
function hr(n) {
  var e = n.getBoundingClientRect();
  return { bottom: e.bottom, height: e.height, left: e.left, right: e.right, top: e.top, width: e.width };
}
function st() {
  try {
    return document.createEvent('TouchEvent'), !0;
  } catch {
    return !1;
  }
}
function mr() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Vt = !1,
  vr = {
    get passive() {
      return (Vt = !0);
    }
  },
  me = typeof window < 'u' ? window : {};
me.addEventListener && me.removeEventListener && (me.addEventListener('p', ye, vr), me.removeEventListener('p', ye, !1));
var gr = Vt;
function br(n) {
  return n != null;
}
function Sr(n) {
  return Array.isArray(n);
}
function ve(n, e, r) {
  return n ? e : r;
}
var Cr = function (e) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) a[t - 1] = arguments[t];
    var s = Object.entries(e).filter(function (u) {
      var c = X(u, 1),
        i = c[0];
      return !a.includes(i);
    });
    return s.reduce(function (u, c) {
      var i = X(c, 2),
        l = i[0],
        d = i[1];
      return (u[l] = d), u;
    }, {});
  },
  Or = ['children', 'innerProps'],
  Er = ['children', 'innerProps'];
function Ir(n) {
  var e = n.maxHeight,
    r = n.menuEl,
    a = n.minHeight,
    t = n.placement,
    s = n.shouldScroll,
    u = n.isFixedPosition,
    c = n.controlHeight,
    i = fr(r),
    l = { placement: 'bottom', maxHeight: e };
  if (!r || !r.offsetParent) return l;
  var d = i.getBoundingClientRect(),
    h = d.height,
    C = r.getBoundingClientRect(),
    S = C.bottom,
    E = C.height,
    g = C.top,
    m = r.offsetParent.getBoundingClientRect(),
    f = m.top,
    y = u ? window.innerHeight : dr(i),
    M = jt(i),
    L = parseInt(getComputedStyle(r).marginBottom, 10),
    b = parseInt(getComputedStyle(r).marginTop, 10),
    I = f - b,
    x = y - g,
    A = I + M,
    D = h - M - g,
    R = S - y + M + L,
    k = M + g - b,
    H = 160;
  switch (t) {
    case 'auto':
    case 'bottom':
      if (x >= E) return { placement: 'bottom', maxHeight: e };
      if (D >= E && !u) return s && he(i, R, H), { placement: 'bottom', maxHeight: e };
      if ((!u && D >= a) || (u && x >= a)) {
        s && he(i, R, H);
        var Y = u ? x - L : D - L;
        return { placement: 'bottom', maxHeight: Y };
      }
      if (t === 'auto' || u) {
        var W = e,
          G = u ? I : A;
        return G >= a && (W = Math.min(G - L - c, e)), { placement: 'top', maxHeight: W };
      }
      if (t === 'bottom') return s && xe(i, R), { placement: 'bottom', maxHeight: e };
      break;
    case 'top':
      if (I >= E) return { placement: 'top', maxHeight: e };
      if (A >= E && !u) return s && he(i, k, H), { placement: 'top', maxHeight: e };
      if ((!u && A >= a) || (u && I >= a)) {
        var N = e;
        return ((!u && A >= a) || (u && I >= a)) && (N = u ? I - b : A - b), s && he(i, k, H), { placement: 'top', maxHeight: N };
      }
      return { placement: 'bottom', maxHeight: e };
    default:
      throw new Error('Invalid placement provided "'.concat(t, '".'));
  }
  return l;
}
function yr(n) {
  var e = { bottom: 'top', top: 'bottom' };
  return n ? e[n] : 'bottom';
}
var wt = function (e) {
    return e === 'auto' ? 'bottom' : e;
  },
  xr = function (e, r) {
    var a,
      t = e.placement,
      s = e.theme,
      u = s.borderRadius,
      c = s.spacing,
      i = s.colors;
    return _(
      ((a = { label: 'menu' }), le(a, yr(t), '100%'), le(a, 'position', 'absolute'), le(a, 'width', '100%'), le(a, 'zIndex', 1), a),
      r
        ? {}
        : {
            backgroundColor: i.neutral0,
            borderRadius: u,
            boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
            marginBottom: c.menuGutter,
            marginTop: c.menuGutter
          }
    );
  },
  Bt = O.createContext(null),
  Ar = function (e) {
    var r = e.children,
      a = e.minMenuHeight,
      t = e.maxMenuHeight,
      s = e.menuPlacement,
      u = e.menuPosition,
      c = e.menuShouldScrollIntoView,
      i = e.theme,
      l = O.useContext(Bt) || {},
      d = l.setPortalPlacement,
      h = O.useRef(null),
      C = O.useState(t),
      S = X(C, 2),
      E = S[0],
      g = S[1],
      m = O.useState(null),
      f = X(m, 2),
      y = f[0],
      M = f[1],
      L = i.spacing.controlHeight;
    return (
      Ne(
        function () {
          var b = h.current;
          if (b) {
            var I = u === 'fixed',
              x = c && !I,
              A = Ir({ maxHeight: t, menuEl: b, minHeight: a, placement: s, shouldScroll: x, isFixedPosition: I, controlHeight: L });
            g(A.maxHeight), M(A.placement), d == null || d(A.placement);
          }
        },
        [t, s, u, c, a, d, L]
      ),
      r({ ref: h, placerProps: _(_({}, e), {}, { placement: y || wt(s), maxHeight: E }) })
    );
  },
  Fr = function (e) {
    var r = e.children,
      a = e.innerRef,
      t = e.innerProps;
    return F('div', P({}, B(e, 'menu', { menu: !0 }), { ref: a }, t), r);
  },
  Mr = Fr,
  Dr = function (e, r) {
    var a = e.maxHeight,
      t = e.theme.spacing.baseUnit;
    return _(
      { maxHeight: a, overflowY: 'auto', position: 'relative', WebkitOverflowScrolling: 'touch' },
      r ? {} : { paddingBottom: t, paddingTop: t }
    );
  },
  _r = function (e) {
    var r = e.children,
      a = e.innerProps,
      t = e.innerRef,
      s = e.isMulti;
    return F('div', P({}, B(e, 'menuList', { 'menu-list': !0, 'menu-list--is-multi': s }), { ref: t }, a), r);
  },
  Nt = function (e, r) {
    var a = e.theme,
      t = a.spacing.baseUnit,
      s = a.colors;
    return _({ textAlign: 'center' }, r ? {} : { color: s.neutral40, padding: ''.concat(t * 2, 'px ').concat(t * 3, 'px') });
  },
  Pr = Nt,
  Lr = Nt,
  Rr = function (e) {
    var r = e.children,
      a = r === void 0 ? 'No options' : r,
      t = e.innerProps,
      s = ee(e, Or);
    return F(
      'div',
      P(
        {},
        B(_(_({}, s), {}, { children: a, innerProps: t }), 'noOptionsMessage', { 'menu-notice': !0, 'menu-notice--no-options': !0 }),
        t
      ),
      a
    );
  },
  Tr = function (e) {
    var r = e.children,
      a = r === void 0 ? 'Loading...' : r,
      t = e.innerProps,
      s = ee(e, Er);
    return F(
      'div',
      P({}, B(_(_({}, s), {}, { children: a, innerProps: t }), 'loadingMessage', { 'menu-notice': !0, 'menu-notice--loading': !0 }), t),
      a
    );
  },
  jr = function (e) {
    var r = e.rect,
      a = e.offset,
      t = e.position;
    return { left: r.left, position: t, top: a, width: r.width, zIndex: 1 };
  },
  Vr = function (e) {
    var r = e.appendTo,
      a = e.children,
      t = e.controlElement,
      s = e.innerProps,
      u = e.menuPlacement,
      c = e.menuPosition,
      i = O.useRef(null),
      l = O.useRef(null),
      d = O.useState(wt(u)),
      h = X(d, 2),
      C = h[0],
      S = h[1],
      E = O.useMemo(function () {
        return { setPortalPlacement: S };
      }, []),
      g = O.useState(null),
      m = X(g, 2),
      f = m[0],
      y = m[1],
      M = O.useCallback(
        function () {
          if (t) {
            var x = hr(t),
              A = c === 'fixed' ? 0 : window.pageYOffset,
              D = x[C] + A;
            (D !== (f == null ? void 0 : f.offset) ||
              x.left !== (f == null ? void 0 : f.rect.left) ||
              x.width !== (f == null ? void 0 : f.rect.width)) &&
              y({ offset: D, rect: x });
          }
        },
        [t, c, C, f == null ? void 0 : f.offset, f == null ? void 0 : f.rect.left, f == null ? void 0 : f.rect.width]
      );
    Ne(
      function () {
        M();
      },
      [M]
    );
    var L = O.useCallback(
      function () {
        typeof l.current == 'function' && (l.current(), (l.current = null)),
          t && i.current && (l.current = or(t, i.current, M, { elementResize: 'ResizeObserver' in window }));
      },
      [t, M]
    );
    Ne(
      function () {
        L();
      },
      [L]
    );
    var b = O.useCallback(
      function (x) {
        (i.current = x), L();
      },
      [L]
    );
    if ((!r && c !== 'fixed') || !f) return null;
    var I = F(
      'div',
      P({ ref: b }, B(_(_({}, e), {}, { offset: f.offset, position: c, rect: f.rect }), 'menuPortal', { 'menu-portal': !0 }), s),
      a
    );
    return F(Bt.Provider, { value: E }, r ? vn.createPortal(I, r) : I);
  },
  wr = function (e) {
    var r = e.isDisabled,
      a = e.isRtl;
    return { label: 'container', direction: a ? 'rtl' : void 0, pointerEvents: r ? 'none' : void 0, position: 'relative' };
  },
  Br = function (e) {
    var r = e.children,
      a = e.innerProps,
      t = e.isDisabled,
      s = e.isRtl;
    return F('div', P({}, B(e, 'container', { '--is-disabled': t, '--is-rtl': s }), a), r);
  },
  Nr = function (e, r) {
    var a = e.theme.spacing,
      t = e.isMulti,
      s = e.hasValue,
      u = e.selectProps.controlShouldRenderValue;
    return _(
      {
        alignItems: 'center',
        display: t && s && u ? 'flex' : 'grid',
        flex: 1,
        flexWrap: 'wrap',
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        overflow: 'hidden'
      },
      r ? {} : { padding: ''.concat(a.baseUnit / 2, 'px ').concat(a.baseUnit * 2, 'px') }
    );
  },
  kr = function (e) {
    var r = e.children,
      a = e.innerProps,
      t = e.isMulti,
      s = e.hasValue;
    return F(
      'div',
      P({}, B(e, 'valueContainer', { 'value-container': !0, 'value-container--is-multi': t, 'value-container--has-value': s }), a),
      r
    );
  },
  Gr = function () {
    return { alignItems: 'center', alignSelf: 'stretch', display: 'flex', flexShrink: 0 };
  },
  Hr = function (e) {
    var r = e.children,
      a = e.innerProps;
    return F('div', P({}, B(e, 'indicatorsContainer', { indicators: !0 }), a), r);
  },
  ot,
  Ur = ['size'],
  $r = ['innerProps', 'isRtl', 'size'],
  zr = { name: '8mmkcg', styles: 'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0' },
  kt = function (e) {
    var r = e.size,
      a = ee(e, Ur);
    return F('svg', P({ height: r, width: r, viewBox: '0 0 20 20', 'aria-hidden': 'true', focusable: 'false', css: zr }, a));
  },
  Ke = function (e) {
    return F(
      kt,
      P({ size: 20 }, e),
      F('path', {
        d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'
      })
    );
  },
  Gt = function (e) {
    return F(
      kt,
      P({ size: 20 }, e),
      F('path', {
        d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'
      })
    );
  },
  Ht = function (e, r) {
    var a = e.isFocused,
      t = e.theme,
      s = t.spacing.baseUnit,
      u = t.colors;
    return _(
      { label: 'indicatorContainer', display: 'flex', transition: 'color 150ms' },
      r ? {} : { color: a ? u.neutral60 : u.neutral20, padding: s * 2, ':hover': { color: a ? u.neutral80 : u.neutral40 } }
    );
  },
  Kr = Ht,
  Wr = function (e) {
    var r = e.children,
      a = e.innerProps;
    return F('div', P({}, B(e, 'dropdownIndicator', { indicator: !0, 'dropdown-indicator': !0 }), a), r || F(Gt, null));
  },
  Yr = Ht,
  Zr = function (e) {
    var r = e.children,
      a = e.innerProps;
    return F('div', P({}, B(e, 'clearIndicator', { indicator: !0, 'clear-indicator': !0 }), a), r || F(Ke, null));
  },
  qr = function (e, r) {
    var a = e.isDisabled,
      t = e.theme,
      s = t.spacing.baseUnit,
      u = t.colors;
    return _(
      { label: 'indicatorSeparator', alignSelf: 'stretch', width: 1 },
      r ? {} : { backgroundColor: a ? u.neutral10 : u.neutral20, marginBottom: s * 2, marginTop: s * 2 }
    );
  },
  Jr = function (e) {
    var r = e.innerProps;
    return F('span', P({}, r, B(e, 'indicatorSeparator', { 'indicator-separator': !0 })));
  },
  Xr = En(
    ot ||
      (ot = Yn([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`
      ]))
  ),
  Qr = function (e, r) {
    var a = e.isFocused,
      t = e.size,
      s = e.theme,
      u = s.colors,
      c = s.spacing.baseUnit;
    return _(
      {
        label: 'loadingIndicator',
        display: 'flex',
        transition: 'color 150ms',
        alignSelf: 'center',
        fontSize: t,
        lineHeight: 1,
        marginRight: t,
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      r ? {} : { color: a ? u.neutral60 : u.neutral20, padding: c * 2 }
    );
  },
  _e = function (e) {
    var r = e.delay,
      a = e.offset;
    return F('span', {
      css: xt(
        {
          animation: ''.concat(Xr, ' 1s ease-in-out ').concat(r, 'ms infinite;'),
          backgroundColor: 'currentColor',
          borderRadius: '1em',
          display: 'inline-block',
          marginLeft: a ? '1em' : void 0,
          height: '1em',
          verticalAlign: 'top',
          width: '1em'
        },
        '',
        ''
      )
    });
  },
  ea = function (e) {
    var r = e.innerProps,
      a = e.isRtl,
      t = e.size,
      s = t === void 0 ? 4 : t,
      u = ee(e, $r);
    return F(
      'div',
      P({}, B(_(_({}, u), {}, { innerProps: r, isRtl: a, size: s }), 'loadingIndicator', { indicator: !0, 'loading-indicator': !0 }), r),
      F(_e, { delay: 0, offset: a }),
      F(_e, { delay: 160, offset: !0 }),
      F(_e, { delay: 320, offset: !a })
    );
  },
  ta = function (e, r) {
    var a = e.isDisabled,
      t = e.isFocused,
      s = e.theme,
      u = s.colors,
      c = s.borderRadius,
      i = s.spacing;
    return _(
      {
        label: 'control',
        alignItems: 'center',
        cursor: 'default',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minHeight: i.controlHeight,
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms'
      },
      r
        ? {}
        : {
            backgroundColor: a ? u.neutral5 : u.neutral0,
            borderColor: a ? u.neutral10 : t ? u.primary : u.neutral20,
            borderRadius: c,
            borderStyle: 'solid',
            borderWidth: 1,
            boxShadow: t ? '0 0 0 1px '.concat(u.primary) : void 0,
            '&:hover': { borderColor: t ? u.primary : u.neutral30 }
          }
    );
  },
  na = function (e) {
    var r = e.children,
      a = e.isDisabled,
      t = e.isFocused,
      s = e.innerRef,
      u = e.innerProps,
      c = e.menuIsOpen;
    return F(
      'div',
      P({ ref: s }, B(e, 'control', { control: !0, 'control--is-disabled': a, 'control--is-focused': t, 'control--menu-is-open': c }), u, {
        'aria-disabled': a || void 0
      }),
      r
    );
  },
  ra = na,
  aa = ['data'],
  ia = function (e, r) {
    var a = e.theme.spacing;
    return r ? {} : { paddingBottom: a.baseUnit * 2, paddingTop: a.baseUnit * 2 };
  },
  sa = function (e) {
    var r = e.children,
      a = e.cx,
      t = e.getStyles,
      s = e.getClassNames,
      u = e.Heading,
      c = e.headingProps,
      i = e.innerProps,
      l = e.label,
      d = e.theme,
      h = e.selectProps;
    return F(
      'div',
      P({}, B(e, 'group', { group: !0 }), i),
      F(u, P({}, c, { selectProps: h, theme: d, getStyles: t, getClassNames: s, cx: a }), l),
      F('div', null, r)
    );
  },
  oa = function (e, r) {
    var a = e.theme,
      t = a.colors,
      s = a.spacing;
    return _(
      { label: 'group', cursor: 'default', display: 'block' },
      r
        ? {}
        : {
            color: t.neutral40,
            fontSize: '75%',
            fontWeight: 500,
            marginBottom: '0.25em',
            paddingLeft: s.baseUnit * 3,
            paddingRight: s.baseUnit * 3,
            textTransform: 'uppercase'
          }
    );
  },
  ua = function (e) {
    var r = Tt(e);
    r.data;
    var a = ee(r, aa);
    return F('div', P({}, B(e, 'groupHeading', { 'group-heading': !0 }), a));
  },
  la = sa,
  ca = ['innerRef', 'isDisabled', 'isHidden', 'inputClassName'],
  da = function (e, r) {
    var a = e.isDisabled,
      t = e.value,
      s = e.theme,
      u = s.spacing,
      c = s.colors;
    return _(
      _({ visibility: a ? 'hidden' : 'visible', transform: t ? 'translateZ(0)' : '' }, fa),
      r ? {} : { margin: u.baseUnit / 2, paddingBottom: u.baseUnit / 2, paddingTop: u.baseUnit / 2, color: c.neutral80 }
    );
  },
  Ut = { gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: 0, margin: 0, outline: 0, padding: 0 },
  fa = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': _({ content: 'attr(data-value) " "', visibility: 'hidden', whiteSpace: 'pre' }, Ut)
  },
  pa = function (e) {
    return _({ label: 'input', color: 'inherit', background: 0, opacity: e ? 0 : 1, width: '100%' }, Ut);
  },
  ha = function (e) {
    var r = e.cx,
      a = e.value,
      t = Tt(e),
      s = t.innerRef,
      u = t.isDisabled,
      c = t.isHidden,
      i = t.inputClassName,
      l = ee(t, ca);
    return F(
      'div',
      P({}, B(e, 'input', { 'input-container': !0 }), { 'data-value': a || '' }),
      F('input', P({ className: r({ input: !0 }, i), ref: s, style: pa(c), disabled: u }, l))
    );
  },
  ma = ha,
  va = function (e, r) {
    var a = e.theme,
      t = a.spacing,
      s = a.borderRadius,
      u = a.colors;
    return _(
      { label: 'multiValue', display: 'flex', minWidth: 0 },
      r ? {} : { backgroundColor: u.neutral10, borderRadius: s / 2, margin: t.baseUnit / 2 }
    );
  },
  ga = function (e, r) {
    var a = e.theme,
      t = a.borderRadius,
      s = a.colors,
      u = e.cropWithEllipsis;
    return _(
      { overflow: 'hidden', textOverflow: u || u === void 0 ? 'ellipsis' : void 0, whiteSpace: 'nowrap' },
      r ? {} : { borderRadius: t / 2, color: s.neutral80, fontSize: '85%', padding: 3, paddingLeft: 6 }
    );
  },
  ba = function (e, r) {
    var a = e.theme,
      t = a.spacing,
      s = a.borderRadius,
      u = a.colors,
      c = e.isFocused;
    return _(
      { alignItems: 'center', display: 'flex' },
      r
        ? {}
        : {
            borderRadius: s / 2,
            backgroundColor: c ? u.dangerLight : void 0,
            paddingLeft: t.baseUnit,
            paddingRight: t.baseUnit,
            ':hover': { backgroundColor: u.dangerLight, color: u.danger }
          }
    );
  },
  $t = function (e) {
    var r = e.children,
      a = e.innerProps;
    return F('div', a, r);
  },
  Sa = $t,
  Ca = $t;
function Oa(n) {
  var e = n.children,
    r = n.innerProps;
  return F('div', P({ role: 'button' }, r), e || F(Ke, { size: 14 }));
}
var Ea = function (e) {
    var r = e.children,
      a = e.components,
      t = e.data,
      s = e.innerProps,
      u = e.isDisabled,
      c = e.removeProps,
      i = e.selectProps,
      l = a.Container,
      d = a.Label,
      h = a.Remove;
    return F(
      l,
      { data: t, innerProps: _(_({}, B(e, 'multiValue', { 'multi-value': !0, 'multi-value--is-disabled': u })), s), selectProps: i },
      F(d, { data: t, innerProps: _({}, B(e, 'multiValueLabel', { 'multi-value__label': !0 })), selectProps: i }, r),
      F(h, {
        data: t,
        innerProps: _(
          _({}, B(e, 'multiValueRemove', { 'multi-value__remove': !0 })),
          {},
          { 'aria-label': 'Remove '.concat(r || 'option') },
          c
        ),
        selectProps: i
      })
    );
  },
  Ia = Ea,
  ya = function (e, r) {
    var a = e.isDisabled,
      t = e.isFocused,
      s = e.isSelected,
      u = e.theme,
      c = u.spacing,
      i = u.colors;
    return _(
      {
        label: 'option',
        cursor: 'default',
        display: 'block',
        fontSize: 'inherit',
        width: '100%',
        userSelect: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
      },
      r
        ? {}
        : {
            backgroundColor: s ? i.primary : t ? i.primary25 : 'transparent',
            color: a ? i.neutral20 : s ? i.neutral0 : 'inherit',
            padding: ''.concat(c.baseUnit * 2, 'px ').concat(c.baseUnit * 3, 'px'),
            ':active': { backgroundColor: a ? void 0 : s ? i.primary : i.primary50 }
          }
    );
  },
  xa = function (e) {
    var r = e.children,
      a = e.isDisabled,
      t = e.isFocused,
      s = e.isSelected,
      u = e.innerRef,
      c = e.innerProps;
    return F(
      'div',
      P(
        {},
        B(e, 'option', { option: !0, 'option--is-disabled': a, 'option--is-focused': t, 'option--is-selected': s }),
        { ref: u, 'aria-disabled': a },
        c
      ),
      r
    );
  },
  Aa = xa,
  Fa = function (e, r) {
    var a = e.theme,
      t = a.spacing,
      s = a.colors;
    return _(
      { label: 'placeholder', gridArea: '1 / 1 / 2 / 3' },
      r ? {} : { color: s.neutral50, marginLeft: t.baseUnit / 2, marginRight: t.baseUnit / 2 }
    );
  },
  Ma = function (e) {
    var r = e.children,
      a = e.innerProps;
    return F('div', P({}, B(e, 'placeholder', { placeholder: !0 }), a), r);
  },
  Da = Ma,
  _a = function (e, r) {
    var a = e.isDisabled,
      t = e.theme,
      s = t.spacing,
      u = t.colors;
    return _(
      {
        label: 'singleValue',
        gridArea: '1 / 1 / 2 / 3',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      r ? {} : { color: a ? u.neutral40 : u.neutral80, marginLeft: s.baseUnit / 2, marginRight: s.baseUnit / 2 }
    );
  },
  Pa = function (e) {
    var r = e.children,
      a = e.isDisabled,
      t = e.innerProps;
    return F('div', P({}, B(e, 'singleValue', { 'single-value': !0, 'single-value--is-disabled': a }), t), r);
  },
  La = Pa,
  Ra = {
    ClearIndicator: Zr,
    Control: ra,
    DropdownIndicator: Wr,
    DownChevron: Gt,
    CrossIcon: Ke,
    Group: la,
    GroupHeading: ua,
    IndicatorsContainer: Hr,
    IndicatorSeparator: Jr,
    Input: ma,
    LoadingIndicator: ea,
    Menu: Mr,
    MenuList: _r,
    MenuPortal: Vr,
    LoadingMessage: Tr,
    NoOptionsMessage: Rr,
    MultiValue: Ia,
    MultiValueContainer: Sa,
    MultiValueLabel: Ca,
    MultiValueRemove: Oa,
    Option: Aa,
    Placeholder: Da,
    SelectContainer: Br,
    SingleValue: La,
    ValueContainer: kr
  },
  Ta = function (e) {
    return _(_({}, Ra), e.components);
  },
  ut =
    Number.isNaN ||
    function (e) {
      return typeof e == 'number' && e !== e;
    };
function ja(n, e) {
  return !!(n === e || (ut(n) && ut(e)));
}
function Va(n, e) {
  if (n.length !== e.length) return !1;
  for (var r = 0; r < n.length; r++) if (!ja(n[r], e[r])) return !1;
  return !0;
}
function wa(n, e) {
  e === void 0 && (e = Va);
  var r = null;
  function a() {
    for (var t = [], s = 0; s < arguments.length; s++) t[s] = arguments[s];
    if (r && r.lastThis === this && e(t, r.lastArgs)) return r.lastResult;
    var u = n.apply(this, t);
    return (r = { lastResult: u, lastArgs: t, lastThis: this }), u;
  }
  return (
    (a.clear = function () {
      r = null;
    }),
    a
  );
}
var Ba = {
    name: '7pg0cj-a11yText',
    styles:
      'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap'
  },
  Na = function (e) {
    return F('span', P({ css: Ba }, e));
  },
  lt = Na,
  ka = {
    guidance: function (e) {
      var r = e.isSearchable,
        a = e.isMulti,
        t = e.tabSelectsValue,
        s = e.context,
        u = e.isInitialFocus;
      switch (s) {
        case 'menu':
          return 'Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu'.concat(
            t ? ', press Tab to select the option and exit the menu' : '',
            '.'
          );
        case 'input':
          return u
            ? ''
                .concat(e['aria-label'] || 'Select', ' is focused ')
                .concat(r ? ',type to refine list' : '', ', press Down to open the menu, ')
                .concat(a ? ' press left to focus selected values' : '')
            : '';
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function (e) {
      var r = e.action,
        a = e.label,
        t = a === void 0 ? '' : a,
        s = e.labels,
        u = e.isDisabled;
      switch (r) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return 'option '.concat(t, ', deselected.');
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return 'option'.concat(s.length > 1 ? 's' : '', ' ').concat(s.join(','), ', selected.');
        case 'select-option':
          return u ? 'option '.concat(t, ' is disabled. Select another option.') : 'option '.concat(t, ', selected.');
        default:
          return '';
      }
    },
    onFocus: function (e) {
      var r = e.context,
        a = e.focused,
        t = e.options,
        s = e.label,
        u = s === void 0 ? '' : s,
        c = e.selectValue,
        i = e.isDisabled,
        l = e.isSelected,
        d = e.isAppleDevice,
        h = function (g, m) {
          return g && g.length ? ''.concat(g.indexOf(m) + 1, ' of ').concat(g.length) : '';
        };
      if (r === 'value' && c) return 'value '.concat(u, ' focused, ').concat(h(c, a), '.');
      if (r === 'menu' && d) {
        var C = i ? ' disabled' : '',
          S = ''.concat(l ? ' selected' : '').concat(C);
        return ''.concat(u).concat(S, ', ').concat(h(t, a), '.');
      }
      return '';
    },
    onFilter: function (e) {
      var r = e.inputValue,
        a = e.resultsMessage;
      return ''.concat(a).concat(r ? ' for search term ' + r : '', '.');
    }
  },
  Ga = function (e) {
    var r = e.ariaSelection,
      a = e.focusedOption,
      t = e.focusedValue,
      s = e.focusableOptions,
      u = e.isFocused,
      c = e.selectValue,
      i = e.selectProps,
      l = e.id,
      d = e.isAppleDevice,
      h = i.ariaLiveMessages,
      C = i.getOptionLabel,
      S = i.inputValue,
      E = i.isMulti,
      g = i.isOptionDisabled,
      m = i.isSearchable,
      f = i.menuIsOpen,
      y = i.options,
      M = i.screenReaderStatus,
      L = i.tabSelectsValue,
      b = i.isLoading,
      I = i['aria-label'],
      x = i['aria-live'],
      A = O.useMemo(
        function () {
          return _(_({}, ka), h || {});
        },
        [h]
      ),
      D = O.useMemo(
        function () {
          var G = '';
          if (r && A.onChange) {
            var N = r.option,
              p = r.options,
              j = r.removedValue,
              T = r.removedValues,
              U = r.value,
              re = function (J) {
                return Array.isArray(J) ? null : J;
              },
              V = j || N || re(U),
              $ = V ? C(V) : '',
              z = p || T || void 0,
              q = z ? z.map(C) : [],
              Z = _({ isDisabled: V && g(V, c), label: $, labels: q }, r);
            G = A.onChange(Z);
          }
          return G;
        },
        [r, A, g, c, C]
      ),
      R = O.useMemo(
        function () {
          var G = '',
            N = a || t,
            p = !!(a && c && c.includes(a));
          if (N && A.onFocus) {
            var j = {
              focused: N,
              label: C(N),
              isDisabled: g(N, c),
              isSelected: p,
              options: s,
              context: N === a ? 'menu' : 'value',
              selectValue: c,
              isAppleDevice: d
            };
            G = A.onFocus(j);
          }
          return G;
        },
        [a, t, C, g, A, s, c, d]
      ),
      k = O.useMemo(
        function () {
          var G = '';
          if (f && y.length && !b && A.onFilter) {
            var N = M({ count: s.length });
            G = A.onFilter({ inputValue: S, resultsMessage: N });
          }
          return G;
        },
        [s, S, f, A, y, M, b]
      ),
      H = (r == null ? void 0 : r.action) === 'initial-input-focus',
      Y = O.useMemo(
        function () {
          var G = '';
          if (A.guidance) {
            var N = t ? 'value' : f ? 'menu' : 'input';
            G = A.guidance({
              'aria-label': I,
              context: N,
              isDisabled: a && g(a, c),
              isMulti: E,
              isSearchable: m,
              tabSelectsValue: L,
              isInitialFocus: H
            });
          }
          return G;
        },
        [I, a, t, E, g, m, f, A, c, L, H]
      ),
      W = F(
        O.Fragment,
        null,
        F('span', { id: 'aria-selection' }, D),
        F('span', { id: 'aria-focused' }, R),
        F('span', { id: 'aria-results' }, k),
        F('span', { id: 'aria-guidance' }, Y)
      );
    return F(
      O.Fragment,
      null,
      F(lt, { id: l }, H && W),
      F(lt, { 'aria-live': x, 'aria-atomic': 'false', 'aria-relevant': 'additions text', role: 'log' }, u && !H && W)
    );
  },
  Ha = Ga,
  ke = [
    { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
    { base: 'AA', letters: 'Ꜳ' },
    { base: 'AE', letters: 'ÆǼǢ' },
    { base: 'AO', letters: 'Ꜵ' },
    { base: 'AU', letters: 'Ꜷ' },
    { base: 'AV', letters: 'ꜸꜺ' },
    { base: 'AY', letters: 'Ꜽ' },
    { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
    { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
    { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
    { base: 'DZ', letters: 'ǱǄ' },
    { base: 'Dz', letters: 'ǲǅ' },
    { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
    { base: 'F', letters: 'FⒻＦḞƑꝻ' },
    { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
    { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
    { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
    { base: 'J', letters: 'JⒿＪĴɈ' },
    { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
    { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
    { base: 'LJ', letters: 'Ǉ' },
    { base: 'Lj', letters: 'ǈ' },
    { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
    { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
    { base: 'NJ', letters: 'Ǌ' },
    { base: 'Nj', letters: 'ǋ' },
    { base: 'O', letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' },
    { base: 'OI', letters: 'Ƣ' },
    { base: 'OO', letters: 'Ꝏ' },
    { base: 'OU', letters: 'Ȣ' },
    { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
    { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
    { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
    { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
    { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
    { base: 'TZ', letters: 'Ꜩ' },
    { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
    { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
    { base: 'VY', letters: 'Ꝡ' },
    { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
    { base: 'X', letters: 'XⓍＸẊẌ' },
    { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
    { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
    { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
    { base: 'aa', letters: 'ꜳ' },
    { base: 'ae', letters: 'æǽǣ' },
    { base: 'ao', letters: 'ꜵ' },
    { base: 'au', letters: 'ꜷ' },
    { base: 'av', letters: 'ꜹꜻ' },
    { base: 'ay', letters: 'ꜽ' },
    { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
    { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
    { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
    { base: 'dz', letters: 'ǳǆ' },
    { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
    { base: 'f', letters: 'fⓕｆḟƒꝼ' },
    { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
    { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
    { base: 'hv', letters: 'ƕ' },
    { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
    { base: 'j', letters: 'jⓙｊĵǰɉ' },
    { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
    { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
    { base: 'lj', letters: 'ǉ' },
    { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
    { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
    { base: 'nj', letters: 'ǌ' },
    { base: 'o', letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ' },
    { base: 'oi', letters: 'ƣ' },
    { base: 'ou', letters: 'ȣ' },
    { base: 'oo', letters: 'ꝏ' },
    { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
    { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
    { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
    { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
    { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
    { base: 'tz', letters: 'ꜩ' },
    { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
    { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
    { base: 'vy', letters: 'ꝡ' },
    { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
    { base: 'x', letters: 'xⓧｘẋẍ' },
    { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
    { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' }
  ],
  Ua = new RegExp(
    '[' +
      ke
        .map(function (n) {
          return n.letters;
        })
        .join('') +
      ']',
    'g'
  ),
  zt = {};
for (var Pe = 0; Pe < ke.length; Pe++) for (var Le = ke[Pe], Re = 0; Re < Le.letters.length; Re++) zt[Le.letters[Re]] = Le.base;
var Kt = function (e) {
    return e.replace(Ua, function (r) {
      return zt[r];
    });
  },
  $a = wa(Kt),
  ct = function (e) {
    return e.replace(/^\s+|\s+$/g, '');
  },
  za = function (e) {
    return ''.concat(e.label, ' ').concat(e.value);
  },
  Ka = function (e) {
    return function (r, a) {
      if (r.data.__isNew__) return !0;
      var t = _({ ignoreCase: !0, ignoreAccents: !0, stringify: za, trim: !0, matchFrom: 'any' }, e),
        s = t.ignoreCase,
        u = t.ignoreAccents,
        c = t.stringify,
        i = t.trim,
        l = t.matchFrom,
        d = i ? ct(a) : a,
        h = i ? ct(c(r)) : c(r);
      return (
        s && ((d = d.toLowerCase()), (h = h.toLowerCase())),
        u && ((d = $a(d)), (h = Kt(h))),
        l === 'start' ? h.substr(0, d.length) === d : h.indexOf(d) > -1
      );
    };
  },
  Wa = ['innerRef'];
function Ya(n) {
  var e = n.innerRef,
    r = ee(n, Wa),
    a = Cr(r, 'onExited', 'in', 'enter', 'exit', 'appear');
  return F(
    'input',
    P({ ref: e }, a, {
      css: xt(
        {
          label: 'dummyInput',
          background: 0,
          border: 0,
          caretColor: 'transparent',
          fontSize: 'inherit',
          gridArea: '1 / 1 / 2 / 3',
          outline: 0,
          padding: 0,
          width: 1,
          color: 'transparent',
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(.01)'
        },
        '',
        ''
      )
    })
  );
}
var Za = function (e) {
  e.cancelable && e.preventDefault(), e.stopPropagation();
};
function qa(n) {
  var e = n.isEnabled,
    r = n.onBottomArrive,
    a = n.onBottomLeave,
    t = n.onTopArrive,
    s = n.onTopLeave,
    u = O.useRef(!1),
    c = O.useRef(!1),
    i = O.useRef(0),
    l = O.useRef(null),
    d = O.useCallback(
      function (m, f) {
        if (l.current !== null) {
          var y = l.current,
            M = y.scrollTop,
            L = y.scrollHeight,
            b = y.clientHeight,
            I = l.current,
            x = f > 0,
            A = L - b - M,
            D = !1;
          A > f && u.current && (a && a(m), (u.current = !1)),
            x && c.current && (s && s(m), (c.current = !1)),
            x && f > A
              ? (r && !u.current && r(m), (I.scrollTop = L), (D = !0), (u.current = !0))
              : !x && -f > M && (t && !c.current && t(m), (I.scrollTop = 0), (D = !0), (c.current = !0)),
            D && Za(m);
        }
      },
      [r, a, t, s]
    ),
    h = O.useCallback(
      function (m) {
        d(m, m.deltaY);
      },
      [d]
    ),
    C = O.useCallback(function (m) {
      i.current = m.changedTouches[0].clientY;
    }, []),
    S = O.useCallback(
      function (m) {
        var f = i.current - m.changedTouches[0].clientY;
        d(m, f);
      },
      [d]
    ),
    E = O.useCallback(
      function (m) {
        if (m) {
          var f = gr ? { passive: !1 } : !1;
          m.addEventListener('wheel', h, f), m.addEventListener('touchstart', C, f), m.addEventListener('touchmove', S, f);
        }
      },
      [S, C, h]
    ),
    g = O.useCallback(
      function (m) {
        m && (m.removeEventListener('wheel', h, !1), m.removeEventListener('touchstart', C, !1), m.removeEventListener('touchmove', S, !1));
      },
      [S, C, h]
    );
  return (
    O.useEffect(
      function () {
        if (e) {
          var m = l.current;
          return (
            E(m),
            function () {
              g(m);
            }
          );
        }
      },
      [e, E, g]
    ),
    function (m) {
      l.current = m;
    }
  );
}
var dt = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
  ft = { boxSizing: 'border-box', overflow: 'hidden', position: 'relative', height: '100%' };
function pt(n) {
  n.cancelable && n.preventDefault();
}
function ht(n) {
  n.stopPropagation();
}
function mt() {
  var n = this.scrollTop,
    e = this.scrollHeight,
    r = n + this.offsetHeight;
  n === 0 ? (this.scrollTop = 1) : r === e && (this.scrollTop = n - 1);
}
function vt() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var gt = !!(typeof window < 'u' && window.document && window.document.createElement),
  ue = 0,
  ae = { capture: !1, passive: !1 };
function Ja(n) {
  var e = n.isEnabled,
    r = n.accountForScrollbars,
    a = r === void 0 ? !0 : r,
    t = O.useRef({}),
    s = O.useRef(null),
    u = O.useCallback(
      function (i) {
        if (gt) {
          var l = document.body,
            d = l && l.style;
          if (
            (a &&
              dt.forEach(function (E) {
                var g = d && d[E];
                t.current[E] = g;
              }),
            a && ue < 1)
          ) {
            var h = parseInt(t.current.paddingRight, 10) || 0,
              C = document.body ? document.body.clientWidth : 0,
              S = window.innerWidth - C + h || 0;
            Object.keys(ft).forEach(function (E) {
              var g = ft[E];
              d && (d[E] = g);
            }),
              d && (d.paddingRight = ''.concat(S, 'px'));
          }
          l &&
            vt() &&
            (l.addEventListener('touchmove', pt, ae),
            i && (i.addEventListener('touchstart', mt, ae), i.addEventListener('touchmove', ht, ae))),
            (ue += 1);
        }
      },
      [a]
    ),
    c = O.useCallback(
      function (i) {
        if (gt) {
          var l = document.body,
            d = l && l.style;
          (ue = Math.max(ue - 1, 0)),
            a &&
              ue < 1 &&
              dt.forEach(function (h) {
                var C = t.current[h];
                d && (d[h] = C);
              }),
            l &&
              vt() &&
              (l.removeEventListener('touchmove', pt, ae),
              i && (i.removeEventListener('touchstart', mt, ae), i.removeEventListener('touchmove', ht, ae)));
        }
      },
      [a]
    );
  return (
    O.useEffect(
      function () {
        if (e) {
          var i = s.current;
          return (
            u(i),
            function () {
              c(i);
            }
          );
        }
      },
      [e, u, c]
    ),
    function (i) {
      s.current = i;
    }
  );
}
var Xa = function (e) {
    var r = e.target;
    return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
  },
  Qa = { name: '1kfdb0e', styles: 'position:fixed;left:0;bottom:0;right:0;top:0' };
function ei(n) {
  var e = n.children,
    r = n.lockEnabled,
    a = n.captureEnabled,
    t = a === void 0 ? !0 : a,
    s = n.onBottomArrive,
    u = n.onBottomLeave,
    c = n.onTopArrive,
    i = n.onTopLeave,
    l = qa({ isEnabled: t, onBottomArrive: s, onBottomLeave: u, onTopArrive: c, onTopLeave: i }),
    d = Ja({ isEnabled: r }),
    h = function (S) {
      l(S), d(S);
    };
  return F(O.Fragment, null, r && F('div', { onClick: Xa, css: Qa }), e(h));
}
var ti = {
    name: '1a0ro4n-requiredInput',
    styles: 'label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%'
  },
  ni = function (e) {
    var r = e.name,
      a = e.onFocus;
    return F('input', {
      required: !0,
      name: r,
      tabIndex: -1,
      'aria-hidden': 'true',
      onFocus: a,
      css: ti,
      value: '',
      onChange: function () {}
    });
  },
  ri = ni;
function We(n) {
  var e;
  return typeof window < 'u' && window.navigator != null
    ? n.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform)
    : !1;
}
function ai() {
  return We(/^iPhone/i);
}
function Wt() {
  return We(/^Mac/i);
}
function ii() {
  return We(/^iPad/i) || (Wt() && navigator.maxTouchPoints > 1);
}
function si() {
  return ai() || ii();
}
function oi() {
  return Wt() || si();
}
var ui = function (e) {
    return e.label;
  },
  li = function (e) {
    return e.label;
  },
  ci = function (e) {
    return e.value;
  },
  di = function (e) {
    return !!e.isDisabled;
  },
  fi = {
    clearIndicator: Yr,
    container: wr,
    control: ta,
    dropdownIndicator: Kr,
    group: ia,
    groupHeading: oa,
    indicatorsContainer: Gr,
    indicatorSeparator: qr,
    input: da,
    loadingIndicator: Qr,
    loadingMessage: Lr,
    menu: xr,
    menuList: Dr,
    menuPortal: jr,
    multiValue: va,
    multiValueLabel: ga,
    multiValueRemove: ba,
    noOptionsMessage: Pr,
    option: ya,
    placeholder: Fa,
    singleValue: _a,
    valueContainer: Nr
  },
  pi = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)'
  },
  hi = 4,
  Yt = 4,
  mi = 38,
  vi = Yt * 2,
  gi = { baseUnit: Yt, controlHeight: mi, menuGutter: vi },
  Te = { borderRadius: hi, colors: pi, spacing: gi },
  bi = {
    'aria-live': 'polite',
    backspaceRemovesValue: !0,
    blurInputOnSelect: st(),
    captureMenuScroll: !st(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: Ka(),
    formatGroupLabel: ui,
    getOptionLabel: li,
    getOptionValue: ci,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: di,
    loadingMessage: function () {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !mr(),
    noOptionsMessage: function () {
      return 'No options';
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function (e) {
      var r = e.count;
      return ''.concat(r, ' result').concat(r !== 1 ? 's' : '', ' available');
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1
  };
function bt(n, e, r, a) {
  var t = Jt(n, e, r),
    s = Xt(n, e, r),
    u = qt(n, e),
    c = Ae(n, e);
  return { type: 'option', data: e, isDisabled: t, isSelected: s, label: u, value: c, index: a };
}
function be(n, e) {
  return n.options
    .map(function (r, a) {
      if ('options' in r) {
        var t = r.options
          .map(function (u, c) {
            return bt(n, u, e, c);
          })
          .filter(function (u) {
            return Ct(n, u);
          });
        return t.length > 0 ? { type: 'group', data: r, options: t, index: a } : void 0;
      }
      var s = bt(n, r, e, a);
      return Ct(n, s) ? s : void 0;
    })
    .filter(br);
}
function Zt(n) {
  return n.reduce(function (e, r) {
    return (
      r.type === 'group'
        ? e.push.apply(
            e,
            He(
              r.options.map(function (a) {
                return a.data;
              })
            )
          )
        : e.push(r.data),
      e
    );
  }, []);
}
function St(n, e) {
  return n.reduce(function (r, a) {
    return (
      a.type === 'group'
        ? r.push.apply(
            r,
            He(
              a.options.map(function (t) {
                return { data: t.data, id: ''.concat(e, '-').concat(a.index, '-').concat(t.index) };
              })
            )
          )
        : r.push({ data: a.data, id: ''.concat(e, '-').concat(a.index) }),
      r
    );
  }, []);
}
function Si(n, e) {
  return Zt(be(n, e));
}
function Ct(n, e) {
  var r = n.inputValue,
    a = r === void 0 ? '' : r,
    t = e.data,
    s = e.isSelected,
    u = e.label,
    c = e.value;
  return (!en(n) || !s) && Qt(n, { label: u, value: c, data: t }, a);
}
function Ci(n, e) {
  var r = n.focusedValue,
    a = n.selectValue,
    t = a.indexOf(r);
  if (t > -1) {
    var s = e.indexOf(r);
    if (s > -1) return r;
    if (t < e.length) return e[t];
  }
  return null;
}
function Oi(n, e) {
  var r = n.focusedOption;
  return r && e.indexOf(r) > -1 ? r : e[0];
}
var je = function (e, r) {
    var a,
      t =
        (a = e.find(function (s) {
          return s.data === r;
        })) === null || a === void 0
          ? void 0
          : a.id;
    return t || null;
  },
  qt = function (e, r) {
    return e.getOptionLabel(r);
  },
  Ae = function (e, r) {
    return e.getOptionValue(r);
  };
function Jt(n, e, r) {
  return typeof n.isOptionDisabled == 'function' ? n.isOptionDisabled(e, r) : !1;
}
function Xt(n, e, r) {
  if (r.indexOf(e) > -1) return !0;
  if (typeof n.isOptionSelected == 'function') return n.isOptionSelected(e, r);
  var a = Ae(n, e);
  return r.some(function (t) {
    return Ae(n, t) === a;
  });
}
function Qt(n, e, r) {
  return n.filterOption ? n.filterOption(e, r) : !0;
}
var en = function (e) {
    var r = e.hideSelectedOptions,
      a = e.isMulti;
    return r === void 0 ? a : r;
  },
  Ei = 1,
  tn = (function (n) {
    Hn(r, n);
    var e = $n(r);
    function r(a) {
      var t;
      if (
        (kn(this, r),
        (t = e.call(this, a)),
        (t.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: ''
        }),
        (t.blockOptionHover = !1),
        (t.isComposing = !1),
        (t.commonProps = void 0),
        (t.initialTouchX = 0),
        (t.initialTouchY = 0),
        (t.openAfterFocus = !1),
        (t.scrollToFocusedOptionOnUpdate = !1),
        (t.userIsDragging = void 0),
        (t.isAppleDevice = oi()),
        (t.controlRef = null),
        (t.getControlRef = function (i) {
          t.controlRef = i;
        }),
        (t.focusedOptionRef = null),
        (t.getFocusedOptionRef = function (i) {
          t.focusedOptionRef = i;
        }),
        (t.menuListRef = null),
        (t.getMenuListRef = function (i) {
          t.menuListRef = i;
        }),
        (t.inputRef = null),
        (t.getInputRef = function (i) {
          t.inputRef = i;
        }),
        (t.focus = t.focusInput),
        (t.blur = t.blurInput),
        (t.onChange = function (i, l) {
          var d = t.props,
            h = d.onChange,
            C = d.name;
          (l.name = C), t.ariaOnChange(i, l), h(i, l);
        }),
        (t.setValue = function (i, l, d) {
          var h = t.props,
            C = h.closeMenuOnSelect,
            S = h.isMulti,
            E = h.inputValue;
          t.onInputChange('', { action: 'set-value', prevInputValue: E }),
            C && (t.setState({ inputIsHiddenAfterUpdate: !S }), t.onMenuClose()),
            t.setState({ clearFocusValueOnUpdate: !0 }),
            t.onChange(i, { action: l, option: d });
        }),
        (t.selectOption = function (i) {
          var l = t.props,
            d = l.blurInputOnSelect,
            h = l.isMulti,
            C = l.name,
            S = t.state.selectValue,
            E = h && t.isOptionSelected(i, S),
            g = t.isOptionDisabled(i, S);
          if (E) {
            var m = t.getOptionValue(i);
            t.setValue(
              S.filter(function (f) {
                return t.getOptionValue(f) !== m;
              }),
              'deselect-option',
              i
            );
          } else if (!g) h ? t.setValue([].concat(He(S), [i]), 'select-option', i) : t.setValue(i, 'select-option');
          else {
            t.ariaOnChange(i, { action: 'select-option', option: i, name: C });
            return;
          }
          d && t.blurInput();
        }),
        (t.removeValue = function (i) {
          var l = t.props.isMulti,
            d = t.state.selectValue,
            h = t.getOptionValue(i),
            C = d.filter(function (E) {
              return t.getOptionValue(E) !== h;
            }),
            S = ve(l, C, C[0] || null);
          t.onChange(S, { action: 'remove-value', removedValue: i }), t.focusInput();
        }),
        (t.clearValue = function () {
          var i = t.state.selectValue;
          t.onChange(ve(t.props.isMulti, [], null), { action: 'clear', removedValues: i });
        }),
        (t.popValue = function () {
          var i = t.props.isMulti,
            l = t.state.selectValue,
            d = l[l.length - 1],
            h = l.slice(0, l.length - 1),
            C = ve(i, h, h[0] || null);
          d && t.onChange(C, { action: 'pop-value', removedValue: d });
        }),
        (t.getFocusedOptionId = function (i) {
          return je(t.state.focusableOptionsWithIds, i);
        }),
        (t.getFocusableOptionsWithIds = function () {
          return St(be(t.props, t.state.selectValue), t.getElementId('option'));
        }),
        (t.getValue = function () {
          return t.state.selectValue;
        }),
        (t.cx = function () {
          for (var i = arguments.length, l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d];
          return cr.apply(void 0, [t.props.classNamePrefix].concat(l));
        }),
        (t.getOptionLabel = function (i) {
          return qt(t.props, i);
        }),
        (t.getOptionValue = function (i) {
          return Ae(t.props, i);
        }),
        (t.getStyles = function (i, l) {
          var d = t.props.unstyled,
            h = fi[i](l, d);
          h.boxSizing = 'border-box';
          var C = t.props.styles[i];
          return C ? C(h, l) : h;
        }),
        (t.getClassNames = function (i, l) {
          var d, h;
          return (d = (h = t.props.classNames)[i]) === null || d === void 0 ? void 0 : d.call(h, l);
        }),
        (t.getElementId = function (i) {
          return ''.concat(t.state.instancePrefix, '-').concat(i);
        }),
        (t.getComponents = function () {
          return Ta(t.props);
        }),
        (t.buildCategorizedOptions = function () {
          return be(t.props, t.state.selectValue);
        }),
        (t.getCategorizedOptions = function () {
          return t.props.menuIsOpen ? t.buildCategorizedOptions() : [];
        }),
        (t.buildFocusableOptions = function () {
          return Zt(t.buildCategorizedOptions());
        }),
        (t.getFocusableOptions = function () {
          return t.props.menuIsOpen ? t.buildFocusableOptions() : [];
        }),
        (t.ariaOnChange = function (i, l) {
          t.setState({ ariaSelection: _({ value: i }, l) });
        }),
        (t.onMenuMouseDown = function (i) {
          i.button === 0 && (i.stopPropagation(), i.preventDefault(), t.focusInput());
        }),
        (t.onMenuMouseMove = function (i) {
          t.blockOptionHover = !1;
        }),
        (t.onControlMouseDown = function (i) {
          if (!i.defaultPrevented) {
            var l = t.props.openMenuOnClick;
            t.state.isFocused
              ? t.props.menuIsOpen
                ? i.target.tagName !== 'INPUT' && i.target.tagName !== 'TEXTAREA' && t.onMenuClose()
                : l && t.openMenu('first')
              : (l && (t.openAfterFocus = !0), t.focusInput()),
              i.target.tagName !== 'INPUT' && i.target.tagName !== 'TEXTAREA' && i.preventDefault();
          }
        }),
        (t.onDropdownIndicatorMouseDown = function (i) {
          if (!(i && i.type === 'mousedown' && i.button !== 0) && !t.props.isDisabled) {
            var l = t.props,
              d = l.isMulti,
              h = l.menuIsOpen;
            t.focusInput(), h ? (t.setState({ inputIsHiddenAfterUpdate: !d }), t.onMenuClose()) : t.openMenu('first'), i.preventDefault();
          }
        }),
        (t.onClearIndicatorMouseDown = function (i) {
          (i && i.type === 'mousedown' && i.button !== 0) ||
            (t.clearValue(),
            i.preventDefault(),
            (t.openAfterFocus = !1),
            i.type === 'touchend'
              ? t.focusInput()
              : setTimeout(function () {
                  return t.focusInput();
                }));
        }),
        (t.onScroll = function (i) {
          typeof t.props.closeMenuOnScroll == 'boolean'
            ? i.target instanceof HTMLElement && Me(i.target) && t.props.onMenuClose()
            : typeof t.props.closeMenuOnScroll == 'function' && t.props.closeMenuOnScroll(i) && t.props.onMenuClose();
        }),
        (t.onCompositionStart = function () {
          t.isComposing = !0;
        }),
        (t.onCompositionEnd = function () {
          t.isComposing = !1;
        }),
        (t.onTouchStart = function (i) {
          var l = i.touches,
            d = l && l.item(0);
          d && ((t.initialTouchX = d.clientX), (t.initialTouchY = d.clientY), (t.userIsDragging = !1));
        }),
        (t.onTouchMove = function (i) {
          var l = i.touches,
            d = l && l.item(0);
          if (d) {
            var h = Math.abs(d.clientX - t.initialTouchX),
              C = Math.abs(d.clientY - t.initialTouchY),
              S = 5;
            t.userIsDragging = h > S || C > S;
          }
        }),
        (t.onTouchEnd = function (i) {
          t.userIsDragging ||
            (t.controlRef && !t.controlRef.contains(i.target) && t.menuListRef && !t.menuListRef.contains(i.target) && t.blurInput(),
            (t.initialTouchX = 0),
            (t.initialTouchY = 0));
        }),
        (t.onControlTouchEnd = function (i) {
          t.userIsDragging || t.onControlMouseDown(i);
        }),
        (t.onClearIndicatorTouchEnd = function (i) {
          t.userIsDragging || t.onClearIndicatorMouseDown(i);
        }),
        (t.onDropdownIndicatorTouchEnd = function (i) {
          t.userIsDragging || t.onDropdownIndicatorMouseDown(i);
        }),
        (t.handleInputChange = function (i) {
          var l = t.props.inputValue,
            d = i.currentTarget.value;
          t.setState({ inputIsHiddenAfterUpdate: !1 }),
            t.onInputChange(d, { action: 'input-change', prevInputValue: l }),
            t.props.menuIsOpen || t.onMenuOpen();
        }),
        (t.onInputFocus = function (i) {
          t.props.onFocus && t.props.onFocus(i),
            t.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu('first'),
            (t.openAfterFocus = !1);
        }),
        (t.onInputBlur = function (i) {
          var l = t.props.inputValue;
          if (t.menuListRef && t.menuListRef.contains(document.activeElement)) {
            t.inputRef.focus();
            return;
          }
          t.props.onBlur && t.props.onBlur(i),
            t.onInputChange('', { action: 'input-blur', prevInputValue: l }),
            t.onMenuClose(),
            t.setState({ focusedValue: null, isFocused: !1 });
        }),
        (t.onOptionHover = function (i) {
          if (!(t.blockOptionHover || t.state.focusedOption === i)) {
            var l = t.getFocusableOptions(),
              d = l.indexOf(i);
            t.setState({ focusedOption: i, focusedOptionId: d > -1 ? t.getFocusedOptionId(i) : null });
          }
        }),
        (t.shouldHideSelectedOptions = function () {
          return en(t.props);
        }),
        (t.onValueInputFocus = function (i) {
          i.preventDefault(), i.stopPropagation(), t.focus();
        }),
        (t.onKeyDown = function (i) {
          var l = t.props,
            d = l.isMulti,
            h = l.backspaceRemovesValue,
            C = l.escapeClearsValue,
            S = l.inputValue,
            E = l.isClearable,
            g = l.isDisabled,
            m = l.menuIsOpen,
            f = l.onKeyDown,
            y = l.tabSelectsValue,
            M = l.openMenuOnFocus,
            L = t.state,
            b = L.focusedOption,
            I = L.focusedValue,
            x = L.selectValue;
          if (!g && !(typeof f == 'function' && (f(i), i.defaultPrevented))) {
            switch (((t.blockOptionHover = !0), i.key)) {
              case 'ArrowLeft':
                if (!d || S) return;
                t.focusValue('previous');
                break;
              case 'ArrowRight':
                if (!d || S) return;
                t.focusValue('next');
                break;
              case 'Delete':
              case 'Backspace':
                if (S) return;
                if (I) t.removeValue(I);
                else {
                  if (!h) return;
                  d ? t.popValue() : E && t.clearValue();
                }
                break;
              case 'Tab':
                if (t.isComposing || i.shiftKey || !m || !y || !b || (M && t.isOptionSelected(b, x))) return;
                t.selectOption(b);
                break;
              case 'Enter':
                if (i.keyCode === 229) break;
                if (m) {
                  if (!b || t.isComposing) return;
                  t.selectOption(b);
                  break;
                }
                return;
              case 'Escape':
                m
                  ? (t.setState({ inputIsHiddenAfterUpdate: !1 }),
                    t.onInputChange('', { action: 'menu-close', prevInputValue: S }),
                    t.onMenuClose())
                  : E && C && t.clearValue();
                break;
              case ' ':
                if (S) return;
                if (!m) {
                  t.openMenu('first');
                  break;
                }
                if (!b) return;
                t.selectOption(b);
                break;
              case 'ArrowUp':
                m ? t.focusOption('up') : t.openMenu('last');
                break;
              case 'ArrowDown':
                m ? t.focusOption('down') : t.openMenu('first');
                break;
              case 'PageUp':
                if (!m) return;
                t.focusOption('pageup');
                break;
              case 'PageDown':
                if (!m) return;
                t.focusOption('pagedown');
                break;
              case 'Home':
                if (!m) return;
                t.focusOption('first');
                break;
              case 'End':
                if (!m) return;
                t.focusOption('last');
                break;
              default:
                return;
            }
            i.preventDefault();
          }
        }),
        (t.state.instancePrefix = 'react-select-' + (t.props.instanceId || ++Ei)),
        (t.state.selectValue = at(a.value)),
        a.menuIsOpen && t.state.selectValue.length)
      ) {
        var s = t.getFocusableOptionsWithIds(),
          u = t.buildFocusableOptions(),
          c = u.indexOf(t.state.selectValue[0]);
        (t.state.focusableOptionsWithIds = s), (t.state.focusedOption = u[c]), (t.state.focusedOptionId = je(s, u[c]));
      }
      return t;
    }
    return (
      Gn(
        r,
        [
          {
            key: 'componentDidMount',
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener('scroll', this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  it(this.menuListRef, this.focusedOptionRef);
            }
          },
          {
            key: 'componentDidUpdate',
            value: function (t) {
              var s = this.props,
                u = s.isDisabled,
                c = s.menuIsOpen,
                i = this.state.isFocused;
              ((i && !u && t.isDisabled) || (i && c && !t.menuIsOpen)) && this.focusInput(),
                i && u && !t.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !i && !u && t.isDisabled && this.inputRef === document.activeElement && this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (it(this.menuListRef, this.focusedOptionRef), (this.scrollToFocusedOptionOnUpdate = !1));
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener('scroll', this.onScroll, !0);
            }
          },
          {
            key: 'onMenuOpen',
            value: function () {
              this.props.onMenuOpen();
            }
          },
          {
            key: 'onMenuClose',
            value: function () {
              this.onInputChange('', { action: 'menu-close', prevInputValue: this.props.inputValue }), this.props.onMenuClose();
            }
          },
          {
            key: 'onInputChange',
            value: function (t, s) {
              this.props.onInputChange(t, s);
            }
          },
          {
            key: 'focusInput',
            value: function () {
              this.inputRef && this.inputRef.focus();
            }
          },
          {
            key: 'blurInput',
            value: function () {
              this.inputRef && this.inputRef.blur();
            }
          },
          {
            key: 'openMenu',
            value: function (t) {
              var s = this,
                u = this.state,
                c = u.selectValue,
                i = u.isFocused,
                l = this.buildFocusableOptions(),
                d = t === 'first' ? 0 : l.length - 1;
              if (!this.props.isMulti) {
                var h = l.indexOf(c[0]);
                h > -1 && (d = h);
              }
              (this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef)),
                this.setState(
                  { inputIsHiddenAfterUpdate: !1, focusedValue: null, focusedOption: l[d], focusedOptionId: this.getFocusedOptionId(l[d]) },
                  function () {
                    return s.onMenuOpen();
                  }
                );
            }
          },
          {
            key: 'focusValue',
            value: function (t) {
              var s = this.state,
                u = s.selectValue,
                c = s.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var i = u.indexOf(c);
                c || (i = -1);
                var l = u.length - 1,
                  d = -1;
                if (u.length) {
                  switch (t) {
                    case 'previous':
                      i === 0 ? (d = 0) : i === -1 ? (d = l) : (d = i - 1);
                      break;
                    case 'next':
                      i > -1 && i < l && (d = i + 1);
                      break;
                  }
                  this.setState({ inputIsHidden: d !== -1, focusedValue: u[d] });
                }
              }
            }
          },
          {
            key: 'focusOption',
            value: function () {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'first',
                s = this.props.pageSize,
                u = this.state.focusedOption,
                c = this.getFocusableOptions();
              if (c.length) {
                var i = 0,
                  l = c.indexOf(u);
                u || (l = -1),
                  t === 'up'
                    ? (i = l > 0 ? l - 1 : c.length - 1)
                    : t === 'down'
                      ? (i = (l + 1) % c.length)
                      : t === 'pageup'
                        ? ((i = l - s), i < 0 && (i = 0))
                        : t === 'pagedown'
                          ? ((i = l + s), i > c.length - 1 && (i = c.length - 1))
                          : t === 'last' && (i = c.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: c[i], focusedValue: null, focusedOptionId: this.getFocusedOptionId(c[i]) });
              }
            }
          },
          {
            key: 'getTheme',
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == 'function'
                  ? this.props.theme(Te)
                  : _(_({}, Te), this.props.theme)
                : Te;
            }
          },
          {
            key: 'getCommonProps',
            value: function () {
              var t = this.clearValue,
                s = this.cx,
                u = this.getStyles,
                c = this.getClassNames,
                i = this.getValue,
                l = this.selectOption,
                d = this.setValue,
                h = this.props,
                C = h.isMulti,
                S = h.isRtl,
                E = h.options,
                g = this.hasValue();
              return {
                clearValue: t,
                cx: s,
                getStyles: u,
                getClassNames: c,
                getValue: i,
                hasValue: g,
                isMulti: C,
                isRtl: S,
                options: E,
                selectOption: l,
                selectProps: h,
                setValue: d,
                theme: this.getTheme()
              };
            }
          },
          {
            key: 'hasValue',
            value: function () {
              var t = this.state.selectValue;
              return t.length > 0;
            }
          },
          {
            key: 'hasOptions',
            value: function () {
              return !!this.getFocusableOptions().length;
            }
          },
          {
            key: 'isClearable',
            value: function () {
              var t = this.props,
                s = t.isClearable,
                u = t.isMulti;
              return s === void 0 ? u : s;
            }
          },
          {
            key: 'isOptionDisabled',
            value: function (t, s) {
              return Jt(this.props, t, s);
            }
          },
          {
            key: 'isOptionSelected',
            value: function (t, s) {
              return Xt(this.props, t, s);
            }
          },
          {
            key: 'filterOption',
            value: function (t, s) {
              return Qt(this.props, t, s);
            }
          },
          {
            key: 'formatOptionLabel',
            value: function (t, s) {
              if (typeof this.props.formatOptionLabel == 'function') {
                var u = this.props.inputValue,
                  c = this.state.selectValue;
                return this.props.formatOptionLabel(t, { context: s, inputValue: u, selectValue: c });
              } else return this.getOptionLabel(t);
            }
          },
          {
            key: 'formatGroupLabel',
            value: function (t) {
              return this.props.formatGroupLabel(t);
            }
          },
          {
            key: 'startListeningComposition',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('compositionstart', this.onCompositionStart, !1),
                document.addEventListener('compositionend', this.onCompositionEnd, !1));
            }
          },
          {
            key: 'stopListeningComposition',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('compositionstart', this.onCompositionStart),
                document.removeEventListener('compositionend', this.onCompositionEnd));
            }
          },
          {
            key: 'startListeningToTouch',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('touchstart', this.onTouchStart, !1),
                document.addEventListener('touchmove', this.onTouchMove, !1),
                document.addEventListener('touchend', this.onTouchEnd, !1));
            }
          },
          {
            key: 'stopListeningToTouch',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('touchstart', this.onTouchStart),
                document.removeEventListener('touchmove', this.onTouchMove),
                document.removeEventListener('touchend', this.onTouchEnd));
            }
          },
          {
            key: 'renderInput',
            value: function () {
              var t = this.props,
                s = t.isDisabled,
                u = t.isSearchable,
                c = t.inputId,
                i = t.inputValue,
                l = t.tabIndex,
                d = t.form,
                h = t.menuIsOpen,
                C = t.required,
                S = this.getComponents(),
                E = S.Input,
                g = this.state,
                m = g.inputIsHidden,
                f = g.ariaSelection,
                y = this.commonProps,
                M = c || this.getElementId('input'),
                L = _(
                  _(
                    _(
                      {
                        'aria-autocomplete': 'list',
                        'aria-expanded': h,
                        'aria-haspopup': !0,
                        'aria-errormessage': this.props['aria-errormessage'],
                        'aria-invalid': this.props['aria-invalid'],
                        'aria-label': this.props['aria-label'],
                        'aria-labelledby': this.props['aria-labelledby'],
                        'aria-required': C,
                        role: 'combobox',
                        'aria-activedescendant': this.isAppleDevice ? void 0 : this.state.focusedOptionId || ''
                      },
                      h && { 'aria-controls': this.getElementId('listbox') }
                    ),
                    !u && { 'aria-readonly': !0 }
                  ),
                  this.hasValue()
                    ? (f == null ? void 0 : f.action) === 'initial-input-focus' && { 'aria-describedby': this.getElementId('live-region') }
                    : { 'aria-describedby': this.getElementId('placeholder') }
                );
              return u
                ? O.createElement(
                    E,
                    P(
                      {},
                      y,
                      {
                        autoCapitalize: 'none',
                        autoComplete: 'off',
                        autoCorrect: 'off',
                        id: M,
                        innerRef: this.getInputRef,
                        isDisabled: s,
                        isHidden: m,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: 'false',
                        tabIndex: l,
                        form: d,
                        type: 'text',
                        value: i
                      },
                      L
                    )
                  )
                : O.createElement(
                    Ya,
                    P(
                      {
                        id: M,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: ye,
                        onFocus: this.onInputFocus,
                        disabled: s,
                        tabIndex: l,
                        inputMode: 'none',
                        form: d,
                        value: ''
                      },
                      L
                    )
                  );
            }
          },
          {
            key: 'renderPlaceholderOrValue',
            value: function () {
              var t = this,
                s = this.getComponents(),
                u = s.MultiValue,
                c = s.MultiValueContainer,
                i = s.MultiValueLabel,
                l = s.MultiValueRemove,
                d = s.SingleValue,
                h = s.Placeholder,
                C = this.commonProps,
                S = this.props,
                E = S.controlShouldRenderValue,
                g = S.isDisabled,
                m = S.isMulti,
                f = S.inputValue,
                y = S.placeholder,
                M = this.state,
                L = M.selectValue,
                b = M.focusedValue,
                I = M.isFocused;
              if (!this.hasValue() || !E)
                return f
                  ? null
                  : O.createElement(
                      h,
                      P({}, C, { key: 'placeholder', isDisabled: g, isFocused: I, innerProps: { id: this.getElementId('placeholder') } }),
                      y
                    );
              if (m)
                return L.map(function (A, D) {
                  var R = A === b,
                    k = ''.concat(t.getOptionLabel(A), '-').concat(t.getOptionValue(A));
                  return O.createElement(
                    u,
                    P({}, C, {
                      components: { Container: c, Label: i, Remove: l },
                      isFocused: R,
                      isDisabled: g,
                      key: k,
                      index: D,
                      removeProps: {
                        onClick: function () {
                          return t.removeValue(A);
                        },
                        onTouchEnd: function () {
                          return t.removeValue(A);
                        },
                        onMouseDown: function (Y) {
                          Y.preventDefault();
                        }
                      },
                      data: A
                    }),
                    t.formatOptionLabel(A, 'value')
                  );
                });
              if (f) return null;
              var x = L[0];
              return O.createElement(d, P({}, C, { data: x, isDisabled: g }), this.formatOptionLabel(x, 'value'));
            }
          },
          {
            key: 'renderClearIndicator',
            value: function () {
              var t = this.getComponents(),
                s = t.ClearIndicator,
                u = this.commonProps,
                c = this.props,
                i = c.isDisabled,
                l = c.isLoading,
                d = this.state.isFocused;
              if (!this.isClearable() || !s || i || !this.hasValue() || l) return null;
              var h = { onMouseDown: this.onClearIndicatorMouseDown, onTouchEnd: this.onClearIndicatorTouchEnd, 'aria-hidden': 'true' };
              return O.createElement(s, P({}, u, { innerProps: h, isFocused: d }));
            }
          },
          {
            key: 'renderLoadingIndicator',
            value: function () {
              var t = this.getComponents(),
                s = t.LoadingIndicator,
                u = this.commonProps,
                c = this.props,
                i = c.isDisabled,
                l = c.isLoading,
                d = this.state.isFocused;
              if (!s || !l) return null;
              var h = { 'aria-hidden': 'true' };
              return O.createElement(s, P({}, u, { innerProps: h, isDisabled: i, isFocused: d }));
            }
          },
          {
            key: 'renderIndicatorSeparator',
            value: function () {
              var t = this.getComponents(),
                s = t.DropdownIndicator,
                u = t.IndicatorSeparator;
              if (!s || !u) return null;
              var c = this.commonProps,
                i = this.props.isDisabled,
                l = this.state.isFocused;
              return O.createElement(u, P({}, c, { isDisabled: i, isFocused: l }));
            }
          },
          {
            key: 'renderDropdownIndicator',
            value: function () {
              var t = this.getComponents(),
                s = t.DropdownIndicator;
              if (!s) return null;
              var u = this.commonProps,
                c = this.props.isDisabled,
                i = this.state.isFocused,
                l = { onMouseDown: this.onDropdownIndicatorMouseDown, onTouchEnd: this.onDropdownIndicatorTouchEnd, 'aria-hidden': 'true' };
              return O.createElement(s, P({}, u, { innerProps: l, isDisabled: c, isFocused: i }));
            }
          },
          {
            key: 'renderMenu',
            value: function () {
              var t = this,
                s = this.getComponents(),
                u = s.Group,
                c = s.GroupHeading,
                i = s.Menu,
                l = s.MenuList,
                d = s.MenuPortal,
                h = s.LoadingMessage,
                C = s.NoOptionsMessage,
                S = s.Option,
                E = this.commonProps,
                g = this.state.focusedOption,
                m = this.props,
                f = m.captureMenuScroll,
                y = m.inputValue,
                M = m.isLoading,
                L = m.loadingMessage,
                b = m.minMenuHeight,
                I = m.maxMenuHeight,
                x = m.menuIsOpen,
                A = m.menuPlacement,
                D = m.menuPosition,
                R = m.menuPortalTarget,
                k = m.menuShouldBlockScroll,
                H = m.menuShouldScrollIntoView,
                Y = m.noOptionsMessage,
                W = m.onMenuScrollToTop,
                G = m.onMenuScrollToBottom;
              if (!x) return null;
              var N = function ($, z) {
                  var q = $.type,
                    Z = $.data,
                    te = $.isDisabled,
                    J = $.isSelected,
                    de = $.label,
                    an = $.value,
                    Ze = g === Z,
                    qe = te
                      ? void 0
                      : function () {
                          return t.onOptionHover(Z);
                        },
                    sn = te
                      ? void 0
                      : function () {
                          return t.selectOption(Z);
                        },
                    Je = ''.concat(t.getElementId('option'), '-').concat(z),
                    on = {
                      id: Je,
                      onClick: sn,
                      onMouseMove: qe,
                      onMouseOver: qe,
                      tabIndex: -1,
                      role: 'option',
                      'aria-selected': t.isAppleDevice ? void 0 : J
                    };
                  return O.createElement(
                    S,
                    P({}, E, {
                      innerProps: on,
                      data: Z,
                      isDisabled: te,
                      isSelected: J,
                      key: Je,
                      label: de,
                      type: q,
                      value: an,
                      isFocused: Ze,
                      innerRef: Ze ? t.getFocusedOptionRef : void 0
                    }),
                    t.formatOptionLabel($.data, 'menu')
                  );
                },
                p;
              if (this.hasOptions())
                p = this.getCategorizedOptions().map(function (V) {
                  if (V.type === 'group') {
                    var $ = V.data,
                      z = V.options,
                      q = V.index,
                      Z = ''.concat(t.getElementId('group'), '-').concat(q),
                      te = ''.concat(Z, '-heading');
                    return O.createElement(
                      u,
                      P({}, E, {
                        key: Z,
                        data: $,
                        options: z,
                        Heading: c,
                        headingProps: { id: te, data: V.data },
                        label: t.formatGroupLabel(V.data)
                      }),
                      V.options.map(function (J) {
                        return N(J, ''.concat(q, '-').concat(J.index));
                      })
                    );
                  } else if (V.type === 'option') return N(V, ''.concat(V.index));
                });
              else if (M) {
                var j = L({ inputValue: y });
                if (j === null) return null;
                p = O.createElement(h, E, j);
              } else {
                var T = Y({ inputValue: y });
                if (T === null) return null;
                p = O.createElement(C, E, T);
              }
              var U = { minMenuHeight: b, maxMenuHeight: I, menuPlacement: A, menuPosition: D, menuShouldScrollIntoView: H },
                re = O.createElement(Ar, P({}, E, U), function (V) {
                  var $ = V.ref,
                    z = V.placerProps,
                    q = z.placement,
                    Z = z.maxHeight;
                  return O.createElement(
                    i,
                    P({}, E, U, {
                      innerRef: $,
                      innerProps: { onMouseDown: t.onMenuMouseDown, onMouseMove: t.onMenuMouseMove },
                      isLoading: M,
                      placement: q
                    }),
                    O.createElement(ei, { captureEnabled: f, onTopArrive: W, onBottomArrive: G, lockEnabled: k }, function (te) {
                      return O.createElement(
                        l,
                        P({}, E, {
                          innerRef: function (de) {
                            t.getMenuListRef(de), te(de);
                          },
                          innerProps: { role: 'listbox', 'aria-multiselectable': E.isMulti, id: t.getElementId('listbox') },
                          isLoading: M,
                          maxHeight: Z,
                          focusedOption: g
                        }),
                        p
                      );
                    })
                  );
                });
              return R || D === 'fixed'
                ? O.createElement(d, P({}, E, { appendTo: R, controlElement: this.controlRef, menuPlacement: A, menuPosition: D }), re)
                : re;
            }
          },
          {
            key: 'renderFormField',
            value: function () {
              var t = this,
                s = this.props,
                u = s.delimiter,
                c = s.isDisabled,
                i = s.isMulti,
                l = s.name,
                d = s.required,
                h = this.state.selectValue;
              if (d && !this.hasValue() && !c) return O.createElement(ri, { name: l, onFocus: this.onValueInputFocus });
              if (!(!l || c))
                if (i)
                  if (u) {
                    var C = h
                      .map(function (g) {
                        return t.getOptionValue(g);
                      })
                      .join(u);
                    return O.createElement('input', { name: l, type: 'hidden', value: C });
                  } else {
                    var S =
                      h.length > 0
                        ? h.map(function (g, m) {
                            return O.createElement('input', { key: 'i-'.concat(m), name: l, type: 'hidden', value: t.getOptionValue(g) });
                          })
                        : O.createElement('input', { name: l, type: 'hidden', value: '' });
                    return O.createElement('div', null, S);
                  }
                else {
                  var E = h[0] ? this.getOptionValue(h[0]) : '';
                  return O.createElement('input', { name: l, type: 'hidden', value: E });
                }
            }
          },
          {
            key: 'renderLiveRegion',
            value: function () {
              var t = this.commonProps,
                s = this.state,
                u = s.ariaSelection,
                c = s.focusedOption,
                i = s.focusedValue,
                l = s.isFocused,
                d = s.selectValue,
                h = this.getFocusableOptions();
              return O.createElement(
                Ha,
                P({}, t, {
                  id: this.getElementId('live-region'),
                  ariaSelection: u,
                  focusedOption: c,
                  focusedValue: i,
                  isFocused: l,
                  selectValue: d,
                  focusableOptions: h,
                  isAppleDevice: this.isAppleDevice
                })
              );
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this.getComponents(),
                s = t.Control,
                u = t.IndicatorsContainer,
                c = t.SelectContainer,
                i = t.ValueContainer,
                l = this.props,
                d = l.className,
                h = l.id,
                C = l.isDisabled,
                S = l.menuIsOpen,
                E = this.state.isFocused,
                g = (this.commonProps = this.getCommonProps());
              return O.createElement(
                c,
                P({}, g, { className: d, innerProps: { id: h, onKeyDown: this.onKeyDown }, isDisabled: C, isFocused: E }),
                this.renderLiveRegion(),
                O.createElement(
                  s,
                  P({}, g, {
                    innerRef: this.getControlRef,
                    innerProps: { onMouseDown: this.onControlMouseDown, onTouchEnd: this.onControlTouchEnd },
                    isDisabled: C,
                    isFocused: E,
                    menuIsOpen: S
                  }),
                  O.createElement(i, P({}, g, { isDisabled: C }), this.renderPlaceholderOrValue(), this.renderInput()),
                  O.createElement(
                    u,
                    P({}, g, { isDisabled: C }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            }
          }
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (t, s) {
              var u = s.prevProps,
                c = s.clearFocusValueOnUpdate,
                i = s.inputIsHiddenAfterUpdate,
                l = s.ariaSelection,
                d = s.isFocused,
                h = s.prevWasFocused,
                C = s.instancePrefix,
                S = t.options,
                E = t.value,
                g = t.menuIsOpen,
                m = t.inputValue,
                f = t.isMulti,
                y = at(E),
                M = {};
              if (u && (E !== u.value || S !== u.options || g !== u.menuIsOpen || m !== u.inputValue)) {
                var L = g ? Si(t, y) : [],
                  b = g ? St(be(t, y), ''.concat(C, '-option')) : [],
                  I = c ? Ci(s, y) : null,
                  x = Oi(s, L),
                  A = je(b, x);
                M = {
                  selectValue: y,
                  focusedOption: x,
                  focusedOptionId: A,
                  focusableOptionsWithIds: b,
                  focusedValue: I,
                  clearFocusValueOnUpdate: !1
                };
              }
              var D = i != null && t !== u ? { inputIsHidden: i, inputIsHiddenAfterUpdate: void 0 } : {},
                R = l,
                k = d && h;
              return (
                d && !k && ((R = { value: ve(f, y, y[0] || null), options: y, action: 'initial-input-focus' }), (k = !h)),
                (l == null ? void 0 : l.action) === 'initial-input-focus' && (R = null),
                _(_(_({}, M), D), {}, { prevProps: t, ariaSelection: R, prevWasFocused: k })
              );
            }
          }
        ]
      ),
      r
    );
  })(O.Component);
tn.defaultProps = bi;
var Ii = O.forwardRef(function (n, e) {
    var r = Nn(n);
    return O.createElement(tn, P({ ref: e }, r));
  }),
  ce = Ii,
  nn = {};
const yi = [
    ['AF', 'AFG', '004', 'ISO 3166-2:AF'],
    ['AL', 'ALB', '008', 'ISO 3166-2:AL'],
    ['DZ', 'DZA', '012', 'ISO 3166-2:DZ'],
    ['AS', 'ASM', '016', 'ISO 3166-2:AS'],
    ['AD', 'AND', '020', 'ISO 3166-2:AD'],
    ['AO', 'AGO', '024', 'ISO 3166-2:AO'],
    ['AI', 'AIA', '660', 'ISO 3166-2:AI'],
    ['AQ', 'ATA', '010', 'ISO 3166-2:AQ'],
    ['AG', 'ATG', '028', 'ISO 3166-2:AG'],
    ['AR', 'ARG', '032', 'ISO 3166-2:AR'],
    ['AM', 'ARM', '051', 'ISO 3166-2:AM'],
    ['AW', 'ABW', '533', 'ISO 3166-2:AW'],
    ['AU', 'AUS', '036', 'ISO 3166-2:AU'],
    ['AT', 'AUT', '040', 'ISO 3166-2:AT'],
    ['AZ', 'AZE', '031', 'ISO 3166-2:AZ'],
    ['BS', 'BHS', '044', 'ISO 3166-2:BS'],
    ['BH', 'BHR', '048', 'ISO 3166-2:BH'],
    ['BD', 'BGD', '050', 'ISO 3166-2:BD'],
    ['BB', 'BRB', '052', 'ISO 3166-2:BB'],
    ['BY', 'BLR', '112', 'ISO 3166-2:BY'],
    ['BE', 'BEL', '056', 'ISO 3166-2:BE'],
    ['BZ', 'BLZ', '084', 'ISO 3166-2:BZ'],
    ['BJ', 'BEN', '204', 'ISO 3166-2:BJ'],
    ['BM', 'BMU', '060', 'ISO 3166-2:BM'],
    ['BT', 'BTN', '064', 'ISO 3166-2:BT'],
    ['BO', 'BOL', '068', 'ISO 3166-2:BO'],
    ['BA', 'BIH', '070', 'ISO 3166-2:BA'],
    ['BW', 'BWA', '072', 'ISO 3166-2:BW'],
    ['BV', 'BVT', '074', 'ISO 3166-2:BV'],
    ['BR', 'BRA', '076', 'ISO 3166-2:BR'],
    ['IO', 'IOT', '086', 'ISO 3166-2:IO'],
    ['BN', 'BRN', '096', 'ISO 3166-2:BN'],
    ['BG', 'BGR', '100', 'ISO 3166-2:BG'],
    ['BF', 'BFA', '854', 'ISO 3166-2:BF'],
    ['BI', 'BDI', '108', 'ISO 3166-2:BI'],
    ['KH', 'KHM', '116', 'ISO 3166-2:KH'],
    ['CM', 'CMR', '120', 'ISO 3166-2:CM'],
    ['CA', 'CAN', '124', 'ISO 3166-2:CA'],
    ['CV', 'CPV', '132', 'ISO 3166-2:CV'],
    ['KY', 'CYM', '136', 'ISO 3166-2:KY'],
    ['CF', 'CAF', '140', 'ISO 3166-2:CF'],
    ['TD', 'TCD', '148', 'ISO 3166-2:TD'],
    ['CL', 'CHL', '152', 'ISO 3166-2:CL'],
    ['CN', 'CHN', '156', 'ISO 3166-2:CN'],
    ['CX', 'CXR', '162', 'ISO 3166-2:CX'],
    ['CC', 'CCK', '166', 'ISO 3166-2:CC'],
    ['CO', 'COL', '170', 'ISO 3166-2:CO'],
    ['KM', 'COM', '174', 'ISO 3166-2:KM'],
    ['CG', 'COG', '178', 'ISO 3166-2:CG'],
    ['CD', 'COD', '180', 'ISO 3166-2:CD'],
    ['CK', 'COK', '184', 'ISO 3166-2:CK'],
    ['CR', 'CRI', '188', 'ISO 3166-2:CR'],
    ['CI', 'CIV', '384', 'ISO 3166-2:CI'],
    ['HR', 'HRV', '191', 'ISO 3166-2:HR'],
    ['CU', 'CUB', '192', 'ISO 3166-2:CU'],
    ['CY', 'CYP', '196', 'ISO 3166-2:CY'],
    ['CZ', 'CZE', '203', 'ISO 3166-2:CZ'],
    ['DK', 'DNK', '208', 'ISO 3166-2:DK'],
    ['DJ', 'DJI', '262', 'ISO 3166-2:DJ'],
    ['DM', 'DMA', '212', 'ISO 3166-2:DM'],
    ['DO', 'DOM', '214', 'ISO 3166-2:DO'],
    ['EC', 'ECU', '218', 'ISO 3166-2:EC'],
    ['EG', 'EGY', '818', 'ISO 3166-2:EG'],
    ['SV', 'SLV', '222', 'ISO 3166-2:SV'],
    ['GQ', 'GNQ', '226', 'ISO 3166-2:GQ'],
    ['ER', 'ERI', '232', 'ISO 3166-2:ER'],
    ['EE', 'EST', '233', 'ISO 3166-2:EE'],
    ['ET', 'ETH', '231', 'ISO 3166-2:ET'],
    ['FK', 'FLK', '238', 'ISO 3166-2:FK'],
    ['FO', 'FRO', '234', 'ISO 3166-2:FO'],
    ['FJ', 'FJI', '242', 'ISO 3166-2:FJ'],
    ['FI', 'FIN', '246', 'ISO 3166-2:FI'],
    ['FR', 'FRA', '250', 'ISO 3166-2:FR'],
    ['GF', 'GUF', '254', 'ISO 3166-2:GF'],
    ['PF', 'PYF', '258', 'ISO 3166-2:PF'],
    ['TF', 'ATF', '260', 'ISO 3166-2:TF'],
    ['GA', 'GAB', '266', 'ISO 3166-2:GA'],
    ['GM', 'GMB', '270', 'ISO 3166-2:GM'],
    ['GE', 'GEO', '268', 'ISO 3166-2:GE'],
    ['DE', 'DEU', '276', 'ISO 3166-2:DE'],
    ['GH', 'GHA', '288', 'ISO 3166-2:GH'],
    ['GI', 'GIB', '292', 'ISO 3166-2:GI'],
    ['GR', 'GRC', '300', 'ISO 3166-2:GR'],
    ['GL', 'GRL', '304', 'ISO 3166-2:GL'],
    ['GD', 'GRD', '308', 'ISO 3166-2:GD'],
    ['GP', 'GLP', '312', 'ISO 3166-2:GP'],
    ['GU', 'GUM', '316', 'ISO 3166-2:GU'],
    ['GT', 'GTM', '320', 'ISO 3166-2:GT'],
    ['GN', 'GIN', '324', 'ISO 3166-2:GN'],
    ['GW', 'GNB', '624', 'ISO 3166-2:GW'],
    ['GY', 'GUY', '328', 'ISO 3166-2:GY'],
    ['HT', 'HTI', '332', 'ISO 3166-2:HT'],
    ['HM', 'HMD', '334', 'ISO 3166-2:HM'],
    ['VA', 'VAT', '336', 'ISO 3166-2:VA'],
    ['HN', 'HND', '340', 'ISO 3166-2:HN'],
    ['HK', 'HKG', '344', 'ISO 3166-2:HK'],
    ['HU', 'HUN', '348', 'ISO 3166-2:HU'],
    ['IS', 'ISL', '352', 'ISO 3166-2:IS'],
    ['IN', 'IND', '356', 'ISO 3166-2:IN'],
    ['ID', 'IDN', '360', 'ISO 3166-2:ID'],
    ['IR', 'IRN', '364', 'ISO 3166-2:IR'],
    ['IQ', 'IRQ', '368', 'ISO 3166-2:IQ'],
    ['IE', 'IRL', '372', 'ISO 3166-2:IE'],
    ['IL', 'ISR', '376', 'ISO 3166-2:IL'],
    ['IT', 'ITA', '380', 'ISO 3166-2:IT'],
    ['JM', 'JAM', '388', 'ISO 3166-2:JM'],
    ['JP', 'JPN', '392', 'ISO 3166-2:JP'],
    ['JO', 'JOR', '400', 'ISO 3166-2:JO'],
    ['KZ', 'KAZ', '398', 'ISO 3166-2:KZ'],
    ['KE', 'KEN', '404', 'ISO 3166-2:KE'],
    ['KI', 'KIR', '296', 'ISO 3166-2:KI'],
    ['KP', 'PRK', '408', 'ISO 3166-2:KP'],
    ['KR', 'KOR', '410', 'ISO 3166-2:KR'],
    ['KW', 'KWT', '414', 'ISO 3166-2:KW'],
    ['KG', 'KGZ', '417', 'ISO 3166-2:KG'],
    ['LA', 'LAO', '418', 'ISO 3166-2:LA'],
    ['LV', 'LVA', '428', 'ISO 3166-2:LV'],
    ['LB', 'LBN', '422', 'ISO 3166-2:LB'],
    ['LS', 'LSO', '426', 'ISO 3166-2:LS'],
    ['LR', 'LBR', '430', 'ISO 3166-2:LR'],
    ['LY', 'LBY', '434', 'ISO 3166-2:LY'],
    ['LI', 'LIE', '438', 'ISO 3166-2:LI'],
    ['LT', 'LTU', '440', 'ISO 3166-2:LT'],
    ['LU', 'LUX', '442', 'ISO 3166-2:LU'],
    ['MO', 'MAC', '446', 'ISO 3166-2:MO'],
    ['MG', 'MDG', '450', 'ISO 3166-2:MG'],
    ['MW', 'MWI', '454', 'ISO 3166-2:MW'],
    ['MY', 'MYS', '458', 'ISO 3166-2:MY'],
    ['MV', 'MDV', '462', 'ISO 3166-2:MV'],
    ['ML', 'MLI', '466', 'ISO 3166-2:ML'],
    ['MT', 'MLT', '470', 'ISO 3166-2:MT'],
    ['MH', 'MHL', '584', 'ISO 3166-2:MH'],
    ['MQ', 'MTQ', '474', 'ISO 3166-2:MQ'],
    ['MR', 'MRT', '478', 'ISO 3166-2:MR'],
    ['MU', 'MUS', '480', 'ISO 3166-2:MU'],
    ['YT', 'MYT', '175', 'ISO 3166-2:YT'],
    ['MX', 'MEX', '484', 'ISO 3166-2:MX'],
    ['FM', 'FSM', '583', 'ISO 3166-2:FM'],
    ['MD', 'MDA', '498', 'ISO 3166-2:MD'],
    ['MC', 'MCO', '492', 'ISO 3166-2:MC'],
    ['MN', 'MNG', '496', 'ISO 3166-2:MN'],
    ['MS', 'MSR', '500', 'ISO 3166-2:MS'],
    ['MA', 'MAR', '504', 'ISO 3166-2:MA'],
    ['MZ', 'MOZ', '508', 'ISO 3166-2:MZ'],
    ['MM', 'MMR', '104', 'ISO 3166-2:MM'],
    ['NA', 'NAM', '516', 'ISO 3166-2:NA'],
    ['NR', 'NRU', '520', 'ISO 3166-2:NR'],
    ['NP', 'NPL', '524', 'ISO 3166-2:NP'],
    ['NL', 'NLD', '528', 'ISO 3166-2:NL'],
    ['NC', 'NCL', '540', 'ISO 3166-2:NC'],
    ['NZ', 'NZL', '554', 'ISO 3166-2:NZ'],
    ['NI', 'NIC', '558', 'ISO 3166-2:NI'],
    ['NE', 'NER', '562', 'ISO 3166-2:NE'],
    ['NG', 'NGA', '566', 'ISO 3166-2:NG'],
    ['NU', 'NIU', '570', 'ISO 3166-2:NU'],
    ['NF', 'NFK', '574', 'ISO 3166-2:NF'],
    ['MP', 'MNP', '580', 'ISO 3166-2:MP'],
    ['MK', 'MKD', '807', 'ISO 3166-2:MK'],
    ['NO', 'NOR', '578', 'ISO 3166-2:NO'],
    ['OM', 'OMN', '512', 'ISO 3166-2:OM'],
    ['PK', 'PAK', '586', 'ISO 3166-2:PK'],
    ['PW', 'PLW', '585', 'ISO 3166-2:PW'],
    ['PS', 'PSE', '275', 'ISO 3166-2:PS'],
    ['PA', 'PAN', '591', 'ISO 3166-2:PA'],
    ['PG', 'PNG', '598', 'ISO 3166-2:PG'],
    ['PY', 'PRY', '600', 'ISO 3166-2:PY'],
    ['PE', 'PER', '604', 'ISO 3166-2:PE'],
    ['PH', 'PHL', '608', 'ISO 3166-2:PH'],
    ['PN', 'PCN', '612', 'ISO 3166-2:PN'],
    ['PL', 'POL', '616', 'ISO 3166-2:PL'],
    ['PT', 'PRT', '620', 'ISO 3166-2:PT'],
    ['PR', 'PRI', '630', 'ISO 3166-2:PR'],
    ['QA', 'QAT', '634', 'ISO 3166-2:QA'],
    ['RE', 'REU', '638', 'ISO 3166-2:RE'],
    ['RO', 'ROU', '642', 'ISO 3166-2:RO'],
    ['RU', 'RUS', '643', 'ISO 3166-2:RU'],
    ['RW', 'RWA', '646', 'ISO 3166-2:RW'],
    ['SH', 'SHN', '654', 'ISO 3166-2:SH'],
    ['KN', 'KNA', '659', 'ISO 3166-2:KN'],
    ['LC', 'LCA', '662', 'ISO 3166-2:LC'],
    ['PM', 'SPM', '666', 'ISO 3166-2:PM'],
    ['VC', 'VCT', '670', 'ISO 3166-2:VC'],
    ['WS', 'WSM', '882', 'ISO 3166-2:WS'],
    ['SM', 'SMR', '674', 'ISO 3166-2:SM'],
    ['ST', 'STP', '678', 'ISO 3166-2:ST'],
    ['SA', 'SAU', '682', 'ISO 3166-2:SA'],
    ['SN', 'SEN', '686', 'ISO 3166-2:SN'],
    ['SC', 'SYC', '690', 'ISO 3166-2:SC'],
    ['SL', 'SLE', '694', 'ISO 3166-2:SL'],
    ['SG', 'SGP', '702', 'ISO 3166-2:SG'],
    ['SK', 'SVK', '703', 'ISO 3166-2:SK'],
    ['SI', 'SVN', '705', 'ISO 3166-2:SI'],
    ['SB', 'SLB', '090', 'ISO 3166-2:SB'],
    ['SO', 'SOM', '706', 'ISO 3166-2:SO'],
    ['ZA', 'ZAF', '710', 'ISO 3166-2:ZA'],
    ['GS', 'SGS', '239', 'ISO 3166-2:GS'],
    ['ES', 'ESP', '724', 'ISO 3166-2:ES'],
    ['LK', 'LKA', '144', 'ISO 3166-2:LK'],
    ['SD', 'SDN', '729', 'ISO 3166-2:SD'],
    ['SR', 'SUR', '740', 'ISO 3166-2:SR'],
    ['SJ', 'SJM', '744', 'ISO 3166-2:SJ'],
    ['SZ', 'SWZ', '748', 'ISO 3166-2:SZ'],
    ['SE', 'SWE', '752', 'ISO 3166-2:SE'],
    ['CH', 'CHE', '756', 'ISO 3166-2:CH'],
    ['SY', 'SYR', '760', 'ISO 3166-2:SY'],
    ['TW', 'TWN', '158', 'ISO 3166-2:TW'],
    ['TJ', 'TJK', '762', 'ISO 3166-2:TJ'],
    ['TZ', 'TZA', '834', 'ISO 3166-2:TZ'],
    ['TH', 'THA', '764', 'ISO 3166-2:TH'],
    ['TL', 'TLS', '626', 'ISO 3166-2:TL'],
    ['TG', 'TGO', '768', 'ISO 3166-2:TG'],
    ['TK', 'TKL', '772', 'ISO 3166-2:TK'],
    ['TO', 'TON', '776', 'ISO 3166-2:TO'],
    ['TT', 'TTO', '780', 'ISO 3166-2:TT'],
    ['TN', 'TUN', '788', 'ISO 3166-2:TN'],
    ['TR', 'TUR', '792', 'ISO 3166-2:TR'],
    ['TM', 'TKM', '795', 'ISO 3166-2:TM'],
    ['TC', 'TCA', '796', 'ISO 3166-2:TC'],
    ['TV', 'TUV', '798', 'ISO 3166-2:TV'],
    ['UG', 'UGA', '800', 'ISO 3166-2:UG'],
    ['UA', 'UKR', '804', 'ISO 3166-2:UA'],
    ['AE', 'ARE', '784', 'ISO 3166-2:AE'],
    ['GB', 'GBR', '826', 'ISO 3166-2:GB'],
    ['US', 'USA', '840', 'ISO 3166-2:US'],
    ['UM', 'UMI', '581', 'ISO 3166-2:UM'],
    ['UY', 'URY', '858', 'ISO 3166-2:UY'],
    ['UZ', 'UZB', '860', 'ISO 3166-2:UZ'],
    ['VU', 'VUT', '548', 'ISO 3166-2:VU'],
    ['VE', 'VEN', '862', 'ISO 3166-2:VE'],
    ['VN', 'VNM', '704', 'ISO 3166-2:VN'],
    ['VG', 'VGB', '092', 'ISO 3166-2:VG'],
    ['VI', 'VIR', '850', 'ISO 3166-2:VI'],
    ['WF', 'WLF', '876', 'ISO 3166-2:WF'],
    ['EH', 'ESH', '732', 'ISO 3166-2:EH'],
    ['YE', 'YEM', '887', 'ISO 3166-2:YE'],
    ['ZM', 'ZMB', '894', 'ISO 3166-2:ZM'],
    ['ZW', 'ZWE', '716', 'ISO 3166-2:ZW'],
    ['AX', 'ALA', '248', 'ISO 3166-2:AX'],
    ['BQ', 'BES', '535', 'ISO 3166-2:BQ'],
    ['CW', 'CUW', '531', 'ISO 3166-2:CW'],
    ['GG', 'GGY', '831', 'ISO 3166-2:GG'],
    ['IM', 'IMN', '833', 'ISO 3166-2:IM'],
    ['JE', 'JEY', '832', 'ISO 3166-2:JE'],
    ['ME', 'MNE', '499', 'ISO 3166-2:ME'],
    ['BL', 'BLM', '652', 'ISO 3166-2:BL'],
    ['MF', 'MAF', '663', 'ISO 3166-2:MF'],
    ['RS', 'SRB', '688', 'ISO 3166-2:RS'],
    ['SX', 'SXM', '534', 'ISO 3166-2:SX'],
    ['SS', 'SSD', '728', 'ISO 3166-2:SS'],
    ['XK', 'XKK', '983', 'ISO 3166-2:XK']
  ],
  xi = [
    'br',
    'cy',
    'dv',
    'sw',
    'eu',
    'af',
    'am',
    'ha',
    'ku',
    'ml',
    'mt',
    'no',
    'ps',
    'sd',
    'so',
    'sq',
    'ta',
    'tg',
    'tt',
    'ug',
    'ur',
    'vi',
    'ar',
    'az',
    'be',
    'bg',
    'bn',
    'bs',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fa',
    'fi',
    'fr',
    'ga',
    'gl',
    'he',
    'hi',
    'hr',
    'hu',
    'hy',
    'id',
    'is',
    'it',
    'ja',
    'ka',
    'kk',
    'km',
    'ko',
    'ky',
    'lt',
    'lv',
    'mk',
    'mn',
    'mr',
    'ms',
    'nb',
    'nl',
    'nn',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sr',
    'sv',
    'th',
    'tk',
    'tr',
    'uk',
    'uz',
    'zh'
  ];
var De = {};
De.remove = Ai;
var Se = [
    { base: ' ', chars: ' ' },
    { base: '0', chars: '߀' },
    { base: 'A', chars: 'ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
    { base: 'AA', chars: 'Ꜳ' },
    { base: 'AE', chars: 'ÆǼǢ' },
    { base: 'AO', chars: 'Ꜵ' },
    { base: 'AU', chars: 'Ꜷ' },
    { base: 'AV', chars: 'ꜸꜺ' },
    { base: 'AY', chars: 'Ꜽ' },
    { base: 'B', chars: 'ⒷＢḂḄḆɃƁ' },
    { base: 'C', chars: 'ⒸＣꜾḈĆCĈĊČÇƇȻ' },
    { base: 'D', chars: 'ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ' },
    { base: 'Dh', chars: 'Ð' },
    { base: 'DZ', chars: 'ǱǄ' },
    { base: 'Dz', chars: 'ǲǅ' },
    { base: 'E', chars: 'ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ' },
    { base: 'F', chars: 'ꝼⒻＦḞƑꝻ' },
    { base: 'G', chars: 'ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ' },
    { base: 'H', chars: 'ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
    { base: 'I', chars: 'ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
    { base: 'J', chars: 'ⒿＪĴɈȷ' },
    { base: 'K', chars: 'ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
    { base: 'L', chars: 'ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
    { base: 'LJ', chars: 'Ǉ' },
    { base: 'Lj', chars: 'ǈ' },
    { base: 'M', chars: 'ⓂＭḾṀṂⱮƜϻ' },
    { base: 'N', chars: 'ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ' },
    { base: 'NJ', chars: 'Ǌ' },
    { base: 'Nj', chars: 'ǋ' },
    { base: 'O', chars: 'ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' },
    { base: 'OE', chars: 'Œ' },
    { base: 'OI', chars: 'Ƣ' },
    { base: 'OO', chars: 'Ꝏ' },
    { base: 'OU', chars: 'Ȣ' },
    { base: 'P', chars: 'ⓅＰṔṖƤⱣꝐꝒꝔ' },
    { base: 'Q', chars: 'ⓆＱꝖꝘɊ' },
    { base: 'R', chars: 'ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
    { base: 'S', chars: 'ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
    { base: 'T', chars: 'ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
    { base: 'Th', chars: 'Þ' },
    { base: 'TZ', chars: 'Ꜩ' },
    { base: 'U', chars: 'ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
    { base: 'V', chars: 'ⓋＶṼṾƲꝞɅ' },
    { base: 'VY', chars: 'Ꝡ' },
    { base: 'W', chars: 'ⓌＷẀẂŴẆẄẈⱲ' },
    { base: 'X', chars: 'ⓍＸẊẌ' },
    { base: 'Y', chars: 'ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
    { base: 'Z', chars: 'ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
    { base: 'a', chars: 'ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ' },
    { base: 'aa', chars: 'ꜳ' },
    { base: 'ae', chars: 'æǽǣ' },
    { base: 'ao', chars: 'ꜵ' },
    { base: 'au', chars: 'ꜷ' },
    { base: 'av', chars: 'ꜹꜻ' },
    { base: 'ay', chars: 'ꜽ' },
    { base: 'b', chars: 'ⓑｂḃḅḇƀƃɓƂ' },
    { base: 'c', chars: 'ｃⓒćĉċčçḉƈȼꜿↄ' },
    { base: 'd', chars: 'ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ' },
    { base: 'dh', chars: 'ð' },
    { base: 'dz', chars: 'ǳǆ' },
    { base: 'e', chars: 'ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ' },
    { base: 'f', chars: 'ⓕｆḟƒ' },
    { base: 'ff', chars: 'ﬀ' },
    { base: 'fi', chars: 'ﬁ' },
    { base: 'fl', chars: 'ﬂ' },
    { base: 'ffi', chars: 'ﬃ' },
    { base: 'ffl', chars: 'ﬄ' },
    { base: 'g', chars: 'ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ' },
    { base: 'h', chars: 'ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
    { base: 'hv', chars: 'ƕ' },
    { base: 'i', chars: 'ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
    { base: 'j', chars: 'ⓙｊĵǰɉ' },
    { base: 'k', chars: 'ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
    { base: 'l', chars: 'ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ' },
    { base: 'lj', chars: 'ǉ' },
    { base: 'm', chars: 'ⓜｍḿṁṃɱɯ' },
    { base: 'n', chars: 'ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ' },
    { base: 'nj', chars: 'ǌ' },
    { base: 'o', chars: 'ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ' },
    { base: 'oe', chars: 'œ' },
    { base: 'oi', chars: 'ƣ' },
    { base: 'oo', chars: 'ꝏ' },
    { base: 'ou', chars: 'ȣ' },
    { base: 'p', chars: 'ⓟｐṕṗƥᵽꝑꝓꝕρ' },
    { base: 'q', chars: 'ⓠｑɋꝗꝙ' },
    { base: 'r', chars: 'ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
    { base: 's', chars: 'ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ' },
    { base: 'ss', chars: 'ß' },
    { base: 't', chars: 'ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
    { base: 'th', chars: 'þ' },
    { base: 'tz', chars: 'ꜩ' },
    { base: 'u', chars: 'ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
    { base: 'v', chars: 'ⓥｖṽṿʋꝟʌ' },
    { base: 'vy', chars: 'ꝡ' },
    { base: 'w', chars: 'ⓦｗẁẃŵẇẅẘẉⱳ' },
    { base: 'x', chars: 'ⓧｘẋẍ' },
    { base: 'y', chars: 'ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
    { base: 'z', chars: 'ⓩｚźẑżžẓẕƶȥɀⱬꝣ' }
  ],
  Ye = {};
for (var ge = 0; ge < Se.length; ge += 1) for (var Ot = Se[ge].chars, Ve = 0; Ve < Ot.length; Ve += 1) Ye[Ot[Ve]] = Se[ge].base;
function Ai(n) {
  return n.replace(/[^\u0000-\u007e]/g, function (e) {
    return Ye[e] || e;
  });
}
De.replacementList = Se;
De.diacriticsMap = Ye;
(function (n) {
  const e = yi,
    r = xi,
    a = De.remove,
    t = {},
    s = {},
    u = {},
    c = {},
    i = {};
  e.forEach(function (b) {
    const I = b;
    (s[I[0]] = I[1]), (u[I[1]] = I[0]), (c[I[2]] = I[0]), (i[I[0]] = I[2]);
  });
  function l(b) {
    return ('000' + (b || '')).slice(-3);
  }
  function d(b, I) {
    return Object.prototype.hasOwnProperty.call(b, I);
  }
  function h(b, I) {
    return Object.keys(b).reduce(function (x, A) {
      const D = b[A];
      return (x[A] = I(D, A)), x;
    }, {});
  }
  function C(b, I) {
    switch (b) {
      case 'official':
        return Array.isArray(I) ? I[0] : I;
      case 'all':
        return typeof I == 'string' ? [I] : I;
      case 'alias':
        return Array.isArray(I) ? I[1] || I[0] : I;
      default:
        throw new TypeError('LocaleNameType must be one of these: all, official, alias!');
    }
  }
  n.registerLocale = function (b) {
    if (!b.locale) throw new TypeError('Missing localeData.locale');
    if (!b.countries) throw new TypeError('Missing localeData.countries');
    t[b.locale] = b.countries;
  };
  function S(b) {
    return u[b];
  }
  n.alpha3ToAlpha2 = S;
  function E(b) {
    return s[b];
  }
  n.alpha2ToAlpha3 = E;
  function g(b) {
    return i[S(b)];
  }
  n.alpha3ToNumeric = g;
  function m(b) {
    return i[b];
  }
  n.alpha2ToNumeric = m;
  function f(b) {
    const I = l(b);
    return E(c[I]);
  }
  n.numericToAlpha3 = f;
  function y(b) {
    const I = l(b);
    return c[I];
  }
  n.numericToAlpha2 = y;
  function M(b) {
    if (typeof b == 'string') {
      if (/^[0-9]*$/.test(b)) return f(b);
      if (b.length === 2) return E(b.toUpperCase());
      if (b.length === 3) return b.toUpperCase();
    }
    if (typeof b == 'number') return f(b);
  }
  n.toAlpha3 = M;
  function L(b) {
    if (typeof b == 'string') {
      if (/^[0-9]*$/.test(b)) return y(b);
      if (b.length === 2) return b.toUpperCase();
      if (b.length === 3) return S(b.toUpperCase());
    }
    if (typeof b == 'number') return y(b);
  }
  (n.toAlpha2 = L),
    (n.getName = function (b, I, x = {}) {
      'select' in x || (x.select = 'official');
      try {
        const D = t[I.toLowerCase()][L(b)];
        return C(x.select, D);
      } catch {
        return;
      }
    }),
    (n.getNames = function (b, I = {}) {
      'select' in I || (I.select = 'official');
      const x = t[b.toLowerCase()];
      return x === void 0
        ? {}
        : h(x, function (A) {
            return C(I.select, A);
          });
    }),
    (n.getAlpha2Code = function (b, I) {
      const x = (D) => D.toLowerCase(),
        A = (D, R) => x(D) === x(R);
      try {
        const D = t[I.toLowerCase()];
        for (const R in D)
          if (d(D, R)) {
            if (typeof D[R] == 'string' && A(D[R], b)) return R;
            if (Array.isArray(D[R])) {
              for (const k of D[R]) if (A(k, b)) return R;
            }
          }
        return;
      } catch {
        return;
      }
    }),
    (n.getSimpleAlpha2Code = function (b, I) {
      const x = (D) => a(D.toLowerCase()),
        A = (D, R) => x(D) === x(R);
      try {
        const D = t[I.toLowerCase()];
        for (const R in D)
          if (d(D, R)) {
            if (typeof D[R] == 'string' && A(D[R], b)) return R;
            if (Array.isArray(D[R])) {
              for (const k of D[R]) if (A(k, b)) return R;
            }
          }
        return;
      } catch {
        return;
      }
    }),
    (n.getAlpha2Codes = function () {
      return s;
    }),
    (n.getAlpha3Code = function (b, I) {
      const x = n.getAlpha2Code(b, I);
      if (x) return n.toAlpha3(x);
    }),
    (n.getSimpleAlpha3Code = function (b, I) {
      const x = n.getSimpleAlpha2Code(b, I);
      if (x) return n.toAlpha3(x);
    }),
    (n.getAlpha3Codes = function () {
      return u;
    }),
    (n.getNumericCodes = function () {
      return c;
    }),
    (n.langs = function () {
      return Object.keys(t);
    }),
    (n.getSupportedLanguages = function () {
      return r;
    }),
    (n.isValid = function (b) {
      if (!b) return !1;
      const I = b.toString().toUpperCase();
      return d(u, I) || d(s, I) || d(c, I);
    });
})(nn);
const rn = gn(nn),
  Fi = 'th',
  Mi = {
    BD: 'บังกลาเทศ',
    BE: 'เบลเยียม',
    BF: 'บูร์กินาฟาโซ',
    BG: 'บัลแกเรีย',
    BA: 'บอสเนียและเฮอร์เซโกวีนา',
    BB: 'บาร์เบโดส',
    WF: 'วาลลิสและฟุตูนา',
    BL: 'เซนต์บาร์เธเลมี',
    BM: 'เบอร์มิวดา',
    BN: 'บรูไน',
    BO: 'โบลิเวีย',
    BH: 'บาห์เรน',
    BI: 'บุรุนดี',
    BJ: 'เบนิน',
    BT: 'ภูฏาน',
    JM: 'จาเมกา',
    BV: 'เกาะบูเวต',
    BW: 'บอตสวานา',
    WS: 'ซามัว',
    BR: 'บราซิล',
    BS: 'บาฮามาส',
    JE: 'เจอร์ซีย์',
    BY: 'เบลารุส',
    BZ: 'เบลีซ',
    RU: 'รัสเซีย',
    RW: 'รวันดา',
    RS: 'เซอร์เบีย',
    TL: 'ติมอร์ตะวันออก',
    RE: 'เรอูนียง',
    TM: 'เติร์กเมนิสถาน',
    TJ: 'ทาจิกิสถาน',
    RO: 'โรมาเนีย',
    TK: 'โตเกเลา',
    GW: 'กินี-บิสเซา',
    GU: 'กวม',
    GT: 'กัวเตมาลา',
    GS: 'เกาะเซาท์จอร์เจียและหมู่เกาะเซาท์แซนด์วิช',
    GR: 'กรีซ',
    GQ: 'อิเควทอเรียลกินี',
    GP: 'กวาเดอลูป',
    JP: 'ญี่ปุ่น',
    GY: 'กายอานา',
    GG: 'เกิร์นซีย์',
    GF: 'เฟรนช์เกียนา',
    GE: 'จอร์เจีย',
    GD: 'เกรเนดา',
    GB: 'สหราชอาณาจักร',
    GA: 'กาบอง',
    SV: 'เอลซัลวาดอร์',
    GN: 'กินี',
    GM: 'แกมเบีย',
    GL: 'กรีนแลนด์',
    GI: 'ยิบรอลตาร์',
    GH: 'กานา',
    OM: 'โอมาน',
    TN: 'ตูนิเซีย',
    JO: 'จอร์แดน',
    HR: 'โครเอเชีย',
    HT: 'เฮติ',
    HU: 'ฮังการี',
    HK: 'ฮ่องกง เขตปกครองพิเศษประเทศจีน',
    HN: 'ฮอนดูรัส',
    HM: 'เกาะเฮิร์ดและหมู่เกาะแมกดอนัลด์',
    VE: 'เวเนซุเอลา',
    PR: 'เปอร์โตริโก',
    PS: 'ปาเลสไตน์',
    PW: 'ปาเลา',
    PT: 'โปรตุเกส',
    SJ: 'สฟาลบาร์และยานไมเอน',
    PY: 'ปารากวัย',
    IQ: 'อิรัก',
    PA: 'ปานามา',
    PF: 'เฟรนช์โปลินีเซีย',
    PG: 'ปาปัวนิวกินี',
    PE: 'เปรู',
    PK: 'ปากีสถาน',
    PH: 'ฟิลิปปินส์',
    PN: 'พิตแคร์น',
    PL: 'โปแลนด์',
    PM: 'แซงปีแยร์และมีเกอลง',
    ZM: 'แซมเบีย',
    EH: 'ซาฮาราตะวันตก',
    EE: 'เอสโตเนีย',
    EG: 'อียิปต์',
    ZA: 'แอฟริกาใต้',
    EC: 'เอกวาดอร์',
    IT: 'อิตาลี',
    VN: 'เวียดนาม',
    SB: 'หมู่เกาะโซโลมอน',
    ET: 'เอธิโอเปีย',
    SO: 'โซมาเลีย',
    ZW: 'ซิมบับเว',
    SA: 'ซาอุดีอาระเบีย',
    ES: 'สเปน',
    ER: 'เอริเทรีย',
    ME: 'มอนเตเนโกร',
    MD: 'มอลโดวา',
    MG: 'มาดากัสการ์',
    MF: 'เซนต์มาติน',
    MA: 'โมร็อกโก',
    MC: 'โมนาโก',
    UZ: 'อุซเบกิสถาน',
    MM: 'เมียนม่าร์ [พม่า]',
    ML: 'มาลี',
    MO: 'มาเก๊า เขตปกครองพิเศษประเทศจีน',
    MN: 'มองโกเลีย',
    MH: 'หมู่เกาะมาร์แชลล์',
    MK: 'มาซิโดเนีย',
    MU: 'มอริเชียส',
    MT: 'มอลตา',
    MW: 'มาลาวี',
    MV: 'มัลดีฟส์',
    MQ: 'มาร์ตินีก',
    MP: 'หมู่เกาะนอร์เทิร์นมาเรียนา',
    MS: 'มอนต์เซอร์รัต',
    MR: 'มอริเตเนีย',
    IM: 'เกาะแมน',
    UG: 'ยูกันดา',
    TZ: 'แทนซาเนีย',
    MY: 'มาเลเซีย',
    MX: 'เม็กซิโก',
    IL: 'อิสราเอล',
    FR: 'ฝรั่งเศส',
    IO: 'บริติชอินเดียนโอเชียนเทร์ริทอรี',
    SH: 'เซนต์เฮเลนา',
    FI: 'ฟินแลนด์',
    FJ: 'ฟิจิ',
    FK: 'หมู่เกาะฟอล์กแลนด์',
    FM: 'ไมโครนีเซีย',
    FO: 'หมู่เกาะแฟโร',
    NI: 'นิการากัว',
    NL: 'เนเธอร์แลนด์',
    NO: 'นอร์เวย์',
    NA: 'นามิเบีย',
    VU: 'วานูอาตู',
    NC: 'นิวแคลิโดเนีย',
    NE: 'ไนเจอร์',
    NF: 'เกาะนอร์ฟอล์ก',
    NG: 'ไนจีเรีย',
    NZ: 'นิวซีแลนด์',
    NP: 'เนปาล',
    NR: 'นาอูรู',
    NU: 'นีอูเอ',
    CK: 'หมู่เกาะคุก',
    CI: 'ไอวอรี่โคสต์',
    CH: 'สวิตเซอร์แลนด์',
    CO: 'โคลอมเบีย',
    CN: 'จีน',
    CM: 'แคเมอรูน',
    CL: 'ชิลี',
    CC: 'หมู่เกาะโคโคส',
    CA: 'แคนาดา',
    CG: 'คองโก-บราซซาวิล',
    CF: 'สาธารณรัฐแอฟริกากลาง',
    CD: 'คองโก-กินชาซา',
    CZ: 'สาธารณรัฐเช็ก',
    CY: 'ไซปรัส',
    CX: 'เกาะคริสต์มาส',
    CR: 'คอสตาริกา',
    CV: 'เคปเวิร์ด',
    CU: 'คิวบา',
    SZ: 'สวาซิแลนด์',
    SY: 'ซีเรีย',
    KG: 'คีร์กีซสถาน',
    KE: 'เคนยา',
    SR: 'ซูรินาเม',
    KI: 'คิริบาส',
    KH: 'กัมพูชา',
    KN: 'เซนต์คิตส์และเนวิส',
    KM: 'คอโมโรส',
    ST: 'เซาตูเมและปรินซิปี',
    SK: 'สโลวะเกีย',
    KR: 'เกาหลีใต้',
    SI: 'สโลวีเนีย',
    KP: 'เกาหลีเหนือ',
    KW: 'คูเวต',
    SN: 'เซเนกัล',
    SM: 'ซานมารีโน',
    SL: 'เซียร์ราลีโอน',
    SC: 'เซเชลส์',
    KZ: 'คาซัคสถาน',
    KY: 'หมู่เกาะเคย์แมน',
    SG: 'สิงคโปร์',
    SE: 'สวีเดน',
    SD: 'ซูดาน',
    DO: 'สาธารณรัฐโดมินิกัน',
    DM: 'โดมินิกา',
    DJ: 'จิบูตี',
    DK: 'เดนมาร์ก',
    VG: 'หมู่เกาะบริติชเวอร์จิน',
    DE: 'เยอรมนี',
    YE: 'เยเมน',
    DZ: 'แอลจีเรีย',
    US: 'สหรัฐอเมริกา',
    UY: 'อุรุกวัย',
    YT: 'มายอต',
    UM: 'หมู่เกาะสหรัฐไมเนอร์เอาต์ไลอิง',
    LB: 'เลบานอน',
    LC: 'เซนต์ลูเซีย',
    LA: 'ลาว',
    TV: 'ตูวาลู',
    TW: 'ไต้หวัน',
    TT: 'ตรินิแดดและโตเบโก',
    TR: 'ตุรกี',
    LK: 'ศรีลังกา',
    LI: 'ลิกเตนสไตน์',
    LV: 'ลัตเวีย',
    TO: 'ตองกา',
    LT: 'ลิทัวเนีย',
    LU: 'ลักเซมเบิร์ก',
    LR: 'ไลบีเรีย',
    LS: 'เลโซโท',
    TH: 'ไทย',
    TF: 'เฟรนช์เซาเทิร์นเทร์ริทอรีส์',
    TG: 'โตโก',
    TD: 'ชาด',
    TC: 'หมู่เกาะเติกส์และหมู่เกาะเคคอส',
    LY: 'ลิเบีย',
    VA: 'วาติกัน',
    VC: 'เซนต์วินเซนต์และเกรนาดีนส์',
    AE: 'สหรัฐอาหรับเอมิเรตส์',
    AD: 'อันดอร์รา',
    AG: 'แอนติกาและบาร์บูดา',
    AF: 'อัฟกานิสถาน',
    AI: 'แองกวิลลา',
    VI: 'หมู่เกาะยูเอสเวอร์จิน',
    IS: 'ไอซ์แลนด์',
    IR: 'อิหร่าน',
    AM: 'อาร์เมเนีย',
    AL: 'แอลเบเนีย',
    AO: 'แองโกลา',
    AQ: 'แอนตาร์กติกา',
    AS: 'อเมริกันซามัว',
    AR: 'อาร์เจนตินา',
    AU: 'ออสเตรเลีย',
    AT: 'ออสเตรีย',
    AW: 'อารูบา',
    IN: 'อินเดีย',
    AX: 'หมู่เกาะโอลันด์',
    AZ: 'อาเซอร์ไบจาน',
    IE: 'ไอร์แลนด์',
    ID: 'อินโดนีเซีย',
    UA: 'ยูเครน',
    QA: 'กาตาร์',
    MZ: 'โมซัมบิก',
    BQ: 'โบแนร์, ซินท์เอิสทาทิอุส, ซาบา',
    CW: 'คูราเซา',
    SX: 'Sint Maarten (ส่วนดัตช์)',
    SS: 'ซูดานใต้',
    XK: 'โคโซโว'
  },
  Di = { locale: Fi, countries: Mi };
rn.registerLocale(Di);
const Et = ({ name: n, value: e, onChange: r, errors: a, touched: t, label: s = 'เลือกประเทศ' }) => {
    const [u, c] = O.useState([]);
    O.useEffect(() => {
      const l = rn.getNames('th', { select: 'official' }),
        d = Object.entries(l)
          .map(([h, C]) => ({ value: h, label: C }))
          .sort((h, C) => h.label.localeCompare(C.label, 'th'));
      c(d);
    }, []);
    const i = (l) => {
      const d = l ? l.value : null;
      r(n, d);
    };
    return o.jsxs(v.Group, {
      className: 'mb-3',
      children: [
        o.jsx(v.Label, { children: s }),
        o.jsx(ce, {
          options: u,
          value: u.find((l) => l.value === e) || null,
          onChange: i,
          placeholder: 'เลือกประเทศ...',
          isClearable: !0,
          noOptionsMessage: () => 'ไม่พบประเทศ'
        }),
        t[n] && a[n] && o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: a[n] })
      ]
    });
  },
  $i = ({ values: n, errors: e, touched: r, setFieldValue: a, fertilizerTypes: t, companyData: s }) => {
    const [u, c] = O.useState(!1),
      [i, l] = O.useState(null),
      [d, h] = O.useState({}),
      C = s.find((p) => p.company_id === n.company_id),
      S = [
        { value: 'is_single_fertilizer', label: 'เชิงเดี่ยว' },
        { value: 'is_compound_fertilizer', label: 'เชิงประกอบ' },
        { value: 'is_mixed_fertilizer', label: 'เชิงผสม' },
        { value: 'is_secondary_nutrient_fertilizer', label: 'ธาตุอาหารรอง-อาหารเสริม' }
      ],
      E = [
        { value: 'g', label: 'กรัม' },
        { value: 'kg', label: 'กิโลกรัม' },
        { value: 'oz', label: 'ออนซ์' },
        { value: 'ml', label: 'มิลลิลิตร' },
        { value: 'L', label: 'ลิตร' }
      ],
      g = {
        request_id: null,
        fertilizerCategory: null,
        fertilizer_type_id: null,
        color: '',
        fertilizer_formula: '',
        common_name: '',
        trade_name: '',
        trademark: '',
        manufacturer: '',
        manufacturer_country: 'ไทย',
        supplier: '',
        supplier_country: 'ไทย',
        composition: '',
        sample_weight: null,
        sample_weight_unit: null,
        packaging_id: null,
        packaging_other: null,
        submission_id: null,
        test_items: []
      },
      m = n.sample_type_id,
      [f, y] = O.useState(g),
      [M, L] = O.useState([]),
      [b, I] = O.useState([]),
      x = Xe({
        fertilizerCategory: K()
          .required('กรุณาเลือกประเภทของปุ๋ย')
          .oneOf(
            ['is_single_fertilizer', 'is_compound_fertilizer', 'is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'],
            'กรุณาเลือกประเภทปุ๋ยที่ถูกต้อง'
          ),
        fertilizer_type_id: fe().required('กรุณาเลือกประเภทลักษณะปุ๋ย'),
        packaging_id: fe().required('กรุณาเลือกภาชนะบรรจุ'),
        color: K().required('กรุณากรอกสี'),
        fertilizer_formula: K().required('กรุณากรอกสูตรปุ๋ย'),
        common_name: K().required('กรุณากรอกชื่อสามัญ'),
        trade_name: K().required('กรุณากรอกชื่อการค้า'),
        trademark: K().required('กรุณากรอกเครื่องหมายการค้า'),
        manufacturer: K().required('กรุณากรอกชื่อผู้ผลิต'),
        manufacturer_country: K().required('กรุณากรอกประเทศของผู้ผลิต'),
        supplier: K().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
        supplier_country: K().required('กรุณากรอกประเทศของผู้จัดจำหน่าย'),
        composition: K().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
        sample_weight: fe().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข'),
        sample_weight_unit: K().required('กรุณากรอกหน่วย'),
        test_items: Fn()
          .min(1, 'กรุณาเลือกอย่างน้อยหนึ่งรายการทดสอบ')
          .of(
            Xe({
              test_item_id: fe().required('ต้องระบุรายการทดสอบ'),
              test_percentage: K().test('requires-percentage', 'กรุณากรอกเปอร์เซ็นต์สำหรับรายการนี้', function (p) {
                const j = this.parent.test_item_id;
                return [1, 3, 5, 7, 10, 15].includes(j) ? p != null && p !== '' && /^\d+(\.\d+)?$/.test(p) : !0;
              })
            })
          )
      });
    O.useEffect(() => {
      A(), D();
    }, []);
    const A = async () => {
        const p = await xn();
        L(p);
      },
      D = async () => {
        try {
          const p = await An(m);
          console.log('handleGetSampleReceiving:', p), I(p);
        } catch (p) {
          console.error('Error fetching test items:', p), I([]);
        }
      },
      R = (p) => {
        y({ ...f, fertilizerCategory: p ? p.value : null });
      },
      k = async () => {
        try {
          if ((console.log('formData before validation:', f), await x.validate(f, { abortEarly: !1 }), i !== null)) {
            const p = [...n.fertilizerRecords];
            (p[i] = f), a('fertilizerRecords', p), l(null);
          } else a('fertilizerRecords', [...n.fertilizerRecords, f]);
          c(!1), y(g), h({});
        } catch (p) {
          console.log('Caught error:', p);
          const j = {};
          p.name === 'ValidationError' && Array.isArray(p.inner)
            ? p.inner.forEach((T) => {
                j[T.path] = T.message;
              })
            : (j.general = p.message || 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล'),
            h(j),
            console.log('Validation errors in Modal:', j);
        }
      },
      H = (p) => {
        y(n.fertilizerRecords[p]), l(p), c(!0);
      },
      Y = () => {
        y(g), l(null), c(!0);
      },
      W = (p) => [1, 3, 5, 7, 10, 15].includes(p),
      G = (p, j) => {
        const T = j ? [...f.test_items, { test_item_id: p, test_percentage: '' }] : f.test_items.filter((U) => U.test_item_id !== p);
        y({ ...f, test_items: T }), console.log('Updated test_items:', T);
      },
      N = (p, j) => {
        const T = f.test_items.map((U) => (U.test_item_id === p ? { ...U, test_percentage: j } : U));
        y({ ...f, test_items: T }), console.log('Updated test_items with percentage:', T);
      };
    return o.jsx(ne, {
      children: o.jsxs(w, {
        children: [
          o.jsx(se, {
            className: 'm-0',
            children: o.jsxs(se.Body, {
              className: 'pb-2 pt-4',
              children: [
                o.jsxs(ne, {
                  className: 'mb-4',
                  children: [
                    o.jsx('h5', { className: 'mb-3', children: 'ข้อมูลผู้ขอขึ้นทะเบียน' }),
                    o.jsx(w, {
                      md: 6,
                      className: 'mb-2',
                      children: o.jsxs('p', {
                        className: 'mb-0',
                        children: ['ชื่อบริษัท : ', o.jsx('strong', { className: 'text-dark', children: C.company_name })]
                      })
                    }),
                    o.jsx(w, {
                      md: 6,
                      className: 'mb-2',
                      children: o.jsxs('p', {
                        className: 'mb-0',
                        children: ['เลขที่ผู้เสียภาษี : ', o.jsx('strong', { className: 'text-dark', children: C.tax_id })]
                      })
                    }),
                    o.jsx(w, {
                      md: 6,
                      className: 'mb-2',
                      children: o.jsxs('p', {
                        className: 'mb-0',
                        children: ['ที่อยู่ : ', o.jsx('strong', { className: 'text-dark', children: C.company_address })]
                      })
                    })
                  ]
                }),
                o.jsx('h5', { className: 'mb-4', children: 'ข้อมูลตัวอย่าง' }),
                o.jsxs(Mn, {
                  striped: !0,
                  bordered: !0,
                  hover: !0,
                  responsive: !0,
                  children: [
                    o.jsx('thead', {
                      children: o.jsxs('tr', {
                        children: [
                          o.jsx('th', { children: '#' }),
                          o.jsx('th', { children: 'ประเภทของปุ๋ย' }),
                          o.jsx('th', { children: 'ลักษณะปุ๋ย' }),
                          o.jsx('th', { children: 'สี' }),
                          o.jsx('th', { children: 'สูตรปุ๋ย' }),
                          o.jsx('th', { children: 'ชื่อสามัญ' }),
                          o.jsx('th', { children: 'ภาชนะบรรจุ' }),
                          o.jsx('th', { children: 'ชื่อการค้า' }),
                          o.jsx('th', { children: 'เครื่องหมายการค้า' }),
                          o.jsx('th', { children: 'รายการทดสอบ' }),
                          o.jsx('th', { className: 'text-center', children: 'Action' })
                        ]
                      })
                    }),
                    o.jsx('tbody', {
                      children:
                        n.fertilizerRecords.length > 0
                          ? n.fertilizerRecords.map((p, j) => {
                              var T, U, re;
                              return o.jsxs(
                                'tr',
                                {
                                  children: [
                                    o.jsx('td', { children: j + 1 }),
                                    o.jsx('td', {
                                      children: ((T = S.find((V) => V.value === p.fertilizerCategory)) == null ? void 0 : T.label) || '-'
                                    }),
                                    o.jsx('td', {
                                      children:
                                        ((U = t.find((V) => V.fertilizer_type_id === p.fertilizer_type_id)) == null
                                          ? void 0
                                          : U.fertilizer_type_name) || '-'
                                    }),
                                    o.jsx('td', { children: p.color || '-' }),
                                    o.jsx('td', { children: p.fertilizer_formula || '-' }),
                                    o.jsx('td', { children: p.common_name || '-' }),
                                    o.jsx('td', {
                                      children:
                                        ((re = M.find((V) => V.packaging_type_id === p.packaging_id)) == null
                                          ? void 0
                                          : re.packaging_type_name) || '-'
                                    }),
                                    o.jsx('td', { children: p.trade_name || '-' }),
                                    o.jsx('td', { children: p.trademark || '-' }),
                                    o.jsx('td', {
                                      children:
                                        p.test_items
                                          .map((V) => {
                                            var z;
                                            const $ =
                                              ((z = b.find((q) => q.test_item_id === V.test_item_id)) == null ? void 0 : z.test_code) ||
                                              V.test_item_id;
                                            return V.test_percentage ? `${$} (${V.test_percentage})` : $;
                                          })
                                          .join(', ') || '-'
                                    }),
                                    o.jsx('td', {
                                      className: 'text-center',
                                      children: o.jsxs(Dn, {
                                        children: [
                                          o.jsx(ie, { variant: 'info', size: 'sm', onClick: () => H(j), children: o.jsx(bn, {}) }),
                                          o.jsx(ie, {
                                            variant: 'danger',
                                            size: 'sm',
                                            onClick: () => {
                                              const V = n.fertilizerRecords.filter(($, z) => z !== j);
                                              a('fertilizerRecords', V);
                                            },
                                            children: o.jsx(Sn, {})
                                          })
                                        ]
                                      })
                                    })
                                  ]
                                },
                                j
                              );
                            })
                          : o.jsx('tr', { children: o.jsx('td', { colSpan: '11', className: 'text-center', children: 'ไม่มีข้อมูล' }) })
                    })
                  ]
                }),
                e.fertilizerRecords && o.jsx('div', { className: 'text-danger mb-4', children: e.fertilizerRecords }),
                o.jsxs(ie, { variant: 'primary', onClick: Y, children: [o.jsx('i', { className: 'feather icon-plus' }), ' เพิ่ม'] })
              ]
            })
          }),
          o.jsxs(oe, {
            size: 'xl',
            show: u,
            onHide: () => c(!1),
            centered: !0,
            backdrop: 'static',
            keyboard: !1,
            children: [
              o.jsx(oe.Header, {
                closeButton: !0,
                children: o.jsx(oe.Title, {
                  className: 'text-center',
                  children: o.jsx('h5', {
                    className: 'text-center mb-0',
                    children: i !== null ? 'แก้ไขข้อมูลตัวอย่างปุ๋ยเคมี' : 'เพิ่มข้อมูลตัวอย่างปุ๋ยเคมี'
                  })
                })
              }),
              o.jsx(oe.Body, {
                children: o.jsx(v, {
                  children: o.jsxs(ne, {
                    className: 'd-flex align-items-start',
                    children: [
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ประเภทของปุ๋ยเคมี' }),
                            o.jsx(ce, {
                              options: S,
                              value: S.find((p) => p.value === f.fertilizerCategory) || null,
                              onChange: R,
                              placeholder: 'เลือกประเภทของปุ๋ยเคมี'
                            }),
                            d.fertilizerCategory && o.jsx('div', { className: 'text-danger', children: d.fertilizerCategory })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ลักษณะปุ๋ย' }),
                            o.jsx(ce, {
                              options: t.map((p) => ({ value: p.fertilizer_type_id, label: p.fertilizer_type_name || p })),
                              value:
                                t
                                  .map((p) => ({ value: p.fertilizer_type_id, label: p.fertilizer_type_name || p }))
                                  .find((p) => p.value === f.fertilizer_type_id) || null,
                              onChange: (p) => y({ ...f, fertilizer_type_id: p ? p.value : null }),
                              placeholder: 'เลือกประเภทของปุ๋ยเคมี'
                            }),
                            d.fertilizer_type_id && o.jsx('div', { className: 'text-danger', children: d.fertilizer_type_id })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'สี' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              name: 'color',
                              placeholder: 'กรอกสี',
                              value: f.color,
                              onChange: (p) => y({ ...f, color: p.target.value }),
                              isInvalid: !!d.color
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.color })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ภาชนะบรรจุ' }),
                            o.jsx(ce, {
                              options: M.map((p) => ({ value: p.packaging_type_id, label: p.packaging_type_name || p })),
                              value:
                                M.map((p) => ({ value: p.packaging_type_id, label: p.packaging_type_name || p })).find(
                                  (p) => p.value === f.packaging_id
                                ) || null,
                              onChange: (p) => y({ ...f, packaging_id: p ? p.value : null }),
                              placeholder: 'เลือกภาชนะบรรจุ'
                            }),
                            d.packaging_id && o.jsx('div', { className: 'text-danger', children: d.packaging_id })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'สูตรปุ๋ย' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกสูตรปุ๋ย',
                              value: f.fertilizer_formula,
                              onChange: (p) => y({ ...f, fertilizer_formula: p.target.value }),
                              isInvalid: !!d.fertilizer_formula
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.fertilizer_formula })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ชื่อสามัญ' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกชื่อสามัญ',
                              value: f.common_name,
                              onChange: (p) => y({ ...f, common_name: p.target.value }),
                              isInvalid: !!d.common_name
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.common_name })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ชื่อการค้า' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกชื่อการค้า',
                              value: f.trade_name,
                              onChange: (p) => y({ ...f, trade_name: p.target.value }),
                              isInvalid: !!d.trade_name
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.trade_name })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'เครื่องหมายการค้า' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกเครื่องหมายการค้า',
                              value: f.trademark,
                              onChange: (p) => y({ ...f, trademark: p.target.value }),
                              isInvalid: !!d.trademark
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.trademark })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'ผู้ผลิต (บริษัท/ห้าง/ร้าน/อื่นๆ)' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกชื่อผู้ผลิต',
                              value: f.manufacturer,
                              onChange: (p) => y({ ...f, manufacturer: p.target.value }),
                              isInvalid: !!d.manufacturer
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.manufacturer })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(Et, {
                              name: 'manufacturer_country',
                              value: f.manufacturer_country,
                              onChange: (p, j) => y({ ...f, [p]: j }),
                              errors: d,
                              touched: { manufacturer_country: !0 },
                              label: 'ประเทศของผู้ผลิต'
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.manufacturer_country })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'สั่งจาก (บริษัท/ห้าง/ร้าน/อื่นๆ)' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              placeholder: 'กรอกชื่อผู้ผลิต',
                              value: f.supplier,
                              onChange: (p) => y({ ...f, supplier: p.target.value }),
                              isInvalid: !!d.supplier
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.supplier })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(Et, {
                              name: 'supplier_country',
                              value: f.supplier_country,
                              onChange: (p, j) => y({ ...f, [p]: j }),
                              errors: d,
                              touched: { supplier_country: !0 },
                              label: 'ประเทศของผู้จัดจำหน่าย'
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.supplier_country })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'วัตถุส่วนประกอบของปุ๋ย' }),
                            o.jsx(v.Control, {
                              type: 'text',
                              rows: 3,
                              placeholder: 'กรอกวัตถุส่วนประกอบของปุ๋ย',
                              value: f.composition,
                              onChange: (p) => y({ ...f, composition: p.target.value }),
                              isInvalid: !!d.composition
                            }),
                            o.jsx(v.Control.Feedback, { type: 'invalid', children: d.composition })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 6,
                        className: 'align-items-start',
                        children: o.jsxs(Ge, {
                          direction: 'horizontal',
                          className: 'align-items-start',
                          gap: 3,
                          children: [
                            o.jsxs(v.Group, {
                              className: 'mb-3',
                              style: { flex: 1 },
                              children: [
                                o.jsx(v.Label, { children: 'ปริมาณ(น้ำหนัก/ปริมาตร)' }),
                                o.jsx(v.Control, {
                                  type: 'text',
                                  placeholder: 'กรอกน้ำหนัก/ปริมาตร',
                                  value: f.sample_weight,
                                  onChange: (p) => y({ ...f, sample_weight: p.target.value }),
                                  isInvalid: !!d.sample_weight
                                }),
                                o.jsx(v.Control.Feedback, { type: 'invalid', children: d.sample_weight })
                              ]
                            }),
                            o.jsxs(v.Group, {
                              className: 'mb-3',
                              style: { flex: 1 },
                              children: [
                                o.jsx(v.Label, { children: 'หน่วย(กิโลกรัม/ลิตร) ' }),
                                o.jsx('div', {
                                  children: o.jsx(ce, {
                                    options: E,
                                    value: E.find((p) => p.value === f.sample_weight_unit) || null,
                                    onChange: (p) => y({ ...f, sample_weight_unit: p ? p.value : '' }),
                                    placeholder: 'เลือกหน่วย...',
                                    isClearable: !0
                                  })
                                }),
                                o.jsx(v.Control.Feedback, { type: 'invalid', children: d.sample_weight_unit })
                              ]
                            })
                          ]
                        })
                      }),
                      o.jsx(w, {
                        md: 12,
                        children: o.jsxs(v.Group, {
                          className: 'mb-3',
                          children: [
                            o.jsx(v.Label, { children: 'รายการทดสอบ' }),
                            d.test_items && o.jsx('div', { className: 'text-danger', children: d.test_items }),
                            o.jsx(ne, {
                              children: b.map((p) => {
                                var j;
                                return o.jsxs(
                                  w,
                                  {
                                    className: ' align-items-start',
                                    md: 3,
                                    xs: 4,
                                    style: { marginBottom: '10px' },
                                    children: [
                                      o.jsx(v.Check, {
                                        inline: !0,
                                        id: `test_item-${p.test_item_id}`,
                                        type: 'checkbox',
                                        label: p.test_code,
                                        checked: f.test_items.some((T) => T.test_item_id === p.test_item_id),
                                        onChange: (T) => G(p.test_item_id, T.target.checked)
                                      }),
                                      W(p.test_item_id) &&
                                        f.test_items.some((T) => T.test_item_id === p.test_item_id) &&
                                        o.jsx(v.Control, {
                                          type: 'text',
                                          placeholder: 'กรอก % (เช่น 10%)',
                                          value:
                                            ((j = f.test_items.find((T) => T.test_item_id === p.test_item_id)) == null
                                              ? void 0
                                              : j.test_percentage) || '',
                                          onChange: (T) => N(p.test_item_id, T.target.value),
                                          style: { display: 'inline-block', width: '60%', marginLeft: '10px' },
                                          isInvalid:
                                            !!d[
                                              `test_items[${f.test_items.findIndex((T) => T.test_item_id === p.test_item_id)}].test_percentage`
                                            ]
                                        }),
                                      W(p.test_item_id) &&
                                        f.test_items.some((T) => T.test_item_id === p.test_item_id) &&
                                        o.jsx(v.Control.Feedback, {
                                          type: 'invalid',
                                          children:
                                            d[
                                              `test_items[${f.test_items.findIndex((T) => T.test_item_id === p.test_item_id)}].test_percentage`
                                            ]
                                        })
                                    ]
                                  },
                                  p.test_item_id
                                );
                              })
                            })
                          ]
                        })
                      })
                    ]
                  })
                })
              }),
              o.jsxs(oe.Footer, {
                children: [
                  o.jsx(ie, { variant: 'success', onClick: k, children: 'บันทึก' }),
                  o.jsx(ie, { variant: 'danger', onClick: () => c(!1), children: 'ยกเลิก' })
                ]
              })
            ]
          })
        ]
      })
    });
  },
  zi = ({ values: n, errors: e, touched: r, handleChange: a, handleBlur: t, setFieldValue: s, companyData: u }) => {
    const c = u.find((g) => g.company_id === n.company_id),
      {
        getRootProps: i,
        getInputProps: l,
        isDragActive: d
      } = _n({
        onDrop: (g) => {
          const m = Array.isArray(n.files) ? n.files : [];
          s('files', [...m, ...g]);
        },
        accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'], 'application/pdf': ['.pdf'] }
      }),
      h = async (g) => {
        const m = n.files[g];
        if (window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "' + m.name + '"? การลบนี้จะลบไฟล์ออกจากระบบทันทีและไม่สามารถกู้คืนได้'))
          try {
            m.document_id &&
              (await Pn(m.path), await Ln(m.document_id), console.log(`Deleted file ID: ${m.document_id} from Firebase and DB`));
            const y = n.files.filter((M, L) => L !== g);
            s('files', y);
          } catch (y) {
            console.error('Error removing file:', y), alert('เกิดข้อผิดพลาดในการลบไฟล์ กรุณาลองใหม่');
          }
      },
      C = [
        { value: 'is_self_pickup', label: 'รับด้วยตนเอง' },
        { value: 'pdf_email', label: 'ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail' },
        { value: 'is_mail_delivery', label: 'ส่งทางไปรษณีย์' }
      ],
      S = [
        { value: 'is_lab_dispose_sample', label: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง' },
        { value: 'is_collect_within_3_months', label: 'มารับตัวอย่างคืนภายใน 3 เดือน' },
        { value: 'is_return_sample', label: 'ให้ห้องปฏิบัติการจัดส่งตัวอย่างคืน' }
      ],
      E = (g) => {
        s('sameAddress', g),
          g && c != null && c.document_address ? s('sr_mail_delivery_location', c.document_address) : s('sr_mail_delivery_location', '');
      };
    return o.jsx(ne, {
      children: o.jsx(w, {
        children: o.jsx(se, {
          className: 'm-0',
          children: o.jsx(se.Body, {
            className: 'pb-2 pt-4',
            children: o.jsxs(ne, {
              children: [
                o.jsx(w, { md: 12, children: o.jsx('h6', { className: 'mb-3', children: 'ข้อมูลการขอรับผลการตรวจ' }) }),
                o.jsx(w, {
                  md: 12,
                  children: o.jsxs(v.Group, {
                    className: 'mb-3',
                    children: [
                      o.jsx(v.Label, { children: 'วิธีการรับรายงาน' }),
                      o.jsx('div', {
                        children: C.map((g, m) =>
                          o.jsxs(
                            Ge,
                            {
                              direction: 'row',
                              spacing: 1,
                              sx: { mb: 2 },
                              children: [
                                o.jsx(v.Check, {
                                  type: 'checkbox',
                                  name: 'reportMethod',
                                  value: g.value,
                                  label: g.label,
                                  checked: n.reportMethod.includes(g.value),
                                  onChange: (f) => {
                                    const y = n.reportMethod.includes(g.value)
                                      ? n.reportMethod.filter((M) => M !== g.value)
                                      : [...n.reportMethod, g.value];
                                    s('reportMethod', y);
                                  },
                                  id: `reportCheck${m}`,
                                  isInvalid: r.reportMethod && !!e.reportMethod
                                }),
                                g.value === 'pdf_email' &&
                                  n.reportMethod.includes('pdf_email') &&
                                  o.jsxs(w, {
                                    md: 6,
                                    className: 'mb-3 ps-4 pe-4',
                                    children: [
                                      o.jsx(v.Label, { children: 'E-mail สำหรับรับผลตรวจ :' }),
                                      o.jsx(v.Control, {
                                        type: 'email',
                                        name: 'email',
                                        placeholder: 'กรอกอีเมล',
                                        value: n.email,
                                        onChange: a,
                                        onBlur: t,
                                        isInvalid: r.email && !!e.email
                                      }),
                                      o.jsx(v.Control.Feedback, { type: 'invalid', children: e.email })
                                    ]
                                  }),
                                g.value === 'is_mail_delivery' &&
                                  n.reportMethod.includes('is_mail_delivery') &&
                                  o.jsxs(w, {
                                    md: 6,
                                    className: 'mt-1 ps-4 pe-4',
                                    children: [
                                      o.jsx(v.Check, {
                                        inline: !0,
                                        type: 'radio',
                                        name: 'sameAddress',
                                        label: 'ที่อยู่เดียวกับบริษัทที่ลงทะเบียน',
                                        checked: n.sameAddress,
                                        onChange: () => E(!0),
                                        id: 'sameAddressCheck1'
                                      }),
                                      o.jsx(v.Check, {
                                        inline: !0,
                                        type: 'radio',
                                        name: 'sameAddress',
                                        label: 'ที่อยู่ต่างจากบริษัทที่ลงทะเบียน',
                                        checked: !n.sameAddress,
                                        onChange: () => E(!1),
                                        id: 'sameAddressCheck2'
                                      }),
                                      n.sameAddress && c != null && c.document_address
                                        ? o.jsxs(v.Group, {
                                            md: 6,
                                            className: 'mb-3',
                                            children: [
                                              o.jsx(v.Label, { children: 'ที่อยู่จัดส่งเอกสาร :' }),
                                              o.jsx(v.Control, {
                                                type: 'text',
                                                name: 'sr_mail_delivery_location',
                                                value: n.sr_mail_delivery_location || c.document_address,
                                                readOnly: !0
                                              })
                                            ]
                                          })
                                        : !n.sameAddress &&
                                          o.jsx(ne, {
                                            className: 'mb-3',
                                            children: o.jsx(w, {
                                              md: 12,
                                              children: o.jsxs(v.Group, {
                                                children: [
                                                  o.jsx(v.Label, { children: 'ที่อยู่จัดส่งเอกสาร :' }),
                                                  o.jsx(v.Control, {
                                                    type: 'text',
                                                    name: 'sr_mail_delivery_location',
                                                    placeholder: 'กรอกที่อยู่จัดส่ง',
                                                    value: n.sr_mail_delivery_location,
                                                    onChange: a,
                                                    onBlur: t,
                                                    isInvalid: r.sr_mail_delivery_location && !!e.sr_mail_delivery_location
                                                  }),
                                                  o.jsx(v.Control.Feedback, { type: 'invalid', children: e.sr_mail_delivery_location })
                                                ]
                                              })
                                            })
                                          })
                                    ]
                                  })
                              ]
                            },
                            m
                          )
                        )
                      }),
                      r.reportMethod &&
                        e.reportMethod &&
                        o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: e.reportMethod })
                    ]
                  })
                }),
                o.jsxs(w, {
                  md: 12,
                  children: [
                    o.jsxs(v.Group, {
                      children: [
                        o.jsx(v.Label, { className: 'text-dark', children: 'ขอบเขตการทดสอบ :' }),
                        o.jsxs('div', {
                          children: [
                            o.jsx(v.Check, {
                              inline: !0,
                              type: 'radio',
                              name: 'test_all_items',
                              label: 'ทดสอบทุกรายการ',
                              checked: n.test_all_items,
                              onChange: () => s('test_all_items', !0),
                              id: 'test_all_items-1'
                            }),
                            o.jsx(v.Check, {
                              inline: !0,
                              type: 'radio',
                              name: 'test_all_items',
                              label: 'ทดสอบบางรายการ',
                              checked: !n.test_all_items,
                              onChange: () => s('test_all_items', !1),
                              id: 'test_all_items-2'
                            })
                          ]
                        }),
                        r.test_all_items &&
                          e.test_all_items &&
                          o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: e.test_all_items })
                      ]
                    }),
                    o.jsxs(v.Group, {
                      className: 'mb-3',
                      children: [
                        o.jsx(v.Label, { children: 'การจำหน่ายตัวอย่าง' }),
                        o.jsx('div', {
                          children: S.map((g, m) =>
                            o.jsx(
                              v.Check,
                              {
                                inline: !0,
                                type: 'radio',
                                name: 'sampleDisposal',
                                value: g.value,
                                label: g.label,
                                checked: n.sampleDisposal === g.value,
                                onChange: a,
                                id: `sampleCheck${m}`
                              },
                              m
                            )
                          )
                        }),
                        r.sampleDisposal &&
                          e.sampleDisposal &&
                          o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: e.sampleDisposal })
                      ]
                    })
                  ]
                }),
                o.jsx('h6', { className: 'mb-1', children: 'ข้อมูลการจัดส่งตัวอย่าง' }),
                o.jsx(w, {
                  md: 4,
                  children: o.jsxs(v.Group, {
                    className: 'mb-3 mt-2',
                    children: [
                      o.jsx(v.Label, { children: 'ผู้ส่งตัวอย่าง:' }),
                      o.jsx(v.Control, {
                        type: 'text',
                        name: 'submitted_by',
                        placeholder: 'ชื่อ-นามสกุล',
                        value: n.submitted_by,
                        onChange: a,
                        onBlur: t,
                        isInvalid: r.submitted_by && !!e.submitted_by
                      }),
                      o.jsx(v.Control.Feedback, { type: 'invalid', children: e.submitted_by })
                    ]
                  })
                }),
                o.jsx(w, {
                  md: 4,
                  children: o.jsxs(v.Group, {
                    className: 'mb-3 mt-2',
                    children: [
                      o.jsx(v.Label, { children: 'เบอร์โทรศัพท์ :' }),
                      o.jsx(v.Control, {
                        type: 'text',
                        name: 'submitted_phone',
                        placeholder: 'เบอร์โทรศัพท์',
                        value: n.submitted_phone,
                        onChange: a,
                        onBlur: t,
                        isInvalid: r.submitted_phone && !!e.submitted_phone
                      }),
                      o.jsx(v.Control.Feedback, { type: 'invalid', children: e.submitted_phone })
                    ]
                  })
                }),
                o.jsx(w, {
                  md: 4,
                  children: o.jsxs(v.Group, {
                    className: 'mb-3 mt-2',
                    children: [
                      o.jsx(v.Label, { children: 'วันที่ส่ง :' }),
                      o.jsx(In, {
                        fullWidth: !0,
                        type: 'date',
                        id: 'submitted_date',
                        name: 'submitted_date',
                        value: n.submitted_date,
                        onChange: a,
                        onBlur: t,
                        error: r.submitted_date && !!e.submitted_date,
                        helperText: r.submitted_date && e.submitted_date
                      })
                    ]
                  })
                }),
                o.jsxs(w, {
                  md: 12,
                  children: [
                    o.jsx('h6', { className: 'mb-2', children: 'ข้อมูลเอกสาร' }),
                    o.jsxs(v.Group, {
                      className: 'mb-3 mt-2',
                      children: [
                        o.jsx(v.Label, { children: 'อัพโหลดเอกสาร :' }),
                        o.jsxs('div', {
                          ...i(),
                          style: {
                            border: '2px dashed #04a9f5',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: d ? '#e6f7ff' : '#f8f9fa'
                          },
                          children: [
                            o.jsx('input', { ...l() }),
                            d
                              ? o.jsx('p', { style: { marginBottom: 0 }, children: 'Drop your files here...' })
                              : o.jsx('p', { style: { marginBottom: 0 }, children: 'Drag and drop files here, or click to select files' })
                          ]
                        }),
                        o.jsx('ul', {
                          className: 'mt-3',
                          children:
                            n.files &&
                            n.files.map((g, m) =>
                              o.jsxs(
                                'li',
                                {
                                  style: { display: 'flex', alignItems: 'center' },
                                  children: [
                                    o.jsx('i', { className: 'feather icon-file', style: { marginRight: 12 } }),
                                    g.name,
                                    o.jsx(ie, {
                                      variant: 'link',
                                      size: 'sm',
                                      className: 'text-danger',
                                      style: { marginLeft: 10 },
                                      onClick: () => h(m),
                                      children: o.jsx('i', { className: 'feather icon-trash-2' })
                                    })
                                  ]
                                },
                                m
                              )
                            )
                        }),
                        r.files && e.files && o.jsx(v.Control.Feedback, { type: 'invalid', style: { display: 'block' }, children: e.files })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        })
      })
    });
  };
export { Ui as S, $i as a, zi as b };
