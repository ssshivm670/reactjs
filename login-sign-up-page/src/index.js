import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="body">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
