import React, { useEffect, useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { userEmail, setUserEmail } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false); // For hover menu
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch token from localStorage and decode it
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email); // Assuming the email is in the decoded token
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token"); // Clear invalid token
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setUserEmail(null); // Clear userEmail state
    navigate("/login"); // Redirect to login page
  };

  const avatarInitial = userEmail ? userEmail.charAt(0).toUpperCase() : "";

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md"
      style={{
        backgroundColor: "black",
        borderBottom: "1px solid rgb(90 41 65)",
      }}
    >
      <Link to="/">
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

      {userEmail ? (
        <div
          className="relative flex items-center space-x-4"
          onClick={() => menuOpen?setMenuOpen(false):setMenuOpen(true)}
        >
          {/* Avatar */}
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold"
            style={{ cursor: "pointer" }}
          >
            {avatarInitial}
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className="absolute top-12 right-0 bg-white shadow-md rounded-md w-32"
              style={{
                border: "1px solid rgb(90, 41, 65)",
              }}
            >
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                style={{
                  color: "black",
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
