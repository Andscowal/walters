import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink
            activeClassName="active"
            style={{ textDecoration: "none" }}
            to="/about"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            style={{ textDecoration: "none" }}
            to="/projects"
          >
            My Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            style={{ textDecoration: "none" }}
            to="/contact"
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
