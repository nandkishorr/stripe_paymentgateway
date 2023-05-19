// This is your test secret API key.
const stripe = require('stripe')('pk_test_51N9MupSBIjs6Y4N09Ts6CatHUVdgk7RFBIIdBLq0yha3b32ToE5vw1Foyl2WF2jq3LBViim1MVXKIcC8itY9Sht000DNgDhEeg');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://stripe-paymentgateway.vercel.app/';
const PRICE_ID='price_1N9OTlSBIjs6Y4N0BO7l7eJn';
app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: {
      0: {
        quantity: "1",
        price: PRICE_ID
      }
    },
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
  
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 100,
  //   currency: 'inr',
  //   payment_method_types: ['card'],
  //   receipt_email: 'iamnandkishorr@gmail.com.com',
  //   description: 'Your kindness will not be gone unnoticed',
  // });
});

app.listen(4242, () => console.log('Running on port 4242'));