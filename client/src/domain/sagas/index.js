import { all } from 'redux-saga/effects';
import { watchGetCharacters } from './characters';
import { watchGetCurrentUser, watchLoginUser, watchSignUpUser } from './user';
import { watchUpdateFavouriteCharacter } from './characters';

const sagas = function* () {
  yield all([watchGetCurrentUser(), watchGetCharacters()]);
};

export default sagas;
