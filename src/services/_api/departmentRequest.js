const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ get Role all
export const getAllDepartments = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/departments', requestOptions);
  return await response.json();
};

//  ✅ get Role By id
export const getDepartmentsByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/departments/' + id, requestOptions);
  return await response.json();
};

//  ✅ get Role all
export const postDepartments = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/departments', requestOptions);
  return await response.json();
};

//  ✅ get Role all
export const putDepartments = async (data, id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/departments/' + id, requestOptions);
  return await response.json();
};

//  ✅ get User By id
export const deleteDepartments = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/departments/' + id, requestOptions);
  return await response.json();
};
