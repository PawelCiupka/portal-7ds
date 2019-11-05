import mongoose from "mongoose";

export const DEFAULT_TICKET_STATUS_ID = "5dc142591c9d440000e5aaf2";
export const TICKET_STATUS_NEW = "new";

const TicketStatusSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TicketStatus = mongoose.model("TicketStatus", TicketStatusSchema);
export default TicketStatus;
