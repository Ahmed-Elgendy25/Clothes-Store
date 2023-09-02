import React from "react";
import { Carousel } from "antd";
import WomanVideo from "../videos/SnapSave.io-CINEMATIC PORTRAIT STREET STYLE _ Sony A7C _ Batis 25mm f2 _ BROLL-(1080p60)-v2-.mp4";
import manImage from "../photos/man.jpg";

const CarouselComponent = () => {
  return (
    <Carousel autoplay dotPosition="bottom" className="w-full h-[50rem]">
      <div className="w-full h-[50rem] relative flex">
        <img
          className="w-full h-full object-cover"
          src={manImage}
          alt="manImage"
        />
        <div className="flex flex-col justify-center items-center sm:items-end absolute inset-0 ">
          <div className="p-6 sm:p-16 mx-5 sm:mx-10 flex-col relative">
            <h1 className="text-4xl sm:text-6xl text-white my-3">
              THE AO SERIES
            </h1>
            <h2 className="text-center sm:text-end text-white my-3">
              Staple Comfort. Always Versatile.
            </h2>

            <button className="text-sm sm:text-base font-sans font-bold mt-3 sm:mt-5 bg-white text-black rounded-md p-3 sm:p-4 absolute right-2 sm:right-12 -bottom-6 sm:bottom-0">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[50rem] relative">
        <video
          className="w-full h-full object-cover"
          src={WomanVideo}
          autoPlay
          loop
          muted
        />
        <h1 className="text-center text-white font-lemon-milk absolute top-1/2 left-1/2  z-30">
          Hello
        </h1>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
