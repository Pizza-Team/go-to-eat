const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const restaurantApi = require("../controllers/restaurant");
const payApi = require("../controllers/pay");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);


app.use(express.static(path.join(__dirname, "../client", + "/build")));

app.use("/api/restaurants", restaurantApi);

app.use("/api/pay", payApi);

module.exports = app;