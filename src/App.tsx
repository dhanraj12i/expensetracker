import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { ExpenseProvider } from "./state/Expense";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <ExpenseProvider>
          <Layout />
        </ExpenseProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
