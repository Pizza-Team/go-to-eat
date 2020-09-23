import React, { useContext, useState, useEffect } from "react";
import RestCard from "./RestCard";
import { RestaurantContext } from "../RestaurantContext";

export default function List() {
  // shared restaurant state with useContext
  const {restaurants, setRestaurants} = useContext(RestaurantContext)
  
  return (
    <div id="gallery-container">
      <div id="num-results">Displaying {restaurants.length} restaurants...</div>

      <div id="list-container">
        {/* map over restaurants list to create each restaurant card */}
        {restaurants.map((restaurant) => (
          <RestCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
