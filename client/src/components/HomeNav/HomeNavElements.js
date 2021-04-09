/* Styled Components needed for the HomeNav Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const HomeNavWrapper = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  background-color: #2d333b;
  height: 5vh;
  border-bottom: 0.2rem solid #373e47;
`;

export const HomeNavBtn = styled.button`
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  margin: 1rem;
  font-size: 1rem;
  background-color: #2d333b;
  border-radius: 0.6rem;
  color: #cdd9e5;
  border: none;

  &:hover {
    color: #5cdb95;
  }
`;

export const HomeNavHeading = styled.h1`
  font-family: "Dosis", sans-serif;
  color: #5cdb95;
  font-size: 1rem;
  background-color: #373e47;
  border: 0.2rem solid #22272e;
  border-radius: 0.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0 0.1rem;
`;
