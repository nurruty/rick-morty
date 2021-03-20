// const createUser = ({ userName, email } = {}) => ({
//   userName,
//   email,
//   isLoggedIn: !!email,
// });

const createUser = () => ({
  userName: 'Nico',
  email: 'nicourruty@gmail.com',
  isLoggedIn: true,
});

const getFavouriteCharacters = (user = {}) => {
  const { favouriteCharacters = [] } = user;
  return favouriteCharacters;
};

export { createUser, getFavouriteCharacters };
