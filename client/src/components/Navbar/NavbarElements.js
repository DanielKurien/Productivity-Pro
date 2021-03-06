/* Styled Components needed for the Navbar Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export const Nav = styled.nav`
  box-sizing: border-box;
  padding: 0 3rem;
  display: flex;
  border-bottom: 0.2rem solid #373e47;
  background-color: #2d333b;
  color: white;
  height: 12vh;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 670px) {
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 0 0.5rem;
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

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.4rem;
  }

  @media only screen and (max-width: 350px) {
    font-size: 0.85rem;
  }
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 2.4rem;
  border: 0.2rem solid #22272e;
  border-radius: 50%;
  background-color: #373e47;
  color: #cdd9e5;
  &:hover {
    color: #5cdb95;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 365px) {
    font-size: 1.4rem;
  }
`;

export const NavMainWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  margin: 1rem 0rem;
  margin-right: 0.7rem;
  font-size: 1.1rem;
  border: 0.2rem solid #22272e;
  background-color: #373e47;
  border-radius: 25px;
  color: #cdd9e5;
  padding: 0.5rem 1rem;

  &:hover {
    color: #5cdb95;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 0.5rem;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }

  @media only screen and (max-width: 365px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    margin: 0 0.2rem;
  }
`;
