import { useQuery } from "@tanstack/react-query";
import loginUser from "../services/login.api";

const useLogin = () => {
  const { data } = useQuery(["data"], loginUser);
  return data;
};

export default useLogin;
