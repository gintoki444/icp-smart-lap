import { u as d, j as e, R as l, C as i, B as a } from './index-DZpC_pHZ.js';
import { C as s } from './Card-ZCMDsCmS.js';
import { T as m } from './Table-Bs-13SI2.js';
import { B as o } from './Badge-EMxcGjiL.js';
const u = () => {
  const c = d(),
    n = [
      {
        customerCode: '109',
        sampleNo: '24111203',
        typeRequest: 'ส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย',
        sampleCode: '-',
        sampleCout: 2,
        description: 'ธาตุอาหารหลัก, Zn',
        sampleAppearance: 'เม็ดสีแดง',
        requestNo: 'RC24-134',
        status: 'เสร็จสิ้น',
        create_date: '21/12/2024',
        start_date: '31/12/2024',
        end_date: '03/02/2025',
        currentStep: 'เสร็จสิ้น'
      },
      {
        customerCode: '111',
        sampleNo: '24111205',
        typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
        sampleCout: 3,
        sampleCode: '-',
        description: 'ธาตุอาหารเสริม, Zn',
        sampleAppearance: 'เม็ดสีขาว',
        requestNo: 'RC24-136',
        status: 'เสร็จสิ้น',
        create_date: '21/12/2024',
        start_date: '31/12/2024',
        end_date: '03/02/2025',
        currentStep: 'เสร็จสิ้น'
      },
      {
        customerCode: '110',
        sampleNo: '24111204',
        typeRequest: 'ส่งตัวอย่างปุ๋ยอินทรีย์',
        sampleCode: '-',
        sampleCout: 1,
        description: 'ธาตุอาหารรอง, Fe',
        sampleAppearance: 'ผงละเอียด',
        requestNo: 'RC24-135',
        status: 'เสร็จสิ้น',
        create_date: '21/12/2024',
        start_date: '31/12/2024',
        end_date: '03/02/2025',
        currentStep: 'เสร็จสิ้น'
      }
    ];
  return e.jsx(e.Fragment, {
    children: e.jsxs(s, {
      children: [
        e.jsx(s.Header, {
          children: e.jsx(l, { children: e.jsx(i, { children: e.jsx(s.Title, { as: 'h5', children: 'ประวัติคำขอรับบริการ' }) }) })
        }),
        e.jsx(s.Body, {
          children: e.jsxs(m, {
            striped: !0,
            bordered: !0,
            hover: !0,
            responsive: !0,
            className: 'm-0',
            children: [
              e.jsx('thead', {
                children: e.jsxs('tr', {
                  children: [
                    e.jsx('th', { className: 'text-center', children: '#' }),
                    e.jsx('th', { className: 'text-center', children: 'วันที่สร้าง' }),
                    e.jsx('th', { className: 'text-center', children: 'เลขที่คำขอบริการ' }),
                    e.jsx('th', { children: 'ประเภทคำขอ' }),
                    e.jsx('th', { className: 'text-center', children: 'จำนวนตัวอย่าง' }),
                    e.jsx('th', { className: 'text-center', children: 'วันที่เริ่มทดสอบ' }),
                    e.jsx('th', { className: 'text-center', children: 'วันที่สิ้นสุด' }),
                    e.jsx('th', { className: 'text-center', children: 'สถานะปัจจุบัน' }),
                    e.jsx('th', { className: 'text-center', children: 'Action' })
                  ]
                })
              }),
              e.jsx('tbody', {
                children: n.map((t, r) =>
                  e.jsxs(
                    'tr',
                    {
                      children: [
                        e.jsx('td', { className: 'text-center', children: r + 1 }),
                        e.jsx('td', { className: 'text-center', children: t.create_date }),
                        e.jsx('td', { className: 'text-center', children: t.requestNo }),
                        e.jsx('td', { children: t.typeRequest }),
                        e.jsx('td', { className: 'text-center', children: t.sampleCout }),
                        e.jsx('td', { className: 'text-center', children: t.start_date }),
                        e.jsx('td', { className: 'text-center', children: t.end_date }),
                        e.jsx('td', {
                          className: 'text-center',
                          children: e.jsx(o, {
                            className: 'p-2',
                            style: { fontWeight: 'normal' },
                            bg: t.status === 'กำลังดำเนินการ' ? 'warning' : t.status === 'เสร็จสิ้น' ? 'success' : 'secondary',
                            children: t.currentStep
                          })
                        }),
                        e.jsxs('td', {
                          className: 'text-center',
                          children: [
                            e.jsx(a, {
                              variant: 'primary',
                              size: 'sm',
                              className: 'me-2',
                              onClick: () => {
                                c('/request/detial');
                              },
                              children: e.jsx('i', { className: 'feather icon-file-text m-0' })
                            }),
                            t.status !== 'เสร็จสิ้น' &&
                              e.jsx(a, {
                                variant: 'info',
                                size: 'sm',
                                className: 'me-2',
                                onClick: () => {},
                                children: e.jsx('i', { className: 'feather icon-edit m-0' })
                              }),
                            t.status !== 'เสร็จสิ้น' &&
                              e.jsx(a, {
                                variant: 'danger',
                                size: 'sm',
                                onClick: () => {},
                                children: e.jsx('i', { className: 'feather icon-trash-2 m-0' })
                              })
                          ]
                        })
                      ]
                    },
                    r
                  )
                )
              })
            ]
          })
        })
      ]
    })
  });
};
export { u as default };
