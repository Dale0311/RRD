import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error occured</h1>
    </div>
  );
}

export default Error;
