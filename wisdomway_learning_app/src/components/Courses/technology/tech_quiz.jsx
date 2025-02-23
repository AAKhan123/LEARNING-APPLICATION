import React, { useState, useEffect } from "react";
import "./tech_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What is the primary purpose of technology?",
    options: [
      "a) To create problems",
      "b) To solve problems and improve life",
      "c) To replace humans entirely",
      "d) To make things more complicated",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is an example of communication technology?",
    options: [
      "a)  A washing machine",
      "b) A telephone",
      "c) A car",
      "d) A refrigerator",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What major advancement in technology transformed healthcare?",
    options: [
      "a) MRI and CT scans",
      "b) Pencils and paper",
      "c) Mechanical clocks",
      "d) Wooden tools",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What is artificial intelligence (AI)?",
    options: [
      "a) Technology that mimics human intelligence",
      "b) A type of hardware",
      "c) A new form of transportation",
      "d)A method of gardening",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "Which of the following is an example of environmental technology?",
    options: [
      "a)  A coal power plant",
      "b) Solar panels",
      "c) Traditional farming tools",
      "d) Single-use plastics",
    ],
    answer: 1, // Correct answer index
  },
];

const Tech_quiz = () => {
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

export default Tech_quiz;
