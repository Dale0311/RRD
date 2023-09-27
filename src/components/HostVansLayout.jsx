import VanDetail from "../pages/vans/VanDetail";
import HostVansNav from "./HostVansNav";
import { Outlet } from "react-router-dom";
function HostVansLayout() {
  return (
    <div className="container mx-auto">
      <VanDetail hostVans={true} />
      <HostVansNav />
      <Outlet />
    </div>
  );
}

export default HostVansLayout;
