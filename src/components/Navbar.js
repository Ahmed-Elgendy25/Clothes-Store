import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  UilSearch,
  UilUser,
  UilShoppingBag,
  UilBars,
} from "@iconscout/react-unicons";
import { CartContext } from "../context/cart.js";

function NavBar() {
  const { showModal, setShowModal } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container p-4 mx-auto flex items-center justify-between">
        {/* Mobile Menu Icon */}
        {/* Mobile Menu Icon */}
        <div className="lg:hidden  p-4">
          <UilBars
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Logo */}
        <Link to="/" className="text-black text-lg font-normal">
          My Website
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-x-6 ${menuOpen ? "flex" : "hidden"}`}
        >
          <li>
            <Link
              to="/shopping"
              className="text-black font-normal hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              className="text-black font-normal hover:text-gray-200"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/men"
              className="text-black font-normal hover:text-gray-200"
            >
              Men
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-0 left-0 right-0 bg-white w-full ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="p-4 flex flex-col gap-y-2">
            <li>
              <Link
                to="/"
                className="text-black font-normal hover:text-gray-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="text-black font-normal hover:text-gray-200"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className="text-black font-normal hover:text-gray-200"
              >
                Men
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <ul className="hidden lg:flex gap-x-6">
          <li>
            <UilSearch />
          </li>
          <li>
            <UilUser />
          </li>
          <li onClick={() => setShowModal(true)}>
            <UilShoppingBag className=" cursor-pointer" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
