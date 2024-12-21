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
      confirmButtonColor: '#6A1E55', // Purple theme
      background: '#1A1A1D',
      color: '#D3D3D3',
      iconColor: '#6A1E55',
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: '#1A1A1D',
      }}
    >
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-md"
        style={{
          backgroundColor: '#2A2A2E',
          border: '1px solid #E5E5E5',
        }}
      >
        <div
          className="relative inline-block w-full"
          style={{
            // backgroundColor: '#6A1E55', // Purple theme for title
            padding: '0.2rem 0.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Georgia, serif',
              margin: 0,
            }}
          >
            Forgot Password
          </h2>
        </div>

        <p
          className="mt-2 text-sm text-center"
          style={{
            color: '#D3D3D3',
            fontFamily: 'Georgia, serif',
          }}
        >
          Please enter your email address to receive a password reset link.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-[#6A1E55]"
            placeholder="Enter your email"
            style={{
              backgroundColor: '#F8F8F8',
              border: '1px solid #D5D5D5',
              color: '#333333',
            }}
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white bg-[#6A1E55] rounded-lg hover:bg-[#8E3A69] focus:outline-none focus:ring"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
