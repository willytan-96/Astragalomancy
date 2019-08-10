import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
