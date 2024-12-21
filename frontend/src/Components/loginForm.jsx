import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-[#6A1E55] focus:ring-[#6A1E55] focus:ring-opacity-40 focus:outline-none"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
        />
      </div>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-[#6A1E55] focus:ring-[#6A1E55] focus:ring-opacity-40 focus:outline-none"
          type="password"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <a href="/forgot-password" className="text-sm text-[#D3D3D3] hover:text-[#6A1E55]">
          Forget Password?
        </a>
        <button className="px-6 py-2 text-sm font-medium text-[#D3D3D3] capitalize bg-[#6A1E55] hover:bg-[#8E3A69] rounded-lg focus:outline-none">
          Sign In
        </button>
      </div>
      <p className="mt-4 text-sm text-[#D3D3D3] text-center">
        Don't have an account? <Link to="/register" className="text-[#6A1E55] hover:underline">Register</Link>
      </p>
    </form>
  );
}

export default LoginForm;
