import Van from "../../components/Van";
import { Link, useLoaderData } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import requireAuth from "../../utils/requireAuth";
export async function loader() {
  await requireAuth();
  return fetchData("/api/vans");
}
function HostVans() {
  const vans = useLoaderData();
  const ownedVans = vans.vans.map((van) => {
    return (
      <Van
        key={van.id}
        image={van.imageUrl}
        name={van.name}
        type={van.type}
        price={van.price}
        id={van.id}
      />
    );
  });
  // const ownedVans = data?.vans.map((van) => {
  //   return (
  //     <Link
  //       className="group relative overflow-hidden flex flex-col"
  //       key={van.id}
  //       to={`${van.id}`}
  //     >
  //       <img
  //         src={`${van.imageUrl}`}
  //         alt=""
  //         className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  //       />

  //       <div className="relative border border-gray-100 bg-white p-1">
  //         <div className="flex items-center justify-between">
  //           <h3 className="text-xl font-semibold text-gray-900">{van.name}</h3>
  //           <div className="text-gray-700 font-bold flex flex-col">
  //             ${van.price} / <span className="text-sm font-medium">Day</span>
  //           </div>
  //         </div>
  //         <p className={`mt-1.5 py-2 px-4 rounded text-white`}>{van.type}</p>
  //       </div>
  //     </Link>
  //   );
  // });
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {ownedVans}
    </div>
  );
}

export default HostVans;
