import express from "express";
import Ticket from "../models/ticket";
import { parseError } from "../util/helpers";
import TicketType, { TICKET_TYPE_ROOM_CHANGE } from "../models/ticketType";
import TicketStatus, {
  TICKET_STATUS_NEW,
  TICKET_STATUS_DONE
} from "../models/ticketStatus";

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

ticketRouter.post("/get-new-tickets", async (req, res) => {
  try {
    const { limitAmount, skipAmount } = req.body;

    const tickets = await Ticket.find({})
      .populate({
        path: "status",
        match: { name: TICKET_STATUS_NEW }
      })
      .sort({ createdAt: -1 })
      .exec();

    res.send(
      tickets
        .filter(ticket => ticket.status !== null)
        .filter(ticket => ticket.status.name === TICKET_STATUS_NEW)
        .slice(skipAmount, skipAmount + limitAmount)
    );
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

ticketRouter.post("/get-all-new-tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find({})
      .populate({
        path: "status",
        match: { name: TICKET_STATUS_NEW }
      })
      .sort({ createdAt: -1 });

    res.send(
      tickets
        .filter(ticket => ticket.status !== null)
        .filter(ticket => ticket.status.name === TICKET_STATUS_NEW)
    );
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

ticketRouter.post("/mark-ticket-as-done", async (req, res) => {
  try {
    const { id } = req.body;

    const doneStatus = await TicketStatus.find({ name: TICKET_STATUS_DONE });

    await Ticket.updateOne(
      { _id: id },
      {
        $set: {
          status: doneStatus._id
        }
      }
    );

    res.status(200).send("ok");
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

// ticketRouter.post("/new", async (req, res) => {
//   try {
//     const { value } = req.body;

//     const newTicket = new TicketStatus({
//       name: value
//     });
//     await newTicket.save();

//     res.send(newTicket);
//   } catch (err) {
//     res.status(400).send(parseError(err));
//   }
// });

export default ticketRouter;
