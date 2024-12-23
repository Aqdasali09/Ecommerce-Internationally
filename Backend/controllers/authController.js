const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const supabase  = require('../config/db'); // Assuming you're still using Supabase for database operations

// Signup function (Custom Auth)
async function signup(req, res) {
  try {
    const { email, password, first_name, last_name } = req.body;

    // Check if email already exists in the 'Users' table
    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUserError && existingUserError.code !== 'PGRST116') {
      // If the error is not "no rows found", return a 500 error
      return res.status(500).json({ message: 'Error checking email availability' });
    }

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the 'Users' table with hashed password
    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          email,
          passwordhash: hashedPassword, // Store the hashed password
          firstname: first_name,
          lastname: last_name,
        },
      ])
      .select()
      .single(); // Ensure we return the inserted data

    if (insertError) {
      return res.status(400).json({ message: insertError.message });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: insertData.userid, email: insertData.email },
      process.env.JWT_SECRET, // Use secret key from environment variable
      { expiresIn: '1h' } // Set token expiration (e.g., 1 hour)
    );

    // Return success response
    return res.status(201).json({
      message: 'Signup successful',
      user: {
        first_name: insertData.firstname,
        last_name: insertData.lastname,
        email: insertData.email,
      },
      token, // JWT token for authentication
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong during signup' });
  }
}


// Login function (Custom Auth)
async function login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  // Fetch user by email from the 'Users' table
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (userError || !user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the provided password with the hashed password stored in the database
  const passwordMatch = await bcrypt.compare(password, user.passwordhash);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create a JWT token (you can adjust the payload as needed)
  const token = jwt.sign(
    { userId: user.userid, email: user.email, },
    process.env.JWT_SECRET, // You should store your secret key in an environment variable
    { expiresIn: '1h' } // Set token expiration (e.g., 1 hour)
  );
  console.log(token);

  console.log("res");
  // Return login success response with user data and token
  return res.status(200).json({
    message: 'Login successful',
    user: {
      first_name: user.firstname,
      last_name: user.lastname,
      email: user.email,
    },
    token, // JWT token for authentication
  });
}

// Update user profile (Optional, if required for other functionalities)
async function updateProfile(req, res) {
  const { user_id, first_name, last_name } = req.body;

  // Update user's data in the 'Users' table
  const { data, error } = await supabase
    .from('Users')
    .update({
      first_name,
      last_name,
    })
    .eq('UserID', user_id); // Use the user's ID to identify the correct record

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return res.status(200).json({ message: 'Profile updated successfully', user: data });
}

module.exports = { signup, login, updateProfile };
