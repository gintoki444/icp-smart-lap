const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/SignIn-CcwTchNM.js',
      'assets/formik.esm-DH0jrOO4.js',
      'assets/Alert-Dwi6VePK.js',
      'assets/Card-ZCMDsCmS.js',
      'assets/CloseButton-DgEPtGiG.js',
      'assets/Transition-DW97tWQD.js',
      'assets/SignUp-CAZaFyDR.js',
      'assets/ResendActivateToken-Bp185p68.js',
      'assets/ActivateToken-BFyaUTph.js',
      'assets/ActivateSuccess-Ds9v6Lr9.js',
      'assets/ResetPassword-DQjaD1JK.js',
      'assets/NewPassword-DF0v0CGL.js',
      'assets/index-BaLZX7tP.js',
      'assets/resultsTestData-CJN3BdsU.js',
      'assets/format-CBpsKyOP.js',
      'assets/Table-Bs-13SI2.js',
      'assets/AdminRequestPage-B3kmvkvJ.js',
      'assets/serviceRequest-D-ZD1URS.js',
      'assets/Stack-BiqWndJ2.js',
      'assets/DefaultPropsProvider-LyYhFUFs.js',
      'assets/DataGrid-DlzfhZq7.js',
      'assets/toPropertyKey-COtC2h-V.js',
      'assets/Divider-BV326Lun.js',
      'assets/Badge-EMxcGjiL.js',
      'assets/ButtonGroup-DLGnQ8T-.js',
      'assets/AddRequest-Bay8y-fh.js',
      'assets/sampleSubmissionsRequest-DYxy7UJJ.js',
      'assets/uploadFileRequest-j7nqPy1R.js',
      'assets/firebaseConfig-pMHECxRz.js',
      'assets/specialConditionsRequest-DpcGqaux.js',
      'assets/testItemsRequest-5XlhAVBO.js',
      'assets/Step3-DjsIlKed.js',
      'assets/customerRequest-CwUVzGH7.js',
      'assets/Modal-DVn7-Fnl.js',
      'assets/index-kdHliud_.js',
      'assets/tslib.es6-CTYbIaVE.js',
      'assets/RequestDetails-88a3POrw.js',
      'assets/FirebaseImage-Cwvr5Es-.js',
      'assets/ServiceRequestDetail-CmkxPdiq.js',
      'assets/SampleReceiving-BhOTsA_I.js',
      'assets/AddTestItem-DDQIRHZT.js',
      'assets/react-pdf.browser-uVIzoZdJ.js',
      'assets/TestList-Dlf2btN7.js',
      'assets/TestCIP2OWP2O5-DwIvw95-.js',
      'assets/TestWaterSoluble-BfSfjFEM.js',
      'assets/TestOES-Bi3ZfidR.js',
      'assets/TestPhosphorus-BhGU_ljk.js',
      'assets/Roles-CGg8Fnw3.js',
      'assets/rolesRequest-Bh-L4AxF.js',
      'assets/AddRoles-BxnhRm68.js',
      'assets/EditRoles-BpUJWOlM.js',
      'assets/Menus-CLqBe1AB.js',
      'assets/menusRequest-Bj_jsQPR.js',
      'assets/AddMenu-yjwLOzpN.js',
      'assets/EditMenu-t1sc5hFE.js',
      'assets/PermissionManagement-DDwv0KDK.js',
      'assets/UserList-D-VPBaMr.js',
      'assets/AddUser-vRo_RD1v.js',
      'assets/EditUser-auiZeV8F.js',
      'assets/TestSendBMailFile-B4EnV6Jg.js',
      'assets/Customer-CxYJbklP.js',
      'assets/AddCustomer-DNjgXmDG.js',
      'assets/EditCustomer-B_zU9dwz.js',
      'assets/UserLinkCostomer-Cf5t6E1M.js',
      'assets/Profile-D0GT0Rcw.js',
      'assets/Company-BP6C9Woe.js',
      'assets/SelectCompany-BhIFT1OH.js',
      'assets/SearchCompany-D3ZlVhR8.js',
      'assets/AddCompany-Bl0PRAuJ.js',
      'assets/EditCompany-B0Zgd9lp.js',
      'assets/UserRequestPage-C83kU_A7.js',
      'assets/EditSampleRequestForm-BvfaC9ep.js',
      'assets/HistoryRequestPage-7QfOOwRZ.js'
    ])
) => i.map((i) => d[i]);
function Av(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === 'childList') for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var eE = typeof globalThis < 'u' ? globalThis : typeof window < 'u' || typeof window < 'u' ? window : typeof self < 'u' ? self : {};
function Dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function $v(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              }
            }
      );
    }),
    n
  );
}
var fd = { exports: {} },
  ia = {},
  dd = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var So = Symbol.for('react.element'),
  Mv = Symbol.for('react.portal'),
  zv = Symbol.for('react.fragment'),
  Fv = Symbol.for('react.strict_mode'),
  Bv = Symbol.for('react.profiler'),
  Hv = Symbol.for('react.provider'),
  Wv = Symbol.for('react.context'),
  Uv = Symbol.for('react.forward_ref'),
  Vv = Symbol.for('react.suspense'),
  Xv = Symbol.for('react.memo'),
  Yv = Symbol.for('react.lazy'),
  cc = Symbol.iterator;
function Kv(e) {
  return e === null || typeof e != 'object' ? null : ((e = (cc && e[cc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var pd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  hd = Object.assign,
  md = {};
function wr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = md), (this.updater = n || pd);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
  this.updater.enqueueSetState(this, e, t, 'setState');
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function vd() {}
vd.prototype = wr.prototype;
function Rs(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = md), (this.updater = n || pd);
}
var Is = (Rs.prototype = new vd());
Is.constructor = Rs;
hd(Is, wr.prototype);
Is.isPureReactComponent = !0;
var fc = Array.isArray,
  gd = Object.prototype.hasOwnProperty,
  Ds = { current: null },
  yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function wd(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      gd.call(t, r) && !yd.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: So, type: e, key: i, ref: a, props: o, _owner: Ds.current };
}
function Gv(e, t) {
  return { $$typeof: So, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function As(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So;
}
function Qv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dc = /\/+/g;
function Ya(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Qv('' + e.key) : t.toString(36);
}
function li(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case So:
          case Mv:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + Ya(a, 0) : r),
      fc(o)
        ? ((n = ''),
          e != null && (n = e.replace(dc, '$&/') + '/'),
          li(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (As(o) && (o = Gv(o, n + (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(dc, '$&/') + '/') + e)), t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), fc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Ya(i, l);
      a += li(i, t, n, s, o);
    }
  else if (((s = Kv(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (s = r + Ya(i, l++)), (a += li(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function zo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    li(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function qv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  si = { transition: null },
  Jv = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: si, ReactCurrentOwner: Ds };
function xd() {
  throw Error('act(...) is not supported in production builds of React.');
}
F.Children = {
  map: zo,
  forEach: function (e, t, n) {
    zo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!As(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  }
};
F.Component = wr;
F.Fragment = zv;
F.Profiler = Bv;
F.PureComponent = Rs;
F.StrictMode = Fv;
F.Suspense = Vv;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jv;
F.act = xd;
F.cloneElement = function (e, t, n) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = hd({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (a = Ds.current)), t.key !== void 0 && (o = '' + t.key), e.type && e.type.defaultProps))
      var l = e.type.defaultProps;
    for (s in t) gd.call(t, s) && !yd.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: So, type: e.type, key: o, ref: i, props: r, _owner: a };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Hv, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = wd;
F.createFactory = function (e) {
  var t = wd.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Uv, render: e };
};
F.isValidElement = As;
F.lazy = function (e) {
  return { $$typeof: Yv, _payload: { _status: -1, _result: e }, _init: qv };
};
F.memo = function (e, t) {
  return { $$typeof: Xv, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = si.transition;
  si.transition = {};
  try {
    e();
  } finally {
    si.transition = t;
  }
};
F.unstable_act = xd;
F.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ne.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
F.useId = function () {
  return Ne.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ne.current.useRef(e);
};
F.useState = function (e) {
  return Ne.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ne.current.useTransition();
};
F.version = '18.3.1';
dd.exports = F;
var m = dd.exports;
const O = Dn(m),
  Zv = Av({ __proto__: null, default: O }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg = m,
  tg = Symbol.for('react.element'),
  ng = Symbol.for('react.fragment'),
  rg = Object.prototype.hasOwnProperty,
  og = eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ig = { key: !0, ref: !0, __self: !0, __source: !0 };
function _d(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) rg.call(t, r) && !ig.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: tg, type: e, key: i, ref: a, props: o, _owner: og.current };
}
ia.Fragment = ng;
ia.jsx = _d;
ia.jsxs = _d;
fd.exports = ia;
var p = fd.exports,
  Ed = { exports: {} },
  Ge = {},
  Sd = { exports: {} },
  Cd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, $) {
    var D = N.length;
    N.push($);
    e: for (; 0 < D; ) {
      var Y = (D - 1) >>> 1,
        Z = N[Y];
      if (0 < o(Z, $)) (N[Y] = $), (N[D] = Z), (D = Y);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var $ = N[0],
      D = N.pop();
    if (D !== $) {
      N[0] = D;
      e: for (var Y = 0, Z = N.length, Ct = Z >>> 1; Y < Ct; ) {
        var Re = 2 * (Y + 1) - 1,
          Ze = N[Re],
          He = Re + 1,
          Tt = N[He];
        if (0 > o(Ze, D)) He < Z && 0 > o(Tt, Ze) ? ((N[Y] = Tt), (N[He] = D), (Y = He)) : ((N[Y] = Ze), (N[Re] = D), (Y = Re));
        else if (He < Z && 0 > o(Tt, D)) (N[Y] = Tt), (N[He] = D), (Y = He);
        else break e;
      }
    }
    return $;
  }
  function o(N, $) {
    var D = N.sortIndex - $.sortIndex;
    return D !== 0 ? D : N.id - $.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    g = 3,
    w = !1,
    x = !1,
    E = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= N) r(u), ($.sortIndex = $.expirationTime), t(s, $);
      else break;
      $ = n(u);
    }
  }
  function y(N) {
    if (((E = !1), h(N), !x))
      if (n(s) !== null) (x = !0), ne(S);
      else {
        var $ = n(u);
        $ !== null && ue(y, $.startTime - N);
      }
  }
  function S(N, $) {
    (x = !1), E && ((E = !1), v(k), (k = -1)), (w = !0);
    var D = g;
    try {
      for (h($), c = n(s); c !== null && (!(c.expirationTime > $) || (N && !I())); ) {
        var Y = c.callback;
        if (typeof Y == 'function') {
          (c.callback = null), (g = c.priorityLevel);
          var Z = Y(c.expirationTime <= $);
          ($ = e.unstable_now()), typeof Z == 'function' ? (c.callback = Z) : c === n(s) && r(s), h($);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var Ct = !0;
      else {
        var Re = n(u);
        Re !== null && ue(y, Re.startTime - $), (Ct = !1);
      }
      return Ct;
    } finally {
      (c = null), (g = D), (w = !1);
    }
  }
  var T = !1,
    C = null,
    k = -1,
    L = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < L);
  }
  function A() {
    if (C !== null) {
      var N = e.unstable_now();
      P = N;
      var $ = !0;
      try {
        $ = C(!0, N);
      } finally {
        $ ? z() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var z;
  if (typeof d == 'function')
    z = function () {
      d(A);
    };
  else if (typeof MessageChannel < 'u') {
    var te = new MessageChannel(),
      fe = te.port2;
    (te.port1.onmessage = A),
      (z = function () {
        fe.postMessage(null);
      });
  } else
    z = function () {
      _(A, 0);
    };
  function ne(N) {
    (C = N), T || ((T = !0), z());
  }
  function ue(N, $) {
    k = _(function () {
      N(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), ne(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported')
        : (L = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var D = g;
      g = $;
      try {
        return N();
      } finally {
        g = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, $) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = g;
      g = N;
      try {
        return $();
      } finally {
        g = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, $, D) {
      var Y = e.unstable_now();
      switch ((typeof D == 'object' && D !== null ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? Y + D : Y)) : (D = Y), N)) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = D + Z),
        (N = { id: f++, callback: $, priorityLevel: N, startTime: D, expirationTime: Z, sortIndex: -1 }),
        D > Y
          ? ((N.sortIndex = D), t(u, N), n(s) === null && N === n(u) && (E ? (v(k), (k = -1)) : (E = !0), ue(y, D - Y)))
          : ((N.sortIndex = Z), t(s, N), x || w || ((x = !0), ne(S))),
        N
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (N) {
      var $ = g;
      return function () {
        var D = g;
        g = $;
        try {
          return N.apply(this, arguments);
        } finally {
          g = D;
        }
      };
    });
})(Cd);
Sd.exports = Cd;
var ag = Sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lg = m,
  Ye = ag;
function b(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Td = new Set(),
  Jr = {};
function An(e, t) {
  ir(e, t), ir(e + 'Capture', t);
}
function ir(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) Td.add(t[e]);
}
var Lt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Sl = Object.prototype.hasOwnProperty,
  sg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pc = {},
  hc = {};
function ug(e) {
  return Sl.call(hc, e) ? !0 : Sl.call(pc, e) ? !1 : sg.test(e) ? (hc[e] = !0) : ((pc[e] = !0), !1);
}
function cg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function fg(e, t, n, r) {
  if (t === null || typeof t > 'u' || cg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ee[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ee[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ee[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ee[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ee[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ee[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $s = /[\-:]([a-z])/g;
function Ms(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($s, Ms);
    Ee[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace($s, Ms);
  Ee[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace($s, Ms);
  Ee[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Oe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zs(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (fg(t, n, o, r) && (n = null),
    r || o === null
      ? ug(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fo = Symbol.for('react.element'),
  Fn = Symbol.for('react.portal'),
  Bn = Symbol.for('react.fragment'),
  Fs = Symbol.for('react.strict_mode'),
  Cl = Symbol.for('react.profiler'),
  kd = Symbol.for('react.provider'),
  jd = Symbol.for('react.context'),
  Bs = Symbol.for('react.forward_ref'),
  Tl = Symbol.for('react.suspense'),
  kl = Symbol.for('react.suspense_list'),
  Hs = Symbol.for('react.memo'),
  Vt = Symbol.for('react.lazy'),
  bd = Symbol.for('react.offscreen'),
  mc = Symbol.iterator;
function kr(e) {
  return e === null || typeof e != 'object' ? null : ((e = (mc && e[mc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var le = Object.assign,
  Ka;
function Dr(e) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ka = (t && t[1]) || '';
    }
  return (
    `
` +
    Ka +
    e
  );
}
var Ga = !1;
function Qa(e, t) {
  if (!e || Ga) return '';
  Ga = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(' at new ', ' at ');
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s;
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ga = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Dr(e) : '';
}
function dg(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr('Lazy');
    case 13:
      return Dr('Suspense');
    case 19:
      return Dr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Qa(e.type, !1)), e;
    case 11:
      return (e = Qa(e.type.render, !1)), e;
    case 1:
      return (e = Qa(e.type, !0)), e;
    default:
      return '';
  }
}
function jl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Bn:
      return 'Fragment';
    case Fn:
      return 'Portal';
    case Cl:
      return 'Profiler';
    case Fs:
      return 'StrictMode';
    case Tl:
      return 'Suspense';
    case kl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case jd:
        return (e.displayName || 'Context') + '.Consumer';
      case kd:
        return (e._context.displayName || 'Context') + '.Provider';
      case Bs:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e;
      case Hs:
        return (t = e.displayName || null), t !== null ? t : jl(e.type) || 'Memo';
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return jl(e(t));
        } catch {}
    }
  return null;
}
function pg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef');
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return jl(t);
    case 8:
      return t === Fs ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Pd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function hg(e) {
  var t = Pd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        }
      }
    );
  }
}
function Bo(e) {
  e._valueTracker || (e._valueTracker = hg(e));
}
function Nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Pd(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function _i(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function vc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    });
}
function Od(e, t) {
  (t = t.checked), t != null && zs(e, 'checked', t, !1);
}
function Pl(e, t) {
  Od(e, t);
  var n = un(t.value),
    r = t.type;
  if (n != null)
    r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? Nl(e, t.type, n) : t.hasOwnProperty('defaultValue') && Nl(e, t.type, un(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
}
function Nl(e, t, n) {
  (t !== 'number' || _i(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ar = Array.isArray;
function Zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function yc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Ld(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Rd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ll(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Rd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ho,
  Id = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Ho = Ho || document.createElement('div'), Ho.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = Ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  mg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zr).forEach(function (e) {
  mg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function Dd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Dd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var vg = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function Rl(e, t) {
  if (t) {
    if (vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(b(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(b(62));
  }
}
function Il(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Dl = null;
function Ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Al = null,
  er = null,
  tr = null;
function xc(e) {
  if ((e = ko(e))) {
    if (typeof Al != 'function') throw Error(b(280));
    var t = e.stateNode;
    t && ((t = ca(t)), Al(e.stateNode, e.type, t));
  }
}
function $d(e) {
  er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Md() {
  if (er) {
    var e = er,
      t = tr;
    if (((tr = er = null), xc(e), t)) for (e = 0; e < t.length; e++) xc(t[e]);
  }
}
function zd(e, t) {
  return e(t);
}
function Fd() {}
var qa = !1;
function Bd(e, t, n) {
  if (qa) return e(t, n);
  qa = !0;
  try {
    return zd(e, t, n);
  } finally {
    (qa = !1), (er !== null || tr !== null) && (Fd(), Md());
  }
}
function eo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ca(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(b(231, t, typeof n));
  return n;
}
var $l = !1;
if (Lt)
  try {
    var jr = {};
    Object.defineProperty(jr, 'passive', {
      get: function () {
        $l = !0;
      }
    }),
      window.addEventListener('test', jr, jr),
      window.removeEventListener('test', jr, jr);
  } catch {
    $l = !1;
  }
function gg(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Fr = !1,
  Ei = null,
  Si = !1,
  Ml = null,
  yg = {
    onError: function (e) {
      (Fr = !0), (Ei = e);
    }
  };
function wg(e, t, n, r, o, i, a, l, s) {
  (Fr = !1), (Ei = null), gg.apply(yg, arguments);
}
function xg(e, t, n, r, o, i, a, l, s) {
  if ((wg.apply(this, arguments), Fr)) {
    if (Fr) {
      var u = Ei;
      (Fr = !1), (Ei = null);
    } else throw Error(b(198));
    Si || ((Si = !0), (Ml = u));
  }
}
function $n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function _c(e) {
  if ($n(e) !== e) throw Error(b(188));
}
function _g(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _c(o), e;
        if (i === r) return _c(o), t;
        i = i.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Wd(e) {
  return (e = _g(e)), e !== null ? Ud(e) : null;
}
function Ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vd = Ye.unstable_scheduleCallback,
  Ec = Ye.unstable_cancelCallback,
  Eg = Ye.unstable_shouldYield,
  Sg = Ye.unstable_requestPaint,
  ce = Ye.unstable_now,
  Cg = Ye.unstable_getCurrentPriorityLevel,
  Us = Ye.unstable_ImmediatePriority,
  Xd = Ye.unstable_UserBlockingPriority,
  Ci = Ye.unstable_NormalPriority,
  Tg = Ye.unstable_LowPriority,
  Yd = Ye.unstable_IdlePriority,
  aa = null,
  xt = null;
function kg(e) {
  if (xt && typeof xt.onCommitFiberRoot == 'function')
    try {
      xt.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Pg,
  jg = Math.log,
  bg = Math.LN2;
function Pg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jg(e) / bg) | 0)) | 0;
}
var Wo = 64,
  Uo = 4194304;
function $r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ti(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = $r(l)) : ((i &= a), i !== 0 && (r = $r(i)));
  } else (a = n & ~o), a !== 0 ? (r = $r(a)) : i !== 0 && (r = $r(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ng(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Og(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - dt(i),
      l = 1 << a,
      s = o[a];
    s === -1 ? (!(l & n) || l & r) && (o[a] = Ng(l, t)) : s <= t && (e.expiredLanes |= l), (i &= ~l);
  }
}
function zl(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Kd() {
  var e = Wo;
  return (Wo <<= 1), !(Wo & 4194240) && (Wo = 64), e;
}
function Ja(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Co(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - dt(t)), (e[t] = n);
}
function Lg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Gd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qd,
  Xs,
  qd,
  Jd,
  Zd,
  Fl = !1,
  Vo = [],
  Zt = null,
  en = null,
  tn = null,
  to = new Map(),
  no = new Map(),
  Yt = [],
  Rg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Sc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Zt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      en = null;
      break;
    case 'mouseover':
    case 'mouseout':
      tn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      to.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      no.delete(t.pointerId);
  }
}
function br(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = ko(t)), t !== null && Xs(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ig(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Zt = br(Zt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (en = br(en, e, t, n, r, o)), !0;
    case 'mouseover':
      return (tn = br(tn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return to.set(i, br(to.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), no.set(i, br(no.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ep(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hd(n)), t !== null)) {
          (e.blockedOn = t),
            Zd(e.priority, function () {
              qd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ui(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Dl = r), n.target.dispatchEvent(r), (Dl = null);
    } else return (t = ko(n)), t !== null && Xs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cc(e, t, n) {
  ui(e) && n.delete(t);
}
function Dg() {
  (Fl = !1),
    Zt !== null && ui(Zt) && (Zt = null),
    en !== null && ui(en) && (en = null),
    tn !== null && ui(tn) && (tn = null),
    to.forEach(Cc),
    no.forEach(Cc);
}
function Pr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Fl || ((Fl = !0), Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Dg)));
}
function ro(e) {
  function t(o) {
    return Pr(o, e);
  }
  if (0 < Vo.length) {
    Pr(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && Pr(Zt, e), en !== null && Pr(en, e), tn !== null && Pr(tn, e), to.forEach(t), no.forEach(t), n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); ) ep(n), n.blockedOn === null && Yt.shift();
}
var nr = Ft.ReactCurrentBatchConfig,
  ki = !0;
function Ag(e, t, n, r) {
  var o = U,
    i = nr.transition;
  nr.transition = null;
  try {
    (U = 1), Ys(e, t, n, r);
  } finally {
    (U = o), (nr.transition = i);
  }
}
function $g(e, t, n, r) {
  var o = U,
    i = nr.transition;
  nr.transition = null;
  try {
    (U = 4), Ys(e, t, n, r);
  } finally {
    (U = o), (nr.transition = i);
  }
}
function Ys(e, t, n, r) {
  if (ki) {
    var o = Bl(e, t, n, r);
    if (o === null) sl(e, t, r, ji, n), Sc(e, r);
    else if (Ig(o, e, t, n, r)) r.stopPropagation();
    else if ((Sc(e, r), t & 4 && -1 < Rg.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if ((i !== null && Qd(i), (i = Bl(e, t, n, r)), i === null && sl(e, t, r, ji, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else sl(e, t, r, null, n);
  }
}
var ji = null;
function Bl(e, t, n, r) {
  if (((ji = null), (e = Ws(r)), (e = _n(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ji = e), null;
}
function tp(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Cg()) {
        case Us:
          return 1;
        case Xd:
          return 4;
        case Ci:
        case Tg:
          return 16;
        case Yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null,
  Ks = null,
  ci = null;
function np() {
  if (ci) return ci;
  var e,
    t = Ks,
    n = t.length,
    r,
    o = 'value' in Gt ? Gt.value : Gt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (ci = o.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
  var t = e.keyCode;
  return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xo() {
  return !0;
}
function Tc() {
  return !1;
}
function Qe(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = i), (this.target = a), (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Xo : Tc),
      (this.isPropagationStopped = Tc),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Xo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xo));
      },
      persist: function () {},
      isPersistent: Xo
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Gs = Qe(xr),
  To = le({}, xr, { view: 0, detail: 0 }),
  Mg = Qe(To),
  Za,
  el,
  Nr,
  la = le({}, To, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === 'mousemove' ? ((Za = e.screenX - Nr.screenX), (el = e.screenY - Nr.screenY)) : (el = Za = 0), (Nr = e)),
          Za);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : el;
    }
  }),
  kc = Qe(la),
  zg = le({}, la, { dataTransfer: 0 }),
  Fg = Qe(zg),
  Bg = le({}, To, { relatedTarget: 0 }),
  tl = Qe(Bg),
  Hg = le({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wg = Qe(Hg),
  Ug = le({}, xr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    }
  }),
  Vg = Qe(Ug),
  Xg = le({}, xr, { data: 0 }),
  jc = Qe(Xg),
  Yg = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  Kg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  Gg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Qg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gg[e]) ? !!t[e] : !1;
}
function Qs() {
  return Qg;
}
var qg = le({}, To, {
    key: function (e) {
      if (e.key) {
        var t = Yg[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Kg[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qs,
    charCode: function (e) {
      return e.type === 'keypress' ? fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? fi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    }
  }),
  Jg = Qe(qg),
  Zg = le({}, la, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  bc = Qe(Zg),
  ey = le({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qs
  }),
  ty = Qe(ey),
  ny = le({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ry = Qe(ny),
  oy = le({}, la, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  iy = Qe(oy),
  ay = [9, 13, 27, 32],
  qs = Lt && 'CompositionEvent' in window,
  Br = null;
Lt && 'documentMode' in document && (Br = document.documentMode);
var ly = Lt && 'TextEvent' in window && !Br,
  rp = Lt && (!qs || (Br && 8 < Br && 11 >= Br)),
  Pc = ' ',
  Nc = !1;
function op(e, t) {
  switch (e) {
    case 'keyup':
      return ay.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ip(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Hn = !1;
function sy(e, t) {
  switch (e) {
    case 'compositionend':
      return ip(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Nc = !0), Pc);
    case 'textInput':
      return (e = t.data), e === Pc && Nc ? null : e;
    default:
      return null;
  }
}
function uy(e, t) {
  if (Hn) return e === 'compositionend' || (!qs && op(e, t)) ? ((e = np()), (ci = Ks = Gt = null), (Hn = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return rp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var cy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!cy[e.type] : t === 'textarea';
}
function ap(e, t, n, r) {
  $d(r), (t = bi(t, 'onChange')), 0 < t.length && ((n = new Gs('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Hr = null,
  oo = null;
function fy(e) {
  gp(e, 0);
}
function sa(e) {
  var t = Vn(e);
  if (Nd(t)) return e;
}
function dy(e, t) {
  if (e === 'change') return t;
}
var lp = !1;
if (Lt) {
  var nl;
  if (Lt) {
    var rl = 'oninput' in document;
    if (!rl) {
      var Lc = document.createElement('div');
      Lc.setAttribute('oninput', 'return;'), (rl = typeof Lc.oninput == 'function');
    }
    nl = rl;
  } else nl = !1;
  lp = nl && (!document.documentMode || 9 < document.documentMode);
}
function Rc() {
  Hr && (Hr.detachEvent('onpropertychange', sp), (oo = Hr = null));
}
function sp(e) {
  if (e.propertyName === 'value' && sa(oo)) {
    var t = [];
    ap(t, oo, e, Ws(e)), Bd(fy, t);
  }
}
function py(e, t, n) {
  e === 'focusin' ? (Rc(), (Hr = t), (oo = n), Hr.attachEvent('onpropertychange', sp)) : e === 'focusout' && Rc();
}
function hy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sa(oo);
}
function my(e, t) {
  if (e === 'click') return sa(t);
}
function vy(e, t) {
  if (e === 'input' || e === 'change') return sa(t);
}
function gy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == 'function' ? Object.is : gy;
function io(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Sl.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = Ic(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ic(n);
  }
}
function up(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? up(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function cp() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _i(e.document);
  }
  return t;
}
function Js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function yy(e) {
  var t = cp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && up(n.ownerDocument.documentElement, n)) {
    if (r !== null && Js(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)), !e.extend && i > r && ((o = r), (r = i), (i = o)), (o = Dc(n, i));
        var a = Dc(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var wy = Lt && 'documentMode' in document && 11 >= document.documentMode,
  Wn = null,
  Hl = null,
  Wr = null,
  Wl = !1;
function Ac(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wl ||
    Wn == null ||
    Wn !== _i(r) ||
    ((r = Wn),
    'selectionStart' in r && Js(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (Wr && io(Wr, r)) ||
      ((Wr = r),
      (r = bi(Hl, 'onSelect')),
      0 < r.length && ((t = new Gs('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Wn))));
}
function Yo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Un = {
    animationend: Yo('Animation', 'AnimationEnd'),
    animationiteration: Yo('Animation', 'AnimationIteration'),
    animationstart: Yo('Animation', 'AnimationStart'),
    transitionend: Yo('Transition', 'TransitionEnd')
  },
  ol = {},
  fp = {};
Lt &&
  ((fp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation),
  'TransitionEvent' in window || delete Un.transitionend.transition);
function ua(e) {
  if (ol[e]) return ol[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fp) return (ol[e] = t[n]);
  return e;
}
var dp = ua('animationend'),
  pp = ua('animationiteration'),
  hp = ua('animationstart'),
  mp = ua('transitionend'),
  vp = new Map(),
  $c =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function dn(e, t) {
  vp.set(e, t), An(t, [e]);
}
for (var il = 0; il < $c.length; il++) {
  var al = $c[il],
    xy = al.toLowerCase(),
    _y = al[0].toUpperCase() + al.slice(1);
  dn(xy, 'on' + _y);
}
dn(dp, 'onAnimationEnd');
dn(pp, 'onAnimationIteration');
dn(hp, 'onAnimationStart');
dn('dblclick', 'onDoubleClick');
dn('focusin', 'onFocus');
dn('focusout', 'onBlur');
dn(mp, 'onTransitionEnd');
ir('onMouseEnter', ['mouseout', 'mouseover']);
ir('onMouseLeave', ['mouseout', 'mouseover']);
ir('onPointerEnter', ['pointerout', 'pointerover']);
ir('onPointerLeave', ['pointerout', 'pointerover']);
An('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
An('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
An('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
An('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
An('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
An('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Mr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Ey = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Mr));
function Mc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), xg(r, t, void 0, e), (e.currentTarget = null);
}
function gp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Mc(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (((l = r[a]), (s = l.instance), (u = l.currentTarget), (l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Mc(o, l, u), (i = s);
        }
    }
  }
  if (Si) throw ((e = Ml), (Si = !1), (Ml = null), e);
}
function q(e, t) {
  var n = t[Kl];
  n === void 0 && (n = t[Kl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (yp(t, e, 2, !1), n.add(r));
}
function ll(e, t, n) {
  var r = 0;
  t && (r |= 4), yp(n, e, r, t);
}
var Ko = '_reactListening' + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[Ko]) {
    (e[Ko] = !0),
      Td.forEach(function (n) {
        n !== 'selectionchange' && (Ey.has(n) || ll(n, !1, e), ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ko] || ((t[Ko] = !0), ll('selectionchange', !1, t));
  }
}
function yp(e, t, n, r) {
  switch (tp(t)) {
    case 1:
      var o = Ag;
      break;
    case 4:
      o = $g;
      break;
    default:
      o = Ys;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$l || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function sl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if ((s === 3 || s === 4) && ((s = a.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))) return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = _n(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Bd(function () {
    var u = i,
      f = Ws(n),
      c = [];
    e: {
      var g = vp.get(e);
      if (g !== void 0) {
        var w = Gs,
          x = e;
        switch (e) {
          case 'keypress':
            if (fi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Jg;
            break;
          case 'focusin':
            (x = 'focus'), (w = tl);
            break;
          case 'focusout':
            (x = 'blur'), (w = tl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = tl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = kc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Fg;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = ty;
            break;
          case dp:
          case pp:
          case hp:
            w = Wg;
            break;
          case mp:
            w = ry;
            break;
          case 'scroll':
            w = Mg;
            break;
          case 'wheel':
            w = iy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Vg;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = bc;
        }
        var E = (t & 4) !== 0,
          _ = !E && e === 'scroll',
          v = E ? (g !== null ? g + 'Capture' : null) : g;
        E = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if ((h.tag === 5 && y !== null && ((h = y), v !== null && ((y = eo(d, v)), y != null && E.push(lo(d, y, h)))), _)) break;
          d = d.return;
        }
        0 < E.length && ((g = new w(g, x, null, n, f)), c.push({ event: g, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          g && n !== Dl && (x = n.relatedTarget || n.fromElement) && (_n(x) || x[Rt]))
        )
          break e;
        if (
          (w || g) &&
          ((g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = u),
              (x = x ? _n(x) : null),
              x !== null && ((_ = $n(x)), x !== _ || (x.tag !== 5 && x.tag !== 6)) && (x = null))
            : ((w = null), (x = u)),
          w !== x)
        ) {
          if (
            ((E = kc),
            (y = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') && ((E = bc), (y = 'onPointerLeave'), (v = 'onPointerEnter'), (d = 'pointer')),
            (_ = w == null ? g : Vn(w)),
            (h = x == null ? g : Vn(x)),
            (g = new E(y, d + 'leave', w, n, f)),
            (g.target = _),
            (g.relatedTarget = h),
            (y = null),
            _n(f) === u && ((E = new E(v, d + 'enter', x, n, f)), (E.target = h), (E.relatedTarget = _), (y = E)),
            (_ = y),
            w && x)
          )
            t: {
              for (E = w, v = x, d = 0, h = E; h; h = Mn(h)) d++;
              for (h = 0, y = v; y; y = Mn(y)) h++;
              for (; 0 < d - h; ) (E = Mn(E)), d--;
              for (; 0 < h - d; ) (v = Mn(v)), h--;
              for (; d--; ) {
                if (E === v || (v !== null && E === v.alternate)) break t;
                (E = Mn(E)), (v = Mn(v));
              }
              E = null;
            }
          else E = null;
          w !== null && zc(c, g, w, E, !1), x !== null && _ !== null && zc(c, _, x, E, !0);
        }
      }
      e: {
        if (
          ((g = u ? Vn(u) : window), (w = g.nodeName && g.nodeName.toLowerCase()), w === 'select' || (w === 'input' && g.type === 'file'))
        )
          var S = dy;
        else if (Oc(g))
          if (lp) S = vy;
          else {
            S = hy;
            var T = py;
          }
        else (w = g.nodeName) && w.toLowerCase() === 'input' && (g.type === 'checkbox' || g.type === 'radio') && (S = my);
        if (S && (S = S(e, u))) {
          ap(c, S, n, f);
          break e;
        }
        T && T(e, g, u), e === 'focusout' && (T = g._wrapperState) && T.controlled && g.type === 'number' && Nl(g, 'number', g.value);
      }
      switch (((T = u ? Vn(u) : window), e)) {
        case 'focusin':
          (Oc(T) || T.contentEditable === 'true') && ((Wn = T), (Hl = u), (Wr = null));
          break;
        case 'focusout':
          Wr = Hl = Wn = null;
          break;
        case 'mousedown':
          Wl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Wl = !1), Ac(c, n, f);
          break;
        case 'selectionchange':
          if (wy) break;
        case 'keydown':
        case 'keyup':
          Ac(c, n, f);
      }
      var C;
      if (qs)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else Hn ? op(e, n) && (k = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (rp &&
          n.locale !== 'ko' &&
          (Hn || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Hn && (C = np())
            : ((Gt = f), (Ks = 'value' in Gt ? Gt.value : Gt.textContent), (Hn = !0))),
        (T = bi(u, k)),
        0 < T.length &&
          ((k = new jc(k, e, null, n, f)),
          c.push({ event: k, listeners: T }),
          C ? (k.data = C) : ((C = ip(n)), C !== null && (k.data = C)))),
        (C = ly ? sy(e, n) : uy(e, n)) &&
          ((u = bi(u, 'onBeforeInput')),
          0 < u.length && ((f = new jc('onBeforeInput', 'beforeinput', null, n, f)), c.push({ event: f, listeners: u }), (f.data = C)));
    }
    gp(c, t);
  });
}
function lo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = eo(e, n)), i != null && r.unshift(lo(e, i, o)), (i = eo(e, t)), i != null && r.push(lo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zc(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u), o ? ((s = eo(n, i)), s != null && a.unshift(lo(n, s, l))) : o || ((s = eo(n, i)), s != null && a.push(lo(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Sy = /\r\n?/g,
  Cy = /\u0000|\uFFFD/g;
function Fc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Sy,
      `
`
    )
    .replace(Cy, '');
}
function Go(e, t, n) {
  if (((t = Fc(t)), Fc(e) !== t && n)) throw Error(b(425));
}
function Pi() {}
var Ul = null,
  Vl = null;
function Xl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var Yl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ty = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Bc = typeof Promise == 'function' ? Promise : void 0,
  ky =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Bc < 'u'
        ? function (e) {
            return Bc.resolve(null).then(e).catch(jy);
          }
        : Yl;
function jy(e) {
  setTimeout(function () {
    throw e;
  });
}
function ul(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), ro(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  ro(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Hc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _r = Math.random().toString(36).slice(2),
  yt = '__reactFiber$' + _r,
  so = '__reactProps$' + _r,
  Rt = '__reactContainer$' + _r,
  Kl = '__reactEvents$' + _r,
  by = '__reactListeners$' + _r,
  Py = '__reactHandles$' + _r;
function _n(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[yt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Hc(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Hc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (e = e[yt] || e[Rt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function ca(e) {
  return e[so] || null;
}
var Gl = [],
  Xn = -1;
function pn(e) {
  return { current: e };
}
function J(e) {
  0 > Xn || ((e.current = Gl[Xn]), (Gl[Xn] = null), Xn--);
}
function Q(e, t) {
  Xn++, (Gl[Xn] = e.current), (e.current = t);
}
var cn = {},
  ke = pn(cn),
  $e = pn(!1),
  bn = cn;
function ar(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Ni() {
  J($e), J(ke);
}
function Wc(e, t, n) {
  if (ke.current !== cn) throw Error(b(168));
  Q(ke, t), Q($e, n);
}
function wp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(b(108, pg(e) || 'Unknown', o));
  return le({}, n, r);
}
function Oi(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn), (bn = ke.current), Q(ke, e), Q($e, $e.current), !0;
}
function Uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  n ? ((e = wp(e, t, bn)), (r.__reactInternalMemoizedMergedChildContext = e), J($e), J(ke), Q(ke, e)) : J($e), Q($e, n);
}
var jt = null,
  fa = !1,
  cl = !1;
function xp(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function Ny(e) {
  (fa = !0), xp(e);
}
function hn() {
  if (!cl && jt !== null) {
    cl = !0;
    var e = 0,
      t = U;
    try {
      var n = jt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (fa = !1);
    } catch (o) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Vd(Us, hn), o);
    } finally {
      (U = t), (cl = !1);
    }
  }
  return null;
}
var Yn = [],
  Kn = 0,
  Li = null,
  Ri = 0,
  et = [],
  tt = 0,
  Pn = null,
  bt = 1,
  Pt = '';
function wn(e, t) {
  (Yn[Kn++] = Ri), (Yn[Kn++] = Li), (Li = e), (Ri = t);
}
function _p(e, t, n) {
  (et[tt++] = bt), (et[tt++] = Pt), (et[tt++] = Pn), (Pn = e);
  var r = bt;
  e = Pt;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)), (r >>= a), (o -= a), (bt = (1 << (32 - dt(t) + o)) | (n << o) | r), (Pt = i + e);
  } else (bt = (1 << i) | (n << o) | r), (Pt = e);
}
function Zs(e) {
  e.return !== null && (wn(e, 1), _p(e, 1, 0));
}
function eu(e) {
  for (; e === Li; ) (Li = Yn[--Kn]), (Yn[Kn] = null), (Ri = Yn[--Kn]), (Yn[Kn] = null);
  for (; e === Pn; ) (Pn = et[--tt]), (et[tt] = null), (Pt = et[--tt]), (et[tt] = null), (bt = et[--tt]), (et[tt] = null);
}
var Ve = null,
  Ue = null,
  ee = !1,
  ft = null;
function Ep(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Ue = nn(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ve = e), (Ue = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pn !== null ? { id: bt, overflow: Pt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ql(e) {
  if (ee) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Vc(e, t)) {
        if (Ql(e)) throw Error(b(418));
        t = nn(n.nextSibling);
        var r = Ve;
        t && Vc(e, t) ? Ep(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e));
      }
    } else {
      if (Ql(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e);
    }
  }
}
function Xc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function Qo(e) {
  if (e !== Ve) return !1;
  if (!ee) return Xc(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !Xl(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Ql(e)) throw (Sp(), Error(b(418)));
    for (; t; ) Ep(e, t), (t = nn(t.nextSibling));
  }
  if ((Xc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ue = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Ve ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sp() {
  for (var e = Ue; e; ) e = nn(e.nextSibling);
}
function lr() {
  (Ue = Ve = null), (ee = !1);
}
function tu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Oy = Ft.ReactCurrentBatchConfig;
function Or(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function qo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(b(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function Yc(e) {
  var t = e._init;
  return t(e._payload);
}
function Cp(e) {
  function t(v, d) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [d]), (v.flags |= 16)) : h.push(d);
    }
  }
  function n(v, d) {
    if (!e) return null;
    for (; d !== null; ) t(v, d), (d = d.sibling);
    return null;
  }
  function r(v, d) {
    for (v = new Map(); d !== null; ) d.key !== null ? v.set(d.key, d) : v.set(d.index, d), (d = d.sibling);
    return v;
  }
  function o(v, d) {
    return (v = ln(v, d)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, d, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate), h !== null ? ((h = h.index), h < d ? ((v.flags |= 2), d) : h) : ((v.flags |= 2), d))
        : ((v.flags |= 1048576), d)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, d, h, y) {
    return d === null || d.tag !== 6 ? ((d = gl(h, v.mode, y)), (d.return = v), d) : ((d = o(d, h)), (d.return = v), d);
  }
  function s(v, d, h, y) {
    var S = h.type;
    return S === Bn
      ? f(v, d, h.props.children, y, h.key)
      : d !== null && (d.elementType === S || (typeof S == 'object' && S !== null && S.$$typeof === Vt && Yc(S) === d.type))
        ? ((y = o(d, h.props)), (y.ref = Or(v, d, h)), (y.return = v), y)
        : ((y = yi(h.type, h.key, h.props, null, v.mode, y)), (y.ref = Or(v, d, h)), (y.return = v), y);
  }
  function u(v, d, h, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation
      ? ((d = yl(h, v.mode, y)), (d.return = v), d)
      : ((d = o(d, h.children || [])), (d.return = v), d);
  }
  function f(v, d, h, y, S) {
    return d === null || d.tag !== 7 ? ((d = Tn(h, v.mode, y, S)), (d.return = v), d) : ((d = o(d, h)), (d.return = v), d);
  }
  function c(v, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number') return (d = gl('' + d, v.mode, h)), (d.return = v), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Fo:
          return (h = yi(d.type, d.key, d.props, null, v.mode, h)), (h.ref = Or(v, null, d)), (h.return = v), h;
        case Fn:
          return (d = yl(d, v.mode, h)), (d.return = v), d;
        case Vt:
          var y = d._init;
          return c(v, y(d._payload), h);
      }
      if (Ar(d) || kr(d)) return (d = Tn(d, v.mode, h, null)), (d.return = v), d;
      qo(v, d);
    }
    return null;
  }
  function g(v, d, h, y) {
    var S = d !== null ? d.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return S !== null ? null : l(v, d, '' + h, y);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Fo:
          return h.key === S ? s(v, d, h, y) : null;
        case Fn:
          return h.key === S ? u(v, d, h, y) : null;
        case Vt:
          return (S = h._init), g(v, d, S(h._payload), y);
      }
      if (Ar(h) || kr(h)) return S !== null ? null : f(v, d, h, y, null);
      qo(v, h);
    }
    return null;
  }
  function w(v, d, h, y, S) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number') return (v = v.get(h) || null), l(d, v, '' + y, S);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Fo:
          return (v = v.get(y.key === null ? h : y.key) || null), s(d, v, y, S);
        case Fn:
          return (v = v.get(y.key === null ? h : y.key) || null), u(d, v, y, S);
        case Vt:
          var T = y._init;
          return w(v, d, h, T(y._payload), S);
      }
      if (Ar(y) || kr(y)) return (v = v.get(h) || null), f(d, v, y, S, null);
      qo(d, y);
    }
    return null;
  }
  function x(v, d, h, y) {
    for (var S = null, T = null, C = d, k = (d = 0), L = null; C !== null && k < h.length; k++) {
      C.index > k ? ((L = C), (C = null)) : (L = C.sibling);
      var P = g(v, C, h[k], y);
      if (P === null) {
        C === null && (C = L);
        break;
      }
      e && C && P.alternate === null && t(v, C), (d = i(P, d, k)), T === null ? (S = P) : (T.sibling = P), (T = P), (C = L);
    }
    if (k === h.length) return n(v, C), ee && wn(v, k), S;
    if (C === null) {
      for (; k < h.length; k++) (C = c(v, h[k], y)), C !== null && ((d = i(C, d, k)), T === null ? (S = C) : (T.sibling = C), (T = C));
      return ee && wn(v, k), S;
    }
    for (C = r(v, C); k < h.length; k++)
      (L = w(C, v, k, h[k], y)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? k : L.key),
          (d = i(L, d, k)),
          T === null ? (S = L) : (T.sibling = L),
          (T = L));
    return (
      e &&
        C.forEach(function (I) {
          return t(v, I);
        }),
      ee && wn(v, k),
      S
    );
  }
  function E(v, d, h, y) {
    var S = kr(h);
    if (typeof S != 'function') throw Error(b(150));
    if (((h = S.call(h)), h == null)) throw Error(b(151));
    for (var T = (S = null), C = d, k = (d = 0), L = null, P = h.next(); C !== null && !P.done; k++, P = h.next()) {
      C.index > k ? ((L = C), (C = null)) : (L = C.sibling);
      var I = g(v, C, P.value, y);
      if (I === null) {
        C === null && (C = L);
        break;
      }
      e && C && I.alternate === null && t(v, C), (d = i(I, d, k)), T === null ? (S = I) : (T.sibling = I), (T = I), (C = L);
    }
    if (P.done) return n(v, C), ee && wn(v, k), S;
    if (C === null) {
      for (; !P.done; k++, P = h.next())
        (P = c(v, P.value, y)), P !== null && ((d = i(P, d, k)), T === null ? (S = P) : (T.sibling = P), (T = P));
      return ee && wn(v, k), S;
    }
    for (C = r(v, C); !P.done; k++, P = h.next())
      (P = w(C, v, k, P.value, y)),
        P !== null &&
          (e && P.alternate !== null && C.delete(P.key === null ? k : P.key),
          (d = i(P, d, k)),
          T === null ? (S = P) : (T.sibling = P),
          (T = P));
    return (
      e &&
        C.forEach(function (A) {
          return t(v, A);
        }),
      ee && wn(v, k),
      S
    );
  }
  function _(v, d, h, y) {
    if (
      (typeof h == 'object' && h !== null && h.type === Bn && h.key === null && (h = h.props.children), typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Fo:
          e: {
            for (var S = h.key, T = d; T !== null; ) {
              if (T.key === S) {
                if (((S = h.type), S === Bn)) {
                  if (T.tag === 7) {
                    n(v, T.sibling), (d = o(T, h.props.children)), (d.return = v), (v = d);
                    break e;
                  }
                } else if (T.elementType === S || (typeof S == 'object' && S !== null && S.$$typeof === Vt && Yc(S) === T.type)) {
                  n(v, T.sibling), (d = o(T, h.props)), (d.ref = Or(v, T, h)), (d.return = v), (v = d);
                  break e;
                }
                n(v, T);
                break;
              } else t(v, T);
              T = T.sibling;
            }
            h.type === Bn
              ? ((d = Tn(h.props.children, v.mode, y, h.key)), (d.return = v), (v = d))
              : ((y = yi(h.type, h.key, h.props, null, v.mode, y)), (y.ref = Or(v, d, h)), (y.return = v), (v = y));
          }
          return a(v);
        case Fn:
          e: {
            for (T = h.key; d !== null; ) {
              if (d.key === T)
                if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                  n(v, d.sibling), (d = o(d, h.children || [])), (d.return = v), (v = d);
                  break e;
                } else {
                  n(v, d);
                  break;
                }
              else t(v, d);
              d = d.sibling;
            }
            (d = yl(h, v.mode, y)), (d.return = v), (v = d);
          }
          return a(v);
        case Vt:
          return (T = h._init), _(v, d, T(h._payload), y);
      }
      if (Ar(h)) return x(v, d, h, y);
      if (kr(h)) return E(v, d, h, y);
      qo(v, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(v, d.sibling), (d = o(d, h)), (d.return = v), (v = d))
          : (n(v, d), (d = gl(h, v.mode, y)), (d.return = v), (v = d)),
        a(v))
      : n(v, d);
  }
  return _;
}
var sr = Cp(!0),
  Tp = Cp(!1),
  Ii = pn(null),
  Di = null,
  Gn = null,
  nu = null;
function ru() {
  nu = Gn = Di = null;
}
function ou(e) {
  var t = Ii.current;
  J(Ii), (e._currentValue = t);
}
function Jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rr(e, t) {
  (Di = e),
    (nu = Gn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (Di === null) throw Error(b(308));
      (Gn = e), (Di.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var En = null;
function iu(e) {
  En === null ? (En = [e]) : En.push(e);
}
function kp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), iu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function jp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), It(e, n);
  }
  return (o = r.interleaved), o === null ? ((t.next = t), iu(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), It(e, n);
}
function di(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
function Kc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ai(e, t, n, r) {
  var o = e.updateQueue;
  Xt = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a && (l === null ? (f.firstBaseUpdate = u) : (l.next = u), (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (a = 0), (f = u = s = null), (l = i);
    do {
      var g = l.lane,
        w = l.eventTime;
      if ((r & g) === g) {
        f !== null && (f = f.next = { eventTime: w, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var x = e,
            E = l;
          switch (((g = t), (w = n), E.tag)) {
            case 1:
              if (((x = E.payload), typeof x == 'function')) {
                c = x.call(w, c, g);
                break e;
              }
              c = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = E.payload), (g = typeof x == 'function' ? x.call(w, c, g) : x), g == null)) break e;
              c = le({}, c, g);
              break e;
            case 2:
              Xt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && ((e.flags |= 64), (g = o.effects), g === null ? (o.effects = [l]) : g.push(l));
      } else
        (w = { eventTime: w, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          f === null ? ((u = f = w), (s = c)) : (f = f.next = w),
          (a |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l), (l = g.next), (g.next = null), (o.lastBaseUpdate = g), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c), (o.baseState = s), (o.firstBaseUpdate = u), (o.lastBaseUpdate = f), (t = o.shared.interleaved), t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (On |= a), (e.lanes = a), (e.memoizedState = c);
  }
}
function Gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(b(191, o));
        o.call(r);
      }
    }
}
var jo = {},
  _t = pn(jo),
  uo = pn(jo),
  co = pn(jo);
function Sn(e) {
  if (e === jo) throw Error(b(174));
  return e;
}
function lu(e, t) {
  switch ((Q(co, t), Q(uo, e), Q(_t, jo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ll(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ll(t, e));
  }
  J(_t), Q(_t, t);
}
function ur() {
  J(_t), J(uo), J(co);
}
function bp(e) {
  Sn(co.current);
  var t = Sn(_t.current),
    n = Ll(t, e.type);
  t !== n && (Q(uo, e), Q(_t, n));
}
function su(e) {
  uo.current === e && (J(_t), J(uo));
}
var oe = pn(0);
function $i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fl = [];
function uu() {
  for (var e = 0; e < fl.length; e++) fl[e]._workInProgressVersionPrimary = null;
  fl.length = 0;
}
var pi = Ft.ReactCurrentDispatcher,
  dl = Ft.ReactCurrentBatchConfig,
  Nn = 0,
  ie = null,
  he = null,
  ve = null,
  Mi = !1,
  Ur = !1,
  fo = 0,
  Ly = 0;
function Se() {
  throw Error(b(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fu(e, t, n, r, o, i) {
  if (
    ((Nn = i),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pi.current = e === null || e.memoizedState === null ? Ay : $y),
    (e = n(r, o)),
    Ur)
  ) {
    i = 0;
    do {
      if (((Ur = !1), (fo = 0), 25 <= i)) throw Error(b(301));
      (i += 1), (ve = he = null), (t.updateQueue = null), (pi.current = My), (e = n(r, o));
    } while (Ur);
  }
  if (((pi.current = zi), (t = he !== null && he.next !== null), (Nn = 0), (ve = he = ie = null), (Mi = !1), t)) throw Error(b(300));
  return e;
}
function du() {
  var e = fo !== 0;
  return (fo = 0), e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? (ie.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function it() {
  if (he === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? ie.memoizedState : ve.next;
  if (t !== null) (ve = t), (he = e);
  else {
    if (e === null) throw Error(b(310));
    (he = e),
      (e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }),
      ve === null ? (ie.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function po(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function pl(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = he,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((Nn & f) === f)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        s === null ? ((l = s = c), (a = r)) : (s = s.next = c), (ie.lanes |= f), (On |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      ht(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ie.lanes |= i), (On |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    ht(i, t.memoizedState) || (Ae = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, r];
}
function Pp() {}
function Np(e, t) {
  var n = ie,
    r = it(),
    o = t(),
    i = !ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ae = !0)),
    (r = r.queue),
    pu(Rp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ho(9, Lp.bind(null, n, r, o, t), void 0, null), ye === null)) throw Error(b(349));
    Nn & 30 || Op(n, t, o);
  }
  return o;
}
function Op(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ip(t) && Dp(e);
}
function Rp(e, t, n) {
  return n(function () {
    Ip(t) && Dp(e);
  });
}
function Ip(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Dp(e) {
  var t = It(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Qc(e) {
  var t = gt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Dy.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function ho(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ie.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ap() {
  return it().memoizedState;
}
function hi(e, t, n, r) {
  var o = gt();
  (ie.flags |= e), (o.memoizedState = ho(1 | t, n, void 0, r === void 0 ? null : r));
}
function da(e, t, n, r) {
  var o = it();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var a = he.memoizedState;
    if (((i = a.destroy), r !== null && cu(r, a.deps))) {
      o.memoizedState = ho(t, n, i, r);
      return;
    }
  }
  (ie.flags |= e), (o.memoizedState = ho(1 | t, n, i, r));
}
function qc(e, t) {
  return hi(8390656, 8, e, t);
}
function pu(e, t) {
  return da(2048, 8, e, t);
}
function $p(e, t) {
  return da(4, 2, e, t);
}
function Mp(e, t) {
  return da(4, 4, e, t);
}
function zp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fp(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), da(4, 4, zp.bind(null, t, e), n);
}
function hu() {}
function Bp(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Hp(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wp(e, t, n) {
  return Nn & 21
    ? (ht(n, t) || ((n = Kd()), (ie.lanes |= n), (On |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function Ry(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dl.transition;
  dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (dl.transition = r);
  }
}
function Up() {
  return it().memoizedState;
}
function Iy(e, t, n) {
  var r = an(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Vp(e))) Xp(t, n);
  else if (((n = kp(e, t, n, r)), n !== null)) {
    var o = Pe();
    pt(n, e, r, o), Yp(n, t, r);
  }
}
function Dy(e, t, n) {
  var r = an(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vp(e)) Xp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), ht(l, a))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), iu(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = kp(e, t, o, r)), n !== null && ((o = Pe()), pt(n, e, r, o), Yp(n, t, r));
  }
}
function Vp(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Xp(e, t) {
  Ur = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Yp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
var zi = {
    readContext: ot,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
  },
  Ay = {
    readContext: ot,
    useCallback: function (e, t) {
      return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: qc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), hi(4194308, 4, zp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = gt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = Iy.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qc,
    useDebugValue: hu,
    useDeferredValue: function (e) {
      return (gt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qc(!1),
        t = e[0];
      return (e = Ry.bind(null, e[1])), (gt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        o = gt();
      if (ee) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(b(349));
        Nn & 30 || Op(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (o.queue = i), qc(Rp.bind(null, r, i, e), [e]), (r.flags |= 2048), ho(9, Lp.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = gt(),
        t = ye.identifierPrefix;
      if (ee) {
        var n = Pt,
          r = bt;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = fo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ly++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1
  },
  $y = {
    readContext: ot,
    useCallback: Bp,
    useContext: ot,
    useEffect: pu,
    useImperativeHandle: Fp,
    useInsertionEffect: $p,
    useLayoutEffect: Mp,
    useMemo: Hp,
    useReducer: pl,
    useRef: Ap,
    useState: function () {
      return pl(po);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = it();
      return Wp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(po)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Pp,
    useSyncExternalStore: Np,
    useId: Up,
    unstable_isNewReconciler: !1
  },
  My = {
    readContext: ot,
    useCallback: Bp,
    useContext: ot,
    useEffect: pu,
    useImperativeHandle: Fp,
    useInsertionEffect: $p,
    useLayoutEffect: Mp,
    useMemo: Hp,
    useReducer: hl,
    useRef: Ap,
    useState: function () {
      return hl(po);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = it();
      return he === null ? (t.memoizedState = e) : Wp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(po)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Pp,
    useSyncExternalStore: Np,
    useId: Up,
    unstable_isNewReconciler: !1
  };
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = an(e),
      i = Nt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = rn(e, i, o)), t !== null && (pt(t, e, o, r), di(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = an(e),
      i = Nt(r, o);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = rn(e, i, o)), t !== null && (pt(t, e, o, r), di(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = an(e),
      o = Nt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = rn(e, o, r)), t !== null && (pt(t, e, r, n), di(t, e, r));
  }
};
function Jc(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !io(n, r) || !io(o, i)
        : !0
  );
}
function Kp(e, t, n) {
  var r = !1,
    o = cn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ot(i))
      : ((o = Me(t) ? bn : ke.current), (r = t.contextTypes), (i = (r = r != null) ? ar(e, o) : cn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pa.enqueueReplaceState(t, t.state, null);
}
function es(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), au(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = ot(i)) : ((i = Me(t) ? bn : ke.current), (o.context = ar(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Zl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && pa.enqueueReplaceState(o, o.state, null),
      Ai(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function cr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += dg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ts(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zy = typeof WeakMap == 'function' ? WeakMap : Map;
function Gp(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bi || ((Bi = !0), (fs = r)), ts(e, t);
    }),
    n
  );
}
function Qp(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ts(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ts(e, t), typeof r != 'function' && (on === null ? (on = new Set([this])) : on.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' });
      }),
    n
  );
}
function ef(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Zy.bind(null, e, t, n)), t.then(e, e));
}
function tf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function nf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fy = Ft.ReactCurrentOwner,
  Ae = !1;
function je(e, t, n, r) {
  t.child = e === null ? Tp(t, null, n, r) : sr(t, e.child, n, r);
}
function rf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    rr(t, o),
    (r = fu(e, t, n, r, i, o)),
    (n = du()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Dt(e, t, o))
      : (ee && n && Zs(t), (t.flags |= 1), je(e, t, r, o), t.child)
  );
}
function of(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' && !Eu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), qp(e, t, i, r, o))
      : ((e = yi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : io), n(a, r) && e.ref === t.ref)) return Dt(e, t, o);
  }
  return (t.flags |= 1), (e = ln(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function qp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (io(i, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Dt(e, t, o);
  }
  return ns(e, t, n, r, o);
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Q(qn, We), (We |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Q(qn, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), Q(qn, We), (We |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), Q(qn, We), (We |= r);
  return je(e, t, o, n), t.child;
}
function Zp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ns(e, t, n, r, o) {
  var i = Me(n) ? bn : ke.current;
  return (
    (i = ar(t, i)),
    rr(t, o),
    (n = fu(e, t, n, r, i, o)),
    (r = du()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Dt(e, t, o))
      : (ee && r && Zs(t), (t.flags |= 1), je(e, t, n, o), t.child)
  );
}
function af(e, t, n, r, o) {
  if (Me(n)) {
    var i = !0;
    Oi(t);
  } else i = !1;
  if ((rr(t, o), t.stateNode === null)) mi(e, t), Kp(t, n, r), es(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = ot(u)) : ((u = Me(n) ? bn : ke.current), (u = ar(t, u)));
    var f = n.getDerivedStateFromProps,
      c = typeof f == 'function' || typeof a.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Zc(t, a, r, u)),
      (Xt = !1);
    var g = t.memoizedState;
    (a.state = g),
      Ai(t, r, a, o),
      (s = t.memoizedState),
      l !== r || g !== s || $e.current || Xt
        ? (typeof f == 'function' && (Zl(t, n, f, r), (s = t.memoizedState)),
          (l = Xt || Jc(t, n, l, r, g, s, u))
            ? (c ||
                (typeof a.UNSAFE_componentWillMount != 'function' && typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (a = t.stateNode),
      jp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ut(t.type, l)),
      (a.props = u),
      (c = t.pendingProps),
      (g = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null ? (s = ot(s)) : ((s = Me(n) ? bn : ke.current), (s = ar(t, s)));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
      ((l !== c || g !== s) && Zc(t, a, r, s)),
      (Xt = !1),
      (g = t.memoizedState),
      (a.state = g),
      Ai(t, r, a, o);
    var x = t.memoizedState;
    l !== c || g !== x || $e.current || Xt
      ? (typeof w == 'function' && (Zl(t, n, w, r), (x = t.memoizedState)),
        (u = Xt || Jc(t, n, u, r, g, x, s) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' && typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(r, x, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' && a.UNSAFE_componentWillUpdate(r, x, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (a.props = r),
        (a.state = x),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' || (l === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
        (r = !1));
  }
  return rs(e, t, n, r, i, o);
}
function rs(e, t, n, r, o, i) {
  Zp(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Uc(t, n, !1), Dt(e, t, i);
  (r = t.stateNode), (Fy.current = t);
  var l = a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a ? ((t.child = sr(t, e.child, null, i)), (t.child = sr(t, null, l, i))) : je(e, t, l, i),
    (t.memoizedState = r.state),
    o && Uc(t, n, !0),
    t.child
  );
}
function eh(e) {
  var t = e.stateNode;
  t.pendingContext ? Wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wc(e, t.context, !1), lu(e, t.containerInfo);
}
function lf(e, t, n, r, o) {
  return lr(), tu(o), (t.flags |= 256), je(e, t, n, r), t.child;
}
var os = { dehydrated: null, treeContext: null, retryLane: 0 };
function is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function th(e, t, n) {
  var r = t.pendingProps,
    o = oe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(oe, o & 1),
    e === null)
  )
    return (
      ql(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = a)) : (i = va(a, r, 0, null)),
              (e = Tn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = is(n)),
              (t.memoizedState = os),
              e)
            : mu(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return By(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = ln(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = ln(l, i)) : ((i = Tn(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a = a === null ? is(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = os),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ln(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (t = va({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Jo(e, t, n, r) {
  return r !== null && tu(r), sr(t, e.child, null, n), (e = mu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function By(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ml(Error(b(422)))), Jo(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = va({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Tn(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && sr(t, e.child, null, a),
          (t.child.memoizedState = is(a)),
          (t.memoizedState = os),
          i);
  if (!(t.mode & 1)) return Jo(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(b(419))), (r = ml(i, r, void 0)), Jo(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Ae || l)) {
    if (((r = ye), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), It(e, o), pt(r, e, o, -1));
    }
    return _u(), (r = ml(Error(b(421)))), Jo(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = e0.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ue = nn(o.nextSibling)),
      (Ve = t),
      (ee = !0),
      (ft = null),
      e !== null && ((et[tt++] = bt), (et[tt++] = Pt), (et[tt++] = Pn), (bt = e.id), (Pt = e.overflow), (Pn = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jl(e.return, t, n);
}
function vl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = o));
}
function nh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((je(e, t, r.children, n), (r = oe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sf(e, n, t);
        else if (e.tag === 19) sf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && $i(e) === null && (o = n), (n = n.sibling);
        (n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), vl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $i(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        vl(t, !0, n, null, i);
        break;
      case 'together':
        vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (On |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hy(e, t, n) {
  switch (t.tag) {
    case 3:
      eh(t), lr();
      break;
    case 5:
      bp(t);
      break;
    case 1:
      Me(t.type) && Oi(t);
      break;
    case 4:
      lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Q(Ii, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? th(e, t, n)
            : (Q(oe, oe.current & 1), (e = Dt(e, t, n)), e !== null ? e.sibling : null);
      Q(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nh(e, t, n);
        t.flags |= 128;
      }
      if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), Q(oe, oe.current), r))
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jp(e, t, n);
  }
  return Dt(e, t, n);
}
var rh, as, oh, ih;
rh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
as = function () {};
oh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sn(_t.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = bl(e, o)), (r = bl(e, r)), (i = []);
        break;
      case 'select':
        (o = le({}, o, { value: void 0 })), (r = le({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = Ol(e, o)), (r = Ol(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Pi);
    }
    Rl(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Jr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && s !== l && (s != null || l != null)))
        if (u === 'style')
          if (l) {
            for (a in l) !l.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
            for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0), (l = l ? l.__html : void 0), s != null && l !== s && (i = i || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Jr.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && q('scroll', e), i || l === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ih = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling);
  else
    for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Wy(e, t, n) {
  var r = t.pendingProps;
  switch ((eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Me(t.type) && Ni(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        J($e),
        J(ke),
        uu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (hs(ft), (ft = null)))),
        as(e, t),
        Ce(t),
        null
      );
    case 5:
      su(t);
      var o = Sn(co.current);
      if (((n = t.type), e !== null && t.stateNode != null)) oh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return Ce(t), null;
        }
        if (((e = Sn(_t.current)), Qo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[so] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              q('cancel', r), q('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              q('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Mr.length; o++) q(Mr[o], r);
              break;
            case 'source':
              q('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              q('error', r), q('load', r);
              break;
            case 'details':
              q('toggle', r);
              break;
            case 'input':
              vc(r, i), q('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), q('invalid', r);
              break;
            case 'textarea':
              yc(r, i), q('invalid', r);
          }
          Rl(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Go(r.textContent, l, e), (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 && Go(r.textContent, l, e), (o = ['children', '' + l]))
                : Jr.hasOwnProperty(a) && l != null && a === 'onScroll' && q('scroll', r);
            }
          switch (n) {
            case 'input':
              Bo(r), gc(r, i, !0);
              break;
            case 'textarea':
              Bo(r), wc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Rd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)), n === 'select' && ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[yt] = t),
            (e[so] = r),
            rh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Il(n, r)), n)) {
              case 'dialog':
                q('cancel', e), q('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                q('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Mr.length; o++) q(Mr[o], e);
                o = r;
                break;
              case 'source':
                q('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                q('error', e), q('load', e), (o = r);
                break;
              case 'details':
                q('toggle', e), (o = r);
                break;
              case 'input':
                vc(e, r), (o = bl(e, r)), q('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = le({}, r, { value: void 0 })), q('invalid', e);
                break;
              case 'textarea':
                yc(e, r), (o = Ol(e, r)), q('invalid', e);
                break;
              default:
                o = r;
            }
            Rl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === 'style'
                  ? Ad(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Id(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && Zr(e, s)
                        : typeof s == 'number' && Zr(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Jr.hasOwnProperty(i) ? s != null && i === 'onScroll' && q('scroll', e) : s != null && zs(e, i, s, a));
              }
            switch (n) {
              case 'input':
                Bo(e), gc(e, r, !1);
                break;
              case 'textarea':
                Bo(e), wc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + un(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null ? Zn(e, !!r.multiple, i, !1) : r.defaultValue != null && Zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Pi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) ih(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(b(166));
        if (((n = Sn(co.current)), Sn(_t.current), Qo(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[yt] = t), (i = r.nodeValue !== n) && ((e = Ve), e !== null)))
            switch (e.tag) {
              case 3:
                Go(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Go(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[yt] = t), (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if ((J(oe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (ee && Ue !== null && t.mode & 1 && !(t.flags & 128)) Sp(), lr(), (t.flags |= 98560), (i = !1);
        else if (((i = Qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(b(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(b(317));
            i[yt] = t;
          } else lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else ft !== null && (hs(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || oe.current & 1 ? me === 0 && (me = 3) : _u())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return ur(), as(e, t), e === null && ao(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return ou(t.type._context), Ce(t), null;
    case 17:
      return Me(t.type) && Ni(), Ce(t), null;
    case 19:
      if ((J(oe), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Lr(i, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = $i(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Lr(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return Q(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ce() > fr && ((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $i(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !ee)
            )
              return Ce(t), null;
          } else 2 * ce() - i.renderingStartTime > fr && n !== 1073741824 && ((t.flags |= 128), (r = !0), Lr(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((a.sibling = t.child), (t.child = a)) : ((n = i.last), n !== null ? (n.sibling = a) : (t.child = a), (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = oe.current),
          Q(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        xu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? We & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function Uy(e, t) {
  switch ((eu(t), t.tag)) {
    case 1:
      return Me(t.type) && Ni(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return ur(), J($e), J(ke), uu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return su(t), null;
    case 13:
      if ((J(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        lr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return J(oe), null;
    case 4:
      return ur(), null;
    case 10:
      return ou(t.type._context), null;
    case 22:
    case 23:
      return xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zo = !1,
  Te = !1,
  Vy = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function ls(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var uf = !1;
function Xy(e, t) {
  if (((Ul = ki), (e = cp()), Js(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            g = null;
          t: for (;;) {
            for (
              var w;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = a + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = a + r),
                c.nodeType === 3 && (a += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (g = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if ((g === n && ++u === o && (l = a), g === i && ++f === r && (s = a), (w = c.nextSibling) !== null)) break;
              (c = g), (g = c.parentNode);
            }
            c = w;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vl = { focusedElem: e, selectionRange: n }, ki = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var E = x.memoizedProps,
                    _ = x.memoizedState,
                    v = t.stateNode,
                    d = v.getSnapshotBeforeUpdate(t.elementType === t.type ? E : ut(t.type, E), _);
                  v.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? (h.textContent = '') : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (y) {
          se(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (x = uf), (uf = !1), x;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ls(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ha(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ss(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function ah(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ah(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[yt], delete t[so], delete t[Kl], delete t[by], delete t[Py])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), (e = e.sibling);
}
function cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (cs(e, t, n), e = e.sibling; e !== null; ) cs(e, t, n), (e = e.sibling);
}
var xe = null,
  ct = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) sh(e, t, n), (n = n.sibling);
}
function sh(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == 'function')
    try {
      xt.onCommitFiberUnmount(aa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Qn(n, t);
    case 6:
      var r = xe,
        o = ct;
      (xe = null),
        Ut(e, t, n),
        (xe = r),
        (ct = o),
        xe !== null &&
          (ct
            ? ((e = xe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null &&
        (ct
          ? ((e = xe), (n = n.stateNode), e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), ro(e))
          : ul(xe, n.stateNode));
      break;
    case 4:
      (r = xe), (o = ct), (xe = n.stateNode.containerInfo), (ct = !0), Ut(e, t, n), (xe = r), (ct = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag), a !== void 0 && (i & 2 || i & 4) && ls(n, t, a), (o = o.next);
        } while (o !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!Te && (Qn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          se(n, t, l);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Te = (r = Te) || n.memoizedState !== null), Ut(e, t, n), (Te = r)) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function ff(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vy()),
      t.forEach(function (r) {
        var o = t0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (xe = l.stateNode), (ct = !1);
              break e;
            case 3:
              (xe = l.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (xe = l.stateNode.containerInfo), (ct = !0);
              break e;
          }
          l = l.return;
        }
        if (xe === null) throw Error(b(160));
        sh(i, a, o), (xe = null), (ct = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uh(t, e), (t = t.sibling);
}
function uh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), vt(e), r & 4)) {
        try {
          Vr(3, e, e.return), ha(3, e);
        } catch (E) {
          se(e, e.return, E);
        }
        try {
          Vr(5, e, e.return);
        } catch (E) {
          se(e, e.return, E);
        }
      }
      break;
    case 1:
      st(t, e), vt(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if ((st(t, e), vt(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Zr(o, '');
        } catch (E) {
          se(e, e.return, E);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && Od(o, i), Il(l, a);
            var u = Il(l, i);
            for (a = 0; a < s.length; a += 2) {
              var f = s[a],
                c = s[a + 1];
              f === 'style' ? Ad(o, c) : f === 'dangerouslySetInnerHTML' ? Id(o, c) : f === 'children' ? Zr(o, c) : zs(o, f, c, u);
            }
            switch (l) {
              case 'input':
                Pl(o, i);
                break;
              case 'textarea':
                Ld(o, i);
                break;
              case 'select':
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Zn(o, !!i.multiple, w, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null ? Zn(o, !!i.multiple, i.defaultValue, !0) : Zn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[so] = i;
          } catch (E) {
            se(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((st(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (E) {
          se(e, e.return, E);
        }
      }
      break;
    case 3:
      if ((st(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ro(t.containerInfo);
        } catch (E) {
          se(e, e.return, E);
        }
      break;
    case 4:
      st(t, e), vt(e);
      break;
    case 13:
      st(t, e),
        vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (yu = ce())),
        r & 4 && ff(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Te = (u = Te) || f), st(t, e), (Te = u)) : st(t, e), vt(e), r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (R = e, f = e.child; f !== null; ) {
            for (c = R = f; R !== null; ) {
              switch (((g = R), (w = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, g, g.return);
                  break;
                case 1:
                  Qn(g, g.return);
                  var x = g.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = g), (n = g.return);
                    try {
                      (t = r), (x.props = t.memoizedProps), (x.state = t.memoizedState), x.componentWillUnmount();
                    } catch (E) {
                      se(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Qn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    pf(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = g), (R = w)) : pf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function' ? i.setProperty('display', 'none', 'important') : (i.display = 'none'))
                    : ((l = c.stateNode),
                      (s = c.memoizedProps.style),
                      (a = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (l.style.display = Dd('display', a)));
              } catch (E) {
                se(e, e.return, E);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? '' : c.memoizedProps;
              } catch (E) {
                se(e, e.return, E);
              }
          } else if (((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) && c.child !== null) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      st(t, e), vt(e), r & 4 && ff(e);
      break;
    case 21:
      break;
    default:
      st(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Zr(o, ''), (r.flags &= -33));
          var i = cf(e);
          cs(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = cf(e);
          us(e, l, a);
          break;
        default:
          throw Error(b(161));
      }
    } catch (s) {
      se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yy(e, t, n) {
  (R = e), ch(e);
}
function ch(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Zo;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Te;
        l = Zo;
        var u = Te;
        if (((Zo = a), (Te = s) && !u))
          for (R = o; R !== null; )
            (a = R), (s = a.child), a.tag === 22 && a.memoizedState !== null ? hf(o) : s !== null ? ((s.return = a), (R = s)) : hf(o);
        for (; i !== null; ) (R = i), ch(i), (i = i.sibling);
        (R = o), (Zo = l), (Te = u);
      }
      df(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : df(e);
  }
}
function df(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || ha(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Gc(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gc(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && ro(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        Te || (t.flags & 512 && ss(t));
      } catch (g) {
        se(t, t.return, g);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function pf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function hf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ha(4, t);
          } catch (s) {
            se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              se(t, o, s);
            }
          }
          var i = t.return;
          try {
            ss(t);
          } catch (s) {
            se(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ss(t);
          } catch (s) {
            se(t, a, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var Ky = Math.ceil,
  Fi = Ft.ReactCurrentDispatcher,
  vu = Ft.ReactCurrentOwner,
  rt = Ft.ReactCurrentBatchConfig,
  B = 0,
  ye = null,
  pe = null,
  _e = 0,
  We = 0,
  qn = pn(0),
  me = 0,
  mo = null,
  On = 0,
  ma = 0,
  gu = 0,
  Xr = null,
  Ie = null,
  yu = 0,
  fr = 1 / 0,
  kt = null,
  Bi = !1,
  fs = null,
  on = null,
  ei = !1,
  Qt = null,
  Hi = 0,
  Yr = 0,
  ds = null,
  vi = -1,
  gi = 0;
function Pe() {
  return B & 6 ? ce() : vi !== -1 ? vi : (vi = ce());
}
function an(e) {
  return e.mode & 1
    ? B & 2 && _e !== 0
      ? _e & -_e
      : Oy.transition !== null
        ? (gi === 0 && (gi = Kd()), gi)
        : ((e = U), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tp(e.type))), e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Yr) throw ((Yr = 0), (ds = null), Error(b(185)));
  Co(e, n, r),
    (!(B & 2) || e !== ye) &&
      (e === ye && (!(B & 2) && (ma |= n), me === 4 && Kt(e, _e)),
      ze(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((fr = ce() + 500), fa && hn()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Og(e, t);
  var r = Ti(e, e === ye ? _e : 0);
  if (r === 0) n !== null && Ec(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ec(n), t === 1))
      e.tag === 0 ? Ny(mf.bind(null, e)) : xp(mf.bind(null, e)),
        ky(function () {
          !(B & 6) && hn();
        }),
        (n = null);
    else {
      switch (Gd(r)) {
        case 1:
          n = Us;
          break;
        case 4:
          n = Xd;
          break;
        case 16:
          n = Ci;
          break;
        case 536870912:
          n = Yd;
          break;
        default:
          n = Ci;
      }
      n = yh(n, fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fh(e, t) {
  if (((vi = -1), (gi = 0), B & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = Ti(e, e === ye ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wi(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = ph();
    (ye !== e || _e !== t) && ((kt = null), (fr = ce() + 500), Cn(e, t));
    do
      try {
        qy();
        break;
      } catch (l) {
        dh(e, l);
      }
    while (!0);
    ru(), (Fi.current = i), (B = o), pe !== null ? (t = 0) : ((ye = null), (_e = 0), (t = me));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = zl(e)), o !== 0 && ((r = o), (t = ps(e, o)))), t === 1)) throw ((n = mo), Cn(e, 0), Kt(e, r), ze(e, ce()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) && !Gy(o) && ((t = Wi(e, r)), t === 2 && ((i = zl(e)), i !== 0 && ((r = i), (t = ps(e, i)))), t === 1))
      )
        throw ((n = mo), Cn(e, 0), Kt(e, r), ze(e, ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          xn(e, Ie, kt);
          break;
        case 3:
          if ((Kt(e, r), (r & 130023424) === r && ((t = yu + 500 - ce()), 10 < t))) {
            if (Ti(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Yl(xn.bind(null, e, Ie, kt), t);
            break;
          }
          xn(e, Ie, kt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - dt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ce() - r),
            (r =
              (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ky(r / 1960)) -
              r),
            10 < r)
          ) {
            e.timeoutHandle = Yl(xn.bind(null, e, Ie, kt), r);
            break;
          }
          xn(e, Ie, kt);
          break;
        case 5:
          xn(e, Ie, kt);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return ze(e, ce()), e.callbackNode === n ? fh.bind(null, e) : null;
}
function ps(e, t) {
  var n = Xr;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), (e = Wi(e, t)), e !== 2 && ((t = Ie), (Ie = n), t !== null && hs(t)), e
  );
}
function hs(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Gy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kt(e, t) {
  for (t &= ~gu, t &= ~ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mf(e) {
  if (B & 6) throw Error(b(327));
  or();
  var t = Ti(e, 0);
  if (!(t & 1)) return ze(e, ce()), null;
  var n = Wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zl(e);
    r !== 0 && ((t = r), (n = ps(e, r)));
  }
  if (n === 1) throw ((n = mo), Cn(e, 0), Kt(e, t), ze(e, ce()), n);
  if (n === 6) throw Error(b(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), xn(e, Ie, kt), ze(e, ce()), null;
}
function wu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((fr = ce() + 500), fa && hn());
  }
}
function Ln(e) {
  Qt !== null && Qt.tag === 0 && !(B & 6) && or();
  var t = B;
  B |= 1;
  var n = rt.transition,
    r = U;
  try {
    if (((rt.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (rt.transition = n), (B = t), !(B & 6) && hn();
  }
}
function xu() {
  (We = qn.current), J(qn);
}
function Cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ty(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ni();
          break;
        case 3:
          ur(), J($e), J(ke), uu();
          break;
        case 5:
          su(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          J(oe);
          break;
        case 19:
          J(oe);
          break;
        case 10:
          ou(r.type._context);
          break;
        case 22:
        case 23:
          xu();
      }
      n = n.return;
    }
  if (((ye = e), (pe = e = ln(e.current, null)), (_e = We = t), (me = 0), (mo = null), (gu = ma = On = 0), (Ie = Xr = null), En !== null)) {
    for (t = 0; t < En.length; t++)
      if (((n = En[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    En = null;
  }
  return e;
}
function dh(e, t) {
  do {
    var n = pe;
    try {
      if ((ru(), (pi.current = zi), Mi)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (((Nn = 0), (ve = he = ie = null), (Ur = !1), (fo = 0), (vu.current = null), n === null || n.return === null)) {
        (me = 1), (mo = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (((t = _e), (l.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var u = s,
            f = l,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var g = f.alternate;
            g
              ? ((f.updateQueue = g.updateQueue), (f.memoizedState = g.memoizedState), (f.lanes = g.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = tf(a);
          if (w !== null) {
            (w.flags &= -257), nf(w, a, l, i, t), w.mode & 1 && ef(i, u, t), (t = w), (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ef(i, u, t), _u();
              break e;
            }
            s = Error(b(426));
          }
        } else if (ee && l.mode & 1) {
          var _ = tf(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), nf(_, a, l, i, t), tu(cr(s, l));
            break e;
          }
        }
        (i = s = cr(s, l)), me !== 4 && (me = 2), Xr === null ? (Xr = [i]) : Xr.push(i), (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = Gp(i, s, t);
              Kc(i, v);
              break e;
            case 1:
              l = s;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (on === null || !on.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Qp(i, l, t);
                Kc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      mh(n);
    } catch (S) {
      (t = S), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ph() {
  var e = Fi.current;
  return (Fi.current = zi), e === null ? zi : e;
}
function _u() {
  (me === 0 || me === 3 || me === 2) && (me = 4), ye === null || (!(On & 268435455) && !(ma & 268435455)) || Kt(ye, _e);
}
function Wi(e, t) {
  var n = B;
  B |= 2;
  var r = ph();
  (ye !== e || _e !== t) && ((kt = null), Cn(e, t));
  do
    try {
      Qy();
      break;
    } catch (o) {
      dh(e, o);
    }
  while (!0);
  if ((ru(), (B = n), (Fi.current = r), pe !== null)) throw Error(b(261));
  return (ye = null), (_e = 0), me;
}
function Qy() {
  for (; pe !== null; ) hh(pe);
}
function qy() {
  for (; pe !== null && !Eg(); ) hh(pe);
}
function hh(e) {
  var t = gh(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps), t === null ? mh(e) : (pe = t), (vu.current = null);
}
function mh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Uy(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (pe = null);
        return;
      }
    } else if (((n = Wy(n, t, We)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function xn(e, t, n) {
  var r = U,
    o = rt.transition;
  try {
    (rt.transition = null), (U = 1), Jy(e, t, n, r);
  } finally {
    (rt.transition = o), (U = r);
  }
  return null;
}
function Jy(e, t, n, r) {
  do or();
  while (Qt !== null);
  if (B & 6) throw Error(b(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Lg(e, i),
    e === ye && ((pe = ye = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ei ||
      ((ei = !0),
      yh(Ci, function () {
        return or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = rt.transition), (rt.transition = null);
    var a = U;
    U = 1;
    var l = B;
    (B |= 4),
      (vu.current = null),
      Xy(e, n),
      uh(n, e),
      yy(Vl),
      (ki = !!Ul),
      (Vl = Ul = null),
      (e.current = n),
      Yy(n),
      Sg(),
      (B = l),
      (U = a),
      (rt.transition = i);
  } else e.current = n;
  if ((ei && ((ei = !1), (Qt = e), (Hi = o)), (i = e.pendingLanes), i === 0 && (on = null), kg(n.stateNode), ze(e, ce()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Bi) throw ((Bi = !1), (e = fs), (fs = null), e);
  return Hi & 1 && e.tag !== 0 && or(), (i = e.pendingLanes), i & 1 ? (e === ds ? Yr++ : ((Yr = 0), (ds = e))) : (Yr = 0), hn(), null;
}
function or() {
  if (Qt !== null) {
    var e = Gd(Hi),
      t = rt.transition,
      n = U;
    try {
      if (((rt.transition = null), (U = 16 > e ? 16 : e), Qt === null)) var r = !1;
      else {
        if (((e = Qt), (Qt = null), (Hi = 0), B & 6)) throw Error(b(331));
        var o = B;
        for (B |= 4, R = e.current; R !== null; ) {
          var i = R,
            a = i.child;
          if (R.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (R = u; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (R = c);
                  else
                    for (; R !== null; ) {
                      f = R;
                      var g = f.sibling,
                        w = f.return;
                      if ((ah(f), f === u)) {
                        R = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = w), (R = g);
                        break;
                      }
                      R = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var _ = E.sibling;
                    (E.sibling = null), (E = _);
                  } while (E !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (R = a);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (R = v);
                break e;
              }
              R = i.return;
            }
        }
        var d = e.current;
        for (R = d; R !== null; ) {
          a = R;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (R = h);
          else
            e: for (a = d; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ha(9, l);
                  }
                } catch (S) {
                  se(l, l.return, S);
                }
              if (l === a) {
                R = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                (y.return = l.return), (R = y);
                break e;
              }
              R = l.return;
            }
        }
        if (((B = o), hn(), xt && typeof xt.onPostCommitFiberRoot == 'function'))
          try {
            xt.onPostCommitFiberRoot(aa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (rt.transition = t);
    }
  }
  return !1;
}
function vf(e, t, n) {
  (t = cr(n, t)), (t = Gp(e, t, 1)), (e = rn(e, t, 1)), (t = Pe()), e !== null && (Co(e, 1, t), ze(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) vf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (on === null || !on.has(r)))
        ) {
          (e = cr(n, e)), (e = Qp(t, e, 1)), (t = rn(t, e, 1)), (e = Pe()), t !== null && (Co(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e && (_e & n) === n && (me === 4 || (me === 3 && (_e & 130023424) === _e && 500 > ce() - yu) ? Cn(e, 0) : (gu |= n)),
    ze(e, t);
}
function vh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Uo), (Uo <<= 1), !(Uo & 130023424) && (Uo = 4194304)) : (t = 1));
  var n = Pe();
  (e = It(e, t)), e !== null && (Co(e, t, n), ze(e, n));
}
function e0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vh(e, n);
}
function t0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  r !== null && r.delete(t), vh(e, n);
}
var gh;
gh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), Hy(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), ee && t.flags & 1048576 && _p(t, Ri, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mi(e, t), (e = t.pendingProps);
      var o = ar(t, ke.current);
      rr(t, n), (o = fu(null, t, r, e, o, n));
      var i = du();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((i = !0), Oi(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            au(t),
            (o.updater = pa),
            (t.stateNode = o),
            (o._reactInternals = t),
            es(t, r, e, n),
            (t = rs(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Zs(t), je(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mi(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = r0(r)), (e = ut(r, e)), o)
        ) {
          case 0:
            t = ns(null, t, r, e, n);
            break e;
          case 1:
            t = af(null, t, r, e, n);
            break e;
          case 11:
            t = rf(null, t, r, e, n);
            break e;
          case 14:
            t = of(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), ns(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), af(e, t, r, o, n);
    case 3:
      e: {
        if ((eh(t), e === null)) throw Error(b(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), jp(e, t), Ai(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = cr(Error(b(423)), t)), (t = lf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = cr(Error(b(424)), t)), (t = lf(e, t, r, n, o));
            break e;
          } else
            for (Ue = nn(t.stateNode.containerInfo.firstChild), Ve = t, ee = !0, ft = null, n = Tp(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lr(), r === o)) {
            t = Dt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bp(t),
        e === null && ql(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Xl(r, o) ? (a = null) : i !== null && Xl(r, i) && (t.flags |= 32),
        Zp(e, t),
        je(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ql(t), null;
    case 13:
      return th(e, t, n);
    case 4:
      return lu(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = sr(t, null, r, n)) : je(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), rf(e, t, r, o, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Q(Ii, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (ht(i.value, a)) {
            if (i.children === o.children && !$e.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Nt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (u.pending = s);
                      }
                    }
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Jl(i.return, n, t), (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(b(341));
                (a.lanes |= n), (l = a.alternate), l !== null && (l.lanes |= n), Jl(a, n, t), (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        je(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (o = t.type), (r = t.pendingProps.children), rr(t, n), (o = ot(o)), (r = r(o)), (t.flags |= 1), je(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (o = ut(r, t.pendingProps)), (o = ut(r.type, o)), of(e, t, r, o, n);
    case 15:
      return qp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        mi(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Oi(t)) : (e = !1),
        rr(t, n),
        Kp(t, r, o),
        es(t, r, o, n),
        rs(null, t, r, !0, e, n)
      );
    case 19:
      return nh(e, t, n);
    case 22:
      return Jp(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function yh(e, t) {
  return Vd(e, t);
}
function n0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nt(e, t, n, r) {
  return new n0(e, t, n, r);
}
function Eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function r0(e) {
  if (typeof e == 'function') return Eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bs)) return 11;
    if (e === Hs) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yi(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Eu(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Bn:
        return Tn(n.children, o, i, t);
      case Fs:
        (a = 8), (o |= 8);
        break;
      case Cl:
        return (e = nt(12, n, t, o | 2)), (e.elementType = Cl), (e.lanes = i), e;
      case Tl:
        return (e = nt(13, n, t, o)), (e.elementType = Tl), (e.lanes = i), e;
      case kl:
        return (e = nt(19, n, t, o)), (e.elementType = kl), (e.lanes = i), e;
      case bd:
        return va(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case kd:
              a = 10;
              break e;
            case jd:
              a = 9;
              break e;
            case Bs:
              a = 11;
              break e;
            case Hs:
              a = 14;
              break e;
            case Vt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ''));
    }
  return (t = nt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Tn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function va(e, t, n, r) {
  return (e = nt(22, e, r, t)), (e.elementType = bd), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function gl(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function yl(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function o0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ja(0)),
    (this.expirationTimes = Ja(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ja(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new o0(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = nt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    au(i),
    e
  );
}
function i0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function wh(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return wp(e, n, t);
  }
  return t;
}
function xh(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Su(n, r, !0, e, o, i, a, l, s)),
    (e.context = wh(null)),
    (n = e.current),
    (r = Pe()),
    (o = an(n)),
    (i = Nt(r, o)),
    (i.callback = t ?? null),
    rn(n, i, o),
    (e.current.lanes = o),
    Co(e, o, r),
    ze(e, r),
    e
  );
}
function ga(e, t, n, r) {
  var o = t.current,
    i = Pe(),
    a = an(o);
  return (
    (n = wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(o, t, a)),
    e !== null && (pt(e, o, a, i), di(e, o, a)),
    a
  );
}
function Ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cu(e, t) {
  gf(e, t), (e = e.alternate) && gf(e, t);
}
function a0() {
  return null;
}
var _h =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tu(e) {
  this._internalRoot = e;
}
ya.prototype.render = Tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  ga(e, t, null, null);
};
ya.prototype.unmount = Tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function () {
      ga(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function ya(e) {
  this._internalRoot = e;
}
ya.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && ep(e);
  }
};
function ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function yf() {}
function l0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Ui(a);
        i.call(u);
      };
    }
    var a = xh(t, r, e, 0, null, !1, !1, '', yf);
    return (e._reactRootContainer = a), (e[Rt] = a.current), ao(e.nodeType === 8 ? e.parentNode : e), Ln(), a;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = Ui(s);
      l.call(u);
    };
  }
  var s = Su(e, 0, !1, null, null, !1, !1, '', yf);
  return (
    (e._reactRootContainer = s),
    (e[Rt] = s.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      ga(t, s, n, r);
    }),
    s
  );
}
function xa(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = Ui(a);
        l.call(s);
      };
    }
    ga(t, a, e, o);
  } else a = l0(n, t, e, o, r);
  return Ui(a);
}
Qd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 && (Vs(t, n | 1), ze(t, ce()), !(B & 6) && ((fr = ce() + 500), hn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = It(e, 1);
        if (r !== null) {
          var o = Pe();
          pt(r, e, 1, o);
        }
      }),
        Cu(e, 1);
  }
};
Xs = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Pe();
      pt(t, e, 134217728, n);
    }
    Cu(e, 134217728);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = It(e, t);
    if (n !== null) {
      var r = Pe();
      pt(n, e, t, r);
    }
    Cu(e, t);
  }
};
Jd = function () {
  return U;
};
Zd = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Al = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Pl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ca(r);
            if (!o) throw Error(b(90));
            Nd(r), Pl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Ld(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Zn(e, !!n.multiple, t, !1);
  }
};
zd = wu;
Fd = Ln;
var s0 = { usingClientEntryPoint: !1, Events: [ko, Vn, ca, $d, Md, wu] },
  Rr = { findFiberByHostInstance: _n, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
  u0 = {
    bundleType: Rr.bundleType,
    version: Rr.version,
    rendererPackageName: Rr.rendererPackageName,
    rendererConfig: Rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rr.findFiberByHostInstance || a0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ti.isDisabled && ti.supportsFiber)
    try {
      (aa = ti.inject(u0)), (xt = ti);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ku(t)) throw Error(b(200));
  return i0(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!ku(e)) throw Error(b(299));
  var n = !1,
    r = '',
    o = _h;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, o)),
    (e[Rt] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new Tu(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == 'function' ? Error(b(188)) : ((e = Object.keys(e).join(',')), Error(b(268, e)));
  return (e = Wd(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Ln(e);
};
Ge.hydrate = function (e, t, n) {
  if (!wa(t)) throw Error(b(200));
  return xa(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!ku(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = _h;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = xh(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Rt] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ya(t);
};
Ge.render = function (e, t, n) {
  if (!wa(t)) throw Error(b(200));
  return xa(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!wa(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (Ln(function () {
        xa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = wu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wa(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return xa(e, t, n, !1, r);
};
Ge.version = '18.3.1-next-f1338f8080-20240426';
function Eh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eh);
    } catch (e) {
      console.error(e);
    }
}
Eh(), (Ed.exports = Ge);
var Sh = Ed.exports;
const tE = Dn(Sh);
var Ch,
  wf = Sh;
(Ch = wf.createRoot), wf.hydrateRoot;
var Th = { exports: {} },
  c0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  f0 = c0,
  d0 = f0;
function kh() {}
function jh() {}
jh.resetWarningCache = kh;
var p0 = function () {
  function e(r, o, i, a, l, s) {
    if (s !== d0) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: jh,
    resetWarningCache: kh
  };
  return (n.PropTypes = n), n;
};
Th.exports = p0();
var bh = Th.exports;
const j = Dn(bh),
  ju = 'CHANGE_LAYOUT',
  Xe = 'COLLAPSE_MENU',
  vo = 'COLLAPSE_TOGGLE',
  h0 = 'NAV_COLLAPSE_LEAVE',
  m0 = 'NAV_CONTENT_LEAVE',
  v0 = 'RESET',
  xf = '/',
  Ph = ' | Datta Able Free React Hooks + Admin Template',
  g0 = { layout: 'vertical' },
  wi = { ...g0, isOpen: [], isTrigger: [] },
  qe = m.createContext(wi),
  { Provider: y0 } = qe,
  Nh = ({ children: e }) => {
    let t = [],
      n = [];
    const [r, o] = m.useReducer((i, a) => {
      switch (a.type) {
        case ju:
          return { ...i, layout: a.layout };
        case Xe:
          return { ...i, collapseMenu: !i.collapseMenu };
        case vo:
          if (a.menu.type === 'sub') {
            (n = i.isOpen), (t = i.isTrigger);
            const l = t.indexOf(a.menu.id);
            l > -1 && ((n = n.filter((s) => s !== a.menu.id)), (t = t.filter((s) => s !== a.menu.id))),
              l === -1 && ((n = [...n, a.menu.id]), (t = [...t, a.menu.id]));
          } else {
            n = i.isOpen;
            const l = i.isTrigger.indexOf(a.menu.id);
            (t = l === -1 ? [a.menu.id] : []), (n = l === -1 ? [a.menu.id] : []);
          }
          return { ...i, isOpen: n, isTrigger: t };
        case h0:
          return a.menu.type === 'sub'
            ? ((n = i.isOpen),
              (t = i.isTrigger),
              t.indexOf(a.menu.id) > -1 && ((n = n.filter((s) => s !== a.menu.id)), (t = t.filter((s) => s !== a.menu.id))),
              { ...i, isOpen: n, isTrigger: t })
            : { ...i };
        case m0:
          return { ...i, isOpen: n, isTrigger: t };
        case v0:
          return { ...i, layout: wi.layout, collapseMenu: wi.collapseMenu };
        default:
          throw new Error();
      }
    }, wi);
    return p.jsx(y0, { value: { state: r, dispatch: o }, children: e });
  };
Nh.propTypes = { children: j.object };
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
var qt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(qt || (qt = {}));
const _f = 'popstate';
function w0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return ms('', { pathname: i, search: a, hash: l }, (o.state && o.state.usr) || null, (o.state && o.state.key) || 'default');
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Vi(o);
  }
  return _0(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Oh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function x0() {
  return Math.random().toString(36).substr(2, 8);
}
function Ef(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ms(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    go({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Er(t) : t, {
      state: n,
      key: (t && t.key) || r || x0()
    })
  );
}
function Vi(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t;
}
function Er(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function _0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = qt.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), a.replaceState(go({}, a.state, { idx: u }), ''));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function c() {
    l = qt.Pop;
    let _ = f(),
      v = _ == null ? null : _ - u;
    (u = _), s && s({ action: l, location: E.location, delta: v });
  }
  function g(_, v) {
    l = qt.Push;
    let d = ms(E.location, _, v);
    u = f() + 1;
    let h = Ef(d, u),
      y = E.createHref(d);
    try {
      a.pushState(h, '', y);
    } catch (S) {
      if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
      o.location.assign(y);
    }
    i && s && s({ action: l, location: E.location, delta: 1 });
  }
  function w(_, v) {
    l = qt.Replace;
    let d = ms(E.location, _, v);
    u = f();
    let h = Ef(d, u),
      y = E.createHref(d);
    a.replaceState(h, '', y), i && s && s({ action: l, location: E.location, delta: 0 });
  }
  function x(_) {
    let v = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof _ == 'string' ? _ : Vi(_);
    return (d = d.replace(/ $/, '%20')), ae(v, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, v);
  }
  let E = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(_) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(_f, c),
        (s = _),
        () => {
          o.removeEventListener(_f, c), (s = null);
        }
      );
    },
    createHref(_) {
      return t(o, _);
    },
    createURL: x,
    encodeLocation(_) {
      let v = x(_);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: g,
    replace: w,
    go(_) {
      return a.go(_);
    }
  };
  return E;
}
var Sf;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Sf || (Sf = {}));
function E0(e, t, n) {
  return n === void 0 && (n = '/'), S0(e, t, n);
}
function S0(e, t, n, r) {
  let o = typeof t == 'string' ? Er(t) : t,
    i = dr(o.pathname || '/', n);
  if (i == null) return null;
  let a = Lh(e);
  C0(a);
  let l = null;
  for (let s = 0; l == null && s < a.length; ++s) {
    let u = D0(i);
    l = R0(a[s], u);
  }
  return l;
}
function Lh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, a, l) => {
    let s = { relativePath: l === void 0 ? i.path || '' : l, caseSensitive: i.caseSensitive === !0, childrenIndex: a, route: i };
    s.relativePath.startsWith('/') &&
      (ae(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = sn([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ae(i.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')),
      Lh(i.children, t, f, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: O0(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) o(i, a);
      else for (let s of Rh(i.path)) o(i, a, s);
    }),
    t
  );
}
function Rh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let a = Rh(r.join('/')),
    l = [];
  return (
    l.push(...a.map((s) => (s === '' ? i : [i, s].join('/')))), o && l.push(...a), l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function C0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : L0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T0 = /^:[\w-]+$/,
  k0 = 3,
  j0 = 2,
  b0 = 1,
  P0 = 10,
  N0 = -2,
  Cf = (e) => e === '*';
function O0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return n.some(Cf) && (r += N0), t && (r += j0), n.filter((o) => !Cf(o)).reduce((o, i) => o + (T0.test(i) ? k0 : i === '' ? b0 : P0), r);
}
function L0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function R0(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = '/',
    a = [];
  for (let l = 0; l < r.length; ++l) {
    let s = r[l],
      u = l === r.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      c = vs({ path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, f),
      g = s.route;
    if (!c) return null;
    Object.assign(o, c.params),
      a.push({ params: o, pathname: sn([i, c.pathname]), pathnameBase: z0(sn([i, c.pathnameBase])), route: g }),
      c.pathnameBase !== '/' && (i = sn([i, c.pathnameBase]));
  }
  return a;
}
function vs(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = I0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: g, isOptional: w } = f;
      if (g === '*') {
        let E = l[c] || '';
        a = i.slice(0, i.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const x = l[c];
      return w && !x ? (u[g] = void 0) : (u[g] = (x || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e
  };
}
function I0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Oh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (a, l, s) => (r.push({ paramName: l, isOptional: s != null }), s ? '/?([^\\/]+)?' : '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function D0(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Oh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function dr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function A0(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? Er(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : $0(n, t)) : t, search: F0(r), hash: B0(o) };
}
function $0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function wl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function M0(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function bu(e, t) {
  let n = M0(e);
  return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Pu(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Er(e))
    : ((o = go({}, e)),
      ae(!o.pathname || !o.pathname.includes('?'), wl('?', 'pathname', 'search', o)),
      ae(!o.pathname || !o.pathname.includes('#'), wl('#', 'pathname', 'hash', o)),
      ae(!o.search || !o.search.includes('#'), wl('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let c = t.length - 1;
    if (!r && a.startsWith('..')) {
      let g = a.split('/');
      for (; g[0] === '..'; ) g.shift(), (c -= 1);
      o.pathname = g.join('/');
    }
    l = c >= 0 ? t[c] : '/';
  }
  let s = A0(o, l),
    u = a && a !== '/' && a.endsWith('/'),
    f = (i || a === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || f) && (s.pathname += '/'), s;
}
const sn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  z0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  F0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  B0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function H0(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e;
}
const Ih = ['post', 'put', 'patch', 'delete'];
new Set(Ih);
const W0 = ['get', ...Ih];
new Set(W0);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yo() {
  return (
    (yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yo.apply(this, arguments)
  );
}
const _a = m.createContext(null),
  Dh = m.createContext(null),
  Bt = m.createContext(null),
  Ea = m.createContext(null),
  Ht = m.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ah = m.createContext(null);
function U0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Sr() || ae(!1);
  let { basename: r, navigator: o } = m.useContext(Bt),
    { hash: i, pathname: a, search: l } = Ca(e, { relative: n }),
    s = a;
  return r !== '/' && (s = a === '/' ? r : sn([r, a])), o.createHref({ pathname: s, search: l, hash: i });
}
function Sr() {
  return m.useContext(Ea) != null;
}
function mt() {
  return Sr() || ae(!1), m.useContext(Ea).location;
}
function $h(e) {
  m.useContext(Bt).static || m.useLayoutEffect(e);
}
function Sa() {
  let { isDataRoute: e } = m.useContext(Ht);
  return e ? r1() : V0();
}
function V0() {
  Sr() || ae(!1);
  let e = m.useContext(_a),
    { basename: t, future: n, navigator: r } = m.useContext(Bt),
    { matches: o } = m.useContext(Ht),
    { pathname: i } = mt(),
    a = JSON.stringify(bu(o, n.v7_relativeSplatPath)),
    l = m.useRef(!1);
  return (
    $h(() => {
      l.current = !0;
    }),
    m.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let c = Pu(u, JSON.parse(a), i, f.relative === 'path');
        e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : sn([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, a, i, e]
    )
  );
}
function nE() {
  let { matches: e } = m.useContext(Ht),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ca(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = m.useContext(Bt),
    { matches: o } = m.useContext(Ht),
    { pathname: i } = mt(),
    a = JSON.stringify(bu(o, r.v7_relativeSplatPath));
  return m.useMemo(() => Pu(e, JSON.parse(a), i, n === 'path'), [e, a, i, n]);
}
function X0(e, t) {
  return Y0(e, t);
}
function Y0(e, t, n, r) {
  Sr() || ae(!1);
  let { navigator: o, static: i } = m.useContext(Bt),
    { matches: a } = m.useContext(Ht),
    l = a[a.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : '/';
  l && l.route;
  let f = mt(),
    c;
  if (t) {
    var g;
    let v = typeof t == 'string' ? Er(t) : t;
    u === '/' || ((g = v.pathname) != null && g.startsWith(u)) || ae(!1), (c = v);
  } else c = f;
  let w = c.pathname || '/',
    x = w;
  if (u !== '/') {
    let v = u.replace(/^\//, '').split('/');
    x = '/' + w.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let E = E0(e, { pathname: x }),
    _ = J0(
      E &&
        E.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, s, v.params),
            pathname: sn([u, o.encodeLocation ? o.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase:
              v.pathnameBase === '/' ? u : sn([u, o.encodeLocation ? o.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
          })
        ),
      a,
      n,
      r
    );
  return t && _
    ? m.createElement(
        Ea.Provider,
        { value: { location: yo({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, c), navigationType: qt.Pop } },
        _
      )
    : _;
}
function K0() {
  let e = n1(),
    t = H0(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return m.createElement(
    m.Fragment,
    null,
    m.createElement('h2', null, 'Unexpected Application Error!'),
    m.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? m.createElement('pre', { style: o }, n) : null,
    null
  );
}
const G0 = m.createElement(K0, null);
class Q0 extends m.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? m.createElement(
          Ht.Provider,
          { value: this.props.routeContext },
          m.createElement(Ah.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function q0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = m.useContext(_a);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(Ht.Provider, { value: t }, r)
  );
}
function J0(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let f = a.findIndex((c) => c.route.id && (l == null ? void 0 : l[c.route.id]) !== void 0);
    f >= 0 || ae(!1), (a = a.slice(0, Math.min(a.length, f + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < a.length; f++) {
      let c = a[f];
      if (((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f), c.route.id)) {
        let { loaderData: g, errors: w } = n,
          x = c.route.loader && g[c.route.id] === void 0 && (!w || w[c.route.id] === void 0);
        if (c.route.lazy || x) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((f, c, g) => {
    let w,
      x = !1,
      E = null,
      _ = null;
    n &&
      ((w = l && c.route.id ? l[c.route.id] : void 0),
      (E = c.route.errorElement || G0),
      s &&
        (u < 0 && g === 0
          ? (o1('route-fallback'), (x = !0), (_ = null))
          : u === g && ((x = !0), (_ = c.route.hydrateFallbackElement || null))));
    let v = t.concat(a.slice(0, g + 1)),
      d = () => {
        let h;
        return (
          w
            ? (h = E)
            : x
              ? (h = _)
              : c.route.Component
                ? (h = m.createElement(c.route.Component, null))
                : c.route.element
                  ? (h = c.route.element)
                  : (h = f),
          m.createElement(q0, { match: c, routeContext: { outlet: f, matches: v, isDataRoute: n != null }, children: h })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || g === 0)
      ? m.createElement(Q0, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: w,
          children: d(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 }
        })
      : d();
  }, null);
}
var Mh = (function (e) {
    return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e;
  })(Mh || {}),
  Xi = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Xi || {});
function Z0(e) {
  let t = m.useContext(_a);
  return t || ae(!1), t;
}
function e1(e) {
  let t = m.useContext(Dh);
  return t || ae(!1), t;
}
function t1(e) {
  let t = m.useContext(Ht);
  return t || ae(!1), t;
}
function zh(e) {
  let t = t1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function n1() {
  var e;
  let t = m.useContext(Ah),
    n = e1(Xi.UseRouteError),
    r = zh(Xi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function r1() {
  let { router: e } = Z0(Mh.UseNavigateStable),
    t = zh(Xi.UseNavigateStable),
    n = m.useRef(!1);
  return (
    $h(() => {
      n.current = !0;
    }),
    m.useCallback(
      function (o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, yo({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Tf = {};
function o1(e, t, n) {
  Tf[e] || (Tf[e] = !0);
}
function i1(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Kr(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Sr() || ae(!1);
  let { future: i, static: a } = m.useContext(Bt),
    { matches: l } = m.useContext(Ht),
    { pathname: s } = mt(),
    u = Sa(),
    f = Pu(t, bu(l, i.v7_relativeSplatPath), s, o === 'path'),
    c = JSON.stringify(f);
  return m.useEffect(() => u(JSON.parse(c), { replace: n, state: r, relative: o }), [u, c, o, n, r]), null;
}
function gs(e) {
  ae(!1);
}
function a1(e) {
  let { basename: t = '/', children: n = null, location: r, navigationType: o = qt.Pop, navigator: i, static: a = !1, future: l } = e;
  Sr() && ae(!1);
  let s = t.replace(/^\/*/, '/'),
    u = m.useMemo(() => ({ basename: s, navigator: i, static: a, future: yo({ v7_relativeSplatPath: !1 }, l) }), [s, l, i, a]);
  typeof r == 'string' && (r = Er(r));
  let { pathname: f = '/', search: c = '', hash: g = '', state: w = null, key: x = 'default' } = r,
    E = m.useMemo(() => {
      let _ = dr(f, s);
      return _ == null ? null : { location: { pathname: _, search: c, hash: g, state: w, key: x }, navigationType: o };
    }, [s, f, c, g, w, x, o]);
  return E == null ? null : m.createElement(Bt.Provider, { value: u }, m.createElement(Ea.Provider, { children: n, value: E }));
}
function l1(e) {
  let { children: t, location: n } = e;
  return X0(ys(t), n);
}
new Promise(() => {});
function ys(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    m.Children.forEach(e, (r, o) => {
      if (!m.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === m.Fragment) {
        n.push.apply(n, ys(r.props.children, i));
        return;
      }
      r.type !== gs && ae(!1), !r.props.index || !r.props.children || ae(!1);
      let a = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (a.children = ys(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
function Fh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function s1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function u1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !s1(e);
}
const c1 = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'viewTransition'],
  f1 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'viewTransition', 'children'],
  d1 = '6';
try {
  window.__reactRouterVersion = d1;
} catch {}
const p1 = m.createContext({ isTransitioning: !1 }),
  h1 = 'startTransition',
  kf = Zv[h1];
function m1(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = m.useRef();
  i.current == null && (i.current = w0({ window: o, v5Compat: !0 }));
  let a = i.current,
    [l, s] = m.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    f = m.useCallback(
      (c) => {
        u && kf ? kf(() => s(c)) : s(c);
      },
      [s, u]
    );
  return (
    m.useLayoutEffect(() => a.listen(f), [a, f]),
    m.useEffect(() => i1(r), [r]),
    m.createElement(a1, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: a, future: r })
  );
}
const v1 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  g1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  H = m.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: f,
        viewTransition: c
      } = t,
      g = Fh(t, c1),
      { basename: w } = m.useContext(Bt),
      x,
      E = !1;
    if (typeof u == 'string' && g1.test(u) && ((x = u), v1))
      try {
        let h = new URL(window.location.href),
          y = u.startsWith('//') ? new URL(h.protocol + u) : new URL(u),
          S = dr(y.pathname, w);
        y.origin === h.origin && S != null ? (u = S + y.search + y.hash) : (E = !0);
      } catch {}
    let _ = U0(u, { relative: o }),
      v = w1(u, { replace: a, state: l, target: s, preventScrollReset: f, relative: o, viewTransition: c });
    function d(h) {
      r && r(h), h.defaultPrevented || v(h);
    }
    return m.createElement('a', Yi({}, g, { href: x || _, onClick: E || i ? r : d, ref: n, target: s }));
  }),
  Bh = m.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: a = !1,
        style: l,
        to: s,
        viewTransition: u,
        children: f
      } = t,
      c = Fh(t, f1),
      g = Ca(s, { relative: c.relative }),
      w = mt(),
      x = m.useContext(Dh),
      { navigator: E, basename: _ } = m.useContext(Bt),
      v = x != null && x1(g) && u === !0,
      d = E.encodeLocation ? E.encodeLocation(g).pathname : g.pathname,
      h = w.pathname,
      y = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    o || ((h = h.toLowerCase()), (y = y ? y.toLowerCase() : null), (d = d.toLowerCase())), y && _ && (y = dr(y, _) || y);
    const S = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
    let T = h === d || (!a && h.startsWith(d) && h.charAt(S) === '/'),
      C = y != null && (y === d || (!a && y.startsWith(d) && y.charAt(d.length) === '/')),
      k = { isActive: T, isPending: C, isTransitioning: v },
      L = T ? r : void 0,
      P;
    typeof i == 'function'
      ? (P = i(k))
      : (P = [i, T ? 'active' : null, C ? 'pending' : null, v ? 'transitioning' : null].filter(Boolean).join(' '));
    let I = typeof l == 'function' ? l(k) : l;
    return m.createElement(
      H,
      Yi({}, c, { 'aria-current': L, className: P, ref: n, style: I, to: s, viewTransition: u }),
      typeof f == 'function' ? f(k) : f
    );
  });
var ws;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(ws || (ws = {}));
var jf;
(function (e) {
  (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(jf || (jf = {}));
function y1(e) {
  let t = m.useContext(_a);
  return t || ae(!1), t;
}
function w1(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: i, relative: a, viewTransition: l } = t === void 0 ? {} : t,
    s = Sa(),
    u = mt(),
    f = Ca(e, { relative: a });
  return m.useCallback(
    (c) => {
      if (u1(c, n)) {
        c.preventDefault();
        let g = r !== void 0 ? r : Vi(u) === Vi(f);
        s(e, { replace: g, state: o, preventScrollReset: i, relative: a, viewTransition: l });
      }
    },
    [u, s, f, r, o, n, e, i, a, l]
  );
}
function x1(e, t) {
  t === void 0 && (t = {});
  let n = m.useContext(p1);
  n == null && ae(!1);
  let { basename: r } = y1(ws.useViewTransitionState),
    o = Ca(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = dr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = dr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return vs(o.pathname, a) != null || vs(o.pathname, i) != null;
}
const _1 = 'modulepreload',
  E1 = function (e) {
    return '/' + e;
  },
  bf = {},
  M = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const a = document.querySelector('meta[property=csp-nonce]'),
        l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute('nonce'));
      o = Promise.allSettled(
        n.map((s) => {
          if (((s = E1(s)), s in bf)) return;
          bf[s] = !0;
          const u = s.endsWith('.css'),
            f = u ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${s}"]${f}`)) return;
          const c = document.createElement('link');
          if (
            ((c.rel = u ? 'stylesheet' : _1),
            u || (c.as = 'script'),
            (c.crossOrigin = ''),
            (c.href = s),
            l && c.setAttribute('nonce', l),
            document.head.appendChild(c),
            u)
          )
            return new Promise((g, w) => {
              c.addEventListener('load', g), c.addEventListener('error', () => w(new Error(`Unable to preload CSS for ${s}`)));
            });
        })
      );
    }
    function i(a) {
      const l = new Event('vite:preloadError', { cancelable: !0 });
      if (((l.payload = a), window.dispatchEvent(l), !l.defaultPrevented)) throw a;
    }
    return o.then((a) => {
      for (const l of a || []) l.status === 'rejected' && i(l.reason);
      return t().catch(i);
    });
  };
function S1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pr.apply(null, arguments)
  );
}
var Hh = { exports: {} },
  V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
  Nu = we ? Symbol.for('react.element') : 60103,
  Ou = we ? Symbol.for('react.portal') : 60106,
  Ta = we ? Symbol.for('react.fragment') : 60107,
  ka = we ? Symbol.for('react.strict_mode') : 60108,
  ja = we ? Symbol.for('react.profiler') : 60114,
  ba = we ? Symbol.for('react.provider') : 60109,
  Pa = we ? Symbol.for('react.context') : 60110,
  Lu = we ? Symbol.for('react.async_mode') : 60111,
  Na = we ? Symbol.for('react.concurrent_mode') : 60111,
  Oa = we ? Symbol.for('react.forward_ref') : 60112,
  La = we ? Symbol.for('react.suspense') : 60113,
  C1 = we ? Symbol.for('react.suspense_list') : 60120,
  Ra = we ? Symbol.for('react.memo') : 60115,
  Ia = we ? Symbol.for('react.lazy') : 60116,
  T1 = we ? Symbol.for('react.block') : 60121,
  k1 = we ? Symbol.for('react.fundamental') : 60117,
  j1 = we ? Symbol.for('react.responder') : 60118,
  b1 = we ? Symbol.for('react.scope') : 60119;
function Je(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Nu:
        switch (((e = e.type), e)) {
          case Lu:
          case Na:
          case Ta:
          case ja:
          case ka:
          case La:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Pa:
              case Oa:
              case Ia:
              case Ra:
              case ba:
                return e;
              default:
                return t;
            }
        }
      case Ou:
        return t;
    }
  }
}
function Wh(e) {
  return Je(e) === Na;
}
V.AsyncMode = Lu;
V.ConcurrentMode = Na;
V.ContextConsumer = Pa;
V.ContextProvider = ba;
V.Element = Nu;
V.ForwardRef = Oa;
V.Fragment = Ta;
V.Lazy = Ia;
V.Memo = Ra;
V.Portal = Ou;
V.Profiler = ja;
V.StrictMode = ka;
V.Suspense = La;
V.isAsyncMode = function (e) {
  return Wh(e) || Je(e) === Lu;
};
V.isConcurrentMode = Wh;
V.isContextConsumer = function (e) {
  return Je(e) === Pa;
};
V.isContextProvider = function (e) {
  return Je(e) === ba;
};
V.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Nu;
};
V.isForwardRef = function (e) {
  return Je(e) === Oa;
};
V.isFragment = function (e) {
  return Je(e) === Ta;
};
V.isLazy = function (e) {
  return Je(e) === Ia;
};
V.isMemo = function (e) {
  return Je(e) === Ra;
};
V.isPortal = function (e) {
  return Je(e) === Ou;
};
V.isProfiler = function (e) {
  return Je(e) === ja;
};
V.isStrictMode = function (e) {
  return Je(e) === ka;
};
V.isSuspense = function (e) {
  return Je(e) === La;
};
V.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ta ||
    e === Na ||
    e === ja ||
    e === ka ||
    e === La ||
    e === C1 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ia ||
        e.$$typeof === Ra ||
        e.$$typeof === ba ||
        e.$$typeof === Pa ||
        e.$$typeof === Oa ||
        e.$$typeof === k1 ||
        e.$$typeof === j1 ||
        e.$$typeof === b1 ||
        e.$$typeof === T1))
  );
};
V.typeOf = Je;
Hh.exports = V;
var P1 = Hh.exports,
  Ru = P1,
  N1 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  O1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  L1 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Uh = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Iu = {};
Iu[Ru.ForwardRef] = L1;
Iu[Ru.Memo] = Uh;
function Pf(e) {
  return Ru.isMemo(e) ? Uh : Iu[e.$$typeof] || N1;
}
var R1 = Object.defineProperty,
  I1 = Object.getOwnPropertyNames,
  Nf = Object.getOwnPropertySymbols,
  D1 = Object.getOwnPropertyDescriptor,
  A1 = Object.getPrototypeOf,
  Of = Object.prototype;
function Vh(e, t, n) {
  if (typeof t != 'string') {
    if (Of) {
      var r = A1(t);
      r && r !== Of && Vh(e, r, n);
    }
    var o = I1(t);
    Nf && (o = o.concat(Nf(t)));
    for (var i = Pf(e), a = Pf(t), l = 0; l < o.length; ++l) {
      var s = o[l];
      if (!O1[s] && !(n && n[s]) && !(a && a[s]) && !(i && i[s])) {
        var u = D1(t, s);
        try {
          R1(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var $1 = Vh;
const M1 = Dn($1);
var Xh = function (t, n, r) {
    return (t = t <= r ? t : r), (t = t >= n ? t : n), t;
  },
  z1 = function () {
    var t = !1,
      n = [],
      r = function () {
        t = !0;
        var l = n.shift();
        if (l) return l(r);
        t = !1;
      },
      o = function () {
        (t = !1), (n = []);
      },
      i = function (l) {
        n.push(l), !t && n.length === 1 && r();
      };
    return { clear: o, enqueue: i };
  },
  F1 = function () {
    var t,
      n = function () {
        t && window.cancelAnimationFrame(t);
      },
      r = function (i, a) {
        var l,
          s,
          u = function (c) {
            if (((s = s || c), (l = c - s), l > a)) {
              i();
              return;
            }
            t = window.requestAnimationFrame(u);
          };
        t = window.requestAnimationFrame(u);
      };
    return { cancel: n, schedule: r };
  },
  B1 = function (t) {
    var n = 0;
    return (
      t >= 0 && t < 0.2
        ? (n = 0.1)
        : t >= 0.2 && t < 0.5
          ? (n = 0.04)
          : t >= 0.5 && t < 0.8
            ? (n = 0.02)
            : t >= 0.8 && t < 0.99 && (n = 0.005),
      Xh(t + n, 0, 0.994)
    );
  },
  Lf = function (t) {
    m.useEffect(t, []);
  },
  H1 = function (t) {
    return ++t % 1e6;
  },
  W1 = function () {
    var t = m.useState(0),
      n = t[1];
    return m.useCallback(function () {
      return n(H1);
    }, []);
  },
  U1 = function (t) {
    t === void 0 && (t = {});
    var n = W1(),
      r = m.useRef(pr({}, t)),
      o = m.useCallback(function () {
        return r.current;
      }, []),
      i = m.useCallback(function (a) {
        a && (Object.assign(r.current, a), n());
      }, []);
    return [o, i];
  },
  V1 = function () {
    var t = m.useRef(!0);
    return t.current ? ((t.current = !1), !0) : t.current;
  },
  Rf = function (t, n) {
    var r = V1();
    m.useEffect(function () {
      if (!r) return t();
    }, n);
  },
  Yh = function () {},
  If = { isFinished: !0, progress: 0, sideEffect: Yh },
  X1 = function (t) {
    var n = t === void 0 ? {} : t,
      r = n.animationDuration,
      o = r === void 0 ? 200 : r,
      i = n.incrementDuration,
      a = i === void 0 ? 800 : i,
      l = n.isAnimating,
      s = l === void 0 ? !1 : l,
      u = n.minimum,
      f = u === void 0 ? 0.08 : u,
      c = U1(If),
      g = c[0],
      w = c[1],
      x = m.useRef(null),
      E = m.useRef(null);
    Lf(function () {
      (x.current = z1()), (E.current = F1());
    });
    var _ = m.useCallback(function () {
        var T, C;
        (T = E.current) == null || T.cancel(), (C = x.current) == null || C.clear();
      }, []),
      v = m.useCallback(
        function (T) {
          var C;
          if (((T = Xh(T, f, 1)), T === 1)) {
            var k, L;
            _(),
              (k = x.current) == null ||
                k.enqueue(function (P) {
                  w({
                    progress: T,
                    sideEffect: function () {
                      var A;
                      return (A = E.current) == null ? void 0 : A.schedule(P, o);
                    }
                  });
                }),
              (L = x.current) == null ||
                L.enqueue(function () {
                  w({ isFinished: !0, sideEffect: _ });
                });
            return;
          }
          (C = x.current) == null ||
            C.enqueue(function (P) {
              w({
                isFinished: !1,
                progress: T,
                sideEffect: function () {
                  var A;
                  return (A = E.current) == null ? void 0 : A.schedule(P, o);
                }
              });
            });
        },
        [o, _, f, x, w, E]
      ),
      d = m.useCallback(
        function () {
          v(B1(g().progress));
        },
        [g, v]
      ),
      h = m.useCallback(
        function () {
          var T = function () {
            var k;
            d(),
              (k = x.current) == null ||
                k.enqueue(function (L) {
                  var P;
                  (P = E.current) == null ||
                    P.schedule(function () {
                      T(), L();
                    }, a);
                });
          };
          T();
        },
        [a, x, E, d]
      ),
      y = m.useRef(Yh),
      S = g().sideEffect;
    return (
      m.useEffect(function () {
        y.current = d;
      }),
      Lf(function () {
        return s && h(), _;
      }),
      Rf(
        function () {
          g().sideEffect();
        },
        [g, S]
      ),
      Rf(
        function () {
          s ? w(pr({}, If, { sideEffect: h })) : v(1);
        },
        [s, v, w, h]
      ),
      { animationDuration: o, isFinished: g().isFinished, progress: g().progress }
    );
  };
function Y1(e) {
  var t = function (r) {
    var o = X1(r);
    return m.createElement(e, pr({}, r, o));
  };
  return M1(t, e), t;
}
const Kh = ({ animationDuration: e, progress: t }) =>
  p.jsx('div', {
    style: {
      background: '#fff',
      height: 2,
      left: 0,
      marginLeft: `${(-1 + t) * 100}%`,
      position: 'fixed',
      top: 0,
      transition: `margin-left ${e}ms linear`,
      width: '100%',
      zIndex: 1031
    },
    children: p.jsx('div', {
      style: {
        boxShadow: '0 0 10px #29d, 0 0 5px #29d',
        display: 'block',
        height: '100%',
        opacity: 1,
        position: 'absolute',
        right: 0,
        transform: 'rotate(3deg) translate(0px, -4px)',
        width: 100
      }
    })
  });
Kh.propTypes = { animationDuration: j.number, progress: j.number };
const Gh = ({ animationDuration: e, children: t, isFinished: n }) =>
  p.jsx('div', { style: { opacity: n ? 0 : 1, pointerEvents: 'none', transition: `opacity ${e}ms linear` }, children: t });
Gh.propTypes = { animationDuration: j.number, children: j.node, isFinished: j.bool };
const K1 = () =>
    p.jsx('div', {
      style: { display: 'block', position: 'fixed', right: 15, top: 15, zIndex: 1031 },
      children: p.jsx('div', {
        style: {
          animation: '400ms linear infinite spinner',
          borderBottom: '2px solid transparent',
          borderLeft: '2px solid #29d',
          borderRadius: '50%',
          borderRight: '2px solid transparent',
          borderTop: '2px solid #29d',
          boxSizing: 'border-box',
          height: 18,
          width: 18
        }
      })
    }),
  Qh = ({ isFinished: e, progress: t, animationDuration: n }) =>
    p.jsxs(Gh, { animationDuration: n, isFinished: e, children: [p.jsx(Kh, { animationDuration: n, progress: t }), p.jsx(K1, {})] });
Qh.propTypes = { animationDuration: j.number, progress: j.number, isFinished: j.bool };
const G1 = Y1(Qh),
  Q1 = () => p.jsx(O.Fragment, { children: p.jsx(G1, { isAnimating: !0 }) }),
  mn = () => {
    const [e, t] = m.useState({ width: void 0, height: void 0 });
    return (
      m.useEffect(() => {
        function n() {
          t({ width: window.innerWidth, height: window.innerHeight });
        }
        return window.addEventListener('resize', n), n(), () => window.removeEventListener('resize', n);
      }, []),
      e
    );
  },
  Cr = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  rE = async (e) => {
    try {
      const t = `${Cr}/login`,
        n = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(e) };
      return await (await fetch(t, n)).json();
    } catch (t) {
      return console.error('Error saving user:', t), t;
    }
  },
  oE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = JSON.stringify(e),
      r = { method: 'POST', headers: t, body: n, redirect: 'follow' };
    try {
      const o = await fetch(Cr + '/register', r);
      if (!o.ok) {
        const i = await o.json();
        throw new Error(i.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw (console.error('Signup Error:', o), o);
    }
  },
  Du = async (e) => {
    try {
      const t = `${Cr}/authen`,
        n = { method: 'POST', headers: { Authorization: `Bearer ${e}` } },
        r = await fetch(t, n);
      if (!r.ok) throw new Error('Failed to authen user');
      return await r.json();
    } catch (t) {
      throw (console.error('Failed to authen user:', t), t);
    }
  },
  iE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = JSON.stringify(e),
      r = { method: 'POST', headers: t, body: n, redirect: 'follow' };
    try {
      const o = await fetch(Cr + '/request-reset-password', r);
      if (!o.ok) {
        const i = await o.json();
        throw new Error(i.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw (console.error('Save ServiceRequests data Error:', o), o);
    }
  },
  aE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = JSON.stringify(e),
      r = { method: 'POST', headers: t, body: n, redirect: 'follow' };
    try {
      const o = await fetch(Cr + '/reset-password', r);
      if (!o.ok) {
        const i = await o.json();
        throw new Error(i.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw (console.error('Save ServiceRequests data Error:', o), o);
    }
  },
  lE = async (e) => {
    try {
      const t = `${Cr}/activate?token=${e}`,
        r = await fetch(t, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
      if (!r.ok) {
        const i = (await r.json()).message || 'Failed to activate email';
        throw new Error(`${r.status}: ${i}`);
      }
      return await r.json();
    } catch (t) {
      throw (console.error('Error activating email:', t), t);
    }
  },
  Au = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  q1 = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = { method: 'GET', headers: t, redirect: 'follow' },
      r = await fetch(Au + '/menus/role/' + e, n);
    return r.status === 404 ? [] : await r.json();
  },
  sE = async (e, t) => {
    const n = new Headers();
    n.append('Content-Type', 'application/json');
    const r = { method: 'DELETE', headers: n, redirect: 'follow' };
    return await (await fetch(`${Au}/role-menus/${e}/${t}`, r)).json();
  },
  uE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = JSON.stringify(e),
      r = { method: 'POST', headers: t, body: n, redirect: 'follow' };
    try {
      const o = await fetch(`${Au}/role-menus`, r);
      if (!o.ok) {
        const i = await o.json();
        throw new Error(i.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw (console.error('Signup Error:', o), o);
    }
  },
  J1 = (e) => {
    const t = {},
      n = [];
    return (
      e.forEach((r) => (t[r.menu_id] = { ...r, children: [] })),
      e.forEach((r) => {
        r.parent_id === null ? n.push(t[r.menu_id]) : t[r.parent_id] && t[r.parent_id].children.push(t[r.menu_id]);
      }),
      n
    );
  },
  qh = () => {
    const [e, t] = m.useState({ items: [] }),
      [n, r] = m.useState(!0);
    return (
      m.useEffect(() => {
        (async () => {
          try {
            const i = localStorage.getItem('authToken');
            if (!i) {
              r(!1);
              return;
            }
            const a = await Du(i);
            if ((console.log('authen :', a), !a || !a.user.role_id)) {
              r(!1);
              return;
            }
            const l = await q1(a.user.role_id),
              s = J1(l);
            t({
              items: s.map((u) => ({
                id: `group-${u.menu_id}`,
                title: u.menu_name,
                type: 'group',
                icon: u.icon || 'icon-folder',
                children: u.children.map((f) => Jh(f))
              }))
            }),
              r(!1);
          } catch (i) {
            console.error('Error fetching menus:', i), r(!1);
          }
        })();
      }, []),
      { menuItems: e, loading: n }
    );
  },
  Jh = (e) =>
    e.children.length > 0
      ? {
          id: `menu-${e.menu_id}`,
          title: e.menu_name,
          type: 'collapse',
          icon: e.icon || 'feather icon-folder',
          children: e.children.map((t) => Jh(t))
        }
      : { id: `menu-${e.menu_id}`, title: e.menu_name, type: 'item', url: e.route || '#', icon: e.icon || 'feather icon-file' },
  Zh = '/assets/logo-WhFDcks6.png',
  Z1 = () => {
    const e = m.useContext(qe),
      { collapseMenu: t } = e.state,
      { dispatch: n } = e;
    let r = ['mobile-menu'];
    return (
      t && (r = [...r, 'on']),
      p.jsx(O.Fragment, {
        children: p.jsxs('div', {
          className: 'navbar-brand header-logo',
          children: [
            p.jsxs(H, {
              to: '#',
              className: 'b-brand',
              children: [
                p.jsx('div', {
                  className: 'b-bg',
                  children: p.jsx('img', {
                    src: Zh,
                    className: 'feather icon-trending-up',
                    style: { transform: 'none', opacity: 1 },
                    width: 30,
                    alt: 'Smart Lap'
                  })
                }),
                p.jsx('span', { className: 'b-title b', children: 'Smart Lap' })
              ]
            }),
            p.jsx(H, {
              to: '#',
              className: r.join(' '),
              id: 'mobile-collapse',
              onClick: () => n({ type: Xe }),
              children: p.jsx('span', {})
            })
          ]
        })
      })
    );
  };
var em = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number') return i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]')) return i.toString();
      var a = '';
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + ' ' + a : i + a) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(em);
var ew = em.exports;
const X = Dn(ew);
function Df(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function tw(e) {
  var t = nw(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function nw(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(e);
}
function rw(e, t, n) {
  var r = m.useRef(e !== void 0),
    o = m.useState(t),
    i = o[0],
    a = o[1],
    l = e !== void 0,
    s = r.current;
  return (
    (r.current = l),
    !l && s && i !== t && a(t),
    [
      l ? e : i,
      m.useCallback(
        function (u) {
          for (var f = arguments.length, c = new Array(f > 1 ? f - 1 : 0), g = 1; g < f; g++) c[g - 1] = arguments[g];
          n && n.apply(void 0, [u].concat(c)), a(u);
        },
        [n]
      )
    ]
  );
}
function tm(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      a = i[Df(r)],
      l = i[r],
      s = S1(i, [Df(r), r].map(tw)),
      u = t[r],
      f = rw(l, a, e[u]),
      c = f[0],
      g = f[1];
    return pr({}, s, ((o = {}), (o[r] = c), (o[u] = g), o));
  }, e);
}
const ow = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  iw = 'xs',
  bo = m.createContext({ prefixes: {}, breakpoints: ow, minBreakpoint: iw }),
  { Consumer: cE, Provider: fE } = bo;
function G(e, t) {
  const { prefixes: n } = m.useContext(bo);
  return e || n[t] || t;
}
function nm() {
  const { breakpoints: e } = m.useContext(bo);
  return e;
}
function rm() {
  const { minBreakpoint: e } = m.useContext(bo);
  return e;
}
function aw() {
  const { dir: e } = m.useContext(bo);
  return e === 'rtl';
}
function lw(e) {
  return (e && e.ownerDocument) || document;
}
const om = !!(typeof window < 'u' && window.document && window.document.createElement);
var xs = !1,
  _s = !1;
try {
  var xl = {
    get passive() {
      return (xs = !0);
    },
    get once() {
      return (_s = xs = !0);
    }
  };
  om && (window.addEventListener('test', xl, xl), window.removeEventListener('test', xl, !0));
} catch {}
function im(e, t, n, r) {
  if (r && typeof r != 'boolean' && !_s) {
    var o = r.once,
      i = r.capture,
      a = n;
    !_s &&
      o &&
      ((a =
        n.__once ||
        function l(s) {
          this.removeEventListener(t, l, i), n.call(this, s);
        }),
      (n.__once = a)),
      e.addEventListener(t, a, xs ? r : i);
  }
  e.addEventListener(t, n, r);
}
function sw(e, t, n, r) {
  var o = r && typeof r != 'boolean' ? r.capture : r;
  e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o);
}
function ni(e, t, n, r) {
  return (
    im(e, t, n, r),
    function () {
      sw(e, t, n, r);
    }
  );
}
const Af = (e) =>
  !e || typeof e == 'function'
    ? e
    : (t) => {
        e.current = t;
      };
function uw(e, t) {
  const n = Af(e),
    r = Af(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function am(e, t) {
  return m.useMemo(() => uw(e, t), [e, t]);
}
function cw(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function lm(e) {
  const t = cw(e);
  return m.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function fw() {
  return m.useState(null);
}
function dw(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Ot(e) {
  const t = dw(e);
  return m.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function pw(e, t, n, r = !1) {
  const o = Ot(n);
  m.useEffect(() => {
    const i = typeof e == 'function' ? e() : e;
    return i.addEventListener(t, o, r), () => i.removeEventListener(t, o, r);
  }, [e]);
}
function hw() {
  const e = m.useRef(!0),
    t = m.useRef(() => e.current);
  return (
    m.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function mw(e) {
  const t = m.useRef(null);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const vw = ['as', 'disabled'];
function gw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function yw(e) {
  return !e || e.trim() === '#';
}
function $u({ tagName: e, disabled: t, href: n, target: r, rel: o, role: i, onClick: a, tabIndex: l = 0, type: s }) {
  e || (n != null || r != null || o != null ? (e = 'a') : (e = 'button'));
  const u = { tagName: e };
  if (e === 'button') return [{ type: s || 'button', disabled: t }, u];
  const f = (g) => {
      if (((t || (e === 'a' && yw(n))) && g.preventDefault(), t)) {
        g.stopPropagation();
        return;
      }
      a == null || a(g);
    },
    c = (g) => {
      g.key === ' ' && (g.preventDefault(), f(g));
    };
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: i ?? 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : l,
        href: n,
        target: e === 'a' ? r : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? o : void 0,
        onClick: f,
        onKeyDown: c
      },
      u
    ]
  );
}
const Mu = m.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = gw(e, vw);
  const [i, { tagName: a }] = $u(Object.assign({ tagName: n, disabled: r }, o));
  return p.jsx(a, Object.assign({}, o, i, { ref: t }));
});
Mu.displayName = 'Button';
const ww = ['onKeyDown'];
function xw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function _w(e) {
  return !e || e.trim() === '#';
}
const sm = m.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = xw(e, ww);
  const [o] = $u(Object.assign({ tagName: 'a' }, r)),
    i = Ot((a) => {
      o.onKeyDown(a), n == null || n(a);
    });
  return _w(r.href) || r.role === 'button'
    ? p.jsx('a', Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : p.jsx('a', Object.assign({ ref: t }, r, { onKeyDown: n }));
});
sm.displayName = 'Anchor';
const Ki = m.forwardRef(
  ({ as: e, bsPrefix: t, variant: n = 'primary', size: r, active: o = !1, disabled: i = !1, className: a, ...l }, s) => {
    const u = G(t, 'btn'),
      [f, { tagName: c }] = $u({ tagName: e, disabled: i, ...l }),
      g = c;
    return p.jsx(g, {
      ...f,
      ...l,
      ref: s,
      disabled: i,
      className: X(a, u, o && 'active', n && `${u}-${n}`, r && `${u}-${r}`, l.href && i && 'disabled')
    });
  }
);
Ki.displayName = 'Button';
function Ew(e, t) {
  return m.Children.toArray(e).some((n) => m.isValidElement(n) && n.type === t);
}
function Sw({ as: e, bsPrefix: t, className: n, ...r }) {
  t = G(t, 'col');
  const o = nm(),
    i = rm(),
    a = [],
    l = [];
  return (
    o.forEach((s) => {
      const u = r[s];
      delete r[s];
      let f, c, g;
      typeof u == 'object' && u != null ? ({ span: f, offset: c, order: g } = u) : (f = u);
      const w = s !== i ? `-${s}` : '';
      f && a.push(f === !0 ? `${t}${w}` : `${t}${w}-${f}`), g != null && l.push(`order${w}-${g}`), c != null && l.push(`offset${w}-${c}`);
    }),
    [
      { ...r, className: X(n, ...a, ...l) },
      { as: e, bsPrefix: t, spans: a }
    ]
  );
}
const zu = m.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = 'div', bsPrefix: i, spans: a }] = Sw(e);
  return p.jsx(o, { ...r, ref: t, className: X(n, !a.length && i) });
});
zu.displayName = 'Col';
const um = m.forwardRef(({ bsPrefix: e, fluid: t = !1, as: n = 'div', className: r, ...o }, i) => {
  const a = G(e, 'container'),
    l = typeof t == 'string' ? `-${t}` : '-fluid';
  return p.jsx(n, { ref: i, ...o, className: X(r, t ? `${a}${l}` : a) });
});
um.displayName = 'Container';
var Cw = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Es(e, t) {
  return Cw(e.querySelectorAll(t));
}
function Tw(e, t, n) {
  const r = m.useRef(e !== void 0),
    [o, i] = m.useState(t),
    a = e !== void 0,
    l = r.current;
  return (
    (r.current = a),
    !a && l && o !== t && i(t),
    [
      a ? e : o,
      m.useCallback(
        (...s) => {
          const [u, ...f] = s;
          let c = n == null ? void 0 : n(u, ...f);
          return i(u), c;
        },
        [n]
      )
    ]
  );
}
function cm() {
  const [, e] = m.useReducer((t) => t + 1, 0);
  return e;
}
const Da = m.createContext(null);
var $f = Object.prototype.hasOwnProperty;
function Mf(e, t, n) {
  for (n of e.keys()) if (Gr(n, t)) return n;
}
function Gr(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Gr(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) if (((o = r), (o && typeof o == 'object' && ((o = Mf(t, o)), !o)) || !t.has(o))) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) if (((o = r[0]), (o && typeof o == 'object' && ((o = Mf(t, o)), !o)) || !Gr(r[1], t.get(o)))) return !1;
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == 'object') {
      r = 0;
      for (n in e) if (($f.call(e, n) && ++r && !$f.call(t, n)) || !(n in t) || !Gr(e[n], t[n])) return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function kw(e) {
  const t = hw();
  return [
    e[0],
    m.useCallback(
      (n) => {
        if (t()) return e[1](n);
      },
      [t, e[1]]
    )
  ];
}
var Fe = 'top',
  at = 'bottom',
  lt = 'right',
  Be = 'left',
  Fu = 'auto',
  Po = [Fe, at, lt, Be],
  hr = 'start',
  wo = 'end',
  jw = 'clippingParents',
  fm = 'viewport',
  Ir = 'popper',
  bw = 'reference',
  zf = Po.reduce(function (e, t) {
    return e.concat([t + '-' + hr, t + '-' + wo]);
  }, []),
  dm = [].concat(Po, [Fu]).reduce(function (e, t) {
    return e.concat([t, t + '-' + hr, t + '-' + wo]);
  }, []),
  Pw = 'beforeRead',
  Nw = 'read',
  Ow = 'afterRead',
  Lw = 'beforeMain',
  Rw = 'main',
  Iw = 'afterMain',
  Dw = 'beforeWrite',
  Aw = 'write',
  $w = 'afterWrite',
  Mw = [Pw, Nw, Ow, Lw, Rw, Iw, Dw, Aw, $w];
function Et(e) {
  return e.split('-')[0];
}
function Ke(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Rn(e) {
  var t = Ke(e).Element;
  return e instanceof t || e instanceof Element;
}
function St(e) {
  var t = Ke(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Bu(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = Ke(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var kn = Math.max,
  Gi = Math.min,
  mr = Math.round;
function Ss() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function pm() {
  return !/^((?!chrome|android).)*safari/i.test(Ss());
}
function vr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    St(e) &&
    ((o = (e.offsetWidth > 0 && mr(r.width) / e.offsetWidth) || 1), (i = (e.offsetHeight > 0 && mr(r.height) / e.offsetHeight) || 1));
  var a = Rn(e) ? Ke(e) : window,
    l = a.visualViewport,
    s = !pm() && n,
    u = (r.left + (s && l ? l.offsetLeft : 0)) / o,
    f = (r.top + (s && l ? l.offsetTop : 0)) / i,
    c = r.width / o,
    g = r.height / i;
  return { width: c, height: g, top: f, right: u + c, bottom: f + g, left: u, x: u, y: f };
}
function Hu(e) {
  var t = vr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function hm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Bu(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fn(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function At(e) {
  return Ke(e).getComputedStyle(e);
}
function zw(e) {
  return ['table', 'td', 'th'].indexOf(fn(e)) >= 0;
}
function vn(e) {
  return ((Rn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Aa(e) {
  return fn(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Bu(e) ? e.host : null) || vn(e);
}
function Ff(e) {
  return !St(e) || At(e).position === 'fixed' ? null : e.offsetParent;
}
function Fw(e) {
  var t = /firefox/i.test(Ss()),
    n = /Trident/i.test(Ss());
  if (n && St(e)) {
    var r = At(e);
    if (r.position === 'fixed') return null;
  }
  var o = Aa(e);
  for (Bu(o) && (o = o.host); St(o) && ['html', 'body'].indexOf(fn(o)) < 0; ) {
    var i = At(o);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function No(e) {
  for (var t = Ke(e), n = Ff(e); n && zw(n) && At(n).position === 'static'; ) n = Ff(n);
  return n && (fn(n) === 'html' || (fn(n) === 'body' && At(n).position === 'static')) ? t : n || Fw(e) || t;
}
function Wu(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Qr(e, t, n) {
  return kn(e, Gi(t, n));
}
function Bw(e, t, n) {
  var r = Qr(e, t, n);
  return r > n ? n : r;
}
function mm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function vm(e) {
  return Object.assign({}, mm(), e);
}
function gm(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var Hw = function (t, n) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, n.rects, { placement: n.placement })) : t), vm(typeof t != 'number' ? t : gm(t, Po))
  );
};
function Ww(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = Et(n.placement),
    s = Wu(l),
    u = [Be, lt].indexOf(l) >= 0,
    f = u ? 'height' : 'width';
  if (!(!i || !a)) {
    var c = Hw(o.padding, n),
      g = Hu(i),
      w = s === 'y' ? Fe : Be,
      x = s === 'y' ? at : lt,
      E = n.rects.reference[f] + n.rects.reference[s] - a[s] - n.rects.popper[f],
      _ = a[s] - n.rects.reference[s],
      v = No(i),
      d = v ? (s === 'y' ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      h = E / 2 - _ / 2,
      y = c[w],
      S = d - g[f] - c[x],
      T = d / 2 - g[f] / 2 + h,
      C = Qr(y, T, S),
      k = s;
    n.modifiersData[r] = ((t = {}), (t[k] = C), (t.centerOffset = C - T), t);
  }
}
function Uw(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? '[data-popper-arrow]' : r;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) || (hm(t.elements.popper, o) && (t.elements.arrow = o)));
}
const Vw = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Ww,
  effect: Uw,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function gr(e) {
  return e.split('-')[1];
}
var Xw = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Yw(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: mr(n * o) / o || 0, y: mr(r * o) / o || 0 };
}
function Bf(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    l = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    f = e.roundOffsets,
    c = e.isFixed,
    g = a.x,
    w = g === void 0 ? 0 : g,
    x = a.y,
    E = x === void 0 ? 0 : x,
    _ = typeof f == 'function' ? f({ x: w, y: E }) : { x: w, y: E };
  (w = _.x), (E = _.y);
  var v = a.hasOwnProperty('x'),
    d = a.hasOwnProperty('y'),
    h = Be,
    y = Fe,
    S = window;
  if (u) {
    var T = No(n),
      C = 'clientHeight',
      k = 'clientWidth';
    if (
      (T === Ke(n) && ((T = vn(n)), At(T).position !== 'static' && l === 'absolute' && ((C = 'scrollHeight'), (k = 'scrollWidth'))),
      (T = T),
      o === Fe || ((o === Be || o === lt) && i === wo))
    ) {
      y = at;
      var L = c && T === S && S.visualViewport ? S.visualViewport.height : T[C];
      (E -= L - r.height), (E *= s ? 1 : -1);
    }
    if (o === Be || ((o === Fe || o === at) && i === wo)) {
      h = lt;
      var P = c && T === S && S.visualViewport ? S.visualViewport.width : T[k];
      (w -= P - r.width), (w *= s ? 1 : -1);
    }
  }
  var I = Object.assign({ position: l }, u && Xw),
    A = f === !0 ? Yw({ x: w, y: E }, Ke(n)) : { x: w, y: E };
  if (((w = A.x), (E = A.y), s)) {
    var z;
    return Object.assign(
      {},
      I,
      ((z = {}),
      (z[y] = d ? '0' : ''),
      (z[h] = v ? '0' : ''),
      (z.transform = (S.devicePixelRatio || 1) <= 1 ? 'translate(' + w + 'px, ' + E + 'px)' : 'translate3d(' + w + 'px, ' + E + 'px, 0)'),
      z)
    );
  }
  return Object.assign({}, I, ((t = {}), (t[y] = d ? E + 'px' : ''), (t[h] = v ? w + 'px' : ''), (t.transform = ''), t));
}
function Kw(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    l = n.roundOffsets,
    s = l === void 0 ? !0 : l,
    u = {
      placement: Et(t.placement),
      variation: gr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed'
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Bf(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: s }))
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Bf(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: s }))
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
}
const Gw = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Kw, data: {} };
var ri = { passive: !0 };
function Qw(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    s = Ke(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (f) {
        f.addEventListener('scroll', n.update, ri);
      }),
    l && s.addEventListener('resize', n.update, ri),
    function () {
      i &&
        u.forEach(function (f) {
          f.removeEventListener('scroll', n.update, ri);
        }),
        l && s.removeEventListener('resize', n.update, ri);
    }
  );
}
const qw = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Qw, data: {} };
var Jw = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function xi(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Jw[t];
  });
}
var Zw = { start: 'end', end: 'start' };
function Hf(e) {
  return e.replace(/start|end/g, function (t) {
    return Zw[t];
  });
}
function Uu(e) {
  var t = Ke(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Vu(e) {
  return vr(vn(e)).left + Uu(e).scrollLeft;
}
function ex(e, t) {
  var n = Ke(e),
    r = vn(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    s = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = pm();
    (u || (!u && t === 'fixed')) && ((l = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: a, x: l + Vu(e), y: s };
}
function tx(e) {
  var t,
    n = vn(e),
    r = Uu(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = kn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    a = kn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    l = -r.scrollLeft + Vu(e),
    s = -r.scrollTop;
  return At(o || n).direction === 'rtl' && (l += kn(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: a, x: l, y: s };
}
function Xu(e) {
  var t = At(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ym(e) {
  return ['html', 'body', '#document'].indexOf(fn(e)) >= 0 ? e.ownerDocument.body : St(e) && Xu(e) ? e : ym(Aa(e));
}
function qr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ym(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Ke(r),
    a = o ? [i].concat(i.visualViewport || [], Xu(r) ? r : []) : r,
    l = t.concat(a);
  return o ? l : l.concat(qr(Aa(a)));
}
function Cs(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function nx(e, t) {
  var n = vr(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Wf(e, t, n) {
  return t === fm ? Cs(ex(e, n)) : Rn(t) ? nx(t, n) : Cs(tx(vn(e)));
}
function rx(e) {
  var t = qr(Aa(e)),
    n = ['absolute', 'fixed'].indexOf(At(e).position) >= 0,
    r = n && St(e) ? No(e) : e;
  return Rn(r)
    ? t.filter(function (o) {
        return Rn(o) && hm(o, r) && fn(o) !== 'body';
      })
    : [];
}
function ox(e, t, n, r) {
  var o = t === 'clippingParents' ? rx(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    l = i.reduce(
      function (s, u) {
        var f = Wf(e, u, r);
        return (
          (s.top = kn(f.top, s.top)),
          (s.right = Gi(f.right, s.right)),
          (s.bottom = Gi(f.bottom, s.bottom)),
          (s.left = kn(f.left, s.left)),
          s
        );
      },
      Wf(e, a, r)
    );
  return (l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l;
}
function wm(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Et(r) : null,
    i = r ? gr(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    s;
  switch (o) {
    case Fe:
      s = { x: a, y: t.y - n.height };
      break;
    case at:
      s = { x: a, y: t.y + t.height };
      break;
    case lt:
      s = { x: t.x + t.width, y: l };
      break;
    case Be:
      s = { x: t.x - n.width, y: l };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = o ? Wu(o) : null;
  if (u != null) {
    var f = u === 'y' ? 'height' : 'width';
    switch (i) {
      case hr:
        s[u] = s[u] - (t[f] / 2 - n[f] / 2);
        break;
      case wo:
        s[u] = s[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return s;
}
function xo(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    l = n.boundary,
    s = l === void 0 ? jw : l,
    u = n.rootBoundary,
    f = u === void 0 ? fm : u,
    c = n.elementContext,
    g = c === void 0 ? Ir : c,
    w = n.altBoundary,
    x = w === void 0 ? !1 : w,
    E = n.padding,
    _ = E === void 0 ? 0 : E,
    v = vm(typeof _ != 'number' ? _ : gm(_, Po)),
    d = g === Ir ? bw : Ir,
    h = e.rects.popper,
    y = e.elements[x ? d : g],
    S = ox(Rn(y) ? y : y.contextElement || vn(e.elements.popper), s, f, a),
    T = vr(e.elements.reference),
    C = wm({ reference: T, element: h, placement: o }),
    k = Cs(Object.assign({}, h, C)),
    L = g === Ir ? k : T,
    P = {
      top: S.top - L.top + v.top,
      bottom: L.bottom - S.bottom + v.bottom,
      left: S.left - L.left + v.left,
      right: L.right - S.right + v.right
    },
    I = e.modifiersData.offset;
  if (g === Ir && I) {
    var A = I[o];
    Object.keys(P).forEach(function (z) {
      var te = [lt, at].indexOf(z) >= 0 ? 1 : -1,
        fe = [Fe, at].indexOf(z) >= 0 ? 'y' : 'x';
      P[z] += A[fe] * te;
    });
  }
  return P;
}
function ix(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    l = n.flipVariations,
    s = n.allowedAutoPlacements,
    u = s === void 0 ? dm : s,
    f = gr(r),
    c = f
      ? l
        ? zf
        : zf.filter(function (x) {
            return gr(x) === f;
          })
      : Po,
    g = c.filter(function (x) {
      return u.indexOf(x) >= 0;
    });
  g.length === 0 && (g = c);
  var w = g.reduce(function (x, E) {
    return (x[E] = xo(e, { placement: E, boundary: o, rootBoundary: i, padding: a })[Et(E)]), x;
  }, {});
  return Object.keys(w).sort(function (x, E) {
    return w[x] - w[E];
  });
}
function ax(e) {
  if (Et(e) === Fu) return [];
  var t = xi(e);
  return [Hf(e), t, Hf(t)];
}
function lx(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        l = a === void 0 ? !0 : a,
        s = n.fallbackPlacements,
        u = n.padding,
        f = n.boundary,
        c = n.rootBoundary,
        g = n.altBoundary,
        w = n.flipVariations,
        x = w === void 0 ? !0 : w,
        E = n.allowedAutoPlacements,
        _ = t.options.placement,
        v = Et(_),
        d = v === _,
        h = s || (d || !x ? [xi(_)] : ax(_)),
        y = [_].concat(h).reduce(function (Re, Ze) {
          return Re.concat(
            Et(Ze) === Fu
              ? ix(t, { placement: Ze, boundary: f, rootBoundary: c, padding: u, flipVariations: x, allowedAutoPlacements: E })
              : Ze
          );
        }, []),
        S = t.rects.reference,
        T = t.rects.popper,
        C = new Map(),
        k = !0,
        L = y[0],
        P = 0;
      P < y.length;
      P++
    ) {
      var I = y[P],
        A = Et(I),
        z = gr(I) === hr,
        te = [Fe, at].indexOf(A) >= 0,
        fe = te ? 'width' : 'height',
        ne = xo(t, { placement: I, boundary: f, rootBoundary: c, altBoundary: g, padding: u }),
        ue = te ? (z ? lt : Be) : z ? at : Fe;
      S[fe] > T[fe] && (ue = xi(ue));
      var N = xi(ue),
        $ = [];
      if (
        (i && $.push(ne[A] <= 0),
        l && $.push(ne[ue] <= 0, ne[N] <= 0),
        $.every(function (Re) {
          return Re;
        }))
      ) {
        (L = I), (k = !1);
        break;
      }
      C.set(I, $);
    }
    if (k)
      for (
        var D = x ? 3 : 1,
          Y = function (Ze) {
            var He = y.find(function (Tt) {
              var gn = C.get(Tt);
              if (gn)
                return gn.slice(0, Ze).every(function (Ua) {
                  return Ua;
                });
            });
            if (He) return (L = He), 'break';
          },
          Z = D;
        Z > 0;
        Z--
      ) {
        var Ct = Y(Z);
        if (Ct === 'break') break;
      }
    t.placement !== L && ((t.modifiersData[r]._skip = !0), (t.placement = L), (t.reset = !0));
  }
}
const sx = { name: 'flip', enabled: !0, phase: 'main', fn: lx, requiresIfExists: ['offset'], data: { _skip: !1 } };
function Uf(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x }
  );
}
function Vf(e) {
  return [Fe, lt, at, Be].some(function (t) {
    return e[t] >= 0;
  });
}
function ux(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = xo(t, { elementContext: 'reference' }),
    l = xo(t, { altBoundary: !0 }),
    s = Uf(a, r),
    u = Uf(l, o, i),
    f = Vf(s),
    c = Vf(u);
  (t.modifiersData[n] = { referenceClippingOffsets: s, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: c }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-reference-hidden': f, 'data-popper-escaped': c }));
}
const cx = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: ux };
function fx(e, t, n) {
  var r = Et(e),
    o = [Be, Fe].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    l = i[1];
  return (a = a || 0), (l = (l || 0) * o), [Be, lt].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function dx(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = dm.reduce(function (f, c) {
      return (f[c] = fx(c, t.rects, i)), f;
    }, {}),
    l = a[t.placement],
    s = l.x,
    u = l.y;
  t.modifiersData.popperOffsets != null && ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const px = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: dx };
function hx(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = wm({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const mx = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: hx, data: {} };
function vx(e) {
  return e === 'x' ? 'y' : 'x';
}
function gx(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    l = a === void 0 ? !1 : a,
    s = n.boundary,
    u = n.rootBoundary,
    f = n.altBoundary,
    c = n.padding,
    g = n.tether,
    w = g === void 0 ? !0 : g,
    x = n.tetherOffset,
    E = x === void 0 ? 0 : x,
    _ = xo(t, { boundary: s, rootBoundary: u, padding: c, altBoundary: f }),
    v = Et(t.placement),
    d = gr(t.placement),
    h = !d,
    y = Wu(v),
    S = vx(y),
    T = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    k = t.rects.popper,
    L = typeof E == 'function' ? E(Object.assign({}, t.rects, { placement: t.placement })) : E,
    P = typeof L == 'number' ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    A = { x: 0, y: 0 };
  if (T) {
    if (i) {
      var z,
        te = y === 'y' ? Fe : Be,
        fe = y === 'y' ? at : lt,
        ne = y === 'y' ? 'height' : 'width',
        ue = T[y],
        N = ue + _[te],
        $ = ue - _[fe],
        D = w ? -k[ne] / 2 : 0,
        Y = d === hr ? C[ne] : k[ne],
        Z = d === hr ? -k[ne] : -C[ne],
        Ct = t.elements.arrow,
        Re = w && Ct ? Hu(Ct) : { width: 0, height: 0 },
        Ze = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : mm(),
        He = Ze[te],
        Tt = Ze[fe],
        gn = Qr(0, C[ne], Re[ne]),
        Ua = h ? C[ne] / 2 - D - gn - He - P.mainAxis : Y - gn - He - P.mainAxis,
        Nv = h ? -C[ne] / 2 + D + gn + Tt + P.mainAxis : Z + gn + Tt + P.mainAxis,
        Va = t.elements.arrow && No(t.elements.arrow),
        Ov = Va ? (y === 'y' ? Va.clientTop || 0 : Va.clientLeft || 0) : 0,
        tc = (z = I == null ? void 0 : I[y]) != null ? z : 0,
        Lv = ue + Ua - tc - Ov,
        Rv = ue + Nv - tc,
        nc = Qr(w ? Gi(N, Lv) : N, ue, w ? kn($, Rv) : $);
      (T[y] = nc), (A[y] = nc - ue);
    }
    if (l) {
      var rc,
        Iv = y === 'x' ? Fe : Be,
        Dv = y === 'x' ? at : lt,
        yn = T[S],
        Mo = S === 'y' ? 'height' : 'width',
        oc = yn + _[Iv],
        ic = yn - _[Dv],
        Xa = [Fe, Be].indexOf(v) !== -1,
        ac = (rc = I == null ? void 0 : I[S]) != null ? rc : 0,
        lc = Xa ? oc : yn - C[Mo] - k[Mo] - ac + P.altAxis,
        sc = Xa ? yn + C[Mo] + k[Mo] - ac - P.altAxis : ic,
        uc = w && Xa ? Bw(lc, yn, sc) : Qr(w ? lc : oc, yn, w ? sc : ic);
      (T[S] = uc), (A[S] = uc - yn);
    }
    t.modifiersData[r] = A;
  }
}
const yx = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: gx, requiresIfExists: ['offset'] };
function wx(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function xx(e) {
  return e === Ke(e) || !St(e) ? Uu(e) : wx(e);
}
function _x(e) {
  var t = e.getBoundingClientRect(),
    n = mr(t.width) / e.offsetWidth || 1,
    r = mr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ex(e, t, n) {
  n === void 0 && (n = !1);
  var r = St(t),
    o = St(t) && _x(t),
    i = vn(t),
    a = vr(e, o, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((fn(t) !== 'body' || Xu(i)) && (l = xx(t)),
      St(t) ? ((s = vr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : i && (s.x = Vu(i))),
    { x: a.left + l.scrollLeft - s.x, y: a.top + l.scrollTop - s.y, width: a.width, height: a.height }
  );
}
function Sx(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var s = t.get(l);
        s && o(s);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function Cx(e) {
  var t = Sx(e);
  return Mw.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function Tx(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function kx(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Xf = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Yf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function jx(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? Xf : o;
  return function (l, s, u) {
    u === void 0 && (u = i);
    var f = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Xf, i),
        modifiersData: {},
        elements: { reference: l, popper: s },
        attributes: {},
        styles: {}
      },
      c = [],
      g = !1,
      w = {
        state: f,
        setOptions: function (v) {
          var d = typeof v == 'function' ? v(f.options) : v;
          E(),
            (f.options = Object.assign({}, i, f.options, d)),
            (f.scrollParents = { reference: Rn(l) ? qr(l) : l.contextElement ? qr(l.contextElement) : [], popper: qr(s) });
          var h = Cx(kx([].concat(r, f.options.modifiers)));
          return (
            (f.orderedModifiers = h.filter(function (y) {
              return y.enabled;
            })),
            x(),
            w.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var v = f.elements,
              d = v.reference,
              h = v.popper;
            if (Yf(d, h)) {
              (f.rects = { reference: Ex(d, No(h), f.options.strategy === 'fixed'), popper: Hu(h) }),
                (f.reset = !1),
                (f.placement = f.options.placement),
                f.orderedModifiers.forEach(function (P) {
                  return (f.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var y = 0; y < f.orderedModifiers.length; y++) {
                if (f.reset === !0) {
                  (f.reset = !1), (y = -1);
                  continue;
                }
                var S = f.orderedModifiers[y],
                  T = S.fn,
                  C = S.options,
                  k = C === void 0 ? {} : C,
                  L = S.name;
                typeof T == 'function' && (f = T({ state: f, options: k, name: L, instance: w }) || f);
              }
            }
          }
        },
        update: Tx(function () {
          return new Promise(function (_) {
            w.forceUpdate(), _(f);
          });
        }),
        destroy: function () {
          E(), (g = !0);
        }
      };
    if (!Yf(l, s)) return w;
    w.setOptions(u).then(function (_) {
      !g && u.onFirstUpdate && u.onFirstUpdate(_);
    });
    function x() {
      f.orderedModifiers.forEach(function (_) {
        var v = _.name,
          d = _.options,
          h = d === void 0 ? {} : d,
          y = _.effect;
        if (typeof y == 'function') {
          var S = y({ state: f, name: v, instance: w, options: h }),
            T = function () {};
          c.push(S || T);
        }
      });
    }
    function E() {
      c.forEach(function (_) {
        return _();
      }),
        (c = []);
    }
    return w;
  };
}
const bx = jx({ defaultModifiers: [cx, mx, Gw, qw, px, sx, yx, Vw] }),
  Px = ['enabled', 'placement', 'strategy', 'modifiers'];
function Nx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Ox = { name: 'applyStyles', enabled: !1, phase: 'afterWrite', fn: () => {} },
  Lx = {
    name: 'ariaDescribedBy',
    enabled: !0,
    phase: 'afterWrite',
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ('removeAttribute' in t) {
          const r = (t.getAttribute('aria-describedby') || '').split(',').filter((o) => o.trim() !== n.id);
          r.length ? t.setAttribute('aria-describedby', r.join(',')) : t.removeAttribute('aria-describedby');
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        o = (t = n.getAttribute('role')) == null ? void 0 : t.toLowerCase();
      if (n.id && o === 'tooltip' && 'setAttribute' in r) {
        const i = r.getAttribute('aria-describedby');
        if (i && i.split(',').indexOf(n.id) !== -1) return;
        r.setAttribute('aria-describedby', i ? `${i},${n.id}` : n.id);
      }
    }
  },
  Rx = [];
function Ix(e, t, n = {}) {
  let { enabled: r = !0, placement: o = 'bottom', strategy: i = 'absolute', modifiers: a = Rx } = n,
    l = Nx(n, Px);
  const s = m.useRef(a),
    u = m.useRef(),
    f = m.useCallback(() => {
      var _;
      (_ = u.current) == null || _.update();
    }, []),
    c = m.useCallback(() => {
      var _;
      (_ = u.current) == null || _.forceUpdate();
    }, []),
    [g, w] = kw(m.useState({ placement: o, update: f, forceUpdate: c, attributes: {}, styles: { popper: {}, arrow: {} } })),
    x = m.useMemo(
      () => ({
        name: 'updateStateModifier',
        enabled: !0,
        phase: 'write',
        requires: ['computeStyles'],
        fn: ({ state: _ }) => {
          const v = {},
            d = {};
          Object.keys(_.elements).forEach((h) => {
            (v[h] = _.styles[h]), (d[h] = _.attributes[h]);
          }),
            w({ state: _, styles: v, attributes: d, update: f, forceUpdate: c, placement: _.placement });
        }
      }),
      [f, c, w]
    ),
    E = m.useMemo(() => (Gr(s.current, a) || (s.current = a), s.current), [a]);
  return (
    m.useEffect(() => {
      !u.current || !r || u.current.setOptions({ placement: o, strategy: i, modifiers: [...E, x, Ox] });
    }, [i, o, x, r, E]),
    m.useEffect(() => {
      if (!(!r || e == null || t == null))
        return (
          (u.current = bx(e, t, Object.assign({}, l, { placement: o, strategy: i, modifiers: [...E, Lx, x] }))),
          () => {
            u.current != null &&
              (u.current.destroy(), (u.current = void 0), w((_) => Object.assign({}, _, { attributes: {}, styles: { popper: {} } })));
          }
        );
    }, [r, e, t]),
    g
  );
}
function Kf(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var Dx = function () {},
  Ax = Dx;
const $x = Dn(Ax),
  Gf = () => {};
function Mx(e) {
  return e.button === 0;
}
function zx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const _l = (e) => e && ('current' in e ? e.current : e),
  Qf = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' };
function Fx(e, t = Gf, { disabled: n, clickTrigger: r = 'click' } = {}) {
  const o = m.useRef(!1),
    i = m.useRef(!1),
    a = m.useCallback(
      (u) => {
        const f = _l(e);
        $x(
          !!f,
          'ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node'
        ),
          (o.current = !f || zx(u) || !Mx(u) || !!Kf(f, u.target) || i.current),
          (i.current = !1);
      },
      [e]
    ),
    l = Ot((u) => {
      const f = _l(e);
      f && Kf(f, u.target) ? (i.current = !0) : (i.current = !1);
    }),
    s = Ot((u) => {
      o.current || t(u);
    });
  m.useEffect(() => {
    var u, f;
    if (n || e == null) return;
    const c = lw(_l(e)),
      g = c.defaultView || window;
    let w = (u = g.event) != null ? u : (f = g.parent) == null ? void 0 : f.event,
      x = null;
    Qf[r] && (x = ni(c, Qf[r], l, !0));
    const E = ni(c, r, a, !0),
      _ = ni(c, r, (d) => {
        if (d === w) {
          w = void 0;
          return;
        }
        s(d);
      });
    let v = [];
    return (
      'ontouchstart' in c.documentElement && (v = [].slice.call(c.body.children).map((d) => ni(d, 'mousemove', Gf))),
      () => {
        x == null || x(), E(), _(), v.forEach((d) => d());
      }
    );
  }, [e, n, r, a, l, s]);
}
function Bx(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((n) => {
          t[n.name] = n;
        }),
      t)
    : e || t;
}
function Hx(e = {}) {
  return Array.isArray(e) ? e : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function Wx({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: l,
  popperConfig: s = {}
}) {
  var u, f, c, g, w;
  const x = Bx(s.modifiers);
  return Object.assign({}, s, {
    placement: n,
    enabled: e,
    strategy: i ? 'fixed' : s.strategy,
    modifiers: Hx(
      Object.assign({}, x, {
        eventListeners: { enabled: t, options: (u = x.eventListeners) == null ? void 0 : u.options },
        preventOverflow: Object.assign({}, x.preventOverflow, {
          options: a
            ? Object.assign({ padding: a }, (f = x.preventOverflow) == null ? void 0 : f.options)
            : (c = x.preventOverflow) == null
              ? void 0
              : c.options
        }),
        offset: { options: Object.assign({ offset: o }, (g = x.offset) == null ? void 0 : g.options) },
        arrow: Object.assign({}, x.arrow, {
          enabled: !!l,
          options: Object.assign({}, (w = x.arrow) == null ? void 0 : w.options, { element: l })
        }),
        flip: Object.assign({ enabled: !!r }, x.flip)
      })
    )
  });
}
const Ux = ['children', 'usePopper'];
function Vx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Xx = () => {};
function xm(e = {}) {
  const t = m.useContext(Da),
    [n, r] = fw(),
    o = m.useRef(!1),
    {
      flip: i,
      offset: a,
      rootCloseEvent: l,
      fixed: s = !1,
      placement: u,
      popperConfig: f = {},
      enableEventListeners: c = !0,
      usePopper: g = !!t
    } = e,
    w = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  w && !o.current && (o.current = !0);
  const x = (T) => {
      t == null || t.toggle(!1, T);
    },
    { placement: E, setMenu: _, menuElement: v, toggleElement: d } = t || {},
    h = Ix(
      d,
      v,
      Wx({
        placement: u || E || 'bottom-start',
        enabled: g,
        enableEvents: c ?? w,
        offset: a,
        flip: i,
        fixed: s,
        arrowElement: n,
        popperConfig: f
      })
    ),
    y = Object.assign({ ref: _ || Xx, 'aria-labelledby': d == null ? void 0 : d.id }, h.attributes.popper, { style: h.styles.popper }),
    S = {
      show: w,
      placement: E,
      hasShown: o.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: g ? h : null,
      arrowProps: g ? Object.assign({ ref: r }, h.attributes.arrow, { style: h.styles.arrow }) : {}
    };
  return Fx(v, x, { clickTrigger: l, disabled: !w }), [y, S];
}
function _m(e) {
  let { children: t, usePopper: n = !0 } = e,
    r = Vx(e, Ux);
  const [o, i] = xm(Object.assign({}, r, { usePopper: n }));
  return p.jsx(p.Fragment, { children: t(o, i) });
}
_m.displayName = 'DropdownMenu';
const Yu = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  Em = O.createContext(Yu),
  Yx = O.createContext(!1);
let Kx = !!(typeof window < 'u' && window.document && window.document.createElement),
  El = new WeakMap();
function Gx(e = !1) {
  let t = m.useContext(Em),
    n = m.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let i =
      (o = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (i) {
      let a = El.get(i);
      a == null ? El.set(i, { id: t.current, state: i.memoizedState }) : i.memoizedState !== a.state && ((t.current = a.id), El.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Qx(e) {
  let t = m.useContext(Em);
  t === Yu &&
    !Kx &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    );
  let n = Gx(!1);
  return `${`react-aria${t.prefix}`}-${n}`;
}
function qx(e) {
  let t = O.useId(),
    [n] = m.useState(n2());
  return `${n ? 'react-aria' : `react-aria${Yu.prefix}`}-${t}`;
}
const Jx = typeof O.useId == 'function' ? qx : Qx;
function Zx() {
  return !1;
}
function e2() {
  return !0;
}
function t2(e) {
  return () => {};
}
function n2() {
  return typeof O.useSyncExternalStore == 'function' ? O.useSyncExternalStore(t2, Zx, e2) : m.useContext(Yx);
}
const Sm = (e) => {
    var t;
    return ((t = e.getAttribute('role')) == null ? void 0 : t.toLowerCase()) === 'menu';
  },
  qf = () => {};
function Cm() {
  const e = Jx(),
    { show: t = !1, toggle: n = qf, setToggle: r, menuElement: o } = m.useContext(Da) || {},
    i = m.useCallback(
      (l) => {
        n(!t, l);
      },
      [t, n]
    ),
    a = { id: e, ref: r || qf, onClick: i, 'aria-expanded': !!t };
  return o && Sm(o) && (a['aria-haspopup'] = !0), [a, { show: t, toggle: n }];
}
function Tm({ children: e }) {
  const [t, n] = Cm();
  return p.jsx(p.Fragment, { children: e(t, n) });
}
Tm.displayName = 'DropdownToggle';
const yr = m.createContext(null),
  _o = (e, t = null) => (e != null ? String(e) : t || null),
  $a = m.createContext(null);
$a.displayName = 'NavContext';
const r2 = 'data-rr-ui-',
  o2 = 'rrUi';
function Oo(e) {
  return `${r2}${e}`;
}
function i2(e) {
  return `${o2}${e}`;
}
const a2 = ['eventKey', 'disabled', 'onClick', 'active', 'as'];
function l2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function km({ key: e, href: t, active: n, disabled: r, onClick: o }) {
  const i = m.useContext(yr),
    a = m.useContext($a),
    { activeKey: l } = a || {},
    s = _o(e, t),
    u = n == null && e != null ? _o(l) === s : n;
  return [
    {
      onClick: Ot((c) => {
        r || (o == null || o(c), i && !c.isPropagationStopped() && i(s, c));
      }),
      'aria-disabled': r || void 0,
      'aria-selected': u,
      [Oo('dropdown-item')]: ''
    },
    { isActive: u }
  ];
}
const jm = m.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: o, active: i, as: a = Mu } = e,
    l = l2(e, a2);
  const [s] = km({ key: n, href: l.href, disabled: r, onClick: o, active: i });
  return p.jsx(a, Object.assign({}, l, { ref: t }, s));
});
jm.displayName = 'DropdownItem';
const bm = m.createContext(om ? window : void 0);
bm.Provider;
function s2() {
  return m.useContext(bm);
}
function Jf() {
  const e = cm(),
    t = m.useRef(null),
    n = m.useCallback(
      (r) => {
        (t.current = r), e();
      },
      [e]
    );
  return [t, n];
}
function Lo({
  defaultShow: e,
  show: t,
  onSelect: n,
  onToggle: r,
  itemSelector: o = `* [${Oo('dropdown-item')}]`,
  focusFirstItemOnShow: i,
  placement: a = 'bottom-start',
  children: l
}) {
  const s = s2(),
    [u, f] = Tw(t, e, r),
    [c, g] = Jf(),
    w = c.current,
    [x, E] = Jf(),
    _ = x.current,
    v = mw(u),
    d = m.useRef(null),
    h = m.useRef(!1),
    y = m.useContext(yr),
    S = m.useCallback(
      (I, A, z = A == null ? void 0 : A.type) => {
        f(I, { originalEvent: A, source: z });
      },
      [f]
    ),
    T = Ot((I, A) => {
      n == null || n(I, A), S(!1, A, 'select'), A.isPropagationStopped() || y == null || y(I, A);
    }),
    C = m.useMemo(
      () => ({ toggle: S, placement: a, show: u, menuElement: w, toggleElement: _, setMenu: g, setToggle: E }),
      [S, a, u, w, _, g, E]
    );
  w && v && !u && (h.current = w.contains(w.ownerDocument.activeElement));
  const k = Ot(() => {
      _ && _.focus && _.focus();
    }),
    L = Ot(() => {
      const I = d.current;
      let A = i;
      if ((A == null && (A = c.current && Sm(c.current) ? 'keyboard' : !1), A === !1 || (A === 'keyboard' && !/^key.+$/.test(I)))) return;
      const z = Es(c.current, o)[0];
      z && z.focus && z.focus();
    });
  m.useEffect(() => {
    u ? L() : h.current && ((h.current = !1), k());
  }, [u, h, k, L]),
    m.useEffect(() => {
      d.current = null;
    });
  const P = (I, A) => {
    if (!c.current) return null;
    const z = Es(c.current, o);
    let te = z.indexOf(I) + A;
    return (te = Math.max(0, Math.min(te, z.length))), z[te];
  };
  return (
    pw(
      m.useCallback(() => s.document, [s]),
      'keydown',
      (I) => {
        var A, z;
        const { key: te } = I,
          fe = I.target,
          ne = (A = c.current) == null ? void 0 : A.contains(fe),
          ue = (z = x.current) == null ? void 0 : z.contains(fe);
        if (
          (/input|textarea/i.test(fe.tagName) && (te === ' ' || (te !== 'Escape' && ne) || (te === 'Escape' && fe.type === 'search'))) ||
          (!ne && !ue) ||
          (te === 'Tab' && (!c.current || !u))
        )
          return;
        d.current = I.type;
        const $ = { originalEvent: I, source: I.type };
        switch (te) {
          case 'ArrowUp': {
            const D = P(fe, -1);
            D && D.focus && D.focus(), I.preventDefault();
            return;
          }
          case 'ArrowDown':
            if ((I.preventDefault(), !u)) f(!0, $);
            else {
              const D = P(fe, 1);
              D && D.focus && D.focus();
            }
            return;
          case 'Tab':
            im(
              fe.ownerDocument,
              'keyup',
              (D) => {
                var Y;
                ((D.key === 'Tab' && !D.target) || !((Y = c.current) != null && Y.contains(D.target))) && f(!1, $);
              },
              { once: !0 }
            );
            break;
          case 'Escape':
            te === 'Escape' && (I.preventDefault(), I.stopPropagation()), f(!1, $);
            break;
        }
      }
    ),
    p.jsx(yr.Provider, { value: T, children: p.jsx(Da.Provider, { value: C, children: l }) })
  );
}
Lo.displayName = 'Dropdown';
Lo.Menu = _m;
Lo.Toggle = Tm;
Lo.Item = jm;
const Ku = m.createContext({});
Ku.displayName = 'DropdownContext';
const Pm = m.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'hr', role: r = 'separator', ...o }, i) => (
    (t = G(t, 'dropdown-divider')), p.jsx(n, { ref: i, className: X(e, t), role: r, ...o })
  )
);
Pm.displayName = 'DropdownDivider';
const Nm = m.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', role: r = 'heading', ...o }, i) => (
    (t = G(t, 'dropdown-header')), p.jsx(n, { ref: i, className: X(e, t), role: r, ...o })
  )
);
Nm.displayName = 'DropdownHeader';
const Om = m.forwardRef(({ bsPrefix: e, className: t, eventKey: n, disabled: r = !1, onClick: o, active: i, as: a = sm, ...l }, s) => {
  const u = G(e, 'dropdown-item'),
    [f, c] = km({ key: n, href: l.href, disabled: r, onClick: o, active: i });
  return p.jsx(a, { ...l, ...f, ref: s, className: X(t, u, c.isActive && 'active', r && 'disabled') });
});
Om.displayName = 'DropdownItem';
const Lm = m.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'span', ...r }, o) => (
    (t = G(t, 'dropdown-item-text')), p.jsx(n, { ref: o, className: X(e, t), ...r })
  )
);
Lm.displayName = 'DropdownItemText';
const u2 = typeof window < 'u' && window.navigator && window.navigator.product === 'ReactNative',
  c2 = typeof document < 'u',
  f2 = c2 || u2 ? m.useLayoutEffect : m.useEffect,
  Ma = m.createContext(null);
Ma.displayName = 'InputGroupContext';
const Rm = m.createContext(null);
Rm.displayName = 'NavbarContext';
function Im(e, t) {
  return e;
}
function Dm(e, t, n) {
  const r = n ? 'top-end' : 'top-start',
    o = n ? 'top-start' : 'top-end',
    i = n ? 'bottom-end' : 'bottom-start',
    a = n ? 'bottom-start' : 'bottom-end',
    l = n ? 'right-start' : 'left-start',
    s = n ? 'right-end' : 'left-end',
    u = n ? 'left-start' : 'right-start',
    f = n ? 'left-end' : 'right-end';
  let c = e ? a : i;
  return (
    t === 'up'
      ? (c = e ? o : r)
      : t === 'end'
        ? (c = e ? f : u)
        : t === 'start'
          ? (c = e ? s : l)
          : t === 'down-centered'
            ? (c = 'bottom')
            : t === 'up-centered' && (c = 'top'),
    c
  );
}
const Am = m.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: n,
      rootCloseEvent: r,
      flip: o = !0,
      show: i,
      renderOnMount: a,
      as: l = 'div',
      popperConfig: s,
      variant: u,
      ...f
    },
    c
  ) => {
    let g = !1;
    const w = m.useContext(Rm),
      x = G(e, 'dropdown-menu'),
      { align: E, drop: _, isRTL: v } = m.useContext(Ku);
    n = n || E;
    const d = m.useContext(Ma),
      h = [];
    if (n)
      if (typeof n == 'object') {
        const I = Object.keys(n);
        if (I.length) {
          const A = I[0],
            z = n[A];
          (g = z === 'start'), h.push(`${x}-${A}-${z}`);
        }
      } else n === 'end' && (g = !0);
    const y = Dm(g, _, v),
      [S, { hasShown: T, popper: C, show: k, toggle: L }] = xm({
        flip: o,
        rootCloseEvent: r,
        show: i,
        usePopper: !w && h.length === 0,
        offset: [0, 2],
        popperConfig: s,
        placement: y
      });
    if (
      ((S.ref = am(Im(c), S.ref)),
      f2(() => {
        k && (C == null || C.update());
      }, [k]),
      !T && !a && !d)
    )
      return null;
    typeof l != 'string' && ((S.show = k), (S.close = () => (L == null ? void 0 : L(!1))), (S.align = n));
    let P = f.style;
    return (
      C != null && C.placement && ((P = { ...f.style, ...S.style }), (f['x-placement'] = C.placement)),
      p.jsx(l, {
        ...f,
        ...S,
        style: P,
        ...((h.length || w) && { 'data-bs-popper': 'static' }),
        className: X(t, x, k && 'show', g && `${x}-end`, u && `${x}-${u}`, ...h)
      })
    );
  }
);
Am.displayName = 'DropdownMenu';
const $m = m.forwardRef(({ bsPrefix: e, split: t, className: n, childBsPrefix: r, as: o = Ki, ...i }, a) => {
  const l = G(e, 'dropdown-toggle'),
    s = m.useContext(Da);
  r !== void 0 && (i.bsPrefix = r);
  const [u] = Cm();
  return (
    (u.ref = am(u.ref, Im(a))), p.jsx(o, { className: X(n, l, t && `${l}-split`, (s == null ? void 0 : s.show) && 'show'), ...u, ...i })
  );
});
$m.displayName = 'DropdownToggle';
const Mm = m.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      drop: r = 'down',
      show: o,
      className: i,
      align: a = 'start',
      onSelect: l,
      onToggle: s,
      focusFirstItemOnShow: u,
      as: f = 'div',
      navbar: c,
      autoClose: g = !0,
      ...w
    } = tm(e, { show: 'onToggle' }),
    x = m.useContext(Ma),
    E = G(n, 'dropdown'),
    _ = aw(),
    v = (C) => (g === !1 ? C === 'click' : g === 'inside' ? C !== 'rootClose' : g === 'outside' ? C !== 'select' : !0),
    d = lm((C, k) => {
      var L;
      (!((L = k.originalEvent) == null || (L = L.target) == null) && L.classList.contains('dropdown-toggle') && k.source === 'mousedown') ||
        (k.originalEvent.currentTarget === document &&
          (k.source !== 'keydown' || k.originalEvent.key === 'Escape') &&
          (k.source = 'rootClose'),
        v(k.source) && (s == null || s(C, k)));
    }),
    y = Dm(a === 'end', r, _),
    S = m.useMemo(() => ({ align: a, drop: r, isRTL: _ }), [a, r, _]),
    T = {
      down: E,
      'down-centered': `${E}-center`,
      up: 'dropup',
      'up-centered': 'dropup-center dropup',
      end: 'dropend',
      start: 'dropstart'
    };
  return p.jsx(Ku.Provider, {
    value: S,
    children: p.jsx(Lo, {
      placement: y,
      show: o,
      onSelect: l,
      onToggle: d,
      focusFirstItemOnShow: u,
      itemSelector: `.${E}-item:not(.disabled):not(:disabled)`,
      children: x ? w.children : p.jsx(f, { ...w, ref: t, className: X(i, o && 'show', T[r]) })
    })
  });
});
Mm.displayName = 'Dropdown';
const ge = Object.assign(Mm, { Toggle: $m, Menu: Am, Item: Om, ItemText: Lm, Divider: Pm, Header: Nm }),
  d2 = { type: j.string, tooltip: j.bool, as: j.elementType },
  za = m.forwardRef(({ as: e = 'div', className: t, type: n = 'valid', tooltip: r = !1, ...o }, i) =>
    p.jsx(e, { ...o, ref: i, className: X(t, `${n}-${r ? 'tooltip' : 'feedback'}`) })
  );
za.displayName = 'Feedback';
za.propTypes = d2;
const $t = m.createContext({}),
  Ro = m.forwardRef(
    ({ id: e, bsPrefix: t, className: n, type: r = 'checkbox', isValid: o = !1, isInvalid: i = !1, as: a = 'input', ...l }, s) => {
      const { controlId: u } = m.useContext($t);
      return (
        (t = G(t, 'form-check-input')),
        p.jsx(a, { ...l, ref: s, type: r, id: e || u, className: X(n, t, o && 'is-valid', i && 'is-invalid') })
      );
    }
  );
Ro.displayName = 'FormCheckInput';
const Qi = m.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
  const { controlId: i } = m.useContext($t);
  return (e = G(e, 'form-check-label')), p.jsx('label', { ...r, ref: o, htmlFor: n || i, className: X(t, e) });
});
Qi.displayName = 'FormCheckLabel';
const zm = m.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: n,
      inline: r = !1,
      reverse: o = !1,
      disabled: i = !1,
      isValid: a = !1,
      isInvalid: l = !1,
      feedbackTooltip: s = !1,
      feedback: u,
      feedbackType: f,
      className: c,
      style: g,
      title: w = '',
      type: x = 'checkbox',
      label: E,
      children: _,
      as: v = 'input',
      ...d
    },
    h
  ) => {
    (t = G(t, 'form-check')), (n = G(n, 'form-switch'));
    const { controlId: y } = m.useContext($t),
      S = m.useMemo(() => ({ controlId: e || y }), [y, e]),
      T = (!_ && E != null && E !== !1) || Ew(_, Qi),
      C = p.jsx(Ro, { ...d, type: x === 'switch' ? 'checkbox' : x, ref: h, isValid: a, isInvalid: l, disabled: i, as: v });
    return p.jsx($t.Provider, {
      value: S,
      children: p.jsx('div', {
        style: g,
        className: X(c, T && t, r && `${t}-inline`, o && `${t}-reverse`, x === 'switch' && n),
        children:
          _ ||
          p.jsxs(p.Fragment, {
            children: [C, T && p.jsx(Qi, { title: w, children: E }), u && p.jsx(za, { type: f, tooltip: s, children: u })]
          })
      })
    });
  }
);
zm.displayName = 'FormCheck';
const qi = Object.assign(zm, { Input: Ro, Label: Qi }),
  Fm = m.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: o,
        className: i,
        isValid: a = !1,
        isInvalid: l = !1,
        plaintext: s,
        readOnly: u,
        as: f = 'input',
        ...c
      },
      g
    ) => {
      const { controlId: w } = m.useContext($t);
      return (
        (e = G(e, 'form-control')),
        p.jsx(f, {
          ...c,
          type: t,
          size: r,
          ref: g,
          readOnly: u,
          id: o || w,
          className: X(i, s ? `${e}-plaintext` : e, n && `${e}-${n}`, t === 'color' && `${e}-color`, a && 'is-valid', l && 'is-invalid')
        })
      );
    }
  );
Fm.displayName = 'FormControl';
const p2 = Object.assign(Fm, { Feedback: za }),
  Bm = m.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => ((t = G(t, 'form-floating')), p.jsx(n, { ref: o, className: X(e, t), ...r }))
  );
Bm.displayName = 'FormFloating';
const Gu = m.forwardRef(({ controlId: e, as: t = 'div', ...n }, r) => {
  const o = m.useMemo(() => ({ controlId: e }), [e]);
  return p.jsx($t.Provider, { value: o, children: p.jsx(t, { ...n, ref: r }) });
});
Gu.displayName = 'FormGroup';
const Hm = m.forwardRef(({ as: e = 'label', bsPrefix: t, column: n = !1, visuallyHidden: r = !1, className: o, htmlFor: i, ...a }, l) => {
  const { controlId: s } = m.useContext($t);
  t = G(t, 'form-label');
  let u = 'col-form-label';
  typeof n == 'string' && (u = `${u} ${u}-${n}`);
  const f = X(o, t, r && 'visually-hidden', n && u);
  return (
    (i = i || s),
    n ? p.jsx(zu, { ref: l, as: 'label', className: f, htmlFor: i, ...a }) : p.jsx(e, { ref: l, className: f, htmlFor: i, ...a })
  );
});
Hm.displayName = 'FormLabel';
const Wm = m.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
  const { controlId: i } = m.useContext($t);
  return (e = G(e, 'form-range')), p.jsx('input', { ...r, type: 'range', ref: o, className: X(t, e), id: n || i });
});
Wm.displayName = 'FormRange';
const Um = m.forwardRef(({ bsPrefix: e, size: t, htmlSize: n, className: r, isValid: o = !1, isInvalid: i = !1, id: a, ...l }, s) => {
  const { controlId: u } = m.useContext($t);
  return (
    (e = G(e, 'form-select')),
    p.jsx('select', { ...l, size: n, ref: s, className: X(r, e, t && `${e}-${t}`, o && 'is-valid', i && 'is-invalid'), id: a || u })
  );
});
Um.displayName = 'FormSelect';
const Vm = m.forwardRef(
  ({ bsPrefix: e, className: t, as: n = 'small', muted: r, ...o }, i) => (
    (e = G(e, 'form-text')), p.jsx(n, { ...o, ref: i, className: X(t, e, r && 'text-muted') })
  )
);
Vm.displayName = 'FormText';
const Xm = m.forwardRef((e, t) => p.jsx(qi, { ...e, ref: t, type: 'switch' }));
Xm.displayName = 'Switch';
const h2 = Object.assign(Xm, { Input: qi.Input, Label: qi.Label }),
  Ym = m.forwardRef(
    ({ bsPrefix: e, className: t, children: n, controlId: r, label: o, ...i }, a) => (
      (e = G(e, 'form-floating')),
      p.jsxs(Gu, { ref: a, className: X(t, e), controlId: r, ...i, children: [n, p.jsx('label', { htmlFor: r, children: o })] })
    )
  );
Ym.displayName = 'FloatingLabel';
const m2 = { _ref: j.any, validated: j.bool, as: j.elementType },
  Qu = m.forwardRef(({ className: e, validated: t, as: n = 'form', ...r }, o) =>
    p.jsx(n, { ...r, ref: o, className: X(e, t && 'was-validated') })
  );
Qu.displayName = 'Form';
Qu.propTypes = m2;
const v2 = Object.assign(Qu, {
    Group: Gu,
    Control: p2,
    Floating: Bm,
    Check: qi,
    Switch: h2,
    Label: Hm,
    Text: Vm,
    Range: Wm,
    Select: Um,
    FloatingLabel: Ym
  }),
  Fa = m.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'span', ...r }, o) => (
      (t = G(t, 'input-group-text')), p.jsx(n, { ref: o, className: X(e, t), ...r })
    )
  );
Fa.displayName = 'InputGroupText';
const g2 = (e) => p.jsx(Fa, { children: p.jsx(Ro, { type: 'checkbox', ...e }) }),
  y2 = (e) => p.jsx(Fa, { children: p.jsx(Ro, { type: 'radio', ...e }) }),
  Km = m.forwardRef(({ bsPrefix: e, size: t, hasValidation: n, className: r, as: o = 'div', ...i }, a) => {
    e = G(e, 'input-group');
    const l = m.useMemo(() => ({}), []);
    return p.jsx(Ma.Provider, {
      value: l,
      children: p.jsx(o, { ref: a, ...i, className: X(r, e, t && `${e}-${t}`, n && 'has-validation') })
    });
  });
Km.displayName = 'InputGroup';
const Zf = Object.assign(Km, { Text: Fa, Radio: y2, Checkbox: g2 }),
  ed = (e) =>
    !e || typeof e == 'function'
      ? e
      : (t) => {
          e.current = t;
        };
function w2(e, t) {
  const n = ed(e),
    r = ed(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function x2(e, t) {
  return m.useMemo(() => w2(e, t), [e, t]);
}
const Gm = m.createContext(null),
  _2 = ['as', 'active', 'eventKey'];
function E2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Qm({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const a = m.useContext(yr),
    l = m.useContext($a),
    s = m.useContext(Gm);
  let u = n;
  const f = { role: o };
  if (l) {
    !o && l.role === 'tablist' && (f.role = 'tab');
    const c = l.getControllerId(e ?? null),
      g = l.getControlledId(e ?? null);
    (f[Oo('event-key')] = e),
      (f.id = c || r),
      (u = n == null && e != null ? l.activeKey === e : n),
      (u || (!(s != null && s.unmountOnExit) && !(s != null && s.mountOnEnter))) && (f['aria-controls'] = g);
  }
  return (
    f.role === 'tab' && ((f['aria-selected'] = u), u || (f.tabIndex = -1), i && ((f.tabIndex = -1), (f['aria-disabled'] = !0))),
    (f.onClick = Ot((c) => {
      i || (t == null || t(c), e != null && a && !c.isPropagationStopped() && a(e, c));
    })),
    [f, { isActive: u }]
  );
}
const qm = m.forwardRef((e, t) => {
  let { as: n = Mu, active: r, eventKey: o } = e,
    i = E2(e, _2);
  const [a, l] = Qm(Object.assign({ key: _o(o, i.href), active: r }, i));
  return (a[Oo('active')] = l.isActive), p.jsx(n, Object.assign({}, i, a, { ref: t }));
});
qm.displayName = 'NavItem';
const S2 = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
function C2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const td = () => {},
  nd = Oo('event-key'),
  Jm = m.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: o, role: i, onKeyDown: a } = e,
      l = C2(e, S2);
    const s = cm(),
      u = m.useRef(!1),
      f = m.useContext(yr),
      c = m.useContext(Gm);
    let g, w;
    c && ((i = i || 'tablist'), (o = c.activeKey), (g = c.getControlledId), (w = c.getControllerId));
    const x = m.useRef(null),
      E = (h) => {
        const y = x.current;
        if (!y) return null;
        const S = Es(y, `[${nd}]:not([aria-disabled=true])`),
          T = y.querySelector('[aria-selected=true]');
        if (!T || T !== document.activeElement) return null;
        const C = S.indexOf(T);
        if (C === -1) return null;
        let k = C + h;
        return k >= S.length && (k = 0), k < 0 && (k = S.length - 1), S[k];
      },
      _ = (h, y) => {
        h != null && (r == null || r(h, y), f == null || f(h, y));
      },
      v = (h) => {
        if ((a == null || a(h), !c)) return;
        let y;
        switch (h.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            y = E(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            y = E(1);
            break;
          default:
            return;
        }
        y && (h.preventDefault(), _(y.dataset[i2('EventKey')] || null, h), (u.current = !0), s());
      };
    m.useEffect(() => {
      if (x.current && u.current) {
        const h = x.current.querySelector(`[${nd}][aria-selected=true]`);
        h == null || h.focus();
      }
      u.current = !1;
    });
    const d = x2(t, x);
    return p.jsx(yr.Provider, {
      value: _,
      children: p.jsx($a.Provider, {
        value: { role: i, activeKey: _o(o), getControlledId: g || td, getControllerId: w || td },
        children: p.jsx(n, Object.assign({}, l, { onKeyDown: v, ref: d, role: i }))
      })
    });
  });
Jm.displayName = 'Nav';
const T2 = Object.assign(Jm, { Item: qm }),
  Zm = m.forwardRef(({ bsPrefix: e, active: t, disabled: n, eventKey: r, className: o, variant: i, action: a, as: l, ...s }, u) => {
    e = G(e, 'list-group-item');
    const [f, c] = Qm({ key: _o(r, s.href), active: t, ...s }),
      g = lm((x) => {
        if (n) {
          x.preventDefault(), x.stopPropagation();
          return;
        }
        f.onClick(x);
      });
    n && s.tabIndex === void 0 && ((s.tabIndex = -1), (s['aria-disabled'] = !0));
    const w = l || (a ? (s.href ? 'a' : 'button') : 'div');
    return p.jsx(w, {
      ref: u,
      ...s,
      ...f,
      onClick: g,
      className: X(o, e, c.isActive && 'active', n && 'disabled', i && `${e}-${i}`, a && `${e}-action`)
    });
  });
Zm.displayName = 'ListGroupItem';
const ev = m.forwardRef((e, t) => {
  const { className: n, bsPrefix: r, variant: o, horizontal: i, numbered: a, as: l = 'div', ...s } = tm(e, { activeKey: 'onSelect' }),
    u = G(r, 'list-group');
  let f;
  return (
    i && (f = i === !0 ? 'horizontal' : `horizontal-${i}`),
    p.jsx(T2, { ref: t, ...s, as: l, className: X(n, u, o && `${u}-${o}`, f && `${u}-${f}`, a && `${u}-numbered`) })
  );
});
ev.displayName = 'ListGroup';
const W = Object.assign(ev, { Item: Zm }),
  tv = m.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const i = G(e, 'row'),
      a = nm(),
      l = rm(),
      s = `${i}-cols`,
      u = [];
    return (
      a.forEach((f) => {
        const c = r[f];
        delete r[f];
        let g;
        c != null && typeof c == 'object' ? ({ cols: g } = c) : (g = c);
        const w = f !== l ? `-${f}` : '';
        g != null && u.push(`${s}${w}-${g}`);
      }),
      p.jsx(n, { ref: o, ...r, className: X(t, i, ...u) })
    );
  });
tv.displayName = 'Row';
const nv = m.forwardRef(({ bsPrefix: e, variant: t, animation: n = 'border', size: r, as: o = 'div', className: i, ...a }, l) => {
  e = G(e, 'spinner');
  const s = `${e}-${n}`;
  return p.jsx(o, { ref: l, ...a, className: X(i, s, r && `${s}-${r}`, t && `text-${t}`) });
});
nv.displayName = 'Spinner';
var Ts = { exports: {} },
  ks = { exports: {} };
/*!
 * perfect-scrollbar v1.5.6
 * Copyright 2024 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ function wt(e) {
  return getComputedStyle(e);
}
function De(e, t) {
  for (var n in t) {
    var r = t[n];
    typeof r == 'number' && (r = r + 'px'), (e.style[n] = r);
  }
  return e;
}
function oi(e) {
  var t = document.createElement('div');
  return (t.className = e), t;
}
var rd =
  typeof Element < 'u' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);
function Jt(e, t) {
  if (!rd) throw new Error('No element matching method supported');
  return rd.call(e, t);
}
function Jn(e) {
  e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
}
function od(e, t) {
  return Array.prototype.filter.call(e.children, function (n) {
    return Jt(n, t);
  });
}
var de = {
    main: 'ps',
    rtl: 'ps__rtl',
    element: {
      thumb: function (e) {
        return 'ps__thumb-' + e;
      },
      rail: function (e) {
        return 'ps__rail-' + e;
      },
      consuming: 'ps__child--consume'
    },
    state: {
      focus: 'ps--focus',
      clicking: 'ps--clicking',
      active: function (e) {
        return 'ps--active-' + e;
      },
      scrolling: function (e) {
        return 'ps--scrolling-' + e;
      }
    }
  },
  rv = { x: null, y: null };
function ov(e, t) {
  var n = e.element.classList,
    r = de.state.scrolling(t);
  n.contains(r) ? clearTimeout(rv[t]) : n.add(r);
}
function iv(e, t) {
  rv[t] = setTimeout(function () {
    return e.isAlive && e.element.classList.remove(de.state.scrolling(t));
  }, e.settings.scrollingThreshold);
}
function k2(e, t) {
  ov(e, t), iv(e, t);
}
var Io = function (t) {
    (this.element = t), (this.handlers = {});
  },
  av = { isEmpty: { configurable: !0 } };
Io.prototype.bind = function (t, n) {
  typeof this.handlers[t] > 'u' && (this.handlers[t] = []), this.handlers[t].push(n), this.element.addEventListener(t, n, !1);
};
Io.prototype.unbind = function (t, n) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function (o) {
    return n && o !== n ? !0 : (r.element.removeEventListener(t, o, !1), !1);
  });
};
Io.prototype.unbindAll = function () {
  for (var t in this.handlers) this.unbind(t);
};
av.isEmpty.get = function () {
  var e = this;
  return Object.keys(this.handlers).every(function (t) {
    return e.handlers[t].length === 0;
  });
};
Object.defineProperties(Io.prototype, av);
var Tr = function () {
  this.eventElements = [];
};
Tr.prototype.eventElement = function (t) {
  var n = this.eventElements.filter(function (r) {
    return r.element === t;
  })[0];
  return n || ((n = new Io(t)), this.eventElements.push(n)), n;
};
Tr.prototype.bind = function (t, n, r) {
  this.eventElement(t).bind(n, r);
};
Tr.prototype.unbind = function (t, n, r) {
  var o = this.eventElement(t);
  o.unbind(n, r), o.isEmpty && this.eventElements.splice(this.eventElements.indexOf(o), 1);
};
Tr.prototype.unbindAll = function () {
  this.eventElements.forEach(function (t) {
    return t.unbindAll();
  }),
    (this.eventElements = []);
};
Tr.prototype.once = function (t, n, r) {
  var o = this.eventElement(t),
    i = function (a) {
      o.unbind(n, i), r(a);
    };
  o.bind(n, i);
};
function ii(e) {
  if (typeof window.CustomEvent == 'function') return new CustomEvent(e);
  var t = document.createEvent('CustomEvent');
  return t.initCustomEvent(e, !1, !1, void 0), t;
}
function Ji(e, t, n, r, o) {
  r === void 0 && (r = !0), o === void 0 && (o = !1);
  var i;
  if (t === 'top') i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
  else if (t === 'left') i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
  else throw new Error('A proper axis should be provided');
  j2(e, n, i, r, o);
}
function j2(e, t, n, r, o) {
  var i = n[0],
    a = n[1],
    l = n[2],
    s = n[3],
    u = n[4],
    f = n[5];
  r === void 0 && (r = !0), o === void 0 && (o = !1);
  var c = e.element;
  (e.reach[s] = null),
    c[l] < 1 && (e.reach[s] = 'start'),
    c[l] > e[i] - e[a] - 1 && (e.reach[s] = 'end'),
    t &&
      (c.dispatchEvent(ii('ps-scroll-' + s)),
      t < 0 ? c.dispatchEvent(ii('ps-scroll-' + u)) : t > 0 && c.dispatchEvent(ii('ps-scroll-' + f)),
      r && k2(e, s)),
    e.reach[s] && (t || o) && c.dispatchEvent(ii('ps-' + s + '-reach-' + e.reach[s]));
}
function re(e) {
  return parseInt(e, 10) || 0;
}
function b2(e) {
  return (
    Jt(e, 'input,[contenteditable]') ||
    Jt(e, 'select,[contenteditable]') ||
    Jt(e, 'textarea,[contenteditable]') ||
    Jt(e, 'button,[contenteditable]')
  );
}
function P2(e) {
  var t = wt(e);
  return re(t.width) + re(t.paddingLeft) + re(t.paddingRight) + re(t.borderLeftWidth) + re(t.borderRightWidth);
}
var zn = {
  isWebKit: typeof document < 'u' && 'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window < 'u' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer: typeof navigator < 'u' && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < 'u' && /Chrome/i.test(navigator && navigator.userAgent)
};
function Mt(e) {
  var t = e.element,
    n = Math.floor(t.scrollTop),
    r = t.getBoundingClientRect();
  (e.containerWidth = Math.floor(r.width)),
    (e.containerHeight = Math.floor(r.height)),
    (e.contentWidth = t.scrollWidth),
    (e.contentHeight = t.scrollHeight),
    t.contains(e.scrollbarXRail) ||
      (od(t, de.element.rail('x')).forEach(function (o) {
        return Jn(o);
      }),
      t.appendChild(e.scrollbarXRail)),
    t.contains(e.scrollbarYRail) ||
      (od(t, de.element.rail('y')).forEach(function (o) {
        return Jn(o);
      }),
      t.appendChild(e.scrollbarYRail)),
    !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
      ? ((e.scrollbarXActive = !0),
        (e.railXWidth = e.containerWidth - e.railXMarginWidth),
        (e.railXRatio = e.containerWidth / e.railXWidth),
        (e.scrollbarXWidth = id(e, re((e.railXWidth * e.containerWidth) / e.contentWidth))),
        (e.scrollbarXLeft = re(
          ((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth)) / (e.contentWidth - e.containerWidth)
        )))
      : (e.scrollbarXActive = !1),
    !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
      ? ((e.scrollbarYActive = !0),
        (e.railYHeight = e.containerHeight - e.railYMarginHeight),
        (e.railYRatio = e.containerHeight / e.railYHeight),
        (e.scrollbarYHeight = id(e, re((e.railYHeight * e.containerHeight) / e.contentHeight))),
        (e.scrollbarYTop = re((n * (e.railYHeight - e.scrollbarYHeight)) / (e.contentHeight - e.containerHeight))))
      : (e.scrollbarYActive = !1),
    e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
    e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
    N2(t, e),
    e.scrollbarXActive
      ? t.classList.add(de.state.active('x'))
      : (t.classList.remove(de.state.active('x')),
        (e.scrollbarXWidth = 0),
        (e.scrollbarXLeft = 0),
        (t.scrollLeft = e.isRtl === !0 ? e.contentWidth : 0)),
    e.scrollbarYActive
      ? t.classList.add(de.state.active('y'))
      : (t.classList.remove(de.state.active('y')), (e.scrollbarYHeight = 0), (e.scrollbarYTop = 0), (t.scrollTop = 0));
}
function id(e, t) {
  return (
    e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
    e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
    t
  );
}
function N2(e, t) {
  var n = { width: t.railXWidth },
    r = Math.floor(e.scrollTop);
  t.isRtl ? (n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth) : (n.left = e.scrollLeft),
    t.isScrollbarXUsingBottom ? (n.bottom = t.scrollbarXBottom - r) : (n.top = t.scrollbarXTop + r),
    De(t.scrollbarXRail, n);
  var o = { top: r, height: t.railYHeight };
  t.isScrollbarYUsingRight
    ? t.isRtl
      ? (o.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9)
      : (o.right = t.scrollbarYRight - e.scrollLeft)
    : t.isRtl
      ? (o.left =
          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth)
      : (o.left = t.scrollbarYLeft + e.scrollLeft),
    De(t.scrollbarYRail, o),
    De(t.scrollbarX, { left: t.scrollbarXLeft, width: t.scrollbarXWidth - t.railBorderXWidth }),
    De(t.scrollbarY, { top: t.scrollbarYTop, height: t.scrollbarYHeight - t.railBorderYWidth });
}
function O2(e) {
  e.event.bind(e.scrollbarY, 'mousedown', function (t) {
    return t.stopPropagation();
  }),
    e.event.bind(e.scrollbarYRail, 'mousedown', function (t) {
      var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top,
        r = n > e.scrollbarYTop ? 1 : -1;
      (e.element.scrollTop += r * e.containerHeight), Mt(e), t.stopPropagation();
    }),
    e.event.bind(e.scrollbarX, 'mousedown', function (t) {
      return t.stopPropagation();
    }),
    e.event.bind(e.scrollbarXRail, 'mousedown', function (t) {
      var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left,
        r = n > e.scrollbarXLeft ? 1 : -1;
      (e.element.scrollLeft += r * e.containerWidth), Mt(e), t.stopPropagation();
    });
}
var ai = null;
function L2(e) {
  ad(e, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']),
    ad(e, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
}
function ad(e, t) {
  var n = t[0],
    r = t[1],
    o = t[2],
    i = t[3],
    a = t[4],
    l = t[5],
    s = t[6],
    u = t[7],
    f = t[8],
    c = e.element,
    g = null,
    w = null,
    x = null;
  function E(d) {
    d.touches && d.touches[0] && (d[o] = d.touches[0]['page' + u.toUpperCase()]),
      ai === a && ((c[s] = g + x * (d[o] - w)), ov(e, u), Mt(e), d.stopPropagation(), d.preventDefault());
  }
  function _() {
    iv(e, u),
      e[f].classList.remove(de.state.clicking),
      document.removeEventListener('mousemove', E),
      document.removeEventListener('mouseup', _),
      document.removeEventListener('touchmove', E),
      document.removeEventListener('touchend', _),
      (ai = null);
  }
  function v(d) {
    ai === null &&
      ((ai = a),
      (g = c[s]),
      d.touches && (d[o] = d.touches[0]['page' + u.toUpperCase()]),
      (w = d[o]),
      (x = (e[r] - e[n]) / (e[i] - e[l])),
      d.touches
        ? (document.addEventListener('touchmove', E, { passive: !1 }), document.addEventListener('touchend', _))
        : (document.addEventListener('mousemove', E), document.addEventListener('mouseup', _)),
      e[f].classList.add(de.state.clicking)),
      d.stopPropagation(),
      d.cancelable && d.preventDefault();
  }
  e[a].addEventListener('mousedown', v), e[a].addEventListener('touchstart', v);
}
function R2(e) {
  var t = e.element,
    n = function () {
      return Jt(t, ':hover');
    },
    r = function () {
      return Jt(e.scrollbarX, ':focus') || Jt(e.scrollbarY, ':focus');
    };
  function o(i, a) {
    var l = Math.floor(t.scrollTop);
    if (i === 0) {
      if (!e.scrollbarYActive) return !1;
      if ((l === 0 && a > 0) || (l >= e.contentHeight - e.containerHeight && a < 0)) return !e.settings.wheelPropagation;
    }
    var s = t.scrollLeft;
    if (a === 0) {
      if (!e.scrollbarXActive) return !1;
      if ((s === 0 && i < 0) || (s >= e.contentWidth - e.containerWidth && i > 0)) return !e.settings.wheelPropagation;
    }
    return !0;
  }
  e.event.bind(e.ownerDocument, 'keydown', function (i) {
    if (!((i.isDefaultPrevented && i.isDefaultPrevented()) || i.defaultPrevented) && !(!n() && !r())) {
      var a = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
      if (a) {
        if (a.tagName === 'IFRAME') a = a.contentDocument.activeElement;
        else for (; a.shadowRoot; ) a = a.shadowRoot.activeElement;
        if (b2(a)) return;
      }
      var l = 0,
        s = 0;
      switch (i.which) {
        case 37:
          i.metaKey ? (l = -e.contentWidth) : i.altKey ? (l = -e.containerWidth) : (l = -30);
          break;
        case 38:
          i.metaKey ? (s = e.contentHeight) : i.altKey ? (s = e.containerHeight) : (s = 30);
          break;
        case 39:
          i.metaKey ? (l = e.contentWidth) : i.altKey ? (l = e.containerWidth) : (l = 30);
          break;
        case 40:
          i.metaKey ? (s = -e.contentHeight) : i.altKey ? (s = -e.containerHeight) : (s = -30);
          break;
        case 32:
          i.shiftKey ? (s = e.containerHeight) : (s = -e.containerHeight);
          break;
        case 33:
          s = e.containerHeight;
          break;
        case 34:
          s = -e.containerHeight;
          break;
        case 36:
          s = e.contentHeight;
          break;
        case 35:
          s = -e.contentHeight;
          break;
        default:
          return;
      }
      (e.settings.suppressScrollX && l !== 0) ||
        (e.settings.suppressScrollY && s !== 0) ||
        ((t.scrollTop -= s), (t.scrollLeft += l), Mt(e), o(l, s) && i.preventDefault());
    }
  });
}
function I2(e) {
  var t = e.element;
  function n(a, l) {
    var s = Math.floor(t.scrollTop),
      u = t.scrollTop === 0,
      f = s + t.offsetHeight === t.scrollHeight,
      c = t.scrollLeft === 0,
      g = t.scrollLeft + t.offsetWidth === t.scrollWidth,
      w;
    return Math.abs(l) > Math.abs(a) ? (w = u || f) : (w = c || g), w ? !e.settings.wheelPropagation : !0;
  }
  function r(a) {
    var l = a.deltaX,
      s = -1 * a.deltaY;
    return (
      (typeof l > 'u' || typeof s > 'u') && ((l = (-1 * a.wheelDeltaX) / 6), (s = a.wheelDeltaY / 6)),
      a.deltaMode && a.deltaMode === 1 && ((l *= 10), (s *= 10)),
      l !== l && s !== s && ((l = 0), (s = a.wheelDelta)),
      a.shiftKey ? [-s, -l] : [l, s]
    );
  }
  function o(a, l, s) {
    if (!zn.isWebKit && t.querySelector('select:focus')) return !0;
    if (!t.contains(a)) return !1;
    for (var u = a; u && u !== t; ) {
      if (u.classList.contains(de.element.consuming)) return !0;
      var f = wt(u);
      if (s && f.overflowY.match(/(scroll|auto)/)) {
        var c = u.scrollHeight - u.clientHeight;
        if (c > 0 && ((u.scrollTop > 0 && s < 0) || (u.scrollTop < c && s > 0))) return !0;
      }
      if (l && f.overflowX.match(/(scroll|auto)/)) {
        var g = u.scrollWidth - u.clientWidth;
        if (g > 0 && ((u.scrollLeft > 0 && l < 0) || (u.scrollLeft < g && l > 0))) return !0;
      }
      u = u.parentNode;
    }
    return !1;
  }
  function i(a) {
    var l = r(a),
      s = l[0],
      u = l[1];
    if (!o(a.target, s, u)) {
      var f = !1;
      e.settings.useBothWheelAxes
        ? e.scrollbarYActive && !e.scrollbarXActive
          ? (u ? (t.scrollTop -= u * e.settings.wheelSpeed) : (t.scrollTop += s * e.settings.wheelSpeed), (f = !0))
          : e.scrollbarXActive &&
            !e.scrollbarYActive &&
            (s ? (t.scrollLeft += s * e.settings.wheelSpeed) : (t.scrollLeft -= u * e.settings.wheelSpeed), (f = !0))
        : ((t.scrollTop -= u * e.settings.wheelSpeed), (t.scrollLeft += s * e.settings.wheelSpeed)),
        Mt(e),
        (f = f || n(s, u)),
        f && !a.ctrlKey && (a.stopPropagation(), a.preventDefault());
    }
  }
  typeof window.onwheel < 'u' ? e.event.bind(t, 'wheel', i) : typeof window.onmousewheel < 'u' && e.event.bind(t, 'mousewheel', i);
}
function D2(e) {
  if (!zn.supportsTouch && !zn.supportsIePointer) return;
  var t = e.element,
    n = { startOffset: {}, startTime: 0, speed: {}, easingLoop: null };
  function r(c, g) {
    var w = Math.floor(t.scrollTop),
      x = t.scrollLeft,
      E = Math.abs(c),
      _ = Math.abs(g);
    if (_ > E) {
      if ((g < 0 && w === e.contentHeight - e.containerHeight) || (g > 0 && w === 0)) return window.scrollY === 0 && g > 0 && zn.isChrome;
    } else if (E > _ && ((c < 0 && x === e.contentWidth - e.containerWidth) || (c > 0 && x === 0))) return !0;
    return !0;
  }
  function o(c, g) {
    (t.scrollTop -= g), (t.scrollLeft -= c), Mt(e);
  }
  function i(c) {
    return c.targetTouches ? c.targetTouches[0] : c;
  }
  function a(c) {
    return c.target === e.scrollbarX || c.target === e.scrollbarY || (c.pointerType && c.pointerType === 'pen' && c.buttons === 0)
      ? !1
      : !!(
          (c.targetTouches && c.targetTouches.length === 1) ||
          (c.pointerType && c.pointerType !== 'mouse' && c.pointerType !== c.MSPOINTER_TYPE_MOUSE)
        );
  }
  function l(c) {
    if (a(c)) {
      var g = i(c);
      (n.startOffset.pageX = g.pageX),
        (n.startOffset.pageY = g.pageY),
        (n.startTime = new Date().getTime()),
        n.easingLoop !== null && clearInterval(n.easingLoop);
    }
  }
  function s(c, g, w) {
    if (!t.contains(c)) return !1;
    for (var x = c; x && x !== t; ) {
      if (x.classList.contains(de.element.consuming)) return !0;
      var E = wt(x);
      if (w && E.overflowY.match(/(scroll|auto)/)) {
        var _ = x.scrollHeight - x.clientHeight;
        if (_ > 0 && ((x.scrollTop > 0 && w < 0) || (x.scrollTop < _ && w > 0))) return !0;
      }
      if (g && E.overflowX.match(/(scroll|auto)/)) {
        var v = x.scrollWidth - x.clientWidth;
        if (v > 0 && ((x.scrollLeft > 0 && g < 0) || (x.scrollLeft < v && g > 0))) return !0;
      }
      x = x.parentNode;
    }
    return !1;
  }
  function u(c) {
    if (a(c)) {
      var g = i(c),
        w = { pageX: g.pageX, pageY: g.pageY },
        x = w.pageX - n.startOffset.pageX,
        E = w.pageY - n.startOffset.pageY;
      if (s(c.target, x, E)) return;
      o(x, E), (n.startOffset = w);
      var _ = new Date().getTime(),
        v = _ - n.startTime;
      v > 0 && ((n.speed.x = x / v), (n.speed.y = E / v), (n.startTime = _)), r(x, E) && c.cancelable && c.preventDefault();
    }
  }
  function f() {
    e.settings.swipeEasing &&
      (clearInterval(n.easingLoop),
      (n.easingLoop = setInterval(function () {
        if (e.isInitialized) {
          clearInterval(n.easingLoop);
          return;
        }
        if (!n.speed.x && !n.speed.y) {
          clearInterval(n.easingLoop);
          return;
        }
        if (Math.abs(n.speed.x) < 0.01 && Math.abs(n.speed.y) < 0.01) {
          clearInterval(n.easingLoop);
          return;
        }
        o(n.speed.x * 30, n.speed.y * 30), (n.speed.x *= 0.8), (n.speed.y *= 0.8);
      }, 10)));
  }
  zn.supportsTouch
    ? (e.event.bind(t, 'touchstart', l), e.event.bind(t, 'touchmove', u), e.event.bind(t, 'touchend', f))
    : zn.supportsIePointer &&
      (window.PointerEvent
        ? (e.event.bind(t, 'pointerdown', l), e.event.bind(t, 'pointermove', u), e.event.bind(t, 'pointerup', f))
        : window.MSPointerEvent &&
          (e.event.bind(t, 'MSPointerDown', l), e.event.bind(t, 'MSPointerMove', u), e.event.bind(t, 'MSPointerUp', f)));
}
var A2 = function () {
    return {
      handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    };
  },
  $2 = { 'click-rail': O2, 'drag-thumb': L2, keyboard: R2, wheel: I2, touch: D2 },
  Do = function (t, n) {
    var r = this;
    if ((n === void 0 && (n = {}), typeof t == 'string' && (t = document.querySelector(t)), !t || !t.nodeName))
      throw new Error('no element is specified to initialize PerfectScrollbar');
    (this.element = t), t.classList.add(de.main), (this.settings = A2());
    for (var o in n) this.settings[o] = n[o];
    (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
    var i = function () {
        return t.classList.add(de.state.focus);
      },
      a = function () {
        return t.classList.remove(de.state.focus);
      };
    (this.isRtl = wt(t).direction === 'rtl'),
      this.isRtl === !0 && t.classList.add(de.rtl),
      (this.isNegativeScroll = (function () {
        var u = t.scrollLeft,
          f = null;
        return (t.scrollLeft = -1), (f = t.scrollLeft < 0), (t.scrollLeft = u), f;
      })()),
      (this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0),
      (this.event = new Tr()),
      (this.ownerDocument = t.ownerDocument || document),
      (this.scrollbarXRail = oi(de.element.rail('x'))),
      t.appendChild(this.scrollbarXRail),
      (this.scrollbarX = oi(de.element.thumb('x'))),
      this.scrollbarXRail.appendChild(this.scrollbarX),
      this.scrollbarX.setAttribute('tabindex', 0),
      this.event.bind(this.scrollbarX, 'focus', i),
      this.event.bind(this.scrollbarX, 'blur', a),
      (this.scrollbarXActive = null),
      (this.scrollbarXWidth = null),
      (this.scrollbarXLeft = null);
    var l = wt(this.scrollbarXRail);
    (this.scrollbarXBottom = parseInt(l.bottom, 10)),
      isNaN(this.scrollbarXBottom)
        ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = re(l.top)))
        : (this.isScrollbarXUsingBottom = !0),
      (this.railBorderXWidth = re(l.borderLeftWidth) + re(l.borderRightWidth)),
      De(this.scrollbarXRail, { display: 'block' }),
      (this.railXMarginWidth = re(l.marginLeft) + re(l.marginRight)),
      De(this.scrollbarXRail, { display: '' }),
      (this.railXWidth = null),
      (this.railXRatio = null),
      (this.scrollbarYRail = oi(de.element.rail('y'))),
      t.appendChild(this.scrollbarYRail),
      (this.scrollbarY = oi(de.element.thumb('y'))),
      this.scrollbarYRail.appendChild(this.scrollbarY),
      this.scrollbarY.setAttribute('tabindex', 0),
      this.event.bind(this.scrollbarY, 'focus', i),
      this.event.bind(this.scrollbarY, 'blur', a),
      (this.scrollbarYActive = null),
      (this.scrollbarYHeight = null),
      (this.scrollbarYTop = null);
    var s = wt(this.scrollbarYRail);
    (this.scrollbarYRight = parseInt(s.right, 10)),
      isNaN(this.scrollbarYRight)
        ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = re(s.left)))
        : (this.isScrollbarYUsingRight = !0),
      (this.scrollbarYOuterWidth = this.isRtl ? P2(this.scrollbarY) : null),
      (this.railBorderYWidth = re(s.borderTopWidth) + re(s.borderBottomWidth)),
      De(this.scrollbarYRail, { display: 'block' }),
      (this.railYMarginHeight = re(s.marginTop) + re(s.marginBottom)),
      De(this.scrollbarYRail, { display: '' }),
      (this.railYHeight = null),
      (this.railYRatio = null),
      (this.reach = {
        x: t.scrollLeft <= 0 ? 'start' : t.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
        y: t.scrollTop <= 0 ? 'start' : t.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
      }),
      (this.isAlive = !0),
      this.settings.handlers.forEach(function (u) {
        return $2[u](r);
      }),
      (this.lastScrollTop = Math.floor(t.scrollTop)),
      (this.lastScrollLeft = t.scrollLeft),
      this.event.bind(this.element, 'scroll', function (u) {
        return r.onScroll(u);
      }),
      Mt(this);
  };
Do.prototype.update = function () {
  this.isAlive &&
    ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
    De(this.scrollbarXRail, { display: 'block' }),
    De(this.scrollbarYRail, { display: 'block' }),
    (this.railXMarginWidth = re(wt(this.scrollbarXRail).marginLeft) + re(wt(this.scrollbarXRail).marginRight)),
    (this.railYMarginHeight = re(wt(this.scrollbarYRail).marginTop) + re(wt(this.scrollbarYRail).marginBottom)),
    De(this.scrollbarXRail, { display: 'none' }),
    De(this.scrollbarYRail, { display: 'none' }),
    Mt(this),
    Ji(this, 'top', 0, !1, !0),
    Ji(this, 'left', 0, !1, !0),
    De(this.scrollbarXRail, { display: '' }),
    De(this.scrollbarYRail, { display: '' }));
};
Do.prototype.onScroll = function (t) {
  this.isAlive &&
    (Mt(this),
    Ji(this, 'top', this.element.scrollTop - this.lastScrollTop),
    Ji(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
    (this.lastScrollTop = Math.floor(this.element.scrollTop)),
    (this.lastScrollLeft = this.element.scrollLeft));
};
Do.prototype.destroy = function () {
  this.isAlive &&
    (this.event.unbindAll(),
    Jn(this.scrollbarX),
    Jn(this.scrollbarY),
    Jn(this.scrollbarXRail),
    Jn(this.scrollbarYRail),
    this.removePsClasses(),
    (this.element = null),
    (this.scrollbarX = null),
    (this.scrollbarY = null),
    (this.scrollbarXRail = null),
    (this.scrollbarYRail = null),
    (this.isAlive = !1));
};
Do.prototype.removePsClasses = function () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    })
    .join(' ');
};
const M2 = Object.freeze(Object.defineProperty({ __proto__: null, default: Do }, Symbol.toStringTag, { value: 'Module' })),
  z2 = $v(M2);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n =
      Object.assign ||
      function (_) {
        for (var v = 1; v < arguments.length; v++) {
          var d = arguments[v];
          for (var h in d) Object.prototype.hasOwnProperty.call(d, h) && (_[h] = d[h]);
        }
        return _;
      },
    r = (function () {
      function _(v, d) {
        for (var h = 0; h < d.length; h++) {
          var y = d[h];
          (y.enumerable = y.enumerable || !1), (y.configurable = !0), 'value' in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
        }
      }
      return function (v, d, h) {
        return d && _(v.prototype, d), h && _(v, h), v;
      };
    })(),
    o = m,
    i = u(o),
    a = bh,
    l = z2,
    s = u(l);
  function u(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function f(_, v) {
    var d = {};
    for (var h in _) v.indexOf(h) >= 0 || (Object.prototype.hasOwnProperty.call(_, h) && (d[h] = _[h]));
    return d;
  }
  function c(_, v) {
    if (!(_ instanceof v)) throw new TypeError('Cannot call a class as a function');
  }
  function g(_, v) {
    if (!_) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v && (typeof v == 'object' || typeof v == 'function') ? v : _;
  }
  function w(_, v) {
    if (typeof v != 'function' && v !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof v);
    (_.prototype = Object.create(v && v.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } })),
      v && (Object.setPrototypeOf ? Object.setPrototypeOf(_, v) : (_.__proto__ = v));
  }
  var x = {
    'ps-scroll-y': 'onScrollY',
    'ps-scroll-x': 'onScrollX',
    'ps-scroll-up': 'onScrollUp',
    'ps-scroll-down': 'onScrollDown',
    'ps-scroll-left': 'onScrollLeft',
    'ps-scroll-right': 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end': 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end': 'onXReachEnd'
  };
  Object.freeze(x);
  var E = (function (_) {
    w(v, _);
    function v(d) {
      c(this, v);
      var h = g(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, d));
      return (h.handleRef = h.handleRef.bind(h)), (h._handlerByEvent = {}), h;
    }
    return (
      r(v, [
        {
          key: 'componentDidMount',
          value: function () {
            this.props.option && console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'),
              (this._ps = new s.default(this._container, this.props.options || this.props.option)),
              this._updateEventHook(),
              this._updateClassName();
          }
        },
        {
          key: 'componentDidUpdate',
          value: function (h) {
            this._updateEventHook(h), this.updateScroll(), h.className !== this.props.className && this._updateClassName();
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var h = this;
            Object.keys(this._handlerByEvent).forEach(function (y) {
              var S = h._handlerByEvent[y];
              S && h._container.removeEventListener(y, S, !1);
            }),
              (this._handlerByEvent = {}),
              this._ps.destroy(),
              (this._ps = null);
          }
        },
        {
          key: '_updateEventHook',
          value: function () {
            var h = this,
              y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            Object.keys(x).forEach(function (S) {
              var T = h.props[x[S]],
                C = y[x[S]];
              if (T !== C) {
                if (C) {
                  var k = h._handlerByEvent[S];
                  h._container.removeEventListener(S, k, !1), (h._handlerByEvent[S] = null);
                }
                if (T) {
                  var L = function () {
                    return T(h._container);
                  };
                  h._container.addEventListener(S, L, !1), (h._handlerByEvent[S] = L);
                }
              }
            });
          }
        },
        {
          key: '_updateClassName',
          value: function () {
            var h = this.props.className,
              y = this._container.className
                .split(' ')
                .filter(function (S) {
                  return S.match(/^ps([-_].+|)$/);
                })
                .join(' ');
            this._container && (this._container.className = 'scrollbar-container' + (h ? ' ' + h : '') + (y ? ' ' + y : ''));
          }
        },
        {
          key: 'updateScroll',
          value: function () {
            this.props.onSync(this._ps);
          }
        },
        {
          key: 'handleRef',
          value: function (h) {
            (this._container = h), this.props.containerRef(h);
          }
        },
        {
          key: 'render',
          value: function () {
            var h = this.props;
            h.className;
            var y = h.style;
            h.option,
              h.options,
              h.containerRef,
              h.onScrollY,
              h.onScrollX,
              h.onScrollUp,
              h.onScrollDown,
              h.onScrollLeft,
              h.onScrollRight,
              h.onYReachStart,
              h.onYReachEnd,
              h.onXReachStart,
              h.onXReachEnd;
            var S = h.component;
            h.onSync;
            var T = h.children,
              C = f(h, [
                'className',
                'style',
                'option',
                'options',
                'containerRef',
                'onScrollY',
                'onScrollX',
                'onScrollUp',
                'onScrollDown',
                'onScrollLeft',
                'onScrollRight',
                'onYReachStart',
                'onYReachEnd',
                'onXReachStart',
                'onXReachEnd',
                'component',
                'onSync',
                'children'
              ]),
              k = S;
            return i.default.createElement(k, n({ style: y, ref: this.handleRef }, C), T);
          }
        }
      ]),
      v
    );
  })(o.Component);
  (t.default = E),
    (E.defaultProps = {
      className: '',
      style: void 0,
      option: void 0,
      options: void 0,
      containerRef: function () {},
      onScrollY: void 0,
      onScrollX: void 0,
      onScrollUp: void 0,
      onScrollDown: void 0,
      onScrollLeft: void 0,
      onScrollRight: void 0,
      onYReachStart: void 0,
      onYReachEnd: void 0,
      onXReachStart: void 0,
      onXReachEnd: void 0,
      onSync: function (v) {
        return v.update();
      },
      component: 'div'
    }),
    (E.propTypes = {
      children: a.PropTypes.node.isRequired,
      className: a.PropTypes.string,
      style: a.PropTypes.object,
      option: a.PropTypes.object,
      options: a.PropTypes.object,
      containerRef: a.PropTypes.func,
      onScrollY: a.PropTypes.func,
      onScrollX: a.PropTypes.func,
      onScrollUp: a.PropTypes.func,
      onScrollDown: a.PropTypes.func,
      onScrollLeft: a.PropTypes.func,
      onScrollRight: a.PropTypes.func,
      onYReachStart: a.PropTypes.func,
      onYReachEnd: a.PropTypes.func,
      onXReachStart: a.PropTypes.func,
      onXReachEnd: a.PropTypes.func,
      onSync: a.PropTypes.func,
      component: a.PropTypes.string
    }),
    (e.exports = t.default);
})(ks, ks.exports);
var F2 = ks.exports;
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = F2,
    r = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  (t.default = r.default), (e.exports = t.default);
})(Ts, Ts.exports);
var B2 = Ts.exports;
const lv = Dn(B2);
var sv = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  ld = O.createContext && O.createContext(sv),
  H2 = ['attr', 'size', 'title'];
function W2(e, t) {
  if (e == null) return {};
  var n = U2(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function U2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zi.apply(this, arguments)
  );
}
function sd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(n), !0).forEach(function (r) {
          V2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function V2(e, t, n) {
  return (t = X2(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function X2(e) {
  var t = Y2(e, 'string');
  return typeof t == 'symbol' ? t : t + '';
}
function Y2(e, t) {
  if (typeof e != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function uv(e) {
  return e && e.map((t, n) => O.createElement(t.tag, ea({ key: n }, t.attr), uv(t.child)));
}
function Le(e) {
  return (t) => O.createElement(K2, Zi({ attr: ea({}, e.attr) }, t), uv(e.child));
}
function K2(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      a = W2(e, H2),
      l = o || n.size || '1em',
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      O.createElement(
        'svg',
        Zi({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, r, a, {
          className: s,
          style: ea(ea({ color: e.color || n.color }, n.style), e.style),
          height: l,
          width: l,
          xmlns: 'http://www.w3.org/2000/svg'
        }),
        i && O.createElement('title', null, i),
        e.children
      )
    );
  };
  return ld !== void 0 ? O.createElement(ld.Consumer, null, (n) => t(n)) : t(sv);
}
function dE(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    child: [{ tag: 'polyline', attr: { points: '20 6 9 17 4 12' }, child: [] }]
  })(e);
}
function pE(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    child: [
      { tag: 'path', attr: { d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' }, child: [] },
      { tag: 'path', attr: { d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' }, child: [] }
    ]
  })(e);
}
function cv(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    child: [
      { tag: 'path', attr: { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }, child: [] },
      { tag: 'polyline', attr: { points: '9 22 9 12 15 12 15 22' }, child: [] }
    ]
  })(e);
}
function G2(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    child: [
      { tag: 'path', attr: { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }, child: [] },
      { tag: 'circle', attr: { cx: '8.5', cy: '7', r: '4' }, child: [] },
      { tag: 'polyline', attr: { points: '17 11 19 13 23 9' }, child: [] }
    ]
  })(e);
}
function fv(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    child: [
      { tag: 'rect', attr: { width: '16', height: '20', x: '4', y: '2', rx: '2', ry: '2' }, child: [] },
      { tag: 'path', attr: { d: 'M9 22v-4h6v4' }, child: [] },
      { tag: 'path', attr: { d: 'M8 6h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M16 6h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M12 6h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M12 10h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M12 14h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M16 10h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M16 14h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M8 10h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M8 14h.01' }, child: [] }
    ]
  })(e);
}
function Q2(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M5.99805 2C5.99805 2.51284 6.48805 3 6.99805 3H16.998C17.5109 3 17.998 2.51 17.998 2H19.998C19.998 3.65685 18.6549 5 16.998 5H12.998L12.999 7.06201C16.9449 7.55453 19.998 10.9207 19.998 15V21C19.998 21.5523 19.5503 22 18.998 22H4.99805C4.44576 22 3.99805 21.5523 3.99805 21V15C3.99805 10.9204 7.05176 7.55396 10.9981 7.06189L10.998 5H6.99805C5.33805 5 3.99805 3.66 3.99805 2H5.99805ZM11.998 9C8.75965 9 5.99805 11.76 5.99805 15V20H17.998V15C17.998 11.7616 15.2364 9 11.998 9ZM11.998 11C12.7399 11 13.4345 11.2019 14.03 11.5538L11.2909 14.2929C10.9004 14.6834 10.9004 15.3166 11.2909 15.7071C11.6514 16.0676 12.2187 16.0953 12.6109 15.7903L12.7052 15.7071L15.4442 12.968C15.7961 13.5635 15.998 14.2582 15.998 15C15.998 17.2091 14.2072 19 11.998 19C9.78891 19 7.99805 17.2091 7.99805 15C7.99805 12.7909 9.78891 11 11.998 11Z'
        },
        child: []
      }
    ]
  })(e);
}
function hE(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z'
        },
        child: []
      }
    ]
  })(e);
}
function mE(e) {
  return Le({
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z'
        },
        child: []
      }
    ]
  })(e);
}
const q2 = { 'lu icon-building': fv, 'Bs icon-home': cv, 'fi user-check': G2, 'ri scales-2line': Q2 },
  ta = ({ items: e }) => {
    let t = null;
    if (e.icon) {
      const n = q2[e.icon];
      n
        ? (t = p.jsx('span', { className: 'pcoded-micon', children: p.jsx(n, { size: 26, title: e.title }) }))
        : (t = p.jsx('span', { className: 'pcoded-micon', children: p.jsx('i', { className: e.icon }) }));
    }
    return p.jsx(O.Fragment, { children: t });
  };
ta.propTypes = { items: j.object, icon: j.string };
const na = ({ items: e }) => {
  let t = !1;
  if (e.badge) {
    const n = ['label', 'pcoded-badge', e.badge.type];
    t = p.jsx('span', { className: n.join(' '), children: e.badge.title });
  }
  return p.jsx(O.Fragment, { children: t });
};
na.propTypes = { items: j.object, badge: j.string, type: j.string, title: j.string };
const qu = ({ item: e }) => {
  const t = mn(),
    n = m.useContext(qe),
    { dispatch: r } = n;
  let o = e.title;
  e.icon && (o = p.jsx('span', { className: 'pcoded-mtext', children: e.title }));
  let i = '';
  e.target && (i = '_blank');
  let a;
  e.external
    ? (a = p.jsxs('a', {
        href: e.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        children: [p.jsx(ta, { items: e }), o, p.jsx(na, { items: e })]
      }))
    : (a = p.jsxs(Bh, { to: e.url, className: 'nav-link', target: i, children: [p.jsx(ta, { items: e }), o, p.jsx(na, { items: e })] }));
  let l = '';
  return (
    t.width < 992
      ? (l = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: e.classes, onClick: () => r({ type: Xe }), children: a }))
      : (l = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: e.classes, children: a })),
    p.jsx(O.Fragment, { children: l })
  );
};
qu.propTypes = { item: j.object, title: j.string, icon: j.string, target: j.string, external: j.bool, url: j.string, classes: j.string };
const Ju = ({ collapse: e, type: t }) => {
  const n = m.useContext(qe),
    { dispatch: r } = n,
    o = mt(),
    { layout: i, isOpen: a, isTrigger: l } = n.state;
  m.useEffect(() => {
    o.pathname
      .toString()
      .split('/')
      .findIndex((d) => d === e.id) > -1 && r({ type: vo, menu: { id: e.id, type: t } });
  }, [e, r, t]);
  let s = '';
  if (e.children) {
    const v = e.children;
    s = Object.keys(v).map((d) => {
      switch (((d = v[d]), d.type)) {
        case 'collapse':
          return p.jsx(Ju, { collapse: d, type: 'sub' }, d.id);
        case 'item':
          return p.jsx(qu, { layout: i, item: d }, d.id);
        default:
          return !1;
      }
    });
  }
  let u = e.title;
  e.icon && (u = p.jsx('span', { className: 'pcoded-mtext', children: e.title }));
  let f = ['nav-link'],
    c = ['nav-item', 'pcoded-hasmenu'];
  a.findIndex((v) => v === e.id) > -1 && (c = [...c, 'active']),
    l.findIndex((v) => v === e.id) > -1 && (c = [...c, 'pcoded-trigger']),
    o.pathname
      .toString()
      .split('/')
      .findIndex((v) => v === e.id) > -1 && (c = [...c, 'active']);
  const E = p.jsxs(O.Fragment, {
    children: [
      p.jsxs(H, {
        to: '#',
        className: f.join(' '),
        onClick: () => r({ type: vo, menu: { id: e.id, type: t } }),
        children: [p.jsx(ta, { items: e }), u, p.jsx(na, { items: e })]
      }),
      p.jsx(W, { variant: 'flush', bsPrefix: ' ', as: 'ul', className: 'pcoded-submenu', children: s })
    ]
  });
  let _ = '';
  return (_ = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: c.join(' '), children: E })), p.jsx(O.Fragment, { children: _ });
};
Ju.propTypes = { collapse: j.object, type: j.string, id: j.number, children: j.node, title: j.string, icon: j.string };
const dv = ({ layout: e, group: t }) => {
  let n = '';
  if (t.children) {
    const r = t.children;
    n = Object.keys(r).map((o) => {
      switch (((o = r[o]), o.type)) {
        case 'collapse':
          return p.jsx(Ju, { collapse: o, type: 'main' }, o.id);
        case 'item':
          return p.jsx(qu, { layout: e, item: o }, o.id);
        default:
          return !1;
      }
    });
  }
  return p.jsxs(O.Fragment, {
    children: [
      p.jsx(
        W.Item,
        { as: 'li', bsPrefix: ' ', className: 'nav-item pcoded-menu-caption', children: p.jsx('label', { children: t.title }) },
        t.id
      ),
      n
    ]
  });
};
dv.propTypes = { layout: j.string, group: j.object, id: j.number, children: j.node, title: j.string };
const pv = ({ navigation: e }) => {
  if (!e || !Array.isArray(e) || e.length === 0) return p.jsx('p', { className: 'text-center mt-3', children: 'No menus available.' });
  const t = e.map((n) => (n.type === 'group' ? p.jsx(dv, { group: n }, 'nav-group-' + n.id) : null));
  return p.jsx('div', {
    className: 'navbar-content datta-scroll',
    children: p.jsx(lv, {
      children: p.jsx(W, {
        variant: 'flush',
        as: 'ul',
        bsPrefix: ' ',
        className: 'nav pcoded-inner-navbar',
        id: 'nav-ps-next',
        children: t
      })
    })
  });
};
pv.propTypes = { navigation: j.array };
const J2 = () => {
    const e = m.useContext(qe),
      { collapseMenu: t } = e.state,
      n = mn(),
      { menuItems: r, loading: o } = qh();
    let i = ['pcoded-navbar'];
    return (
      n.width < 992 && t ? i.push('mob-open') : t && i.push('navbar-collapsed'),
      p.jsx('nav', {
        className: i.join(' '),
        children: p.jsxs('div', {
          className: 'navbar-wrapper',
          children: [p.jsx(Z1, {}), o ? p.jsx('p', { children: 'Loading menus...' }) : p.jsx(pv, { navigation: r.items || [] })]
        })
      })
    );
  },
  hv = (e) => {
    const { windowWidth: t } = e,
      [n, r] = m.useState(t < 600),
      [o, i] = m.useState(t < 600 ? '100px' : ''),
      a = () => {
        t < 600 && document.querySelector('#navbar-right').classList.add('d-none'), r(!0), i('100px');
      },
      l = () => {
        r(!1),
          i(0),
          setTimeout(() => {
            t < 600 && document.querySelector('#navbar-right').classList.remove('d-none');
          }, 500);
      };
    let s = ['main-search'];
    return (
      n && (s = [...s, 'open']),
      p.jsx(O.Fragment, {
        children: p.jsx('div', {
          id: 'main-search',
          className: s.join(' '),
          children: p.jsxs('div', {
            className: 'input-group',
            children: [
              p.jsx('input', { type: 'text', id: 'm-search', className: 'form-control', placeholder: 'Search . . .', style: { width: o } }),
              p.jsx(H, {
                to: '#',
                className: 'input-group-append search-close',
                onClick: l,
                children: p.jsx('i', { className: 'feather icon-x input-group-text' })
              }),
              p.jsx('span', {
                onKeyDown: a,
                role: 'button',
                tabIndex: '0',
                className: 'input-group-append search-btn btn btn-primary',
                onClick: a,
                style: { borderRadius: '50%', marginLeft: 5 },
                children: p.jsx('i', { className: 'feather icon-search input-group-text' })
              })
            ]
          })
        })
      })
    );
  };
hv.propTypes = { windowWidth: j.number };
const Z2 = () => {
  const e = mn();
  let t = ['nav-item'];
  return (
    e.width <= 575 && (t = [...t, 'd-none']),
    p.jsx(O.Fragment, {
      children: p.jsxs(W, {
        as: 'ul',
        bsPrefix: ' ',
        className: 'navbar-nav mr-auto',
        children: [
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            className: t.join(' '),
            children: p.jsxs(ge, {
              align: 'start',
              children: [
                p.jsx(ge.Toggle, { variant: 'link', id: 'dropdown-basic', children: 'Dropdown' }),
                p.jsx('ul', {
                  children: p.jsxs(ge.Menu, {
                    children: [
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Action' }) }),
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Another action' }) }),
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Something else here' }) })
                    ]
                  })
                })
              ]
            })
          }),
          p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: 'nav-item', children: p.jsx(hv, { windowWidth: e.width }) })
        ]
      })
    })
  );
};
j.object, j.number, j.func, j.string, j.number, j.string, j.string, j.string, j.string;
j.object, j.string, j.string, j.string, j.string, j.string;
j.oneOfType([j.array, j.object]), j.bool, j.bool, j.number, j.func, j.string;
j.bool;
j.bool, j.func;
const mv =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAACZmZnn5+fLy8vq6uqHh4ezs7Nra2vExMTf39+MjIzt7e2/v79JSUmDg4M8PDzU1NRiYmL39/d0dHTOzs6ioqIODg4zMzNnZ2dxcXGurq7y8vLj4+NZWVmnp6dPT08nJycaGhouLi6Tk5N7e3tCQkIVFRU+Pj5UVFQoKCgZGRmfBgzTAAAN00lEQVR4nNVda0PqPAyWcRkDBow7ouBUUN/z///f60SOsCRtkmab5/morG22Nvekd3fVo52lu6i32H6MT5vNy2ZzGn9sF73okGbtGmavFN1kdRy33BgfV0m36YVqMEqHTx7arvE0TEdNL1mAbny/FlB3wfo+/ic+Zqf3rKDugudep2kC3Ej7AdRd0E+bJoNCYkHeN5FJ08RADCZm5J0xGTRN0g3iqTF9BaZx02Rd8DCsgLwzhg9NE/eJ9qIy+gosmlZ7BrNK6Sswa/JAPu4rp++LxseG6BvZSQcf+o2odL3a6CvQq52+uFb6CtQrOwY6+bfOX6bv05f8TfX0tEaWI9NfNtvhIcm685sh5t0s2Q37G9FIk5roW/KXNIsSnzxrJ5FA4izrIJAp4fOJwKYdpZOcN+yxQsrOyFi2bT+Wq1sPMUv6rCs+jRFjDRP9VlpyTnhkSE8Zc59bqdW6D7XRO/feOcZz/zA6ZL6pNzuTeXZeDpuZzAOw8n0+u3kz34dcmU11BQ8fMDblfEZn33S2AnO3FlPF6XdztanxYezWTl8BN42mzlUnj6lS7XcaMIb8JnVMs6/WdBu5jGwzx+qOnuNP9S7qjsMSsZFOdwd6hlebGTx4pRdwsBifFoPTuvxgbZqRGwhGmsAq9cMyaK4aTCK5RZ/rdYANyIhW4EYlmcy9zcIFIBW5IAcOKSaaCCmQzq8AoUEJ+nUzLtpHyvpWi35KVRtbLlsEyj5VKnBzYrjqXSU0KCeRTg0nhFAlphkbhNiYasYi7MGmg+wE81PYi4Skbz5VomO0tQg2WpGDRASbpRFc5ndkDwzwxcm4Dc6WfweBFIkiIYZzrN+wRc/AN6rAFMAHaJ7J/ABnN/w9hmpHTYuJW6BK6pr7NKo4NCvoIdCDxFS30Phgk6oaDvQ78IJC2JPNKds0UH7PeRALcLE3eK3A2AXDeYvKGhN7cD7oxIdVtDrEnYGJS/4RW6qfn2IWRbhFvwTB+lkUHpPHGKrXysAeCvTJzGPKb72PA78l5rvxfQ7kkeegRXTcmRazMD0C88C5n8AiISGHMM6d9BXIQ84AxjWGrgdGyAMBjt+Ul/z0FqAuYYLfFStC7HqVf+ALjycWfQXe9fsEifk77H2M/apjE454CgJ1jKeNDEa/L4QpaGceyTLWWq2NNg6JvMkZ9Vvk2P5RTpsI6SugrbFADjsl9pFPqOTlnNQpCCVPQ2xF4iMiO3qvm/OoIlBtwCAKBc49EHNEdzb8eVsUdNoTEn1YYL97gL/TZVmEFGCgK/MCMYew/CUkCUk1XVgFjVMhoYD4PrFx4K9UJ9+RuMGCSodDOBv8EWJUaOYivLUCqJyynDcF7ULVJ3Stff8ad7Is68RDZ62NZlr4EYG2ibx7zUxbct2vt/7kjFbqtpqJ4TDlvQDZkebMU6rMFNNXEipLRqPcQP5WLl2A82jyRfEVr6klJ0RgXjEzIutKc4H/a4QvLihcdSB45rpm+0DD7/a9wvOjCMMg77HlU23xAIRi/8BYy62ZCP69kc+Bq6O+NAk04UOjoEJz7fq/MDiuyGvEPuHa70xDg7GKjwhVjWvnCNzE8hnQU8hZKfZmNCcRDNJ3/VPDZ5CF8vQTTA9SzA9Nmp//weOusHyRNBBu2iCSAKlwv7mogF5S+fiIHcoPWMEwEulqcQAM8mP9Ac+xppQRfgd+thnCUBUrAML1r7cejq8ImsBNKnlNUPKbbNPLO4aGk3x0RBhKOD7kpybb6GJCASakKSrKwwYB8ipXrAEMcnGKAP1XYWdDuS3b6TB5QBF4A5vxO3YNwzEKjQKuUDgAeF6hGENKzs5CwCM0GwToTFLVEpxjTT1MXh7kzK+AtqU55ECkSnc62GEaVyZgyWftD/RV04TzgPkljZeBuJfGmQG249PXn8t/VXm6QaxQPEJ5gJNiFVCy03+VAqhF4hHKA6jSBwAthcwHDgyNSgiGllvQwILVLAOEzwrlGyR0m/hJ5WliQPvWLAP4TYuEQ8CmVZHK8iDyU2RCIdiQR2xkVeS+PEhDuxTEQMfI2nQRpzx4lPIAGr0Dpyb87RcI32PY25fjBa4DfFdV2ACq9dIQEnDW6LomAM2jCz2pqhglVP2kaiXQ2ozWkUFFR1d1CjRvqbcOGKm6dDfg1Erh0nRpLdCpLhwAPK+r7gAfbAdlpLJuBKxQ9qagj0W3DPCmI2j2KOsxgTiT5eIAdUvH0iHj7MHcEGXaLvS5Sl4VVP+V/USAN+UI2atuZGSbSdg9DJxoc4fL42zvPowoZETSaRhlEWDL2ANlRF1aAT8D/yjB2J+6S1LZcTgGxrlOHbxDsxS4yalIXoa63XVeGugEXt+LdmgsusY7TFikW72KsmI6BRTq87qxpFKOPwrLvdanz8MvVqb5XT02Gq72G5tYorZWZH3ivTTSxvAb4m2rfCoSWq8a0FyrTM8GfEP9OSQKwN1GBp7KGFAsVKZnY8dL76guBTN6vXO8ZCikXjUvjXUC8vAtYHS0DKlFG2REA6OgQisoD810mgJk5zqMRrJBU1BVfHmwvZleegadpd9Przfr3HHXR1jJcXm0rZlt8Y2cXPjnEb9/3aVpuovunb8Kmh9wu4WZffgNdwtJDozn75nZ+Bdo6oGuEXj/CmLjG/lpfuBoQshAaJtA8IJ3mOsmELKyvFsEN2JEfG1G/tJr6GtKKpg7g4qvQYdeXemaSSdGIPzaVnGLW+juhrBo5IfELYxiTyVoSmdMOhhh1NjEDwGANujBh0kjCTR+aBMDhpCVeBn1y0VjwDZxfAQPdIlQGVurdudoHN8mFwNF5r9poMDYrsUWsDeLDWmTT0Ng6b/I8sny3hEwehf9q2mH7kf3lRUT01aoMDnx688meW0udCir8WjdII3IazPJTfSgHU9uHUKnY1xBr2wiN9Ekv5SD+WCZpHGaLG2aKCHI8e1okiP8K0DlCJvkef8KUHneNrn6HowGnXS3iobD3nAYrQ5pZ1DBnQpkrr5JvQWFUedwfMKrYddPx1XHklAww2UzmtTMYFhGnCsg95GR0ID1An+9WiZ1TyVkEb+J0qfweDXQ3Oi6J5vatWukmvYm96GaBhjxJ4RlUn/4FwF3Owfd5eykAr5P7TTt0MuBh2pVx1nqa1IH/InEb0r48aT8kGCga6FnUst9twu5N/4az6rZwTA35xr8V+5xC/N1lyH3fbvr8ZFtKuTeoY13IITf0ddTIbAvRmK1P6/xLJIevr4YQb1NHnnuGDnGfAeAt7dJSH+aKi93ZqedQCFVflSdHbhkXb2qB1NFhg8CF7qyT1RIczYeWC3cGH2idL2+vDeTmoDB1uFDiBUPf+T9iPxYaD6bRHGSDR7b7fYgy5I4msz+Yz/tjZuy+rXJe+4x7s4tsH9NKVWznb5yDEjv/bhIuhn2UqR9EzkBtNnBHzIbHDj3cjvHYfZNFPa+9AdBBf5e0mf8A4d3jNv7Uta/1GckbaUWZsdnVdLymd2/VNKD1r2ct5XG5Ttf/XG/NOI5fg9a7GQRmYpOM/CkN9QTp2+HqEgU9BFm94J29Xl+CnMpZa6Xh5p0kl7Q3H7eDkE2DXeZZeVM7Sv8B38u6+fN68nuINAmLue4fhiSKOvJzuqrDzJW/iI8o+kCmlOX09ClffVRS+j22JIX15renUvfj3u7pzC1w2NxIU/cpF2TaTLWtyWRt/R+XP8Ku3zBM7DnjhLKWMrtbyZ9zIm5rpajuaPEfc8MlZJXzd25VGjgL2dQ3TPjvCuIyv81SmgCoBx43yoFelcQYzPR9z2hFUqtKu/UoyzsM1NT3vfkuLMLdxk+Vxn1f8jROb+USfWdXfi9awtUp2uF1LrxgGuqs6B71/CykANuEH74hwsELp9iVJqwi1H4DkLlBRgi8BwdBfg1zOwM3zoIFJAoyDJmpqLXdWcgMyopSoxludEsct55ILVU/fumbh2/BqOTtRk4nEG4HIY3O6wESwbMrCtBrHeQuv0F9V6eiwrpayhsG493zyrfnQsP81Ol4jmPdz1y4hpOmaGrsXdyG+Plc+BajpLpOepBm7ii28H81EyPHLOZ+4/JrP+A90369ZrIIiZjQUFlTGSaTDV+CxfIdMfAt01mOv0xKaZjY0BeaRpaOeyQ/HVKRFoaGngxaRI3FdSEoGjToSATN60jJS+49JoFR0JE8BY9wxHQfqteO+04LhU2Y+mOYFBrX62J0XUpa0bVrgWcttSkOjtx7iztM1Ws3A09quKqbnvCePPM3Y6EKmh00ze13zkee3Fo6/p+8KSzVFCa5bf6+3bnIvMl11hHKy/zeqZtbWyCUDvvnd6VGW+MXL37UAHpzY3y5vGFgeMqnuiJXLoLv8+oWB8esGIa/VheVjiKWfVS6+ptGua14vkk5QusUTrJecPW4l3wui5/MIsSn/3RTiJOfuk3LPsvuCCrP3jZDg9p1r5lD/NulhyGWzr9CENAS0wpBqxQCcA6f9m8b15yXQHD1D6jxQVdn6QQ1O/8Ci2llKHGDfqDkb4aVop+BcX7LDwKuGAAZvUewFsMqqdxVq/bEqJdbeXToi5/ngs+Uy4Ar7+my0qsk49uTH9Xi5UBxyqQoNf08UMQ0EuhjKDeCpXC0f9YQJ51Jy5jdHohdd3PvXpTPJToxguNbr1exHWm6IRilA4lPTKehmlTilkQup3V0ee8Gh9Xyb/06VB0s3QX9Y7b/fg0fdlsNqfxfrvoRbtPs7iG2f8HF5GqZuQxdX0AAAAASUVORK5CYII=',
  Wt = 'https://apiav2-jlp2nagalq-as.a.run.app/api',
  vE = async () => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const t = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(Wt + '/users', t)).json();
  },
  vv = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = { method: 'GET', headers: t, redirect: 'follow' };
    return await (await fetch(Wt + '/users/' + e, n)).json();
  },
  gE = async (e, t) => {
    const n = new Headers();
    n.append('Content-Type', 'application/json');
    const r = JSON.stringify(e),
      o = { method: 'PUT', headers: n, body: r, redirect: 'follow' };
    try {
      const i = await fetch(Wt + '/users/' + t, o);
      if (!i.ok) {
        const a = await i.json();
        throw new Error(a.message || `HTTP Error: ${i.status}`);
      }
      return await i.json();
    } catch (i) {
      throw i;
    }
  },
  yE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = { method: 'DELETE', headers: t, redirect: 'follow' };
    return await (await fetch(Wt + '/users/' + e, n)).json();
  },
  wE = async (e, t) => {
    const n = new Headers();
    n.append('Content-Type', 'application/json');
    const r = JSON.stringify(e),
      o = { method: 'PUT', headers: n, body: r, redirect: 'follow' };
    try {
      const i = await fetch(Wt + '/users/approve/' + t, o);
      if (!i.ok) {
        const a = await i.json();
        throw new Error(a.message || `HTTP Error: ${i.status}`);
      }
      return await i.json();
    } catch (i) {
      throw i;
    }
  },
  xE = async () => {
    const e = new Headers();
    e.append('Content-Type', 'application/json');
    const t = { method: 'GET', headers: e, redirect: 'follow' };
    return await (await fetch(Wt + '/user-customer-links', t)).json();
  },
  _E = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = { method: 'GET', headers: t, redirect: 'follow' };
    return await (await fetch(Wt + '/user-customer-links/' + e, n)).json();
  },
  EE = async (e) => {
    const t = new Headers();
    t.append('Content-Type', 'application/json');
    const n = JSON.stringify(e),
      r = { method: 'POST', headers: t, body: n, redirect: 'follow' };
    try {
      const o = await fetch(Wt + '/user-customer-links', r);
      if (!o.ok) {
        const i = await o.json();
        throw new Error(i.message || `HTTP Error: ${o.status}`);
      }
      return await o.json();
    } catch (o) {
      throw o;
    }
  },
  SE = async (e, t) => {
    const n = new Headers();
    n.append('Content-Type', 'application/json');
    const r = JSON.stringify(e),
      o = { method: 'PUT', headers: n, body: r, redirect: 'follow' };
    try {
      const i = await fetch(Wt + '/user-customer-links/' + t, o);
      if (!i.ok) {
        const a = await i.json();
        throw new Error(a.message || `HTTP Error: ${i.status}`);
      }
      return await i.json();
    } catch (i) {
      throw i;
    }
  },
  e_ = () => {
    const [e, t] = m.useState(!1),
      [n, r] = m.useState([]);
    m.useEffect(() => {
      const i = localStorage.getItem('authToken');
      i &&
        Du(i).then((a) => {
          vv(a.user.user_id).then((l) => {
            r(l);
          });
        });
    }, []);
    const o = () => {
      localStorage.clear(), (window.location.href = '/login');
    };
    return p.jsx(O.Fragment, {
      children: p.jsxs(W, {
        as: 'ul',
        bsPrefix: ' ',
        className: 'navbar-nav ml-auto',
        id: 'navbar-right',
        children: [
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            children: p.jsxs(ge, {
              align: 'end',
              children: [
                p.jsx(ge.Toggle, {
                  as: H,
                  variant: 'link',
                  to: '#',
                  id: 'dropdown-basic',
                  children: p.jsx('i', { className: 'feather icon-bell icon' })
                }),
                p.jsx(ge.Menu, { align: 'end', className: 'notification notification-scroll' })
              ]
            })
          }),
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            children: p.jsxs(ge, {
              align: 'end',
              className: 'drp-user',
              children: [
                p.jsx(ge.Toggle, {
                  as: H,
                  variant: 'link',
                  to: '#',
                  id: 'dropdown-basic',
                  children: p.jsx('i', { className: 'icon feather icon-settings' })
                }),
                p.jsx(ge.Menu, {
                  align: 'end',
                  className: 'profile-notification',
                  children: p.jsxs('div', {
                    className: 'pro-head',
                    children: [
                      p.jsx('img', { src: mv, className: 'img-radius', alt: 'User Profile' }),
                      p.jsx('span', { children: n.first_name + ' ' + n.last_name }),
                      p.jsx(H, {
                        onClick: () => {
                          o();
                        },
                        className: 'dud-logout',
                        title: 'Logout',
                        children: p.jsx('i', { className: 'feather icon-log-out' })
                      })
                    ]
                  })
                })
              ]
            })
          })
        ]
      })
    });
  },
  t_ = () => {
    const [e, t] = m.useState(!1),
      n = m.useContext(qe),
      { collapseMenu: r, headerFixedLayout: o, layout: i } = n.state,
      { dispatch: a } = n;
    let l = ['navbar', 'pcoded-header', 'navbar-expand-lg'];
    o && i === 'vertical' && (l = [...l, 'headerpos-fixed']);
    let s = ['mobile-menu'];
    r && (s = [...s, 'on']);
    const u = () => {
      a({ type: Xe });
    };
    let f = ['mob-toggler'],
      c = ['collapse navbar-collapse'];
    e && ((f = [...f, 'on']), (c = [...c, 'show']));
    let g = p.jsxs(O.Fragment, {
      children: [
        p.jsxs('div', {
          className: 'm-header',
          children: [
            p.jsx(H, { to: '#', className: s.join(' '), id: 'mobile-collapse', onClick: u, children: p.jsx('span', {}) }),
            p.jsxs(H, {
              to: '#',
              className: 'b-brand',
              children: [
                p.jsx('div', { className: 'b-bg', children: p.jsx('i', { className: 'feather icon-trending-up' }) }),
                p.jsx('span', { className: 'b-title', children: 'Datta Able' })
              ]
            }),
            p.jsx(H, {
              to: '#',
              className: f.join(' '),
              onClick: () => t(!e),
              children: p.jsx('i', { className: 'feather icon-more-vertical' })
            })
          ]
        }),
        p.jsxs('div', { style: { justifyContent: 'space-between' }, className: c.join(' '), children: [p.jsx(Z2, {}), p.jsx(e_, {})] })
      ]
    });
    return p.jsx(O.Fragment, { children: p.jsx('header', { className: l.join(' '), children: g }) });
  },
  n_ = () => {
    const e = mt(),
      { menuItems: t, loading: n } = qh(),
      [r, o] = m.useState(null),
      [i, a] = m.useState(null);
    m.useEffect(() => {
      !t ||
        t.items.length === 0 ||
        t.items.forEach((s) => {
          s.type === 'group' && l(s);
        });
    }, [t, e.pathname]);
    const l = (s) => {
      s.children &&
        s.children.forEach((u) => {
          u.type === 'collapse' ? l(u) : u.type === 'item' && u.url === e.pathname && (o(s), a(u));
        });
    };
    return (
      m.useEffect(() => {
        i && (document.title = `${i.title} ${Ph}`);
      }, [i]),
      n
        ? p.jsx('p', { className: 'text-center mt-3', children: 'Loading Breadcrumb...' })
        : p.jsx('div', {
            className: 'page-header',
            children: p.jsx('div', {
              className: 'page-block',
              children: p.jsx('div', {
                className: 'row align-items-center',
                children: p.jsxs('div', {
                  className: 'col-md-12',
                  children: [
                    p.jsx('div', {
                      className: 'page-header-title',
                      children: p.jsx('h5', { className: 'm-b-10', children: i ? i.title : 'Dashboard' })
                    }),
                    p.jsxs(W, {
                      as: 'ul',
                      bsPrefix: ' ',
                      className: 'breadcrumb',
                      children: [
                        p.jsx(W.Item, {
                          as: 'li',
                          bsPrefix: ' ',
                          className: 'breadcrumb-item',
                          children: p.jsx(H, { to: '/', children: p.jsx('i', { className: 'feather icon-home' }) })
                        }),
                        r &&
                          p.jsx(W.Item, {
                            as: 'li',
                            bsPrefix: ' ',
                            className: 'breadcrumb-item',
                            children: p.jsx(H, { to: '#', children: r.title })
                          }),
                        i &&
                          p.jsx(W.Item, {
                            as: 'li',
                            bsPrefix: ' ',
                            className: 'breadcrumb-item',
                            children: p.jsx(H, { to: '#', children: i.title })
                          })
                      ]
                    })
                  ]
                })
              })
            })
          })
    );
  },
  gv = (e, t) => {
    const n = (r) => {
      e.current && !e.current.contains(r.target) && t();
    };
    m.useEffect(
      () => (
        document.addEventListener('click', n),
        () => {
          document.removeEventListener('click', n);
        }
      )
    );
  },
  yv = ({ children: e }) => {
    const t = Sa();
    m.useEffect(() => {
      localStorage.getItem('authToken') || t('/login');
    }, []);
    const n = mn(),
      r = m.useRef(),
      o = m.useContext(qe),
      { collapseMenu: i, headerFixedLayout: a } = o.state,
      { dispatch: l } = o;
    m.useEffect(() => {
      n.width > 992 && n.width <= 1024 && l({ type: Xe }), n.width < 992 && l({ type: ju, layout: 'vertical' });
    }, [l, n]),
      gv(r, () => {
        i && l({ type: Xe });
      });
    const s = () => {
      n.width < 992 && i && l({ type: Xe });
    };
    let u = ['pcoded-wrapper'],
      f = p.jsxs(O.Fragment, { children: [p.jsx(J2, {}), p.jsx(t_, {})] }),
      c = p.jsx(O.Fragment, {
        children: p.jsx('div', {
          className: 'pcoded-main-container',
          children: p.jsx('div', {
            className: u.join(' '),
            children: p.jsx('div', {
              className: 'pcoded-content',
              children: p.jsxs('div', { className: 'pcoded-inner-content', children: [p.jsx(n_, {}), e] })
            })
          })
        })
      });
    if (n.width < 992) {
      let g = ['nav-outside'];
      i && (g = [...g, 'mob-backdrop']),
        a && (g = [...g, 'mob-fixed']),
        (f = p.jsx('div', { className: g.join(' '), ref: r, children: f })),
        (c = p.jsx('div', {
          role: 'button',
          tabIndex: '0',
          className: 'pcoded-outside',
          onClick: () => s,
          onKeyDown: () => s,
          children: c
        }));
    }
    return p.jsxs(O.Fragment, { children: [f, c] });
  };
yv.propTypes = { children: j.node };
const ud = () => {
    const e = m.useContext(qe),
      { collapseMenu: t } = e.state,
      { dispatch: n } = e;
    let r = ['mobile-menu'];
    return (
      t && (r = [...r, 'on']),
      p.jsx(O.Fragment, {
        children: p.jsxs('div', {
          className: 'navbar-brand header-logo',
          children: [
            p.jsxs(H, {
              to: '#',
              className: 'b-brand',
              children: [
                p.jsx('div', {
                  className: 'b-bg',
                  children: p.jsx('img', {
                    src: Zh,
                    className: 'feather icon-trending-up',
                    style: { transform: 'none', opacity: 1 },
                    width: 30,
                    alt: 'Smart Lap'
                  })
                }),
                p.jsx('span', { className: 'b-title', children: 'Smart Lap' })
              ]
            }),
            p.jsx(H, {
              to: '#',
              className: r.join(' '),
              id: 'mobile-collapse',
              onClick: () => n({ type: Xe }),
              children: p.jsx('span', {})
            })
          ]
        })
      })
    );
  },
  r_ = { 'lu icon-building': fv, 'Bs icon-home': cv },
  ra = ({ items: e }) => {
    let t = null;
    if (e.icon) {
      const n = r_[e.icon];
      n
        ? (t = p.jsx('span', { className: 'pcoded-micon', children: p.jsx(n, { size: 26, title: e.title }) }))
        : (t = p.jsx('span', { className: 'pcoded-micon', children: p.jsx('i', { className: e.icon }) }));
    }
    return p.jsx(O.Fragment, { children: t });
  };
ra.propTypes = { items: j.object, icon: j.string };
const oa = ({ items: e }) => {
  let t = !1;
  if (e.badge) {
    const n = ['label', 'pcoded-badge', e.badge.type];
    t = p.jsx('span', { className: n.join(' '), children: e.badge.title });
  }
  return p.jsx(O.Fragment, { children: t });
};
oa.propTypes = { items: j.object, badge: j.string, type: j.string, title: j.string };
const Zu = ({ item: e }) => {
  const t = mn(),
    n = m.useContext(qe),
    { dispatch: r } = n;
  let o = e.title;
  e.icon && (o = p.jsx('span', { className: 'pcoded-mtext', children: e.title }));
  let i = '';
  e.target && (i = '_blank');
  let a;
  e.external
    ? (a = p.jsxs('a', {
        href: e.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        children: [p.jsx(ra, { items: e }), o, p.jsx(oa, { items: e })]
      }))
    : (a = p.jsxs(Bh, { to: e.url, className: 'nav-link', target: i, children: [p.jsx(ra, { items: e }), o, p.jsx(oa, { items: e })] }));
  let l = '';
  return (
    t.width < 992
      ? (l = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: e.classes, onClick: () => r({ type: Xe }), children: a }))
      : (l = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: e.classes, children: a })),
    p.jsx(O.Fragment, { children: l })
  );
};
Zu.propTypes = { item: j.object, title: j.string, icon: j.string, target: j.string, external: j.bool, url: j.string, classes: j.string };
const ec = ({ collapse: e, type: t }) => {
  const n = m.useContext(qe),
    { dispatch: r } = n,
    o = mt(),
    { layout: i, isOpen: a, isTrigger: l } = n.state;
  m.useEffect(() => {
    o.pathname
      .toString()
      .split('/')
      .findIndex((d) => d === e.id) > -1 && r({ type: vo, menu: { id: e.id, type: t } });
  }, [e, r, t]);
  let s = '';
  if (e.children) {
    const v = e.children;
    s = Object.keys(v).map((d) => {
      switch (((d = v[d]), d.type)) {
        case 'collapse':
          return p.jsx(ec, { collapse: d, type: 'sub' }, d.id);
        case 'item':
          return p.jsx(Zu, { layout: i, item: d }, d.id);
        default:
          return !1;
      }
    });
  }
  let u = e.title;
  e.icon && (u = p.jsx('span', { className: 'pcoded-mtext', children: e.title }));
  let f = ['nav-link'],
    c = ['nav-item', 'pcoded-hasmenu'];
  a.findIndex((v) => v === e.id) > -1 && (c = [...c, 'active']),
    l.findIndex((v) => v === e.id) > -1 && (c = [...c, 'pcoded-trigger']),
    o.pathname
      .toString()
      .split('/')
      .findIndex((v) => v === e.id) > -1 && (c = [...c, 'active']);
  const E = p.jsxs(O.Fragment, {
    children: [
      p.jsxs(H, {
        to: '#',
        className: f.join(' '),
        onClick: () => r({ type: vo, menu: { id: e.id, type: t } }),
        children: [p.jsx(ra, { items: e }), u, p.jsx(oa, { items: e })]
      }),
      p.jsx(W, { variant: 'flush', bsPrefix: ' ', as: 'ul', className: 'pcoded-submenu', children: s })
    ]
  });
  let _ = '';
  return (_ = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: c.join(' '), children: E })), p.jsx(O.Fragment, { children: _ });
};
ec.propTypes = { collapse: j.object, type: j.string, id: j.number, children: j.node, title: j.string, icon: j.string };
const wv = ({ layout: e, group: t }) => {
  let n = '';
  if (t.children) {
    const r = t.children;
    n = Object.keys(r).map((o) => {
      switch (((o = r[o]), o.type)) {
        case 'collapse':
          return p.jsx(ec, { collapse: o, type: 'main' }, o.id);
        case 'item':
          return p.jsx(Zu, { layout: e, item: o }, o.id);
        default:
          return !1;
      }
    });
  }
  return p.jsxs(O.Fragment, {
    children: [
      p.jsx(
        W.Item,
        { as: 'li', bsPrefix: ' ', className: 'nav-item pcoded-menu-caption', children: p.jsx('label', { children: t.title }) },
        t.id
      ),
      n
    ]
  });
};
wv.propTypes = { layout: j.string, group: j.object, id: j.number, children: j.node, title: j.string };
const js = ({ navigation: e }) => {
  const t = e.map((r) => {
    switch (r.type) {
      case 'group':
        return p.jsx(wv, { group: r }, 'nav-group-' + r.id);
      default:
        return !1;
    }
  });
  let n = '';
  return (
    (n = p.jsx('div', {
      className: 'navbar-content datta-scroll',
      children: p.jsx(lv, {
        children: p.jsx(W, {
          variant: 'flush',
          as: 'ul',
          bsPrefix: ' ',
          className: 'nav pcoded-inner-navbar',
          id: 'nav-ps-next',
          children: t
        })
      })
    })),
    p.jsx(O.Fragment, { children: n })
  );
};
js.propTypes = { navigation: j.array };
const bs = {
    items: [
      {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'icon-navigation',
        children: [{ id: 'dashboard', title: 'Dashboard', type: 'item', icon: 'feather icon-home', url: '/dashboard' }]
      },
      {
        id: 'user',
        title: 'ข้อมูลผู้ใช้งาน & บริษัท',
        type: 'group',
        icon: 'icon-ui',
        children: [
          { id: 'profile', title: 'โปรไฟล์', type: 'item', icon: 'feather icon-user', url: '/profile' },
          { id: 'company', title: 'บริษัท', type: 'item', icon: 'lu icon-building', url: '/company' }
        ]
      },
      {
        id: 'service-request',
        title: 'ข้อมูลการขอรับบริการ',
        type: 'group',
        icon: 'icon-group',
        children: [
          {
            id: 'request-list',
            title: 'รายการขอรับบริการ',
            type: 'item',
            icon: 'feather icon-file-text',
            badge: { title: '1', type: 'label-danger' },
            url: '/request'
          },
          { id: 'request-history', title: 'ประวัติการขอรับบริการ', type: 'item', icon: 'feather icon-clock', url: '/request/history' }
        ]
      }
    ]
  },
  o_ = () => {
    const e = m.useContext(qe),
      { collapseMenu: t } = e.state,
      n = mn();
    let r = ['pcoded-navbar'];
    (r = [...r]), n.width < 992 && t ? (r = [...r, 'mob-open']) : t && (r = [...r, 'navbar-collapsed']);
    let o = ['navbar-wrapper'],
      i = p.jsxs('div', { className: o.join(' '), children: [p.jsx(ud, {}), p.jsx(js, { navigation: bs.items })] });
    return (
      n.width < 992 && (i = p.jsxs('div', { className: 'navbar-wrapper', children: [p.jsx(ud, {}), p.jsx(js, { navigation: bs.items })] })),
      p.jsx(O.Fragment, { children: p.jsx('nav', { className: r.join(' '), children: i }) })
    );
  },
  xv = (e) => {
    const { windowWidth: t } = e,
      [n, r] = m.useState(t < 600),
      [o, i] = m.useState(t < 600 ? '100px' : ''),
      a = () => {
        t < 600 && document.querySelector('#navbar-right').classList.add('d-none'), r(!0), i('100px');
      },
      l = () => {
        r(!1),
          i(0),
          setTimeout(() => {
            t < 600 && document.querySelector('#navbar-right').classList.remove('d-none');
          }, 500);
      };
    let s = ['main-search'];
    return (
      n && (s = [...s, 'open']),
      p.jsx(O.Fragment, {
        children: p.jsx('div', {
          id: 'main-search',
          className: s.join(' '),
          children: p.jsxs('div', {
            className: 'input-group',
            children: [
              p.jsx('input', { type: 'text', id: 'm-search', className: 'form-control', placeholder: 'Search . . .', style: { width: o } }),
              p.jsx(H, {
                to: '#',
                className: 'input-group-append search-close',
                onClick: l,
                children: p.jsx('i', { className: 'feather icon-x input-group-text' })
              }),
              p.jsx('span', {
                onKeyDown: a,
                role: 'button',
                tabIndex: '0',
                className: 'input-group-append search-btn btn btn-primary',
                onClick: a,
                style: { borderRadius: '50%', marginLeft: 5 },
                children: p.jsx('i', { className: 'feather icon-search input-group-text' })
              })
            ]
          })
        })
      })
    );
  };
xv.propTypes = { windowWidth: j.number };
const i_ = () => {
  const e = mn();
  let t = ['nav-item'];
  return (
    e.width <= 575 && (t = [...t, 'd-none']),
    p.jsx(O.Fragment, {
      children: p.jsxs(W, {
        as: 'ul',
        bsPrefix: ' ',
        className: 'navbar-nav mr-auto',
        children: [
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            className: t.join(' '),
            children: p.jsxs(ge, {
              align: 'start',
              children: [
                p.jsx(ge.Toggle, { variant: 'link', id: 'dropdown-basic', children: 'Dropdown' }),
                p.jsx('ul', {
                  children: p.jsxs(ge.Menu, {
                    children: [
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Action' }) }),
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Another action' }) }),
                      p.jsx('li', { children: p.jsx(H, { to: '#', className: 'dropdown-item', children: 'Something else here' }) })
                    ]
                  })
                })
              ]
            })
          }),
          p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: 'nav-item', children: p.jsx(xv, { windowWidth: e.width }) })
        ]
      })
    })
  );
};
j.object, j.number, j.func, j.string, j.number, j.string, j.string, j.string, j.string;
j.object, j.string, j.string, j.string, j.string, j.string;
j.oneOfType([j.array, j.object]), j.bool, j.bool, j.number, j.func, j.string;
j.bool;
j.bool, j.func;
const a_ = () => {
    const [e, t] = m.useState(!1),
      [n, r] = m.useState([]);
    m.useEffect(() => {
      const i = localStorage.getItem('authToken');
      i &&
        Du(i).then((a) => {
          vv(a.user.user_id).then((l) => {
            r(l);
          });
        });
    }, []);
    const o = () => {
      localStorage.clear(), (window.location.href = '/login');
    };
    return p.jsx(O.Fragment, {
      children: p.jsxs(W, {
        as: 'ul',
        bsPrefix: ' ',
        className: 'navbar-nav ml-auto',
        id: 'navbar-right',
        children: [
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            children: p.jsxs(ge, {
              align: 'end',
              children: [
                p.jsx(ge.Toggle, {
                  as: H,
                  variant: 'link',
                  to: '#',
                  id: 'dropdown-basic',
                  children: p.jsx('i', { className: 'feather icon-bell icon' })
                }),
                p.jsx(ge.Menu, { align: 'end', className: 'notification notification-scroll' })
              ]
            })
          }),
          p.jsx(W.Item, {
            as: 'li',
            bsPrefix: ' ',
            children: p.jsxs(ge, {
              align: 'end',
              className: 'drp-user',
              children: [
                p.jsx(ge.Toggle, {
                  as: H,
                  variant: 'link',
                  to: '#',
                  id: 'dropdown-basic',
                  children: p.jsx('i', { className: 'icon feather icon-settings' })
                }),
                p.jsx(ge.Menu, {
                  align: 'end',
                  className: 'profile-notification',
                  children: p.jsxs('div', {
                    className: 'pro-head',
                    children: [
                      p.jsx('img', { src: mv, className: 'img-radius', alt: 'User Profile' }),
                      p.jsx('span', { children: n.first_name + ' ' + n.last_name }),
                      p.jsx(H, {
                        onClick: () => {
                          o();
                        },
                        className: 'dud-logout',
                        title: 'Logout',
                        children: p.jsx('i', { className: 'feather icon-log-out' })
                      })
                    ]
                  })
                })
              ]
            })
          })
        ]
      })
    });
  },
  l_ = () => {
    const [e, t] = m.useState(!1),
      n = m.useContext(qe),
      { collapseMenu: r, headerFixedLayout: o, layout: i } = n.state,
      { dispatch: a } = n;
    let l = ['navbar', 'pcoded-header', 'navbar-expand-lg'];
    o && i === 'vertical' && (l = [...l, 'headerpos-fixed']);
    let s = ['mobile-menu'];
    r && (s = [...s, 'on']);
    const u = () => {
      a({ type: Xe });
    };
    let f = ['mob-toggler'],
      c = ['collapse navbar-collapse'];
    e && ((f = [...f, 'on']), (c = [...c, 'show']));
    let g = p.jsxs(O.Fragment, {
      children: [
        p.jsxs('div', {
          className: 'm-header',
          children: [
            p.jsx(H, { to: '#', className: s.join(' '), id: 'mobile-collapse', onClick: u, children: p.jsx('span', {}) }),
            p.jsxs(H, {
              to: '#',
              className: 'b-brand',
              children: [
                p.jsx('div', { className: 'b-bg', children: p.jsx('i', { className: 'feather icon-trending-up' }) }),
                p.jsx('span', { className: 'b-title', children: 'Datta Able' })
              ]
            }),
            p.jsx(H, {
              to: '#',
              className: f.join(' '),
              onClick: () => t(!e),
              children: p.jsx('i', { className: 'feather icon-more-vertical' })
            })
          ]
        }),
        p.jsxs('div', { style: { justifyContent: 'space-between' }, className: c.join(' '), children: [p.jsx(i_, {}), p.jsx(a_, {})] })
      ]
    });
    return p.jsx(O.Fragment, { children: p.jsx('header', { className: l.join(' '), children: g }) });
  },
  s_ = () => {
    const e = mt(),
      [t, n] = m.useState([]),
      [r, o] = m.useState([]);
    m.useEffect(() => {
      bs.items.map((f, c) => (f.type && f.type === 'group' && i(f), !1));
    });
    const i = (f, c) => {
      f.children &&
        f.children.filter(
          (g) => (g.type && g.type === 'collapse' ? i(g) : g.type && g.type === 'item' && e.pathname === g.url && (n(f), o(g)), !1)
        );
    };
    let a,
      l,
      s = '',
      u = '';
    return (
      t &&
        t.type === 'collapse' &&
        (a = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: 'breadcrumb-item', children: p.jsx(H, { to: '#', children: t.title }) })),
      r &&
        r.type === 'item' &&
        ((u = r.title),
        (l = p.jsx(W.Item, { as: 'li', bsPrefix: ' ', className: 'breadcrumb-item', children: p.jsx(H, { to: '#', children: u }) })),
        r.breadcrumbs !== !1 &&
          (s = p.jsx('div', {
            className: 'page-header',
            children: p.jsx('div', {
              className: 'page-block',
              children: p.jsx('div', {
                className: 'row align-items-center',
                children: p.jsxs('div', {
                  className: 'col-md-12',
                  children: [
                    p.jsx('div', { className: 'page-header-title', children: p.jsx('h5', { className: 'm-b-10', children: u }) }),
                    p.jsxs(W, {
                      as: 'ul',
                      bsPrefix: ' ',
                      className: 'breadcrumb',
                      children: [
                        p.jsx(W.Item, {
                          as: 'li',
                          bsPrefix: ' ',
                          className: 'breadcrumb-item',
                          children: p.jsx(H, { to: '/', children: p.jsx('i', { className: 'feather icon-home' }) })
                        }),
                        a,
                        l
                      ]
                    })
                  ]
                })
              })
            })
          })),
        (document.title = u + Ph)),
      p.jsx(O.Fragment, { children: s })
    );
  },
  _v = ({ children: e }) => {
    const t = mn(),
      n = m.useRef(),
      r = m.useContext(qe),
      { collapseMenu: o, headerFixedLayout: i } = r.state,
      { dispatch: a } = r;
    m.useEffect(() => {
      t.width > 992 && t.width <= 1024 && a({ type: Xe }), t.width < 992 && a({ type: ju, layout: 'vertical' });
    }, [a, t]),
      gv(n, () => {
        o && a({ type: Xe });
      });
    const l = () => {
      t.width < 992 && o && a({ type: Xe });
    };
    let s = ['pcoded-wrapper'],
      u = p.jsxs(O.Fragment, { children: [p.jsx(o_, {}), p.jsx(l_, {})] }),
      f = p.jsx(O.Fragment, {
        children: p.jsx('div', {
          className: 'pcoded-main-container',
          children: p.jsx('div', {
            className: s.join(' '),
            children: p.jsx('div', {
              className: 'pcoded-content',
              children: p.jsxs('div', { className: 'pcoded-inner-content', children: [p.jsx(s_, {}), e] })
            })
          })
        })
      });
    if (t.width < 992) {
      let c = ['nav-outside'];
      o && (c = [...c, 'mob-backdrop']),
        i && (c = [...c, 'mob-fixed']),
        (u = p.jsx('div', { className: c.join(' '), ref: n, children: u })),
        (f = p.jsx('div', {
          role: 'button',
          tabIndex: '0',
          className: 'pcoded-outside',
          onClick: () => l,
          onKeyDown: () => l,
          children: f
        }));
    }
    return p.jsxs(O.Fragment, { children: [u, f] });
  };
_v.propTypes = { children: j.node };
const u_ = () => !!localStorage.getItem('authToken'),
  c_ = () => localStorage.getItem('userRole') || null,
  f_ = () => {
    const e = localStorage.getItem('permissions');
    return (
      e || (localStorage.removeItem('authToken'), localStorage.removeItem('userRole'), (window.location.href = '/login')),
      e ? JSON.parse(e) : []
    );
  },
  d_ = ({ children: e, role: t }) => {
    const n = mt(),
      [r, o] = m.useState(null),
      [i, a] = m.useState(null),
      [l, s] = m.useState(!0);
    return (
      m.useEffect(() => {
        setTimeout(() => {
          o(c_()), a(f_()), s(!1);
        }, 1e3);
      }, []),
      l
        ? p.jsx('div', {
            className: 'd-flex justify-content-center align-items-center vh-100',
            children: p.jsx(nv, { animation: 'border', variant: 'primary' })
          })
        : u_()
          ? t && r !== t
            ? p.jsx(Kr, { to: '/404', replace: !0 })
            : (i == null ? void 0 : i.some((f) => f.route && n.pathname.startsWith(f.route)))
              ? e
              : p.jsx(Kr, { to: '/404', replace: !0 })
          : p.jsx(Kr, { to: '/login', replace: !0 })
    );
  };
function CE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: { fill: 'none', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '44', d: 'M416 128 192 384l-96-96' },
        child: []
      }
    ]
  })(e);
}
function TE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'm289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z'
        },
        child: []
      }
    ]
  })(e);
}
function kE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zm-176.34-64c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58 2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1 204.8 204.8 0 0 1-51.16 6.47zm235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83 2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1 192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16 310.72 310.72 0 0 1-64.12 72.73 2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13 343.49 343.49 0 0 0 68.64-78.48 32.2 32.2 0 0 0-.1-34.78z'
        },
        child: []
      },
      {
        tag: 'path',
        attr: {
          d: 'M256 160a95.88 95.88 0 0 0-21.37 2.4 2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160zm-90.22 73.66a2 2 0 0 0-3.38 1 96 96 0 0 0 115 115 2 2 0 0 0 1-3.38z'
        },
        child: []
      }
    ]
  })(e);
}
function jE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z'
        },
        child: []
      },
      { tag: 'circle', attr: { cx: '256', cy: '256', r: '80', fill: 'none', strokeMiterlimit: '10', strokeWidth: '32' }, child: [] }
    ]
  })(e);
}
function bE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'm400 148-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128'
        },
        child: []
      },
      {
        tag: 'path',
        attr: { d: 'M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z' },
        child: []
      }
    ]
  })(e);
}
function p_(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z'
        },
        child: []
      }
    ]
  })(e);
}
function PE(e) {
  return Le({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z'
        },
        child: []
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'm250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z'
        },
        child: []
      },
      { tag: 'path', attr: { d: 'M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z' }, child: [] }
    ]
  })(e);
}
const h_ = () => {
    const e = Sa();
    return p.jsx('div', {
      className: 'd-flex vh-100 align-items-center justify-content-center text-center bg-light',
      children: p.jsx(um, {
        children: p.jsx(tv, {
          className: 'justify-content-center',
          children: p.jsxs(zu, {
            md: 8,
            lg: 6,
            children: [
              p.jsx('h1', { className: 'display-3 fw-bold text-danger', children: '404' }),
              p.jsx('h4', { className: 'mb-3', children: 'Oops! หน้านี้ไม่มีอยู่' }),
              p.jsx('p', { className: 'text-muted', children: 'ขออภัย! หน้าที่คุณกำลังค้นหาไม่มีอยู่ในระบบ หรืออาจถูกย้ายไปแล้ว' }),
              p.jsxs(Zf, {
                className: 'mb-3',
                children: [
                  p.jsx(Zf.Text, { children: p.jsx(p_, {}) }),
                  p.jsx(v2.Control, { type: 'text', placeholder: 'ค้นหาสิ่งที่ต้องการ...' }),
                  p.jsx(Ki, { variant: 'info', children: 'ค้นหา' })
                ]
              }),
              p.jsx(Ki, { variant: 'primary', onClick: () => e('/'), className: 'mt-2', children: '⬅️ กลับไปหน้าแรก' })
            ]
          })
        })
      })
    });
  },
  Ev = (e = []) =>
    p.jsx(m.Suspense, {
      fallback: p.jsx(Q1, {}),
      children: p.jsxs(l1, {
        children: [
          e.map((t, n) => {
            const r = t.guard ? t.guard : ({ children: a }) => p.jsx(p.Fragment, { children: a }),
              o = t.layout || m.Fragment,
              i = t.element;
            return p.jsx(
              gs,
              {
                path: t.path,
                element: p.jsx(r, { path: t.path, children: p.jsx(o, { children: t.routes ? Ev(t.routes) : p.jsx(i, { props: !0 }) }) })
              },
              n
            );
          }),
          p.jsx(gs, { path: '*', element: p.jsx(h_, {}) })
        ]
      })
    }),
  m_ = [
    { exact: 'true', path: '/*', element: m.lazy(() => M(() => import('./SignIn-CcwTchNM.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5]))) },
    { exact: 'true', path: '/login', element: m.lazy(() => M(() => import('./SignIn-CcwTchNM.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5]))) },
    {
      exact: 'true',
      path: '/auth/signup-1',
      element: m.lazy(() => M(() => import('./SignUp-CAZaFyDR.js'), __vite__mapDeps([6, 1, 3, 2, 4, 5])))
    },
    {
      exact: 'true',
      path: '/auth/resend-token',
      element: m.lazy(() => M(() => import('./ResendActivateToken-Bp185p68.js'), __vite__mapDeps([7, 1, 3])))
    },
    {
      exact: 'true',
      path: '/auth/activate-token',
      element: m.lazy(() => M(() => import('./ActivateToken-BFyaUTph.js'), __vite__mapDeps([8, 1, 3, 2, 4, 5])))
    },
    {
      exact: 'true',
      path: '/auth/activate-success',
      element: m.lazy(() => M(() => import('./ActivateSuccess-Ds9v6Lr9.js'), __vite__mapDeps([9, 3])))
    },
    {
      exact: 'true',
      path: '/auth/reset-password',
      element: m.lazy(() => M(() => import('./ResetPassword-DQjaD1JK.js'), __vite__mapDeps([10, 1, 3])))
    },
    {
      exact: 'true',
      path: '/auth/new-password',
      element: m.lazy(() => M(() => import('./NewPassword-DF0v0CGL.js'), __vite__mapDeps([11, 1, 3])))
    },
    {
      path: '/admin/*',
      guard: (e) => p.jsx(d_, { role: 'admin', path: '/admin/*', ...e }),
      layout: yv,
      routes: [
        { exact: 'true', path: '/', element: m.lazy(() => M(() => import('./index-BaLZX7tP.js'), __vite__mapDeps([12, 13, 14, 3, 15]))) },
        {
          exact: 'true',
          path: '/dashboard',
          element: m.lazy(() => M(() => import('./index-BaLZX7tP.js'), __vite__mapDeps([12, 13, 14, 3, 15])))
        },
        {
          exact: 'true',
          path: '/request',
          element: m.lazy(() =>
            M(() => import('./AdminRequestPage-B3kmvkvJ.js'), __vite__mapDeps([16, 17, 3, 18, 19, 20, 21, 5, 22, 23, 24]))
          )
        },
        {
          exact: 'true',
          path: 'request/add',
          element: m.lazy(() =>
            M(
              () => import('./AddRequest-Bay8y-fh.js'),
              __vite__mapDeps([25, 17, 26, 27, 28, 1, 29, 30, 31, 32, 3, 21, 19, 5, 15, 24, 33, 4, 34, 35])
            )
          )
        },
        {
          exact: 'true',
          path: 'request/detial',
          element: m.lazy(() =>
            M(
              () => import('./RequestDetails-88a3POrw.js'),
              __vite__mapDeps([36, 1, 27, 28, 37, 15, 23, 24, 33, 4, 5, 3, 17, 30, 20, 21, 19, 22])
            )
          )
        },
        {
          exact: 'true',
          path: 'request/verify',
          element: m.lazy(() =>
            M(() => import('./ServiceRequestDetail-CmkxPdiq.js'), __vite__mapDeps([38, 17, 30, 1, 26, 33, 4, 5, 3, 21, 19, 23, 20, 22]))
          )
        },
        {
          exact: 'true',
          path: 'sample-receiving',
          element: m.lazy(() =>
            M(() => import('./SampleReceiving-BhOTsA_I.js'), __vite__mapDeps([39, 17, 3, 18, 19, 20, 21, 5, 22, 23, 24]))
          )
        },
        {
          exact: 'true',
          path: 'sample-receiving/add',
          element: m.lazy(() =>
            M(
              () => import('./AddTestItem-DDQIRHZT.js'),
              __vite__mapDeps([40, 17, 30, 1, 28, 37, 26, 15, 23, 24, 33, 4, 5, 3, 41, 35, 20, 21, 19, 22])
            )
          )
        },
        { exact: 'true', path: '/lab-list', element: m.lazy(() => M(() => import('./LabsList-_6QWDP8W.js'), [])) },
        {
          exact: 'true',
          path: '/lab-test',
          element: m.lazy(() => M(() => import('./TestList-Dlf2btN7.js'), __vite__mapDeps([42, 13, 3, 15, 14])))
        },
        { exact: 'true', path: '/lab-test/connect', element: m.lazy(() => M(() => import('./TestConnect-DlGNjqpQ.js'), [])) },
        {
          exact: 'true',
          path: '/lab-test/cip-wp',
          element: m.lazy(() => M(() => import('./TestCIP2OWP2O5-DwIvw95-.js'), __vite__mapDeps([43, 3, 15, 14])))
        },
        {
          exact: 'true',
          path: '/lab-test/water-soluble-potassium',
          element: m.lazy(() => M(() => import('./TestWaterSoluble-BfSfjFEM.js'), __vite__mapDeps([44, 3, 15, 14])))
        },
        {
          exact: 'true',
          path: '/lab-test/test-oes',
          element: m.lazy(() => M(() => import('./TestOES-Bi3ZfidR.js'), __vite__mapDeps([45, 3, 15, 14])))
        },
        {
          exact: 'true',
          path: '/lab-test/phosphorus',
          element: m.lazy(() => M(() => import('./TestPhosphorus-BhGU_ljk.js'), __vite__mapDeps([46, 3, 15, 14])))
        },
        {
          exact: 'true',
          path: '/roles-list',
          element: m.lazy(() => M(() => import('./Roles-CGg8Fnw3.js'), __vite__mapDeps([47, 48, 3, 18, 19, 20, 21, 5, 22, 24])))
        },
        {
          exact: 'true',
          path: '/roles-list/add',
          element: m.lazy(() => M(() => import('./AddRoles-BxnhRm68.js'), __vite__mapDeps([49, 1, 48, 3])))
        },
        {
          exact: 'true',
          path: '/roles-list/edit',
          element: m.lazy(() => M(() => import('./EditRoles-BpUJWOlM.js'), __vite__mapDeps([50, 1, 48, 3])))
        },
        {
          exact: 'true',
          path: '/menus',
          element: m.lazy(() => M(() => import('./Menus-CLqBe1AB.js'), __vite__mapDeps([51, 52, 3, 18, 19, 20, 21, 5, 22, 24])))
        },
        {
          exact: 'true',
          path: '/menus/add',
          element: m.lazy(() => M(() => import('./AddMenu-yjwLOzpN.js'), __vite__mapDeps([53, 1, 52, 3])))
        },
        {
          exact: 'true',
          path: '/menus/edit',
          element: m.lazy(() => M(() => import('./EditMenu-t1sc5hFE.js'), __vite__mapDeps([54, 1, 52, 3])))
        },
        {
          exact: 'true',
          path: '/permission',
          element: m.lazy(() => M(() => import('./PermissionManagement-DDwv0KDK.js'), __vite__mapDeps([55, 52, 48, 3, 22, 19])))
        },
        {
          exact: 'true',
          path: '/user',
          element: m.lazy(() => M(() => import('./UserList-D-VPBaMr.js'), __vite__mapDeps([56, 3, 18, 19, 20, 21, 5, 22, 23, 24])))
        },
        { exact: 'true', path: '/add', element: m.lazy(() => M(() => import('./AddUser-vRo_RD1v.js'), __vite__mapDeps([57, 1, 48, 3]))) },
        { exact: 'true', path: '/edit', element: m.lazy(() => M(() => import('./EditUser-auiZeV8F.js'), __vite__mapDeps([58, 1, 48, 3]))) },
        {
          exact: 'true',
          path: '/test/send-mail-pdf',
          element: m.lazy(() => M(() => import('./TestSendBMailFile-B4EnV6Jg.js'), __vite__mapDeps([59, 41, 35])))
        },
        {
          exact: 'true',
          path: '/customer',
          element: m.lazy(() => M(() => import('./Customer-CxYJbklP.js'), __vite__mapDeps([60, 32, 3, 18, 19, 20, 21, 5, 22, 24])))
        },
        {
          exact: 'true',
          path: '/customer/add',
          element: m.lazy(() => M(() => import('./AddCustomer-DNjgXmDG.js'), __vite__mapDeps([61, 1, 32, 29, 3])))
        },
        {
          exact: 'true',
          path: '/customer/edit',
          element: m.lazy(() => M(() => import('./EditCustomer-B_zU9dwz.js'), __vite__mapDeps([62, 1, 32, 29, 3])))
        },
        {
          exact: 'true',
          path: '/user-link-approve',
          element: m.lazy(() => M(() => import('./UserLinkCostomer-Cf5t6E1M.js'), __vite__mapDeps([63, 3, 18, 19, 20, 21, 5, 22, 23, 24])))
        },
        { path: '*', element: () => p.jsx(Kr, { to: xf }) }
      ]
    },
    {
      path: '/*',
      layout: _v,
      routes: [
        { exact: 'true', path: '/', element: m.lazy(() => M(() => import('./index-BaLZX7tP.js'), __vite__mapDeps([12, 13, 14, 3, 15]))) },
        {
          exact: 'true',
          path: '/dashboard',
          element: m.lazy(() => M(() => import('./index-BaLZX7tP.js'), __vite__mapDeps([12, 13, 14, 3, 15])))
        },
        {
          exact: 'true',
          path: 'profile',
          element: m.lazy(() => M(() => import('./Profile-D0GT0Rcw.js'), __vite__mapDeps([64, 3, 33, 4, 5])))
        },
        {
          exact: 'true',
          path: 'company',
          element: m.lazy(() => M(() => import('./Company-BP6C9Woe.js'), __vite__mapDeps([65, 32, 3, 18, 19, 20, 21, 5, 22, 23, 24])))
        },
        {
          exact: 'true',
          path: 'company/select',
          element: m.lazy(() => M(() => import('./SelectCompany-BhIFT1OH.js'), __vite__mapDeps([66, 3])))
        },
        {
          exact: 'true',
          path: 'company/search',
          element: m.lazy(() =>
            M(() => import('./SearchCompany-D3ZlVhR8.js'), __vite__mapDeps([67, 34, 35, 32, 3, 18, 19, 20, 21, 5, 22, 15, 24]))
          )
        },
        {
          exact: 'true',
          path: 'company/add',
          element: m.lazy(() => M(() => import('./AddCompany-Bl0PRAuJ.js'), __vite__mapDeps([68, 1, 34, 35, 32, 29, 3])))
        },
        {
          exact: 'true',
          path: 'company/edit',
          element: m.lazy(() => M(() => import('./EditCompany-B0Zgd9lp.js'), __vite__mapDeps([69, 1, 34, 35, 32, 29, 3])))
        },
        {
          exact: 'true',
          path: '/request',
          element: m.lazy(() =>
            M(() => import('./UserRequestPage-C83kU_A7.js'), __vite__mapDeps([70, 17, 3, 18, 19, 20, 21, 5, 22, 23, 24]))
          )
        },
        {
          exact: 'true',
          path: 'request/add',
          element: m.lazy(() =>
            M(
              () => import('./AddRequest-Bay8y-fh.js'),
              __vite__mapDeps([25, 17, 26, 27, 28, 1, 29, 30, 31, 32, 3, 21, 19, 5, 15, 24, 33, 4, 34, 35])
            )
          )
        },
        {
          exact: 'true',
          path: 'request/edit/',
          element: m.lazy(() =>
            M(
              () => import('./EditSampleRequestForm-BvfaC9ep.js'),
              __vite__mapDeps([71, 1, 29, 30, 31, 32, 3, 21, 19, 5, 15, 24, 33, 4, 34, 35, 27, 28, 17, 26])
            )
          )
        },
        {
          exact: 'true',
          path: 'request/detial',
          element: m.lazy(() =>
            M(
              () => import('./RequestDetails-88a3POrw.js'),
              __vite__mapDeps([36, 1, 27, 28, 37, 15, 23, 24, 33, 4, 5, 3, 17, 30, 20, 21, 19, 22])
            )
          )
        },
        {
          exact: 'true',
          path: 'request/history',
          element: m.lazy(() => M(() => import('./HistoryRequestPage-7QfOOwRZ.js'), __vite__mapDeps([72, 3, 15, 23])))
        },
        { path: '*', element: () => p.jsx(Kr, { to: xf }) }
      ]
    }
  ];
function Sv(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = Sv(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function jn() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Sv(e)) && (r && (r += ' '), (r += t));
  return r;
}
function v_(e) {
  if (typeof document > 'u') return;
  let t = document.head || document.getElementsByTagName('head')[0],
    n = document.createElement('style');
  (n.type = 'text/css'),
    t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e));
}
v_(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Ao = (e) => typeof e == 'number' && !isNaN(e),
  In = (e) => typeof e == 'string',
  zt = (e) => typeof e == 'function',
  g_ = (e) => In(e) || Ao(e),
  Ps = (e) => (In(e) || zt(e) ? e : null),
  y_ = (e, t) => (e === !1 || (Ao(e) && e > 0) ? e : t),
  Ns = (e) => m.isValidElement(e) || In(e) || zt(e) || Ao(e);
function w_(e, t, n = 300) {
  let { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = 'initial'),
      (o.height = r + 'px'),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, n);
      });
  });
}
function x_({ enter: e, exit: t, appendPosition: n = !1, collapse: r = !0, collapseDuration: o = 300 }) {
  return function ({ children: i, position: a, preventExitTransition: l, done: s, nodeRef: u, isIn: f, playToast: c }) {
    let g = n ? `${e}--${a}` : e,
      w = n ? `${t}--${a}` : t,
      x = m.useRef(0);
    return (
      m.useLayoutEffect(() => {
        let E = u.current,
          _ = g.split(' '),
          v = (d) => {
            d.target === u.current &&
              (c(),
              E.removeEventListener('animationend', v),
              E.removeEventListener('animationcancel', v),
              x.current === 0 && d.type !== 'animationcancel' && E.classList.remove(..._));
          };
        E.classList.add(..._), E.addEventListener('animationend', v), E.addEventListener('animationcancel', v);
      }, []),
      m.useEffect(() => {
        let E = u.current,
          _ = () => {
            E.removeEventListener('animationend', _), r ? w_(E, s, o) : s();
          };
        f || (l ? _() : ((x.current = 1), (E.className += ` ${w}`), E.addEventListener('animationend', _)));
      }, [f]),
      O.createElement(O.Fragment, null, i)
    );
  };
}
function cd(e, t) {
  return {
    content: Cv(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: t
  };
}
function Cv(e, t, n = !1) {
  return m.isValidElement(e) && !In(e.type)
    ? m.cloneElement(e, { closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n })
    : zt(e)
      ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n })
      : e;
}
function __({ closeToast: e, theme: t, ariaLabel: n = 'close' }) {
  return O.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: 'button',
      onClick: (r) => {
        r.stopPropagation(), e(!0);
      },
      'aria-label': n
    },
    O.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      O.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
      })
    )
  );
}
function E_({
  delay: e,
  isRunning: t,
  closeToast: n,
  type: r = 'default',
  hide: o,
  className: i,
  controlledProgress: a,
  progress: l,
  rtl: s,
  isIn: u,
  theme: f
}) {
  let c = o || (a && l === 0),
    g = { animationDuration: `${e}ms`, animationPlayState: t ? 'running' : 'paused' };
  a && (g.transform = `scaleX(${l})`);
  let w = jn(
      'Toastify__progress-bar',
      a ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${r}`,
      { 'Toastify__progress-bar--rtl': s }
    ),
    x = zt(i) ? i({ rtl: s, type: r, defaultClassName: w }) : jn(w, i),
    E = {
      [a && l >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
        a && l < 1
          ? null
          : () => {
              u && n();
            }
    };
  return O.createElement(
    'div',
    { className: 'Toastify__progress-bar--wrp', 'data-hidden': c },
    O.createElement('div', { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}` }),
    O.createElement('div', {
      role: 'progressbar',
      'aria-hidden': c ? 'true' : 'false',
      'aria-label': 'notification timer',
      className: x,
      style: g,
      ...E
    })
  );
}
var S_ = 1,
  Tv = () => `${S_++}`;
function C_(e, t, n) {
  let r = 1,
    o = 0,
    i = [],
    a = [],
    l = t,
    s = new Map(),
    u = new Set(),
    f = (d) => (u.add(d), () => u.delete(d)),
    c = () => {
      (a = Array.from(s.values())), u.forEach((d) => d());
    },
    g = ({ containerId: d, toastId: h, updateId: y }) => {
      let S = d ? d !== e : e !== 1,
        T = s.has(h) && y == null;
      return S || T;
    },
    w = (d, h) => {
      s.forEach((y) => {
        var S;
        (h == null || h === y.props.toastId) && ((S = y.toggle) == null || S.call(y, d));
      });
    },
    x = (d) => {
      var h, y;
      (y = (h = d.props) == null ? void 0 : h.onClose) == null || y.call(h, d.removalReason), (d.isActive = !1);
    },
    E = (d) => {
      if (d == null) s.forEach(x);
      else {
        let h = s.get(d);
        h && x(h);
      }
      c();
    },
    _ = () => {
      (o -= i.length), (i = []);
    },
    v = (d) => {
      var h, y;
      let { toastId: S, updateId: T } = d.props,
        C = T == null;
      d.staleId && s.delete(d.staleId),
        (d.isActive = !0),
        s.set(S, d),
        c(),
        n(cd(d, C ? 'added' : 'updated')),
        C && ((y = (h = d.props).onOpen) == null || y.call(h));
    };
  return {
    id: e,
    props: l,
    observe: f,
    toggle: w,
    removeToast: E,
    toasts: s,
    clearQueue: _,
    buildToast: (d, h) => {
      if (g(h)) return;
      let { toastId: y, updateId: S, data: T, staleId: C, delay: k } = h,
        L = S == null;
      L && o++;
      let P = {
        ...l,
        style: l.toastStyle,
        key: r++,
        ...Object.fromEntries(Object.entries(h).filter(([A, z]) => z != null)),
        toastId: y,
        updateId: S,
        data: T,
        isIn: !1,
        className: Ps(h.className || l.toastClassName),
        progressClassName: Ps(h.progressClassName || l.progressClassName),
        autoClose: h.isLoading ? !1 : y_(h.autoClose, l.autoClose),
        closeToast(A) {
          (s.get(y).removalReason = A), E(y);
        },
        deleteToast() {
          let A = s.get(y);
          if (A != null) {
            if ((n(cd(A, 'removed')), s.delete(y), o--, o < 0 && (o = 0), i.length > 0)) {
              v(i.shift());
              return;
            }
            c();
          }
        }
      };
      (P.closeButton = l.closeButton),
        h.closeButton === !1 || Ns(h.closeButton)
          ? (P.closeButton = h.closeButton)
          : h.closeButton === !0 && (P.closeButton = Ns(l.closeButton) ? l.closeButton : !0);
      let I = { content: d, props: P, staleId: C };
      l.limit && l.limit > 0 && o > l.limit && L
        ? i.push(I)
        : Ao(k)
          ? setTimeout(() => {
              v(I);
            }, k)
          : v(I);
    },
    setProps(d) {
      l = d;
    },
    setToggle: (d, h) => {
      let y = s.get(d);
      y && (y.toggle = h);
    },
    isToastActive: (d) => {
      var h;
      return (h = s.get(d)) == null ? void 0 : h.isActive;
    },
    getSnapshot: () => a
  };
}
var be = new Map(),
  Eo = [],
  Os = new Set(),
  T_ = (e) => Os.forEach((t) => t(e)),
  kv = () => be.size > 0;
function k_() {
  Eo.forEach((e) => bv(e.content, e.options)), (Eo = []);
}
var j_ = (e, { containerId: t }) => {
  var n;
  return (n = be.get(t || 1)) == null ? void 0 : n.toasts.get(e);
};
function jv(e, t) {
  var n;
  if (t) return !!((n = be.get(t)) != null && n.isToastActive(e));
  let r = !1;
  return (
    be.forEach((o) => {
      o.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function b_(e) {
  if (!kv()) {
    Eo = Eo.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || g_(e))
    be.forEach((t) => {
      t.removeToast(e);
    });
  else if (e && ('containerId' in e || 'id' in e)) {
    let t = be.get(e.containerId);
    t
      ? t.removeToast(e.id)
      : be.forEach((n) => {
          n.removeToast(e.id);
        });
  }
}
var P_ = (e = {}) => {
  be.forEach((t) => {
    t.props.limit && (!e.containerId || t.id === e.containerId) && t.clearQueue();
  });
};
function bv(e, t) {
  Ns(e) &&
    (kv() || Eo.push({ content: e, options: t }),
    be.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function N_(e) {
  var t;
  (t = be.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function Pv(e, t) {
  be.forEach((n) => {
    (t == null || !(t != null && t.containerId) || (t == null ? void 0 : t.containerId) === n.id) && n.toggle(e, t == null ? void 0 : t.id);
  });
}
function O_(e) {
  let t = e.containerId || 1;
  return {
    subscribe(n) {
      let r = C_(t, e, T_);
      be.set(t, r);
      let o = r.observe(n);
      return (
        k_(),
        () => {
          o(), be.delete(t);
        }
      );
    },
    setProps(n) {
      var r;
      (r = be.get(t)) == null || r.setProps(n);
    },
    getSnapshot() {
      var n;
      return (n = be.get(t)) == null ? void 0 : n.getSnapshot();
    }
  };
}
function L_(e) {
  return (
    Os.add(e),
    () => {
      Os.delete(e);
    }
  );
}
function R_(e) {
  return e && (In(e.toastId) || Ao(e.toastId)) ? e.toastId : Tv();
}
function $o(e, t) {
  return bv(e, t), t.toastId;
}
function Ba(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: R_(t) };
}
function Ha(e) {
  return (t, n) => $o(t, Ba(e, n));
}
function K(e, t) {
  return $o(e, Ba('default', t));
}
K.loading = (e, t) => $o(e, Ba('default', { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }));
function I_(e, { pending: t, error: n, success: r }, o) {
  let i;
  t && (i = In(t) ? K.loading(t, o) : K.loading(t.render, { ...o, ...t }));
  let a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
    l = (u, f, c) => {
      if (f == null) {
        K.dismiss(i);
        return;
      }
      let g = { type: u, ...a, ...o, data: c },
        w = In(f) ? { render: f } : f;
      return i ? K.update(i, { ...g, ...w }) : K(w.render, { ...g, ...w }), c;
    },
    s = zt(e) ? e() : e;
  return s.then((u) => l('success', r, u)).catch((u) => l('error', n, u)), s;
}
K.promise = I_;
K.success = Ha('success');
K.info = Ha('info');
K.error = Ha('error');
K.warning = Ha('warning');
K.warn = K.warning;
K.dark = (e, t) => $o(e, Ba('default', { theme: 'dark', ...t }));
function D_(e) {
  b_(e);
}
K.dismiss = D_;
K.clearWaitingQueue = P_;
K.isActive = jv;
K.update = (e, t = {}) => {
  let n = j_(e, t);
  if (n) {
    let { props: r, content: o } = n,
      i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Tv() };
    i.toastId !== e && (i.staleId = e);
    let a = i.render || o;
    delete i.render, $o(a, i);
  }
};
K.done = (e) => {
  K.update(e, { progress: 1 });
};
K.onChange = L_;
K.play = (e) => Pv(!0, e);
K.pause = (e) => Pv(!1, e);
function A_(e) {
  var t;
  let { subscribe: n, getSnapshot: r, setProps: o } = m.useRef(O_(e)).current;
  o(e);
  let i = (t = m.useSyncExternalStore(n, r, r)) == null ? void 0 : t.slice();
  function a(l) {
    if (!i) return [];
    let s = new Map();
    return (
      e.newestOnTop && i.reverse(),
      i.forEach((u) => {
        let { position: f } = u.props;
        s.has(f) || s.set(f, []), s.get(f).push(u);
      }),
      Array.from(s, (u) => l(u[0], u[1]))
    );
  }
  return { getToastToRender: a, isToastActive: jv, count: i == null ? void 0 : i.length };
}
function $_(e) {
  let [t, n] = m.useState(!1),
    [r, o] = m.useState(!1),
    i = m.useRef(null),
    a = m.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current,
    { autoClose: l, pauseOnHover: s, closeToast: u, onClick: f, closeOnClick: c } = e;
  N_({ id: e.toastId, containerId: e.containerId, fn: n }),
    m.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          g(),
          () => {
            w();
          }
        );
    }, [e.pauseOnFocusLoss]);
  function g() {
    document.hasFocus() || v(), window.addEventListener('focus', _), window.addEventListener('blur', v);
  }
  function w() {
    window.removeEventListener('focus', _), window.removeEventListener('blur', v);
  }
  function x(C) {
    if (e.draggable === !0 || e.draggable === C.pointerType) {
      d();
      let k = i.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (k.style.transition = 'none'),
        e.draggableDirection === 'x'
          ? ((a.start = C.clientX), (a.removalDistance = k.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = C.clientY),
            (a.removalDistance = (k.offsetHeight * (e.draggablePercent === 80 ? e.draggablePercent * 1.5 : e.draggablePercent)) / 100));
    }
  }
  function E(C) {
    let { top: k, bottom: L, left: P, right: I } = i.current.getBoundingClientRect();
    C.nativeEvent.type !== 'touchend' && e.pauseOnHover && C.clientX >= P && C.clientX <= I && C.clientY >= k && C.clientY <= L ? v() : _();
  }
  function _() {
    n(!0);
  }
  function v() {
    n(!1);
  }
  function d() {
    (a.didMove = !1), document.addEventListener('pointermove', y), document.addEventListener('pointerup', S);
  }
  function h() {
    document.removeEventListener('pointermove', y), document.removeEventListener('pointerup', S);
  }
  function y(C) {
    let k = i.current;
    if (a.canDrag && k) {
      (a.didMove = !0),
        t && v(),
        e.draggableDirection === 'x' ? (a.delta = C.clientX - a.start) : (a.delta = C.clientY - a.start),
        a.start !== C.clientX && (a.canCloseOnClick = !1);
      let L = e.draggableDirection === 'x' ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
      (k.style.transform = `translate3d(${L},0)`), (k.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`);
    }
  }
  function S() {
    h();
    let C = i.current;
    if (a.canDrag && a.didMove && C) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance)) {
        o(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      (C.style.transition = 'transform 0.2s, opacity 0.2s'), C.style.removeProperty('transform'), C.style.removeProperty('opacity');
    }
  }
  let T = { onPointerDown: x, onPointerUp: E };
  return (
    l && s && ((T.onMouseEnter = v), e.stacked || (T.onMouseLeave = _)),
    c &&
      (T.onClick = (C) => {
        f && f(C), a.canCloseOnClick && u(!0);
      }),
    { playToast: _, pauseToast: v, isRunning: t, preventExitTransition: r, toastRef: i, eventHandlers: T }
  );
}
var M_ = typeof window < 'u' ? m.useLayoutEffect : m.useEffect,
  Wa = ({ theme: e, type: t, isLoading: n, ...r }) =>
    O.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill: e === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${t})`,
      ...r
    });
function z_(e) {
  return O.createElement(
    Wa,
    { ...e },
    O.createElement('path', {
      d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
    })
  );
}
function F_(e) {
  return O.createElement(
    Wa,
    { ...e },
    O.createElement('path', {
      d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
    })
  );
}
function B_(e) {
  return O.createElement(
    Wa,
    { ...e },
    O.createElement('path', {
      d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
    })
  );
}
function H_(e) {
  return O.createElement(
    Wa,
    { ...e },
    O.createElement('path', {
      d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z'
    })
  );
}
function W_() {
  return O.createElement('div', { className: 'Toastify__spinner' });
}
var Ls = { info: F_, warning: z_, success: B_, error: H_, spinner: W_ },
  U_ = (e) => e in Ls;
function V_({ theme: e, type: t, isLoading: n, icon: r }) {
  let o = null,
    i = { theme: e, type: t };
  return (
    r === !1 ||
      (zt(r)
        ? (o = r({ ...i, isLoading: n }))
        : m.isValidElement(r)
          ? (o = m.cloneElement(r, i))
          : n
            ? (o = Ls.spinner())
            : U_(t) && (o = Ls[t](i))),
    o
  );
}
var X_ = (e) => {
    let { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: o, playToast: i } = $_(e),
      {
        closeButton: a,
        children: l,
        autoClose: s,
        onClick: u,
        type: f,
        hideProgressBar: c,
        closeToast: g,
        transition: w,
        position: x,
        className: E,
        style: _,
        progressClassName: v,
        updateId: d,
        role: h,
        progress: y,
        rtl: S,
        toastId: T,
        deleteToast: C,
        isIn: k,
        isLoading: L,
        closeOnClick: P,
        theme: I,
        ariaLabel: A
      } = e,
      z = jn(
        'Toastify__toast',
        `Toastify__toast-theme--${I}`,
        `Toastify__toast--${f}`,
        { 'Toastify__toast--rtl': S },
        { 'Toastify__toast--close-on-click': P }
      ),
      te = zt(E) ? E({ rtl: S, position: x, type: f, defaultClassName: z }) : jn(z, E),
      fe = V_(e),
      ne = !!y || !s,
      ue = { closeToast: g, type: f, theme: I },
      N = null;
    return (
      a === !1 || (zt(a) ? (N = a(ue)) : m.isValidElement(a) ? (N = m.cloneElement(a, ue)) : (N = __(ue))),
      O.createElement(
        w,
        { isIn: k, done: C, position: x, preventExitTransition: n, nodeRef: r, playToast: i },
        O.createElement(
          'div',
          { id: T, tabIndex: 0, onClick: u, 'data-in': k, className: te, ...o, style: _, ref: r, ...(k && { role: h, 'aria-label': A }) },
          fe != null &&
            O.createElement('div', { className: jn('Toastify__toast-icon', { 'Toastify--animate-icon Toastify__zoom-enter': !L }) }, fe),
          Cv(l, e, !t),
          N,
          !e.customProgressBar &&
            O.createElement(E_, {
              ...(d && !ne ? { key: `p-${d}` } : {}),
              rtl: S,
              theme: I,
              delay: s,
              isRunning: t,
              isIn: k,
              closeToast: g,
              hide: c,
              type: f,
              className: v,
              controlledProgress: ne,
              progress: y || 0
            })
        )
      )
    );
  },
  Y_ = (e, t = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: t
  }),
  K_ = x_(Y_('bounce', !0)),
  G_ = {
    transition: K_,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: 'touch',
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
    'aria-label': 'Notifications Alt+T',
    hotKeys: (e) => e.altKey && e.code === 'KeyT'
  };
function Q_(e) {
  let t = { ...G_, ...e },
    n = e.stacked,
    [r, o] = m.useState(!0),
    i = m.useRef(null),
    { getToastToRender: a, isToastActive: l, count: s } = A_(t),
    { className: u, style: f, rtl: c, containerId: g, hotKeys: w } = t;
  function x(_) {
    let v = jn('Toastify__toast-container', `Toastify__toast-container--${_}`, { 'Toastify__toast-container--rtl': c });
    return zt(u) ? u({ position: _, rtl: c, defaultClassName: v }) : jn(v, Ps(u));
  }
  function E() {
    n && (o(!0), K.play());
  }
  return (
    M_(() => {
      var _;
      if (n) {
        let v = i.current.querySelectorAll('[data-in="true"]'),
          d = 12,
          h = (_ = t.position) == null ? void 0 : _.includes('top'),
          y = 0,
          S = 0;
        Array.from(v)
          .reverse()
          .forEach((T, C) => {
            let k = T;
            k.classList.add('Toastify__toast--stacked'),
              C > 0 && (k.dataset.collapsed = `${r}`),
              k.dataset.pos || (k.dataset.pos = h ? 'top' : 'bot');
            let L = y * (r ? 0.2 : 1) + (r ? 0 : d * C);
            k.style.setProperty('--y', `${h ? L : L * -1}px`),
              k.style.setProperty('--g', `${d}`),
              k.style.setProperty('--s', `${1 - (r ? S : 0)}`),
              (y += k.offsetHeight),
              (S += 0.025);
          });
      }
    }, [r, s, n]),
    m.useEffect(() => {
      function _(v) {
        var d;
        let h = i.current;
        w(v) && ((d = h.querySelector('[tabIndex="0"]')) == null || d.focus(), o(!1), K.pause()),
          v.key === 'Escape' && (document.activeElement === h || (h != null && h.contains(document.activeElement))) && (o(!0), K.play());
      }
      return (
        document.addEventListener('keydown', _),
        () => {
          document.removeEventListener('keydown', _);
        }
      );
    }, [w]),
    O.createElement(
      'section',
      {
        ref: i,
        className: 'Toastify',
        id: g,
        onMouseEnter: () => {
          n && (o(!1), K.pause());
        },
        onMouseLeave: E,
        'aria-live': 'polite',
        'aria-atomic': 'false',
        'aria-relevant': 'additions text',
        'aria-label': t['aria-label']
      },
      a((_, v) => {
        let d = v.length ? { ...f } : { ...f, pointerEvents: 'none' };
        return O.createElement(
          'div',
          { tabIndex: -1, className: x(_), 'data-stacked': n, style: d, key: `c-${_}` },
          v.map(({ content: h, props: y }) =>
            O.createElement(X_, { ...y, stacked: n, collapseAll: E, isIn: l(y.toastId, y.containerId), key: `t-${y.key}` }, h)
          )
        );
      })
    )
  );
}
const q_ = () => p.jsxs(m1, { basename: '/', children: [p.jsx(Q_, { position: 'bottom-right', autoClose: 3e3 }), Ev(m_)] }),
  J_ = document.getElementById('root'),
  Z_ = Ch(J_);
Z_.render(p.jsx(Nh, { children: p.jsx(q_, {}) }));
export {
  fn as $,
  sm as A,
  Ki as B,
  zu as C,
  uE as D,
  vE as E,
  v2 as F,
  Le as G,
  dE as H,
  kE as I,
  PE as J,
  wE as K,
  H as L,
  yE as M,
  Bh as N,
  gE as O,
  j as P,
  Dn as Q,
  tv as R,
  oE as S,
  lw as T,
  ni as U,
  tE as V,
  am as W,
  jn as X,
  pr as Y,
  St as Z,
  S1 as _,
  jE as a,
  jx as a0,
  qw as a1,
  mx as a2,
  Gw as a3,
  px as a4,
  sx as a5,
  yx as a6,
  Vw as a7,
  cx as a8,
  Sh as a9,
  Zv as aa,
  om as ab,
  Oo as ac,
  s2 as ad,
  Ot as ae,
  x2 as af,
  hw as ag,
  mw as ah,
  Kf as ai,
  Es as aj,
  aw as ak,
  sw as al,
  im as am,
  ow as an,
  iw as ao,
  nm as ap,
  rm as aq,
  _E as ar,
  $v as as,
  eE as at,
  xE as au,
  CE as av,
  TE as aw,
  SE as ax,
  EE as ay,
  nE as az,
  O as b,
  lE as c,
  G as d,
  X as e,
  tm as f,
  q1 as g,
  lm as h,
  aE as i,
  p as j,
  Du as k,
  Zh as l,
  bE as m,
  pE as n,
  mE as o,
  iE as p,
  hE as q,
  m as r,
  rE as s,
  mt as t,
  Sa as u,
  nv as v,
  Q1 as w,
  ta as x,
  K as y,
  sE as z
};
