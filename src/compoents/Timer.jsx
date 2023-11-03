import React from "react";

function Timer({ timeout }) {
  setTimeout(() => {
    
  }, timeout);
  return <progress id="question-time" />;
}

export default Timer;
