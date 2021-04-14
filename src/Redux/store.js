import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
