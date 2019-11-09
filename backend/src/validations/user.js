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

const message =
  "must be between 6-16 characters, " +
  "have at least one capital letter, " +
  "one lowercase letter, one digit, " +
  "and one special character";
const password = Joi.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  .options({
    language: {
      string: {
        regex: {
          base: message
        }
      }
    }
  });

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

export const updateInformation = Joi.object().keys({
  username,
  firstname,
  lastname,
  email
});

export const updateSecurity = Joi.object().keys({
  password
});
