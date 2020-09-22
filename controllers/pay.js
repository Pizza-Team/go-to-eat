const express = require("express");
const router = express.Router();

// API for Payment
// write api setting here
router.get("/", async function(req, res) {
    res.send("pay");
});

module.exports = router;