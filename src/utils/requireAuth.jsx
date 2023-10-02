import { redirect } from "react-router-dom";

async function requireAuth() {
  let isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    const response = redirect("/login?message=Login first");
    response.body = true;
    throw response;
  }
  return null;
}

export default requireAuth;
