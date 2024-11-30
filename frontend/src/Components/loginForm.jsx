// components/LoginForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
        />
      </div>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <a href="/forgot-password" className="text-sm text-gray-600 dark:text-gray-600 hover:text-gray-600">
          Forget Password?
        </a>
        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-[rgba(195,217,245,1)] hover:bg-[rgba(170,200,240,1)] focus:outline-none focus:ring focus:ring-[rgba(195,217,245,0.5)] focus:ring-opacity-50">
  Sign In
</button>

      </div>
      <p className="mt-4 text-sm text-black-600 dark:text-black-500 text-center">
        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
      </p>
    </form>
  );
}

export default LoginForm;
