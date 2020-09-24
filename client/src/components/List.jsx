import React, { useContext } from "react";
import RestCard from "./RestCard";
import { RestaurantContext } from "../RestaurantContext";

export default function List({ t, lang }) {
  // shared restaurant state with useContext
  const { restaurants, setRestaurants } = useContext(RestaurantContext);


  return (
    <div id="gallery-container">
      <div id="num-results">
        {t("Displaying")} {restaurants.length} {t("Restaurants")}
      </div>

      <div id="list-container">
        {/* map over restaurants list to create each restaurant card */}
        {Array.isArray(restaurants) &&
          restaurants.map((restaurant) => (
            <RestCard
              key={restaurant.id}
              restaurant={restaurant}
              t={t}
              lang={lang}
            />
          ))}
      </div>
    </div>
  );
}
