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
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Response({
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    });
  }

  return data;
}
