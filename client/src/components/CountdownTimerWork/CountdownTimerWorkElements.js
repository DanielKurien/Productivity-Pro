/* Styled Components needed for the CountdownTimerWork Component

  Please refer to the CountdownTimerChangerElements.js file
  for a short description of Styled Components
*/

import styled from "styled-components";

export const CountdownTimerWorkWrapper = styled.div``;

export const CountdownTimerWorkText = styled.p`
  font-family: "Noto Sans JP";
  color: #d87463;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const CountdownTimerDoneText = styled.p`
  margin-bottom: 0.4rem;
`;
export const CountdownTimerWorkMain = styled.div`
  color: white;
  font-size: 1.3rem;
  font-family: "Noto Sans JP";
  font-weight: bold;
`;

export const CountdownTimerWorkPauseBtn = styled.button`
  text-decoration: none;
  outline: none;
  margin-right: 0.2rem;
  font-size: 0.7rem;
  color: #5cdb95;
  font-weight: bold;
  background-color: #2d333b;
  font-family: "Noto Sans JP";
  border-radius: 2rem;
  border: 0.2rem solid #373e47;
  padding: 0.3rem 0.5rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #5cdb95;
    color: black;
  }
`;

export const CountdownTimerWorkResetBtn = styled.button`
  text-decoration: none;
  margin-left: 0.2rem;
  font-size: 0.7rem;
  outline: none;
  background-color: #2d333b;
  color: #5cdb95;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;
  border-radius: 2rem;
  border: 0.2rem solid #373e47;
  padding: 0.3rem 0.5rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #5cdb95;
    color: black;
  }
`;
