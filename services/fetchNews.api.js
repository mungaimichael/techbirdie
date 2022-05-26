import axios from "axios";

const fetchNews = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}tesla`);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchNews;
