import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollToTopButton";
import { initialProducts } from "../components/MenProducts";

export default function MenDetails() {
  const { id } = useParams();
  const productDetails = initialProducts[id] || {};

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
              <span className="hover:bg-black hover:text-slate-100 rounded-full border-2 w-12 h-12 flex items-center justify-center">
                XXS
              </span>
              <span className="hover:bg-black hover:text-slate-100 rounded-full border-2 w-12 h-12 flex items-center justify-center">
                XS
              </span>
              <span className="hover:bg-black hover:text-slate-100 rounded-full border-2 w-12 h-12 flex items-center justify-center">
                S
              </span>
              <span className="hover:bg-black hover:text-slate-100 rounded-full border-2 w-12 h-12 flex items-center justify-center">
                M
              </span>
              <span className="hover:bg-black hover:text-slate-100 rounded-full border-2 w-12 h-12 flex items-center justify-center">
                XL
              </span>
            </div>
            <p className="text-gray-600 pt-4 text-2xl">
              Price: {productDetails.price}
            </p>
            <p className="mt-2 pt-4 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              quam nec nisl congue tincidunt. Integer euismod ex vel laoreet.
            </p>
            <button className="w-full p-4 border-2 border-black text-white bg-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ScrollTopButton />
      <Footer />
    </>
  );
}
