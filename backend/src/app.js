const express = require("express"); // require the Express package and assign it to a variable
const app = express(); // begin a new Express application and assign it to a variable
const cors = require("cors"); // require cors and assign it to a variable
const morgan = require("morgan"); // Require Morgan package for logging useful info to terminal

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

  app.use(morgan("dev"));
  app.get("/hello", sayHello);
  app.get('/say/:greeting', saySomething);

module.exports = app; 