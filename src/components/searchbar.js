import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Search any name, score"
        className="w-full h-10 px-4 border rounded-full border-gray-300 text-gray-600"
      />
      <span className="absolute right-4 top-2 text-orange-500">🔍</span>
    </div>
  );
};

export default SearchBar;
