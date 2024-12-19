import React from 'react'

export default function StepTracker({ Step,setStep }) {
  console.log("Step"+Step);
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={()=>setStep(1)}
        className={`px-4 py-2 rounded ${
          Step === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        Step 1
      </button>
      <button
       onClick={()=>setStep(2)}
        className={`px-4 py-2 rounded ${
          Step === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        Step 2
      </button>
      <button
       onClick={()=>setStep(3)}
        className={`px-4 py-2 rounded ${
          Step === 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        Step 3
      </button>
    </div>
  );
}
