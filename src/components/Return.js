import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Return() {
  return (
    <ul style={{ marginTop: "2em" }}>
      <li className="home-x">
        <NavLink
          exact
          activeClassName="active"
          to="/"
          style={{
            textDecoration: "none",
            color: "#cacaca"
          }}
        >
          <i class="material-icons">home</i>
        </NavLink>
      </li>
    </ul>
  );
}

export default Return;
