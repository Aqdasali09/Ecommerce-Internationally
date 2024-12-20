import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function Step1({ setStep, storeData, setStoreData }) {
  const [selectedStore, setSelectedStore] = useState(storeData?.storeType || null);
  const [formVisible, setFormVisible] = useState(false);
  const [storeName, setStoreName] = useState(storeData?.storeName || "");
  const [storeDescription, setStoreDescription] = useState(storeData?.storeDescription || "");

  const storeSelectionRef = useRef(null);
  const formRef = useRef(null);

  const storeTypes = storeData?.storeTypes || [
    { id: 1, name: "Clothing & Apparel Store", img: "../../public/clothing.png" },
    { id: 2, name: "Electronics Store", img: "../../public/clothing.png" },
    { id: 3, name: "Health & Beauty Store", img: "../../public/clothing.png" },
    { id: 4, name: "Home & Furniture Store", img: "../../public/clothing.png" },
    { id: 5, name: "Sports & Fitness Store", img: "../../public/clothing.png" },
    { id: 6, name: "Others", img: "../../public/clothing.png" },
  ];

  useEffect(() => {
    if (formVisible) {
      gsap.to(storeSelectionRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        onComplete: () => {
          storeSelectionRef.current.style.display = "none";
          formRef.current.style.display = "block";
          gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    } else {
      gsap.to(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        onComplete: () => {
          formRef.current.style.display = "none";
          storeSelectionRef.current.style.display = "block";
          gsap.to(storeSelectionRef.current, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.5,
          });
        },
      });
    }
  }, [formVisible]);

  const handleStoreSelection = (storeId) => {
    setSelectedStore(storeId);
    setStoreData((prevData) => ({ ...prevData, storeType: storeId }));
    setFormVisible(true);
  };

  const handleStoreNameChange = (e) => {
    const name = e.target.value;
    setStoreName(name);
    setStoreData((prevData) => ({ ...prevData, storeName: name }));
  };

  const handleStoreDescriptionChange = (e) => {
    const description = e.target.value;
    setStoreDescription(description);
    setStoreData((prevData) => ({ ...prevData, storeDescription: description }));
  };

  const handleBack = () => {
    setFormVisible(false);
  };

  const handleNext = () => {
    setStoreData((prevData) => ({
      ...prevData,
      storeName,
      storeDescription,
    }));
    setStep(2);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto rounded-lg shadow-lg bg-black text-[#D8D8E3] relative">
      {/* Store Selection Section */}
      <div ref={storeSelectionRef} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-6 text-[#D8D8E3]">Choose Store Type</h2>
        {storeTypes.map((store) => (
          <div
            key={store.id}
            className={`flex items-center rounded p-4 cursor-pointer transition-all duration-300 ${
              selectedStore === store.id
                ? "bg-[#6A1E55] text-[#D8D8E3] border-[#A64D79] border-l-4"
                : "bg-[#1A1A1D] hover:bg-[#2A2A2F] border border-[#6A1E55]"
            }`}
            onClick={() => handleStoreSelection(store.id)}
          >
            <img src={store.img} alt={store.name} className="h-10 w-10 mr-4" />
            <span className={`font-semibold ${selectedStore === store.id ? "text-[#D8D8E3]" : "text-[#D8D8E3]"}`}>
              {store.name}
            </span>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div ref={formRef} className="space-y-4" style={{ transform: `translateY(${formVisible ? "0" : "50px"})` }}>
        <h3 className="text-xl font-semibold mb-4 text-[#D8D8E3]">Store Details</h3>
        <form className="space-y-4">
          {/* Site Category */}
          <div>
            <label className="block text-sm font-medium text-[#D8D8E3]">Site Category</label>
            <input
              type="text"
              value={storeTypes.find((store) => store.id === selectedStore)?.name || ""}
              readOnly
              className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:outline-none"
            />
          </div>

          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium text-[#D8D8E3]">Store Name</label>
            <input
              type="text"
              value={storeName}
              onChange={handleStoreNameChange}
              placeholder="Enter your store name"
              className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
            />
          </div>

          {/* Store Description */}
          <div>
            <label className="block text-sm font-medium text-[#D8D8E3]">Store Description</label>
            <textarea
              value={storeDescription}
              onChange={handleStoreDescriptionChange}
              placeholder="Enter a brief description of your store"
              className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
              rows={4}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 bg-gray-600 text-[#D8D8E3] rounded hover:bg-gray-700 transition duration-300"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-[#6A1E55] text-[#D8D8E3] rounded hover:bg-[#A64D79] transition duration-300"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1;
