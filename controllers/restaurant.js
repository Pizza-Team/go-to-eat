const express = require("express");
const router = express.Router();

// API for return restaurants
// write api setting here
router.get("/", async function(req, res) {
    res.send("hello");
});

module.exports = router;