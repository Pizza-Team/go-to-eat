import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";
import data from "./data/data.json";
import { RestaurantContext } from "./RestaurantContext";

export default function App() {
  const [restaurants, setRestaurants] = useState(data);

  return (
    <div id="wrapper">
      {/* navigation bar */}
      <nav>
        <div>
          <h1>Go-to-Eat Logo</h1>
        </div>

        <div id="about">About</div>

        <div id="how-to">How to Use</div>
      </nav>

      {/* sharing restaurants state and setState with Input & List components using UseContext */}
      <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
        <Input />

        <List />
      </RestaurantContext.Provider>
    </div>
  );
}
