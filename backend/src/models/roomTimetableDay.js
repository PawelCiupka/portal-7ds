import mongoose from "mongoose";
import RoomTimetableHour from "./roomTimetableHour";

const RoomTimetableDaySchema = new mongoose.Schema({
  dayOfWeek: {
    type: String
  },
  hours: [RoomTimetableHour]
});

const RoomTimetableDay = mongoose.model(
  "RoomTimetableDay",
  RoomTimetableDaySchema
);
export default RoomTimetableDay;
