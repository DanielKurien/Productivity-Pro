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
  font-size: 1.2rem;
  font-family: "Noto Sans JP", sans-serif;
`;

export const TimerChangerHeading = styled.h1`
  font-family: "Dosis";
  text-transform: uppercase;
  color: #5cdb95;
  font-size: 1.3rem;
`;
