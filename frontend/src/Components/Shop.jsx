import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import CONSTANT_URL from "../../constants";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() })) // Add a random key for sorting
    .sort((a, b) => a.sortKey - b.sortKey) // Sort by random key
    .map(({ sortKey, ...item }) => item); // Remove the random key
};
const Shop = () => {
  const [settings, setSettings] = useState({
    primaryColor: "#4CAF50",
    secondaryColor: "#FF5722",
    backgroundColor: "#F9F9F9",
    textColor: "#333333",
    fontStyle: "sans-serif",
  });

  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [storeName, setStoreName] = useState(""); // To store the store name
  const [banners, setBanners] = useState([]); // To store the banners
  const [cart, setCart] = useState([]); // To store cart items
  const [showCart, setShowCart] = useState(false); // Toggle cart menu

  useEffect(() => {
    // Retrieve cart from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    // Fetch store and theme data
    const fetchStoreData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search); // Get query string from the URL
        const storeId = urlParams.get("storeid"); // Get the value of 'storeid' from the query parameters
        console.log(storeId);

        const token = localStorage.getItem("token");
        const response = await fetch(`${CONSTANT_URL}/api/store/theme`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ storeId: parseInt(storeId) }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch store and theme data");
        }

        const data = await response.json();
        setStoreName(data.storename); // Set the store name from the backend
        setSettings({
          primaryColor: data.theme.primarycolor,
          secondaryColor: data.theme.secondarycolor,
          backgroundColor: data.theme.backgroundcolor,
          textColor: data.theme.textcolor,
          fontStyle: data.theme.fontstyle,
        });
      } catch (error) {
        console.error("Error fetching store and theme data:", error);
      }
    };

    const fetchBanners = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const storeId = urlParams.get("storeid");

        const token = localStorage.getItem("token");
        const response = await fetch(`${CONSTANT_URL}/api/store/banners`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ storeId: parseInt(storeId) }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }

        const data = await response.json();
        setBanners(data); // Set the banners data
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const storeId = urlParams.get("storeid");

        const token = localStorage.getItem("token");
        const response = await fetch(`${CONSTANT_URL}/api/store/Dashboard`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ storeId: parseInt(storeId) }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }

        const data = await response.json();
        console.log(data);
        setProducts(data.products);
        const shuffled = shuffleArray(data.products);
        setFeaturedProducts(shuffled.slice(0, 4)); // Select the first 8 items
    
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchBanners();
    fetchStoreData();
    fetchProducts();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { primaryColor, secondaryColor, backgroundColor, textColor, fontStyle } = settings;

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find((item) => item.id === product.id);

   
        updatedCart.push({ ...product, quantity: 1 });
      

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  const toggleCart = () => setShowCart((prev) => !prev);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: fontStyle,
      }}
    >
      {/* Navbar Section */}
      <div
        className="w-full p-4 flex justify-between items-center"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="text-xl font-bold">{storeName}</div>
        <button className="text-white" onMouseEnter={toggleCart} >
          <i className="fas fa-shopping-cart text-2xl"></i> Cart
        </button>
      </div>

      {/* Cart Section */}
      {showCart && (
        <div
          className="absolute right-0 top-0 w-96 bg-white shadow-lg p-6"
          onMouseLeave={toggleCart}
          style={{
            color: textColor,
            backgroundColor: backgroundColor,
          }}
        >
          <h3 className="text-lg font-semibold">Your Cart</h3>
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center my-2">
                  <div>
                    <p>{item.name}</p>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p>Total: ${totalAmount.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Banner Section */}
      {banners.length > 0 && (
        <Slider {...carouselSettings} className="my-6">
          {banners.map((banner) => (
            <div key={banner.bannerid}>
              <img
                src={banner.imageurl}
                alt={banner.alttext}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </Slider>
      )}

      {/* Featured Products */}
      <div className="my-8 px-6">
        <h2
          className="text-2xl font-bold mb-4"
          style={{
            color: primaryColor,
          }}
        >
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md"
              style={{
                borderColor: secondaryColor,
              }}
            >
              <img
                src={product.productimages[0]?.imageurl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="my-8 px-6">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: primaryColor }}
        >
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md"
              style={{ borderColor: secondaryColor }}
            >
              <img
                src={product.productimages[0]?.imageurl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2">${product.price}</p>
                <button
                  style={{background:settings.secondaryColor}}
                  className="mt-4 px-4 py-2  text-white rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
