import axios from "axios";
async function fetchData(url) {
  const res = await axios.get(url);
  if (!res.status === 200) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  return res.data;
}

export default fetchData;
