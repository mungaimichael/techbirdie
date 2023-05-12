import axios from "axios";

const fetchNews = async () => {
  try {
    const res = await axios.get(
      `
        https://newsdata.io/api/1/news?apikey=pub_190159f0e59d79ee2fce1307b9672b1155c83&country=us&language=en&category=technology
      `
    );
    const data = await res.data.results;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchNews;
