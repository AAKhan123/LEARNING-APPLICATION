import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./chatt.css";
import Loading from "./Loading";
import ChatHistory from "./ChatHistory";
import { Link } from "react-router-dom";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Quick questions
  const quickQuestions = [
    "What is your name?",
    "Who created you?",
    "How are you?",
    "Tell me a joke",
    "I want to develop my skill?",
  ];

  // Local knowledge base (custom questions and answers)
  const customQnA = {
    "what is your name?": "I am your AI chatbot assistant.",
    "who created you?": "I was created by Aamir khan",
    "how are you?": "I'm just a program, but thanks for asking! How can I help you?",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "i want to develop my skill?": "Sure! Here are some courses like Personal Finance and Problem Solving. What would you like to choose?" ,
    "personal finance": "Personal finance refers to how you manage your money, including earning, saving, spending, and investing. It’s an essential life skill that helps you make informed decisions about your financial future.",
  };

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI("AIzaSyDVKRS1rnfEazxDeEN5mQGnijAtLLrin6g");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Function to handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle quick question click
  const handleQuickQuestionClick = (question) => {
    setUserInput(question);
    sendMessage(question);
  };

  // Function to detect date-related queries
  const isDateQuery = (input) => {
    const dateKeywords = ["date", "day", "today", "current date"];
    return dateKeywords.some((keyword) => input.toLowerCase().includes(keyword));
  };

  // Function to check for custom questions
  const getCustomAnswer = (input) => {
    return customQnA[input.toLowerCase()];
  };

  // Function to send user message to Gemini or local QnA
  const sendMessage = async (input = userInput) => {
    if (input.trim() === "") return;

    setIsLoading(true);
    try {
      const lowerCaseInput = input.toLowerCase();

      // Check for date queries
      if (isDateQuery(input)) {
        const currentDate = new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { type: "user", message: input },
          { type: "bot", message: `Today's date is ${currentDate}.` },
        ]);
      }
      // Check for custom questions
      else if (getCustomAnswer(lowerCaseInput)) {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { type: "user", message: input },
          { type: "bot", message: getCustomAnswer(lowerCaseInput) },
        ]);
      }
      // Call Gemini API if no local match
      else {
        const result = await model.generateContent(input);
        const response = await result.response;

        setChatHistory((prevHistory) => [
          ...prevHistory,
          { type: "user", message: input },
          { type: "bot", message: response.text() },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "bot", message: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Function to clear the chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="container mx-auto px-3 py-3">
      <img src="/images/chat1.jpg" className="botimg" alt="Bot" />
      <h1 className="apple">AI-CHATBOT</h1>

      <div className="chat-container rounded-lg shadow-md p-4">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="quick-questions mt-3">
        <p> Quick Questions :</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg bg-200 hover:bg-gray-300 focus:outline-none"
              onClick={() => handleQuickQuestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="flex mt-2">
      <input
  type="text"
  className="flex-grow px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Type your Question..."
  value={userInput}
  onChange={handleUserInput}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !isLoading) {
      sendMessage(); // Trigger sendMessage when Enter is pressed
    }
  }}
/>

<button
  className="px-6 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
  onClick={() => sendMessage()} // Trigger sendMessage on click
  disabled={isLoading}
>
  <i className="fa-solid fa-arrow-right"></i>
</button>
      </div>
      <button
        className="mt-2 block px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-500 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default Chat;
