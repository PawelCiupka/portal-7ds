import express from "express";
import Ticket from "../models/ticket";
import { CHANGE_ROOM } from "../util/ticketTypes";
import { parseError } from "../util/helpers";

const ticketRouter = express.Router();
ticketRouter.post("/new/change-room", async (req, res) => {
  try {
    const {
      userId,
      username,
      firstname,
      lastname,
      oldRoom,
      newRoom
    } = req.body;

    const userInfo =
      firstname + " " + lastname + ", " + username + ", " + oldRoom;
    const message = "Proszę o zmianę pokoju na " + newRoom;
    const type = CHANGE_ROOM;

    const newTicket = new Ticket({
      message,
      userId,
      userInfo,
      type
    });
    await newTicket.save();

    res.send(newTicket);
  } catch (err) {
    console.log(err);
    res.status(400).send(parseError(err));
  }
});

export default ticketRouter;
