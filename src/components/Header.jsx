import React from "react";

const Header = ({ search, handleSearch }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          📸 Photo Gallery
        </h1>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by author..."
            className="w-full md:w-72 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
