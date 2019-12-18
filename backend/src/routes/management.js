import express from "express";
import User from "../models/user";
import { hashSync } from "bcryptjs";
import UserStatus, {
  USER_STATUS_UNVERIFIED,
  USER_STATUS_VERIFIED
} from "../models/userStatus";
import { parseError } from "../util/helpers";

const managementRoutes = express.Router();

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

managementRoutes.post("/get-all-users", async (req, res) => {
  try {
    const users = await User.find({ room: { $ne: "000" } }).sort({ room: 1 });

    res.send(users);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

managementRoutes.post("/update-user", async (req, res) => {
  try {
    const {
      id,
      username,
      firstname,
      lastname,
      email,
      room,
      password,
      comment,
      role,
      status,
      roomAccess
    } = req.body;

    if (password === "") {
      await User.updateOne(
        { _id: id },
        {
          $set: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            room: room,
            comment: comment,
            role: role,
            status: status,
            roomAccess: roomAccess
          }
        }
      );
    } else {
      await User.updateOne(
        { _id: id },
        {
          $set: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            room: room,
            password: hashSync(password, 10),
            comment: comment,
            role: role,
            status: status,
            roomAccess: roomAccess
          }
        }
      );
    }

    res.status(200).send("ok");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default managementRoutes;
