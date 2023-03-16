import { useQuery } from "react-query";
import loginUser from "../services/login.api";

const useLogin = () => {
  const { data } = useQuery("data", loginUser);
  const { token } = data;
  return token;
};

export default useLogin;
