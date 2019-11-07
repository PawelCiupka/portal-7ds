import express from "express";
import User from "../models/user";
import UserStatus, {
  USER_STATUS_UNVERIFIED,
  USER_STATUS_VERIFIED
} from "../models/userStatus";
import { parseError, sessionizeUser } from "../util/helpers";

const managementRoutes = express.Router();

managementRoutes.post("/get-unverified-users", async (req, res) => {
  try {
    const { limitAmount, skipAmount } = req.body;

    const users = await User.find({})
      .populate({
        path: "status",
        match: { name: USER_STATUS_UNVERIFIED }
      })
      .sort({ createdAt: -1 })
      .exec();

    res.send(
      users
        .filter(user => user.status !== null)
        .slice(skipAmount, skipAmount + limitAmount)
    );
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/get-all-unverified-users", async (req, res) => {
  try {
    const users = await User.find({})
      .populate({
        path: "status",
        match: { name: USER_STATUS_UNVERIFIED }
      })
      .sort({ createdAt: -1 });

    res.send(users.filter(user => user.status !== null));
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/accept-unverified-user", async (req, res) => {
  try {
    const { id } = req.body;

    const verifiedStatus = await UserStatus.findOne({
      name: USER_STATUS_VERIFIED
    });

    await User.updateOne(
      { _id: id },
      {
        $set: {
          status: verifiedStatus._id
        }
      }
    );

    res.status(200).send("success");
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
    res.status(200).send("success");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default managementRoutes;
