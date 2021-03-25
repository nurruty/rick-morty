import { userActionCreators, userActionTypes } from '../../actions/user';

describe('User Actions', () => {
  test('getCurrentUser', () => {
    const result = userActionCreators.getCurrentUserRequested();

    expect(result.type).toEqual(userActionTypes.GET_CURRENT_USER_REQUESTED);
    expect(result.payload).toBeUndefined();
  });

  test('getCurrentUserSucceeded', () => {
    const user = 'user';
    const result = userActionCreators.getCurrentUserSucceded(user);
    expect(result.type).toEqual(userActionTypes.GET_CURRENT_USER_SUCCEDED);
    expect(result.payload).toEqual({ user });
  });

  test('getCurrentUserFailed', () => {
    const error = 'error';
    const result = userActionCreators.getCurrentUserFailed(error);

    expect(result.type).toEqual(userActionTypes.GET_CURRENT_USER_FAILED);
    expect(result.payload).toEqual({ error });
  });

  test('loginUser', () => {
    const user = 'mockuser';
    const result = userActionCreators.loginUserRequested(user);

    expect(result.type).toEqual(userActionTypes.LOGIN_USER_REQUESTED);
    expect(result.payload).toEqual({ user });
  });

  test('loginUserSucceeded', () => {
    const user = 'user';
    const result = userActionCreators.loginUserSucceded(user);
    expect(result.type).toEqual(userActionTypes.LOGIN_USER_SUCCEDED);
    expect(result.payload).toEqual({ user });
  });

  test('loginUserFailed', () => {
    const error = 'error';
    const result = userActionCreators.loginUserFailed(error);

    expect(result.type).toEqual(userActionTypes.LOGIN_USER_FAILED);
    expect(result.payload).toEqual({ error });
  });
});
