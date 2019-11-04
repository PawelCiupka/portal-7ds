import {
  SHOW_SUCCESS_ALERT,
  HIDE_SUCCESS_ALERT,
  SHOW_ERROR_ALERT,
  HIDE_ERROR_ALERT
} from "../../actions/alert";

const defaultAlertInfo = { displaySuccessAlert: false, displayErrorAlert: false, header: "", message: "" };

export default (state = defaultAlertInfo, { type, header, message }) => {
  Object.freeze(state);
  switch (type) {
    case SHOW_SUCCESS_ALERT:
      return { displaySuccessAlert: true, header: header, message: message };
    case HIDE_SUCCESS_ALERT:
      return defaultAlertInfo;
    case SHOW_ERROR_ALERT:
      return { displayErrorAlert: true, header: header, message: message };
    case HIDE_ERROR_ALERT:
      return defaultAlertInfo;
    default:
      return state;
  }
};
