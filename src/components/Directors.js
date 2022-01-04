import React from "react";
import { directors } from "../data";

function Directors() {
  return  (
  <div>
    <h1>Directors Page</h1>
    <ul>{directors.map((director) => (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <h4>Movies:</h4>
          <ul>{director.movies.map((movie) => (
            <li key={movie}>{movie}</li> 
        ))}
      </ul>
    </div>
  ))}</ul>
</div>
  );
}

export default Directors;
