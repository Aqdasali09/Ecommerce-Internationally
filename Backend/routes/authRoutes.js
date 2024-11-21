// routes/authRoutes.js
const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Register a new user
router.get('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0],
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
