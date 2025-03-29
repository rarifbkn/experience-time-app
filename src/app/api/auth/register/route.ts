import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";


export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound) {
      return NextResponse.json(
        {
          message: "Email already Exists",
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
