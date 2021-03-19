import * as Redux from 'redux';
import charactersReducer from './characters';
import userReducer from './user';

const rootReducer = Redux.combineReducers({
  charactersState: charactersReducer,
  userState: userReducer,
});

export default rootReducer;
