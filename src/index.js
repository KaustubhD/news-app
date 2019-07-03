import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";
import Source from "./components/source";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Source} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
