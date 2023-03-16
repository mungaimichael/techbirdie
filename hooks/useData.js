import fetchNews from "../services/fetchNews.api";
import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const { data } = useQuery(["tech-news"], fetchNews);

  return { data };
};

export default useData;
