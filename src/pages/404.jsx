import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div class="grid h-screen px-4 bg-white place-content-center space-y-4">
      <h1 class="tracking-widest text-gray-500 uppercase">404 | Not Found</h1>
      <Link
        to={"/"}
        className="py-2 px-4 bg-[#151716] text-white text-lg rounded"
      >
        Return to home
      </Link>
    </div>
  );
}

export default NotFound;
