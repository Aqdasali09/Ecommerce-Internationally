const express = require('express');
const { signup,login,updateProfile} = require('../controllers/authController');
const router = express.Router();

// Route for signing up a user
router.post('/signup', async (req, res) => {
  try {
    const { email, password, full_name, avatar_url, bio, profileimgdata, role } = req.body;

    // Call the signup function (from auth.js)
    await signup(req, res);

  } catch (error) {
    console.log(error)
  }
});

// Route for logging in a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Call the login function (from auth.js)
    await login(req, res);

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for updating user profile (profile image, bio, role)
router.put('/updateProfile', async (req, res) => {
  try {
    const { user_id, full_name, avatar_url, bio, profileimgdata, role } = req.body;

    // Call the updateProfile function (from auth.js)
    await updateProfile(req, res);

    res.status(200).json({ message: 'Profile updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
