export const SHOW_SUCCESS_ALERT = "SHOW_SUCCESS_ALERT";
export const HIDE_SUCCESS_ALERT = "HIDE_SUCCESS_ALERT";
export const SHOW_ERROR_ALERT = "SHOW_ERROR_ALERT";
export const HIDE_ERROR_ALERT = "HIDE_ERROR_ALERT";

export const showSuccessAlert = (header, message) => ({
  type: SHOW_SUCCESS_ALERT,
  header,
  message
});

export const hideSuccessAlert = () => ({
  type: HIDE_SUCCESS_ALERT
});

export const showErrorAlert = (header, message) => ({
  type: SHOW_ERROR_ALERT,
  header,
  message
});

export const hideErrorAlert = () => ({
  type: HIDE_ERROR_ALERT
});
