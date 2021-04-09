import React, { useContext } from "react";
import { ChillContext } from "../../context/ChillContext";

import {
  CountdownTimerChangerWrapper,
  CountdownTimerChangerMain,
  TimerChangerHeading,
  TimerChangerControl,
  TimerChangerText,
} from "./CountdownTimerChangerElements";
import Toggle from "../Toggle/Toggle";

const CountdownTimerChanger = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
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
      </CountdownTimerChangerMain>
    </CountdownTimerChangerWrapper>
  );
};

export default CountdownTimerChanger;
