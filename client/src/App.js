import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Success from "./components/Success";
import "./App.css";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />

        <Route path="/success" component={Success} />
      </div>
    </Router>
  );
}
