import React, { useState, useEffect } from "react";
import RestCard from "./RestCard";

export default function List({ restaurants }) {
  return (
    <>
      <div id="num-results">Displaying {restaurants.length} restaurants...</div>
      
      <div id="list-container">
        {restaurants.map((restaurant) => (
          <RestCard restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}
