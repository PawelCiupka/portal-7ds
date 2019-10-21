import express from "express";
import Ticket from "../models/ticket";
import {CHANGE_ROOM} from "../util/ticketTypes"

const ticketRouter = express.Router();
ticketRouter.post("/new/change-room", async (req, res) => {
  try {
    const { userId, username, firstname, lastname, oldRoom, newRoom } = req.body;

    const message = username + ' (' + firstname + ' ' + lastname + ', ' + oldRoom + ') Proszę o zmianę pokoju na ' + newRoom;
    const type = CHANGE_ROOM

    const newTicket = new Ticket({
      message,
      userId,
      type
    });
    await newTicket.save();

    res.send(newTicket);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default ticketRouter;
