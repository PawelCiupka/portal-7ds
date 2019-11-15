import Joi from "joi";
import express from "express";
import { hashSync } from "bcryptjs";
import User from "../models/user";
import { signUp } from "../validations/user";
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
  try {
    const { id, oldPassword, password } = req.body;

    const user = await User.findOne({ _id: id });
    if (user && user.comparePasswords(oldPassword)) {
      await User.updateOne(
        { _id: id },
        { $set: { password: hashSync(password, 10) } }
      );
    } else {
      throw new Error("Nieprawidłowe hasło");
    }
    res.status(200).send("success");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

userRouter.post("/getByUsername", async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username: username })
      .populate("role")
      .populate("status")
      .exec();

    res.send(user);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

userRouter.post("/get-by-id", async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findOne({ _id: id })
      .populate("role")
      .populate("status")
      .exec();

    res.send(user);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

userRouter.post("/getAll", async (req, res) => {
  try {
    const user = await User.find({})
      .populate("role")
      .populate("status")
      .exec();

    res.send(user);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default userRouter;
