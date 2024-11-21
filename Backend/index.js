// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port number
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
