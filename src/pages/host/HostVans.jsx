import Van from "../../components/Van";
import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import Loading from "../../components/Loading";
import requireAuth from "../../utils/requireAuth";
export async function loader() {
  await requireAuth();
  return defer({ vans: fetchData("/api/vans") });
}
function HostVans() {
  const vansPromise = useLoaderData();
  function renderVans(vans) {
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
    return ownedVans;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Await resolve={vansPromise.vans}>{renderVans}</Await>
      </div>
    </Suspense>
  );
}

export default HostVans;
