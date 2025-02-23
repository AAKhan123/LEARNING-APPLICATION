import React, { useState, useEffect } from "react";
import "./ever_quiz.css";

// Quiz Data
const quizData = [
  {
    question: " What does everyday science focus on?",
    options: [
      "a)  Understanding how scientific principles apply to daily life",
      "b)  Only studying complicated scientific theories",
      "c)   Ignoring practical applications of science",
      "d)  Learning about science without applying it",
    ],
    answer: 0, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which branch of science explains why a ball bounces?",
    options: [
      "a)  Biology",
      "b)  Physics",
      "c) Chemistry",
      "d) Earth Science",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What chemical reaction occurs during cooking?",
    options: [
      "a)  Photosynthesis",
      "b) Caramelization of sugar",
      "c)  Reflection of light",
      "d)  Evaporation of water from the ocean",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Why is science important in health and medicine?",
    options: [
      "a) It improves health through concepts like hygiene, vaccination, and nutrition.",
      "b)  It has no connection to health-related practices.",
      "c)  It focuses only on diseases that cannot be treated.",
      "d)  It explains why science cannot solve medical problems.",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What principle explains how brakes stop a car?",
    options: [
      "a) Aerodynamics",
      "b)  Friction",
      "c) Reflection",
      "d)  Photosynthesis",
    ],
    answer: 1, // Correct answer index
  },
];

const Ever_quiz = () => {
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

export default Ever_quiz;
