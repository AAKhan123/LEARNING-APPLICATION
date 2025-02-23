import React, { useState, useEffect } from "react";
import "./social_quize.css";

// Quiz Data
const quizData = [
  {
    question: "What does social responsibility mean?",
    options: [
      "a)  Helping others and contributing positively to society",
      "b) Taking care of your own needs only",
      "c) Ignoring issues that don’t affect you",
      "d) Focusing only on financial goals",
    ],
    answer: 0, // Correct answer index (1 is the correct option)
  },
  {
    question: " Which of the following is an example of environmental responsibility?",
    options: [
      "a) Planting trees to reduce carbon dioxide",
      "b) Throwing trash on the ground",
      "c) Wasting water while brushing your teeth",
      "d)  Leaving lights on when not in use",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " Why is it important to practice social responsibility?",
    options: [
      "a) To improve the world and help others",
      "b) To gain fame and popularity",
      "c) To avoid doing chores",
      "d) To compete with others",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "Which of the following is an act of kindness?",
    options: [
      "a) Donating clothes to a shelter",
      "b) Ignoring someone in need",
      "c) Taking all the credit for group work",
      "d) Throwing away reusable items",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " What is a simple way to reduce waste??",
    options: [
      "a) Use single-use plastics regularly",
      "b) Recycle and reuse items whenever possible",
      "c) Throw trash in rivers and streams",
      "d)  Leave food scraps everywhere",
    ],
    answer: 1, // Correct answer index
  },
];

const So_quiz = () => {
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

export default So_quiz;
