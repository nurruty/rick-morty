import * as Redux from 'redux';
import charactersReducer from './characters';
import userReducer from './user';

const rootReducer = Redux.combineReducers({
  characters: charactersReducer,
  user: userReducer,
});

export default rootReducer;
