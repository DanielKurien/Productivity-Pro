/* This component takes care of the full functionality needed 
when a user sets a Chill timer. As seen, the parameter of the function has a default value
of 5 minutes. This is because in the pomodoro technique system there is only a 5 minute chill timer.
In the tick function, when the hours, minutes and seconds === 0,
(indicating that the timer is complete) a chime sound will be played indicating 
to user that the timer is done. The tick function is extremely important to the
functionality of the timer, as it is ran every second if timer needs to be updated
to show the correct information.
*/

import React, { useState, useEffect } from "react";
import {
  CountdownTimerChillWrapper,
  CountdownTimerChillText,
  CountdownTimerChillMain,
  CountdownTimerChillPauseBtn,
  CountdownTimerChillResetBtn,
  CountdownTimerDoneText,
} from "./CountdownTimerChillElements";

import chime from "../../sounds/chime.mp3";
import { Howl } from "howler";

const CountdownTimerChill = ({ hours = 0, minutes = 5, seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const sound = new Howl({
    src: [chime],
  });

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
      sound.play();
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <CountdownTimerChillWrapper>
      <CountdownTimerChillMain>
        {over ? (
          <CountdownTimerDoneText>Time's up!</CountdownTimerDoneText>
        ) : (
          <CountdownTimerChillText>{`${m.toString()}:${s
            .toString()
            .padStart(2, "0")}`}</CountdownTimerChillText>
        )}
      </CountdownTimerChillMain>
      <CountdownTimerChillPauseBtn onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </CountdownTimerChillPauseBtn>
      <CountdownTimerChillResetBtn onClick={() => reset()}>
        Restart
      </CountdownTimerChillResetBtn>
    </CountdownTimerChillWrapper>
  );
};

export default CountdownTimerChill;
