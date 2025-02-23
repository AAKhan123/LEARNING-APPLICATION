import React, { useState, useEffect } from "react";
import "./digital_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What is digital literacy?",
    options: [
      "a) The ability to use digital tools and technologies effectively and responsibly",
      "b) Knowing how to use only social media",
      "c) Avoiding digital tools and technology",
      "d) Understanding how to create passwords only",
    ],
    answer: 0, // Correct answer index (1 is the correct option)
  },
  {
    question: "Why is digital literacy important in modern life?",
    options: [
      "a)  It helps people ignore online information",
      "b)  It enables communication, access to services, and participation in the digital world",
      "c) It eliminates the need to use digital tools",
      "d)  It prevents people from connecting with others",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Which of the following is NOT a component of digital literacy?",
    options: [
      "a)Technical skills",
      "b)Digital safety",
      "c)  Information literacy",
      "d)  Ignoring online threats",
    ],
    answer: 3, // Correct answer index
  },
  {
    question: "Why is digital safety important?",
    options: [
      "a) To ignore phishing and hacking attempts",
      "b) To protect personal information and avoid online threats",
      "c) To share personal information publicly",
      "d)  To avoid updating privacy settings",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "How can you evaluate online information critically?",
    options: [
      "a) Share content without checking its credibility",
      "b)  Verify the source, check for evidence, and cross-check information",
      "c) Believe all content shared on social media",
      "d)   Avoid reading the full content before sharing",
    ],
    answer: 1, // Correct answer index
  },
];

const Digital_quiz = () => {
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

export default Digital_quiz;
