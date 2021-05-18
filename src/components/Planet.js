import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <div>人口 {planet.population}</div>
      <div>地形 {planet.terrain}</div>
    </div>
  );
};

export default Planet;
