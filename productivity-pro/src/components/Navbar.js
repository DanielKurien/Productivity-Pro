//imports for Navbar Component
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//Navbar Component Used For the Root Route Component
const Navbar = () => {
  return (
    <nav>
      <h1>Productivity Pro</h1>
      <ul>
        <li>
          <Link className="link" to={"/signup"}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
