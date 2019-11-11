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
  "musi zawierać od 5 do 30 znaków, " +
  "musi posiadać co najmniej jedną cyfrę, małą oraz wielką literę";
const password = Joi.string()
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]{5,30}$/)
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
