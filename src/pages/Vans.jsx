import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Van from "../components/Van";
function Vans({ vans }) {
  //     * {
  //     * id: "1",
  //     * name: "Modest Explorer",
  //     * price: 60,
  //     * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
  //     * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
  //     * type: "simple", "luxury", "rugged"
  //  * }
  const vansList = vans?.map((van) => {
    return (
      <Van
        key={van.id}
        name={van.name}
        price={van.price}
        image={van.imageUrl}
        type={van.type}
      />
    );
  });
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vansList}
      </div>
    </div>
  );
}

export default Vans;
