/* Styled Components needed for the CountdownTimerChanger Component

  Styled components allow you to create a custom element overlayed with additional
  styles. Styled components make it much easier to use write styles in React, compared
  to using traditional CSS files.
*/

import styled from "styled-components";

export const CountdownTimerChangerWrapper = styled.div`
  display: flex;
  font-family: "Noto Sans JP", sans-serif;
  height: 30%;
  flex: 1.3;
  text-transform: capitalize;
  background-color: #2d333b;
  box-sizing: border-box;
  text-align: center;

  justify-content: space-between;
  flex-direction: column;
  padding: 0.5rem;
`;

export const CountdownTimerChangerMain = styled.div`
  height: 100%;
  background-color: #22272e;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.2rem solid #373e47;
`;

export const TimerChangerControl = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const TimerChangerText = styled.p`
  color: #cdd9e5;
  font-family: "Noto Sans JP", sans-serif;

  @media only screen and (max-width: 1920px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const TimerChangerHeading = styled.h1`
  font-family: "Dosis";
  text-transform: uppercase;
  color: #5cdb95;
  font-size: 1.3rem;

  @media only screen and (max-width: 1920px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;
