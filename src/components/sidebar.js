import React from "react";
import { Home, User, Settings } from "lucide-react"; // Example icons

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col p-6 fixed">
      <h1 className="text-2xl font-bold mb-6">Emotion AI</h1>
      <nav className="flex flex-col space-y-4">
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
          <Home size={24} /> <span>Home</span>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
          <User size={24} /> <span>Profile</span>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
          <Settings size={24} /> <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
