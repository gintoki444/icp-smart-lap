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

  const response = await fetch(API_BASE_URL + '/register', requestOptions);
  return await response.json();
};

//  ✅ Authen User
export const authenUser = async (token) => {
  try {
    const url = `${API_BASE_URL}/users/authen`;
    console.log(token);
    const requestOptions = {
      method: 'GET',
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

//  ✅ Activate token
export const activateEmail = async (token) => {
  try {
    const url = `${API_BASE_URL}/activate?token=${token}`;
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, requestOptions);
    if (!response.ok) throw new Error('Failed to activate email');
    return await response.json();
  } catch (error) {
    console.error('Error activate email:', error);
    return error;
  }
};
//   try {
//     const url = `${API_BASE_URL}/activate?token=${token}`;
//     const requestOptions = {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' }
//     };
//     const response = await fetch(url, requestOptions);
//     if (!response.ok) throw new Error('Failed to authen user');
//     return await response.json();
//   } catch (error) {
//     console.error('Failed to authen user:', error);
//     throw error;
//   }
// };
