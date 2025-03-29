import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(uri);

    if (connection.readyState === 1) {
      console.log("MongoDB conectado");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    return Promise.reject(error);
  }
};

export { connectDB };
