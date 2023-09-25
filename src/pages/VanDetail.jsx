import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useAxios from "../hooks/useAxios";
import React, { useState, useEffect } from "react";
import vanTypeColor from "../utils/vanTypeColor";

function VanDetail() {
  const params = useParams();
  const { data, loading } = useAxios(`/api/vans/${params?.id}`);
  const van = data?.vans;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {van && (
        <>
          <img
            src={`${van.imageUrl}`}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="relative border border-gray-100 bg-white p-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                {van.name}
              </h3>
              <div className="text-gray-700 font-bold flex flex-col">
                ${van.price} / <span className="text-sm font-medium">Day</span>
              </div>
            </div>
            <p className={`mt-1.5 py-2 px-4 rounded text-white`}>{van.type}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default VanDetail;
