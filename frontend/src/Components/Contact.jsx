import React from 'react';

function Contact() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#1A1A1D]"
      style={{ backgroundColor: '#1A1A1D' }}
    >
      <div
        className="w-full max-w-4xl mx-auto bg-[#2A2A2E] rounded-lg shadow-md"
        style={{
          padding: '2rem',
        }}
      >
        <h2
          className="text-3xl font-bold text-center text-[#D3D3D3]"
          style={{
            fontFamily: 'Georgia, serif',
          }}
        >
          Contact Us
        </h2>

        <p
          className="mt-4 text-lg text-[#D3D3D3] text-center"
          style={{
            fontFamily: 'Georgia, serif',
          }}
        >
          We would love to hear from you! Whether you have a question, feedback, or just want
          to get in touch, feel free to reach out to us through any of the following channels.
        </p>

        <div className="mt-8 space-y-6 text-center">
          <div className="flex justify-center items-center space-x-4">
            <a
              href="mailto:ecommercein@gmail.com"
              className="text-[#6A1E55] text-xl font-semibold hover:underline"
              style={{
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Send us an email
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.instagram.com/yourinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A1E55] text-xl font-semibold hover:underline"
              style={{
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Instagram
            </a>
            <a
              href="mailto:ecommercein@gmail.com"
              className="text-[#6A1E55] text-xl font-semibold hover:underline"
              style={{
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Email
            </a>
          </div>

          <p className="text-[#D3D3D3] text-lg mt-4">
            You can also reach us directly via our email:{" "}
            <a
              href="mailto:ecommercein@gmail.com"
              className="text-[#6A1E55] font-semibold"
              style={{
                fontFamily: 'Arial, sans-serif',
              }}
            >
              ecommercein@gmail.com
            </a>
          </p>

          <p className="text-[#D3D3D3] text-lg mt-4">
            We look forward to hearing from you and will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
