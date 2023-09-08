import React from "react";
import { Link } from "react-router-dom";
import { UilSearch, UilUser, UilShoppingBag } from "@iconscout/react-unicons";
function navBar() {
  return (
    <nav className=" p-4 ">
      <div className="container p-4 mx-auto flex items-center justify-between">
        <ul className="flex gap-x-6">
          <li>
            <Link
              to="/"
              className="text-black font-normal hover:text-gray-200 "
            >
              Home
            </Link>
          </li>
          {/* ... Other navigation links ... */}
        </ul>

        <Link to="/" className="text-black text-lg  font-normal  ">
          My Website
        </Link>

        <ul className="flex gap-x-6">
          <li>
            <UilSearch />
          </li>
          <li>
            <UilUser />
          </li>
          <li>
            <UilShoppingBag />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;
