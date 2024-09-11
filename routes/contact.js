const express = require('express');
const router = express.Router();

// Define the route for the contact page
router.get('/', (req, res) => {
    res.send(`
        <nav>
            <a href="/">Go back to Home</a><br>
            <a href="/about">Go to About</a><br>
            <a href="/users">Go to Users</a>
        </nav>
        <h1>Contact Us</h1>
        <form action="/contact" method="post">
            <input type="text" name="name" placeholder="Your Name" required><br>
            <input type="email" name="email" placeholder="Your Email" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission (POST request)
router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.send(`
        <h1>Thank You, ${name}!</h1>
        <p>We will contact you at ${email} soon.</p>
        <a href="/">Go back to Home</a>
    `);
});

module.exports = router;