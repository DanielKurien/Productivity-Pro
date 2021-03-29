//imports for Navbar Component
import React from "react";
import { Nav, NavLogo, NavLinks, NavLink } from "./NavbarElements";

//Navbar Component Used For the Root Route Component
const Navbar = () => {
  return (
    <Nav>
      <NavLogo>Productivity Pro</NavLogo>
      <NavLinks>
        <NavLink to={"/signup"}>Sign Up</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
