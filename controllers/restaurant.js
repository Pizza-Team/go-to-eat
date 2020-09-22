const express = require("express");
const router = express.Router();
const unirest = require("unirest");
require("dotenv").config();

// API for return restaurants
// write api setting here

const gurunabiUrl = "https://gurunavi-restaurant-search.p.rapidapi.com/"
const header = {
    "x-rapidapi-host": "gurunavi-restaurant-search.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
    "useQueryString": true
};
router.get("/", async function(req, res) {
    console.log(111111111);
    const url = "https://gurunavi-restaurant-search.p.rapidapi.com/ForeignRestSearchAPI/v3/";
    const reqForRestaurant = unirest("GET", url);
    reqForRestaurant.query({
        "lang": "en",
        "english_menu": "1"
    });
    reqForRestaurant.headers(header)

    reqForRestaurant.end(function(resOfRestaurant) {
        if (resOfRestaurant.error) throw new Error(resOfRestaurant.error);

        // console.log(JSON.stringify(res.body));
        res.send(resOfRestaurant.body);
    });

});

module.exports = router;