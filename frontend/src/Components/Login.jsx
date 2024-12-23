import React from 'react';
import { useContext } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
function Login() {
  const { setUserEmail } = useContext(UserContext);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#1A1A1D', // Dark background to match theme
      }}
    >
      <div
        className="w-full max-w-sm mx-auto rounded-lg shadow-md"
        style={{
          backgroundColor: '#2A2A2E', // Lighter background for the inner box
        }}
      >
        <div className="px-6 py-8">
          <h3
            className="text-2xl font-bold text-center"
            style={{
              color: '#D3D3D3', // Light gray heading text
              fontFamily: 'Georgia, serif',
            }}
          >
            Welcome Back
          </h3>
          <p
            className="mt-2 text-center text-sm"
            style={{
              color: '#D3D3D3', // Light gray for supporting text
              fontFamily: 'Georgia, serif',
            }}
          >
            Login or create an account to continue
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
