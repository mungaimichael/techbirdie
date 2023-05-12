import connectDb from "./controllers/db";

const handler = async (req, res) => {
  try {
    connectDb();
    res.status(200).send("This is the api root path");
  } catch (err) {
    res.send(err);
  }
};

export default handler;
