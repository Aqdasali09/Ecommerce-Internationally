// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Components/ForgetPassword';
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import PageBuilder from './Components/PageBuilder/PageBuilder';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
  
    

    <PageBuilder />
    </>
  );
}

export default App;
