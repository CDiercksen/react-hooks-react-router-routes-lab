import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>{actors.map((actor) => (
        <div key={actor.name}>
          <h2>Name: {actor.name}</h2>
          <h4>Movies:</h4>
            <ul>{actor.movies.map((movie) =>
            <li key={movie}>{movie}</li>
            )}
            </ul>
        </div>
      ))}
      </ul>
    </div>

  ) 
}

export default Actors;
