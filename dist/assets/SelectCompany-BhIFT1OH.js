import { G as i, u as r, j as c, R as n, C as a, B as t } from './index-DZpC_pHZ.js';
import { C as s } from './Card-ZCMDsCmS.js';
function l(e) {
  return i({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z'
        },
        child: []
      }
    ]
  })(e);
}
function h(e) {
  return i({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z'
        },
        child: []
      }
    ]
  })(e);
}
function o() {
  const e = r();
  return c.jsx(c.Fragment, {
    children: c.jsxs(s, {
      children: [
        c.jsx(s.Header, {
          children: c.jsx(n, {
            children: c.jsxs(a, {
              children: [
                c.jsx(s.Title, { as: 'h5', children: 'เพิ่มข้อมูลบริษัท' }),
                c.jsx('span', { className: 'd-block m-t-5', children: 'ลูกค้าเคยลงทะเบียนขอรับบริการในนามบริษัทหรือไม่' })
              ]
            })
          })
        }),
        c.jsx(s.Body, {
          children: c.jsxs(n, {
            className: 'justify-content-center text-center',
            children: [
              c.jsx(a, {
                md: 4,
                sm: 12,
                className: 'mb-3',
                children: c.jsxs(t, {
                  variant: 'outline-primary',
                  className: 'w-100 py-4 d-flex align-items-center justify-content-center flex-column',
                  onClick: () => e('/company/search'),
                  children: [c.jsx(l, { size: 40, className: 'mb-2' }), 'เคยลงทะเบียนบริษัท / ขอรับบริการ']
                })
              }),
              c.jsx(a, {
                md: 4,
                sm: 12,
                className: 'mb-3',
                children: c.jsxs(t, {
                  variant: 'outline-success',
                  className: 'w-100 py-4 d-flex align-items-center justify-content-center flex-column',
                  onClick: () => e('/company/add'),
                  children: [c.jsx(h, { size: 40, className: 'mb-2' }), 'ลงทะเบียนบริษัทใหม่']
                })
              })
            ]
          })
        })
      ]
    })
  });
}
export { o as default };
