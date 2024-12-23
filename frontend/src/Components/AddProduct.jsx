import React, { useState,useEffect } from "react";
import CONSTANT_URL from "../../constants";


function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
   
  };
  useEffect(() => {
    if (image) {
      console.log(image); // Logs updated image when state changes
    }
  }, [image]); 
  const handleSubmit = async (e) => {
    alert("SS")
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);


    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${CONSTANT_URL}/api/store/save-product`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-full h-full bg-black">
    <div className="p-8 max-w-4xl mx-auto rounded-lg shadow-lg bg-black text-[#D8D8E3]">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
            rows={4}
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:ring-2 focus:ring-[#A64D79] focus:outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-[#D8D8E3]">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 rounded border border-[#6A1E55] bg-[#1A1A1D] text-[#D8D8E3] focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-3 bg-[#6A1E55] text-[#D8D8E3] rounded hover:bg-[#A64D79] transition duration-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
const styles = {
  container: { padding: "20px" },
  header: { fontSize: "24px", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  label: { fontWeight: "bold" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  textarea: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" },
};

export default AddProduct;
