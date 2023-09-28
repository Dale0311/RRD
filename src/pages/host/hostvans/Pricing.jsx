import { useOutletContext } from "react-router-dom";
function Pricing() {
  const van = useOutletContext();
  return (
    <>
      <h1 className="text-3xl font-semibold">${van.price}</h1>
    </>
  );
}

export default Pricing;
