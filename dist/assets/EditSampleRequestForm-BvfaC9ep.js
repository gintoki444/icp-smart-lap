import { u as pe, t as de, az as ue, r as c, k as fe, j as r, F as he, B as w } from './index-DZpC_pHZ.js';
import { c as z, a as o, d as j, e as k, f as P, F as ge } from './formik.esm-DH0jrOO4.js';
import { g as ye } from './specialConditionsRequest-DpcGqaux.js';
import { g as xe } from './testItemsRequest-5XlhAVBO.js';
import { S as be, a as Se, b as qe } from './Step3-DjsIlKed.js';
import { g as ze } from './customerRequest-CwUVzGH7.js';
import { b as we, h as je, a as ke } from './serviceRequest-D-ZD1URS.js';
import { d as Ce, b as Ne, e as V, a as U, p as Ie } from './sampleSubmissionsRequest-DYxy7UJJ.js';
import { h as De } from './uploadFileRequest-j7nqPy1R.js';
import { C } from './Card-ZCMDsCmS.js';
import './toPropertyKey-COtC2h-V.js';
import './DefaultPropsProvider-LyYhFUFs.js';
import './Transition-DW97tWQD.js';
import './Table-Bs-13SI2.js';
import './ButtonGroup-DLGnQ8T-.js';
import './Modal-DVn7-Fnl.js';
import './CloseButton-DgEPtGiG.js';
import './index-kdHliud_.js';
import './tslib.es6-CTYbIaVE.js';
import './firebaseConfig-pMHECxRz.js';
const es = ({ userId: N }) => {
  var E;
  const I = pe(),
    L = de(),
    { requestId: O } = ue(),
    f = ((E = L.state) == null ? void 0 : E.id) || O || null,
    [l, D] = c.useState(1),
    [M, B] = c.useState(null),
    [b, G] = c.useState(null),
    [T, H] = c.useState([]),
    [J, K] = c.useState([]),
    [Q, v] = c.useState({}),
    [S, g] = c.useState(null),
    [A, W] = c.useState(null),
    [Me, X] = c.useState([]);
  c.useEffect(() => {
    const e = localStorage.getItem('authToken');
    e &&
      fe(e).then((s) => {
        (N = s.user.user_id), X(s.user);
      });
  }, []);
  const Y = (e, s) => {
      console.log('company:', s);
      const n = e.sample_submissions || [],
        a = n[0] || {};
      return {
        user_id: N,
        company_id: e.customer_id,
        analysisMethod: e.is_registration_analysis ? 'is_registration_analysis' : 'is_quality_check_analysis',
        notes: e.notes || '',
        sample_type_id: e.sample_type_id,
        fertilizerRecords: n.map((t) => ({
          request_id: t.request_id,
          fertilizerCategory: t.is_single_fertilizer
            ? 'is_single_fertilizer'
            : t.is_compound_fertilizer
              ? 'is_compound_fertilizer'
              : t.is_mixed_fertilizer
                ? 'is_mixed_fertilizer'
                : 'is_secondary_nutrient_fertilizer',
          fertilizer_type_id: t.fertilizer_type_id,
          color: t.color || '',
          fertilizer_formula: t.fertilizer_formula || '',
          common_name: t.common_name || '',
          trade_name: t.trade_name || '',
          trademark: t.trademark || '',
          manufacturer: t.manufacturer || '',
          manufacturer_country: t.manufacturer_country || '',
          supplier: t.supplier || '',
          supplier_country: t.supplier_country || '',
          composition: t.composition || '',
          sample_weight: t.sample_weight ? parseFloat(t.sample_weight) : null,
          sample_weight_unit: t.sample_weight_unit ? t.sample_weight_unit.replace('.', '') : '',
          packaging_id: t.packaging_id,
          packaging_other: t.packaging_other || '',
          submission_id: t.submission_id,
          test_items: t.sample_submission_details.map((_) => ({ test_item_id: _.test_item_id, test_percentage: _.test_percentage || '' }))
        })),
        reportMethod: [
          e.sr_is_self_pickup ? 'is_self_pickup' : null,
          e.sr_pdf_email ? 'pdf_email' : null,
          e.sr_is_mail_delivery ? 'is_mail_delivery' : null
        ].filter(Boolean),
        email: e.sr_pdf_email || '',
        sameAddress: e.sr_mail_delivery_location === s.document_address,
        sr_mail_delivery_location: e.sr_mail_delivery_location || '',
        phone: a.phone || '',
        sampleDisposal: a.is_lab_dispose_sample
          ? 'is_lab_dispose_sample'
          : a.is_collect_within_3_months
            ? 'is_collect_within_3_months'
            : 'is_return_sample',
        test_all_items: a.test_all_items !== null ? !!a.test_all_items : !0,
        submitted_by: a.submitted_by || '',
        submitted_date: a.submission_date ? new Date(a.submission_date).toISOString().split('T')[0] : '',
        submitted_phone: a.phone || '',
        files: e.service_request_documents.map((t) => ({ name: t.file_name, path: t.file_path, document_id: t.document_id }))
      };
    },
    Z = async (e) => {
      try {
        const s = await se(),
          n = await we(e);
        console.log('getServiceRequest:', n),
          console.log(
            'company:',
            s.find((t) => t.company_id === n.customer_id)
          );
        const a = Y(
          n,
          s.find((t) => t.company_id === n.customer_id)
        );
        B(a), G(n);
      } catch (s) {
        console.log('Error fetching service request:', s), g('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่');
      }
    },
    ee = async () => {
      try {
        const e = await xe();
        K(e);
      } catch (e) {
        console.log(e);
      }
    },
    se = async () => {
      try {
        const e = await ze();
        return H(e), e;
      } catch (e) {
        console.log(e);
      }
    };
  c.useEffect(() => {
    f ? (Z(f), ee()) : g('ไม่พบ Request ID');
  }, [f, N, I]);
  const F = [
      z({
        company_id: o().required('กรุณาเลือกบริษัท').nullable(),
        analysisMethod: o()
          .required('กรุณาเลือกวัตถุประสงค์การขอใช้บริการ')
          .oneOf(['is_registration_analysis', 'is_quality_check_analysis'], 'กรุณาเลือกวัตถุประสงค์ที่ถูกต้อง'),
        notes: o().max(500, 'ความต้องการอื่นต้องไม่เกิน 500 ตัวอักษร').optional()
      }),
      z({
        fertilizerRecords: j()
          .min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
          .of(
            z({
              fertilizerCategory: o()
                .required('กรุณาเลือกประเภทของปุ๋ย')
                .oneOf(
                  ['is_single_fertilizer', 'is_compound_fertilizer', 'is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'],
                  'กรุณาเลือกประเภทปุ๋ยที่ถูกต้อง'
                ),
              fertilizer_type_id: k().required('กรุณาเลือกประเภทลักษณะปุ๋ย').nullable(),
              packaging_id: k().required('กรุณาเลือกภาชนะบรรจุ').nullable(),
              color: o().required('กรุณากรอกสี'),
              fertilizer_formula: o().required('กรุณากรอกสูตรปุ๋ย'),
              common_name: o().required('กรุณากรอกชื่อสามัญ'),
              trade_name: o().required('กรุณากรอกชื่อการค้า'),
              trademark: o().required('กรุณากรอกเครื่องหมายการค้า'),
              manufacturer: o().required('กรุณากรอกชื่อผู้ผลิต'),
              manufacturer_country: o().required('กรุณาเลือกประเทศของผู้ผลิต'),
              supplier: o().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
              supplier_country: o().required('กรุณาเลือกประเทศของผู้จัดจำหน่าย'),
              composition: o().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
              sample_weight: k().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข'),
              sample_weight_unit: o().required('กรุณาเลือกหน่วย').oneOf(['g', 'kg', 'oz', 'ml', 'L'], 'กรุณาเลือกหน่วยที่ถูกต้อง'),
              test_items: j()
                .min(1, 'กรุณาเลือกอย่างน้อยหนึ่งรายการทดสอบ')
                .of(
                  z({
                    test_item_id: k().required('ต้องระบุรายการทดสอบ'),
                    test_percentage: o().test('requires-percentage', 'กรุณากรอกเปอร์เซ็นต์สำหรับรายการนี้', function (e) {
                      const s = this.parent.test_item_id;
                      return [1, 3, 5, 7, 10, 15].includes(s) ? e != null && e !== '' && /^\d+(\.\d+)?$/.test(e) : !0;
                    })
                  })
                )
            })
          )
      }),
      z({
        reportMethod: j()
          .min(1, 'กรุณาเลือกวิธีการรับรายงานอย่างน้อยหนึ่งวิธี')
          .of(o().oneOf(['is_self_pickup', 'pdf_email', 'is_mail_delivery'], 'วิธีการรับรายงานไม่ถูกต้อง')),
        email: o().test('email-required', 'กรุณากรอกอีเมลสำหรับรับผลตรวจ', function (e) {
          const s = this.parent.reportMethod;
          return Array.isArray(s) && s.includes('pdf_email') ? o().email('กรุณากรอกอีเมลที่ถูกต้อง').isValidSync(e) : !0;
        }),
        sameAddress: P(),
        sr_mail_delivery_location: o().test('address-required', 'กรุณากรอกที่อยู่จัดส่ง', function (e) {
          const { reportMethod: s, sameAddress: n } = this.parent;
          return Array.isArray(s) && s.includes('is_mail_delivery') && !n ? e != null && e.trim() !== '' : !0;
        }),
        phone: o().test('phone-required', 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก', function (e) {
          const { reportMethod: s, sameAddress: n } = this.parent;
          return Array.isArray(s) && s.includes('is_mail_delivery') && !n ? e != null && e.trim() !== '' && /^\d{9,10}$/.test(e) : !0;
        }),
        sampleDisposal: o()
          .required('กรุณาเลือกวิธีการจำหน่ายตัวอย่าง')
          .oneOf(['is_lab_dispose_sample', 'is_collect_within_3_months', 'is_return_sample'], 'วิธีการจำหน่ายตัวอย่างไม่ถูกต้อง'),
        test_all_items: P().required('กรุณาเลือกขอบเขตการทดสอบ'),
        submitted_by: o().required('กรุณากรอกชื่อผู้ส่งตัวอย่าง'),
        submitted_phone: o()
          .required('กรุณากรอกเบอร์โทรศัพท์ผู้ส่งตัวอย่าง')
          .matches(/^\d{9,10}$/, 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก'),
        submitted_date: o().required('กรุณาเลือกวันที่ส่ง'),
        files: j().test('files-required', 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์', function (e) {
          return e && e.length > 0;
        })
      })
    ][l - 1],
    ie = (e, { setErrors: s }) => {
      console.log('currentValidationSchema values:', e),
        F.validate(e, { abortEarly: !1 })
          .then(() => {
            console.log('step:', l), D(l + 1);
          })
          .catch((n) => {
            console.log('Caught error:', n);
            const a = {};
            n.name === 'ValidationError' && Array.isArray(n.inner)
              ? n.inner.forEach((t) => {
                  a[t.path] = t.message;
                })
              : (a.general = n.message || 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล'),
              s(a),
              console.log('Validation errors:', a);
          });
    },
    te = () => D(l - 1),
    $ = (e, s) =>
      e.customer_id !== s.company_id ||
      e.is_registration_analysis !== (s.analysisMethod === 'is_registration_analysis' ? 1 : 0) ||
      e.is_quality_check_analysis !== (s.analysisMethod === 'is_quality_check_analysis' ? 1 : 0) ||
      e.sr_is_mail_delivery !== (s.analysisMethod === 'sr_is_mail_delivery' ? 1 : 0) ||
      e.sr_is_self_pickup !== (s.analysisMethod === 'sr_is_self_pickup' ? 1 : 0) ||
      e.sr_pdf_email !== s.sr_pdf_email ||
      e.sr_mail_delivery_location !== s.sr_mail_delivery_location ||
      e.notes !== s.notes,
    re = (e, s) =>
      e.length !== s.length
        ? !0
        : e.some((n, a) => {
            const t = s[a];
            return n.test_item_id !== t.test_item_id || n.test_percentage !== t.test_percentage;
          }),
    ae = (e, s) =>
      [
        'fertilizerCategory',
        'fertilizer_type_id',
        'color',
        'fertilizer_formula',
        'common_name',
        'trade_name',
        'trademark',
        'manufacturer',
        'manufacturer_country',
        'supplier',
        'supplier_country',
        'composition',
        'sample_weight',
        'sample_weight_unit',
        'packaging_id',
        'packaging_other'
      ].some((a) => e[a] !== s[a]) || re(e.test_items || [], s.test_items || []),
    ne = async (e, s, n, a) => {
      const t = e.filter((i) => !s.some((h) => h.submission_id === i.submission_id)),
        _ = t.map((i) => (i.submission_id ? Ce(i.submission_id) : Promise.resolve()));
      await Promise.all(_), t.forEach((i) => console.log(`Deleted sample_submission ID: ${i.submission_id}`));
      const d = s.map(async (i) => {
        const h = {
          request_id: n,
          is_single_fertilizer: i.fertilizerCategory === 'is_single_fertilizer' ? 1 : 0,
          is_compound_fertilizer: i.fertilizerCategory === 'is_compound_fertilizer' ? 1 : 0,
          is_mixed_fertilizer: i.fertilizerCategory === 'is_mixed_fertilizer' ? 1 : 0,
          is_secondary_nutrient_fertilizer: i.fertilizerCategory === 'is_secondary_nutrient_fertilizer' ? 1 : 0,
          fertilizer_type_id: i.fertilizer_type_id,
          color: i.color,
          fertilizer_formula: i.fertilizer_formula,
          common_name: i.common_name,
          trade_name: i.trade_name,
          trademark: i.trademark,
          manufacturer: i.manufacturer,
          manufacturer_country: i.manufacturer_country,
          supplier: i.supplier,
          supplier_country: i.supplier_country,
          composition: i.composition,
          sample_weight: i.sample_weight ? String(i.sample_weight) : null,
          sample_weight_unit: i.sample_weight_unit,
          packaging_id: i.packaging_id,
          packaging_other: i.packaging_other,
          test_all_items: a.test_all_items ? 1 : 0,
          is_lab_dispose_sample: a.sampleDisposal === 'is_lab_dispose_sample' ? 1 : 0,
          is_collect_within_3_months: a.sampleDisposal === 'is_collect_within_3_months' ? 1 : 0,
          is_return_sample: a.sampleDisposal === 'is_return_sample' ? 1 : 0,
          submitted_by: a.submitted_by,
          phone: a.submitted_phone,
          submission_date: a.submitted_date
        };
        if ((console.log('sampleSubmissionData:', h), i.submission_id)) {
          const y = e.find((m) => m.submission_id === i.submission_id);
          ae(y, i) && (await Ne(h, i.submission_id), console.log(`Updated sample_submission ID: ${i.submission_id}`));
          const x = y.sample_submission_details || [],
            u = i.test_items || [],
            q = x.filter((m) => !u.some((p) => p.detail_id === m.detail_id)),
            _e = q.map((m) => (m.detail_id ? V(m.detail_id) : Promise.resolve()));
          if (
            (await Promise.all(_e),
            q.forEach((m) => console.log(`Deleted test_item ID: ${m.detail_id}`)),
            x.length !== u.length ||
              x.some((m) => u.some((p) => p.detail_id === m.detail_id && p.test_percentage !== m.test_percentage)) ||
              u.some((m) => !m.detail_id))
          ) {
            const m = x.map((p) => (p.detail_id ? V(p.detail_id) : Promise.resolve()));
            if (
              (await Promise.all(m), console.log(`Cleared all existing test_items for submission ID: ${i.submission_id}`), u.length > 0)
            ) {
              const p = {
                  submission_id: i.submission_id,
                  test_items: u.map((R) => ({ test_item_id: R.test_item_id, test_percentage: R.test_percentage }))
                },
                ce = await U(p);
              console.log(`Updated test_items for submission ID: ${i.submission_id}`, ce);
            }
          }
        } else {
          const y = await Ie(h);
          if (
            (console.log(`Created new sample_submission ID: ${y.submission_id}`),
            y.submission_id && i.test_items && i.test_items.length > 0)
          ) {
            const x = {
                submission_id: y.submission_id,
                test_items: i.test_items.map((q) => ({ test_item_id: q.test_item_id, test_percentage: q.test_percentage }))
              },
              u = await U(x);
            console.log('responseTestItem:', u);
          }
        }
      });
      await Promise.all(d);
    },
    oe = async (e, s, n, a) => {
      const t = s.filter((d) => !d.document_id);
      let _ = [];
      if (t.length > 0) {
        _ = await De(t, 'service-requests', 'service_');
        for (const d of _) {
          const i = d.fileName.split('/').pop(),
            h = { request_id: n, uploaded_by: a, file_name: i, file_path: d.fileName };
          await ke(h), console.log(`Added new document: ${i}`);
        }
      }
      return _;
    },
    le = async (e, { setSubmitting: s }) => {
      console.log('Form Values from All Steps:', e);
      try {
        const n = {
          user_id: e.user_id,
          customer_id: e.company_id,
          is_registration_analysis: e.analysisMethod === 'is_registration_analysis' ? 1 : 0,
          is_quality_check_analysis: e.analysisMethod === 'is_quality_check_analysis' ? 1 : 0,
          sr_is_self_pickup: e.reportMethod.includes('is_self_pickup') ? 1 : 0,
          sr_pdf_email: e.reportMethod.includes('pdf_email') ? e.email : '',
          sr_is_mail_delivery: e.reportMethod.includes('is_self_pickup') ? 1 : 0,
          sr_mail_delivery_location: e.sr_mail_delivery_location,
          notes: e.notes
        };
        console.log('step1 :', n),
          console.log('originalData :', b),
          console.log('hasStep1Changed(originalData, values) :', $(b, e)),
          $(b, e) && (await je(n, f), console.log('Updated service_requests'));
        try {
          await ne(b.sample_submissions, e.fertilizerRecords, f, e), console.log('Updated sample_submissions');
        } catch (a) {
          throw (console.error('Failed to update sample_submissions:', a), g('เกิดข้อผิดพลาดในการอัปเดตข้อมูลตัวอย่าง'), a);
        }
        try {
          await oe(b.service_request_documents, e.files, f), console.log('Updated files and documents');
        } catch (a) {
          throw (console.error('Failed to update files:', a), g('เกิดข้อผิดพลาดในการจัดการไฟล์'), a);
        }
        W('บันทึกการแก้ไขสำเร็จ'), g(null), s(!1);
      } catch (n) {
        console.error('Error updating form:', n), S || g('เกิดข้อผิดพลาดในการบันทึกข้อมูล'), s(!1);
      }
    },
    me = async (e) => {
      try {
        const s = await ye(e);
        v(Array.isArray(s) ? s : []);
      } catch (s) {
        console.error(s), v([]);
      }
    };
  return S
    ? r.jsx('div', { className: 'text-danger', children: S })
    : M
      ? r.jsx(ge, {
          initialValues: M,
          validationSchema: F,
          onSubmit: le,
          enableReinitialize: !0,
          children: ({ values: e, errors: s, touched: n, handleChange: a, handleBlur: t, setFieldValue: _, handleSubmit: d }) =>
            r.jsx(he, {
              onSubmit: (i) => {
                i.preventDefault(), l === 3 && d(i);
              },
              children: r.jsxs(C, {
                children: [
                  r.jsx(C.Header, { children: r.jsxs('h5', { children: ['แก้ไขใบนำส่งตัวอย่าง - Request ID: ', f] }) }),
                  r.jsxs(C.Body, {
                    children: [
                      r.jsxs('ul', {
                        className: 'form-stepper form-stepper-horizontal text-center mx-auto pl-0',
                        children: [
                          r.jsx('li', {
                            className: `form-stepper-list text-center ${l === 1 ? 'form-stepper-active' : l > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                            step: '1',
                            children: r.jsxs('a', {
                              className: 'mx-2',
                              children: [
                                r.jsx('span', {
                                  className: 'form-stepper-circle',
                                  children: r.jsx('span', {
                                    style: { fontSize: 24 },
                                    children: l > 1 ? r.jsx('i', { className: 'feather icon-check' }) : '1'
                                  })
                                }),
                                r.jsx('div', { className: 'label', children: 'ข้อมูลบริษัท' })
                              ]
                            })
                          }),
                          r.jsx('li', {
                            className: `form-stepper-list text-center ${l === 2 ? 'form-stepper-active' : l > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                            step: '2',
                            children: r.jsxs('a', {
                              className: 'mx-2',
                              children: [
                                r.jsx('span', {
                                  className: 'form-stepper-circle',
                                  children: r.jsx('span', {
                                    style: { fontSize: 24 },
                                    children: l > 2 ? r.jsx('i', { className: 'feather icon-check' }) : '2'
                                  })
                                }),
                                r.jsx('div', { className: 'label', children: 'ข้อมูลปุ๋ยเคมี' })
                              ]
                            })
                          }),
                          r.jsx('li', {
                            className: `form-stepper-list text-center ${l === 3 ? 'form-stepper-active' : l > 3 ? 'form-stepper-completed' : 'form-stepper-unfinished'}`,
                            step: '3',
                            children: r.jsxs('a', {
                              className: 'mx-2',
                              children: [
                                r.jsx('span', {
                                  className: 'form-stepper-circle',
                                  children: r.jsx('span', {
                                    style: { fontSize: 24 },
                                    children: l > 3 ? r.jsx('i', { className: 'feather icon-check' }) : '3'
                                  })
                                }),
                                r.jsx('div', { className: 'label', children: 'ที่อยู่การจัดส่ง' })
                              ]
                            })
                          })
                        ]
                      }),
                      l === 1 &&
                        r.jsx(be, {
                          values: e,
                          errors: s,
                          touched: n,
                          handleChange: a,
                          setFieldValue: _,
                          spacialCon: Q,
                          handleGetCusSpacialCon: me
                        }),
                      l === 2 && r.jsx(Se, { values: e, errors: s, touched: n, setFieldValue: _, companyData: T, fertilizerTypes: J }),
                      l === 3 &&
                        r.jsx(qe, { values: e, errors: s, touched: n, handleChange: a, handleBlur: t, setFieldValue: _, companyData: T }),
                      S && r.jsx('div', { className: 'text-danger mt-3', children: S }),
                      A && r.jsx('div', { className: 'text-success mt-3', children: A })
                    ]
                  }),
                  r.jsxs(C.Footer, {
                    className: 'text-start',
                    children: [
                      l > 1 &&
                        r.jsxs(w, {
                          variant: 'secondary',
                          onClick: te,
                          children: [r.jsx('i', { className: 'feather icon-arrow-left' }), ' ย้อนกลับ']
                        }),
                      l < 3
                        ? r.jsxs(w, {
                            variant: 'primary',
                            onClick: (i) => {
                              i.preventDefault(), ie(e, {});
                            },
                            children: [
                              'ถัดไป ',
                              r.jsx('i', { className: 'feather icon-arrow-right', style: { marginLeft: 12, marginRight: 0 } })
                            ]
                          })
                        : r.jsxs(w, {
                            variant: 'primary',
                            type: 'submit',
                            children: [r.jsx('i', { className: 'feather icon-save' }), ' แก้ไข']
                          }),
                      r.jsxs(w, {
                        variant: 'danger',
                        onClick: () => I('/request/'),
                        children: [r.jsx('i', { className: 'feather icon-corner-up-left' }), ' ยกเลิก']
                      })
                    ]
                  })
                ]
              })
            })
        })
      : r.jsx('div', { children: 'Loading...' });
};
export { es as default };
