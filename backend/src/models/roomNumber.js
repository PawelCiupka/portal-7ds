import mongoose from "mongoose";

const RoomNumberSchema = new mongoose.Schema({
  number: {
    type: String
  },
  limit: {
    type: Number
  }
});

const RoomNumber = mongoose.model("RoomNumber", RoomNumberSchema);
export default RoomNumber;
