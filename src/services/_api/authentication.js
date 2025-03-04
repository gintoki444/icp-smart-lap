const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ User Signin
export const signIn = async (data) => {
  try {
    const url = `${API_BASE_URL}/login`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, requestOptions);
    // console.log('response:', response.json());
    // if (!response.ok) throw new Error('Login Failed :' + response);
    return await response.json();
  } catch (error) {
    console.error('Error saving user:', error);
    return error;
  }
};

//  ✅ User Signup
export const Signup = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/register', requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Signup Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

//  ✅ Authen User
export const authenUser = async (token) => {
  try {
    const url = `${API_BASE_URL}/authen`;
    const requestOptions = {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
      // body: JSON.stringify(login),
    };
    const response = await fetch(url, requestOptions);
    if (!response.ok) throw new Error('Failed to authen user');
    return await response.json();
  } catch (error) {
    console.error('Failed to authen user:', error);
    throw error;
  }
};

//  ✅ Check email for reset password
export const postResetPassRequest = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/request-reset-password', requestOptions);

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

export const postNewPassword = async (data) => {
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
    const response = await fetch(API_BASE_URL + '/reset-password', requestOptions);

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

//  ✅ Activate token
// ✅ Activate token
export const activateEmail = async (token) => {
  try {
    const url = `${API_BASE_URL}/activate?token=${token}`;
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorData = await response.json(); // พยายามดึงข้อมูล error จาก response
      const errorMessage = errorData.message || 'Failed to activate email';
      throw new Error(`${response.status}: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error activating email:', error);
    throw error; // โยน error ต่อไปให้ผู้เรียกจัดการ
  }
};
