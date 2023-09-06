import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

//WOMEN//

import womanSweat from "../photos/clothesWoman/sweat1.jpg";
import womanSweat2 from "../photos/clothesWoman/sweat2.jpg";
import womanSweat3 from "../photos/clothesWoman/sweat3.jpg";
import womanSweat4 from "../photos/clothesWoman/sweat4.jpg";
import womanTee from "../photos/clothesWoman/tee1.jpg";
import womanTee2 from "../photos/clothesWoman/tee2.jpg";
import womanTee3 from "../photos/clothesWoman/tee3.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ShopCarousel2() {
  const [dataWomen, setDataWomen] = useState([
    {
      image: womanSweat,
      title: "Halloween Dropped Shoulder Drawstring Long Sleeve Crop Hoodie",
      price: 251.06,
    },
    {
      image: womanSweat2,
      title:
        "Solid Dropped Shoulder Kangaroo Pocket Long Sleeve Halloween Hoodie",
      price: 1317.73,
    },
    {
      image: womanSweat3,
      title: "Cross Geometric Pattern Crew Neck Long Sleeve Loose Sweatshir ",
      price: 211.83,
    },
    {
      image: womanSweat4,
      title: "Tribal Pattern Patchwork Long Sleeve Crew Neck Sweatshirt ",
      price: 815.62,
    },
    {
      image: womanTee,
      title: "Car Letters Graphic Short Sleeve Loose Crew Neck T-shirt",
      price: 595.94,
    },
    {
      image: womanTee2,
      title: "Butterfly Graphic Short Sleeve Crew Neck Casual T-shirt",
      price: 627.32,
    },
    {
      image: womanTee3,
      title: "Solid Half-collar Long Sleeve T-shirt For Women",
      price: 815.62,
    },
  ]);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [showSizes, setShowSizes] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => {
        console.log(res.data);
        setDataWomen((prevData) => [
          ...prevData.slice(0, 7), // Keep the first 7 local images
          ...res.data.map((item) => ({
            image: item.image, // Assuming the API returns an 'image' field
            title: item.title, // Assuming the API returns a 'title' field
            price: item.price, // Assuming the API returns a 'price' field
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Carousel responsive={responsive} className="my-[5rem]">
      {dataWomen.map((item, index) => (
        <div
          key={index}
          className="h-full flex flex-col items-center justify-evenly space-y-3 mx-3 md:px-10 relative"
          onMouseEnter={() => {
            setHoverIndex(index);
          }}
          onMouseLeave={() => {
            setHoverIndex(null);
          }}
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:max-w-[30rem]  object-cover"
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
                  <div className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                    <span>S</span>
                  </div>
                  <div className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                    <span>M</span>
                  </div>
                  <div className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                    <span>L</span>
                  </div>
                  <div className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100">
                    <span>XL</span>
                  </div>
                  <div className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center  bg-slate-100 hover:bg-black hover:text-slate-100">
                    <span>XXL</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full h-auto flex flex-col justify-center items-center">
            <p className="text-sm md:text-lg md:font-normal text-center">
              {item.title}
            </p>
            <p className="text-sm md:text-lg md:font-normal text-center p-2">
              {`${item.price.toFixed(2)} E£`}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default ShopCarousel2;

//E£
