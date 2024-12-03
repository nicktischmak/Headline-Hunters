// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Example route
app.get('/api/news', (req, res) => {
  res.json({ message: 'Welcome to Headline Hunters!' });
});

// Port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});