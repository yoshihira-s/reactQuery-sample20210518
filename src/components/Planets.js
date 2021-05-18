import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets, {
    staleTime: 0,
    // cacheTime: 10,
    onSuccess: () => console.log("data fetched")
  });
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>ロード中</div>}
      {status === "error" && <div>取得できませんでした</div>}
      {status === "success" && (
        <div>
          {data.results.map(planet => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
