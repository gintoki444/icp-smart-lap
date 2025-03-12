import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getCustomerSpecialConditionsByID } from 'services/_api/specialConditionsRequest';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { getAllCustomer } from 'services/_api/customerRequest';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const SampleRequestForm = ({ onHandleSave, userId, sampleType }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // เริ่มที่ 0 สำหรับ MUI Tabs
  const [fertilizerTypes, setFertilizerTypes] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [spacialCon, setSpacialCon] = useState({});

  const initialValues = {
    user_id: userId,
    company_id: null,
    analysisMethod: 'is_registration_analysis',
    spacialCon: '',
    notes: '',
    sample_type_id: sampleType,
    fertilizerRecords: [],
    files: []
  };

  const stepValidationSchemas = [
    Yup.object({
      company_id: Yup.string().required('กรุณาเลือกบริษัท'),
      analysisMethod: Yup.string()
        .required('กรุณาเลือกวัตถุประสงค์การขอใช้บริการ')
        .oneOf(['is_registration_analysis', 'is_quality_check_analysis'], 'กรุณาเลือกวัตถุประสงค์ที่ถูกต้อง'),
      notes: Yup.string().max(500, 'ความต้องการอื่นต้องไม่เกิน 500 ตัวอักษร').optional()
    }),
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
                      return value !== undefined && value !== null && value !== '' && /^\d+(\.\d+)?$/.test(value);
                    }
                    return true;
                  })
                })
              ),
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
            submitted_date: Yup.string().required('กรุณาเลือกวันที่ส่ง')
          })
        )
    }),
    Yup.object({
      files: Yup.array().min(1, 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์').of(Yup.mixed())
    })
  ];

  const currentValidationSchema = stepValidationSchemas[step];

  const handleNext = (values, { setErrors }) => {
    currentValidationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        setStep(step + 1);
      })
      .catch((err) => {
        const formErrors = {};
        if (err.name === 'ValidationError' && Array.isArray(err.inner)) {
          err.inner.forEach((error) => {
            formErrors[error.path] = error.message;
          });
        }
        setErrors(formErrors);
      });
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Values from All Steps:', values);
    onHandleSave(values);
    setSubmitting(false);
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
            if (step === 2) formikHandleSubmit(e);
          }}
        >
          <Card>
            <Card.Header>
              <h5>{sampleType === 1 ? 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยอินทรีย์' : 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยเคมี เพื่อขึ้นทะเบียนปุ๋ย'}</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <Card sx={{ borderBottom: 1, borderColor: 'divider', padding: 0 }} className="m-0 rendoly pt-2">
                <Tabs
                  value={step}
                  // onChange={(e, newValue) => setStep(newValue)} // ยังคงใช้ปุ่มควบคุม ดังนั้นอาจไม่จำเป็น แต่เก็บไว้เพื่อความยืดหยุ่น
                  aria-label="step tabs"
                  // TabIndicatorProps={{ style: { display: 'none' } }}
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      minWidth: 120,
                      fontSize: '1rem',
                      fontWeight: 'medium'
                    },
                    '& .Mui-selected': {
                      color: '#04a9f5 !important', // สีม่วงตามภาพ
                      fontWeight: 'bold'
                    },
                    '& .MuiTabs-indicator': {
                      height: 2,
                      backgroundColor: '#04a9f5' // เส้นด้านล่างเมื่อ Active
                    }
                  }}
                >
                  <Tab
                    label="1. ข้อมูลผู้ขึ้นทะเบียน"
                    disabled // ปิดการคลิกที่ tab
                    sx={{
                      textTransform: 'none',
                      // color: '#000',
                      color: step === 0 ? 'primary.main' : step > 0 ? '#20c997 !important' : '#000 !important',
                      fontWeight: 'normal !important'
                      // fontWeight: step === 0 ? 'bold' : step > 0 ? '#20c997 !important' : 'normal'
                    }}
                  />
                  <Tab
                    label="2. ข้อมูลตัวอย่าง"
                    disabled
                    sx={{
                      textTransform: 'none',
                      color: step === 1 ? 'primary.main' : step > 1 ? '#20c997 !important' : 'text.secondary',
                      fontWeight: 'normal !important'
                    }}
                  />
                  <Tab
                    label="3. การรับรายงานผล"
                    disabled
                    sx={{
                      textTransform: 'none',
                      color: step === 2 ? 'primary.main' : step > 2 ? '#20c997 !important' : 'text.secondary',
                      fontWeight: step === 2 ? 'bold' : 'normal'
                    }}
                  />
                </Tabs>
              </Card>

              <TabPanel value={step} index={0} sx={{ padding: 0 }}>
                <Step1
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  spacialCon={spacialCon}
                  handleGetCusSpacialCon={handleGetCusSpacialCon}
                />
              </TabPanel>
              <TabPanel value={step} index={1}>
                <Step2
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  companyData={companyList}
                  spacialCon={spacialCon}
                  fertilizerTypes={fertilizerTypes}
                />
              </TabPanel>
              <TabPanel value={step} index={2}>
                <Step3 values={values} errors={errors} touched={touched} setFieldValue={setFieldValue} companyData={companyList} />
              </TabPanel>
            </Card.Body>
            <Card.Footer className="text-start">
              {step > 0 && (
                <Button variant="secondary" onClick={handlePrev}>
                  <i className="feather icon-arrow-left" /> ย้อนกลับ
                </Button>
              )}
              {step < 2 ? (
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
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
              <Button variant="danger" onClick={() => navigate('/request')}>
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
