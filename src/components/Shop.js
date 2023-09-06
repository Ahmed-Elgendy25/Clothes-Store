import React from "react";

function Shop({ Shirt, poloShirt, sweatShirt, pants, headerText }) {
  return (
    <div className="">
      <header className="py-3">
        <div className="container py-3 mx-auto flex items-center justify-center ">
          <h2 className="text-2xl my-3">{headerText}</h2>
        </div>
      </header>
      <div className="flex justify-center">
        <hr className="w-[24rem] md:w-[100rem]" />
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:gap-5 gap-2 p-5 md:p-16">
        <div className="relative">
          <img
            src={Shirt}
            alt="t-Shirts"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl underline underline-offset-[3px] text-white p-2">
            Tees
          </h3>
        </div>
        <div className="relative">
          <img
            src={poloShirt}
            alt="poloShirt"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  underline underline-offset-[3px]  text-white p-2">
            Polo Shirts
          </h3>
        </div>
        <div className="relative">
          <img
            src={sweatShirt}
            alt="sweatShirt"
            className="w-full h-full object-cover "
          />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  underline underline-offset-[3px] text-white p-2">
            Sweatshirts
          </h3>
        </div>
        <div className="relative">
          <img src={pants} alt="Pants" className="w-full h-full object-cover" />
          <h3 className="absolute bottom-0  xl:bottom-5 xl:left-2 xl: text-xl  text-white underline underline-offset-[3px] p-2">
            Pants
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Shop;
