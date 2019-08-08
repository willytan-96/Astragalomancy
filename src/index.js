import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
