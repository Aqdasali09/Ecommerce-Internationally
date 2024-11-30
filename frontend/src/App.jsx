// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Components/ForgetPassword';
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
