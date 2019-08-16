const express = require("express");
const router = express.Router();

module.exports = router;




// ROUTES

// SIGNUP
router.get ("/signup", (req, res) => {
	res.render("auth/signup");
})

// LOGIN
router.get ("/login", (req, res) => {
	res.render("auth/login");
})

router.post("/login", (req, res) => {
	res.send("TODO: log in then redirect");
})

// LOGOUT
router.get ("/logout", (req, res) => {
	res.render("auth/logout");
})