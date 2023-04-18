import React from "react";

export const Location = ({ location }) => {
  return (
    <section className='grid font-fira text-center text-green-500 bg-[url("/images/bg.png")]'>
      <h2>{location?.name}</h2>
      <ul>
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Population: {location?.residents.length}</li>
      </ul>
    </section>
  );
};

export default Location;
