import React, { useState, useEffect } from "react";
import Input from "./Input";
import List from "./List";
import Banner from "../Images/Banner.jpeg";
import USA from "../Images/USA.png";
import JP from "../Images/JP.png";
import storefront from "../Images/storefront.jpeg";
import howdiagram from "../Images/how.png";
import covidDiagram from "../Images/covidmeasures.png";
import { useTranslation } from "react-i18next";
import Logo from "../Images/Logo.png";
import data from "../data/data.json";
import { RestaurantContext } from "../RestaurantContext";

export default function App() {
  const [restaurants, setRestaurants] = useState(data);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [howTo, setHowTo] = useState(false);
  const [about, setAbout] = useState(false);
  const [covidInfo, setCovidInfo] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div id="wrapper">
      <div id="main-overlay"></div>
      <nav className="nav">
        <div id="logo-container">
          <img
            src={Logo}
            alt="logo"
            className="logo"
            onClick={() => {
              setClear(!clear);
            }}
          />
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
              <h1>{t("About EATokyo")}</h1>
            </div>
            <div id="about-content">
              <img alt="storefront" id="about-banner" src={storefront}></img>
              <br></br>
              <div className="copy">
                <p>{t("About Text")}</p>
                <br></br>
                <p>{t("About Text2")}</p>
                <br></br>
                <p>{t("About Text3")}</p>
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
              <h1>{t("About EATokyo")}</h1>
            </div>
            <div id="about-content">
              <img alt="storefront" id="about-banner" src={storefront}></img>
              <br></br>
              <div className="copy">
                <p>{t("About Text")}</p>
                <br></br>
                <p>
                  <p>{t("About Text2")}</p>
                </p>
                <br></br>
                <p>
                  <p>{t("About Text3")}</p>
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
              <h1>{t("How")}</h1>
            </div>
            <div id="about-content">
              <img className="howToBanner" src={Banner} />
              <img className="howToBanner" id="diagram" src={howdiagram} />
            </div>
          </div>
        </>
      )}

      {covidInfo && (
        <>
          <div
            className="main-overlay"
            onClick={() => setCovidInfo(false)}
          ></div>
          <div className="howToContainer">
            <div id="about-title">
              <h1>{t("COVID Measures")}</h1>
            </div>
            <div id="covid-content">
              <div className="copy">
                <p>{t("COVID Text")}</p>
              </div>

              <img id="covid" src={covidDiagram} alt="covid-info" />
            </div>
          </div>
        </>
      )}

      <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <Input t={t} lang={lang} logoClear={clear} />
        <List restaurants={restaurants} t={t} lang={lang} />
      </RestaurantContext.Provider>
    </div>
  );
}
