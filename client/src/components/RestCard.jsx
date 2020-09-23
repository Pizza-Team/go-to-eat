import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faMapMarkerAlt,
	faPhone,
	faUtensils,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { food } from '../Images/imageArray';

export default function RestCard({ restaurant, t }) {
	const [display, setDisplay] = useState(false);

	//last num of latitude(0~9)
	const lastNumOfLatitude = Number(restaurant.location.latitude.slice(-1));

	function imageMatch() {
		//0<=(lastNumOfLatitude/9)<=1
		const num = Math.floor((lastNumOfLatitude / 9) * 12);

		// if (
		// 	restaurant.categories.category_name_l[0] === 'Sushi / Seafood' &&
		// 	'Traditional Japanese' &&
		// 	'Yakitori (Grilled Meat and Vegetables Skewers) / Meat Dishes'
		// )
		return (
			<img src={food[num]} object-fit="contain" height="200px" width="270px" />
		);
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
		// 	return <img src={Western[num]} bject-fit="contain" height="200px" />;
	}

	return (
		<>
			<div id="restaurant-container" onClick={() => setDisplay(true)}>
				<div className="image">{imageMatch()}</div>
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
						<div className="informational">
							<div className="checkout-image">
								<img
									src={
										'https://resizer.otstatic.com/v2/photos/wide-medium/1/25243676.jpg'
									}
								/>
							</div>
							<div className="checkout-info">
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
					</div>
				</>
			)}
		</>
	);
}
