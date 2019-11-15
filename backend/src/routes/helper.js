import express from "express";
import Floor from "../models/floor";
import { parseError } from "../util/helpers";
import RoomNumber from "../models/roomNumber";
import UserRole from "../models/userRole";
import UserStatus from "../models/userStatus";

const helperRoutes = express.Router();
helperRoutes.post("/get-all-floors", async (req, res) => {
  try {
    const floors = await Floor.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(floors);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

helperRoutes.post("/get-all-roomNumbers", async (req, res) => {
  try {
    const roomNumbers = await RoomNumber.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(roomNumbers);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

helperRoutes.post("/get-all-userRoles", async (req, res) => {
  try {
    const userRoles = await UserRole.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(userRoles);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

helperRoutes.post("/get-all-userStatuses", async (req, res) => {
  try {
    const userStatuses = await UserStatus.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(userStatuses);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default helperRoutes;
