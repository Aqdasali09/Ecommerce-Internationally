// components/Login.jsx
import React from 'react';
import LoginForm from './loginForm';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#F5F5F5', // Light grayish tone for background
      }}
    >
      <div
        className="w-full max-w-sm mx-auto rounded-lg shadow-md"
        style={{
          backgroundColor: '#FFFFFF', // Clean white for the card
          border: '1px solid #E5E5E5', // Subtle border for depth
        }}
      >
        <div className="px-6 py-8">
          <h3
            className="text-2xl font-bold text-center"
            style={{
              color: '#333333', // Charcoal black for the heading
              fontFamily: `'Serif', 'Georgia', sans-serif`, // Elegant serif font
            }}
          >
            Welcome Back
          </h3>
          <p
            className="mt-2 text-center text-sm"
            style={{
              color: '#666666', // Subtle gray for supporting text
              fontFamily: `'Serif', 'Georgia', sans-serif`,
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
