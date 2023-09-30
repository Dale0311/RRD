import { useRouteError, Navigate } from "react-router-dom";
function Error() {
  const err = useRouteError();
  if (err.status === 302) {
    return (
      <Navigate
        to={`${err.headers.map.location}`}
        state={{ message: "Login first" }}
      />
    );
  }
  return (
    <div>
      <h1>Error occured</h1>
    </div>
  );
}

export default Error;
