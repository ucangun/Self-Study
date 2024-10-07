import React from "react";
import "./App.css";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
    </div>
  );
}

export default App;
