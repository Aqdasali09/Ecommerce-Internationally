// auth.js
const db = require('@supabase/supabase-js'); // Import Supabase client
const supabase=require('../config/db')
async function signup(req, res) {
    try {
      const { email, password, Full_name, avatar_url, Bio, profileimgdata, role } = req.body;
      // Create a new user in Supabase Auth
      const { data: signupData, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });
  
      console.log('Sign-up response:', { signupData, signupError });
       
      // Insert the user's additional data into the custom 'users' table
      const { data: insertData, error: insertError } = await supabase
        .from('users')
        .insert([
          {
            id: signupData.user.id,  // Use the Supabase Auth user ID
            full_name:Full_name,
            avatar_url: avatar_url,
            bio: Bio,
            profileimgdata: profileimgdata,  // Insert the profile image as bytes
            role: role || 'Customer',        // Default to 'Customer' if role is not provided
          },
        ]);
  
      // If there's an error during insertion, return the error and stop execution
      if (insertError) {
     //   return res.status(400).json({ message: insertError.message });
      }
  
      // If everything is successful, return the success response
  return res.status(201).json({ message: 'User created successfully', user: insertData });
  
    } catch (error) {
      // Catch any unexpected errors and return a general error message
      console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
    }
  }
  
  
async function login(req, res) {
  const { email, password } = req.body;

  // Sign in the user using email and password
  const { user, session, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
 //   return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Optionally, fetch user details from the 'users' table (if needed)
  const { data: userData, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (fetchError) {
 //   return res.status(400).json({ message: fetchError.message });
  }

  return res.status(200).json({
    message: 'Login successful',
    user: userData,
    session: session,  // Contains JWT token for authentication
  });
}
// auth.js

// Update user profile
async function updateProfile(req, res) {
  const { user_id, full_name, avatar_url, bio, profileimgdata, role } = req.body;

  // Update user's data in the 'users' table
  const { data, error } = await supabase
    .from('users')
    .update({
      full_name: full_name,
      avatar_url: avatar_url,
      bio: bio,
      profileimgdata: profileimgdata,  // Update the profile image as bytes
      role: role,                      // Update the user's role (Shop/Customer)
    })
    .eq('id', user_id);  // Use the user's ID to identify the correct record

  if (error) {
   return res.status(400).json({ message: error.message });
  }

  return res.status(200).json({ message: 'Profile updated successfully', user: data });
}
// auth.js

// Signup function

module.exports = { login,signup,signup };
