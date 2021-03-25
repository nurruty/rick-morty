import { userActionTypes } from '../../actions/user';
import { loginUser, getCurrentUser, watchGetCurrentUser, watchLoginUser } from '../../sagas/user';
import { takeLatest } from 'redux-saga/effects';

describe('USER Sagas', () => {
  test('watchGetCurrentUser', () => {
    const iterator = watchGetCurrentUser();

    expect(iterator.next().value).toEqual(
      takeLatest(userActionTypes.GET_CURRENT_USER_REQUESTED, getCurrentUser)
    );
  });

  test('watchLoginUser', () => {
    const iterator = watchLoginUser();

    expect(iterator.next().value).toEqual(takeLatest(userActionTypes.LOGIN_USER_REQUESTED, loginUser));
  });
});
