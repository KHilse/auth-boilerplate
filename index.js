// REQUIRES
const express = require("express");
const layouts = require("express-ejs-layouts");
require("dotenv").config();

// APPS
const app = express();

// MIDDLEWARE & SETTINGS
app.set ("view engine", "ejs");
app.use (layouts);
app.use ('/', express.static("static"));

// CONTROLLERS
app.use ("/auth", require("./controllers/auth"));

// ROUTES
app.get ("/", (req, res) => {
	res.render("home");
})

// 404
app.get ('/*', (req, res) => {
	res.render("404");
})

// LISTEN
app.listen(process.env.PORT, () => {
	console.log("Server up at port", process.env.PORT);
});