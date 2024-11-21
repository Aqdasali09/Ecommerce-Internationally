// app.js
const express = require('express');
const db = require('./config/db'); // Relative path to db.js

const authRoutes = require('./routes/authRoutes');
// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Routes for authentication (login and registration)
app.use('/api/auth', authRoutes);
// Test database connection
app.get('/test-db', async (req, res) => {
    try {
      // Create a table if it doesn't exist
      await db.query(`
        CREATE TABLE IF NOT EXISTS demo_table (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `);
  
      // Insert some demo values into the table
      const result = await db.query(
        'INSERT INTO demo_table (name, email) VALUES ($1, $2) RETURNING *',
        ['Demo User', 'demo@example.com']
      );
  
      // Respond with the inserted data
      res.status(200).json({
        message: 'Database connection is working. Table created and data inserted.',
        insertedRow: result.rows[0],
      });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Error testing database connection' });
    }
  });
  

module.exports = app;
