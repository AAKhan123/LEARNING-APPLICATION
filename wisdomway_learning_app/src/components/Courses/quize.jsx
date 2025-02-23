import React, { useState, useEffect } from "react";
import "./quize.css";

// Quiz Data
const quizData = [
  {
    question: "What is the first step to creating a budget?",
    options: [
      "a) Spending your money",
      "b) Figuring out how much money you have",
      "c) Buying what you need first",
      "d) Saving everything",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is an example of a “need”?",
    options: [
      "a) A new video game",
      "b) Food for meals",
      "c) A toy car",
      "d) Fancy headphones",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is saving money?",
    options: [
      "a) Spending everything you earn",
      "b) Setting aside money for future use",
      "c) Using someone else’s money",
      "d) Borrowing money from a bank",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What does 'interest' mean in a savings account?",
    options: [
      "a) The money you spend when you buy something",
      "b) The extra money you earn for keeping your money in a bank",
      "c) A fee the bank charges for using your account",
      "d) A reward for spending all your savings",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is the difference between 'needs' and 'wants'?",
    options: [
      "a) Needs are things you can live without, and wants are essential.",
      "b) Needs are fun, and wants are boring.",
      "c) Needs are essential for living, and wants are extra things you’d like to have.",
      "d) There is no difference.",
    ],
    answer: 2, // Correct answer index
  },
];

const Quize = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Handle answer selection
  const handleAnswer = (selectedIndex) => {
    console.log("Selected Answer:", selectedIndex); // Debugging log
    if (selectedIndex === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // Restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <div className="quiz">
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(index)} // Handle answer click
                style={{
                  cursor: "pointer",
                  background: "",
                  margin: "5px 0",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} out of {quizData.length}
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quize;
