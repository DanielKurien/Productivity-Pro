/* The CountdownTimerWork component controls the functionality for the work timer.
    In terms of functionality, it is basically the the same as the CountdownTimerChill
    component. However, it has two distinct differences. One, is the timer is set to 25
    minutes as that's the usual in the pomodoro system.
    Also, when the timer is completed it updates the stat tracker and adds one more to 
    the the work timer amount in the stat tracker.
*/

import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/app";
import { AuthContext } from "../.././context/Auth";
import { db } from "../../services/firebase";
import {
  CountdownTimerWorkWrapper,
  CountdownTimerWorkText,
  CountdownTimerWorkMain,
  CountdownTimerWorkPauseBtn,
  CountdownTimerWorkResetBtn,
  CountdownTimerDoneText,
} from "./CountdownTimerWorkElements";

import chime from "../../sounds/chime.mp3";
import { Howl } from "howler";

const CountdownTimerWork = ({ hours = 0, minutes = 25, seconds = 0 }) => {
  const { currentUser } = useContext(AuthContext);
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
      db.collection("emails")
        .doc(currentUser.email)
        .update({
          pomodoros: firebase.firestore.FieldValue.increment(1),
        });
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
    <CountdownTimerWorkWrapper>
      <CountdownTimerWorkMain>
        {over ? (
          <CountdownTimerDoneText>Time's up!</CountdownTimerDoneText>
        ) : (
          <CountdownTimerWorkText>{`${m
            .toString()
            .padStart(2, "0")}:${s
            .toString()
            .padStart(2, "0")}`}</CountdownTimerWorkText>
        )}
      </CountdownTimerWorkMain>
      <CountdownTimerWorkPauseBtn onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </CountdownTimerWorkPauseBtn>
      <CountdownTimerWorkResetBtn onClick={() => reset()}>
        Restart
      </CountdownTimerWorkResetBtn>
    </CountdownTimerWorkWrapper>
  );
};

export default CountdownTimerWork;
