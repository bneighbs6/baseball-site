const express = require("express"); // require the Express package and assign it to a variable
const app = express(); // begin a new Express application and assign it to a variable
const cors = require("cors"); // require cors and assign it to a variable
const morgan = require("morgan"); // Require Morgan package for logging useful info to terminal

const sayHello = (req, res, next) => {
    res.send("Hello!");
  };

  app.use(morgan("dev"));
  app.use(sayHello);

module.exports = app; 