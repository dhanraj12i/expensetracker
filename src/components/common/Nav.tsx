import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="bg-slate-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">Expense Tracker</div>

          {/* Menu Items */}
          <div className="space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">
              Dashborad
            </a>
            <a href="/expenses" className="text-gray-300 hover:text-white">
              Report
            </a>
            <a href="/about" className="text-gray-300 hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
