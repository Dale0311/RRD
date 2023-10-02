import axios from "axios";
export async function fetchData(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err.message;
  }
}
export async function loginUser(creds) {
  try {
    const res = await axios.post("/api/login", creds);
    return res.data;
  } catch (err) {
    return err.message;
  }
}
