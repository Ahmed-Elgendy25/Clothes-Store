import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { initialProducts } from "../components/MenProducts";
import { notifySuccess } from "../components/notification";
// CONTEXT
import { CartContext } from "../context/cart.js";
import CartComponent from "../components/CartComponent";
export default function Men() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [showSizes, setShowSizes] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    notifySuccess("Added to cart successfully");
  };
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);

    const filteredProducts = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );

    setProducts(filteredProducts);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain distance to fix the search input
      if (window.scrollY > 100) {
        setIsSearchFixed(true);
      } else {
        setIsSearchFixed(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <section className="flex flex-row mb-7">
        <div className="text-center mt-12 lg:w-1/2 md:w-1/2 sm:w-1/2 mx-auto ">
          <h1 className=" text-6xl text-center">MEN HOODIES & SWEATSHIRTS</h1>
          <p className="font-serif text-2xl mt-6 text-center">
            A selection of our hoodies and sweatshirts, designed for casual
            comfort on and off the bike.
          </p>
        </div>
      </section>
      <div
        className={`flex justify-center p-4 ${
          isSearchFixed
            ? "fixed top-0 left-0 right-0 bg-white shadow-md z-50"
            : ""
        }`}
      >
        <div className="w-2/4">
          <input
            onChange={handleSearch}
            value={searchTerm}
            placeholder="What are you looking for?"
            type="text"
            className="w-full p-4 text-center font-serif text-xl border-slate-950 border-2"
          />
        </div>
      </div>
      <section className="mt-15">
        <div className="p-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setHoverIndex(index);
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                }}
                className="p-8 border border-gray-300 rounded-lg h-full flex flex-col items-center justify-evenly space-y-3 mx-3 md:px-10 relative"
              >
                <div className="relative">
                  <Link key={index} to={`/Women/${index}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full md:max-w-[30rem] object-cover"
                    />
                  </Link>

                  <div
                    onMouseEnter={() => setShowSizes(true)}
                    onMouseLeave={() => setShowSizes(false)}
                  >
                    {showSizes === false ? (
                      <div
                        className={`absolute w-full left-0 bottom-0 flex justify-center items-center p-2 bg-black text-white ${
                          hoverIndex === index ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300 ease-in-out`}
                      >
                        <span>+ Quick Add</span>
                      </div>
                    ) : (
                      <div
                        className={`absolute w-full left-0 bottom-0 flex justify-center space-x-0 items-center p-2 bg-transparent text-black ${
                          hoverIndex === index ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300 ease-in-out`}
                      >
                        <button
                          onClick={() => {
                            addToCart(product, "S");
                            handleClick();
                          }}
                          className="border-2 border-black p-[5px] w-full md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                        >
                          S
                        </button>
                        <button
                          onClick={() => {
                            addToCart(product, "M");
                            handleClick();
                          }}
                          className="border-2 border-black p-[5px] w-full md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                        >
                          M
                        </button>
                        <button
                          onClick={() => {
                            addToCart(product, "L");
                            handleClick();
                          }}
                          className="border-2 border-black p-[5px] w-full md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                        >
                          L
                        </button>
                        <button
                          onClick={() => {
                            addToCart(product, "XL");
                            handleClick();
                          }}
                          className="border-2 border-black p-[5px] w-full md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                        >
                          XL
                        </button>
                        <button
                          onClick={() => {
                            addToCart(product, "XXL");
                            handleClick();
                          }}
                          className="border-2 border-black p-[5px] w-full md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                        >
                          XXL
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <h2 className="text-lg text-center font-semibold pt-4">
                  {product.title}
                </h2>
                <p className="text-lg font-bold text-center">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CartComponent />
      <Footer />
    </>
  );
}
