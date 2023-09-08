import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollToTopButton";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../components/MenProducts";

export default function Men() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [showSizes, setShowSizes] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

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
        className={` flex justify-center p-4 ${
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
          <div className="flex flex-wrap  justify-center p-20 ">
            {products.map((product, index) => (
              <Link key={index} to={`/Men/${index}`}>
                <div
                  key={index}
                  onMouseEnter={() => {
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                  }}
                  className="p-8 m-2 border border-gray-300 rounded-lg"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-44 h-50 object-cover rounded-full mx-auto"
                    />
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
                          <div className="border-2 border-black p-[5px] w-[20%] md:w-[20%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                            <span>S</span>
                          </div>
                          <div className="border-2 border-black p-[5px] w-[20%] md:w-[20%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                            <span>M</span>
                          </div>
                          <div className="border-2 border-black p-[5px] w-[20%] md:w-[20%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                            <span>L</span>
                          </div>
                          <div className="border-2 border-black p-[5px] w-[20%] md:w-[20%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                            <span>XL</span>
                          </div>
                          <div className="border-2 border-black p-[5px] w-[20%] md:w-[30%] text-center  bg-slate-100 hover:bg-black hover:text-slate-100">
                            <span>XXL</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <h2 className="text-lg text-center font-semibold pt-4">
                    {product.title}
                  </h2>
                  <p className="text-lg font-bold text-center">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ScrollTopButton />
      <Footer />
    </>
  );
}
