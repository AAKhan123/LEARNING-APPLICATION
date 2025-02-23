import React, { useState, useEffect } from "react";
import "./media_quiz.css";

// Quiz Data
const quizData = [
  {
    question: " What is media?",
    options: [
      "a)  Tools like TV, websites, newspapers, and apps used to share information.",
      "b) Only newspapers and TV.",
      "c)  Only social media.",
      "d) A way to share private messages with friends.",
    ],
    answer: 0, // Correct answer index (1 is the correct option)
  },
  {
    question: "What are the three main purposes of media?",
    options: [
      "a)  To confuse, trick, and entertain.",
      "b)  To inform, entertain, and persuade.",
      "c) To only sell products.",
      "d) To scare people.",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Which of the following is an example of an advertisement?",
    options: [
      "a)  A math book.",
      "b)  A TV show.",
      "c)  A YouTube video promoting a new toy.",
      "d) A news article.",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: " What is the main goal of advertisements?",
    options: [
      "a) Believe it without checking.",
      "b)  Share it immediately.",
      "c)  Check the source, look for odd language, and verify with other trusted websites.",
      "d) Ignore it.",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: "Why do some ads use celebrities?",
    options: [
      "a)To show that the celebrity made the product.",
      "b) To make the product look boring.",
      "c) To attract attention and make people trust the product more.",
      "d)  To make the ad longer.",
    ],
    answer: 2, // Correct answer index
  },
];

const Media_quiz = () => {
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

export default Media_quiz;
