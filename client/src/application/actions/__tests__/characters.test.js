import { charactersActionsCreators, charactersActionTypes } from '../../actions/characters';

describe('Characters Actions', () => {
  test('getCharacters', () => {
    const page = 1;
    const result = charactersActionsCreators.getCharactersRequested(page);

    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTERS_REQUESTED);
    expect(result.payload).toEqual(page);
  });

  test('getCharactersSucceeded', () => {
    const characters = 'characters';
    const result = charactersActionsCreators.getCharactersSucceded(characters);
    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTERS_SUCCEDED);
    expect(result.payload).toEqual({ characters });
  });

  test('getCharactersFailed', () => {
    const error = 'error';
    const result = charactersActionsCreators.getCharactersFailed(error);

    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTERS_FAILED);
    expect(result.payload).toEqual({ error });
  });

  test('getCharacter', () => {
    const result = charactersActionsCreators.getCharacterRequested();

    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTER_REQUESTED);
    expect(result.payload).toBeUndefined();
  });

  test('getCharacterSucceeded', () => {
    const character = 'character';
    const result = charactersActionsCreators.getCharacterSucceded(character);
    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTER_SUCCEDED);
    expect(result.payload).toEqual({ character });
  });

  test('getCharacterFailed', () => {
    const error = 'error';
    const result = charactersActionsCreators.getCharacterFailed(error);

    expect(result.type).toEqual(charactersActionTypes.GET_CHARACTER_FAILED);
    expect(result.payload).toEqual({ error });
  });
});
