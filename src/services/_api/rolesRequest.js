const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ get Role all
export const getAllRoles = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/roles', requestOptions);
  return await response.json();
};

//  ✅ get Role By id
export const getRolesByID = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/roles/' + id, requestOptions);
  return await response.json();
};

//  ✅ get Role all
export const postRoles = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/roles', requestOptions);
  return await response.json();
};

//  ✅ get Role all
export const putRoles = async (data, id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/roles/' + id, requestOptions);
  return await response.json();
};

//  ✅ get User By id
export const deleteRoles = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/roles/' + id, requestOptions);
  return await response.json();
};
