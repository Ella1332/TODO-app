import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul style={{ display: "flex", listStyle: "none" }}>
      <li style={{ marginRight: "150px" }}>
        <Link to="/home">Home</Link>
      </li>
      <li style={{ marginRight: "150px" }}>
        <Link to="/about">About</Link>
      </li>
      <li style={{ marginRight: "150px" }}>
        <Link to="/todo-list">Todos</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
