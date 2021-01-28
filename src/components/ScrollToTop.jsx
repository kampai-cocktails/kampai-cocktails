import React, { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa"; // possible a paid version
import { FaArrowCircleUp } from "react-icons/fa";
import "../styles/App.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollToTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollToTop;
