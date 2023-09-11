import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollToTopButton";
import { initialProducts } from "../components/WomenProducts";
import { CartContext } from "../context/cart.js";
import { notifySuccess } from "../components/notification";
import CartComponent from "../components/CartComponent";

export default function WomenDetails() {
  const { id } = useParams();
  const productDetails = initialProducts[id] || {};
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = () => {
    if (selectedSize) {
      addToCart(productDetails, selectedSize);
      notifySuccess("Added to cart successfully");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5">
        <div className="bg-white rounded-lg p-5 flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="h-2/4 w-2/4 mx-auto sm:mx-0"
            />
          </div>
          <div className="w-full sm:w-1/2 p-5">
            <h1 className="text-3xl font-semibold mb-4">
              {productDetails.title}
            </h1>
            <div className="flex space-x-3 pt-5 items-center">
              <button
                onClick={() => handleSizeClick("S")}
                className={`${
                  selectedSize === "S"
                    ? "bg-black text-slate-100"
                    : "bg-slate-100 hover:bg-black hover:text-slate-100"
                } rounded-full border-2 border-black w-12 h-12 flex items-center justify-center`}
              >
                S
              </button>
              <button
                onClick={() => handleSizeClick("M")}
                className={`${
                  selectedSize === "M"
                    ? "bg-black text-slate-100"
                    : "bg-slate-100 hover:bg-black hover:text-slate-100"
                } rounded-full border-2 border-black w-12 h-12 flex items-center justify-center`}
              >
                M
              </button>
              <button
                onClick={() => handleSizeClick("L")}
                className={`${
                  selectedSize === "L"
                    ? "bg-black text-slate-100"
                    : "bg-slate-100 hover:bg-black hover:text-slate-100"
                } rounded-full border-2 border-black w-12 h-12 flex items-center justify-center`}
              >
                L
              </button>
              <button
                onClick={() => handleSizeClick("XL")}
                className={`${
                  selectedSize === "XL"
                    ? "bg-black text-slate-100"
                    : "bg-slate-100 hover:bg-black hover:text-slate-100"
                } rounded-full border-2 border-black w-12 h-12 flex items-center justify-center`}
              >
                XL
              </button>
              <button
                onClick={() => handleSizeClick("XXL")}
                className={`${
                  selectedSize === "XXL"
                    ? "bg-black text-slate-100"
                    : "bg-slate-100 hover:bg-black hover:text-slate-100"
                } rounded-full border-2 border-black w-12 h-12 flex items-center justify-center`}
              >
                XXL
              </button>
            </div>
            <p className="text-gray-600 pt-4 text-2xl">
              Price: {productDetails.price}
            </p>
            <p className="mt-2 pt-4 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              quam nec nisl congue tincidunt. Integer euismod ex vel laoreet.
            </p>
            <button
              className="w-full p-4 border-2 border-black text-white bg-black"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ScrollTopButton />
      <CartComponent />
      <Footer />
    </>
  );
}
