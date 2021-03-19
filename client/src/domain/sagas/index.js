import { all } from 'redux-saga/effects';
import { watchGetCharacters, watchGetCharacter } from './characters';
import { watchGetCurrentUser, watchLoginUser } from './user';

const sagas = function* () {
  yield all([watchGetCurrentUser(), watchGetCharacters(), watchGetCharacter(), watchLoginUser()]);
};

export default sagas;
