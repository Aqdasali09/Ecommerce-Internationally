import React, { useState } from "react";

export default function Step3() {
  const [headlines, setHeadlines] = useState([{ text: "", color: "#000000", speed: 50 }]);
  const [banners, setBanners] = useState([]);

  const handleHeadlineChange = (index, field, value) => {
    const updatedHeadlines = [...headlines];
    updatedHeadlines[index][field] = value;
    setHeadlines(updatedHeadlines);
  };

  const addHeadline = () => {
    setHeadlines([...headlines, { text: "", color: "#000000", speed: 50 }]);
  };

  const removeHeadline = (index) => {
    const updatedHeadlines = headlines.filter((_, i) => i !== index);
    setHeadlines(updatedHeadlines);
  };

  const handleBannerUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedBanners = files.map((file) => URL.createObjectURL(file));
    setBanners([...banners, ...uploadedBanners]);
  };

  const removeBanner = (index) => {
    const updatedBanners = banners.filter((_, i) => i !== index);
    setBanners(updatedBanners);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Let the world know you exist!
      </h2>

      {/* Headlines Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Scrolling Headlines
        </h3>
        {headlines.map((headline, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-4 mb-2">
              {/* Text Input */}
              <input
                type="text"
                value={headline.text}
                onChange={(e) =>
                  handleHeadlineChange(index, "text", e.target.value)
                }
                placeholder={`Headline ${index + 1}`}
                className="w-3/4 px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {/* Color Picker */}
              <input
                type="color"
                value={headline.color}
                onChange={(e) =>
                  handleHeadlineChange(index, "color", e.target.value)
                }
                className="w-12 h-12 border-0 cursor-pointer"
                title="Choose headline color"
              />
              {/* Remove Button */}
              <button
                onClick={() => removeHeadline(index)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
            {/* Speed Control */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600">
                Scroll Speed:
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={headline.speed}
                onChange={(e) =>
                  handleHeadlineChange(index, "speed", e.target.value)
                }
                className="w-1/2"
              />
              <span className="text-sm text-gray-600">{headline.speed} px/s</span>
            </div>
          </div>
        ))}
        {/* Add Headline */}
        <button
          onClick={addHeadline}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Add Headline
        </button>
      </div>

      {/* Banners Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Banners</h3>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleBannerUpload}
          className="mb-4"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-32 object-cover rounded border border-gray-300"
              />
              <button
                onClick={() => removeBanner(index)}
                className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-full text-xs hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={() =>
            alert(
              `Headlines: ${JSON.stringify(
                headlines
              )}\nBanners Uploaded: ${banners.length}`
            )
          }
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 shadow transition"
        >
          Save Marketing Settings
        </button>
      </div>
    </div>
  );
}
