import React, { useState, useEffect } from "react";
import "./health_quiz.css";

// Quiz Data
const quizData = [
  {
    question: " What does wellness focus on?",
    options: [
      "a)  Avoiding physical activity",
      "b) Actively pursuing a balanced and fulfilling lifestyle",
      "c)  Ignoring mental health",
      "d) Treating illnesses only after they occur",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of the following is NOT a benefit of regular physical activity?",
    options: [
      "a)  Strengthening muscles",
      "b)  Improving cardiovascular health",
      "c) Increasing stress levels",
      "d) Boosting energy",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: "What is an example of good nutrition?",
    options: [
      "a)  Eating a balanced diet with fruits, vegetables, proteins, and whole grains",
      "b) Consuming mostly sugary drinks and processed foods",
      "c)  Skipping meals regularly",
      "d)  Avoiding hydration throughout the day",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "How does regular exercise benefit mental health?",
    options: [
      "a) By reducing stress and improving mood through endorphin release",
      "b) By increasing anxiety levels",
      "c) By having no effect on mental health",
      "d)  By making individuals avoid social interaction",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: " What is emotional wellness?",
    options: [
      "a)  Ignoring emotions and focusing only on physical health",
      "b) Understanding, expressing, and managing emotions effectively",
      "c) Reacting impulsively to all situations",
      "d)  Avoiding emotional support from others",
    ],
    answer: 1, // Correct answer index
  },
];

const Health_quiz = () => {
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

export default Health_quiz;
