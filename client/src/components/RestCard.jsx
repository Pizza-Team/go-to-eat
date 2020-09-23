import React, { useState, useEffect } from "react";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faMapMarkerAlt,
	faPhone,
	faUtensils,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { food } from '../Images/imageArray';



	export default function RestCard({ restaurant }) {
		// state displays popup modal window when true, does not display when state is false
		const [display, setDisplay] = useState(false);
		
		function imageMatch() {
			const num = Math.floor(Math.random() * 12);
			return (
				<img src={food[num]} object-fit="contain" height="200px" width="270px" />
			);
		}
	
  return (
    <>
      {/* when you click on a restaurant card, it will setDisplay to true so modal window shows */}
      

		{/* // if (
		// 	restaurant.categories.category_name_l[0] === 'Sushi / Seafood' &&
		// 	'Traditional Japanese' &&
		// 	'Yakitori (Grilled Meat and Vegetables Skewers) / Meat Dishes'
		// )
		// if (
		// 	restaurant.categories.category_name_l[0] ===
		// 		'Dining Bars / Bars / Beer Halls' ||
		// 	'Alcohol'
		// )
		// 	return <img src={Bar[num]} bject-fit="contain" height="200px" />;
		// if (
		// 	restaurant.categories.category_name_l[0] === 'Western / European' &&
		// 	'Italian / French'
		// )
		// 	return <img src={Western[num]} bject-fit="contain" height="200px" />; */}


			<div id="restaurant-container" onClick={() => setDisplay(true)}>
				<div className="image">{imageMatch()}</div>
				<div className="info">
					<div className="name">{restaurant.name.name}</div>

          <div className="type">{restaurant.categories.category_name_l[0]}</div>

          <div className="type">{"¥" + restaurant.budget}</div>
        </div>
      </div>

      {/* modal window for this restaurant displays when display is true (when it's clicked) */}
      {display && (
        <>
          {/* overlay grays out the rest of the body */}
          <div className="main-overlay" onClick={() => setDisplay(false)}></div>

          <div className="checkout">
            <h1 className="checkout-name">{restaurant.name.name}</h1>
            <div className="informational">
              <div className="checkout-image">
                <img
                  src={
                    "https://resizer.otstatic.com/v2/photos/wide-medium/1/25243676.jpg"
                  }
                />
              </div>
              <div className="checkout-info">
                {/* hours of operations */}
                <div className="info-line">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faClock}
                      size="lg"
                      color="darkslategrey"
                    />
                  </div>
                  <div className="info-content">{restaurant.business_hour}</div>
                </div>

                {/* address */}
                <div className="info-line">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="lg"
                      color="darkslategrey"
                    />
                  </div>
                  <div className="info-content">
                    {restaurant.contacts.address}
                  </div>
                </div>

                {/* phone number */}
                <div className="info-line">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="lg"
                      color="darkslategrey"
                    />
                  </div>
                  <div className="info-content">{restaurant.contacts.tel}</div>
                </div>

                {/* food category */}
                <div className="info-line">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faUtensils}
                      size="lg"
                      color="darkslategrey"
                    />
                  </div>
                  <div className="info-content">
                    {restaurant.categories.category_name_l[0]}
                  </div>
                </div>

                {/* website url */}
                <div className="info-line">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      size="lg"
                      color="darkslategrey"
                    />
                  </div>
                  <div className="info-content">
                    <a href={restaurant.url} target="_blank">
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <Order 
                restaurant={restaurant}/>
          </div>
        </>
      )}
    </>
  );
				}

