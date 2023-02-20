import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
    unique: true,
  },
  lastname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

// claer cache
mongoose.models = {};
// Export the model
const userModel = mongoose.model("users", userSchema);

export default userModel;
