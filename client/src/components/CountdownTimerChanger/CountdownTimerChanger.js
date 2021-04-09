import React, { useContext } from "react";
import { ChillContext } from "../../context/ChillContext";
import CountdownTimerChill from "../CountdownTimerChill/CountdownTimerChill";
import CountdownTimerWork from "../CountdownTimerWork/CountdownTimerWork";
import {
  CountdownTimerChangerWrapper,
  CountdownTimerChangerMain,
  TimerChangerHeading,
  TimerChangerControl,
  TimerChangerText,
} from "./CountdownTimerChangerElements";
import Toggle from "../Toggle/Toggle";

const CountdownTimerChanger = () => {
  const { chill, setChill } = useContext(ChillContext);

  return (
    <CountdownTimerChangerWrapper>
      <CountdownTimerChangerMain>
        <TimerChangerHeading>Pomodoro Timer</TimerChangerHeading>
        <TimerChangerControl>
          <Toggle
            onChange={(event) => {
              setChill(event.target.checked);
            }}
          />
          <TimerChangerText>{chill ? "Chill" : "Work"} Timer </TimerChangerText>
        </TimerChangerControl>
        {chill ? <CountdownTimerChill /> : <CountdownTimerWork />}
      </CountdownTimerChangerMain>
    </CountdownTimerChangerWrapper>
  );
};

export default CountdownTimerChanger;
