import React from "react";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          {/* <h1 className="text-2xl font-bold">Expense Tracker</h1> */}
        </div>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
