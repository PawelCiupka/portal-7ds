import {
  SHOW_SUCCESSFUL_ALERT,
  HIDE_SUCCESSFUL_ALERT
} from "../../actions/alert";

const defaultAlertInfo = { display: false, msg: "" };

export default (state = defaultAlertInfo, { type, alertInfo }) => {
  Object.freeze(state);
  switch (type) {
    case SHOW_SUCCESSFUL_ALERT:
      return alertInfo;
    case HIDE_SUCCESSFUL_ALERT:
      return defaultAlertInfo;
    default:
      return state;
  }
};
