import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

export const sagaMiddleware = createSagaMiddleware();

const createStorewithMiddleware = compose(applyMiddleware(sagaMiddleware))(createStore);

export const store = createStorewithMiddleware(rootReducer);
