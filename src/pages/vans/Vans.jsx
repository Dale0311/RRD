import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { Suspense } from "react";
import { fetchData } from "../../utils/fetchData";
import Van from "../../components/Van";

export function loader() {
  return defer({ vans: fetchData("/api/vans") });
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vansPromise = useLoaderData();

  function renderedVans(vans) {
    const filteredVans = !typeFilter
      ? vans.vans
      : vans.vans?.filter((van) => van.type === typeFilter);

    const vansList = filteredVans?.map((van) => {
      return (
        <Van
          key={van.id}
          id={van.id}
          name={van.name}
          price={van.price}
          image={van.imageUrl}
          type={van.type}
          searchParams={searchParams}
        />
      );
    });
    return vansList;
  }

  function urlParamHandler(key, value) {
    setSearchParams((param) => {
      if (!value) {
        param.delete(key);
      } else {
        param.set(key, value);
      }
      return param;
    });
  }

  return (
    <div className="container mx-auto my-10">
      <ul className="flex space-x-5 my-5">
        <li>
          <button
            className="py-2 px-4 rounded text-gray-800"
            onClick={() => urlParamHandler("type", "rugged")}
            style={{
              backgroundColor: typeFilter === "rugged" ? "#FFE9CE" : "",
            }}
          >
            Rugged
          </button>
        </li>
        <li>
          <button
            className="py-2 px-4 rounded text-gray-800"
            onClick={() => urlParamHandler("type", "luxury")}
            style={{
              backgroundColor: typeFilter === "luxury" ? "#FFE9CE" : "",
            }}
          >
            Luxury
          </button>
        </li>
        <li>
          <button
            className="py-2 px-4 rounded text-gray-800"
            onClick={() => urlParamHandler("type", "simple")}
            style={{
              backgroundColor: typeFilter === "simple" ? "#FFE9CE" : "",
            }}
          >
            Simple
          </button>
        </li>
        <li>
          <button
            className={`py-2 px-4 rounded text-gray-800 ${
              !typeFilter && "underline"
            }`}
            onClick={() => urlParamHandler("type", null)}
          >
            Clear
          </button>
        </li>
      </ul>

      <Suspense
        fallback={
          <div className="flex w-full justify-center mt-40">
            <div className="w-32 h-32 rounded-full animate-spin border-8 border-solid border-red-500 border-t-transparent"></div>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Await resolve={vansPromise.vans}>{renderedVans}</Await>
        </div>
      </Suspense>
    </div>
  );
}

export default Vans;
