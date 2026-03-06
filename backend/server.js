const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'admin';

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return res.status(200).json({ message: 'Login successful', username });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});