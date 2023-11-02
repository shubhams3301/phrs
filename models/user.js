import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    id: {
      type: String,
      // required: true,
    },
    age: {
      type: String,
      // required: true,
    },
    contact: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    hospital: {
      type: String,
      // required: true,
    },
    degree: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
