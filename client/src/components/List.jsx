import React, { useState, useEffect } from 'react';
import RestCard from './RestCard';
import { useTranslation } from 'react-i18next';
import i18n from '../i18next';

export default function List({ restaurants, t }) {
	return (
		<>
			<div id="num-results">
				{t('Displaying')} {restaurants.length} {t('Restaurants')}
			</div>
			<div id="list-container">
				{restaurants.map((restaurant) => (
					<RestCard restaurant={restaurant} />
				))}
			</div>
		</>
	);
}
