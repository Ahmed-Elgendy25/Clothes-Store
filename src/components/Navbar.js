import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UilSearch, UilUser, UilShoppingBag } from "@iconscout/react-unicons";
import { CartContext } from "../context/cart.js";

function NavBar() {
  const { showModal, setShowModal } = useContext(CartContext);

  return (
    <nav className="p-4">
      <div className="container p-4 mx-auto flex items-center justify-between">
        <ul className="flex gap-x-6">
          <li>
            <Link to="/" className="text-black font-normal hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/women" className="text-black font-normal hover:text-gray-200">
              Women
            </Link>
          </li>
          <li>
            <Link to="/men" className="text-black font-normal hover:text-gray-200">
              Men
            </Link>
          </li>
        </ul>

        <Link to="/" className="text-black text-lg font-normal">
          My Website
        </Link>

        <ul className="flex gap-x-6">
          <li>
            <UilSearch />
          </li>
          <li>
            <UilUser />
          </li>
          <li onClick={() => setShowModal(true)}>
            <UilShoppingBag />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
