import fetchNews from "../services/fetchNews.api";
import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const { isLoading, data } = useQuery(["tech-news"], fetchNews);

  return { isLoading, data };
};

export default useData;
