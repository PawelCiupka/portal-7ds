export const SHOW_SUCCESSFUL_ALERT = "SHOW_SUCCESSFUL_ALERT";
export const HIDE_SUCCESSFUL_ALERT = "HIDE_SUCCESSFUL_ALERT";

export const showSuccessfulAlert = alertInfo => ({
  type: SHOW_SUCCESSFUL_ALERT,
  alertInfo
});

export const hideSuccessfulAlert = () => ({
  type: HIDE_SUCCESSFUL_ALERT
});
