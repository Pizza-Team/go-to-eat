const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const restaurantApi = require("../controllers/restaurant");
const payApi = require("../controllers/pay");

app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use(express.static(path.join(__dirname, "../client", "/build")));

app.use("/api", restaurantApi, payApi);


module.exports = app;
