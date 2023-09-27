import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
}

export default HostLayout;
