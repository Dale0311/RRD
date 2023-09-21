import { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.VITE_API_KEY}`,
});
function Axios(param) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    instance
      .get(param)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [param]);

  return { data, loading, error };
}

export default Axios;
