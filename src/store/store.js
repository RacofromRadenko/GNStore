import { createStore, applyMiddleware } from 'redux'
import { pullG2AProducts, placeOrder, pullOrderStatus, payForOrder, takeProductCode } from "../actions/actions";

import reducer from '../reducers/reducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatchers } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaWatchers);

store.dispatch(pullG2AProducts(0, 1000, 1));
//
// store.dispatch(placeOrder('10000002626009'));
// setTimeout(() => {
//     store.dispatch(pullOrderStatus(store.getState().activeProduct));
// }, 2000)
//
// setTimeout(() => {
//     store.dispatch(payForOrder(store.getState().activeProduct));
// }, 4000)
//
// setTimeout(() => {
//     store.dispatch(takeProductCode(store.getState().activeProduct));
// }, 8000)

const unsubscribe = store.subscribe(() => console.log('vidimo se a?', store.getState()))

unsubscribe();
export default store;
