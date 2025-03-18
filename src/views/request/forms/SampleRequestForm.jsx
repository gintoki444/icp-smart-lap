import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAllFertilicerType } from 'services/_api/fertilizerTypesRequest';
import StepForm from './Steps/StepForm';

export const SampleRequestForm = ({ onHandleSave, userId, sampleType, company, spacialCon }) => {
  const navigate = useNavigate();
  const [fertilizerTypes, setFertilizerTypes] = useState([]);

  const initialValues = {
    user_id: userId,
    company_id: company.company_id,
    analysisMethod: 'is_registration_analysis',
    spacialCon: '',
    notes: '',
    sample_type_id: sampleType,
    fertilizerRecords: [],
    files: []
  };

  const validationSchema = Yup.object({
    analysisMethod: Yup.string().test('analysis-method-required', 'กรุณาเลือกวัตถุประสงค์การขอใช้บริการ', function (value) {
      const { sample_type_id } = this.options.context;
      if (sample_type_id === 1) {
        return value && ['is_registration_analysis', 'is_quality_check_analysis'].includes(value);
      }
      return true;
    }),
    notes: Yup.string().notRequired(),
    fertilizerRecords: Yup.array()
      .min(1, 'กรุณาเพิ่มข้อมูลปุ๋ยอย่างน้อยหนึ่งรายการ')
      .of(
        Yup.object({
          fertilizer_type_id: Yup.number().required('กรุณาเลือกประเภทลักษณะปุ๋ย').typeError('กรุณาเลือกประเภทลักษณะปุ๋ย'),
          packaging_id: Yup.number().required('กรุณาเลือกภาชนะบรรจุ').typeError('กรุณาเลือกภาชนะบรรจุ'),
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
          sample_weight: Yup.number().required('กรุณากรอกปริมาณ').typeError('ปริมาณต้องเป็นตัวเลข').positive('ปริมาณต้องมากกว่า 0'),
          sample_weight_unit: Yup.string().required('กรุณากรอกหน่วย')
        })
      ),
    files: Yup.array().min(1, 'กรุณาอัปโหลดเอกสารอย่างน้อยหนึ่งไฟล์').required('กรุณาอัปโหลดเอกสาร')
  });

  const handleSubmit = async (values, { setSubmitting, validateForm }) => {
    console.log('Submitting - Values:', values);
    const errors = await validateForm();
    console.log('Submitting - Errors:', errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form Values:', values);
      onHandleSave(values);
    } else {
      console.log('Validation Errors:', errors);
    }

    setSubmitting(false);
  };

  const getFertilizerTypes = async () => {
    try {
      const response = await getAllFertilicerType();
      setFertilizerTypes(response);
    } catch (error) {
      console.error('Error fetching fertilizer types:', error);
    }
  };

  useEffect(() => {
    getFertilizerTypes();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
      validationContext={{ sample_type_id: sampleType }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit: formikHandleSubmit, validateForm }) => {
        console.log('Formik values:', values);
        console.log('Formik Errors:', errors);

        return (
          <Form onSubmit={formikHandleSubmit}>
            <Card>
              <Card.Header>
                <h5>
                  {sampleType === 1 ? 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยอินทรีย์' : 'ลงทะเบียนใบนำส่งตัวอย่างปุ๋ยเคมี เพื่อขึ้นทะเบียนปุ๋ย'}
                </h5>
              </Card.Header>
              <Card.Body className="p-0">
                <StepForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  company={company}
                  spacialCon={spacialCon}
                  fertilizerTypes={fertilizerTypes}
                  sampleType={sampleType}
                  validateForm={validateForm}
                />
              </Card.Body>
              <Card.Footer className="text-start">
                <Button variant="primary" type="submit">
                  <i className="feather icon-save" /> บันทึก
                </Button>
                <Button variant="danger" onClick={() => navigate('/request')}>
                  <i className="feather icon-corner-up-left" /> ยกเลิก
                </Button>
              </Card.Footer>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SampleRequestForm;
