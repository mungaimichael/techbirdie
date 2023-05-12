import mongoose from "mongoose";

require("dotenv").config();

const connectDb = async () => {
  try {
    // create a connection to the database
    const conn = await mongoose.connect(process.env.MONGO_URI);

    conn
      ? console.log(`${conn.connection.host} is connected`)
      : console.log("Eroor connecting to DB");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
