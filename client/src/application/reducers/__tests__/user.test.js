import { createUser } from '../../../domain/entities/user';
import { userActionCreators } from '../../actions/user';
import userReducer, { userInitialState } from '../user';

describe('User Reducers', () => {
  test('Initial State', () => {
    const state = userReducer(undefined, {});

    expect(state.user).toEqual(userInitialState.user);
    expect(state.userLoading).toEqual(userInitialState.userLoading);
    expect(state.userEerror).toEqual(userInitialState.userEerror);
  });

  test('Request', () => {
    const state = {
      user: {},
      userLoading: false,
      userError: null,
    };

    const newState = userReducer(state, userActionCreators.getCurrentUserRequested());

    expect(newState.user).toEqual({});
    expect(newState.userLoading).toEqual(true);
    expect(newState.userError).toBeNull();
  });

  test('Success', () => {
    const state = {
      user: {},
      userLoading: true,
      userError: null,
    };
    const payload = [{ email: '1', userName: 'mock', isLoggedIn: true }];
    const newState = userReducer(state, userActionCreators.getCurrentUserSucceded(createUser(payload[0])));
    const testCase = payload[0];

    expect(newState.user).toEqual(testCase);
    expect(newState.userLoading).toEqual(false);
    expect(newState.userError).toBeNull();
  });

  test('Failure', () => {
    const state = {
      user: {},
      userLoading: true,
      userError: null,
    };
    const payload = { error: { code: 1, message: 'err' } };
    const newState = userReducer(state, userActionCreators.getCurrentUserFailed(payload));

    expect(newState.user).toEqual({ user: undefined, isLoggedIn: false, userName: undefined });
    expect(newState.userLoading).toEqual(false);
    expect(newState.userError).toEqual(payload);
  });
});
