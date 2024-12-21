// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import ForgotPassword from './Components/ForgetPassword';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import MainPage from './Components/main';
import Navbar from './Components/Navbar';
import PageBuilder from './Components/PageBuilder/PageBuilder';
import Register from './Components/Register';

// const [storeData, setStoreData] = useState({
//   storeType: "E-commerce",
//   storeName: "Bobby's Boutique",
//   storeDescription: "A store that offers unique and trendy fashion.",
//   slogan: "Style Your Life",
//   logo: "https://via.placeholder.com/150",  // Replace with a real logo link if necessary
//   primaryColor: "rgb(106 30 85)",  // Purple color
//   secondaryColor: "#22C55E",  // Green color
//   background: "black",
//   textColor: "#D8D8E3",  // Light gray color
//   fontStyle: "Arial",
//   headlines: [
//     { text: "Hi", color: "black", speed: 50 },
//     { text: "Welcome to Bobby's Boutique!", color: "red", speed: 30 }
//   ],
//   banners: [
//     "https://via.placeholder.com/500x200.png?text=Banner+1",  // Placeholder image link
//     "https://via.placeholder.com/500x200.png?text=Banner+2",  // Placeholder image link
//     "https://via.placeholder.com/500x200.png?text=Banner+3"   // Placeholder image link
//   ]
// });


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

          {/* Route for the about */}
          <Route path="/about" element={<About />} />

          
          {/* Route for the about */}
          <Route path="/contact" element={<Contact />} />

           {/* Route for the about */}
          <Route path="/main" element={<MainPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
