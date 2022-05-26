import axios from "axios";

const registerUser = async ({ firstname, lastname, email, password }) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/register`, {
      firstname,
      lastname,
      email,
      password,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default registerUser;
