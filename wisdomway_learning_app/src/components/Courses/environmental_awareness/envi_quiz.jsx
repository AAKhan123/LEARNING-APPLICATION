import React, { useState, useEffect } from "react";
import "./envi_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What is the main goal of environmental awareness?",
    options: [
      "a) To encourage people to ignore environmental issues",
      "b) To protect the environment and conserve natural resources",
      "c) To increase industrial pollution",
      "d) To focus only on urban development",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is an example of conserving natural resources?",
    options: [
      "a)  Using renewable energy like solar or wind power",
      "b)  Leaving lights on when not in use",
      "c) Wasting water during daily activities",
      "d) Ignoring deforestation",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What are the effects of pollution on the environment?",
    options: [
      "a) Improved air quality and healthier ecosystems",
      "b) Harm to human health, wildlife, and ecosystems",
      "c)  Increased biodiversity and cleaner water",
      "d)  No significant effects",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is climate change primarily caused by?",
    options: [
      "a) Increased recycling efforts",
      "b) Overuse of renewable energy",
      "c) Greenhouse gas emissions from burning fossil fuels",
      "d)  Planting trees and reducing pollution",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: " Why is biodiversity important for the environment?",
    options: [
      "a)  It helps balance ecosystems and supports life",
      "b)  It only affects plant life, not humans",
      "c) It increases pollution levels",
      "d)   It has no significant impact",
    ],
    answer: 0, // Correct answer index
  },
];

const Envi_quiz = () => {
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

export default Envi_quiz;
