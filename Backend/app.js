// app.js
const express = require('express');
const db = require('./config/db'); // Relative path to db.js

const authRoutes = require('./routes/authRoutes');
// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes for authentication (login and registration)
app.use('/api/auth', authRoutes);
// Test database connection


module.exports = app;
