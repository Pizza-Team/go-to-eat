const express = require('express');
const app = express();
const router = express.Router();
const stripe = require('stripe')('sk_test_51HU4otHqeWVlhNqJ7YqaBOHRDjZp2Ipm68H7jdYa8CjZGuJZqnZOi1MgLlqad0VJuNffI5bmQMMMJokszXaNF62m00TC8UeTh5');

router.use(express.static('.'));

router.get("/", async (req, res) => {
    res.send("pay");
});

router.post('/create-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'test',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://www.codechrysalis.io/`,
    cancel_url: `https://google.co.jp`,
  });

  res.json({ id: session.id });
});

module.exports = router;
