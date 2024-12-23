// app.js
const express = require('express');
const db = require('./config/db'); // Relative path to db.js
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const storeRoutes=require('./routes/storeRoutes')
// Initialize Express app
const app = express();
app.use(cors());  // Ensure that cors is correctly imported and used
app.use(bodyParser.json()); // Ensure bodyParser is imported and used

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes for authentication (login and registration)
app.use('/api/auth', authRoutes);
app.use('/api/store',storeRoutes );

// Test database connection


module.exports = app;
