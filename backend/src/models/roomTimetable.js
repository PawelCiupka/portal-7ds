import mongoose from "mongoose";

const RoomTimetableSchema = new mongoose.Schema({
  days: { type: Array, default: [] }
});

const RoomTimetable = mongoose.model("RoomTimetable", RoomTimetableSchema);
export default RoomTimetable;
