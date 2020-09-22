import React, { useState, useEffect } from 'react';

export default function Input({ t }) {
	return (
		<div id="input-container">
			<div id="overlay"></div>
			<div id="find">{t('Find')}</div>
			<div id="filter-section">
				<select>
					<option>{t('Area')}</option>
				</select>

				<select>
					<option>{t('Station')}</option>
				</select>

				<select>
					<option>{t('Food Type')}</option>
				</select>

				<select>
					<option>{t('Budget')}</option>
				</select>
			</div>
			<div id="button-container">
				<button id="filter-button">Let's Eat!</button>
			</div>
		</div>
	);
}
