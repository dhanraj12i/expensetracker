import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-slate-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Expense Tracker</div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Dashborad
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
