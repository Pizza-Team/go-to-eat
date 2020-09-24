import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Success from "./components/Success";
import "./App.css";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div>

      <Route exact path="/" component={Home} />

      {/* <Route path="/success" component={Success} /> */}


      <Route path="/success" />
        <Success />
      <Route />

      </div>
    </BrowserRouter>
  );
}
