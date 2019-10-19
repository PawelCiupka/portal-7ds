import mongoose from "mongoose";

const RoomNumberSchemaa = new mongoose.Schema(
  {
    number: {
      type: String
    },
    limit: {
      type: Number
    }
  }
);

const RoomNumber = mongoose.model("RoomNumber", RoomNumberSchemaa);
export default RoomNumber;
