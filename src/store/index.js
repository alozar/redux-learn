import { combineReducers, createStore, applyMiddleware } from 'redux';
import { cashReducer }from './cashReducer';
import { customersReducer } from './customersReducer';
import { countReducer } from './countReducer';
import { usersReducer } from './usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from '../saga/index';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
    countReducer: countReducer,
    usersReducer: usersReducer
});

//Обычный вариант
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//Вариант через Saga
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);