const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllCustomer = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/customers', requestOptions);
  return await response.json();
};

//  ✅ get Role By id
export const getCustomerByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/customers/' + id, requestOptions);
  return await response.json();
};

//  ✅ post Customer
export const postCustomer = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/customers', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save customer data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get Role all
export const putCustomer = async (data, id) => {
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
    const response = await fetch(API_BASE_URL + '/customers/' + id, requestOptions);

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

//  ✅ get Customer By id
export const deleteCustomer = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/customers/' + id, requestOptions);
  return await response.json();
};

//  ✅ post Customer
export const postCustomerContacts = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/customer-contacts', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save customer data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get Role all
export const putCustomerContacts = async (data, id) => {
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
    const response = await fetch(API_BASE_URL + '/customer-contacts/' + id, requestOptions);

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

//  ✅ get Customer By id
export const deleteCustomerContacts = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/customer-contacts/' + id, requestOptions);
  return await response.json();
};

//  ✅ post Customer documents
export const postCustomerDocuments = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/customer-documents', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save customer data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get Role all
export const putCustomerDocuments = async (data, id) => {
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
    const response = await fetch(API_BASE_URL + '/customer-documents/' + id, requestOptions);

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

//  ✅ get Customer By id
export const deleteCustomerDocuments = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/customer-documents/' + id, requestOptions);
  return await response.json();
};

export const getGenerateCompanyCode = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/generate-company-code', requestOptions);
  return await response.json();
};
