import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Details() {
  const van = useOutletContext();

  return (
    <div>
      <h1 className="text-lg font-semibold">{van.name}</h1>
      <p>{van.description}</p>
    </div>
  );
}

export default Details;
