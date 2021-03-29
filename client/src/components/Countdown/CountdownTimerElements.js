import styled from "styled-components";

export const CountdownTimerWrapper = styled.div`
  display: flex;
  background-color: #22272e;
  border-radius: 1rem;
  border: 0.2rem solid #373e47;
  margin: 1rem;
  font-family: "Noto Sans JP", sans-serif;
  height: 100%;
  flex: 1.5;
  text-transform: capitalize;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.5rem;
`;

export const TimersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  background-color: #373e47;
  border-radius: 1rem;
  border:0.1rem solid white;
  color: #cdd9e5;
  width:10rem;
  height:2rem;

  &:hover {
    color: #5cdb95;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-evenly;
`;

export const TimerHeading = styled.h1`
  font-family: "Dosis";
  text-transform: uppercase;
  color: #5cdb95;
`;
