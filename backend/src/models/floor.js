import mongoose from "mongoose";

const FloorSchema = new mongoose.Schema({
  number: {
    type: String
  }
});

const Floor = mongoose.model("Floor", FloorSchema);
export default Floor;
