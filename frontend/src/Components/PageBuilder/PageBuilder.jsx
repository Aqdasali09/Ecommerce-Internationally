import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import SideBar from "./SideBar";
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
  const handleSubmit=()=>{
    console.log(storeData);
  }
  return (
    <div className="flex min-h-screen bg-[#000000db]">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="w-2/3 p-8 h-[96vh] overflow-auto">
        {/* Step Indicator */}
        <StepTracker step={step} setStep={setStep} />
        {step === 1 && <Step1 setStep={setStep} storeData={storeData} setStoreData={setStoreData} />}
        {step === 2 && <Step2 setStep={setStep} storeData={storeData} setStoreData={setStoreData} />}
        {step === 3 && <Step3 setStep={setStep} storeData={storeData} handleSubmit={handleSubmit} setStoreData={setStoreData} />}
      </div>
    </div>
  );
}

export default PageBuilder;
