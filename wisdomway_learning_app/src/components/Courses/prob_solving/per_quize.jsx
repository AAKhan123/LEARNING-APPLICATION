import React, { useState, useEffect } from "react";
import "./per_quize.css";

// Quiz Data
const quizData = [
  {
    question: "What is the first step in solving a problem?",
    options: [
      "a)  Taking immediate action",
      "b) Identifying the problem",
      "c) Asking someone else to fix it",
      "d) Ignoring it and hoping it goes away",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "What does “breaking down the problem” mean?",
    options: [
      "a) Making the problem seem bigger than it is",
      "b) Ignoring the smaller parts of the problem",
      "c) Dividing the problem into smaller, manageable steps",
      "d) Writing the problem down on paper",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: " What is brainstorming?",
    options: [
      "a) Thinking of as many solutions as possible",
      "b) Waiting for someone to solve the problem for you",
      "c) Writing a list of everything you don’t know",
      "d) Forgetting about the problem completely",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What is the purpose of evaluating options?",
    options: [
      "a) To choose the best solution",
      "b) To make the problem bigger",
      "c)  To delay taking action",
      "d) To eliminate all solutions",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " Which tool can help you organize ideas when solving a problem?",
    options: [
      "a) A mind map",
      "b) A shopping list",
      "c)  A calendar",
      "d)  A ruler",
    ],
    answer: 0 , // Correct answer index
  },
];

const Per_quiz = () => {
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

export default Per_quiz;
