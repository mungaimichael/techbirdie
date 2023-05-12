import connectDb from "../controllers/db.js";
import bcrypt from "bcryptjs/dist/bcrypt";
import userModel from "../models/users.model";
export default async function handler(req, res) {
  try {
    // await db connection
    await connectDb();

    // get req method
    const method = req.method;

    if (method === "POST") {
      const { firstname, lastname, email, password } = req.body;

      const user = await userModel.findOne({ email });

      // check if user already exists
      if (user) {
        res.status(400).json("User already exists");
      } else {
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user using hashed password
        const newUser = await userModel.create({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        });
        if (!newUser) {
          res.status(405).json("error creating user");
        }
        // send user as json
        res.status(200).json({
          email: newUser.email,
          id: newUser._id,
          msg: "User successflly created!",
        });
      }
    }
  } catch (err) {
    res.json(err);
  }
}
