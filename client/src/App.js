import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import List from './components/List';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import Logo from './logo.png';
import data from './data/data.json';
import { RestaurantContext } from './RestaurantContext';

export default function App() {
	const [restaurants, setRestaurants] = useState(data);
	const [lang, setLang] = useState('en');
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [lang]);

	return (
		<div>
			<div id="wrapper">
				<div id="main-overlay"></div>
				<nav className="nav">
					<div>
						<img src={Logo} alt="logo" className="logo" />
					</div>
					<div id="about">{t('About')}</div>
					<div id="how-to">{t('How')}</div>

					<button className="language" onClick={() => setLang('en')}>
						EN
					</button>
					<button onClick={() => setLang('jp')}>JP</button>
				</nav>
			</div>

			<RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
				<Input t={t} />

				<List restaurants={restaurants} t={t} />
			</RestaurantContext.Provider>
		</div>
	);
}
