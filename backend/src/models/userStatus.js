import mongoose from "mongoose";

export const DEFAULT_USER_STATUS_ID = "5dc1460b5b790014100d7b65";
export const USER_STATUS_UNVERIFIED = "unverified";
export const USER_STATUS_VERIFIED = "verified";
export const USER_STATUS_BLOCKED = "blocked";
export const USER_STATUS_REJECTED = "rejected";

const UserStatusSchema = new mongoose.Schema({
  name: {
    type: String
  },
  text: {
    type: String
  }
});

const UserStatus = mongoose.model("UserStatus", UserStatusSchema);
export default UserStatus;
