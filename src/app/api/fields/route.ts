import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/mongoose";
import Field from "@/models/Field"

export async function GET(){
    dbConnect();
    const fields = await Field.find()
    return NextResponse.json(fields)
}


export async function POST(request:Request) {
    try{
    const data = await request.json()
    const newField = new Field(data);

    const savedField = await newField.save();
    return NextResponse.json(savedField)
    }catch(err:any){
        console.log(err.message, {
            status: 400,
        })
    }
}