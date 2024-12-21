import React, { useState } from "react";
import Step1 from "./PageBuilder/Step1"; // Import your Step1 component
import Step2 from "./PageBuilder/Step2"; // Import your Step2 component
import Step3 from "./PageBuilder/Step3"; // Import your Step3 component
import StepTracker from "./PageBuilder/StepTracker";

export default function MainPage() {
  const [storeData, setStoreData] = useState({
    storeType: "E-commerce",
    storeName: "Bobby's Boutique",
    storeDescription: "A store that offers unique and trendy fashion.",
    slogan: "Style Your Life",
    logo: "https://via.placeholder.com/150", // Replace with a real logo link if necessary
    primaryColor: "rgb(106 30 85)", // Purple color
    secondaryColor: "#22C55E", // Green color
    background: "black",
    textColor: "#D8D8E3", // Light gray color
    fontStyle: "Arial",
    headlines: [
      { text: "Hi", color: "black", speed: 50 },
      { text: "Welcome to Bobby's Boutique!", color: "red", speed: 30 }
    ],
    banners: [
      "https://via.placeholder.com/500x200.png?text=Banner+1", // Placeholder image link
      "https://via.placeholder.com/500x200.png?text=Banner+2", // Placeholder image link
      "https://via.placeholder.com/500x200.png?text=Banner+3" // Placeholder image link
    ]
  });

  const [step, setStep] = useState(1); // Track the current step

  const handleSubmit = () => {
    console.log("Form submitted");
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-[#D8D8E3] font-[Arial]">
      {/* Step Tracker */}
     
    </div>
  );
}
