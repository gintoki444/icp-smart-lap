const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllFertilizerCertificate = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-certification-standards', requestOptions);
  return await response.json();
};

export const postFertilizerCertificate = async (data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-certification-standards`, requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save customer special conditions Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const getFertilizerCertificateById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-certification-standards/' + id, requestOptions);
  return await response.json();
};

export const putFertilizerCertificate = async (id, data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-certification-standards/` + id, requestOptions);

    // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่ (status 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // ดึง error message จากเซิร์ฟเวอร์
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json(); // ถ้า status 200-299 ส่ง JSON กลับ
  } catch (error) {
    console.error('Save customer special conditions Error:', error);
    throw error; // โยน Error ออกไปเพื่อให้ handle ที่ `handleSubmit`
  }
};

export const deleteFertilizerCertificate = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'Delete',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-certification-standards/' + id, requestOptions);
  return await response.json();
};
