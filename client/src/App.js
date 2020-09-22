import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

export default function App() {
  const test = [
    { name: "maku", type: "burgers", city: "Roppongi" },
    { name: "waku", type: "pizza", city: "Roppongi" },
    { name: "baku", type: "sushi", city: "Roppongi" },
    { name: "booku", type: "cheese", city: "Roppongi" },
    { name: "maku", type: "burgers", city: "Roppongi" },
    { name: "waku", type: "pizza", city: "Roppongi" },
    { name: "baku", type: "sushi", city: "Roppongi" },
    { name: "booku", type: "cheese", city: "Roppongi" },
    { name: "maku", type: "burgers", city: "Roppongi" },
    { name: "waku", type: "pizza", city: "Roppongi" },
    { name: "baku", type: "sushi", city: "Roppongi" },
    { name: "booku", type: "cheese", city: "Roppongi" },
    { name: "maku", type: "burgers", city: "Roppongi" },
    { name: "waku", type: "pizza", city: "Roppongi" },
  ];
  const [restaurants, setRestaurants] = useState(test);

  return (
    <div id="wrapper">
      <nav>
        <div>
          <h1>Go-to-Eat Logo</h1>
        </div>
        <div id="about">About</div>
        <div id="how-to">How to Use</div>
      </nav>

      <Input />

      <List restaurants={restaurants} />
    </div>
  );
}
