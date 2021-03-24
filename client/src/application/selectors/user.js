export const userSelector = (state) => {
  const { userState = {} } = state;
  const { user, userLoading, userError } = userState;

  return { user, userLoading, userError };
};

export default userSelector;
