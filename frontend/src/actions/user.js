import * as userUtil from "../util/user";
import { receiveErrors } from "./error";

export const updateUserSecurity = user => async dispatch => {
  const response = await userUtil.updateSecurity(user);
  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    return dispatch(receiveErrors(data));
  } else {
    return "ok";
  }
};
