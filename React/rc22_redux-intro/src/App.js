import React from "react";
import Counter from "./components/counter/Counter";
import "./App.css";
import Provider from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
