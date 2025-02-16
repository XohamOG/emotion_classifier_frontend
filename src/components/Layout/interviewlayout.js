import React from "react";
import Sidebar from "../sidebar/sidebar"; // Import your existing Sidebar component
import SearchBar from "../searchbar"; // Modular Search Bar
import InterviewCard from "../interviewcard"; // Interview Details Card
import InterviewStats from "../interviewstats"; // Floating Stats Box

const InterviewPage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Sidebar (Using your existing component) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Hey, Sekhar</h1>
          <SearchBar />
        </div>

        {/* Interview List Section */}
        <div className="mt-6 space-y-4">
          <InterviewCard title="Flutter Development" score={234} />
          <InterviewCard title="React Development" score={289} />
          <InterviewCard title="Machine Learning" score={310} />
        </div>
      </div>

      {/* Floating Interview Stats Box */}
      <InterviewStats />
    </div>
  );
};

export default InterviewPage;
