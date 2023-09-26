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
    <div className="container mx-auto lg:w-1/2 mt-5">
      {van && (
        <>
          <img
            src={`${van.imageUrl}`}
            alt=""
            className="h-80 w-full object-cover bg-right"
          />
          <div className="relative border border-gray-100 bg-white p-5 md:p-0 space-y-4">
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
            <button className="py-2 px-4 w-full text-white rounded font-semibold bg-[#FF8C39]">
              Rent this van
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default VanDetail;
