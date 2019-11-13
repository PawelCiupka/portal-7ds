import express from "express";
import Floor from "../models/floor";
import { parseError } from "../util/helpers";
import RoomNumber from "../models/roomNumber";

const roomRoutes = express.Router();
roomRoutes.post("/get-all-floors", async (req, res) => {
  try {
    const floors = await Floor.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(floors);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

roomRoutes.post("/get-all-roomNumbers", async (req, res) => {
  try {
    const roomNumbers = await RoomNumber.find({})
      .sort({ _id: 1 })
      .exec();

    res.send(roomNumbers);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default roomRoutes;
