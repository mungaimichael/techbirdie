import bcrypt from "bcryptjs/dist/bcrypt";
import jwt from "jsonwebtoken";
// import connectDb from "../controllers/db";
import userModel from "../models/users.model.js";

// function to generate JWT token
const genToken = async ({ _id, email }) => {
  // encode id and email in the jwt payload
  const token = await jwt.sign({ _id, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

const handler = async (req, res) => {
  try {
    // await db connection
    // await connectDb();

    // get req method
    const { method } = req;

    if (method === "POST") {
      // get user from req body
      const { email, password } = req.body;

      if (!email || !password) {
        res.send({ error: "Please provide email and password" });
      } else {
        const user = await userModel.findOne({ email });
        // if user is not in the database
        if (!user) {
          res
            .status(400)
            .send("User not found, please enter correct login details");
        }
        //   // check if password is correct
        else {
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            res.send("Incorrect password");
          }
          // if password is correct
          else {
            res.status(201).send({
              email: user.email,
              id: user._id,
              token: await genToken(user),
            });
          }
        }
      }
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export default handler;
