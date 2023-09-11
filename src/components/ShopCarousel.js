import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { notifySuccess } from "../components/notification";
import { Link } from "react-router-dom";
/* FOR shopCarousel.js COMPONENT */
//MEN//
import shirt1 from "../photos/clothesMen/shirt.jpg";
import shirt2 from "../photos/clothesMen/shirt2.jpg";
import shirt3 from "../photos/clothesMen/shirt3.jpg";
import shirt4 from "../photos/clothesMen/shirt4.jpg";
import shirt5 from "../photos/clothesMen/shirt5.jpg";
import trousiers from "../photos/clothesMen/trousiers.jpg";
import jacket from "../photos/clothesMen/jacket.jpg";

//CONTEXT//
import { CartContext } from "../context/cart.js";
import { v4 as uuidv4 } from "uuid";

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

function ShopCarousel() {
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    notifySuccess("Added to cart successfully");
  };
  const [dataMen, setDataMen] = useState([
    { image: shirt1, title: "Black T-Shirt", price: 722.12, id: uuidv4() },

    {
      image: shirt2,
      title: "Mens Chinese Myth Print Lapel Collar Shirts",
      price: 500.12,
      id: uuidv4(),
    },
    {
      image: shirt3,
      title: "Mens Ethnic Geometric Printed Front Buttons Long Sleeve Jackets",
      price: 722.12,
      id: uuidv4(),
    },
    {
      image: shirt4,
      title: "Mens Plaid Printed Corduroy Chest Pocket Buttons Shirt Jackets",
      price: 800.12,
      id: uuidv4(),
    },
    {
      image: shirt5,
      title:
        "Mens Side Stripe Character Embroidery Zip Jacket Corduroy Two Pieces Outfits",
      price: 665.9,
      id: uuidv4(),
    },
    {
      image: trousiers,
      title: "Mens Contrast Piped Design Zip Pocket Street Cuffed Pants",
      price: 650.12,
      id: uuidv4(),
    },
    {
      image: jacket,
      title:
        "Mens Demon Face Letter Baseball Collar Pocket Long Sleeve Jackets",
      price: 600.12,
      id: uuidv4(),
    },
  ]);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [showSizes, setShowSizes] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => {
        console.log(res.data);
        setDataMen((prevData) => [
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
      {dataMen.map((item, index) => (
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
            <Link key={index} to={`/Men/${index}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:max-w-[30rem]  object-cover"
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
                      addToCart(item, "S");
                      handleClick();
                    }}
                    className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                  >
                    S
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item, "M");
                      handleClick();
                    }}
                    className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                  >
                    M
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item, "L");
                      handleClick();
                    }}
                    className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                  >
                    L
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item, "XL");
                      handleClick();
                    }}
                    className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                  >
                    XL
                  </button>
                  <button
                    onClick={() => {
                      addToCart(item, "XXL");
                      handleClick();
                    }}
                    className="border-2 border-black p-[5px] w-[20%] md:w-[15%] text-center bg-slate-100 hover:bg-black hover:text-slate-100"
                  >
                    XXL
                  </button>
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

export default ShopCarousel;

//E£
