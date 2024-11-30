// components/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          style={{ fontFamily: "'Serif', Georgia, sans-serif" }}
        >
          {/* <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          /> */}
          E-Commerce Internationally
        </a>
        <div
          className="w-full max-w-md bg-white rounded-lg shadow-md"
          style={{
            border: '1px solid #E5E5E5',
          }}
        >
          {/* Navy Blue Background Behind Heading */}
          <div
            className="relative inline-block w-full"
            style={{
              backgroundColor: 'rgb(31 41 55)', // Navy blue background
              padding: '0.2rem 0.5rem',
              textAlign: 'center',
            }}
          >
            <h1
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{
                color: '#FFFFFF', // White text
                fontFamily: "'Serif', Georgia, sans-serif",
                margin: 0,
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
                    color: '#333333',
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
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                  style={{
                    color: '#333333',
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
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium"
                  style={{
                    color: '#333333',
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
                  }}
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    style={{
                      border: '1px solid #D5D5D5',
                    }}
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light"
                    style={{
                      color: '#666666',
                    }}
                  >
                    I accept the{' '}
                    <a
                      href="#"
                      className="font-medium"
                      style={{
                        color: '#007BFF',
                      }}
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
  type="submit"
  className="w-full px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring bg-[rgba(195,217,245,1)] text-black hover:bg-[rgba(170,200,240,1)] focus:ring-[rgba(195,217,245,0.5)] focus:ring-opacity-50"
>
  Create an account
</button>

              <p
                className="text-sm font-light"
                style={{
                  color: '#333333',
                }}
              >
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium"
                  style={{
                    color: '#007BFF', // Link color consistent with theme
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
