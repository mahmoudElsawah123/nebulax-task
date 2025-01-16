import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary-foreground">Logo</div>
        <div className="space-x-4">
          <button className="nav-button bg-transparent text-gray-600 hover:text-gray-900;">
            Login
          </button>
          <button className="nav-button bg-secondary text-white hover:bg-opacity-90">
            Get Started Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
