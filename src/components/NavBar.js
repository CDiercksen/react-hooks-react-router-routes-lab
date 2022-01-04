import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  TextDecoration: "none",
  color: "white",
};
function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background:"purple",
        }}
        >
          Home
        </NavLink>
        <NavLink 
        to="/Movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
        >
          Movies
        </NavLink>
        <NavLink
        to="/Directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
        >
          Directors
        </NavLink>
        <NavLink
        to="/Actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "purple",
        }}
        >
          Actors
        </NavLink>
    </div>
  );
}

export default NavBar;
