import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  box-sizing: border-box;
  padding: 0 3rem;
  display: flex;
  border-bottom: 0.2rem solid #373e47;
  background-color: #2d333b;
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
  background-color: #373e47;
  border: 0.2rem solid #22272e;
  border-radius: 0.9rem;
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
  border: 0.2rem solid #22272e;
  background-color: #373e47;
  border-radius: 25px;
  color: #cdd9e5;
  padding: 0.5rem 1rem;

  &:hover {
    color: #5cdb95;
  }
`;
