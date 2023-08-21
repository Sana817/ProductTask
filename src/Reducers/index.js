// This file is created because we want one root reducer, so wrap all reducers into it and store it to store.
import productReducer from "./reducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  productReducer, // we can add all reducers here
});
export default rootReducer;
