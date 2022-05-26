import { useMutation } from "react-query";
import loginUser from "../services/login.api";

const useLogin = () => {
  const { isLoading, data, error, mutate } = useMutation(loginUser);
  return { isLoading, data, error, mutate };
};

export default useLogin;
