import { connect, connection } from "mongoose";


const conn = {
    isConnected: false,
};

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

export async function dbConnect(){
    if(conn.isConnected) return;

    const db = await connect(process.env.MONGODB_URI);

    conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));