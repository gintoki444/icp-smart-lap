const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllFertilizerFormulas = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas', requestOptions);
  return await response.json();
};

export const postFertilizerFormulas = async (data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formulas`, requestOptions);

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

export const getFertilizerFormulasById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas/' + id, requestOptions);
  return await response.json();
};

export const putFertilizerFormulas = async (id, data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formulas/` + id, requestOptions);

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

export const deleteFertilizerFormulas = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'Delete',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas/' + id, requestOptions);
  return await response.json();
};

//  ✅ ประเภทปุ๋ยหลักกับสูตรปุ๋ย
export const getFertilizerFormulasByMain = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas/by-fertilizer-main/' + id, requestOptions);
  return await response.json();
};

//  ✅ (สูตรปุ๋ยตามลักษณะปุ๋ย) GET /api/fertilizer-formulas-types/by-type/:fertilizer_type_id
export const getFertilizerFormulasCompatibility = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-compatibility/', requestOptions);
  return await response.json();
};

//  ✅ สูตรปุ๋ยตามลักษณะปุ๋ย
export const getFertilizerFormulasBytypes = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-types/by-type/' + id, requestOptions);
  return await response.json();
};

//  ✅ (ประเภทปุ๋ยกับสูตรปุ๋ยสอดคล้องกันหรือไม่) GET /api/fertilizer-formulas/check//:fertilizer_main_id/:formula_id
export const getFertilizerFormulasCheck = async (id1, id2) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas/check/' + id1 + '/' + id2, requestOptions);
  return await response.json();
};

export const getAllFertilizerFormulasTypes = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-types', requestOptions);
  return await response.json();
};

export const postFertilizerFormulasTypes = async (data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formulas-types`, requestOptions);

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

export const getFertilizerFormulasTypesById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-types/' + id, requestOptions);
  return await response.json();
};

export const putFertilizerFormulasTypes = async (id, data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formulas-types/` + id, requestOptions);

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

export const deleteFertilizerFormulasTypes = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'Delete',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-types/' + id, requestOptions);
  return await response.json();
};

export const getAllFertilizerFormulaTest = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formulas-types', requestOptions);
  return await response.json();
};

export const postFertilizerFormulaTest = async (data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formula-tests`, requestOptions);

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

export const getFertilizerFormulaTestById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formula-tests/' + id, requestOptions);
  return await response.json();
};

export const putFertilizerFormulaTest = async (id, data) => {
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
    const response = await fetch(`${API_BASE_URL}/fertilizer-formula-tests/` + id, requestOptions);

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

export const deleteFertilizerFormulaTest = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'Delete',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/fertilizer-formula-tests/' + id, requestOptions);
  return await response.json();
};
