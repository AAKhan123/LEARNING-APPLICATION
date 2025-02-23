import React, { useState, useEffect } from "react";
import "./time_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What is the first step in managing your time effectively?",
    options: [
      "a) Start with the easiest task.",
      "b) Write down all the tasks you need to complete.",
      "c) Take a break before starting.",
      "d) Finish all your tasks at once.",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "How can you prioritize tasks effectively?",
    options: [
      "a)  Do everything randomly.",
      "b) Use the ABC method: A for important, B for medium, C for low priority.",
      "c) Skip the hard tasks.",
      "d) Ask someone else to do it for you.",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "How can you track your deadlines and tasks?",
    options: [
      "a) Write them down in a calendar or planner.",
      "b)  Memorize everything in your head.",
      "c) Ignore deadlines and just do your best",
      "d) Ask a friend to remind you.",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " Which of the following is a good goal-setting method?",
    options: [
      "a) Guess what you should do next.",
      "b) Use SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.",
      "c) Set unrealistic goals to challenge yourself.",
      "d)Just keep everything in your head.",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "What is the best way to plan your daily schedule?",
    options: [
      "a)  Do things as they come to your mind.",
      "b)  Divide your day into blocks like morning, afternoon, and evening. ",
      "c) Skip planning and focus on doing.",
      "d) Only work on weekends.",
    ],
    answer: 1, // Correct answer index
  },
];

const Time_quiz = () => {
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

export default Time_quiz;
