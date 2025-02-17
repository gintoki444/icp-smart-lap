const mockUsers = [
  {
    email: 'admin@gmail.com',
    password: '11',
    role: 'admin'
  },
  {
    email: 'user@gmail.com',
    password: '11',
    role: 'user'
  }
];

export const authenticateUser = (email, password) => {
  const user = mockUsers.find((user) => user.email === email && user.password === password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
};
