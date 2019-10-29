import express from "express";
import User from "../models/user";
import { parseError, sessionizeUser } from "../util/helpers";

const managementRoutes = express.Router();

managementRoutes.post("/get-unverified-users", async (req, res) => {
  try {
    const { limitAmount, skipAmount } = req.body;

    const users = await User
      .find({ status: "unverified" })
      .sort({ createdAt: -1 })
      .skip(skipAmount)
      .limit(limitAmount)

    res.send(users);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/get-all-unverified-users", async (req, res) => {
  try {
    const users = await User
      .find({ status: "unverified" })

    res.send(users);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default managementRoutes;
