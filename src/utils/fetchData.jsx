import axios from "axios";
async function fetchData(url) {
  const res = await axios.get(url);
  const data = await res.data;
  return data;
}

export default fetchData;
