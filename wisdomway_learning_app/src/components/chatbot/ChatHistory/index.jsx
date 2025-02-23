import React from "react";
import ReactMarkdown from "react-markdown";
const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${
            message.type === "user"
              ? "bg-black-100 text-green-200  "
              : "bg-black-100 text-white-800"
          }`}
        >
          {message.type === "user" && (
            <span className="mr-2 font-bold text-orange-600">You:</span>
          )}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;