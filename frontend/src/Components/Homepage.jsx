// src/components/Homepage.jsx
import React, { useState } from "react";
import Navbar from '../Components/Navbar.jsx'
import { Link } from "react-router-dom";
import piccc from "../assets/piccc.png";

const Homepage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How many template designs do you provide?",
      answer:
        "We currently offer two professionally designed templates to get you started. These templates are fully customizable to meet your specific needs.",
    },
    {
      question: "What are your pricing plans?",
      answer:
        "Our pricing plans are tailored to suit various requirements. We offer both monthly and yearly subscriptions with flexible options.",
    },
    {
      question: "Do you provide support for customization?",
      answer:
        "Yes, our team is here to help with customization. We provide detailed guides and support to ensure a seamless experience.",
    },
    {
      question: "Can I integrate my own payment gateway?",
      answer:
        "Absolutely! Our platform supports various payment gateways, allowing you to integrate your preferred provider easily.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features and decide if our service is right for you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div
        className="w-full text-white text-center py-1.5 overflow-hidden"
        style={{
          backgroundColor: "#333333",
        }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="6">
          15% Off on Your First Purchase! Free Shipping on Orders Above $50!
        </marquee>
      </div>

      {/* Navbar */}
    

      {/* First Split Container */}
      <div
        className="flex flex-col md:flex-row items-center justify-between px-10 py-24"
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
        <h1
  className="text-4xl font-bold mb-4 inline-block px-8 py-2"
  style={{
    color: "#333333", // Dark color for the text
    borderRadius: "0.25rem", // Slight rounding
    fontFamily: `'Georgia', serif`,
  }}
>
  Welcome to Our Store!
</h1>


  <p
    className="text-lg"
    style={{
      color: "#666666",
      fontFamily: `'Georgia', serif`,
    }}
  >
    Discover the best deals on your favorite products. Shop now and enjoy exclusive discounts.
  </p>
</div>


        <div className="md:w-1/2">
          <iframe
            className="rounded-lg shadow-md w-full h-80"
            style={{
              border: "1px solid #E5E5E5",
            }}
            src="https://www.youtube.com/embed/DXj4DVj-q98?autoplay=1&mute=1&loop=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Review Section */}
      <div
  className="flex flex-col md:flex-row items-center justify-between px-10 py-20"
  style={{
    backgroundColor: "#FFFFFF",
  }}
>
  <div className="md:w-1/2 mb-10 md:mb-0">
    <img
      src={piccc}
      alt="Customer"
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
  <div className="md:w-1/2 text-center">
    <p
      className="text-lg mb-4"
      style={{
        color: "#666666",
        fontFamily: `'Georgia', serif`,
      }}
    >
      "This store offers an amazing shopping experience with great products and customer service!"
    </p>
    <p
      className="font-semibold inline-block px-6 py-2 text-white"
      style={{
        backgroundColor: "rgb(31 41 55 / 1)", // Same background color for name
        borderRadius: "0.25rem", // Slight rounding for background
        fontFamily: `'Georgia', serif`,
        width: "80%", // Set the width to 80% of the review section
      }}
    >
      John Doe
    </p>
    <p
      className="text-sm text-gray-500 mt-2"
      style={{
        fontFamily: `'Georgia', serif`,
      }}
    >
      Product Manager
    </p>
  </div>
</div>


      {/* Template Designs */}
      <div
        className="px-10 py-20"
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{
            color: "#333333",
            fontFamily: `'Georgia', serif`,
          }}
        >
          Template Designs
        </h2>
        <div className="flex space-x-6 justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Template 1"
            className="w-1/2 rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/500x300"
            alt="Template 2"
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="px-10 py-20"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{
            color: "#333333",
            fontFamily: `'Georgia', serif`,
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="rounded-lg shadow-md"
      style={{
        backgroundColor: "#F5F5F5",
        borderColor: "rgb(31 41 55)", // Border color
        borderWidth: "2px", // Slightly thicker border
      }}
    >
      <button
        className="flex justify-between items-center w-full px-6 py-4"
        onClick={() => toggleFAQ(index)}
      >
        <span
          className="font-medium text-lg"
          style={{
            color: "#333333",
          }}
        >
          {faq.question}
        </span>
        <span className="text-2xl text-gray-500">
          {openFAQ === index ? "−" : "+"}
        </span>
      </button>
      {openFAQ === index && (
        <div
          className="px-6 py-4 rounded-b-lg"
          style={{
            backgroundColor: "rgba(195, 217, 245, 1)",
            color: "#333333",
          }}
        >
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Homepage;
