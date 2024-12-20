import React, { useState } from "react";

function Step2({ setStep }) {
  const [storeName, setStoreName] = useState("");
  const [storeSlogan, setStoreSlogan] = useState("");
  const [storeLogo, setStoreLogo] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("rgb(106 30 85)");
  const [secondaryColor, setSecondaryColor] = useState("#22C55E");
  const [background, setBackground] = useState("black");
  const [textColor, setTextColor] = useState("#D8D8E3");
  const [fontStyle, setFontStyle] = useState("Arial");

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStoreLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg"
      style={{ backgroundColor: background, color: textColor, fontFamily: fontStyle }}
    >
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">Customize Your Store</h2>

      <div className="space-y-6">
        {/* Store Name */}
        <div>
          <label className="block font-medium mb-2">Store Name</label>
          <input
            type="text"
            placeholder="Enter store name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-4 py-2 rounded border border-[#6A1E55] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
            style={{ backgroundColor: "#1A1A1D", color: textColor }}
          />
        </div>

        {/* Store Slogan */}
        <div>
          <label className="block font-medium mb-2">Store Slogan</label>
          <input
            type="text"
            placeholder="Enter a catchy slogan"
            value={storeSlogan}
            onChange={(e) => setStoreSlogan(e.target.value)}
            className="w-full px-4 py-2 rounded border border-[#6A1E55] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
            style={{ backgroundColor: "#1A1A1D", color: textColor }}
          />
        </div>

        {/* Primary Color */}
        <div>
          <label className="block font-medium mb-2">Primary Color</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>

        {/* Secondary Color */}
        <div>
          <label className="block font-medium mb-2">Secondary Color</label>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>

        {/* Background Color */}
        <div>
          <label className="block font-medium mb-2">Background Color</label>
          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>

        {/* Text Color */}
        <div>
          <label className="block font-medium mb-2">Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>

        {/* Font Style */}
        <div>
          <label className="block font-medium mb-2">Font Style</label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
            className="w-full px-4 py-2 rounded border border-[#6A1E55] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
            style={{ backgroundColor: "#1A1A1D", color: textColor }}
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-300"
            onClick={() => setStep(1)}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-[#6A1E55] text-[#D8D8E3] rounded hover:bg-[#A64D79] transition duration-300"
            style={{ backgroundColor: primaryColor, color: textColor }}
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
