import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="bg-[#1A1A1D]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-[#D3D3D3]"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {/* E-Commerce Internationally */}
        </a>
        <div
          className="w-full max-w-md bg-[#2A2A2E] rounded-lg shadow-md"
          style={{
            border: '1px solid #6A1E55',
          }}
        >
          <div
            className="relative inline-block w-full"
            style={{
              // backgroundColor: '#6A1E55', // Purple background for title
              padding: '0.2rem 0.5rem',
              textAlign: 'center',
            }}
          >
            <h1
              className="text-2xl font-bold text-white"
              style={{
                fontFamily: "'Georgia', serif",
                margin: 0,
                padding: 2,
              }}
            >
              Create an account
            </h1>
          </div>

          <div className="p-6 space-y-4">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                  style={{
                    color: '#D3D3D3',
                  }}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring"
                  style={{
                    backgroundColor: '#F8F8F8',
                    border: '1px solid #D5D5D5',
                    color: '#333333',
                    focusBorderColor: '#6A1E55',
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                  style={{
                    color: '#D3D3D3',
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring"
                  style={{
                    backgroundColor: '#F8F8F8',
                    border: '1px solid #D5D5D5',
                    color: '#333333',
                    focusBorderColor: '#6A1E55',
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium"
                  style={{
                    color: '#D3D3D3',
                  }}
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring"
                  style={{
                    backgroundColor: '#F8F8F8',
                    border: '1px solid #D5D5D5',
                    color: '#333333',
                    focusBorderColor: '#6A1E55',
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring bg-[#6A1E55] text-[#D3D3D3] hover:bg-[#8E3A69] focus:ring-[#6A1E55] focus:ring-opacity-50"
              >
                Create an account
              </button>

              <p
                className="text-sm font-light"
                style={{
                  color: '#D3D3D3',
                }}
              >
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium"
                  style={{
                    color: '#6A1E55', // Link color consistent with theme
                  }}
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
