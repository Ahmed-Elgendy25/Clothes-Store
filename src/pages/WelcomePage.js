import React from "react";
import videoBG from "../videos/SnapSave.io-INSILENCE 2023 SPRING_SUMMER Campaign Film-v2-(1080p).mp4";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={videoBG}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        <Link
          to={"/shopping"}
          className="text-white font-normal  border-2 w-[10rem] p-5 text-center"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
