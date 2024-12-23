import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ForgotPassword from "./Components/ForgetPassword";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import MainPage from "./Components/main";
import Navbar from "./Components/Navbar";
import PageBuilder from "./Components/PageBuilder/PageBuilder";
import Register from "./Components/Register";
import Shop from "./Components/Shop";
import Dashboard from "./Components/Dashboard";
import AddProduct from "./Components/AddProduct";

const AppContent = () => {
  const location = useLocation(); // Get current location

  // Define paths where the Navbar should be hidden
  const hideNavbarRoutes = ["/shop"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}

      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for register page */}
        <Route path="/register" element={<Register />} />

        {/* Route for forgot password page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Route for the page builder */}
        <Route path="/page-builder" element={<PageBuilder />} />

        {/* Route for about page */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />



        {/* Route for contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Route for the main page */}
        <Route path="/main" element={<MainPage />} />

        {/* Route for the shop page */}
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
