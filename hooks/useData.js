import fetchNews from "../services/fetchNews.api";
import { useQuery } from "react-query";

const useData = () => {
  const { isLoading, isError, data } = useQuery("news", fetchNews);

  return { isLoading, isError, data };
};

export default useData;
