/* Styled Components needed for the Root Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const RootWrapper = styled.div`
  background-color: #22272e;
  height: 100vh;
`;

export const RootMain = styled.div`
  display: flex;
  height: 88vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const RootHeading = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
  color: #cdd9e5;
  font-size: 4rem;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const RootImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const TypewriterHeading = styled.h1`
  display: inline-block;
  font-family: "Noto Sans JP";
  color: #5cdb95;
  text-align: center;
  font-size: 3rem;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
  }
`;
