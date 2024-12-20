import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md"
      style={{
        backgroundColor: "black",
        borderBottom: "1px solid rgb(90 41 65)",
      }}
    > 
    <Link to='/'>
      <div className="text-xl font-bold" style={{ color: "white" }}>
        E-Commerce Internationally
      </div>
      </Link>

      <div className="flex space-x-6">
        <Link
          to="/about"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#DBD8E3" }}
        >
          About
        </Link>
        <Link
          to="/shop"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#DBD8E3" }}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="text-base font-semibold hover:text-gray-700 transition duration-300"
          style={{ color: "#DBD8E3" }}
        >
          Contact
        </Link>
      </div>

      <div>
        <Link
          to="/login"
          className="px-4 py-2 mx-2 text-sm font-semibold rounded hover:bg-gray-100 transition duration-200"
          style={{
            backgroundColor: "rgb(90, 41, 65)",
            color: "white",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition duration-200"
          style={{
            backgroundColor: "rgb(90, 41, 65)",
            color: "white",
          }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
