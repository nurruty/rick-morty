import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { appEnv } from '../../utils';
import sagas from '../sagas';
import reducer from '../reducers';

const injectServicesMiddleWare = (services) => () => (next) => async (action) => {
  const injectedAction = { ...action, ...services };
  next(injectedAction);
};

const configureStore = (services) => (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const newMiddlewares = [injectServicesMiddleWare(services), sagaMiddleware];

  if (appEnv() === 'development') {
    newMiddlewares.push(logger);
  }

  const store = createStore(reducer, initialState, applyMiddleware(...newMiddlewares));
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
