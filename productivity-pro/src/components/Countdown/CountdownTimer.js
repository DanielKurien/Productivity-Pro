import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { CountdownTimerWrapper } from "./CountdownTimerElements";

const CountdownTimer = () => {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed, api }) => {
    console.log(api);
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          <button onClick={() => api.start()}>Start</button>
          <button onClick={() => api.pause()}>Pause</button>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <CountdownTimerWrapper>
      <Countdown
        autoStart={false}
        date={Date.now() + 5000}
        renderer={renderer}
        controlled={false}
      />
    </CountdownTimerWrapper>
  );
};

export default CountdownTimer;
