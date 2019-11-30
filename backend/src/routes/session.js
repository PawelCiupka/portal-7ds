import express from "express";
import Joi from "joi";
import User from "../models/user";
import { signIn } from "../validations/user";
import { parseError, sessionizeUser } from "../util/helpers";
import { USER_STATUS_VERIFIED } from "../models/userStatus";

const sessionRouter = express.Router();

sessionRouter.post("", async (req, res) => {
  try {
    let isOk = true;
    const { username, password } = req.body;
    await Joi.validate({ username, password }, signIn);

    const user = await User.findOne({ username })
      .populate("role")
      .populate("status");
    if (!user) {
      isOk = false;
      throw new Error("Użytkownik nie istnieje");
    }
    if (!user.comparePasswords(password)) {
      isOk = false;
      throw new Error("Nieprawidłowe dane logowania");
    }
    if (user.status.name !== USER_STATUS_VERIFIED) {
      isOk = false;
      throw new Error("Twoje konto oczekuje na zaakceptowanie");
    }

    if (isOk === true) {
      const sessionUser = sessionizeUser(user);

      req.session.user = sessionUser;
      res.send(sessionUser);
    }
  } catch (err) {
    res.status(401).send(parseError(err));
  }
});

sessionRouter.delete("", ({ session }, res) => {
  try {
    const user = session.user;
    if (user) {
      session.destroy(err => {
        if (err) throw err;
        res.clearCookie(process.env.SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    res.status(422).send(parseError(err));
  }
});

sessionRouter.get("", ({ session: { user } }, res) => {
  res.send({ user });
});

export default sessionRouter;
