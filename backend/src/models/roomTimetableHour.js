import mongoose from "mongoose";
import User from "./user";

const RoomTimetableHourSchema = new mongoose.Schema({
  value: {
    type: String
  },
  isReserved: {
    type: Boolean,
    default: false
  },
  reservingUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    default: null
  }
});

const RoomTimetableHour = mongoose.model(
  "RoomTimetableHour",
  RoomTimetableHourSchema
);
export default RoomTimetableHour;
