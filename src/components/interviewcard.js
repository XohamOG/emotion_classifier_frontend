import React from "react";

const InterviewCard = ({ title, score }) => {
  return (
    <div className="p-6 border border-orange-500 rounded-xl flex items-center bg-white shadow-md">
      {/* Avatar Placeholder */}
      <div className="w-20 h-20 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
        👤
      </div>
      {/* Job Title */}
      <div className="ml-6">
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      {/* Score */}
      <div className="ml-auto text-orange-500 text-4xl font-bold">{score}</div>
    </div>
  );
};

export default InterviewCard;
