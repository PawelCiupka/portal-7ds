import express from "express";
import User, { VERIFIED, REJECTED } from "../models/user";
import { parseError, sessionizeUser } from "../util/helpers";

const managementRoutes = express.Router();

managementRoutes.post("/get-unverified-users", async (req, res) => {
  try {
    const { limitAmount, skipAmount } = req.body;

    const users = await User.find({ status: "unverified" })
      .sort({ createdAt: -1 })
      .skip(skipAmount)
      .limit(limitAmount);

    res.send(users);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/get-all-unverified-users", async (req, res) => {
  try {
    const users = await User.find({ status: "unverified" });

    res.send(users);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/accept-unverified-user", async (req, res) => {
  try {
    const { id } = req.body;

    await User.updateOne(
      { _id: id },
      {
        $set: {
          status: VERIFIED
        }
      }
    );

    const user = await User.findOne({ _id: id });
    res.send(user);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/reject-unverified-user", async (req, res) => {
  try {
    const { id } = req.body;

    // await User.updateOne(
    //   { _id: id },
    //   {
    //     $set: {
    //       status: REJECTED
    //     }
    //   }
    // );

    await User.deleteOne({ _id: id });

    // const user = await User.findOne({ _id: id });
    res.status(200);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default managementRoutes;
