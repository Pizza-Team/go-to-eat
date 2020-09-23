import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import List from './components/List';
import './App.css';
import Banner from './Images/Banner.jpeg';
import coupon from './Images/coupon.jpeg';
import iphone from './Images/iphone.png';
import food from './Images/food.jpg';
import USA from './Images/USA.png';
import JP from './Images/JP.png';
import storefront from './Images/storefront.jpeg';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import Logo from './Images/Logo.png';
import data from './data/data.json';
import { RestaurantContext } from './RestaurantContext';
import { Scrollbars } from 'react-custom-scrollbars';

export default function App() {
	const [restaurants, setRestaurants] = useState(data);
	const [lang, setLang] = useState('en');
	const { t, i18n } = useTranslation();
	const [howTo, setHowTo] = useState(false);
	const [about, setAbout] = useState(false);

	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [lang]);

	return (
		<div id="wrapper">
			<div id="main-overlay"></div>
			<nav className="nav">
				<div>
					<img src={Logo} alt="logo" className="logo" />
				</div>
				<div id="about" onClick={() => setAbout(true)}>
					{t('About')}
				</div>
				<div id="how-to" onClick={() => setHowTo(true)}>
					{t('How')}
				</div>

				{howTo && (
					<>
						<div className="main-overlay" onClick={() => setHowTo(false)}></div>
						<div className="howToContainer">
							<Scrollbars style={{ width: '100%', height: '100%' }}>
								<img className="howtoLogo" src={Logo} />
								<h1 className="howToTitle">1. Select your Restaurant</h1>
								<img className="howToBanner" src={Banner} />
								<h1 className="howToTitle">2. Purchase a Coupon</h1>
								<img className="howToBanner" src={iphone} />
								<h1 className="howToTitle">
									3. Show your Coupon at your Restaurant to Redeem
								</h1>
								<img className="howToBanner" src={coupon} />
								<h1 className="howToTitle">4. Enjoy!</h1>
								<img className="howToBanner" src={food} />
							</Scrollbars>
						</div>
						>
					</>
				)}
				<a>
					<img src={USA} className="language" onClick={() => setLang('en')} />
					EN
				</a>
				<a>
					<img src={JP} className="language" onClick={() => setLang('jp')} />
					JP
				</a>
			</nav>
			{about && (
				<>
					<div className="main-overlay" onClick={() => setAbout(false)}></div>
					<div className="howToContainer">
						<div>
							<h1>About EaTokyo</h1>
						</div>
						<div id="about-content">
							<img
								alt="storefront"
								className="howToBanner"
								src={storefront}
							></img>
							<br></br>
							<p>
								EATokyo is the product of our team's vision to support the
								Japanese Government's Go-to-Eat Campaign in the Tokyo area.
								Throughout the Go-to-Eat Campaign, the Japanese government will
								be offering customers 25% discounts to several local restaurants
								and reimbursing those restaurants the difference.
							</p>
							<br></br>
							<p>
								However, public information about this campaign has been vague
								and confusing. With an application like EATokyo, customers can
								find all the information they need to take advantage of these
								discounted prices, search for all participating restaurants, and
								order the discounted vouchers online.
							</p>
							<br></br>
							<p>
								いい東京! Stay safe, and keep supporting the small businesses in
								our communities!
							</p>
						</div>
					</div>
				</>
			)}

			{howTo && (
				<>
					<div className="main-overlay" onClick={() => setHowTo(false)}></div>
					<div className="howToContainer">
						<Scrollbars style={{ width: '100%', height: '100%' }}>
							<img className="howtoLogo" src={Logo} />
							<h1 className="howToTitle">1. Select your Restaurant</h1>
							<img className="howToBanner" src={Banner} />
							<h1 className="howToTitle">2. Purchase a Coupon</h1>
							<img className="howToBanner" src={iphone} />
							<h1 className="howToTitle">
								3. Show your Coupon at your Restaurant to Redeem
							</h1>
							<img className="howToBanner" src={coupon} />
							<h1 className="howToTitle">4. Enjoy!</h1>
							<img className="howToBanner" src={food} />
						</Scrollbars>
					</div>
				</>
			)}

			<RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
				<Input t={t} />
				<List restaurants={restaurants} t={t} />
			</RestaurantContext.Provider>
		</div>
	);
}
