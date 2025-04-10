import User from "@/models/User";
import { RegisterUserSchemaType } from "@/types/Schemas/auth.types";
import { connectDB } from "@/utils/mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function register({
  email,
  username,
  password,
}: RegisterUserSchemaType) {
  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound) {
      return NextResponse.json(
        {
          message: "User already Exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json({
      email: savedUser.email,
      username: savedUser.username,
      id: savedUser._id,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
}
