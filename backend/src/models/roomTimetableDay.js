import mongoose from "mongoose";

const RoomTimetableDaySchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    default: ""
  },
  hours: { type: Array, default: [] }
});

const RoomTimetableDay = mongoose.model(
  "RoomTimetableDay",
  RoomTimetableDaySchema
);
export default RoomTimetableDay;
