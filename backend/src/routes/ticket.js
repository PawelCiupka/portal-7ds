import express from "express";
import Ticket from "../models/ticket";
import { parseError } from "../util/helpers";
import TicketType, { TICKET_TYPE_ROOM_CHANGE } from "../models/ticketType";

const ticketRouter = express.Router();
ticketRouter.post("/new/room-change", async (req, res) => {
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
    const type = await TicketType.findOne({ name: TICKET_TYPE_ROOM_CHANGE });

    const newTicket = new Ticket({
      message,
      userId,
      userInfo,
      type: type._id
    });
    await newTicket.save();

    res.send(newTicket);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

ticketRouter.post("/new", async (req, res) => {
  try {
    const { value } = req.body;

    const newTicket = new TicketType({
      name: value
    });
    await newTicket.save();

    res.send(newTicket);
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default ticketRouter;
