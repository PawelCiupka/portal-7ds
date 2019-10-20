import Joi from "joi";
import express from "express";
import { hashSync } from "bcryptjs";
import User from "../models/user";
import { signUp, updateInformation, updateSecurity } from "../validations/user";
import { parseError, sessionizeUser } from "../util/helpers";

const userRouter = express.Router();
userRouter.post("", async (req, res) => {
  try {
    const { username, firstname, lastname, room, email, password } = req.body;
    await Joi.validate(
      { firstname, lastname, username, email, password },
      signUp
    );

    const newUser = new User({
      username,
      firstname,
      lastname,
      room,
      email,
      password
    });
    const sessionUser = sessionizeUser(newUser);
    await newUser.save();

    req.session.user = sessionUser;
    res.send(sessionUser);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

userRouter.post("/update/information", async (req, res) => {
  try {
    const { id, username, firstname, lastname, email } = req.body;
    await Joi.validate(
      { username, firstname, lastname, email },
      updateInformation
    );

    await User.updateOne(
      { _id: id },
      {
        $set: {
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email
        }
      }
    );

    const user = await User.findOne({ _id: id });
    const sessionUser = sessionizeUser(user);

    req.session.user = sessionUser;
    res.send(sessionUser);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

userRouter.post("/update/security", async (req, res) => {
  console.log("xd");
  try {
    const { id, oldPassword, password } = req.body;
    await Joi.validate({ password }, updateSecurity);

    const user = await User.findOne({ _id: id });
    console.log(user);
    if (user && user.comparePasswords(oldPassword)) {
      await User.updateOne(
        { _id: id },
        { $set: { password: hashSync(password, 10) } }
      );
    } else {
      throw new Error("Nieprawidłowe hasło");
    }
    res.send("ok");
  } catch (err) {
    console.log(err);
    res.status(400).send(parseError(err));
  }
});

export default userRouter;
