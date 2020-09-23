import React, { useContext, useState, useEffect } from 'react';
import RestCard from './RestCard';
import { RestaurantContext } from '../RestaurantContext';

export default function List() {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);

	return (
		<div id="gallery-container">
			<div id="num-results">Displaying {restaurants.length} restaurants...</div>

			<div id="list-container">
				{restaurants.map((restaurant) => (
					<RestCard restaurant={restaurant} />
				))}
			</div>
		</div>
	);
}
