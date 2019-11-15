import Joi from "joi";

const username = Joi.string()
  .min(3)
  .max(30)
  .required();
const firstname = Joi.string()
  .min(3)
  .max(30)
  .required();
const lastname = Joi.string()
  .min(3)
  .max(30)
  .required();
const email = Joi.string()
  .email()
  .required();

const password = Joi.string();

export const signUp = Joi.object().keys({
  username,
  firstname,
  lastname,
  email,
  password
});

export const signIn = Joi.object().keys({
  username,
  password
});
