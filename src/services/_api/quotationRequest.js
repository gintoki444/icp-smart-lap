const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ get Quotations all
export const getAllQuotations = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotations', requestOptions);
  return await response.json();
};

//  ✅ get Quotations By id
export const getQuotationsByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotations/' + id, requestOptions);
  return await response.json();
};

//  ✅ post Quotations
export const postQuotations = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotations', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save Quotations data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const putQuotations = async (id, data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotations/' + id, requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get Quotations By id
export const deleteQuotations = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotations/' + id, requestOptions);
  return await response.json();
};

export const getAllQuotationDetails = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-details', requestOptions);
  return await response.json();
};

//  ✅ get QuotationDetails all
export const getQuotationDetailsById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-details/' + id, requestOptions);
  return await response.json();
};

//  ✅ post service requests
export const postQuotationDetails = async (data) => {
  console.log('data', data);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotation-details', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save QuotationDetails data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const putQuotationDetails = async (id, data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotation-details/' + id, requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get QuotationDetails By id
export const deleteQuotationDetails = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-details/' + id, requestOptions);
  return await response.json();
};

//  ✅ get Quotations types all
export const getAllQuotationType = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-types', requestOptions);
  return await response.json();
};

//  ✅ get Quotations types By id
export const getQuotationTypeByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-types/' + id, requestOptions);
  return await response.json();
};

//  ✅ post Quotations types
export const postQuotationType = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotation-types', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save Quotations data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const putQuotationType = async (id, data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/quotation-types/' + id, requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ DELETE Quotations types By id
export const deleteQuotationType = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/quotation-types/' + id, requestOptions);
  return await response.json();
};

//  ✅ get Quotations By id
export const getCompareQuotationQuatity = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/compare-sample-quotation-quantity/' + id, requestOptions);
  return await response.json();
};

//  ✅ get Quotations By id
export const getSampleRemainQuatity = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/sample-remain-quantity/' + id, requestOptions);

  // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
  if (!response.ok) {
    const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
    throw new Error(errorData.message || `HTTP Error: ${response.status}`);
  }

  return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  // return await response.json();
};
