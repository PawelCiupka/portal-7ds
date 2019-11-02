import { combineReducers } from "redux";
import errors from "./errors/errors";
import session from "./session/session";
import alerts from "./alerts/alerts";

export default combineReducers({
  session,
  errors,
  alerts
});
