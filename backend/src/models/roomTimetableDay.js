import mongoose from "mongoose";
import RoomTimetableHour from "./roomTimetableHour";

const RoomTimetableDaySchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    default: ""
  },
  hours: [{ type: mongoose.Schema.Types.ObjectId, ref: RoomTimetableHour }]
});

const RoomTimetableDay = mongoose.model(
  "RoomTimetableDay",
  RoomTimetableDaySchema
);
export default RoomTimetableDay;
