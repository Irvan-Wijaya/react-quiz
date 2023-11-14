import React from "react";
import Timer from "./Timer";
import Answers from "./Answers";

function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer
}) {
  return (
    <div>
      <div id="question">
        <Timer
          timeout={10000}
          onTimeout={onSkipAnswer}
        />
        <h2>{questionText}</h2>
        <Answers
          // seperate into new component then add key for got rid from problem
          answer={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
