import mongoose from "mongoose";
import TicketStatus, { DEFAULT_TICKET_STATUS_ID } from "./ticketStatus";
import TicketType from "./ticketType";

const TicketSchema = new mongoose.Schema(
  {
    message: {
      type: String
    },
    userId: {
      type: String
    },
    userInfo: {
      type: String
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: TicketType
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: TicketStatus,
      default: DEFAULT_TICKET_STATUS_ID
    }
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
