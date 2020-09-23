import React, { useContext, useState, useEffect } from 'react';
import RestCard from './RestCard';
import { RestaurantContext } from '../RestaurantContext';

export default function List({ t }) {
	const options = ['Japanese1', 'Japanese2'];

	const { restaurants, setRestaurants } = useContext(RestaurantContext);

	return (
		<div id="gallery-container">
			<div id="num-results">
				{t('Displaying')} {restaurants.length} {t('Restaurants')}
			</div>

			<div id="list-container">
				{restaurants.map((restaurant) => (
					<RestCard restaurant={restaurant} />
				))}
			</div>
		</div>
	);
}
