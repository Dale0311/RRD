import { useState, useEffect } from "react";

function Vans({ vans }) {
  //     * {
  //     * id: "1",
  //     * name: "Modest Explorer",
  //     * price: 60,
  //     * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
  //     * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
  //     * type: "simple"
  //  * }
  useEffect(() => {
    console.log(vans);
  }, []);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default Vans;
