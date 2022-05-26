import connectDb from "./controllers/db";

const handler = async (req, res) => {
  try {
    res.status(200).send("Connected to MongoDB");
  } catch (err) {
    res.send(err);
  }
};

export default handler;
