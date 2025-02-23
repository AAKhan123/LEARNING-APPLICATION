import React, { useState, useEffect } from "react";
import "./cult_quiz.css";

// Quiz Data
const quizData = [
  {
    question: " What does cultural awareness mean?",
    options: [
      "a) Recognizing and respecting differences and similarities between cultures",
      "b)   Ignoring cultural differences and focusing on your own traditions",
      "c)   Assuming all cultures are the same",
      "d)  Avoiding interactions with people from other cultures",
    ],
    answer: 0, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is an element of culture?",
    options: [
      "a)  Language and traditions",
      "b) Technology only",
      "c) Scientific theorie",
      "d) Personal preferences only",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "How can stereotypes harm cultural awareness?",
    options: [
      "a)  By fostering empathy and understanding",
      "b) By creating unfair generalizations about a group",
      "c) By improving relationships across cultures",
      "d)  By encouraging exploration of diversity",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Why is understanding history important for cultural awareness?",
    options: [
      "a) It helps explain why certain cultural practices exist today",
      "b)  It has no connection to cultural practices",
      "c)  It discourages people from learning about other cultures",
      "d) It only focuses on wars and conflicts",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "What is the primary purpose of cultural awareness?",
    options: [
      "a) To create divisions between people",
      "b)  To foster understanding, empathy, and respect for diversity",
      "c) To promote a single culture globally",
      "d)  To avoid interacting with people from other backgrounds",
    ],
    answer: 1, // Correct answer index
  },
];

const Cult_quiz = () => {
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

export default Cult_quiz;
