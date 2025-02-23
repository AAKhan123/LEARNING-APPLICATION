import React, { useState, useEffect } from "react";
import "./cric_quiz.css";

// Quiz Data
const quizData = [
  {
    question: "What is critical thinking?",
    options: [
      "a) Accepting all information as true without questioning",
      "b) The ability to think clearly and logically to solve problems",
      "c)  Avoiding new ideas or different perspectives",
      "d) Making decisions based on guesses",
    ],
    answer: 1, // Correct answer index (1 is the correct option)
  },
  {
    question: "Which of these is NOT a characteristic of a critical thinker?",
    options: [
      "a)  Curiosity",
      "b)  Open-mindedness",
      "c) Ignoring evidence",
      "d) Self-awareness",
    ],
    answer: 2, // Correct answer index
  },
  {
    question: "What is the purpose of asking questions in critical thinking?",
    options: [
      "a)  To confuse others",
      "b) To explore ideas and understand information deeply",
      "c)  To avoid making decisions",
      "d)  To argue without evidence",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: "Which of the following is an example of a bias?",
    options: [
      "a)Evaluating all options equally",
      "b) Relying only on information that confirms your beliefs",
      "c) Seeking diverse perspectives",
      "d)  Questioning the reliability of a source",
    ],
    answer: 1, // Correct answer index
  },
  {
    question: " How does critical thinking help with problem-solving?",
    options: [
      "a)  It provides a structured approach to analyze problems and develop solutions",
      "b)  It avoids dealing with complex challenges",
      "c) It relies on trial and error without evidence",
      "d)  It limits creativity in addressing issues",
    ],
    answer: 0, // Correct answer index
  },
];

const Cric_quiz = () => {
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

export default Cric_quiz;
