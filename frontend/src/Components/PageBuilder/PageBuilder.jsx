import React, { useState } from "react";
import CONSTANT_URL from "../../../constants";
import SideBar from "./SideBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepTracker from "./StepTracker";



function PageBuilder() {
  const [step, setStep] = useState(1);


  // Centralized state for all the data
  const [storeData, setStoreData] = useState({
    storeType: null,
    storeName: "",
    storeDescription: "",
    slogan: "",
    logo: null,
    primaryColor: "rgb(106 30 85)",
    secondaryColor: "#22C55E",
    background: "black",
    textColor: "#D8D8E3",
    fontStyle: "Arial",
    headlines: [],
    banners: [],
  });
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
  
      // Add all non-file fields to FormData
      formData.append("storeType", storeData.storeType);
      formData.append("storeName", storeData.storeName);
      formData.append("storeDescription", storeData.storeDescription);
      formData.append("slogan", storeData.slogan);
      formData.append("primaryColor", storeData.primaryColor);
      formData.append("secondaryColor", storeData.secondaryColor);
      formData.append("background", storeData.background);
      formData.append("textColor", storeData.textColor);
      formData.append("fontStyle", storeData.fontStyle);
  
      // Add `headlines` array as a stringified JSON
      formData.append("headlines", JSON.stringify(storeData.headlines));
  
      // Add files (logo and banners) to FormData
      if (storeData.logo) {
        formData.append("logo", storeData.logo);
      }
      if (storeData.banners && storeData.banners.length > 0) {
        console.log(storeData.banners)
        storeData.banners.forEach((file, index) => {
          formData.append(`banners`, file); // Include each file
        });
      }
      const token = localStorage.getItem("token");
      // Make API call
      const response = await fetch(`${CONSTANT_URL}/api/store/save-store`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`, // Adding the token to the Authorization header
        },
        body: formData, // Send FormData
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log("Store data submitted successfully:", result);
        } else {
        console.error("Error submitting store data:", result.message);
        alert("Error saving store data!");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred while submitting the store data.");
    }
  };
  
  return (
    <div className="flex min-h-screen bg-[#000000db]">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="w-2/3 p-8 h-[96vh] overflow-auto">
        {/* Step Indicator */}
        <StepTracker Step={step} setStep={setStep} />
        {step === 1 && <Step1 setStep={setStep} storeData={storeData} setStoreData={setStoreData} />}
        {step === 2 && <Step2 setStep={setStep} storeData={storeData} setStoreData={setStoreData} />}
        {step === 3 && <Step3 setStep={setStep} storeData={storeData} handleSubmit={handleSubmit} setStoreData={setStoreData} />}
      </div>
    </div>
  );
}

export default PageBuilder;
