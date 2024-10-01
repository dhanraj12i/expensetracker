import React from "react";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <div className="container mx-auto p-4"></div>

        {/* This will render the child routes (Dashboard, AboutUs, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
