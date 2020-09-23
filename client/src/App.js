import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import HowTo from "./components/HowTo";
import "./App.css";
import Banner from "./Images/Banner.png";
import { useTranslation } from "react-i18next";
import i18n from "./i18next";
import Logo from "./logo.png";
import data from "./data/data.json";
import { RestaurantContext } from "./RestaurantContext";

export default function App() {
  const [restaurants, setRestaurants] = useState(data);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [howTo, setHowTo] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div id="wrapper">
      <nav className="nav">
        <div>
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div id="about">{t("About")}</div>
        <div id="how-to" onClick={() => setHowTo(true)}>
          {t("How")}
        </div>
        <div className="lang-button">
          <button className="language" onClick={() => setLang("en")}>
            EN
          </button>
        </div>
        <div className="lang-button">
          <button onClick={() => setLang("jp")}>JP</button>
        </div>
      </nav>
      {howTo && (
        <>
          <div className="main-overlay" onClick={() => setHowTo(false)}></div>
          <div className="howToContainer">
            <h1 className="howToTitle">1. Select your Restaurant</h1>
            <img className="howToBanner" src={Banner} />
            <h1 className="howToTitle">2. Purchase a Coupon</h1>
            <h1 className="howToTitle">
              3. Show your Coupon at your Restaurant to Redeem
            </h1>
            <h1 className="howToTitle">4. Enjoy!</h1>
          </div>
        </>
      )}

      <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <Input t={t} />
        <List restaurants={restaurants} t={t} />
        <HowTo howTo={howTo} />
      </RestaurantContext.Provider>
    </div>
  );
}
