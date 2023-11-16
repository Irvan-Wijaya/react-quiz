import React, {useRef} from "react";

function Answers({ answer, selectedAnswer, answerState, onSelect }) {
    const shuffleAnswers = useRef();

  // if its undefined means we know that dont have any shuffled yet
  if (!shuffleAnswers.current) {
    // logic shuffle answers
    shuffleAnswers.current = [...answer];
    // Math.random() will give the values between 0 and 1, so will give between negative or positif value
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  // But once it has been defined, I will not shuffle them again, even if the component function executes again, because I already did change the order.

  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          answerState === "correct" ||
          (answerState === "wrong" && isSelected)
        ) {
          cssClasses = answerState;
        }

        return (
          <li className="answer" key={answer}>
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
