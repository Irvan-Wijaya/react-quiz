import React, { useEffect, useState } from "react";

function Timer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  // Depedency use timeout and onTimeout, bacause we want setTimeout function get re executed again. When user
  // answer then go to next question we want the timer get reset to default value (timer)

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}

export default Timer;
