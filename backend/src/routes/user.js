import Joi from "joi";
import express from "express";
import User from "../models/user";
import { signUp, updateInformation } from "../validations/user";
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

userRouter.put("/update/security", async (req, res) => {
  try {
    const { username, password } = req.body;
  } catch (err) {}
});

export default userRouter;
