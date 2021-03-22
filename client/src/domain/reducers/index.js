import * as Redux from 'redux';
import charactersReducer from './characters';
import userReducer from './user';
import paginationReducer from './pagination';

const rootReducer = Redux.combineReducers({
  charactersState: charactersReducer,
  userState: userReducer,
  pagination: paginationReducer,
});

export default rootReducer;
