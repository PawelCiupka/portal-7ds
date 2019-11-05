import mongoose from "mongoose";

export const TICKET_TYPE_ROOM_CHANGE = "room_change";

const TicketTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TicketType = mongoose.model("TicketType", TicketTypeSchema);
export default TicketType;
