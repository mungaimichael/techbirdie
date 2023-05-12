import { useMutation } from "@tanstack/react-query";
import registerUser from "../services/register.api";

const useRegister = () => {
  const { data, error, mutate } = useMutation(registerUser);
  return { data, error, mutate };
};

export default useRegister;
