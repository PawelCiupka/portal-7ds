import * as apiUtil from "../util/session";
import * as userUtil from "../util/user";
import { receiveErrors } from "./error";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const login = user => async dispatch => {
  const response = await apiUtil.login(user);
  const data = await response.json();

  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const signup = user => async dispatch => {
  const response = await apiUtil.signup(user);
  const data = await response.json();

  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const logout = () => async dispatch => {
  const response = await apiUtil.logout();
  const data = await response.json();

  if (response.ok) {
    return dispatch(logoutCurrentUser());
  }
  return dispatch(receiveErrors(data));
};

export const updateUserInfo = user => async dispatch => {
  const response = await userUtil.updateInformation(user);
  const data = await response.json();

  if (response.ok) {
    alert("Zaktualizowano dane użytkownika");
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};
