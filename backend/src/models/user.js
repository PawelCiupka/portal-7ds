import mongoose, { mongo } from "mongoose";
import { compareSync, hashSync } from "bcryptjs";
import Role from "./role";

export const UNVERIFIED = "unverified";
export const VERIFIED = "verified";
export const REJECTED = "rejected";

export const USER_ROLE = Role.findOne({"name": "user"})

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
      ref: Role,
      default: USER_ROLE._id //"5dc03d3e1c9d4400007cd157"
    },
    roomAccess: {
      type: String
    },
    status: {
      type: String,
      default: UNVERIFIED
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
