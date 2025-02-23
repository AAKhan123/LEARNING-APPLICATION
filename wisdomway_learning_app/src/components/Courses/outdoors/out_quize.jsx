import React, { useState, useEffect } from "react";
import "./out_quize.css";

// Quiz Data
const quizData = [
  {
    question: "What is the first thing you should do when you realize you’re lost in the wilderness?",
    options: [
      "a) Keep walking in any direction",
      "b) Stay calm and assess your surroundings",
      "c) Shout for help immediately",
      "d) Start running to find a way out",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: " Which of the following materials is best for starting a fire?",
    options: [
      "a)  Wet leaves",
      "b) Dry grass or twigs",
      "c) Large logs",
      "d) Plastic wrappers",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What tool helps you find direction in the wild?",
    options: [
      "a) A pocket knife",
      "b)  A compass",
      "c) A flashlight",
      "d) A water bottle",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Why is staying hydrated important in outdoor survival?",
    options: [
      "a) It prevents fatigue and keeps your body functioning properly",
      "b)  It helps you walk faster",
      "c) It allows you to skip meals",
      "d)  It keeps you warm",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What should you do before drinking water from a natural source?",
    options: [
      "a)  Purify or boil the water",
      "b) Taste it to see if it’s safe",
      "c) Collect it directly into your bottle",
      "d) Look for clear water only",
    ],
    answer: 0, // Correct answer index
  },
];

const Out_quize = () => {
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

export default Out_quize;
