import React, { useContext, useState, useEffect } from 'react';
import areas from '../data/area_m.json';
import categories from '../data/category_l.json';
import { RestaurantContext } from '../RestaurantContext';
import data from '../data/data.json';

export default function Input({ t }) {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	const [area, setArea] = useState('');

	const [category, setCategory] = useState('');

	function filterRestaurants() {
		if (area.length) {
			let filtered = data.filter(
				(restaurant) => restaurant.location.area.areaname_m === area
			);
			if (category.length) {
				filtered = filtered.filter(
					(restaurant) => restaurant.categories.category_name_l[0] === category
				);
			}
			setRestaurants(filtered);
		}
	}

	function clear() {
		setArea('');
		setCategory('');
		setRestaurants(data);
	}

	return (
		<div id="input-container">
			<div id="overlay"></div>

			<div id="find">{t('Find')}</div>

			<div id="filter-section">
				<select value={area} onChange={(e) => setArea(e.target.value)}>
					<option>{t('Area')}</option>
					{areas.area_m
						.sort((a, b) => a.areaname_m.localeCompare(b.areaname_m))
						.map((area) => (
							<option value={area.areaname_m}>{area.areaname_m}</option>
						))}
				</select>

				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					<option>{t('Food Type')}</option>
					{categories.category_l
						.sort((a, b) => a.category_l_name.localeCompare(b.category_l_name))
						.map((category) => (
							<option value={category.category_l_name}>
								{category.category_l_name}
							</option>
						))}
				</select>

				<select>
					<option>{t('Budget')}</option>
				</select>
			</div>

			<div id="button-container">
				<button id="filter-button" onClick={filterRestaurants}>
					Let's Eat!
				</button>
			</div>
			<div id="clear" onClick={clear}>
				Clear Filter
			</div>
		</div>
	);
}
