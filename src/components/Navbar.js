import React from "react";
import logo from "../assets/img/logo.png";
import "../stylesheets/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo" id="logo" />
      </a>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
