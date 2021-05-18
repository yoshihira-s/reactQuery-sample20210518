import React from "react";

const Navber = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Plaets</button>
      <button onClick={() => setPage("people")}>Peaple</button>
    </nav>
  );
};

export default Navber;
