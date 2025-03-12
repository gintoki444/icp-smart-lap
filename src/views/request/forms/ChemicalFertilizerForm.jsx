import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import Step1 from './Steps/Step1'; // Component Step 1
import Step2 from './Steps/Step2'; // Component Step 2
import Step3 from './Steps/Step3'; // Component Step 3

export const ChemicalFertilizerForm = ({ onHandleSave, userId, sampleType }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const [spacialCon, setSpacialCon] = useState({});

  // Initial values
  const initialValues = {
    user_id: userId,
    company_id: null,
    analysisMethod: 'is_registration_analysis',
    notes: '',
    sample_type_id: sampleType,
    fertilizerRecords: [],
    reportMethod: 'is_self_pickup',
    email: '',
    sameAddress: true,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
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
    // Step 1
    Yup.object({
      company_id: Yup.string().required('กรุณาเลือกบริษัท')
    }),
    // Step 2
    Yup.object({
      fertilizerRecords: Yup.array().min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
    })
    // Step 3
    // Yup.object({
    //   reportMethod: Yup.array().min(1, 'กรุณาเลือกอย่างน้อยหนึ่งวิธีรับรายงานผล').required('กรุณาเลือกวิธีรับรายงานผล'),
    //   email: Yup.string().when('reportMethod', {
    //     is: (val) => val && val.includes('ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail'),
    //     then: Yup.string().email('อีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
    //     otherwise: Yup.string()
    //   }),
    //   address: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกที่อยู่'),
    //     otherwise: Yup.string()
    //   }),
    //   province: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกจังหวัด'),
    //     otherwise: Yup.string()
    //   }),
    //   district: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกอำเภอ'),
    //     otherwise: Yup.string()
    //   }),
    //   subDistrict: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกตำบล'),
    //     otherwise: Yup.string()
    //   }),
    //   postalCode: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกรหัสไปรษณีย์'),
    //     otherwise: Yup.string()
    //   }),
    //   phone: Yup.string().when(['reportMethod', 'sameAddress'], {
    //     is: (reportMethod, sameAddress) => reportMethod && reportMethod.includes('ส่งทางไปรษณีย์') && !sameAddress,
    //     then: Yup.string().required('กรุณากรอกเบอร์โทรศัพท์'),
    //     otherwise: Yup.string()
    //   }),
    //   sampleDisposal: Yup.string().required('กรุณาเลือกวิธีการจำหน่ายตัวอย่าง')
    // })
  ];

  const currentValidationSchema = stepValidationSchemas[step - 1];

  const handleNext = (values, { setErrors }) => {
    currentValidationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        setStep(step + 1); // เปลี่ยน step เฉยๆ ไม่ submit
      })
      .catch((err) => {
        const formErrors = {};
        err.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
        console.log('Validation errors:', formErrors);
      });
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Values from All Steps:', values); // แสดง values จากทั้ง 3 step
    onHandleSave(values); // ส่งข้อมูลไปยัง parent component
    setSubmitting(false);
    // navigate('/request/'); // ถ้าต้องการ redirect หลัง submit
  };

  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
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
              <h5>ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยเคมีเพื่อขึ้นทะเบียนปุ๋ย</h5>
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
                      <span style={{ fontSize: 24 }}>{step === 1 ? '1' : <i className="feather icon-check" />}</span>
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
                      <span style={{ fontSize: 24 }}>{step === 2 ? '2' : <i className="feather icon-check" />}</span>
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
                      <span style={{ fontSize: 24 }}>{step === 3 ? '3' : <i className="feather icon-check" />}</span>
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
                <Step2 values={values} errors={errors} touched={touched} setFieldValue={setFieldValue} fertilizerTypes={fertilizerTypes} />
              )}
              {step === 3 && (
                <Step3
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
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
              <Button variant="danger" onClick={() => navigate('/request/')}>
                <i className="feather icon-corner-up-left" /> ยกเลิก
              </Button>
            </Card.Footer>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default ChemicalFertilizerForm;
