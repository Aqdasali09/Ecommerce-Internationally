// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Components/ForgetPassword';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PageBuilder from './Components/PageBuilder/PageBuilder';
import Register from './Components/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
  