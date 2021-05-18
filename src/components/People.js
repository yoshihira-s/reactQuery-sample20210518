import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeaple = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const Peaple = () => {
  const { data, status } = useQuery("person", fetchPeaple);
  console.log(data);
  return (
    <div>
      <h2>Peaple</h2>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>ロード中</div>}
      {status === "error" && <div>取得できませんでした</div>}
      {status === "success" && (
        <div>
          {data.results.map(person => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Peaple;
