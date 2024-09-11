const express = require('express');
const router = express.Router();

// Define the route for the about page
router.get('/', (req, res) => {
    res.send(`
        <nav>
            <a href="/">Go back to Home</a><br>
            <a href="/contact">Go to Contact</a><br>
            <a href="/users">Go to Users</a>
        </nav>    
        <h1>About Us</h1>
        <p>This is the about page of our Express app.</p>
        <br>
    `);
});

module.exports = router;