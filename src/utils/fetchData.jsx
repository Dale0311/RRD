import axios from "axios";
async function fetchData(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err.message;
  }
}

export default fetchData;
