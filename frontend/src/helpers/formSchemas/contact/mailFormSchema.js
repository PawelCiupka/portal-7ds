import * as yup from "yup";
import { SUBJECT, MESSAGE } from "../config/contactConfigVariables";

export const mailFromSchema = yup.object({
  subject: yup
    .string()
    .required(SUBJECT.errorMessage.required)
    .min(SUBJECT.values.min, SUBJECT.errorMessage.min)
    .max(SUBJECT.values.max, SUBJECT.errorMessage.max),
  message: yup
    .string()
    .required(MESSAGE.errorMessage.required)
    .min(MESSAGE.values.min, MESSAGE.errorMessage.min)
    .max(MESSAGE.values.max, MESSAGE.errorMessage.max)
});
