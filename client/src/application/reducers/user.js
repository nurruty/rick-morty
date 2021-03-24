import { userActionTypes } from '../actions/user';

const initialState = {
  userLoading: false,
  user: undefined,
  userEerror: null,
};

const userReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case userActionTypes.GET_CURRENT_USER_REQUESTED:
    case userActionTypes.LOGIN_USER_REQUESTED:
      return {
        ...state,
        userLoading: true,
      };

    case userActionTypes.GET_CURRENT_USER_SUCCEDED:
    case userActionTypes.LOGIN_USER_SUCCEDED: {
      const { user } = payload;
      return {
        ...state,
        userLoading: false,
        user: user,
      };
    }

    case userActionTypes.GET_CURRENT_USER_FAILED:
    case userActionTypes.LOGIN_USER_FAILED:
      const { error = {} } = payload;
      return {
        ...state,
        userLoading: false,
        user: {
          userName: undefined,
          email: undefined,
          isLoggedIn: false,
        },
        error,
      };

    default:
      return state;
  }
};

export default userReducer;
