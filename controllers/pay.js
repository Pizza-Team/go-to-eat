const express = require('express');
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.use(express.static('.'));

// router.use(express.static(path.join(__dirname, 'build')));
// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


router.post('/pay/create-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create(req.body);
  res.json({ id: session.id });
});

module.exports = router;
