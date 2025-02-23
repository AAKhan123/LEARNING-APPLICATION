import React, { useState, useEffect } from "react";
import "./awar_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What does career awareness mean?",
    options: [
      "a) Knowing only about one specific job",
      "b) Understanding different career options, skills, and opportunities",
      "c) Choosing a job without any research",
      "d) Avoiding thinking about your future profession",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Why is exploring different careers important?",
    options: [
      "a)  To waste time on unnecessary information",
      "b) To find a career that matches your interests and skills",
      "c) To avoid making any decisions",
      "d) To ensure you choose the same job as your friends",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is the purpose of a skills assessment?",
    options: [
      "a) To identify your strengths and interests",
      "b) To compare yourself to others",
      "c) To avoid making any effort in career planning",
      "d) To limit your career choices",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "How does education help in career building?",
    options: [
      "a) It provides the knowledge and skills needed for a career",
      "b) It only helps in theoretical learning",
      "c) It has no connection to careers",
      "d) It focuses only on extracurricular activities",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " What are soft skills?",
    options: [
      "a)  Skills used only in creative jobs",
      "b)  Communication, teamwork, problem-solving, and adaptability",
      "c) Technical abilities required for specific professions",
      "d)  Skills that are no longer needed in the workplace",
    ],
    answer: 1, // Correct answer index
  },
];

const Awar_quiz = () => {
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

export default Awar_quiz;
