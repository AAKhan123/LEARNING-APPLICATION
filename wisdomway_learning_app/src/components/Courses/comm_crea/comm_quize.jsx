import React, { useState, useEffect } from "react";
import "./comm_quize.css";

// Quiz Data
const quizData = [
  {
    question: "What is verbal communication?",
    options: [
      "a) Communicating through gestures and expressions",
      "b)  Expressing ideas through spoken words",
      "c) Writing down your thoughts",
      "d) Using signs to convey a message",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is an example of non-verbal communication?",
    options: [
      "a) Writing a letter",
      "b) Nodding your head to say yes",
      "c) Speaking on the phone",
      "d) Typing an email",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Why is active listening important?",
    options: [
      "a) To quickly reply without thinking",
      "b) To focus only on your own ideas",
      "c) To understand others and respond thoughtfully",
      "d) To avoid asking questions",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: "What is creativity?",
    options: [
      "a) Doing the same thing as everyone else",
      "b) Thinking of new and unique ideas",
      "c) Copying ideas from others",
      "d) Solving problems without thinking",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is a good way to practice public speaking?",
    options: [
      "a) Avoid speaking in front of others",
      "b) Practice alone in front of a mirror",
      "c) Write your speech but never say it aloud",
      "d) Wait until the last minute to prepare",
    ],
    answer: 1, // Correct answer index
  },
];

const Comz = () => {
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

export default Comz;
