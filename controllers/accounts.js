const express = require('express');
const app = express();
const router = express.Router();
const stripe = require('stripe')(process.env.SECRET_KEY);

const account = await stripe.accounts.create({
  type: 'standard',
});

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
