const express = require("express"); // require the Express package and assign it to a variable
const app = express(); // begin a new Express application and assign it to a variable
const cors = require("cors"); // require cors and assign it to a variable
const morgan = require("morgan"); // Require Morgan package for logging useful info to terminal
const shopItems = require("./data/shopItems"); // Require exported data from ./data/shopItems
require('dotenv').config();  // <-- this must come before anything that uses process.env

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello, User!";
    res.send(content);
}

const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const content = `${greeting}`;
    res.send(content);
}

  app.get("/hello", sayHello);
  app.get('/say/:greeting', saySomething);
  app.get("/items", (req, res) => {
    res.json({ data: shopItems });
  });

  // Stripe Payment Intent Route
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  if (!amount || !currency) {
    return res.status(400).json({ error: "Amount and currency are required." });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Stripe Checkout Session Route
app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cartItems.map(item => ({
      price: item.stripePriceId, // pre-defined in Stripe
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
  });

  res.json({ url: session.url });
});

  // Variable to hold the next ID
  // Because some IDs may already be used, find the largest assigned ID
  let lastItemId = shopItems.reduce((maxId, item) => Math.max(maxId, item.id), 0);

  app.post("/items", (req, res, next) => {
    const { data: { name, price } = {} } = req.body;
    if (name) {
      console.log(req.body);

      const newItem = {
        id: ++lastItemId,
        name, 
        price
      };
      console.log(newItem);
  
      shopItems.push(newItem);
      res.status(201).json({ data: newItem });
    } else {
      res.sendStatus(400);
    }
  });

module.exports = app; 