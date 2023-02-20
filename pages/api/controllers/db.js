import mongoose from "mongoose";

require("dotenv").config();

const connectDb = async () => {
  try {
    // create a connection to the database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } else {
      console.log("Error connecting to MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
