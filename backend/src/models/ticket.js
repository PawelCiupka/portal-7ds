import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  message: {
    type: String
  },
  userId: {
    type: String,
  },
  userInfo: {
    type: String
  },
  type: {
    type: String
  },
  status: {
    type: String,
    default: "new"
  }
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', TicketSchema);
export default Ticket;