import styled from "styled-components";

export const CountdownTimerWrapper = styled.div`
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

export const CountdownTimerMain = styled.div`
  height: 100%;
  background-color: #22272e;
  border-radius: 1rem;
  border: 0.2rem solid #373e47;
`;

export const TimersWrapper = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const TimerControl = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const TimerText = styled.p`
  color: #cdd9e5;
  font-size: 1.2rem;
  font-family: "Noto Sans JP", sans-serif;
`;
export const RestartButton = styled.button`
  outline:none;
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
  border:0.1rem solid white;
  background-color: #373e47;
  border-radius: 1rem;
  color: #cdd9e5;
  width:8rem;
  height:1.7rem;

  &:hover {
    color: #5cdb95;
`;

export const StartStopButton = styled.button`
  outline:none;
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
  background-color: #373e47;
  border-radius: 1rem;
  border:0.1rem solid white;
  color: #cdd9e5;
  margin-left:2rem;
  width:7rem;
  height:1.7rem;

  &:hover {
    color: #5cdb95;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-around;
`;

export const TimerHeading = styled.h1`
  font-family: "Dosis";
  text-transform: uppercase;
  color: #5cdb95;
  font-size: 1.3rem;
`;

export const TimerCheck = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: default;
`;
