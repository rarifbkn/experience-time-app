"use server";
import User from "@/models/User";
import {
  LoginUserSchemaType,
  RegisterUserSchemaType,
} from "@/types/Schemas/auth.types";
import { connectDB } from "@/utils/mongoose";
import bcrypt from "bcryptjs";

export async function register({
  email,
  username,
  password,
}: RegisterUserSchemaType) {
  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound) {
      return {
        message: "User already Exist",
        status: 400,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return {
      success: true,
      email: savedUser.email,
      username: savedUser.username,
      id: savedUser._id,
    };
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}
