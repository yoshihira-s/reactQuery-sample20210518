import React from "react";

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <div>性別 {person.gender}</div>
      <div>誕生日 {person.birth_year}</div>
    </div>
  );
};

export default Person;
