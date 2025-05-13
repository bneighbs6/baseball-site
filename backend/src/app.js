const express = require("express"); // require the Express package and assign it to a variable
const app = express(); // begin a new Express application and assign it to a variable
const cors = require("cors"); // require cors and assign it to a variable
const morgan = require("morgan"); // Require Morgan package for logging useful info to terminal
const shopItems = require("./data/shopItems"); // Require exported data from ./data/shopItems

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
  app.use(express.json());
  app.use(morgan("dev"));
  app.get("/hello", sayHello);
  app.get('/say/:greeting', saySomething);
  app.get("/items", (req, res) => {
    res.json({ data: shopItems });
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