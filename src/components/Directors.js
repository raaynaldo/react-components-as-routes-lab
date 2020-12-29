import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((directors, idx) => {
        return (
          <div key={idx}>
            <h3>Name: {directors.name}</h3>
            <p>Movies:</p>
            <ul>
              {directors.movies.map((movie, idx) => {
                return <li key={idx}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
