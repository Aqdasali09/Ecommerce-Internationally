import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/16/solid";

export default function SideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storeDescription, setStoreDescription] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleContinue = () => {
    console.log("Store Description:", storeDescription);
    // Add further logic for handling the description
    handleCloseModal();
  };

  return (
    <div className="w-1/3 bg-[#1A1A1D] flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-[#DBD8E3] text-center mb-6">
        Build Your Store in Three Easy Steps
      </h1>
      <button
        className="relative flex items-center gap-3 bg-gradient-to-r from-[#6A1E55] to-[#A64D79] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[#A64D79]/50 transition-all duration-300 ease-out animate-pulse-slow"
        onClick={handleOpenModal}
      >
        <span className="relative z-10">Let AI do this for me</span>
        <SparklesIcon
          className="h-6 w-6 text-[#6A1E55] animate-spin-slow"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute inset-0 bg-[#A64D79] opacity-20 rounded-full blur-2xl"></div>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1A1A1D] bg-opacity-80 z-50">
          <div className="bg-[#3B1C32] p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-[#DBD8E3]">
              Describe Your Store
            </h2>
            <textarea
              className="w-full border border-[#6A1E55] bg-[#1A1A1D] text-[#DBD8E3] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A64D79] mb-4"
              rows="4"
              placeholder="Write a brief description for your store..."
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-[#6A1E55] text-[#DBD8E3] px-4 py-2 rounded-lg border border-[#A64D79] hover:bg-[#A64D79] transition"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#A64D79] text-[#DBD8E3] px-4 py-2 rounded-lg border border-[#6A1E55] hover:bg-[#6A1E55] transition"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
