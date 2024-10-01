import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-slate-800 to-gray-900 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold tracking-wider">
            Expense Tracker
          </div>
          <div className="space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
