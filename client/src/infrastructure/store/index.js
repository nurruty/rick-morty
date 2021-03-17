import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { appEnv } from '../../utils';
import sagas from '../../domain/sagas';
import reducer from '../../domain/reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const newMiddlewares = [sagaMiddleware];

  if (appEnv() === 'development') {
    newMiddlewares.push(logger);
  }

  const store = createStore(reducer, initialState, applyMiddleware(...newMiddlewares));
  sagaMiddleware.run(sagas);

  return store;
}
