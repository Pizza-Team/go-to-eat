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
          <div className="name">{restaurant.name.name}</div>

          <div className="location">{restaurant.location.area.areaname_m}</div>

          <div className="type">{restaurant.categories.category_name_l[0]}</div>
        </div>
      </div>
      {display && (
        <>
          <div className="main-overlay" onClick={() => setDisplay(false)}></div>

          <div className="checkout">
            <h1 className="checkout-name">{restaurant.name.name}</h1>
            <div className="checkout-image">
                <img src="https://resizer.otstatic.com/v2/photos/wide-medium/1/25243676.jpg" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
