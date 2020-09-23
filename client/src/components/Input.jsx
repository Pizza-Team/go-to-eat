import React, { useContext, useState, useEffect } from 'react';
import areas from '../data/area_m.json';
import categories from '../data/category_l.json';
import { RestaurantContext } from '../RestaurantContext';
import data from '../data/data.json';

export default function Input({ t }) {
	// shared restaurant state with useContext
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	const [area, setArea] = useState('');
	// if dropdown menus have selection, it will update area, category, and budget states

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

	export default function Input() {
		// shared restaurant state with useContext
		const { restaurants, setRestaurants } = useContext(RestaurantContext);

		// if dropdown menus have selection, it will update area, category, and budget states
		const [area, setArea] = useState('');
		const [category, setCategory] = useState('');
		const [budget, setBudget] = useState('');

		// when "let's eat" button is clicked, it will setRestaurants to filtered list
		// if category and budget states are selected, it will filter further
		function filterRestaurants() {
			if (area.length) {
				// fetch restaurants by location
				let filtered = data.filter(
					(restaurant) => restaurant.location.area.areaname_m === area
				);
				if (category.length) {
					filtered = filtered.filter(
						(restaurant) =>
							restaurant.categories.category_name_l[0] === category
					);
				}
				if (budget.length > 0) {
					// take budget (str) and split by comma and turn each element to number
					const range = budget.split(',').map((num) => Number(num));
					// filter restaurants for those within budget ranges
					filtered = filtered.filter(
						(restaurant) =>
							restaurant.budget >= range[0] && restaurant.budget <= range[1]
					);
				}
				setRestaurants(filtered);
			}
		}

		// if "clear filter" button is clicked, it will reset dropdown menus to default
		// and will reset restaurants list
		function clear() {
			setArea('');
			setCategory('');
			setBudget('');
			setRestaurants(data);
		}

		return (
			<div id="input-container">
				<div id="find">{t('Find')}</div>
				<div id="filter-section">
					{/* dropdown menu for AREA */}
					<select value={area} onChange={(e) => setArea(e.target.value)}>
						<option>{t('Area')}</option>
						{areas.area_m
							.sort((a, b) => a.areaname_m.localeCompare(b.areaname_m))
							.map((area) => (
								<option value={area.areaname_m}>{area.areaname_m}</option>
							))}
					</select>

					{/* dropdown menu for CATEGORY */}
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option>Food Type</option>
						{categories.category_l
							.sort((a, b) =>
								a.category_l_name.localeCompare(b.category_l_name)
							)
							.map((category) => (
								<option value={category.category_l_name}>
									{category.category_l_name}
								</option>
							))}
					</select>

					{/* dropdown menu for BUDGET */}
					<select value={budget} onChange={(e) => setBudget(e.target.value)}>
						<option>Budget</option>
						<option value={[0, 1000]}>{'< ¥1,000'}</option>
						<option value={[1000, 3000]}>{'¥1,000 - ¥3,000'}</option>
						<option value={[3000, 5000]}>{'¥3,000 - ¥5,000'}</option>
						<option value={[5000, 10000]}>{'¥5,000 - ¥10,000'}</option>
						<option value={[10000, 1000000000]}>{'> ¥10,000'}</option>
					</select>
				</div>

				<div id="button-container">
					{/* button to filter restaurants */}
					<button id="filter-button" onClick={filterRestaurants}>
						Let's Eat!
					</button>
				</div>

				{/* button to clear filter */}
				<div id="clear" onClick={clear}>
					Clear Filter
				</div>
			</div>
		);
	}
}
