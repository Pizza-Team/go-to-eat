import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Banner from '../Images/Banner.jpeg';
import USA from '../Images/USA.png';
import JP from '../Images/JP.png';
import storefront from '../Images/storefront.jpeg';
import howdiagram from '../Images/how.png';
import covidDiagram from '../Images/covidmeasures.png';
import { useTranslation } from 'react-i18next';
import Logo from '../Images/Logo.png';
import data from '../data/data.json';
import { RestaurantContext } from '../RestaurantContext';

export default function App() {
<<<<<<< HEAD
  const [restaurants, setRestaurants] = useState(data);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [howTo, setHowTo] = useState(false);
  const [about, setAbout] = useState(false);
  const [covidInfo, setCovidInfo] = useState(false);
=======
	const [restaurants, setRestaurants] = useState(data);
	const [lang, setLang] = useState('en');
	const { t, i18n } = useTranslation();
	const [howTo, setHowTo] = useState(false);
	const [about, setAbout] = useState(false);
	const [covidInfo, setCovidInfo] = useState(false);
>>>>>>> f65fe3398788640952cf84452c27d0912f987b6a

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div id="wrapper">
      <div id="main-overlay"></div>
      <nav className="nav">
        <div id="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div id="nav-main">
          <div id="info-container">
            <div id="about" onClick={() => setAbout(true)}>
              {t("About")}
            </div>
            <div id="how-to" onClick={() => setHowTo(true)}>
              {t("How")}
            </div>
            <div id="covid-header" onClick={() => setCovidInfo(true)}>
              {t("COVID Measures")}
            </div>
          </div>

<<<<<<< HEAD
          <div id="lang-container">
            <a className="lang-icons">
              <img
                src={USA}
                className="language"
                onClick={() => setLang("en")}
              />
              EN
            </a>
            <a className="lang-icons">
              <img
                src={JP}
                className="language"
                onClick={() => setLang("jp")}
              />
              JP
            </a>
          </div>
        </div>
      </nav>
      {about && (
        <>
          <div className="main-overlay" onClick={() => setAbout(false)}></div>
          <div className="howToContainer">
            <div id="about-title">
              <h1>About EATokyo</h1>
            </div>
            <div id="about-content">
              <img alt="storefront" id="about-banner" src={storefront}></img>
              <br></br>
              <div className="copy">
                <p>
                  EATokyo is the product of our team's vision to support the
                  Japanese government's Go-to-Eat Campaign in the Tokyo area -
                  an incentive program to revitalize the local economy, as we
                  continue to recover from the pandemic. Throughout the
                  Go-to-Eat Campaign, the Japanese government will be offering
                  customers 25% discounts to several local restaurants and
                  reimbursing those restaurants the difference.
                </p>
                <br></br>
                <p>
                  However, public information about this campaign has been vague
                  and confusing. With an application like EATokyo, customers can
                  find all the information they need to take advantage of these
                  discounted prices, search for all participating restaurants,
                  and order the discounted vouchers online.
                </p>
                <br></br>
                <p>
                  いい東京! Stay safe, and keep supporting the small businesses
                  in our communities!
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {about && (
        <>
          <div className="main-overlay" onClick={() => setAbout(false)}></div>
          <div className="howToContainer">
            <div id="about-title">
              <h1>About EATokyo</h1>
            </div>
            <div id="about-content">
              <img alt="storefront" id="about-banner" src={storefront}></img>
              <br></br>
              <div className="copy">
                <p>
                  EATokyo is the product of our team's vision to support the
                  Japanese government's Go-to-Eat Campaign in the Tokyo area -
                  an incentive program to revitalize the local economy, as we
                  continue to recover from the pandemic. Throughout the
                  Go-to-Eat Campaign, the Japanese government will be offering
                  customers 25% discounts to several local restaurants and
                  reimbursing those restaurants the difference.
                </p>
                <br></br>
                <p>
                  However, public information about this campaign has been vague
                  and confusing. With an application like EATokyo, customers can
                  find all the information they need to take advantage of these
                  discounted prices, search for all participating restaurants,
                  and order the discounted vouchers online.
                </p>
                <br></br>
                <p>
                  いい東京! Stay safe, and keep supporting the small businesses
                  in our communities!
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {howTo && (
        <>
          <div className="main-overlay" onClick={() => setHowTo(false)}></div>
          <div className="howToContainer">
            <div id="about-title">
              <h1>How to Use</h1>
            </div>
            <div id="about-content">
              <img className="howToBanner" src={Banner} />
              {/* <Scrollbars style={{ width: "100%", height: "100%" }}> */}
              {/* <img className="howtoLogo" src={Logo} /> */}
              {/* <h1 className="howToTitle">1. Select your Restaurant</h1>
=======
					<div id="lang-container">
						<a className="lang-icons">
							<img
								src={USA}
								className="language"
								onClick={() => setLang('en')}
							/>
							EN
						</a>
						<a className="lang-icons">
							<img
								src={JP}
								className="language"
								onClick={() => setLang('jp')}
							/>
							JP
						</a>
					</div>
				</div>
			</nav>
			{about && (
				<>
					<div className="main-overlay" onClick={() => setAbout(false)}></div>
					<div className="howToContainer">
						<div id="about-title">
							<h1>{t('About EATokyo')}</h1>
						</div>
						<div id="about-content">
							<img alt="storefront" id="about-banner" src={storefront}></img>
							<br></br>
							<div className="copy">
								<p>{t('About Text')}</p>
								<br></br>
								<p>{t('About Text2')}</p>
								<br></br>
								<p>{t('About Text3')}</p>
							</div>
						</div>
					</div>
				</>
			)}

			{about && (
				<>
					<div className="main-overlay" onClick={() => setAbout(false)}></div>
					<div className="howToContainer">
						<div id="about-title">
							<h1>{t('About EATokyo')}</h1>
						</div>
						<div id="about-content">
							<img alt="storefront" id="about-banner" src={storefront}></img>
							<br></br>
							<div className="copy">
								<p>{t('About Text')}</p>
								<br></br>
								<p>
									<p>{t('About Text2')}</p>
								</p>
								<br></br>
								<p>
									<p>{t('About Text3')}</p>
								</p>
							</div>
						</div>
					</div>
				</>
			)}

			{howTo && (
				<>
					<div className="main-overlay" onClick={() => setHowTo(false)}></div>
					<div className="howToContainer">
						<div id="about-title">
							<h1>{t('How')}</h1>
						</div>
						<div id="about-content">
							<img className="howToBanner" src={Banner} />
							{/* <Scrollbars style={{ width: "100%", height: "100%" }}> */}
							{/* <img className="howtoLogo" src={Logo} /> */}
							{/* <h1 className="howToTitle">1. Select your Restaurant</h1>
>>>>>>> f65fe3398788640952cf84452c27d0912f987b6a
              <h1 className="howToTitle">2. Purchase a Coupon</h1>
              <img className="howToBanner" src={iphone} />
              <h1 className="howToTitle">
			  3. Show your Coupon at your Restaurant to Redeem
              </h1>
              <img className="howToBanner" src={coupon} />
			<h1 className="howToTitle">4. Enjoy!</h1> */}
              <img className="howToBanner" id="diagram" src={howdiagram} />
              {/* </Scrollbars> */}
            </div>
          </div>
        </>
      )}

<<<<<<< HEAD
      {covidInfo && (
        <>
          <div
            className="main-overlay"
            onClick={() => setCovidInfo(false)}
          ></div>
          <div className="howToContainer">
            <div id="about-title">
              <h1>COVID Measures</h1>
            </div>
            <div id="covid-content">
              <div className="copy">
                <p>
                  All participating restaurants are required to implement the
                  following measures to mitigate the spead of COVID-19:
                </p>
              </div>
=======
			{covidInfo && (
				<>
					<div
						className="main-overlay"
						onClick={() => setCovidInfo(false)}
					></div>
					<div className="howToContainer">
						<div id="about-title">
							<h1>{t('COVID Measures')}</h1>
						</div>
						<div id="covid-content">
							<div className="copy">
								<p>{t('COVID Text')}</p>
							</div>
>>>>>>> f65fe3398788640952cf84452c27d0912f987b6a

              <img id="covid" src={covidDiagram} alt="covid-info" />
            </div>
          </div>
        </>
      )}

      <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <Input t={t} lang={lang} />
        <List restaurants={restaurants} t={t} lang={lang} />
      </RestaurantContext.Provider>
    </div>
  );
}
