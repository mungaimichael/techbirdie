import axios from "axios";

const loginUser = async ({ email, password }) => {
  try {
    const req = await axios.post(`/api/login`, {
      email,
      password,
    });

    console.log(req);
  } catch (err) {
    console.log(err.message);
  }
};

export default loginUser;
