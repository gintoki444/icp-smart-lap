export const organicFertilizerFormData = [
  {
    id: 1,
    request_no: 'REQ-2025-001',
    create_date: '2025-01-10',
    request_start_date: '2025-01-15',
    request_end_date: '2025-02-15',
    company: 'บริษัท เกษตรรุ่งเรือง จำกัด',
    typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
    reportMethod: ['รับด้วยตัวอย่าง'],
    email: '',
    sameAddress: true,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phone: '081-234-5678',
    sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
    otherRequirements: '',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยอินทรีย์'],
        fertilizerType: ['เม็ด'],
        color: ['ดำ'],
        container: 'ถุงพลาสติก',
        tradeName: 'ปุ๋ยอินทรีย์สูตรเข้มข้น',
        trademark: 'ตราใบไม้',
        formula: '',
        manufacturer: 'โรงงานปุ๋ยอินทรีย์ไทย',
        country: 'ไทย',
        tests: ['pH', 'MC', 'OM']
      }
    ]
  },
  {
    id: 2,
    request_no: 'REQ-2025-002',
    create_date: '2025-01-12',
    request_start_date: '2025-01-18',
    request_end_date: '2025-02-18',
    company: 'บริษัท พืชพันธุ์ดี จำกัด',
    typeRequest: ['วิเคราะห์เพื่อตรวจสอบคุณภาพ'],
    reportMethod: ['ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail'],
    email: 'info@plantgood.com',
    sameAddress: false,
    address: '123 หมู่ 5 ถนนเกษตร ตำบลสวนใหญ่',
    province: 'นนทบุรี',
    district: 'เมืองนนทบุรี',
    subDistrict: 'สวนใหญ่',
    postalCode: '11000',
    phone: '082-345-6789',
    sampleDisposal: 'มารับตัวอย่างคืนภายใน 3 เดือน',
    otherRequirements: 'ต้องการผลวิเคราะห์ภายใน 2 สัปดาห์',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยอินทรีย์'],
        fertilizerType: ['ผง'],
        color: ['น้ำตาล'],
        container: 'กล่อง',
        tradeName: 'ปุ๋ยผงพืชพันธุ์',
        trademark: 'ตราพืชพันธุ์',
        formula: '',
        manufacturer: 'บริษัท พืชพันธุ์ดี จำกัด',
        country: 'ไทย',
        tests: ['MC', 'TN']
      }
    ]
  },
  {
    id: 3,
    request_no: 'REQ-2025-003',
    create_date: '2025-01-14',
    request_start_date: '2025-01-20',
    request_end_date: '2025-02-20',
    company: 'บริษัท ฟาร์มสด จำกัด',
    typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
    reportMethod: ['รับด้วยตัวอย่าง'],
    email: '',
    sameAddress: true,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phone: '083-456-7890',
    sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
    otherRequirements: '',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยอินทรีย์'],
        fertilizerType: ['อัดเม็ด'],
        color: ['แดง'],
        container: 'ขวดแก้ว',
        tradeName: 'ปุ๋ยอัดเม็ดพลังแดง',
        trademark: 'ตราแสงอาทิตย์',
        formula: '',
        manufacturer: 'โรงงานปุ๋ยอินทรีย์พลังงาน',
        country: 'ไทย',
        tests: ['pH', 'TN', 'OM']
      }
    ]
  }
];

export const chemicalFertilizerFormData = [
  {
    id: 1,
    request_no: 'REQ-2025-004',
    create_date: '2025-01-08',
    request_start_date: '2025-01-12',
    request_end_date: '2025-02-12',
    company: 'บริษัท เคมีเกษตร จำกัด',
    typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
    reportMethod: ['รับด้วยตัวอย่าง'],
    email: '',
    sameAddress: true,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phone: '086-789-0123',
    sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
    otherRequirements: '',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยเคมี'],
        fertilizerType: ['เชิงเดี่ยว'],
        color: ['ขาว'],
        formula: '15-15-15',
        container: 'ถุงพลาสติก',
        tradeName: 'ปุ๋ยเคมี X',
        trademark: 'ตราแดง',
        manufacturer: 'ผู้ผลิต X',
        country: 'ไทย',
        tests: ['pH', 'Sp.Gr.']
      }
    ]
  },
  {
    id: 2,
    request_no: 'REQ-2025-005',
    create_date: '2025-01-10',
    request_start_date: '2025-01-15',
    request_end_date: '2025-02-15',
    company: 'บริษัท เคมีคุณภาพ จำกัด',
    typeRequest: ['วิเคราะห์เพื่อตรวจสอบคุณภาพ'],
    reportMethod: ['ต้องการไฟล์ pdf เพิ่มเติมทาง E-mail'],
    email: 'qualitychem@example.com',
    sameAddress: false,
    address: '99/8 หมู่ 7 ถนนเคมี ตำบลโรงงาน',
    province: 'สมุทรสาคร',
    district: 'เมืองสมุทรสาคร',
    subDistrict: 'ตำบลโรงงาน',
    postalCode: '74000',
    phone: '099-456-7890',
    sampleDisposal: 'มารับตัวอย่างคืนภายใน 3 เดือน',
    otherRequirements: 'ต้องการผลวิเคราะห์ใน 1 สัปดาห์',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยเคมี'],
        fertilizerType: ['เชิงประกอบ'],
        color: ['แดง'],
        formula: '20-25-0',
        container: 'กล่อง',
        tradeName: 'ปุ๋ยเคมี Y',
        trademark: 'ตราเหลือง',
        manufacturer: 'ผู้ผลิต Y',
        country: 'อังกฤษ',
        tests: ['MC', 'TN']
      }
    ]
  },
  {
    id: 3,
    request_no: 'REQ-2025-006',
    create_date: '2025-01-12',
    request_start_date: '2025-01-17',
    request_end_date: '2025-02-17',
    company: 'บริษัท ปุ๋ยเคมีมาตรฐาน จำกัด',
    typeRequest: ['วิเคราะห์ขึ้นทะเบียน'],
    reportMethod: ['รับด้วยตัวอย่าง'],
    email: '',
    sameAddress: true,
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phone: '089-567-8901',
    sampleDisposal: 'ให้ห้องปฏิบัติการจำหน่ายตัวอย่าง',
    otherRequirements: '',
    fertilizers: [
      {
        fertilizerCategory: ['ปุ๋ยเคมี'],
        fertilizerType: ['เชิงผสม'],
        color: ['ชมพู'],
        formula: '16-16-16',
        container: 'ขวดพลาสติก',
        tradeName: 'ปุ๋ยเคมีมาตรฐาน',
        trademark: 'ตรามาตรฐาน',
        manufacturer: 'ผู้ผลิต Z',
        country: 'ไทย',
        tests: ['pH', 'OM']
      }
    ]
  }
];
