import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  box-sizing: border-box;
  padding: 0 3rem;
  display: flex;
  background-color: #5cdb95;
  color: white;
  min-height: 12vh;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;

export const NavLogo = styled.h1`
  font-family: "Dosis", sans-serif;
  color: #5cdb95;
  font-size: 1.5rem;
  background-color: #05386b;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  margin: 1rem;
  font-size: 1.1rem;
  background-color: #05386b;
  border-radius: 25px;
  color: white;
  padding: 0.5rem 1rem;

  &:hover {
    color: #8ee4af;
  }
`;