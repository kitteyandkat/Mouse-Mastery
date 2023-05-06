import React from "react";
import App from "../App";



function Quiz({ questions, currentQuestionIndex, onNextQuestion }) {
    const currentQuestion = questions[currentQuestionIndex];
  
    function handleNextQuestion() {
      onNextQuestion();
    }
  
    return (
      <div>
        <h2>{currentQuestion.questionText}</h2>
        {currentQuestion.answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              id={answer}
              name="quiz-answer"
              value={answer}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  }
  
  export default Quiz;


