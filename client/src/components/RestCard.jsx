import React, { useState, useEffect } from "react";

export default function RestCard({ restaurant }) {
  const [display, setDisplay] = useState(false);


  return (
    <>
      <div id="restaurant-container" onClick={() => setDisplay(true)}>
        <div className="image">
          <img src="https://resizer.otstatic.com/v2/photos/wide-medium/1/25243676.jpg" />
        </div>

        <div className="info">
          <div className="name">{restaurant.name}</div>

          <div className="location">{restaurant.city}</div>

          <div className="type">{restaurant.type}</div>
        </div>
      </div>
      {display && (
        <>
          <div 
            className="main-overlay"
            onClick={() => setDisplay(false)}
            ></div>

          <div className="checkout">blahblahblah</div>
        </>
      )}
    </>
  );
}
