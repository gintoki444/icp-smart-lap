const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllMenusRolesByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/menus/role/' + id, requestOptions);

  if (response.status === 404) {
    // ถ้าไม่พบข้อมูล ให้ return เป็น array ว่าง
    return [];
  }

  // สำหรับสถานะอื่นๆ ให้ return ผลลัพธ์ตามปกติ
  return await response.json();
};

export const deleteRolesMenus = async (roleId, menuId) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(`${API_BASE_URL}/role-menus/${roleId}/${menuId}`, requestOptions);
  return await response.json();
};

//  ✅ get Role all
export const postRolesMenus = async (data) => {
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
    const response = await fetch(`${API_BASE_URL}/role-menus`, requestOptions);

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

// จัดโครงสร้างเมนูให้เป็น 3 ระดับ
export const buildMenuHierarchy = (menus) => {
  const menuMap = {};
  const structuredMenus = [];

  menus.forEach((menu) => (menuMap[menu.menu_id] = { ...menu, children: [] }));

  menus.forEach((menu) => {
    if (menu.parent_id === null) {
      structuredMenus.push(menuMap[menu.menu_id]); // เป็นเมนูหลัก (ระดับ 1)
    } else {
      if (menuMap[menu.parent_id]) {
        menuMap[menu.parent_id].children.push(menuMap[menu.menu_id]); // เป็นเมนูระดับ 2 หรือ 3
      }
    }
  });

  return structuredMenus;
};
