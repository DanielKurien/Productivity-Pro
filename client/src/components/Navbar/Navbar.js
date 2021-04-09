/* Main Navbar before the user logs in to the app. 
Has a logo on the left that just says Productivity Pro. 
On the right, has React Router links where user can Sign Up or Login
*/

//imports for Navbar Component
import React from "react";
import {
  Nav,
  NavLogo,
  NavLinks,
  NavLink,
  GithubIcon,
  NavMainWrapper,
} from "./NavbarElements";

//Navbar Component Used For the Root Route Component
const Navbar = () => {
  return (
    <Nav>
      <NavLogo>Productivity Pro</NavLogo>
      <NavMainWrapper>
        <NavLinks>
          <NavLink to={"/signup"}>Sign Up</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </NavLinks>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DanielKurien/Productivity-Pro"
        >
          <GithubIcon />
        </a>
      </NavMainWrapper>
    </Nav>
  );
};

export default Navbar;
