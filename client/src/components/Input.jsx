import React, { useContext, useState, useEffect } from 'react';
import areas from '../data/area_m.json';
import areas_jp from '../data/area_m_ja.json';
import categories from '../data/category_l.json';
import categories_jp from '../data/category_l_ja.json';
import { RestaurantContext } from '../RestaurantContext';
import data from '../data/data.json';
import axios from 'axios';

export default function Input({ t, lang }) {
	// shared restaurant state with useContext

	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	// if dropdown menus have selection, it will update area, category, and budget states
	const [area, setArea] = useState('');
	const [category, setCategory] = useState('');
	const [budget, setBudget] = useState('');

	// when "let's eat" button is clicked, it will setRestaurants to filtered list
	// if category and budget states are selected, it will filter further
	function filterRestaurants() {
		console.log('area', area);
		console.log('category', category);
		console.log('budget', budget);
		console.log('lang', lang);

		//baseurl
		const baseUrl = 'api/restaurants';

		//入れるクエリの配列
		let queryArry = [];

		//areaのクエリを入れる
		if (area !== '') {
			queryArry.push(`areacode_m=${area}`);
		}

		//codeのクエリを入れる
		if (category !== '') {
			queryArry.push(`category_l=${category}`);
		}

		//budgetのクエリを入れる
		if (budget !== '') {
			queryArry.push(`budget=${budget}`);
		}

		//langのクエリを入れる
		if (lang === 'jp') {
			queryArry.push(`lang=ja`);
		} else {
			queryArry.push(`lang=en`);
		}

		console.log(queryArry);

		//配列をつなげて文字列にする
		let query = queryArry.join('&');

		//APIに投げるためのURL
		const urlForApi = baseUrl + '?' + query;

		console.log(urlForApi);

		axios.get(urlForApi).then((res) => {
			console.log(res.data);
			setRestaurants(res.data);
		});
	}

	// if "clear filter" button is clicked, it will reset dropdown menus to default
	// and will reset restaurants list
	function clear() {
		setArea('');
		setCategory('');
		setBudget('');
		setRestaurants(data);
	}

	function areaSwitch() {
		if (lang === 'jp') {
			return areas_jp.area_m
				.sort((a, b) => a.areaname_m.localeCompare(b.areaname_m))
				.map((area) => (
					<option value={area.areacode_m}>{area.areaname_m}</option>
				));
		} else
			return areas.area_m
				.sort((a, b) => a.areaname_m.localeCompare(b.areaname_m))
				.map((area) => (
					<option value={area.areacode_m}>{area.areaname_m}</option>
				));
	}

	function foodTypeSwitch() {
		if (lang === 'jp') {
			return categories_jp.category_l
				.sort((a, b) => a.category_l_name.localeCompare(b.category_l_name))
				.map((category) => (
					<option value={category.category_l_code}>
						{category.category_l_name}
					</option>
				));
		} else
			return categories.category_l
				.sort((a, b) => a.category_l_name.localeCompare(b.category_l_name))
				.map((category) => (
					<option value={category.category_l_code}>
						{category.category_l_name}
					</option>
				));
	}

	return (
		<div id="input-container">
			<div id="overlay"></div>
			<div id="find">{t('Find')}</div>
			<div id="filter-section">
				{/* dropdown menu for AREA */}
				<div className="select">
					<select
						value={area}
						onChange={(e) => {
							setArea(e.target.value);
						}}
					>
						<option>{t('Area')}</option>
						{areaSwitch()}
					</select>
					<p id="required">*{t('Required')}</p>
				</div>

				{/* dropdown menu for CATEGORY */}
				<div className="select">
					<select
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option>{t('Food Type')}</option>
						{foodTypeSwitch()}
					</select>
				</div>

				{/* dropdown menu for BUDGET */}
				<div className="select">
					<select
						value={budget}
						onChange={(e) => {
							setBudget(e.target.value);
						}}
					>
						<option>{t('Budget')}</option>
						<option value="1">{'< ¥1,000'}</option>
						<option value="2">{'¥1,000 - ¥3,000'}</option>
						<option value="3">{'¥3,000 - ¥5,000'}</option>
						<option value="4">{'¥5,000 - ¥10,000'}</option>
						<option value="5">{'> ¥10,000'}</option>
					</select>
				</div>
			</div>

			<div id="button-container">
				{/* button to filter restaurants */}
				<button id="filter-button" onClick={filterRestaurants}>
					Let's Eat!
				</button>
			</div>

			{/* button to clear filter */}
			<div id="clear" onClick={clear}>
				{t('Clear Filter')}
			</div>
		</div>
	);
}
