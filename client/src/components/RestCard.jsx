import React, { useState, useEffect } from 'react';
import Order from './Order';
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

	const lastNumOfLatitude = Number(restaurant.location.latitude.slice(-1));
	function imageMatch() {
		//0<=(lastNumOfLatitude/9)<=1
		const num = Math.floor((lastNumOfLatitude / 9) * 12);
		//last num of latitude(0~9)
		return (
			<img src={food[num]} object-fit="contain" height="200px" width="270px" />
		);
	}

	return (
		<>
			<div id="restaurant-container" onClick={() => setDisplay(true)}>
				<div className="image">{imageMatch()}</div>
				<div className="info">
					<div className="name">{restaurant.name.name}</div>

					<div className="type">{restaurant.categories.category_name_l[0]}</div>

					<div className="type">{'¥' + restaurant.budget}</div>
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
							<div className="checkout-image">{imageMatch()}</div>
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

						<Order restaurant={restaurant} t={t} />
					</div>
				</>
			)}
		</>
	);
}
