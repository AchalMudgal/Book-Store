import mongoose from "mongoose";
import { DB_URI } from "./configs.js";

export const connectDB = async() => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Db connected successfully on ${DB_URI}`);
  } catch (error) {
    console.log("Error in DB connection",error.message);
  }
}