import { useState } from "react";
import { useLoaderData, Form, useActionData } from "react-router-dom";
import { loginUser } from "../utils/fetchData";
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  console.log(username, password);
  return null;
}

function Login() {
  const message = useLoaderData();
  const data = useActionData();
  return (
    <Form className="container p-4 xl:w-1/3 mx-auto space-y-4" method="post">
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
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm cursor-pointer"
          name="username"
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
          className="peer h-8 w-full  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm cursor-pointer"
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Password
        </span>
      </label>
      <button
        type="submit"
        className="py-2 px-4 bg-[#FF8C39] text-white rounded w-full"
      >
        Sign in
      </button>
    </Form>
  );
}

export default Login;
