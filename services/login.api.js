import axios from "axios";

const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`/api/login`, {
      email,
      password,
    });
    // store token in local storage
    const { email: userEmail, token } = response.data;
    localStorage.setItem("token", token);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export default loginUser;
