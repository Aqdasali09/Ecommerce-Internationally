import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Axios for API requests
import CONSTANT_URL from '../../constants';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from './UserContext';
function LoginForm() {
  const { setUserEmail } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post(`${CONSTANT_URL}/api/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response)
        // Assuming the JWT token is returned in the response
        localStorage.setItem('token', response.data.token); // Save token to localStorage
      setUserEmail(response.data.user.email); // Update context
   
        navigate('/dashboard'); // Redirect to dashboard on success
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setErrorMessage(error.response.data.message || 'An error occurred');
      } else {
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-[#6A1E55] focus:ring-[#6A1E55] focus:ring-opacity-40 focus:outline-none"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-[#6A1E55] focus:ring-[#6A1E55] focus:ring-opacity-40 focus:outline-none"
          type="password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}

      <div className="flex items-center justify-between mt-4">
        <a href="/forgot-password" className="text-sm text-[#D3D3D3] hover:text-[#6A1E55]">
          Forget Password?
        </a>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 text-sm font-medium text-[#D3D3D3] capitalize bg-[#6A1E55] hover:bg-[#8E3A69] rounded-lg focus:outline-none"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </div>

      <p className="mt-4 text-sm text-[#D3D3D3] text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-[#6A1E55] hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
