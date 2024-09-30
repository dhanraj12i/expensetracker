import React from "react";
import Nav from "./common/Nav";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Content area will stretch to fill the space */}
        <div className="container mx-auto p-4">
          {/* Empty content or placeholder */}
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          {/* Add more content here if needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
