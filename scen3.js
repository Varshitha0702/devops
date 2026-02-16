const express = require('express');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory user storage
let users = [];

// Simple hash function (conceptual password hashing)
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Custom authentication middleware
function authenticate(req, res, next) {
    const username = req.headers.username;

    if (!username) {
        return res.status(401).json({ message: "Access denied. Please login." });
    }

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: "Invalid user." });
    }

    next();
}

// POST /register → Register new user
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = hashPassword(password);

    users.push({
        username,
        password: hashedPassword
    });

    res.status(201).json({
        message: "User registered successfully"
    });
});

// POST /login → Authenticate user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const hashedPassword = hashPassword(password);

    if (user.password !== hashedPassword) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    res.status(200).json({
        message: "Login successful"
    });
});

// GET /dashboard → Protected route
app.get('/dashboard', authenticate, (req, res) => {
    res.status(200).json({
        message: "Welcome to the dashboard!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
