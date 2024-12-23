import React, { useState } from "react";
// import Navbar from '../Components/Navbar.jsx';
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1D" }}>
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

      

      {/* First Split Container */}
      <div
  className="relative flex flex-col md:flex-row items-center justify-between h-[85vh] px-10 py-24"
  style={{
    backgroundColor: "#1A1A1D", // Fallback background color
  }}
>
  {/* Video as Background */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="bgvideo.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Black Overlay */}
  <div
    className="absolute top-0 left-0 w-full h-full z-5"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    }}
  ></div>

  {/* Content on Top of Video */}
  <div className="relative z-10 md:w-1/2 mb-10 md:mb-0">
    <h1
      className="text-4xl font-bold mb-4 inline-block px-8 py-2"
      style={{
        color: "#D3D3D3", // Light gray for the text
        borderRadius: "0.25rem", // Slight rounding
        fontFamily: `'Georgia', serif`,
      }}
    >
      Create Your Own Store!
    </h1>

    <p
      className="text-lg"
      style={{
        color: "#D3D3D3", // Light gray for the text
        fontFamily: `'Georgia', serif`,
      }}
    >
      Build your store effortlessly with our easy-to-use platform.
      Customize every detail and start selling in no time!
    </p>
  </div>
</div>

      {/* Review Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between px-10 py-20"
        style={{
          backgroundColor: "#1A1A1D",
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
              color: "#D3D3D3", // Light gray for the text
              fontFamily: `'Georgia', serif`,
            }}
          >
It’s incredibly easy to use, even for beginners. I was able to create my online store quickly, customize everything to match my brand, and start selling right away. Highly recommend it!          </p>
          <p
            className="font-semibold inline-block px-6 py-2 text-white"
            style={{
              backgroundColor: "#6A1E55", // Updated background color
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
          backgroundColor: "#1A1A1D",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{
            color: "#D3D3D3", // Light gray for the text
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
          backgroundColor: "#1A1A1D",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{
            color: "#D3D3D3", // Light gray for the text
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
                backgroundColor: "#2A2A2D", // Lighter black for closed
              }}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className="font-medium text-lg"
                  style={{
                    color: "#D3D3D3", // Light gray for the text
                  }}
                >
                  {faq.question}
                </span>
                <span className="text-2xl" style={{ color: "#D3D3D3" }}>
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              {openFAQ === index && (
                <div
                  className="px-6 py-4 rounded-b-lg"
                  style={{
                    backgroundColor: "#6A1E55", // Purple for open content
                    color: "#D3D3D3", // Light gray for the text
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
