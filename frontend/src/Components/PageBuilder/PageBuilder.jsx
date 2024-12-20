import React, { useState } from "react";
import SideBar from "./SideBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepTracker from "./StepTracker";
function PageBuilder() {
  const [Step, setStep] = useState(1);
  return (
<>
<div className="flex min-h-screen bg-[#000000db]">
      {/* Sidebar */}

<SideBar />
      {/* Main Content */}
      <div className="w-2/3 p-8 h-[96vh] overflow-auto">
        {/* Step Indicator */}
        <StepTracker Step={Step} setStep={setStep}  />
        {Step === 1 && <Step1 setStep={setStep} />}
        {Step === 2 && <Step2 />}
        {Step === 3 && <Step3 />}
</div>
</div>
</>

);
}

export default PageBuilder;
