const userActionTypes = {
  GET_CURRENT_USER_REQUESTED: 'GET_CURRENT_USER_REQUESTED',
  GET_CURRENT_USER_SUCCEDED: 'GET_CURRENT_USER_SUCCEDED',
  GET_CURRENT_USER_FAILED: 'GET_CURRENT_USER_FAILED',

  LOGIN_USER_REQUESTED: 'LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCEDED: 'LOGIN_USER_SUCCEDED',
  LOGIN_USER_FAILED: 'LOGIN_USER_FAILED',

  SIGNUP_USER_REQUESTED: 'SIGNUP_USER_REQUESTED',
  SIGNUP_USER_SUCCEDED: 'SIGNUP_USER_SUCCEDED',
  SIGNUP_USER_FAILED: 'SIGNUP_USER_FAILED',
};

const userActionCreators = {
  getCurrentUserRequested: () => {
    return {
      type: userActionTypes.GET_CURRENT_USER_REQUESTED,
    };
  },

  getCurrentUserSucceded: (data) => ({
    type: userActionTypes.GET_CURRENT_USER_SUCCEDED,
    payload: { user: data },
  }),

  getCurrentUserFailed: (error) => ({
    type: userActionTypes.GET_CURRENT_USER_FAILED,
    payload: { error },
  }),

  loginUserRequested: (data) => ({
    type: userActionTypes.LOGIN_USER_REQUESTED,
    payload: { user: data },
  }),

  loginUserSucceded: (user) => ({
    type: userActionTypes.LOGIN_USER_SUCCEDED,
    payload: { user },
  }),

  loginUserFailed: (error) => ({
    type: userActionTypes.LOGIN_USER_FAILED,
    payload: { error },
  }),
};

export { userActionTypes, userActionCreators };
