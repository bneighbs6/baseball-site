const { PORT = 3001 } = process.env; // Set PORT = process.env, or 5000 by default
const app = require("./app"); // Require the express application from app.js

const listener = () => console.log(`Server is running on Port ${PORT}!`); // This function will run when the server successfully starts.

/* 
The listen() method in an Express application is what runs the server. 
It takes two arguments: a port number and a function. 
The PORT variable defines where your server is running, 
and the listener() function will get called as soon as the server has successfully started
 */
app.listen(PORT, listener);