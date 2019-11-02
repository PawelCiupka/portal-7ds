import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";
import { composeWithDevTools } from "remote-redux-devtools";

export default preloadedState =>
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
