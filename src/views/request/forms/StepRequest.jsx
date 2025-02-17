import React, { useState } from 'react';
// import './StepsRequest.css';

const StepsRequest = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['กรอกแบบฟอร์ม', 'ตรวจสอบข้อมูล', 'รับตัวอย่างเข้าระบบ', 'ออกใบเสนอราคา', 'ออก Invoice'];

  const stepContents = [
    <div>
      <h3>กรอกแบบฟอร์ม</h3>
      <input type="text" className="multisteps-form__input form-control" placeholder="ชื่อบริษัท" />
      <input type="text" className="multisteps-form__input form-control mt-3" placeholder="ที่อยู่บริษัท" />
    </div>,
    <div>
      <h3>ตรวจสอบข้อมูล</h3>
      <p>โปรดตรวจสอบข้อมูลที่กรอก:</p>
      <ul>
        <li>ชื่อบริษัท: บริษัทตัวอย่าง</li>
        <li>ที่อยู่: 123 ถนนตัวอย่าง</li>
      </ul>
    </div>,
    <div>
      <h3>รับตัวอย่างเข้าระบบ</h3>
      <p>ระบบกำลังดำเนินการ โปรดรอ...</p>
    </div>,
    <div>
      <h3>ออกใบเสนอราคา</h3>
      <p>โปรดตรวจสอบใบเสนอราคาและยืนยัน:</p>
      <button className="btn btn-info">ดูใบเสนอราคา</button>
    </div>,
    <div>
      <h3>ออก Invoice</h3>
      <p>การดำเนินการเสร็จสิ้น ขอบคุณที่ใช้บริการ!</p>
    </div>
  ];

  const goToNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goToPreviousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mt-5 multisteps-form">
      {/* Progress Bar */}
      <div className="multisteps-form__progress mb-4">
        {steps.map((step, index) => (
          <button
            key={index}
            type="button"
            className={`multisteps-form__progress-btn ${currentStep >= index ? 'js-active' : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            {step}
          </button>
        ))}
      </div>

      {/* Form Panels */}
      <form className="multisteps-form__form">
        <div className="multisteps-form__panel js-active shadow p-4 rounded bg-white">
          {stepContents[currentStep]}
          <div className="button-row d-flex mt-4">
            <button className="btn btn-secondary js-btn-prev" type="button" onClick={goToPreviousStep} disabled={currentStep === 0}>
              ย้อนกลับ
            </button>
            <button
              className={`btn ${currentStep === steps.length - 1 ? 'btn-success' : 'btn-primary'} ml-auto js-btn-next`}
              type="button"
              onClick={goToNextStep}
              disabled={currentStep === steps.length - 1}
            >
              {currentStep === steps.length - 1 ? 'เสร็จสิ้น' : 'ถัดไป'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepsRequest;
