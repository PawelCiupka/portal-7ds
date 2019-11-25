import mongoose from "mongoose";
import RoomTimetableDay from "./roomTimetableDay";

const RoomTimetableSchema = new mongoose.Schema({
  days: [{ type: mongoose.Schema.Types.ObjectId, ref: RoomTimetableDay }]
});

const RoomTimetable = mongoose.model("RoomTimetable", RoomTimetableSchema);
export default RoomTimetable;
