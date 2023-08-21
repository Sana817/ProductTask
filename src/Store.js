import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga/ProductSaga"; // The saga file you created
import rootReducer from "./Reducers/index";
import { createStore, applyMiddleware } from "redux";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
