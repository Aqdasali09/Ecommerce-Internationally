const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool instance using the connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Needed for Supabase SSL connection
});

// Log successful connection in development
if (process.env.NODE_ENV === 'development') {
  console.log('PostgreSQL pool initialized with connection string');
}

// Listen for pool-level errors
pool.on('error', (err) => {
  console.error('Unexpecte error on idle PostgreSQL client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
