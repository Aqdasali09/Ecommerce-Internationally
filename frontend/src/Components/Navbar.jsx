import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md"
      style={{
        backgroundColor: "rgba(195, 217, 245, 1)",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <div className="text-xl font-bold" style={{ color: "#333333" }}>
        E-Commerce Internationally
      </div>

      <div className="flex space-x-6">
        <Link
          to="/about"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#333333" }}
        >
          About
        </Link>
        <Link
          to="/shop"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#333333" }}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#333333" }}
        >
          Contact
        </Link>
      </div>

      <div>
        <Link
          to="/login"
          className="px-4 py-2 mx-2 text-sm font-semibold rounded hover:bg-gray-100 transition duration-200"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E5E5",
            color: "#333333",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition duration-200"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E5E5",
            color: "#333333",
          }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
