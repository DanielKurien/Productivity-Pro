import styled from "styled-components";

export const CountdownTimerWrapper = styled.div`
  display: flex;
  background-color: #364067;
  border-radius: 1rem;
  border: 0.2rem solid #525f88;
  margin: 1rem;
  font-family: "Noto Sans JP", sans-serif;
  height: 100%;
  flex: 1.5;
  text-transform: capitalize;
  text-align: center;
  justify-content: space-ebetween;
  flex-direction: column;
  padding: 0.5rem;
`;

export const TimersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TimerControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimerText = styled.p`
  color: #d7dbf1;
  font-family: "Noto Sans JP", sans-serif;
`;
export const RestartButton = styled.button`
  outline:none;
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
  border:0.1rem solid white;
  background-color: #525f88;
  border-radius: 1rem;
  color: #d7dbf1;
  width:10rem;
  height:2rem;

  &:hover {
    color: #5cdb95;
`;

export const StartStopButton = styled.button`
  outline:none;
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
  background-color: #525f88;
  border-radius: 1rem;
  border:0.1rem solid white;
  color: #d7dbf1;
  width:10rem;
  height:2rem;

  &:hover {
    color: #5cdb95;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

export const TimerHeading = styled.h1`
  font-family: "Dosis";
  text-transform: uppercase;
  color: #5cdb95;
`;
