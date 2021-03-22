import React, { useState, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AuthContext } from "../../context/Auth";
import { ChillContext } from "../../context/ChillContext";
import { db } from "../../services/firebase";
import firebase from "firebase/app";
import chime from "../../sounds/chime.mp3";
import {
  CountdownTimerWrapper,
  TimersWrapper,
  RestartButton,
  StartStopButton,
  ButtonsWrapper,
  TimerHeading,
  TimerControl,
  TimerText,
} from "./CountdownTimerElements";
import Toggle from "../Toggle/Toggle";
import { Howl, Howler } from "howler";

const minuteSeconds = 60;
const hourSeconds = 3600;

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

const CountdownTimer = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const workEndTime = stratTime + 25 * 60; // use UNIX timestamp in seconds
  const chillEndTime = stratTime + 5 * 60;
  const [minutesKey, setMinutesKey] = useState(0);
  const [secondsKey, setSecondsKey] = useState(10);
  const [playing, setPlaying] = useState(false);
  const [timerButtonDesc, setTimerButtonDesc] = useState("Start");
  const { currentUser } = useContext(AuthContext);
  const { chill, setChill } = useContext(ChillContext);
  const chillRemainingTime = chillEndTime - stratTime;
  const workRemainingTime = workEndTime - stratTime;

  const timerProps = {
    isPlaying: playing,
    size: 120,
    strokeWidth: 6,
  };

  const sound = new Howl({
    src: [chime],
  });

  return (
    <CountdownTimerWrapper>
      <TimerHeading>Pomodoro Timer</TimerHeading>
      <TimerControl>
        <Toggle
          onChange={(event) => {
            setChill(event.target.checked);
            setSecondsKey((prevKey) => prevKey + 1);
            setMinutesKey((prevKey) => prevKey + 1);
            setTimerButtonDesc("Start");
            setPlaying(false);
          }}
        />
        <TimerText>{chill ? "Chill" : "Work"} Timer </TimerText>
      </TimerControl>
      {chill ? (
        <TimersWrapper>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#482ff7"]]}
            key={minutesKey}
            duration={hourSeconds}
            initialRemainingTime={chillRemainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => {
              return [chillRemainingTime - totalElapsedTime > minuteSeconds];
            }}
          >
            {({ elapsedTime }) =>
              renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#482ff7"]]}
            key={secondsKey}
            duration={minuteSeconds}
            initialRemainingTime={chillRemainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => {
              console.log(totalElapsedTime - chillRemainingTime);
              if (totalElapsedTime - chillRemainingTime === 0) {
                return false;
              }
              return [chillRemainingTime - totalElapsedTime > 0];
            }}
          >
            {({ elapsedTime }) =>
              renderTime("seconds", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </TimersWrapper>
      ) : (
        <TimersWrapper>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#ee5a5a"]]}
            key={minutesKey}
            duration={hourSeconds}
            initialRemainingTime={workRemainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => {
              return [workRemainingTime - totalElapsedTime > minuteSeconds];
            }}
          >
            {({ elapsedTime }) =>
              renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#ee5a5a"]]}
            key={secondsKey}
            duration={minuteSeconds}
            initialRemainingTime={workRemainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => {
              if (totalElapsedTime - workRemainingTime === 0) {
                db.collection("emails")
                  .doc(currentUser.email)
                  .update({
                    pomodoros: firebase.firestore.FieldValue.increment(1),
                  });

                sound.play();
              }
              return [workRemainingTime - totalElapsedTime > 0];
            }}
          >
            {({ elapsedTime }) =>
              renderTime("seconds", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </TimersWrapper>
      )}
      <ButtonsWrapper>
        <RestartButton
          onClick={() => {
            setSecondsKey((prevKey) => prevKey + 1);
            setMinutesKey((prevKey) => prevKey + 1);
            setPlaying(false);
            setTimerButtonDesc("Start");
          }}
        >
          Restart Timer
        </RestartButton>
        <StartStopButton
          onClick={() => {
            if (timerButtonDesc === "Start") {
              setTimerButtonDesc("Stop");
            } else {
              setTimerButtonDesc("Start");
            }
            setPlaying(!playing);
          }}
        >
          {timerButtonDesc}
        </StartStopButton>
      </ButtonsWrapper>
    </CountdownTimerWrapper>
  );
};

export default CountdownTimer;
