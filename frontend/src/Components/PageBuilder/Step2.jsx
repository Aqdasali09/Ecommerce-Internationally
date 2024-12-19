import React, { useState } from "react";

function Step2() {
  const [storeName, setStoreName] = useState("");
  const [storeSlogan, setStoreSlogan] = useState("");
  const [storeLogo, setStoreLogo] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState("#22C55E");
  const [background, setBackground] = useState("#FFFFFF");
  const [fontStyle, setFontStyle] = useState("Arial");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });
  const [darkMode, setDarkMode] = useState(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStoreLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg transition-colors ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
      style={{
        border: "2px solid #6A1E55",
      }}
    >
      {/* Dark/Light Theme Toggle */}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-gray-700 font-medium">
          {darkMode ? "Dark Theme" : "Light Theme"}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700"></div>
        </label>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center">Customize Your Store</h2>

      <div className="space-y-6">
        {/* Store Name */}
        <div>
          <label className="block font-medium mb-2">Store Name</label>
          <input
            type="text"
            placeholder="Enter store name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              border: "1px solid #6A1E55",
              backgroundColor: "#000",
              color: "#d8d8e3",
            }}
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
            className="w-full px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              border: "1px solid #6A1E55",
              backgroundColor: "#000",
              color: "#d8d8e3",
            }}
          />
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => alert("Store customization saved!")}
            className="px-6 py-3 font-semibold rounded shadow transition"
            style={{
              backgroundColor: "#6A1E55",
              color: "#fff",
              border: "1px solid #6A1E55",
            }}
          >
            Save Customization
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
