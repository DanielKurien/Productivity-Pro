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
