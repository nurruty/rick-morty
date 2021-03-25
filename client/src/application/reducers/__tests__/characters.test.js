import { charactersActionsCreators } from '../../actions/characters';
import charactersReducer, { charactersInitialState } from '../characters';

describe('Characters Reducers', () => {
  test('Initial State', () => {
    const state = charactersReducer(undefined, {});

    expect(state.characters).toEqual(charactersInitialState.characters);
    expect(state.charactersLoading).toEqual(charactersInitialState.charactersLoading);
    expect(state.charactersError).toEqual(charactersInitialState.charactersError);
  });

  test('Request', () => {
    const state = {
      characters: {},
      charactersLoading: false,
      charactersError: null,
    };

    const newState = charactersReducer(state, charactersActionsCreators.getCharacterRequested());

    expect(newState.characters).toEqual({});
    expect(newState.charactersLoading).toEqual(true);
    expect(newState.charactersError).toBeNull();
  });

  test('Success', () => {
    const state = {
      characters: {},
      charactersLoading: true,
      charactersError: null,
    };
    const payload = [{ id: '1', name: 'mock' }];
    const newState = charactersReducer(state, charactersActionsCreators.getCharactersSucceded(payload));
    const testCase = payload[0];

    expect(newState.characters[testCase.id]).toEqual(testCase);
    expect(newState.charactersLoading).toEqual(false);
    expect(newState.charactersError).toBeNull();
  });

  test('Failure', () => {
    const state = {
      characters: {},
      charactersLoading: true,
      charactersError: null,
    };
    const payload = { code: 1, message: 'err' };
    const newState = charactersReducer(state, charactersActionsCreators.getCharactersFailed(payload));

    expect(newState.characters).toEqual({});
    expect(newState.charactersLoading).toEqual(false);
    expect(newState.charactersError).toEqual(payload);
  });
});
