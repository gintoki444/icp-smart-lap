import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypes';
import Step1 from './Steps/Step1'; // Component Step 1
import Step2 from './Steps/Step2'; // Component Step 2
import Step3 from './Steps/Step3'; // Component Step 3
import { getAllCustomer } from 'services/_api/customerRequest';

export const SampleRequestForm = ({ onHandleSave, userId, sampleType }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [spacialCon, setSpacialCon] = useState({});

  // Initial values
  const initialValues = {
    user_id: userId,
    company_id: null,
    analysisMethod: 'is_registration_analysis',
    notes: '',
    sample_type_id: sampleType,
    fertilizerRecords: [],
    reportMethod: [],
    email: '',
    sameAddress: true,
    sr_mail_delivery_location: '',
    phone: '',
    otherRequirements: '',
    files: [],

    // สำหรับ Step 3 รายละเอียดการรับตัวอย่างและการจัดส่ง
    sampleDisposal: 'is_lab_dispose_sample',
    is_self_pickup: 0,
    pdf_email: '',
    is_mail_delivery: 0,
    is_lab_dispose_sample: 1,
    is_collect_within_3_months: 0,
    is_return_sample: 0,
    test_all_items: 1,
    submitted_by: '',
    submitted_date: '',
    submitted_phone: ''
  };

  // Validation schemas
  const stepValidationSchemas = [
    // Step 1 (ไม่เปลี่ยน)
    Yup.object({
      company_id: Yup.string().required('กรุณาเลือกบริษัท'),
      analysisMethod: Yup.string()
        .required('กรุณาเลือกวัตถุประสงค์การขอใช้บริการ')
        .oneOf(['is_registration_analysis', 'is_quality_check_analysis'], 'กรุณาเลือกวัตถุประสงค์ที่ถูกต้อง'),
      notes: Yup.string().max(500, 'ความต้องการอื่นต้องไม่เกิน 500 ตัวอักษร').optional()
    }),
    // Step 2
    Yup.object({
      fertilizerRecords: Yup.array()
        .min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
        .of(
          Yup.object({
            fertilizerCategory: Yup.string()
              .required('กรุณาเลือกประเภทของปุ๋ย')
              .oneOf(
                ['is_single_fertilizer', 'is_compound_fertilizer', 'is_mixed_fertilizer', 'is_secondary_nutrient_fertilizer'],
                'กรุณาเลือกประเภทปุ๋ยที่ถูกต้อง'
              ),
            fertilizer_type_id: Yup.number().required('กรุณาเลือกประเภทลักษณะปุ๋ย').nullable(),
            packaging_id: Yup.number().required('กรุณาเลือกภาชนะบรรจุ').nullable(),
            color: Yup.string().required('กรุณากรอกสี'),
            fertilizer_formula: Yup.string().required('กรุณากรอกสูตรปุ๋ย'),
            common_name: Yup.string().required('กรุณากรอกชื่อสามัญ'),
            trade_name: Yup.string().required('กรุณากรอกชื่อการค้า'),
            trademark: Yup.string().required('กรุณากรอกเครื่องหมายการค้า'),
            manufacturer: Yup.string().required('กรุณากรอกชื่อผู้ผลิต'),
            manufacturer_country: Yup.string().required('กรุณากรอกประเทศของผู้ผลิต'),
            supplier: Yup.string().required('กรุณากรอกชื่อผู้จัดจำหน่าย'),
            supplier_country: Yup.string().required('กรุณากรอกประเทศของผู้จัดจำหน่าย'),
            composition: Yup.string().required('กรุณากรอกวัตถุส่วนประกอบของปุ๋ย'),
            sample_weight: Yup.number().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข'),
            sample_weight_unit: Yup.string().required('กรุณากรอกหน่วย'),
            test_items: Yup.array()
              .min(1, 'กรุณาเลือกอย่างน้อยหนึ่งรายการทดสอบ')
              .of(
                Yup.object({
                  test_item_id: Yup.number().required('ต้องระบุรายการทดสอบ'),
                  test_percentage: Yup.string().test('requires-percentage', 'กรุณากรอกเปอร์เซ็นต์สำหรับรายการนี้', function (value) {
                    const testItemId = this.parent.test_item_id;
                    const requiresPercentage = [1, 3, 5, 7, 10, 15].includes(testItemId);
                    if (requiresPercentage) {
                      return (
                        value !== undefined && value !== null && value !== '' && /^\d+(\.\d+)?$/.test(value) // เปลี่ยนจาก % เป็นตัวเลขธรรมดา
                      );
                    }
                    return true;
                  })
                })
              )
          })
        )
    }), // Step 3
    Yup.object({
      reportMethod: Yup.array()
        .min(1, 'กรุณาเลือกวิธีการรับรายงานอย่างน้อยหนึ่งวิธี')
        .of(Yup.string().oneOf(['is_self_pickup', 'pdf_email', 'is_mail_delivery'], 'วิธีการรับรายงานไม่ถูกต้อง')),
      email: Yup.string().test('email-required', 'กรุณากรอกอีเมลสำหรับรับผลตรวจ', function (value) {
        const reportMethod = this.parent.reportMethod;
        if (Array.isArray(reportMethod) && reportMethod.includes('pdf_email')) {
          return Yup.string().email('กรุณากรอกอีเมลที่ถูกต้อง').isValidSync(value);
        }
        return true;
      }),
      sameAddress: Yup.boolean(),
      sr_mail_delivery_location: Yup.string().test('address-required', 'กรุณากรอกที่อยู่จัดส่ง', function (value) {
        const { reportMethod, sameAddress } = this.parent;
        if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
          return value !== undefined && value !== null && value.trim() !== '';
        }
        return true;
      }),
      phone: Yup.string().test('phone-required', 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก', function (value) {
        const { reportMethod, sameAddress } = this.parent;
        if (Array.isArray(reportMethod) && reportMethod.includes('is_mail_delivery') && !sameAddress) {
          return value !== undefined && value !== null && value.trim() !== '' && /^\d{9,10}$/.test(value);
        }
        return true;
      }),
      sampleDisposal: Yup.string()
        .required('กรุณาเลือกวิธีการจำหน่ายตัวอย่าง')
        .oneOf(['is_lab_dispose_sample', 'is_collect_within_3_months', 'is_return_sample'], 'วิธีการจำหน่ายตัวอย่างไม่ถูกต้อง'),
      test_all_items: Yup.boolean().required('กรุณาเลือกขอบเขตการทดสอบ'),
      submitted_by: Yup.string().required('กรุณากรอกชื่อผู้ส่งตัวอย่าง'),
      submitted_phone: Yup.string()
        .required('กรุณากรอกเบอร์โทรศัพท์ผู้ส่งตัวอย่าง')
        .matches(/^\d{9,10}$/, 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก'),
      submitted_date: Yup.string().required('กรุณาเลือกวันที่ส่ง'),
      files: Yup.array().min(1, 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์').of(Yup.mixed())
    })
  ];

  const currentValidationSchema = stepValidationSchemas[step - 1];

  const handleNext = (values, { setErrors }) => {
    // setStep(step + 1);
    currentValidationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        setStep(step + 1); // เปลี่ยน step เฉยๆ ไม่ submit
      })
      .catch((err) => {
        const formErrors = {};
        if (err.name === 'ValidationError' && Array.isArray(err.inner)) {
          err.inner.forEach((error) => {
            formErrors[error.path] = error.message;
          });
        } else {
          formErrors['general'] = err.message || 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล';
        }
        setErrors(formErrors);
        console.log('Validation errors:', formErrors);
      });
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Values from All Steps:', values); // แสดง values จากทั้ง 3 step
    onHandleSave(values); // ส่งข้อมูลไปยัง parent component
    setSubmitting(false);
    // navigate('/user/request/'); // ถ้าต้องการ redirect หลัง submit
  };

  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyList = async () => {
    try {
      const response = await getAllCustomer();
      console.log('company:', response);
      setCompanyList(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetCusSpacialCon = async (companyId) => {
    try {
      const response = await getCustomerSpecialConditionsByID(companyId);
      setSpacialCon(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error(error);
      setSpacialCon([]);
    }
  };

  useEffect(() => {
    getFertilizerTypes();
    getCompanyList();
  }, []);

  return (
    <Formik initialValues={initialValues} validationSchema={currentValidationSchema} onSubmit={handleSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit: formikHandleSubmit }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (step === 3) formikHandleSubmit(e);
          }}
        >
          <Card>
            <Card.Header>
              <h5>{sampleType === 1 ? 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยอินทรีย์' : 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย'}</h5>
            </Card.Header>
            <Card.Body>
              {/* Progress Steps */}
              <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                <li
                  className={`form-stepper-list text-center ${
                    step === 1 ? 'form-stepper-active' : step > 1 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="1"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 1 ? <i className="feather icon-check" /> : '1'}</span>
                    </span>
                    <div className="label">ข้อมูลบริษัท</div>
                  </a>
                </li>
                <li
                  className={`form-stepper-list text-center ${
                    step === 2 ? 'form-stepper-active' : step > 2 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="2"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 2 ? <i className="feather icon-check" /> : '2'}</span>
                    </span>
                    <div className="label">ข้อมูลปุ๋ยเคมี</div>
                  </a>
                </li>
                <li
                  className={`form-stepper-list text-center ${
                    step === 3 ? 'form-stepper-active' : step > 3 ? 'form-stepper-completed' : 'form-stepper-unfinished'
                  }`}
                  step="3"
                >
                  <a className="mx-2">
                    <span className="form-stepper-circle">
                      <span style={{ fontSize: 24 }}>{step > 3 ? <i className="feather icon-check" /> : '3'}</span>
                    </span>
                    <div className="label">ที่อยู่การจัดส่ง</div>
                  </a>
                </li>
              </ul>

              {/* Step Components */}
              {step === 1 && (
                <Step1
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  spacialCon={spacialCon}
                  handleGetCusSpacialCon={handleGetCusSpacialCon}
                />
              )}
              {step === 2 && (
                <Step2
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  companyData={companyList}
                  fertilizerTypes={fertilizerTypes}
                />
              )}
              {step === 3 && (
                <Step3
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  companyData={companyList}
                />
              )}
            </Card.Body>
            <Card.Footer className="text-start">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrev}>
                  <i className="feather icon-arrow-left" /> ย้อนกลับ
                </Button>
              )}
              {step < 3 ? (
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault(); // ป้องกัน submit
                    handleNext(values, { setErrors: setFieldValue });
                  }}
                >
                  ถัดไป <i className="feather icon-arrow-right" style={{ marginLeft: 12, marginRight: 0 }} />
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  <i className="feather icon-save" /> บันทึก
                </Button>
              )}
              <Button variant="danger" onClick={() => navigate('/user/request')}>
                <i className="feather icon-corner-up-left" /> ยกเลิก
              </Button>
            </Card.Footer>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default SampleRequestForm;
