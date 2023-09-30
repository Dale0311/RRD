import { useState } from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../utils/fetchData";
function Login() {
  const { state } = useLocation();
  const message = state?.message;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  function handleChange(e) {
    setUser((user) => {
      const { name, value } = e.target;
      return { ...user, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(user)
      .then((data) => console.log(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setStatus("idle"));
  }

  return (
    <form
      className="container p-4 xl:w-1/3 mx-auto space-y-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="text-lg font-bold text-center">Sign in to your account</h1>
      {message && <h2 className="text-red-500">{message}</h2>}
      <label
        htmlFor="name"
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
      >
        <input
          type="text"
          id="name"
          placeholder="usename"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => handleChange(e)}
          name="username"
          value={user.username}
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Username
        </span>
      </label>
      <label
        htmlFor="pass"
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
      >
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="password"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => handleChange(e)}
          value={user.password}
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Password
        </span>
      </label>
      <button
        type="submit"
        className="py-2 px-4 bg-[#FF8C39] text-white rounded w-full"
      >
        {status === "submitting" ? "Submitting..." : "Sign in"}
      </button>
    </form>
  );
}

export default Login;
