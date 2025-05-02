const express = require("express"); // require the Express package and assign it to a variable
const app = express(); // begin a new Express application and assign it to a variable
const cors = require("cors"); // require cors and assign it to a variable

app.use(cors()); // cors for cross origin reference system security

module.exports = app; 