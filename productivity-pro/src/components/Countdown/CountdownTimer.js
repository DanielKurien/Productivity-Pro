import React, { useState, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AuthContext } from "../../context/Auth";
import { db } from "../../services/firebase";
import firebase from "firebase/app";

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
  const endTime = stratTime + 25 * 60; // use UNIX timestamp in seconds
  const [minutesKey, setMinutesKey] = useState(0);
  const [secondsKey, setSecondsKey] = useState(10);
  const [playing, setPlaying] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const remainingTime = endTime - stratTime;

  const timerProps = {
    isPlaying: playing,
    size: 120,
    strokeWidth: 6,
  };

  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        key={minutesKey}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        key={secondsKey}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => {
          if (totalElapsedTime - remainingTime === 0) {
            db.collection("emails")
              .doc(currentUser.email)
              .update({
                pomodoros: firebase.firestore.FieldValue.increment(1),
              });
          }
          return [remainingTime - totalElapsedTime > 0];
        }}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
      <button
        onClick={() => {
          setSecondsKey((prevKey) => prevKey + 1);
          setMinutesKey((prevKey) => prevKey + 1);
          setPlaying(false);
        }}
      >
        Restart Timer
      </button>
      <button onClick={() => setPlaying(!playing)}>Click Me</button>
    </div>
  );
};

export default CountdownTimer;