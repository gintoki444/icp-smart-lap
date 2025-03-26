const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ get ServiceRequests all
export const getAllServiceRequests = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-requests', requestOptions);
  return await response.json();
};

//  ✅ get ServiceRequests all
// ✅ get ServiceRequests all
export const getAllServiceRequestByUser = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/service-requests/user/' + id, requestOptions);

    // ตรวจสอบสถานะของ response
    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          message: 'ไม่พบคำขอรับบริการสำหรับผู้ใช้นี้',
          data: []
        };
      }
      // กรณี error อื่นๆ
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data,
      message: 'ดึงข้อมูลสำเร็จ'
    };
  } catch (error) {
    console.error('Error fetching service requests:', error);
    return {
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่',
      data: []
    };
  }
};

//  ✅ get ServiceRequests By id
export const getServiceRequestsByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-requests/' + id, requestOptions);
  return await response.json();
};

//  ✅ get status ServiceRequests By id
export const getServiceRequestsStatusByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-requests/status-tracking/' + id, requestOptions);
  return await response.json();
};

//  ✅ post service requests
export const postServiceRequests = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/service-requests', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save ServiceRequests data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const putServiceRequests = async (data, id) => {
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
    const response = await fetch(API_BASE_URL + '/service-requests/' + id, requestOptions);

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

//  ✅ get ServiceRequests By id
export const deleteServiceRequests = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-requests/' + id, requestOptions);
  return await response.json();
};

//  ✅ get ServiceRequests all
export const getAllServiceRequestDocuments = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-request-documents', requestOptions);
  return await response.json();
};

//  ✅ get Role By id
export const getServiceRequestDocumentsByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-request-documents/' + id, requestOptions);
  return await response.json();
};

//  ✅ post service requests
export const postServiceRequestDocuments = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/service-request-documents', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save ServiceRequests data Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ get Role all
export const putServiceRequestDocuments = async (data, id) => {
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
    const response = await fetch(API_BASE_URL + '/service-request-documents/' + id, requestOptions);

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

//  ✅ get ServiceRequests By id
export const deleteServiceRequestDocuments = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/service-request-documents/' + id, requestOptions);
  return await response.json();
};

export const putGenerateRequest = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  // const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/generate-request-no/' + id, requestOptions);

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

export const putServiceRequestStatusTracking = async (id, data) => {
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
    const response = await fetch(API_BASE_URL + `/service-requests/${id}/status-tracking`, requestOptions);

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

export const deleteServiceRequestStatusTracking = async (id, data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + `/service-requests/${id}/status-tracking`, requestOptions);

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

export const getAllServiceRequestByCustomer = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(API_BASE_URL + '/service-requests/customer/' + id, requestOptions);

    // ตรวจสอบสถานะของ response
    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          message: 'ไม่พบคำขอรับบริการสำหรับผู้ใช้นี้',
          data: []
        };
      }
      // กรณี error อื่นๆ
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data,
      message: 'ดึงข้อมูลสำเร็จ'
    };
  } catch (error) {
    console.error('Error fetching service requests:', error);
    return {
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่',
      data: []
    };
  }
};
