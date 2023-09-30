import VanDetail from "../pages/vans/VanDetail";
import HostVansNav from "./HostVansNav";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import vanTypeColor from "../utils/vanTypeColor";
import fetchData from "../utils/fetchData";
import requireAuth from "../utils/requireAuth";
export async function loader({ params }) {
  await requireAuth();
  return fetchData(`/api/vans/${params.id}`);
}
function HostVansLayout() {
  const data = useLoaderData();
  const van = data.vans;
  return (
    <div className="container mx-auto">
      <>
        <div>
          <Link to={`..`} relative="path" className="p-4 md:p-0">
            Back to all vans
          </Link>
          <div className="mt-5 flex flex-col md:flex-row p-4 md:p-0 md:space-x-4">
            <img
              src={`${van.imageUrl}`}
              alt=""
              className="h-80 w-full object-cover bg-right"
            />
            <div className="relative border border-gray-100 bg-white md:p-0 space-y-4">
              <p
                className={`mt-2 py-2 px-4 max-w-min rounded text-white`}
                style={{ backgroundColor: vanTypeColor(van.type) }}
              >
                {van.type}
              </p>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
                  {van.name}
                </h3>
                <div className="text-gray-700 font-bold text-xl">
                  ${van.price}{" "}
                  <span className=" text-sm font-semibold">/ Day</span>
                </div>
              </div>
              <p className="text-lg">{van.description}</p>
              <p>Visibility: Public</p>
            </div>
          </div>
        </div>
        <HostVansNav />
        <Outlet context={van} />
      </>
    </div>
  );
}

export default HostVansLayout;
