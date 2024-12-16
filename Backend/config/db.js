// Load environment variables from .env file
require('dotenv').config();

// Import Supabase client library
const { createClient } = require('@supabase/supabase-js');

// Check if environment variables are set
if (!process.env.REACT_APP_SUPABASE_URL || !process.env.REACT_APP_SUPABASE_ANON_KEY) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env file");
}

// Initialize Supabase client
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
// Test the connection by querying a table
(async () => {
  try {
    const { data, error } = await supabase
      .from('users') // Replace with a known table name in your Supabase database
      .select('id') // Replace 'id' with a lightweight column to test connection
      .limit(1);

    if (error) {
      console.error("Failed to connect to Supabase:", error.message);
    } else {
      console.log("Successfully connected to Supabase!");
    }
  } catch (err) {
    console.error("Unexpected error while connecting to Supabase:", err.message);
  }
})();

// Export the Supabase client for use in other parts of the app
module.exports = supabase;
