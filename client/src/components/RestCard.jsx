import React, { useState, useEffect } from 'react';
import images from '../../src/';

export default function RestCard({ restaurant }) {
	const [display, setDisplay] = useState(false);
	const [images, setImages] = useState();

	function imageMatch() {
		restaurant.filter((food) => {
			return restaurant.type === 'Japanese';
		});
	}

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
					<div className="main-overlay" onClick={() => setDisplay(false)}></div>

					<div className="checkout">
						<h1 className="checkout-name">{restaurant.name}</h1>
						<div className="checkout-image">
							<img src="https://resizer.otstatic.com/v2/photos/wide-medium/1/25243676.jpg" />
						</div>
					</div>
				</>
			)}
		</>
	);
}
