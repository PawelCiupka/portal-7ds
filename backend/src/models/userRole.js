import mongoose from "mongoose";

export const DEFAULT_USER_ROLE_ID = "5dc144970665c005ec324318";
export const USER_ROLE_USER = "user";
export const USER_ROLE_ADMINISTRATOR = "administrator";

const UserRoleSchema = new mongoose.Schema({
  name: {
    type: String
  },
  text: {
    type: String
  }
});

const UserRole = mongoose.model("UserRole", UserRoleSchema);
export default UserRole;
