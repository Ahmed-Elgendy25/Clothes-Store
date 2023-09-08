import React, { useEffect, useState } from "react";

// Check If Element Is In Viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + rect.height ||
        document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Make The Page Scroll To The Top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollTopVisibility = () => {
    if (window.scrollY <= 300) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  const handleScroll = () => {
    scrollTopVisibility();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollTopVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div
          className="fixed bottom-10 right-10 p-2 rounded-full  bg-black hover:bg-pink-500 cursor-pointer transition duration-300"
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up text-white text-xl"></i>
        </div>
      )}
    </>
  );
};

export default ScrollTopButton;
