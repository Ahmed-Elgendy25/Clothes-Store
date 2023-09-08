//Import React & components//
import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import Shop from "../components/Shop";
import ShopCarousel from "../components/ShopCarousel";

//import photos//

//* FOR SHOP.JS COMPONENT */

//women//
import tees from "../photos/teesWoman.jpg";
import polo from "../photos/poloWoman.jpg";
import sweatShirt from "../photos/sweatWoman.jpg";
import shoes from "../photos/shoes.jpg";
//Men //
import menShirt from "../photos/teesMan.jpg";
import poloShirt from "../photos/poloMan.jpg";
import sweatShirt2 from "../photos/sweatMan2.webp";
import pants from "../photos/shoes3.jpg";
import ShopCarousel2 from "../components/ShopCarousel2";

import CartComponent from "../components/CartComponent";

function Shopping() {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <Shop
        Shirt={menShirt}
        poloShirt={poloShirt}
        sweatShirt={sweatShirt2}
        pants={pants}
        headerText="Shop Men's"
      />
      <ShopCarousel />

      <Shop
        Shirt={tees}
        poloShirt={polo}
        sweatShirt={sweatShirt}
        pants={shoes}
        headerText="Shop Women's"
      />

      <ShopCarousel2 />
      <CartComponent />
    </div>
  );
}

export default Shopping;

// womanSweat,
// womanSweat2,
// womanSweat3,
// womanSweat4,
// womanTee,
// womanTee2,
// WomanTee3,
