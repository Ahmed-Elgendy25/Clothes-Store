import React from "react";
import menShirt from "../photos/sincerely-media-Cy2arPC1Owg-unsplash.jpg";
import poloShirt from "../photos/polo.jpg";
import sweatShirt from "../photos/sweatShirt.jpg";
import pants from "../photos/shoes3.jpg";
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
      <div className="w-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:gap-5 gap-2 p-5 md:p-16">
        <div className="relative">
          <img
            src={menShirt}
            alt="menShirt"
            className="w-[100%] h-auto object-contain"
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl underline underline-offset-[3px] text-white p-2">
            Tees
          </h3>
        </div>
        <div className="relative">
          <img
            src={poloShirt}
            alt="menPoloShirt"
            className="w-[100%] h-auto object-contain"
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  underline underline-offset-[3px]  text-white p-2">
            Polo Shirts
          </h3>
        </div>
        <div className="relative">
          <img
            src={sweatShirt}
            alt="menSweatShirt"
            className="w-[100%] h-auto object-contain "
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  underline underline-offset-[3px] text-white p-2">
            Sweatshirts
          </h3>
        </div>
        <div className="relative">
          <img
            src={pants}
            alt="menPants"
            className="w-[100%] h-full object-cover"
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  text-white underline underline-offset-[3px] p-2">
            Pants
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Shop;
