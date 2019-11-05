import mongoose from "mongoose";
import { compareSync, hashSync } from "bcryptjs";
import UserRole, { DEFAULT_USER_ROLE_ID } from "./userRole";
import UserStatus, { DEFAULT_USER_STATUS_ID } from "./userStatus";

export const UNVERIFIED = "unverified";
export const VERIFIED = "verified";
export const REJECTED = "rejected";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      validate: {
        validator: username => User.doesNotExist({ username }),
        message: "Username already exists"
      }
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    room: {
      type: String
    },
    email: {
      type: String,
      validate: {
        validator: email => User.doesNotExist({ email }),
        message: "Email already exists"
      }
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserRole,
      default: DEFAULT_USER_ROLE_ID
    },
    roomAccess: {
      type: String
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserStatus,
      default: DEFAULT_USER_STATUS_ID
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", function() {
  if (this.isModified("password")) {
    this.password = hashSync(this.password, 10);
  }
});

UserSchema.statics.doesNotExist = async function(field) {
  return (await this.where(field).countDocuments()) === 0;
};

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
