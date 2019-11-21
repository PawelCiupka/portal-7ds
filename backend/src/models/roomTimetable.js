import mongoose from "mongoose";
import RoomTimetableDay from "./roomTimetableDay";

const RoomTimetableSchema = new mongoose.Schema({
  days: [RoomTimetableDay]
});

const RoomTimetable = mongoose.model("RoomTimetable", RoomTimetableSchema);
export default RoomTimetable;
