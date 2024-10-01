import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { ExpenseProvider } from "./state/Expense";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/common/AboutUs";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <ExpenseProvider>
          <BrowserRouter>
            <Routes>
              {/* The Layout component will handle shared elements like Navbar and Footer */}
              <Route path="/" element={<Layout />}>
                {/* Dashboard route */}
                <Route index element={<Dashboard />} />

                {/* About Us route */}
                <Route path="/about" element={<AboutUs />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ExpenseProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
