import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [5, "Password must be at least 5 characters"],

    trim: true,
    select: false,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [3, "Username must be at most 3 characters"],
    maxLength: [15, "Username must be at most 15 characters"],
    trim: true,
  },
});

const User = models.User || model("User", userSchema);
export default User;
