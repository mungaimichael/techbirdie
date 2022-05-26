import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // create a connection to the database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } else {
      console.log("not connected to MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
