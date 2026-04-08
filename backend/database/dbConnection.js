import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) return;
  
  // Quick safety check
  if (!process.env.MONGO_URI) {
    console.error("CRITICAL ERROR: MONGO_URI IS MISSING IN VERCEL ENVIRONMENT VARIABLES!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    });
    isConnected = true;
    console.log("Connected to database on Vercel!");
  } catch (err) {
    console.log(`Some error occured while connecing to database: ${err}`);
  }
};
