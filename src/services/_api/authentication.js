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
    if (!response.ok) throw new Error('Failed to save user');
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
  //   console.log(data);

  //   try {
  //     const url = `${API_BASE_URL}/register`;
  //     console.log(url);
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data)
  //     };
  //     const response = await fetch(url, requestOptions);
  //     if (!response.ok) throw new Error('Failed to save register');
  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error saving register:', error);
  //     throw error;
  //   }
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
