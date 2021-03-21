const createUser = ({ userName, email } = {}) => ({
  userName,
  email,
  isLoggedIn: !!email,
});

export { createUser };
