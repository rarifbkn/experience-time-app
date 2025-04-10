import { NextResponse } from "next/server";
import Field from "@/models/Field";
import { connectDB } from "@/utils/mongoose";

export async function GET() {
  await connectDB();
  const fields = await Field.find();
  return NextResponse.json(fields);
}

//todo migrar a action
export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const newField = new Field(data);

    const savedField = await newField.save();
    return NextResponse.json(savedField);
  } catch (err: any) {
    console.log(err.message, {
      status: 400,
    });
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
