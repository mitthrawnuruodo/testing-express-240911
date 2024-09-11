const express = require('express');
const router = express.Router();

// Define the route for the homepage
router.get('/', (req, res) => {
    res.send(`
        <nav>
            <a href="/about">Go to About</a><br>
            <a href="/contact">Go to Contact</a><br>
            <a href="/users">Go to Users</a>
        </nav>
        <h1>Welcome to the Home Page</h1>
    `);
});

module.exports = router;