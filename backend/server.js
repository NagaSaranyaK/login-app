const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());              // allow frontend requests
app.use(express.json());      // parse JSON bodies

// Hardcoded valid credentials
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'admin';

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // 200 OK – successful login
    return res.status(200).json({ message: 'Login successful', username });
  } else {
    // 401 Unauthorized – invalid credentials
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});