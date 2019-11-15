import * as yup from "yup";
import { USERNAME, PASSWORD } from "../config/userManagementConfigVariables";

export const userManagementLoginSchema = yup.object({
  username: yup.string().required(USERNAME.errorMessage.required),
  password: yup.string().required(PASSWORD.errorMessage.required)
});
