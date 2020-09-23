const express = require("express");
const router = express.Router();
const unirest = require("unirest");
require("dotenv").config();

// API for return restaurants
// write api setting here

//We should set x-rapidapi-key in .env
const header = {
  "x-rapidapi-host": "gurunavi-restaurant-search.p.rapidapi.com",
  "x-rapidapi-key": process.env.API_KEY,
  useQueryString: true,
};

router.get("/restaurants", async function(req, res) {
    //query for search
    let query = { "pref": "PREF13", "hit_per_page": "100", };

    if (req.query.lang) {
        query['lang'] = req.query.lang;
    }

    if (req.query.areacode_l) {
        query['areacode_l'] = req.query.areacode_l;
    }

    if (req.query.areacode_m) {
        query['areacode_m'] = req.query.areacode_m;
    }

    if (req.query.areacode_s) {
        query['areacode_s'] = req.query.areacode_s;
    }

    if (req.query.category_l) {
        query['category_l'] = req.query.category_l;
    }

    if (req.query.no_smoking) {
        query['no_smoking'] = req.query.no_smoking;
    }

    if (req.query.wifi) {
        query['wifi'] = req.query.wifi;
    }

    if (req.query.vegetarian_menu_options) {
        query['vegetarian_menu_options'] = req.query.vegetarian_menu_options;
    }

    if (req.query.card) {
        query['card'] = req.query.card;
    }

    if (req.query.private_room) {
        query['private_room'] = req.query.private_room;
    }

    if (req.query.english_menu) {
        query['english_menu'] = req.query.english_menu;
    }

    if (req.query.korean_menu) {
        query['korean_menu'] = req.query.korean_menu;
    }

    if (req.query.traditional_chinese_menu) {
        query['traditional_chinese_menu'] = req.query.traditional_chinese_menu;
    }

    if (req.query.simplified_chinese_menu) {
        query['simplified_chinese_menu'] = req.query.simplified_chinese_menu;
    }

    if (req.query.english_speaking_st) {
        query['english_speaking_st'] = req.query.english_speaking_st;
    }

    const url = "https://gurunavi-restaurant-search.p.rapidapi.com/ForeignRestSearchAPI/v3/";

    const reqForRestaurant = unirest("GET", url);
    reqForRestaurant.query(query);
    reqForRestaurant.headers(header)

    reqForRestaurant.end(function(resOfRestaurant) {
        if (resOfRestaurant.error) throw new Error(resOfRestaurant.error);
        res.send(resOfRestaurant.body);
    });
});

router.get("/*", (req, res) => {
  res
    .sendFile(path.join(__dirname, "../client", "build", "index.html"))
    .catch((err) => {
      res.json({ err });
    });
});

module.exports = router;
