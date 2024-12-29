import React, { useEffect, useState } from "react";
import "../App.css"; // Ensure the styles are loaded correctly

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor the scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // Show button when scrolled down
      } else {
        setIsVisible(false); // Hide button when scrolled to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-up-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop} // Use the scrollToTop function
    >
      ↑
    </button>
  );
};

export default ScrollUpButton;
