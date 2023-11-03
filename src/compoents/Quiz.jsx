import React, { useState } from "react";
import QUESTION from "../question";
import completedLogo from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizCompleted = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={completedLogo} alt="Trophy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  // logic shuffle answers
  const shuffleAnswers = [...QUESTION[activeQuestionIndex].answers];
  // Math.random() will give the values between 0 and 1, so will give between negative or positif value
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
