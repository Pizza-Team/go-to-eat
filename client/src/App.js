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

<<<<<<< HEAD
        <Route path="/success" component={Success} />
=======
      <Route exact path="/" component={Home} />

      {/* <Route path="/success" component={Success} /> */}


      <Route path="/success.html" />
        <Success />
      <Route />

>>>>>>> f65fe3398788640952cf84452c27d0912f987b6a
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
