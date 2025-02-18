const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//  ✅ get User all
export const getAllUser = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };

  const response = await fetch(API_BASE_URL + '/users', requestOptions);
  return await response.json();
};
