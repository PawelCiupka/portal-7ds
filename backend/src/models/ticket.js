import mongoose from "mongoose";
import TicketStatus, { DEFAULT_TICKET_STATUS_ID } from "./ticketStatus";

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
      type: String
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
