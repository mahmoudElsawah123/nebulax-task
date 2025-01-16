import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Tell us what you need to build..."
        className="w-full px-6 py-3 text-lg rounded-full border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all duration-300 pr-12"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary text-white">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
