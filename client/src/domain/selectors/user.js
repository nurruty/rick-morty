const userSelector = (state) => {
  const { userSate = {} } = state;
  const { user, userLoading, userError } = userSate;

  return { user, userLoading, userError };
};

export default userSelector;
