const express = require('express');
const router = express.Router();

// Middleware to fetch and parse API data
async function fetchUserData(req, res, next) {
    try {
        const fetch = await import('node-fetch'); // Dynamically import node-fetch
        const response = await fetch.default('https://randomuser.me/api/');
        const data = await response.json();
        req.userData = data.results[0]; // Attach user data to the request object
        next(); // Proceed to the route handler
    } catch (error) {
        next(error); // Handle errors
    }
}

// Apply the middleware to fetch data for the /users route
router.get('/', fetchUserData, (req, res) => {
    const { name, email, location } = req.userData;
    res.send(`
        <h1>Random User Information</h1>
        <p><strong>Name:</strong> ${name.first} ${name.last}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location.city}, ${location.country}</p>
        <a href="/">Go back to Home</a><br>
        <a href="/about">Go to About</a><br>
        <a href="/contact">Go to Contact</a>
    `);
});

module.exports = router;