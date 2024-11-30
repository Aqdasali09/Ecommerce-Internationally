// components/ForgotPassword.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your action was successful!',
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#4CAF50',
      background: '#F5F5F5',
      color: '#333333',
      iconColor: '#4CAF50',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: '#F5F5F5', // Subtle light gray background
      }}
    >
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-md"
        style={{
          backgroundColor: '#FFFFFF', // Clean white for the card
          border: '1px solid #E5E5E5', // Subtle border for depth
        }}
      >
        {/* Heading with Navy Blue Background */}
        <div
          className="relative inline-block w-full"
          style={{
            backgroundColor: 'rgb(31 41 55)', // Navy blue background
            padding: '0.2rem 0.5rem', // Padding around the heading text
            marginBottom: '1rem', // Space below the heading
            textAlign: 'center',
            borderRadius: '5px', // Rounded corners for aesthetic
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{
              color: '#FFFFFF', // White text for contrast
              fontFamily: `'Serif', 'Georgia', sans-serif`,
              margin: 0, // Remove default margin
            }}
          >
            Forgot Password
          </h2>
        </div>

        <p
          className="mt-2 text-sm text-center"
          style={{
            color: '#666666', // Subtle gray for supporting text
            fontFamily: `'Serif', 'Georgia', sans-serif`,
          }}
        >
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              className="block mb-2 text-sm font-medium"
              style={{
                color: '#333333', // Charcoal black for label
                fontFamily: `'Sans-Serif', sans-serif`,
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring"
              style={{
                backgroundColor: '#F8F8F8', // Slightly lighter gray background for input
                border: '1px solid #D5D5D5', // Subtle border for input
                color: '#333333', // Charcoal black text for input
                fontFamily: `'Sans-Serif', sans-serif`,
              }}
            />
          </div>
          <button
  type="submit"
  className="w-full px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring bg-[rgba(195,217,245,1)] text-black hover:bg-[rgba(170,200,240,1)] focus:ring-[rgba(195,217,245,0.5)] focus:ring-opacity-50"
>
  Send Reset Link
</button>

        </form>
        <p
          className="mt-4 text-sm text-center"
          style={{
            color: '#333333', // Charcoal black for the text
            fontFamily: `'Sans-Serif', sans-serif`,
          }}
        >
          Remember your password?{' '}
          <a
            href="/login"
            className="font-medium"
            style={{
              color: '#333333', // Same as heading color for consistency
              textDecoration: 'none', // No underline
            }}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
