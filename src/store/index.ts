import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import appSagas from './appSagas';
import createRootReducer from 'store/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createRootReducer());

// sagaMiddleware.run(appSagas);

export default store;
