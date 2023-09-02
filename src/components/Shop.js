import React from "react";
import menShirt from "../photos/sincerely-media-Cy2arPC1Owg-unsplash.jpg";
import poloShirt from "../photos/polo.jpg";
import sweatShirt from "../photos/sweatShirt.jpg";
import pants from "../photos/pants.jpg";
function Shop() {
  return (
    <div className="">
      <header className="py-3">
        <div className="container py-3 mx-auto flex items-center justify-center ">
          <h2 className="text-2xl my-3">Shop Men's</h2>
        </div>
      </header>
      <div className="flex justify-center">
        <hr className="w-[24rem] md:w-[100rem]" />
      </div>
      <div className="w-full  grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:gap-5 gap-2 p-5 md:p-16">
        <img
          src={menShirt}
          alt="menShirt"
          className=" w-[100%] h-auto object-contain"
        />
        <img
          src={poloShirt}
          alt="menPoloShirt"
          className="w-[100%] h-auto object-contain"
        />
        <img
          src={sweatShirt}
          alt="menSweatShirt"
          className="w-[100%] h-auto object-contain"
        />
        <img
          src={pants}
          alt="menPants"
          className="w-[100%] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Shop;
