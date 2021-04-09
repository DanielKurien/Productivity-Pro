/* Component controls which timer should be shown to the user, based on 
the global "chill" state. If state is set to true, the chill timer is shown.
Otherwise, the work timer is rendered. User can control which timer is shown 
(by changing this state) using the child toggle component rendered in this parent 
component
*/

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
