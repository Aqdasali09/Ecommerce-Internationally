import React from 'react';

function About() {
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
          About Us
        </h2>

        <p
          className="mt-4 text-lg text-[#D3D3D3] text-center"
          style={{
            fontFamily: 'Georgia, serif',
          }}
        >
          Welcome to E-Commerce Internationally! We are dedicated to helping small
          businesses expand globally by providing a scalable and user-friendly platform
          for creating online stores. Our mission is to make the process of building and
          managing an online store easy and accessible for businesses of all sizes, offering
          powerful tools that allow store owners to manage products, orders, and customers with ease.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="flex justify-center items-center">
            <div
              className="w-full max-w-sm bg-gray-300"
              style={{
                height: '300px', // Placeholder height
                borderRadius: '8px',
                backgroundColor: '#D5D5D5', // Placeholder background color
              }}
            >
              <img
                src="" // Add your image URL here
                alt="Description"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Second Image */}
          <div className="flex justify-center items-center">
            <div
              className="w-full max-w-sm bg-gray-300"
              style={{
                height: '300px', // Placeholder height
                borderRadius: '8px',
                backgroundColor: '#D5D5D5', // Placeholder background color
              }}
            >
              <img
                src="" // Add your image URL here
                alt="Description"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
