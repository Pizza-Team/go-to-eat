const express = require('express');
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.use(express.static('.'));

// API for Payment
// write api setting here
router.get("/pay", async function(req, res) {
    res.send("pay");
});

router.post('/pay/create-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create(req.body);
  res.json({ id: session.id });
});

module.exports = router;
