import mongoose from "mongoose";

const RoomTimetableHourSchema = new mongoose.Schema({
  value: {
    type: String
  },
  isReserved: {
    type: Boolean,
    default: false
  },
  reservingPerson: {
    type: String,
    default: ""
  }
});

const RoomTimetableHour = mongoose.model(
  "RoomTimetableHour",
  RoomTimetableHourSchema
);
export default RoomTimetableHour;
