import axios from "axios";

const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/login`, {
      email,
      password,
    });
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export default loginUser;
