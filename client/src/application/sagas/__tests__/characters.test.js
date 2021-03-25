import { charactersActionTypes } from '../../actions/characters';
import { getCharacters, watchGetCharacters } from '../../sagas/characters';
import { takeLatest } from 'redux-saga/effects';

describe('Characters Sagas', () => {
  test('watchGetCharacters', () => {
    const iterator = watchGetCharacters();

    expect(iterator.next().value).toEqual(
      takeLatest(charactersActionTypes.GET_CHARACTERS_REQUESTED, getCharacters)
    );
  });
});
