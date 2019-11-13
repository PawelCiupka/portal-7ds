import * as yup from "yup";
import {
  OLD_PASSWORD,
  PASSWORD,
  CONFIRM_PASSWORD
} from "../config/userManagementConfigVariables";

export const userManagementSecurityChangeSchema = yup.object({
  oldPassword: yup.string().required(OLD_PASSWORD.errorMessage.required),
  newPassword: yup
    .string()
    .required(PASSWORD.errorMessage.required)
    .min(PASSWORD.values.min, PASSWORD.errorMessage.min)
    .max(PASSWORD.values.max, PASSWORD.errorMessage.max)
    .matches(PASSWORD.values.match, PASSWORD.errorMessage.match),
  confirmPassword: yup
    .string()
    .required(CONFIRM_PASSWORD.errorMessage.required)
    .oneOf(
      [yup.ref("newPassword"), null],
      CONFIRM_PASSWORD.errorMessage.testMsg
    )
});
