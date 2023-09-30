import { redirect } from "react-router-dom";

async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/login");
  }
  return null;
}

export default requireAuth;
