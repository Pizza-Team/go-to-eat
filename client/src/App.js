import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Success from "./components/Success";
import "./App.css";
import Home from "./components/Home";
// import Order from "./components/Order";

export default function App() {
  return (
    <BrowserRouter>
      <div>

      <Route exact path="/" component={Home} />

      {/* <Route path="/success" component={Success} /> */}


      <Route path="/success.html" />
        <Success />
      <Route />

      </div>
    </BrowserRouter>

    // <Router>
    //   <Route path="/" />
    //     <Home />
    //   <Route />
    //   <Switch>
    //     <Route path="/success.html">
    //       <Success />
    //     </Route>
    //     <Route path="/pay/create-session">
    //       <Order />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
