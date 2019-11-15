import * as yup from "yup";
import {
  USERNAME,
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD
} from "../config/userManagementConfigVariables";

export const userManagementSignUpSchema = yup.object({
  username: yup
    .string()
    .required(USERNAME.errorMessage.required)
    .min(USERNAME.values.min, USERNAME.errorMessage.min)
    .max(USERNAME.values.max, USERNAME.errorMessage.max),
  firstname: yup
    .string()
    .required(FIRSTNAME.errorMessage.required)
    .min(FIRSTNAME.values.min, FIRSTNAME.errorMessage.min)
    .max(FIRSTNAME.values.max, FIRSTNAME.errorMessage.max),
  lastname: yup
    .string()
    .required(LASTNAME.errorMessage.required)
    .min(LASTNAME.values.min, LASTNAME.errorMessage.min)
    .max(LASTNAME.values.max, LASTNAME.errorMessage.max),
  email: yup
    .string()
    .required(EMAIL.errorMessage.required)
    .email(EMAIL.errorMessage.email),
  password: yup
    .string()
    .required(PASSWORD.errorMessage.required)
    .min(PASSWORD.values.min, PASSWORD.errorMessage.min)
    .max(PASSWORD.values.max, PASSWORD.errorMessage.max)
    .matches(PASSWORD.values.match, PASSWORD.errorMessage.match),
  confirmPassword: yup
    .string()
    .required(CONFIRM_PASSWORD.errorMessage.required)
    .oneOf([yup.ref("password"), null], CONFIRM_PASSWORD.errorMessage.testMsg)
});
