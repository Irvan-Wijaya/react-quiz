import React, { useCallback, useState } from "react";
import QUESTION from "../question";
import completedLogo from "../assets/quiz-complete.png";
import Question from "./Question";

function Quiz() {
  // question index follow userAnswer length
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const quizCompleted = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, [1000]);
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex]
  );
  // this function should be recreated whenever the act of question index values changed

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={completedLogo} alt="Trophy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTION[activeQuestionIndex].text}
        answers={QUESTION[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer = {userAnswer[userAnswer.length - 1]}
        onSkipAnswer= {handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;

// note
/*
  using the same key, active question index, on two different components.
  And that is not something you are allowed to do. (in same div / part)
*/
